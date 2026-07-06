const SAVE_URL = "/__i18n_save__";

const MARK = "\u2060";

let activeEl: HTMLElement | null = null;
let hoverKey: string | null = null;

function decodeMeta(encoded: string): string {
  return encoded
    .split("\u200D")
    .map((part) => String.fromCharCode(parseInt(part.replace(/\u200B/g, "0").replace(/\u200C/g, "1"), 2)))
    .join("");
}

export function enableEditing() {
  document.addEventListener("mouseover", onHover, false);
  document.addEventListener("mouseout", onHoverOut, false);
  document.addEventListener("click", onClick, false);
  document.addEventListener("copy", onCopy, true);
}

export function disableEditing() {
  document.removeEventListener("mouseover", onHover, false);
  document.removeEventListener("mouseout", onHoverOut, false);
  document.removeEventListener("click", onClick, false);
  document.removeEventListener("copy", onCopy, true);
  removePopover();
  removeAllHighlights();
}

function extractInfo(text: string): { locale: string; key: string; value: string } | null {
  const start = text.indexOf(MARK);
  if (start === -1) return null;
  const end = text.indexOf(MARK, start + 1);
  if (end === -1) return null;
  const decoded = decodeMeta(text.slice(start + 1, end));
  const bar = decoded.indexOf("|");
  if (bar === -1) return null;
  return { locale: decoded.slice(0, bar), key: decoded.slice(bar + 1), value: text.slice(end + 1) };
}

function findI18nNode(el: HTMLElement): { node: Text; locale: string; key: string; value: string } | null {
  for (const node of el.childNodes) {
    if (node.nodeType !== Node.TEXT_NODE) continue;
    const info = extractInfo(node.textContent || "");
    if (info) return { node: node as Text, ...info };
  }
  return null;
}

function onHover(e: Event) {
  const target = e.target as HTMLElement;
  if (target.closest("#i18n-popover")) return;
  const info = findI18nNode(target);
  removeAllHighlights();
  if (info) {
    target.classList.add("i18n-edit-ready");
    hoverKey = info.key;
    highlightSameKey(info.locale, info.key, target);
  } else {
    hoverKey = null;
  }
}

function onHoverOut(e: Event) {
  const target = e.target as HTMLElement;
  if (!target.closest("#i18n-popover")) {
    target.classList.remove("i18n-edit-ready");
    removeSameKeyHighlights();
    hoverKey = null;
  }
}

const ZW_TEST = /[\u200B\u200C\u200D\u2060\uFEFF]/;
const ZW_CLEAN = /[\u200B\u200C\u200D\u2060\uFEFF]/g;

function onCopy(e: ClipboardEvent) {
  const selection = window.getSelection();
  if (!selection || !selection.toString()) return;
  if (ZW_TEST.test(selection.toString())) {
    e.preventDefault();
    e.clipboardData?.setData("text/plain", selection.toString().replace(ZW_CLEAN, ""));
  }
}

function onClick(e: Event) {
  const target = e.target as HTMLElement;
  if (target.closest("#i18n-popover")) return;
  const info = findI18nNode(target);
  if (info) {
    e.preventDefault();
    e.stopPropagation();
    showPopover(target, info);
  }
}

function highlightSameKey(locale: string, key: string, exclude: HTMLElement) {
  const marker = MARK + encodeMeta(locale, key) + MARK;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  while (walker.nextNode()) {
    const text = walker.currentNode as Text;
    if (text.textContent?.includes(marker)) {
      const parent = text.parentElement;
      if (parent && parent !== exclude) {
        parent.classList.add("i18n-same-key");
      }
    }
  }
}

function encodeMeta(locale: string, key: string): string {
  const text = locale + "|" + key;
  return Array.from(text)
    .map((char) => char.charCodeAt(0).toString(2).padStart(16, "0").replace(/0/g, "\u200B").replace(/1/g, "\u200C"))
    .join("\u200D");
}

function showPopover(el: HTMLElement, info: { locale: string; key: string; node: Text; value: string }) {
  activeEl = el;
  removePopover();

  const isCompare = info.locale === "en" && compareTexts !== null;

  const rect = el.getBoundingClientRect();
  const popover = document.createElement("div");
  popover.id = "i18n-popover";
  popover.innerHTML = `
    <div class="key">${info.locale} | ${info.key}</div>
    <textarea id="i18n-input" rows="6">loading...</textarea>
    <div class="hint">${isCompare ? "Compare mode — turn off EN to edit" : "Enter to save · Shift+Enter newline · Esc cancel"}</div>
    <div class="actions">
      <button class="btn-cancel" id="i18n-cancel">Cancel</button>
      ${isCompare ? "" : '<button class="btn-save" id="i18n-save">Save</button>'}
    </div>
    <div class="status" id="i18n-status"></div>
  `;

  document.body.appendChild(popover);

  const textarea = popover.querySelector("#i18n-input") as HTMLTextAreaElement;

  fetch("/__i18n_raw__?locale=" + encodeURIComponent(info.locale) + "&key=" + encodeURIComponent(info.key))
    .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
    .then((raw) => {
      textarea.value = raw;
      textarea.focus();
      textarea.select();
    })
    .catch(() => {
      textarea.value = info.value;
      textarea.focus();
      textarea.select();
    });

  const pw = popover.offsetWidth;
  const ph = popover.offsetHeight;
  let left = Math.max(8, Math.min(rect.left, window.innerWidth - pw - 8));
  let top = rect.bottom + 8;
  if (top + ph > window.innerHeight) {
    top = rect.top - ph - 8;
  }
  if (top < 8) top = 8;
  popover.style.left = left + "px";
  popover.style.top = top + "px";

  popover.querySelector("#i18n-cancel")?.addEventListener("click", removePopover);
  const saveBtn = popover.querySelector("#i18n-save");
  if (saveBtn) saveBtn.addEventListener("click", () => doSave(info, textarea.value));
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.metaKey) {
      e.preventDefault();
      if (saveBtn) doSave(info, textarea.value);
    }
    if (e.key === "Escape") removePopover();
  });
}

async function doSave(info: { locale: string; key: string; node: Text; value: string }, value: string) {
  const status = document.getElementById("i18n-status");
  if (status) status.textContent = "Saving...";

  try {
    const res = await fetch(SAVE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: info.locale, key: info.key, value }),
    });
    if (!res.ok) throw new Error(await res.text());
    if (status) status.textContent = "Saved! Reloading...";
    setTimeout(() => location.reload(), 500);
  } catch (e) {
    if (status) status.textContent = "Error: " + (e as Error).message;
  }
}

function removePopover() {
  document.getElementById("i18n-popover")?.remove();
  activeEl = null;
}

function removeAllHighlights() {
  removeSameKeyHighlights();
  for (const el of document.querySelectorAll(".i18n-edit-ready")) {
    el.classList.remove("i18n-edit-ready");
  }
}

function removeSameKeyHighlights() {
  for (const el of document.querySelectorAll(".i18n-same-key")) {
    el.classList.remove("i18n-same-key");
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

type TextRecord = { text: Text; original: string; english: string };
let compareTexts: TextRecord[] | null = null;

export async function toggleCompare(btn: HTMLElement, pageLocale: string) {
  if (compareTexts) {
    // Restore originals
    for (const t of compareTexts) {
      t.text.textContent = t.original;
    }
    compareTexts = null;
    btn.style.background = "";
    btn.style.color = "";
    return;
  }

  btn.style.background = "#557dde";
  btn.style.color = "white";

  let enDict: Record<string, string>;
  try {
    enDict = await fetch("/__i18n_en_dict__").then((r) => r.json());
  } catch {
    btn.style.background = "";
    btn.style.color = "";
    return;
  }

  const records: TextRecord[] = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  while (walker.nextNode()) {
    const text = walker.currentNode as Text;
    const content = text.textContent || "";
    const start = content.indexOf(MARK);
    if (start === -1) continue;
    const end = content.indexOf(MARK, start + 1);
    if (end === -1) continue;
    const decoded = decodeMeta(content.slice(start + 1, end));
    const bar = decoded.indexOf("|");
    if (bar === -1) continue;
    const locale = decoded.slice(0, bar);
    if (locale === "en") continue;
    const key = decoded.slice(bar + 1);
    const enValue = enDict[key];
    if (enValue === undefined) continue;

    const before = content.slice(0, start);
    const after = content.slice(end + 1);
    if (after.trim() === enValue.trim()) continue;
    records.push({ text, original: content, english: before + MARK + encodeMeta("en", key) + MARK + enValue });
  }

  if (records.length === 0) {
    btn.style.background = "";
    btn.style.color = "";
    return;
  }

  compareTexts = records;
  for (const r of records) {
    r.text.textContent = r.english;
  }

  // Keep the English dict cached in case user saves
  (window as any).__i18n_en_dict = enDict;
}

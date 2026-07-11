const API_PREFIX = "/__API__/faq";
const LIST_URL = `${API_PREFIX}/list`;
const SAVE_URL = `${API_PREFIX}/save`;
const DELETE_ALL_URL = `${API_PREFIX}/delete-all`;

let currentLocale = "en";

interface FaqEntry {
  filename: string;
  title: string;
  content: string;
  isNt: boolean;
}

export function setLocale(locale: string) {
  currentLocale = locale;
}

export function init() {
  setupEventListeners();
}

async function fetchList(): Promise<FaqEntry[]> {
  const res = await fetch(`${LIST_URL}?locale=${encodeURIComponent(currentLocale)}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

function setupEventListeners() {
  // Delegated click on the faq-list container for edit/delete buttons
  document.getElementById("faq-list")?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    const editBtn = target.closest(".faq-edit-btn");
    if (editBtn) {
      const details = editBtn.closest("details") as HTMLElement;
      if (details) {
        const filename = details.dataset.faqFilename || "";
        const isNt = details.dataset.faqNt === "true";
        openEditModal(filename, isNt);
      }
      return;
    }

    const deleteBtn = target.closest(".faq-delete-btn");
    if (deleteBtn) {
      const details = deleteBtn.closest("details") as HTMLElement;
      if (details) {
        const filename = details.dataset.faqFilename || "";
        const title = details.querySelector("summary .flex-1")?.textContent || filename;
        openDeleteConfirm(filename, title);
      }
      return;
    }
  });

  document.getElementById("faq-add-btn")?.addEventListener("click", () => {
    openNewModal();
  });
}

async function openEditModal(filename: string, isNt: boolean) {
  const items = await fetchList();
  const entry = items.find((i) => i.filename === filename);
  if (!entry) return;

  showEditorPopover({
    mode: "edit",
    filename,
    isNt,
    title: entry.title,
    content: entry.content,
    onSave: async (newFilename, newIsNt, newTitle, newContent) => {
      const oldBase = filename.replace(/\.(nt\.)?md$/, "");
      if (newFilename !== oldBase) {
        // Renamed: only delete old file from current locale
        await fetch("/__API__/faq/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ locale: currentLocale, filename }),
        });
      }
      const saveFilename = newIsNt
        ? newFilename.replace(/\.md$/, "") + ".nt.md"
        : newFilename.replace(/\.(nt\.)?md$/, "") + ".md";
      await fetch(SAVE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: currentLocale, filename: saveFilename, title: newTitle, content: newContent, isNt: newIsNt }),
      });
    },
  });
}

async function openNewModal() {
  showEditorPopover({
    mode: "new",
    filename: "",
    isNt: false,
    title: "",
    content: "",
    onSave: async (newFilename, newIsNt, newTitle, newContent) => {
      const saveFilename = newIsNt
        ? newFilename.replace(/\.md$/, "") + ".nt.md"
        : newFilename.replace(/\.(nt\.)?md$/, "") + ".md";
      await fetch(SAVE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: currentLocale, filename: saveFilename, title: newTitle, content: newContent, isNt: newIsNt }),
      });
    },
  });
}

function openDeleteConfirm(filename: string, title: string) {
  removePopover();
  const popover = document.createElement("div");
  popover.id = "faq-editor-popover";
  popover.innerHTML = `
    <div style="margin-bottom: 12px; font-weight: 600;">Delete FAQ</div>
    <p style="margin-bottom: 12px; color: #94a3b8;">
      Delete "${title}" (${filename})?
      ${filename.endsWith(".nt.md") ? "" : "<br><br><span style=\"color:#eab308;\">This will also delete the translation in other languages.</span>"}
    </p>
    <div class="actions">
      <button class="btn-cancel" id="faq-editor-cancel">Cancel</button>
      <button class="btn-delete-confirm" id="faq-editor-delete-confirm">Delete</button>
    </div>
    <div class="status" id="faq-editor-status"></div>
  `;
  document.body.appendChild(popover);
  centerPopover(popover);

  popover.querySelector("#faq-editor-cancel")?.addEventListener("click", removePopover);
  popover.querySelector("#faq-editor-delete-confirm")?.addEventListener("click", async () => {
    const status = document.getElementById("faq-editor-status");
    if (status) status.textContent = "Deleting...";
    try {
      const res = await fetch(DELETE_ALL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename }),
      });
      if (!res.ok) throw new Error(await res.text());
      if (status) status.textContent = "Deleted! Reloading...";
      setTimeout(() => location.reload(), 300);
    } catch (e) {
      if (status) status.textContent = "Error: " + (e as Error).message;
    }
  });
}

function showEditorPopover(opts: {
  mode: "edit" | "new";
  filename: string;
  isNt: boolean;
  title: string;
  content: string;
  onSave: (filename: string, isNt: boolean, title: string, content: string) => Promise<void>;
}) {
  removePopover();
  const isNew = opts.mode === "new";
  const baseName = opts.filename.replace(/\.(nt\.)?md$/, "");

  const popover = document.createElement("div");
  popover.id = "faq-editor-popover";
  popover.innerHTML = `
    <div style="margin-bottom: 12px; font-weight: 600;">${isNew ? "New FAQ" : "Edit FAQ"}</div>

    <div class="row">
      <div class="field">
        <label for="faq-editor-filename">Filename</label>
        <input type="text" id="faq-editor-filename" value="${escapeHtml(baseName)}" ${isNew ? "" : 'readonly style="opacity:0.6;"'} />
      </div>
      <div class="checkbox-field">
        <input type="checkbox" id="faq-editor-nt" ${opts.isNt ? "checked" : ""} />
        <label for="faq-editor-nt">.nt.md (no translation)</label>
      </div>
    </div>

    <div class="field">
      <label for="faq-editor-title">Title</label>
      <input type="text" id="faq-editor-title" value="${escapeHtml(opts.title)}" />
    </div>

    <div class="field">
      <label for="faq-editor-content">Answer (Markdown)</label>
      <textarea id="faq-editor-content" rows="10">${escapeHtml(opts.content)}</textarea>
    </div>

    <div class="hint">Ctrl+Enter to save &middot; Esc to cancel</div>
    <div class="actions">
      <button class="btn-cancel" id="faq-editor-cancel">Cancel</button>
      <button class="btn-save" id="faq-editor-save">${isNew ? "Create" : "Save"}</button>
    </div>
    <div class="status" id="faq-editor-status"></div>
  `;

  document.body.appendChild(popover);
  centerPopover(popover);

  const filenameInput = popover.querySelector("#faq-editor-filename") as HTMLInputElement;
  const ntCheckbox = popover.querySelector("#faq-editor-nt") as HTMLInputElement;
  const titleInput = popover.querySelector("#faq-editor-title") as HTMLInputElement;
  const contentTextarea = popover.querySelector("#faq-editor-content") as HTMLTextAreaElement;

  if (isNew) {
    titleInput.addEventListener("input", () => {
      if (!filenameInput.value || filenameInput.dataset.userChanged !== "true") {
        filenameInput.value = slugify(titleInput.value) || "";
      }
    });
    filenameInput.addEventListener("input", () => {
      filenameInput.dataset.userChanged = "true";
    });
  }

  contentTextarea.focus();

  popover.querySelector("#faq-editor-cancel")?.addEventListener("click", removePopover);
  popover.querySelector("#faq-editor-save")?.addEventListener("click", () => doSave(opts, filenameInput, ntCheckbox, titleInput, contentTextarea));

  contentTextarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      doSave(opts, filenameInput, ntCheckbox, titleInput, contentTextarea);
    }
    if (e.key === "Escape") removePopover();
  });
}

async function doSave(
  opts: { onSave: (filename: string, isNt: boolean, title: string, content: string) => Promise<void> },
  filenameInput: HTMLInputElement,
  ntCheckbox: HTMLInputElement,
  titleInput: HTMLInputElement,
  contentTextarea: HTMLTextAreaElement,
) {
  const status = document.getElementById("faq-editor-status");
  if (status) status.textContent = "Saving...";

  const baseName = filenameInput.value.trim();
  if (!baseName) {
    if (status) status.textContent = "Filename is required";
    return;
  }
  if (!titleInput.value.trim()) {
    if (status) status.textContent = "Title is required";
    return;
  }

  try {
    await opts.onSave(baseName, ntCheckbox.checked, titleInput.value.trim(), contentTextarea.value);
    if (status) status.textContent = "Saved! Reloading...";
    setTimeout(() => location.reload(), 300);
  } catch (e) {
    if (status) status.textContent = "Error: " + (e as Error).message;
  }
}

function removePopover() {
  document.getElementById("faq-editor-popover")?.remove();
}

function centerPopover(el: HTMLElement) {
  const pw = el.offsetWidth;
  const ph = el.offsetHeight;
  const left = Math.max(8, (window.innerWidth - pw) / 2);
  const top = Math.max(8, (window.innerHeight - ph) / 2);
  el.style.left = left + "px";
  el.style.top = top + "px";
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    || "";
}

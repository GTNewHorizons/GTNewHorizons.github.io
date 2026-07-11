import { readFileSync, writeFileSync, readdirSync, unlinkSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import type { Plugin } from "vite";

const FAQ_DIR = join(process.cwd(), "src/content/faq");

interface FaqEntry {
  filename: string;
  title: string;
  content: string;
  isNt: boolean;
}

function parseFrontmatter(text: string): { title: string; body: string } {
  const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { title: "", body: text };
  const frontmatter = match[1];
  const body = match[2].trimStart();
  const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
  return { title: titleMatch ? titleMatch[1].trim() : "", body };
}

function buildMd(title: string, body: string): string {
  return `---\ntitle: ${title}\n---\n${body}`;
}

function readFaqEntry(dir: string, filename: string): FaqEntry | null {
  const filePath = join(dir, filename);
  try {
    const raw = readFileSync(filePath, "utf-8");
    const { title, body } = parseFrontmatter(raw);
    return { filename, title, content: body, isNt: filename.endsWith(".nt.md") };
  } catch {
    return null;
  }
}

function getLocales(): string[] {
  if (!existsSync(FAQ_DIR)) return [];
  return readdirSync(FAQ_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

function listFaq(locale: string): FaqEntry[] {
  const dir = join(FAQ_DIR, locale);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readFaqEntry(dir, f)!)
    .filter(Boolean)
    .sort((a, b) => a.filename.localeCompare(b.filename));
}

function readJsonBody(req: any): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk: string) => (body += chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
  });
}

const PATH_PREFIX = "/__API__/faq";

export default function faqDevPlugin(): Plugin {
  return {
    name: "faq-dev",
    configureServer(s) {
      s.middlewares.use(PATH_PREFIX, async (req, res) => {
        const url = new URL(req.url || "", "http://localhost");
        const path = url.pathname.replace(PATH_PREFIX, "") || "/";
        res.setHeader("Content-Type", "application/json");

        try {
          if (path === "/list" && req.method === "GET") {
            const locale = url.searchParams.get("locale");
            if (!locale) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "Missing locale" }));
            }
            return res.end(JSON.stringify(listFaq(locale)));
          }

          if (path === "/save" && req.method === "POST") {
            const { locale, filename, title, content, isNt } = await readJsonBody(req);
            if (!locale || !filename) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "Missing locale or filename" }));
            }
            const dir = join(FAQ_DIR, locale);
            mkdirSync(dir, { recursive: true });
            const mdFilename = isNt
              ? filename.replace(/\.md$/, "") + ".nt.md"
              : filename.replace(/\.(nt\.)?md$/, "") + ".md";
            writeFileSync(join(dir, mdFilename), buildMd(title, content || ""));
            s.ws.send({ type: "full-reload" });
            return res.end(JSON.stringify({ ok: true }));
          }

          if (path === "/delete" && req.method === "POST") {
            const { locale, filename } = await readJsonBody(req);
            if (!locale || !filename) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "Missing locale or filename" }));
            }
            unlinkSync(join(FAQ_DIR, locale, filename));
            s.ws.send({ type: "full-reload" });
            return res.end(JSON.stringify({ ok: true }));
          }

          if (path === "/delete-all" && req.method === "POST") {
            const { filename } = await readJsonBody(req);
            if (!filename) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "Missing filename" }));
            }
            const locales = getLocales();
            let deleted = 0;
            for (const loc of locales) {
              const fp = join(FAQ_DIR, loc, filename);
              try { unlinkSync(fp); deleted++; } catch { /* ok */ }
            }
            if (deleted === 0) {
              res.statusCode = 404;
              return res.end(JSON.stringify({ error: "File not found in any locale" }));
            }
            s.ws.send({ type: "full-reload" });
            return res.end(JSON.stringify({ ok: true }));
          }

          // No matching endpoint
          res.statusCode = 404;
          res.end(JSON.stringify({ error: "Not found" }));
        } catch (e) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: String(e) }));
        }
      });
    },
  };
}

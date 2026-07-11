import { parseModule, generateCode } from "magicast";
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";
import type { Plugin, ViteDevServer } from "vite";
import { flatten } from "./src/i18n/flatten";

async function buildEnDict(server: ViteDevServer): Promise<Record<string, string>> {
  const dict: Record<string, string> = {};
  const i18nDir = join(process.cwd(), "src/i18n");

  async function walk(dir: string) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.name === "en.ts") {
        try {
          const mod = await server.ssrLoadModule(full);
          for (const [name, val] of Object.entries(mod)) {
            if (typeof val === "object" && val !== null) {
              Object.assign(dict, flatten(val as Record<string, unknown>, name));
            }
          }
        } catch (e) {
          console.error("[i18n-dev] failed to load", full, e);
        }
      }
    }
  }

  await walk(i18nDir);
  return dict;
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

const PATH_PREFIX = "/__API__/i18n";

export default function i18nDevPlugin(): Plugin {
  let server: ViteDevServer | undefined;
  let enDictCache: Record<string, string> | null = null;

  async function getEnDict(): Promise<Record<string, string>> {
    if (enDictCache && server) return enDictCache;
    if (!server) return {};
    enDictCache = await buildEnDict(server);
    return enDictCache;
  }

  return {
    name: "i18n-dev",
    configureServer(s) {
      server = s;

      s.middlewares.use(PATH_PREFIX, async (req, res) => {
        const url = new URL(req.url || "", "http://localhost");
        const path = url.pathname.replace(PATH_PREFIX, "") || "/";

        try {
          // POST /__API__/i18n/save — save a translation value
          if (path === "/save" && req.method === "POST") {
            const { locale, key, value } = await readJsonBody(req);
            const [modName] = key.split(".");
            const filePath = join(process.cwd(), "src/i18n", modName, `${locale}.ts`);

            const source = readFileSync(filePath, "utf-8");
            const mod = parseModule(source);

            const segs = key.split(".");
            let target: Record<string, unknown> = mod.exports;
            for (let i = 0; i < segs.length - 1; i++) {
              target = target[segs[i]] as Record<string, unknown>;
            }
            target[segs[segs.length - 1]] = value;

            writeFileSync(filePath, generateCode(mod).code + "\n");
            enDictCache = null;
            s.ws.send({ type: "full-reload" });
            return res.end("ok");
          }

          // GET /__API__/i18n/en-dict — return English dictionary
          if (path === "/en-dict" && req.method === "GET") {
            const dict = await getEnDict();
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify(dict));
          }

          // GET /__API__/i18n/raw?locale=...&key=... — return raw translation value
          if (path === "/raw" && req.method === "GET") {
            const locale = url.searchParams.get("locale");
            const key = url.searchParams.get("key");
            if (!locale || !key) {
              res.statusCode = 400;
              return res.end("Missing locale or key");
            }
            const [modName] = key.split(".");
            const filePath = join(process.cwd(), "src/i18n", modName, `${locale}.ts`);
            try {
              const mod = await s.ssrLoadModule(filePath);
              const segs = key.split(".");
              let val: unknown = mod;
              for (const seg of segs) {
                if (typeof val !== "object" || val === null) { val = undefined; break; }
                val = (val as Record<string, unknown>)[seg];
              }
              if (typeof val !== "string") {
                res.statusCode = 404;
                return res.end("Key not found");
              }
              res.setHeader("Content-Type", "text/plain; charset=utf-8");
              return res.end(val);
            } catch (e) {
              res.statusCode = 500;
              return res.end(String(e));
            }
          }

          // No matching endpoint
          res.statusCode = 404;
          res.end("Not found");
        } catch (e) {
          res.statusCode = 500;
          res.end(String(e));
        }
      });
    },
  };
}

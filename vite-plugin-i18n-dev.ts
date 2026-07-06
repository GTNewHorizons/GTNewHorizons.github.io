import { parseModule, generateCode } from "magicast";
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";
import type { Plugin, ViteDevServer } from "vite";

function flatten(obj: Record<string, unknown>, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const dotKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      result[dotKey] = value;
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        Object.assign(result, flatten(value[i] as Record<string, unknown>, `${dotKey}.${i}`));
      }
    } else if (typeof value === "object" && value !== null) {
      Object.assign(result, flatten(value as Record<string, unknown>, dotKey));
    }
  }
  return result;
}

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

      s.middlewares.use("/__i18n_save__", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          return res.end("Method not allowed");
        }

        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            const { locale, key, value } = JSON.parse(body);
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
            res.end("ok");
          } catch (e) {
            res.statusCode = 500;
            res.end(String(e));
          }
        });
      });

      s.middlewares.use("/__i18n_en_dict__", async (req, res) => {
        if (req.method !== "GET") {
          res.statusCode = 405;
          return res.end("Method not allowed");
        }
        const dict = await getEnDict();
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(dict));
      });
    },
  };
}

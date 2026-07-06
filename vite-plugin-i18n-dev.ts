import { parseModule, generateCode } from "magicast";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import type { Plugin } from "vite";

export default function i18nDevPlugin(): Plugin {
  return {
    name: "i18n-dev",
    configureServer(server) {
      server.middlewares.use("/__i18n_save__", async (req, res) => {
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

            server.ws.send({ type: "full-reload" });
            res.end("ok");
          } catch (e) {
            res.statusCode = 500;
            res.end(String(e));
          }
        });
      });
    },
  };
}

import { readdirSync, mkdirSync, writeFileSync, mkdtempSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { createRequire } from "module";
import * as esbuild from "esbuild";

const require = createRequire(import.meta.url);
const I18N_DIR = join(import.meta.dirname, "..", "src", "i18n");
const OUT_DIR = join(import.meta.dirname, "..", "dist", "translations");

async function loadModule(filePath) {
  const result = await esbuild.build({
    entryPoints: [filePath],
    bundle: true,
    platform: "node",
    format: "cjs",
    write: false,
    sourcemap: false,
    external: ["./flatten"],
  });
  const code = result.outputFiles[0].text;
  const tmpFile = join(mkdtempSync(join(tmpdir(), "i18n-")), "mod.cjs");
  writeFileSync(tmpFile, code);
  try {
    return require(tmpFile);
  } finally {
    try { rmSync(tmpFile); } catch {}
  }
}

// Compile and load the shared flatten function
const flattenModPath = join(I18N_DIR, "flatten.ts");
const flattenResult = await esbuild.build({
  entryPoints: [flattenModPath],
  bundle: true,
  platform: "node",
  format: "cjs",
  write: false,
  sourcemap: false,
});
const flattenCode = flattenResult.outputFiles[0].text;
const flattenTmp = join(mkdtempSync(join(tmpdir(), "i18n-flat-")), "flatten.cjs");
writeFileSync(flattenTmp, flattenCode);
let flatten;
try {
  flatten = require(flattenTmp).flatten;
} finally {
  try { rmSync(flattenTmp); } catch {}
}

const dirs = readdirSync(I18N_DIR, { withFileTypes: true });

// Collect locales from file names
const localeFiles = {};
for (const entry of dirs) {
  if (!entry.isDirectory()) continue;
  for (const file of readdirSync(join(I18N_DIR, entry.name))) {
    if (!file.endsWith(".ts") || file === "flatten.ts") continue;
    const locale = file.replace(/\.ts$/, "");
    if (!localeFiles[locale]) localeFiles[locale] = {};
    localeFiles[locale][entry.name] = join(I18N_DIR, entry.name, file);
  }
}

mkdirSync(OUT_DIR, { recursive: true });

for (const [locale, mods] of Object.entries(localeFiles)) {
  const dict = {};
  for (const [modName, file] of Object.entries(mods)) {
    try {
      const mod = await loadModule(file);
      for (const [exportName, val] of Object.entries(mod)) {
        if (typeof val === "object" && val !== null) {
          Object.assign(dict, flatten(val, exportName));
        }
      }
    } catch (e) {
      console.error(`[translations] failed: ${file}`, e.message);
    }
  }
  writeFileSync(join(OUT_DIR, `${locale}.json`), JSON.stringify(dict, null, 2) + "\n");
  console.log(`[translations] ${Object.keys(dict).length} keys → ${locale}.json`);
}

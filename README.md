# GregTech: New Horizons (GT:NH) Website

If you are contributing translations or FAQ content, editing via the dev server (`yarn dev`) is more convenient than editing text files directly — see the sections below.

---

<p align="center">
  <img src="src/assets/logo.svg" width="256" height="256" alt="GregTech: New Horizons">
</p>

<div align="center">
  Translations:

  <a>English</a> |
  <a href="docs/zh-CN.md">简体中文</a>
</div>

## Getting started

1. Make sure you have NodeJS installed on your system. The recommended version is the current LTS (24) but newer ones should work too.
2. Make sure you have the Yarn package manager installed: `npm install --global yarn`
3. You can now navigate to the root of the project and install the dependencies using `yarn install`
4. You're ready to go! Simply run `yarn dev` and browse <http://localhost:4321>

When developing in dev mode, HMR (Hot Module Replacement) will be enabled and allows you to see all of your changes INSTANTLY when you save any file.

## All Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
|------------------------|--------------------------------------------------|
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build production site to `./dist/`               |
| `yarn preview`         | Preview build locally, before deploying          |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## Translation (i18n)

### I18n Structure

```text
src/i18n/
├── <module-name>/
│   ├── en.ts          # English translations (authoritative)
│   └── zh-CN.ts       # Chinese translations
├── en.ts              # Auto-generated barrel (do not edit)
├── keys.ts            # TypeScript types derived from en.ts
├── flatten.ts         # Flattens nested objects to dot-notation
└── index.ts           # Runtime: useTranslations(), locales, etc.
```

### I18n Rules

- **Each module** is a subdirectory under `src/i18n/`. Modules: `common`, `home`, `faq`, `downloads`, `versionHistory`.
- **`en.ts` is authoritative**. Translation keys are auto-derived from its shape.
- **Translations** (`zh-CN.ts`) must mirror the same object structure as `en.ts`.
- **Values are plain strings** (no JSX, no components). HTML tags like `<b>` and `<i>` are allowed and rendered via `set:html`.
- **Dynamic parameters** use template syntax: `{key}` — see `useTranslations` in `index.ts`.

### Adding a new module

1. Create `src/i18n/<name>/en.ts` and `src/i18n/<name>/zh-CN.ts`.
2. Run `yarn dev` — the barrel file `src/i18n/en.ts` regenerates automatically.
3. Use `t("<name>.<key>")` in pages/components.

### Editing translations in dev mode

1. Append `?edit_i18n=1` to any page URL (e.g. `http://localhost:4321/zh-CN/downloads?edit_i18n=1`).
2. A floating blue `✎` button appears in the bottom-right corner.
3. Click any translatable text on the page to open an inline editor.
4. Edit and press Enter to save — the page reloads automatically.
5. Toggle the `EN` button to compare with English.

### I18n Dev API endpoints

| Endpoint                                   | Method | Purpose                                              |
|--------------------------------------------|--------|------------------------------------------------------|
| `GET /__API__/i18n/en-dict`                | GET    | Returns full English dictionary as JSON              |
| `GET /__API__/i18n/raw?locale=...&key=...` | GET    | Returns raw translation value for a key              |
| `POST /__API__/i18n/save`                  | POST   | Saves a translation value (`{ locale, key, value }`) |

## FAQ

### FAQ Structure

```text
src/content/faq/
├── en/
│   ├── launcher.md            # title: What launcher should I use?
│   ├── java-version.md
│   └── region-specific.nt.md  # English-only (no translation)
└── zh-CN/
    ├── launcher.md             # Translation of en/launcher.md
    ├── java-version.md
    └── china-specific.nt.md    # Chinese-only (no translation)
```

### FAQ Rules

- **Each `.md` file is one Q&A**. The `title` frontmatter is the question, the body is the answer.
- **Same filename across language directories** = translations of each other (e.g. `en/launcher.md` ↔ `zh-CN/launcher.md`).
- **`.nt.md` suffix** = "no translation". The file is locale-specific and appears only for that language. Other locales neither show it nor fall back to it.
- **Fallback**: If a non-`.nt.md` file exists in `en/` but not in the current locale, the English version is shown as fallback.
- **Sorting**: Items are ordered alphabetically by filename.

### Editing FAQ in dev mode

In dev mode (`yarn dev`), the FAQ page shows inline editor controls:

- **Each FAQ item** has `✎` (edit) and `✕` (delete) buttons on the right of the title.
- **`+ Add FAQ` button** at the top of the list.
- **Edit modal**: Change the filename, toggle `.nt.md`, edit the title and markdown body.
- **Delete**: Prompts for confirmation. Non-`.nt.md` files are deleted from **all languages** (with a warning).

To edit a translation, navigate to the locale's FAQ page (e.g. `/zh-CN/faq`) and use the same controls. Each locale's files are independent.

### FAQ Dev API endpoints

| Endpoint                           | Method | Purpose                                                                    |
|------------------------------------|--------|----------------------------------------------------------------------------|
| `GET /__API__/faq/list?locale=...` | GET    | List all FAQ files for a locale                                            |
| `POST /__API__/faq/save`           | POST   | Create or update a FAQ file (`{ locale, filename, title, content, isNt }`) |
| `POST /__API__/faq/delete`         | POST   | Delete a FAQ file from a single locale (`{ locale, filename }`)            |
| `POST /__API__/faq/delete-all`     | POST   | Delete a FAQ file from all locales (`{ filename }`)                        |

### Adding a new FAQ via file system

1. Create `src/content/faq/<locale>/<filename>.md`.
2. Format:

   ```markdown
   ---
   title: Your question here
   ---
   Your answer in **Markdown** here.
   ```

3. For a locale-specific FAQ, use the `.nt.md` extension:

   ```markdown
   ---
   title: English-only question
   ---
   Answer only shown for English visitors.
   ```

4. The site rebuilds automatically in dev mode (HMR). For production, run `yarn build`.

## Dev API conventions

All development-mode API endpoints are prefixed with `/__API__/` and are only available in dev mode (`yarn dev`). They are not bundled into the production build.

## Want to learn more?

Feel free to check:

- [Astro's documentation](https://docs.astro.build) for the framework used to build this site;
- [TailwindCSS documentation](https://tailwindcss.com/docs) for the CSS framework used to style this site;
- [TypeScript documentation](https://www.typescriptlang.org/docs/) for TypeScript and type definitions;
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for JavaScript and web APIs.

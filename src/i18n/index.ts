import { flatten } from "./flatten";
import type { TranslationKey } from "./keys";

const modules = import.meta.glob("/src/i18n/*/[^.]*.ts", { eager: true }) as Record<string, Record<string, unknown>>;

const dict: Record<string, Record<string, string>> = {};
for (const [path, mod] of Object.entries(modules)) {
  const locale = path.split("/").pop()!.replace(/\.ts$/, "");
  if (!dict[locale]) dict[locale] = {};
  Object.assign(dict[locale], flatten(mod));
}

const allLocales = Object.keys(modules)
  .map((path) => path.replace(/^.*\//, "").replace(/\.ts$/, ""))
  .filter((v, i, a) => a.indexOf(v) === i)
  .sort();

export const locales = allLocales;
export type Locale = (typeof locales)[number];

function encodeMeta(locale: string, key: string): string {
  const text = `${locale}|${key}`;
  return Array.from(text)
    .map((char) => char.charCodeAt(0).toString(2).padStart(16, "0").replace(/0/g, "\u200B").replace(/1/g, "\u200C"))
    .join("\u200D");
}

export function getLangFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split("/");
  return (locales as string[]).includes(locale) ? (locale as Locale) : locales[0];
}

export function getLocaleLabel(locale: Locale): string {
  return useTranslations(locale)("common.langName") || locale;
}

export function useLocalizePath(locale: Locale) {
  return (path: string) => `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function useTranslations(locale: Locale) {
  return (key: TranslationKey, params?: Record<string, string>): string => {
    let value = dict[locale]?.[key];
    if (value === undefined) {
      value = dict[locales[0]]?.[key] ?? key;
    }
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        value = value.replace(`{${k}}`, v);
      }
    }
    if (import.meta.env.DEV) {
      return `\u2060${encodeMeta(locale, key)}\u2060${value}`;
    }
    return value;
  };
}

/**
 * i18n configuration — Edge-runtime safe.
 *
 * Contains the locale list, types, display metadata, and pure URL
 * helpers. NO Node built-in imports (no `fs`, no `path`) — that
 * lets the middleware import from here without webpack rejecting
 * `node:` URIs in the Edge runtime.
 *
 * The fs-backed message loader (`getMessages`, `translator`) lives
 * in `lib/i18n.ts`, which re-exports everything below so most
 * callers can keep importing from a single module.
 */

export const LOCALES = ["en", "fr", "es", "de", "pt", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function assertLocale(value: string): Locale {
  if (!isLocale(value)) {
    throw new Error(`Unknown locale "${value}". Supported: ${LOCALES.join(", ")}.`);
  }
  return value;
}

export const localeMeta: Record<
  Locale,
  { name: string; nativeName: string; htmlLang: string; ogLocale: string; dir: "ltr" | "rtl" }
> = {
  en: { name: "English", nativeName: "English", htmlLang: "en", ogLocale: "en_US", dir: "ltr" },
  fr: { name: "French", nativeName: "Français", htmlLang: "fr", ogLocale: "fr_FR", dir: "ltr" },
  es: { name: "Spanish", nativeName: "Español", htmlLang: "es", ogLocale: "es_ES", dir: "ltr" },
  de: { name: "German", nativeName: "Deutsch", htmlLang: "de", ogLocale: "de_DE", dir: "ltr" },
  pt: { name: "Portuguese", nativeName: "Português", htmlLang: "pt", ogLocale: "pt_PT", dir: "ltr" },
  ru: { name: "Russian", nativeName: "Русский", htmlLang: "ru", ogLocale: "ru_RU", dir: "ltr" },
};

/** Prefix a relative path with the locale. Always returns a leading slash. */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

/** Strip the locale prefix from a pathname. Returns "/" for the locale root. */
export function stripLocalePrefix(pathname: string): { locale: Locale | null; path: string } {
  const match = pathname.match(/^\/([a-z]{2})(\/.*)?$/);
  if (!match || !isLocale(match[1])) return { locale: null, path: pathname };
  const rest = match[2] ?? "";
  return { locale: match[1], path: rest === "" ? "/" : rest };
}

import fs from "node:fs";
import path from "node:path";

import {
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
} from "@/lib/i18n-config";

// Re-export config so existing callers can keep importing from
// `@/lib/i18n` without caring about the split. Edge-runtime callers
// (e.g. middleware) should import from `@/lib/i18n-config` directly.
export {
  LOCALES,
  DEFAULT_LOCALE,
  isLocale,
  assertLocale,
  localeMeta,
  localizedPath,
  stripLocalePrefix,
  type Locale,
} from "@/lib/i18n-config";

/* ----------------------------------------------------------------
   Messages — keyed by dotted path ("nav.discussions").
   The shape is intentionally a flat string→string map after load so
   the translator can stay trivial. Nested JSON is flattened on read.
---------------------------------------------------------------- */

export type Messages = Readonly<Record<string, string>>;

const MESSAGES_ROOT = path.join(process.cwd(), "messages");
const cache = new Map<Locale, Messages>();

function flatten(input: unknown, prefix = ""): Record<string, string> {
  const out: Record<string, string> = {};
  if (input && typeof input === "object" && !Array.isArray(input)) {
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
      // Convention: keys starting with "_" are metadata (e.g. _review)
      // and are skipped during flatten so they never surface as UI strings.
      if (k.startsWith("_")) continue;
      const key = prefix ? `${prefix}.${k}` : k;
      if (Array.isArray(v)) continue;
      if (v && typeof v === "object") {
        Object.assign(out, flatten(v, key));
      } else {
        out[key] = String(v);
      }
    }
  }
  return out;
}

export function getMessages(locale: Locale): Messages {
  const cached = cache.get(locale);
  if (cached) return cached;

  const file = path.join(MESSAGES_ROOT, `${locale}.json`);
  if (!fs.existsSync(file)) {
    throw new Error(
      `Missing messages file for locale "${locale}" (expected ${file}). Add it to /messages/.`,
    );
  }
  const json = JSON.parse(fs.readFileSync(file, "utf8")) as unknown;
  const flat = flatten(json);
  cache.set(locale, flat);
  return flat;
}

/**
 * Translator. Returns the key itself if the message is missing — this
 * is intentional: it makes missing translations visible in the UI
 * during development without crashing the page. The English bundle
 * is the source of truth and should always be complete.
 *
 * Supports `{var}` interpolation. Keep keys flat (e.g. "footer.about_heading").
 */
export function translator(messages: Messages) {
  return function t(key: string, vars?: Record<string, string | number>): string {
    let value = messages[key];
    if (value === undefined) {
      const en = cache.get(DEFAULT_LOCALE) ?? getMessages(DEFAULT_LOCALE);
      value = en[key] ?? key;
    }
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        value = value.replace(`{${k}}`, String(v));
      }
    }
    return value;
  };
}

// LOCALES is re-exported above; we also keep this no-op to make sure
// the import isn't tree-shaken away for callers that destructure it
// alongside the runtime-only helpers.
void LOCALES;

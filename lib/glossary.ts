/**
 * Scientific glossary — a data layer that powers /en/glossary and
 * /en/glossary/[term] pages and is referenced by topic/subtopic hubs.
 *
 * Editorial rules for entries:
 * - Definitions paraphrase widely-used reference treatments; no
 *   verbatim copy from any single source.
 * - `relatedSources` cite the authority each term is anchored to.
 * - Entries link back to the canonical articles where they appear.
 *
 * The terms themselves live in data/glossary/terms.json. They were
 * inline here while there were 79 of them; a glossary meant to carry a
 * couple of hundred entries is data, and keeping it as a 2,300-line
 * TypeScript literal made every addition a merge conflict waiting to
 * happen. The exported surface is unchanged, so the routes, the sitemap
 * and the validators did not move.
 *
 * Localizations live in data/glossary/localized.json, keyed by locale
 * and then by the English slug. That shape is deliberate: the English
 * entry is the canonical identity of the concept, and a localization is
 * a presentation of the same concept rather than a second entry for it.
 * A term therefore cannot drift into two different concepts in two
 * languages, the slug and the route stay stable across locales, and the
 * set of localized slugs for a locale is a lookup rather than a scan.
 */
import fs from "node:fs";
import path from "node:path";

import type { CategorySlug } from "@/lib/categories";

export type GlossaryRelatedArticle = {
  /** Article slug (basename, no path). */
  slug: string;
  /** Category + subtopic so URLs can be resolved without DB lookup. */
  category: CategorySlug;
  subtopic: string;
};

export type GlossaryEntry = {
  slug: string;
  term: string;
  /** One-line definition (<= ~200 chars). Used in cards, list views, JSON-LD. */
  shortDefinition: string;
  /** Longer paragraph(s) of explanation. */
  explanation: string;
  /** Topic this term primarily belongs to. */
  category: CategorySlug;
  /** Optional subtopic for finer routing/clustering. */
  subtopic?: string;
  /** Related canonical articles on the platform. */
  relatedArticles: GlossaryRelatedArticle[];
  /** Authoritative external references the definition rests on. */
  relatedSources: Array<{ label: string; url: string }>;
  /** Editorial note on usage limits, contested meaning, or caveats. */
  uncertaintyNote?: string;
  /** ISO date when this entry was last reviewed. */
  updatedDate: string;
};

/** The fields a localization may override. Everything else — category,
 *  relatedArticles, relatedSources, updatedDate — belongs to the concept
 *  and is shared, so a source added in English is a source in every
 *  language and cannot be quietly dropped from one. */
export type GlossaryLocalization = {
  term: string;
  aliases?: string[];
  shortDefinition: string;
  explanation: string;
};

const TERMS_PATH = path.join(process.cwd(), "data", "glossary", "terms.json");
const LOCALIZED_PATH = path.join(
  process.cwd(),
  "data",
  "glossary",
  "localized.json",
);

function loadTerms(): GlossaryEntry[] {
  const raw = JSON.parse(fs.readFileSync(TERMS_PATH, "utf8")) as {
    terms: GlossaryEntry[];
  };
  return raw.terms;
}

function loadLocalizations(): Record<string, Record<string, GlossaryLocalization>> {
  if (!fs.existsSync(LOCALIZED_PATH)) return {};
  return JSON.parse(fs.readFileSync(LOCALIZED_PATH, "utf8")) as Record<
    string,
    Record<string, GlossaryLocalization>
  >;
}

export const GLOSSARY: GlossaryEntry[] = loadTerms();

const LOCALIZED = loadLocalizations();

/** Locales that have at least one localized term. */
export function localizedGlossaryLocales(): string[] {
  return Object.keys(LOCALIZED).filter(
    (l) => Object.keys(LOCALIZED[l] ?? {}).length > 0,
  );
}

/** Every localization, keyed by locale then slug. Used by the validator
 *  and by the glossary linker, which needs the alias tables. */
export function allGlossaryLocalizations(): Record<
  string,
  Record<string, GlossaryLocalization>
> {
  return LOCALIZED;
}

/** The raw localization for a slug, or undefined. */
export function glossaryLocalization(
  slug: string,
  locale: string,
): GlossaryLocalization | undefined {
  return LOCALIZED[locale]?.[slug];
}

/**
 * True when this locale can render its own page for this term. The
 * glossary route uses this to decide what exists: a term with no
 * localization has no page in that language, rather than an English
 * page wearing a localized URL.
 */
export function hasLocalizedGlossaryTerm(
  slug: string,
  locale: string,
): boolean {
  return Boolean(LOCALIZED[locale]?.[slug]);
}

/**
 * The entry as it should be read in `locale`.
 *
 * For a locale with no localization of this term the function returns
 * undefined rather than the English entry. Callers that want the English
 * fallback ask for it explicitly, so a page can never silently claim to
 * be in a language it is not.
 */
export function getGlossaryEntry(
  slug: string,
  locale: string = "en",
): GlossaryEntry | undefined {
  const base = GLOSSARY.find((e) => e.slug === slug);
  if (!base) return undefined;
  if (locale === "en") return base;
  const loc = LOCALIZED[locale]?.[slug];
  if (!loc) return undefined;
  return {
    ...base,
    term: loc.term,
    shortDefinition: loc.shortDefinition,
    explanation: loc.explanation,
  };
}

export function listGlossarySlugs(locale: string = "en"): string[] {
  if (locale === "en") return GLOSSARY.map((e) => e.slug);
  const forLocale = LOCALIZED[locale] ?? {};
  return GLOSSARY.map((e) => e.slug).filter((s) => Boolean(forLocale[s]));
}

export function listGlossaryByCategory(
  category: CategorySlug,
  locale: string = "en",
): GlossaryEntry[] {
  return listGlossaryAlphabetical(locale).filter(
    (e) => e.category === category,
  );
}

/**
 * Alphabetical sort, used by the index view.
 */
export function listGlossaryAlphabetical(
  locale: string = "en",
): GlossaryEntry[] {
  const entries = listGlossarySlugs(locale)
    .map((s) => getGlossaryEntry(s, locale))
    .filter((e): e is GlossaryEntry => Boolean(e));
  // Sorted in the reader's own language: "Ökosystem" belongs with O in
  // German and "équilibre" with E in French, which a byte-order sort
  // gets wrong in both.
  return entries.sort((a, b) => a.term.localeCompare(b.term, locale));
}

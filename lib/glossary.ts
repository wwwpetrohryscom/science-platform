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
 * EN only in this pass; the schema is locale-shaped so a future
 * translation pass can populate other locales without refactoring.
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

const TERMS_PATH = path.join(process.cwd(), "data", "glossary", "terms.json");

function loadTerms(): GlossaryEntry[] {
  const raw = JSON.parse(fs.readFileSync(TERMS_PATH, "utf8")) as {
    terms: GlossaryEntry[];
  };
  return raw.terms;
}

export const GLOSSARY: GlossaryEntry[] = loadTerms();

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return GLOSSARY.find((e) => e.slug === slug);
}

export function listGlossarySlugs(): string[] {
  return GLOSSARY.map((e) => e.slug);
}

export function listGlossaryByCategory(
  category: CategorySlug,
): GlossaryEntry[] {
  return GLOSSARY.filter((e) => e.category === category);
}

/**
 * Alphabetical sort, used by the index view.
 */
export function listGlossaryAlphabetical(): GlossaryEntry[] {
  return [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
}

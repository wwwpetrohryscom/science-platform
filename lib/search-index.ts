/**
 * Search index construction. Server-only — reads the corpus.
 *
 * The ranking half lives in `lib/search-core.ts` and is imported by the
 * client component; keeping them apart is what stops `node:fs` reaching
 * the browser bundle.
 */
import { getAllArticles, getAllInsights } from "@/lib/content";
import {
  listGlossarySlugs,
  getGlossaryEntry,
  glossaryLocalization,
} from "@/lib/glossary";
import { LOCALES, localizedPath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n-config";
import type { SearchDoc, SearchIndex } from "@/lib/search-core";

/** Build one locale's index from what exists in that locale. */
export async function buildSearchIndex(locale: Locale): Promise<SearchIndex> {
  const docs: SearchDoc[] = [];

  for (const a of await getAllArticles(locale)) {
    if (a.localeFallback) continue;
    docs.push({
      url: a.url,
      title: a.title,
      excerpt: a.excerpt,
      kind: "article",
      category: a.category,
      subtopic: a.subtopic,
      tags: a.tags,
    });
  }

  for (const i of await getAllInsights(locale)) {
    if (i.localeFallback) continue;
    docs.push({
      url: i.url,
      title: i.title,
      excerpt: i.excerpt,
      kind: "insight",
      category: i.category,
      tags: i.tags,
    });
  }

  for (const slug of listGlossarySlugs(locale)) {
    const entry = getGlossaryEntry(slug, locale);
    if (!entry) continue;
    // A localized term carries its own surface forms — the aliases a
    // reader in that language would actually type. English has none
    // beyond the term itself, so the tag list is simply empty there.
    const localized = locale === "en" ? undefined : glossaryLocalization(slug, locale);
    docs.push({
      url: localizedPath(locale, `/glossary/${slug}`),
      title: entry.term,
      excerpt: entry.shortDefinition,
      kind: "glossary",
      category: entry.category,
      subtopic: entry.subtopic,
      tags: localized?.aliases ?? [],
    });
  }

  return { locale, docs };
}

export async function buildAllSearchIndexes(): Promise<SearchIndex[]> {
  const out: SearchIndex[] = [];
  for (const locale of LOCALES) {
    const index = await buildSearchIndex(locale);
    if (index.docs.length > 0) out.push(index);
  }
  return out;
}


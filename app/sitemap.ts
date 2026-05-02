import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";
import { categories, listCategorySlugs } from "@/lib/categories";
import { getAllArticles, getAllInsights } from "@/lib/content";
import { getDiscussions } from "@/lib/discussions";
import {
  DEFAULT_LOCALE,
  LOCALES,
  localeMeta,
  localizedPath,
  type Locale,
} from "@/lib/i18n";

const FALLBACK_LAST_MODIFIED = new Date("2026-05-02");

/**
 * Locale-aware sitemap.
 *
 * Structural pages exist in every locale. Content pages are emitted
 * only for locales with real source content on disk; EN fallback pages
 * are deliberately excluded because they are duplicate fallback views,
 * not indexable translations.
 *
 * `lastModified` for content URLs comes from `updatedDate`; invalid or
 * missing dates fall back to a stable project date so the sitemap never
 * emits malformed XML in production.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const u = (loc: Locale, p: string) =>
    new URL(localizedPath(loc, p), siteConfig.url).toString();

  const toDate = (value: string | undefined): Date => {
    if (!value) return FALLBACK_LAST_MODIFIED;
    const date = new Date(value);
    return Number.isNaN(date.valueOf()) ? FALLBACK_LAST_MODIFIED : date;
  };

  const indexableLocales = <T extends { localeFallback: boolean; locale: Locale }>(
    entries: T[],
  ): Locale[] =>
    entries
      .filter((entry) => !entry.localeFallback)
      .map((entry) => entry.locale);

  /** Build the hreflang alternates map for a path. */
  const alternates = (path: string, locales: readonly Locale[] = LOCALES) => {
    const languages: Record<string, string> = {};
    for (const loc of locales) {
      languages[localeMeta[loc].htmlLang] = u(loc, path);
    }
    if (locales.includes(DEFAULT_LOCALE)) {
      languages["x-default"] = u(DEFAULT_LOCALE, path);
    }
    return languages;
  };

  const dedupe = (entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap => {
    const seen = new Set<string>();
    return entries.filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
  };

  /**
   * Static + structural paths. Every locale always has these because
   * they're driven by code (not content), so the sitemap entry × locale
   * matrix is dense.
   */
  const structuralPaths: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/insights", changeFrequency: "weekly", priority: 0.8 },
    { path: "/discussions", changeFrequency: "daily", priority: 0.7 },
    ...listCategorySlugs().map((slug) => ({
      path: `/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...categories.flatMap((cat) =>
      cat.subtopics.map((sub) => ({
        path: `/${cat.slug}/${sub.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      })),
    ),
  ];

  const structuralEntries: MetadataRoute.Sitemap = structuralPaths.flatMap(
    ({ path, changeFrequency, priority }) =>
      LOCALES.map((loc) => ({
        url: u(loc, path),
        changeFrequency,
        priority,
        alternates: { languages: alternates(path) },
      })),
  );

  // Articles and insights: the loader returns EN fallback content for
  // missing translations so pages do not 404, but those fallback views
  // are not indexable sitemap targets. Group by canonical content path
  // first so hreflang alternates only point at actual translated files.
  const contentEntries: MetadataRoute.Sitemap = [];

  const articlesByPath = new Map<
    string,
    Awaited<ReturnType<typeof getAllArticles>>
  >();
  const insightsByPath = new Map<
    string,
    Awaited<ReturnType<typeof getAllInsights>>
  >();

  for (const locale of LOCALES) {
    const [articles, insights] = await Promise.all([
      getAllArticles(locale),
      getAllInsights(locale),
    ]);

    for (const article of articles) {
      const path = `/${article.category}/${article.subtopic}/${article.slug}`;
      articlesByPath.set(path, [...(articlesByPath.get(path) ?? []), article]);
    }

    for (const insight of insights) {
      const path = `/insight/${insight.slug}`;
      insightsByPath.set(path, [...(insightsByPath.get(path) ?? []), insight]);
    }
  }

  for (const [path, articles] of articlesByPath) {
    const locales = indexableLocales(articles);
    for (const a of articles.filter((article) => !article.localeFallback)) {
      contentEntries.push({
        url: u(a.locale, path),
        lastModified: toDate(a.updatedDate),
        changeFrequency: "monthly",
        priority: a.type === "pillar" ? 0.9 : 0.8,
        alternates: { languages: alternates(path, locales) },
      });
    }
  }

  for (const [path, insights] of insightsByPath) {
    const locales = indexableLocales(insights);
    for (const i of insights.filter((insight) => !insight.localeFallback)) {
      contentEntries.push({
        url: u(i.locale, path),
        lastModified: toDate(i.updatedDate),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: alternates(path, locales) },
      });
    }
  }

  // Discussions don't (yet) have per-locale variants — they live in
  // typed TS data and are shown as authored. Still emit them under
  // every locale URL so search engines can find them under a localized
  // path; alternates map keeps duplicate-content risk in check.
  const discussions = await getDiscussions();
  const discussionEntries: MetadataRoute.Sitemap = discussions.flatMap((d) =>
    LOCALES.map((loc) => {
      const path = `/discussions/${d.slug}`;
      return {
        url: u(loc, path),
        lastModified: toDate(d.updatedDate),
        changeFrequency: "weekly" as const,
        priority: 0.6,
        alternates: { languages: alternates(path) },
      };
    }),
  );

  return dedupe([...structuralEntries, ...contentEntries, ...discussionEntries]);
}

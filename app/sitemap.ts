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
/** Manually-set publication date for the static legal pages. Bump
 *  when the policy text actually changes. */
const POLICY_LAST_MODIFIED = new Date("2026-05-02");

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
 *
 * Structural pages (homepage, hubs, topic & subtopic indexes) inherit
 * their `lastModified` from the most-recently-updated piece of content
 * they surface. That gives search engines an accurate re-crawl signal
 * — when a single article ships, the topic & home `lastmod` move with it.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const u = (loc: Locale, p: string) =>
    new URL(localizedPath(loc, p), siteConfig.url).toString();

  const toDate = (value: string | undefined): Date => {
    if (!value) return FALLBACK_LAST_MODIFIED;
    const date = new Date(value);
    return Number.isNaN(date.valueOf()) ? FALLBACK_LAST_MODIFIED : date;
  };

  const maxDate = (dates: Array<Date | undefined>): Date => {
    let max = FALLBACK_LAST_MODIFIED;
    for (const d of dates) {
      if (d && d.valueOf() > max.valueOf()) max = d;
    }
    return max;
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

  // ----------------------------------------------------------------
  // Phase 1: load the full corpus once. Subsequent phases read from
  // these maps so the sitemap iterates the content store a single time.
  // ----------------------------------------------------------------
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

  const discussions = await getDiscussions();

  // Index article updatedDates by category and (category, subtopic) so
  // we can derive structural-page lastmods without re-walking the corpus.
  const updatedByCategory = new Map<string, Date[]>();
  const updatedBySubtopic = new Map<string, Date[]>();
  const allArticleDates: Date[] = [];
  const allInsightDates: Date[] = [];
  const allDiscussionDates: Date[] = discussions.map((d) => toDate(d.updatedDate));

  for (const articles of articlesByPath.values()) {
    for (const a of articles) {
      if (a.localeFallback) continue;
      const d = toDate(a.updatedDate);
      allArticleDates.push(d);
      const catKey = a.category;
      const subKey = `${a.category}/${a.subtopic}`;
      updatedByCategory.set(catKey, [...(updatedByCategory.get(catKey) ?? []), d]);
      updatedBySubtopic.set(subKey, [...(updatedBySubtopic.get(subKey) ?? []), d]);
    }
  }
  for (const insights of insightsByPath.values()) {
    for (const i of insights) {
      if (i.localeFallback) continue;
      allInsightDates.push(toDate(i.updatedDate));
    }
  }

  /** Site-wide most recent update — drives the homepage `lastmod`. */
  const siteLastMod = maxDate([
    ...allArticleDates,
    ...allInsightDates,
    ...allDiscussionDates,
  ]);

  // ----------------------------------------------------------------
  // Phase 2: structural pages.
  //
  // Every structural URL now carries a `lastModified` derived from
  // the most-recent piece of content it surfaces. This gives Googlebot
  // / Bingbot a precise re-crawl signal — when a single article ships,
  // the home page and the relevant topic/subtopic indexes also bump.
  // ----------------------------------------------------------------
  const structuralPaths: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    lastModified: Date;
  }> = [
    {
      path: "/",
      changeFrequency: "weekly",
      priority: 1.0,
      lastModified: siteLastMod,
    },
    {
      path: "/insights",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: maxDate(allInsightDates),
    },
    {
      path: "/discussions",
      changeFrequency: "daily",
      priority: 0.7,
      lastModified: maxDate(allDiscussionDates),
    },
    {
      path: "/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    {
      path: "/cookie-policy",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    {
      path: "/terms-of-use",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    ...listCategorySlugs().map((slug) => ({
      path: `/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      lastModified: maxDate(updatedByCategory.get(slug) ?? []),
    })),
    ...categories.flatMap((cat) =>
      cat.subtopics.map((sub) => ({
        path: `/${cat.slug}/${sub.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.85,
        lastModified: maxDate(
          updatedBySubtopic.get(`${cat.slug}/${sub.slug}`) ?? [],
        ),
      })),
    ),
  ];

  const structuralEntries: MetadataRoute.Sitemap = structuralPaths.flatMap(
    ({ path, changeFrequency, priority, lastModified }) =>
      LOCALES.map((loc) => ({
        url: u(loc, path),
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages: alternates(path) },
      })),
  );

  // ----------------------------------------------------------------
  // Phase 3: content pages.
  //
  // The loader returns EN fallback content for missing translations so
  // pages do not 404, but those fallback views are not indexable sitemap
  // targets — group by canonical content path first so hreflang alternates
  // only point at actual translated files.
  // ----------------------------------------------------------------
  const contentEntries: MetadataRoute.Sitemap = [];

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

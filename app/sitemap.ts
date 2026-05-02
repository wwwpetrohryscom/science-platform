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

/**
 * Locale-aware sitemap.
 *
 * For every URL we emit one entry per supported locale, plus an
 * `alternates.languages` map so search engines can crawl all
 * translations together. `x-default` points at the default-locale
 * (English) URL.
 *
 * `lastModified` for content URLs is the article's `updatedDate`
 * (which falls back to the EN article's date when a translation is
 * missing — matching what readers see on the page).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const u = (loc: Locale, p: string) =>
    new URL(localizedPath(loc, p), siteConfig.url).toString();

  /** Build the hreflang alternates map for a path. */
  const alternates = (path: string) => {
    const languages: Record<string, string> = {};
    for (const loc of LOCALES) {
      languages[localeMeta[loc].htmlLang] = u(loc, path);
    }
    languages["x-default"] = u(DEFAULT_LOCALE, path);
    return languages;
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

  // Articles, insights, discussions: emit per-locale entries using
  // each locale's own article store (which already accounts for the
  // EN-fallback). Avoids duplicate-content signals across locales
  // because each entry's URL is distinct and tagged.
  const contentEntries: MetadataRoute.Sitemap = [];

  for (const loc of LOCALES) {
    const [articles, insights] = await Promise.all([
      getAllArticles(loc),
      getAllInsights(loc),
    ]);

    for (const a of articles) {
      const path = `/${a.category}/${a.subtopic}/${a.slug}`;
      contentEntries.push({
        url: u(loc, path),
        lastModified: new Date(a.updatedDate),
        changeFrequency: "monthly",
        priority: a.type === "pillar" ? 0.9 : 0.8,
        alternates: { languages: alternates(path) },
      });
    }

    for (const i of insights) {
      const path = `/insight/${i.slug}`;
      contentEntries.push({
        url: u(loc, path),
        lastModified: new Date(i.updatedDate),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: alternates(path) },
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
        lastModified: new Date(d.updatedDate),
        changeFrequency: "weekly" as const,
        priority: 0.6,
        alternates: { languages: alternates(path) },
      };
    }),
  );

  return [...structuralEntries, ...contentEntries, ...discussionEntries];
}

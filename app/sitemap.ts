import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import {
  categories,
  listCategorySlugs,
} from "@/lib/categories";
import {
  getAllArticles,
  getAllInsights,
} from "@/lib/content";
import { getDiscussions } from "@/lib/discussions";

/**
 * Sitemap covers every level of the hierarchy:
 *   - Static (home, /insights, /discussions)
 *   - Category hubs   (/ecology, /biology, /physics)
 *   - Subtopic hubs   (/ecology/climate-change, ...)
 *   - Article leaves  (/ecology/climate-change/foo, ...)
 *   - Insight leaves  (/insight/foo)
 *   - Discussion leaves (/discussions/foo)
 *
 * `lastModified` falls back to "now" only for surfaces without a
 * meaningful update date (the home page). Everything content-bearing
 * uses its own `updatedDate` so search engines can re-index correctly.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, insights, discussions] = await Promise.all([
    getAllArticles(),
    getAllInsights(),
    getDiscussions(),
  ]);

  const u = (path: string) => new URL(path, siteConfig.url).toString();

  // Static + index pages
  const staticEntries: MetadataRoute.Sitemap = [
    { url: u("/"), changeFrequency: "weekly", priority: 1.0 },
    { url: u("/insights"), changeFrequency: "weekly", priority: 0.8 },
    { url: u("/discussions"), changeFrequency: "daily", priority: 0.7 },
  ];

  // Category hubs
  const categoryEntries: MetadataRoute.Sitemap = listCategorySlugs().map(
    (slug) => ({
      url: u(`/${slug}`),
      changeFrequency: "weekly",
      priority: 0.9,
    }),
  );

  // Subtopic hubs (3 categories x 3 subtopics = 9)
  const subtopicEntries: MetadataRoute.Sitemap = categories.flatMap((cat) =>
    cat.subtopics.map((sub) => ({
      url: u(`/${cat.slug}/${sub.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  );

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: u(a.url),
    lastModified: new Date(a.updatedDate),
    changeFrequency: "monthly",
    priority: a.type === "pillar" ? 0.9 : 0.8,
  }));

  const insightEntries: MetadataRoute.Sitemap = insights.map((i) => ({
    url: u(i.url),
    lastModified: new Date(i.updatedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const discussionEntries: MetadataRoute.Sitemap = discussions.map((d) => ({
    url: u(`/discussions/${d.slug}`),
    lastModified: new Date(d.updatedDate),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...categoryEntries,
    ...subtopicEntries,
    ...articleEntries,
    ...insightEntries,
    ...discussionEntries,
  ];
}

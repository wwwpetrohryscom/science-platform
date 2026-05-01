import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { getArticles, getInsights, getDiscussions } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, insights, discussions] = await Promise.all([
    getArticles(),
    getInsights(),
    getDiscussions(),
  ]);

  const u = (path: string) => new URL(path, siteConfig.url).toString();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: u("/"), changeFrequency: "weekly", priority: 1.0 },
    { url: u("/ecology"), changeFrequency: "weekly", priority: 0.9 },
    { url: u("/biology"), changeFrequency: "weekly", priority: 0.9 },
    { url: u("/physics"), changeFrequency: "weekly", priority: 0.9 },
    { url: u("/insights"), changeFrequency: "weekly", priority: 0.8 },
    { url: u("/discussions"), changeFrequency: "daily", priority: 0.7 },
  ];

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: u(`/article/${a.slug}`),
    lastModified: new Date(a.updatedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const insightEntries: MetadataRoute.Sitemap = insights.map((i) => ({
    url: u(`/insight/${i.slug}`),
    lastModified: new Date(i.updatedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Discussions live as anchors on a single page, but we surface them so
  // search engines can pick up the deep link.
  const discussionEntries: MetadataRoute.Sitemap = discussions.map((d) => ({
    url: u(`/discussions#${d.slug}`),
    lastModified: new Date(d.updatedDate),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...articleEntries,
    ...insightEntries,
    ...discussionEntries,
  ];
}

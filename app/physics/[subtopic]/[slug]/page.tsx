import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { getArticle, getArticlesByCategory } from "@/lib/content";

type Props = { params: { subtopic: string; slug: string } };

export async function generateStaticParams() {
  const all = await getArticlesByCategory("physics");
  return all.map((a) => ({ subtopic: a.subtopic, slug: a.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const article = await getArticle("physics", params.subtopic, params.slug);
  if (!article) {
    return buildMetadata({
      title: "Article not found",
      description: "The requested article could not be found.",
      path: `/physics/${params.subtopic}/${params.slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: article.url,
    type: "article",
    publishedDate: article.publishedDate,
    updatedDate: article.updatedDate,
    authors: [article.author.name],
    tags: article.tags,
    ogImage: article.heroImage,
  });
}

export default async function PhysicsArticlePage({ params }: Props) {
  const article = await getArticle("physics", params.subtopic, params.slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}

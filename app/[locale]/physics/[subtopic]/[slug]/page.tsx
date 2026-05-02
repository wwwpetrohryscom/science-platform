import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { getArticle, getArticlesByCategory } from "@/lib/content";
import { LOCALES, isLocale } from "@/lib/i18n";

const CATEGORY = "physics" as const;
type Props = { params: { locale: string; subtopic: string; slug: string } };

export async function generateStaticParams() {
  const out: Array<{ locale: string; subtopic: string; slug: string }> = [];
  for (const locale of LOCALES) {
    const all = await getArticlesByCategory(locale, CATEGORY);
    for (const a of all) {
      out.push({ locale, subtopic: a.subtopic, slug: a.slug });
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const article = await getArticle(
    params.locale,
    CATEGORY,
    params.subtopic,
    params.slug,
  );
  if (!article) {
    return buildMetadata({
      title: "Article not found",
      description: "The requested article could not be found.",
      path: `/${CATEGORY}/${params.subtopic}/${params.slug}`,
      locale: params.locale,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/${CATEGORY}/${article.subtopic}/${article.slug}`,
    locale: params.locale,
    availableLocales: article.availableLocales,
    type: "article",
    publishedDate: article.publishedDate,
    updatedDate: article.updatedDate,
    authors: [article.author.name],
    tags: article.tags,
    ogImage: article.heroImage,
  });
}

export default async function PhysicsArticleRoute({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const article = await getArticle(
    params.locale,
    CATEGORY,
    params.subtopic,
    params.slug,
  );
  if (!article) notFound();
  return <ArticlePage locale={params.locale} article={article} />;
}

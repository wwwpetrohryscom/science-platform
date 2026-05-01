import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { ArticleBody } from "@/components/ArticleBody";
import { AuthorBlock } from "@/components/AuthorBlock";
import { FaqSection } from "@/components/FaqSection";
import { TableOfContents } from "@/components/TableOfContents";
import { RelatedArticles } from "@/components/RelatedArticles";
import { NewsletterBlock } from "@/components/NewsletterBlock";

import {
  getArticles,
  getArticleBySlug,
  getRelatedArticles,
  formatDate,
} from "@/lib/content";
import {
  articleJsonLd,
  buildMetadata,
  categoryMeta,
  faqJsonLd,
} from "@/lib/seo";

type ArticlePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const all = await getArticles();
  return all.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return buildMetadata({
      title: "Article not found",
      description: "The requested article could not be found.",
      path: `/article/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/article/${article.slug}`,
    type: "article",
    publishedDate: article.publishedDate,
    updatedDate: article.updatedDate,
    authors: [article.author.name],
    tags: article.tags,
    ogImage: article.heroImage,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article);
  const cat = categoryMeta[article.category];

  // JSON-LD payloads — emitted inline so search engines see them in the HTML.
  const articleLd = articleJsonLd({
    title: article.title,
    description: article.excerpt,
    path: `/article/${article.slug}`,
    publishedDate: article.publishedDate,
    updatedDate: article.updatedDate,
    authorName: article.author.name,
    image: article.heroImage,
  });
  const faqLd = article.faq && article.faq.length > 0 ? faqJsonLd(article.faq) : null;

  const tocItems = article.content.map((s) => ({ id: s.id, heading: s.heading }));

  return (
    <Layout>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <article className="container-page py-12 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-ink-subtle">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary-700">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`/${article.category}`}
                className="hover:text-primary-700"
              >
                {cat.label}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="truncate text-ink-muted">{article.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mt-6 max-w-4xl">
          <p className="eyebrow">{cat.label}</p>
          <h1 className="mt-3 font-serif text-display-lg font-semibold tracking-tight text-ink">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-ink-line py-4">
            <AuthorBlock author={article.author} variant="byline" />
            <div className="text-xs text-ink-subtle">
              <p>
                <span className="font-medium text-ink">Published</span>{" "}
                <time dateTime={article.publishedDate}>
                  {formatDate(article.publishedDate)}
                </time>
              </p>
              <p className="mt-0.5">
                <span className="font-medium text-ink">Updated</span>{" "}
                <time dateTime={article.updatedDate}>
                  {formatDate(article.updatedDate)}
                </time>
                <span aria-hidden> · </span>
                {article.readingTime} min read
              </p>
            </div>
          </div>
        </header>

        {/* Body + sticky TOC */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div className="max-w-reader">
            <ArticleBody sections={article.content} />

            <NewsletterBlock variant="inline" />

            {article.faq && article.faq.length > 0 && (
              <FaqSection items={article.faq} />
            )}

            <AuthorBlock author={article.author} />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
              {article.tags.length > 0 && (
                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                    Tagged
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-sm bg-ink-surface px-2 py-0.5 text-[11px] uppercase tracking-wide text-ink-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>

        <RelatedArticles articles={related} />
      </article>
    </Layout>
  );
}

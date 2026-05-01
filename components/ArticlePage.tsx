import Link from "next/link";

import { Layout } from "@/components/Layout";
import { ArticleBody } from "@/components/ArticleBody";
import { AuthorBlock } from "@/components/AuthorBlock";
import { FaqSection } from "@/components/FaqSection";
import { TableOfContents } from "@/components/TableOfContents";
import { RelatedArticles } from "@/components/RelatedArticles";
import { NewsletterBlock } from "@/components/NewsletterBlock";

import {
  formatDate,
  getArticleBySlug,
  getPillarForSubtopic,
  getRelatedArticles,
  type Article,
} from "@/lib/content";
import { getCategory } from "@/lib/categories";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

type ArticlePageProps = {
  article: Article;
};

/**
 * Article reader (level 3 of 3 in the topic hierarchy).
 *
 * Layout: hero header (eyebrow + title + byline + dates), then a
 * two-column body with prose on the left and a sticky TOC + tag
 * panel on the right. Below the body: FAQ (if present), author
 * card, pillar callout (if this article isn't the pillar), and
 * related articles.
 *
 * The pillar callout is the most important internal-linking move
 * on this page — it ensures every leaf article links up the
 * hierarchy to the canonical entry-point for its subtopic.
 */
export async function ArticlePage({ article }: ArticlePageProps) {
  const def = getCategory(article.category);
  const subtopic = def.subtopics.find((s) => s.slug === article.subtopic);
  if (!subtopic) {
    throw new Error(
      `Article ${article.slug} references unknown subtopic ${article.subtopic}.`,
    );
  }

  // Pillar callout: only show if this article is NOT itself the pillar.
  const subtopicPillar = await getPillarForSubtopic(
    article.category,
    article.subtopic,
  );
  const pillarCallout =
    subtopicPillar && subtopicPillar.slug !== article.slug
      ? subtopicPillar
      : article.pillar
        ? await getArticleBySlug(article.pillar)
        : null;

  const related = await getRelatedArticles(article);

  // Structured data
  const articleLd = articleJsonLd({
    title: article.title,
    description: article.excerpt,
    path: article.url,
    publishedDate: article.publishedDate,
    updatedDate: article.updatedDate,
    authorName: article.author.name,
    image: article.heroImage,
  });
  const faqLd =
    article.faq && article.faq.length > 0 ? faqJsonLd(article.faq) : null;
  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: def.label, path: `/${article.category}` },
    { name: subtopic.label, path: `/${article.category}/${article.subtopic}` },
    { name: article.title, path: article.url },
  ]);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <article className="container-page py-12 md:py-16">
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
                {def.label}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`/${article.category}/${article.subtopic}`}
                className="hover:text-primary-700"
              >
                {subtopic.label}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="truncate text-ink-muted">{article.title}</li>
          </ol>
        </nav>

        <header className="mt-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <p className="eyebrow">
              {def.label} · {subtopic.label}
            </p>
            {article.type === "pillar" && (
              <span className="rounded-sm bg-primary-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-800">
                Pillar
              </span>
            )}
          </div>
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

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div className="max-w-reader">
            <ArticleBody html={article.html} />

            <NewsletterBlock variant="inline" />

            {article.faq && article.faq.length > 0 && (
              <FaqSection items={article.faq} />
            )}

            {pillarCallout && (
              <aside className="mt-12 rounded-lg border border-primary-100 bg-primary-50/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                  Pillar article — {subtopic.label}
                </p>
                <h3 className="mt-2 font-serif text-lg font-semibold text-ink">
                  <Link
                    href={pillarCallout.url}
                    className="hover:text-primary-700"
                  >
                    {pillarCallout.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  {pillarCallout.excerpt}
                </p>
                <Link
                  href={pillarCallout.url}
                  className="link-strong mt-3 inline-block text-sm"
                >
                  Read the pillar →
                </Link>
              </aside>
            )}

            <AuthorBlock author={article.author} />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={article.toc} />
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
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  In this hierarchy
                </p>
                <ul className="space-y-1.5 text-sm">
                  <li>
                    <Link
                      href={`/${article.category}`}
                      className="link-quiet"
                    >
                      ← {def.label}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${article.category}/${article.subtopic}`}
                      className="link-quiet"
                    >
                      ← {subtopic.label}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <RelatedArticles articles={related} showSubtopic />
      </article>
    </Layout>
  );
}

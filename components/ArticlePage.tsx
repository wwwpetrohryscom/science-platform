import Link from "next/link";

import { Layout } from "@/components/Layout";
import { ArticleBody } from "@/components/ArticleBody";
import { AuthorBlock } from "@/components/AuthorBlock";
import { FaqSection } from "@/components/FaqSection";
import { TableOfContents } from "@/components/TableOfContents";
import { RelatedArticles } from "@/components/RelatedArticles";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { GeneratedBlock } from "@/components/GeneratedBlock";

import {
  formatDate,
  getArticleBySlug,
  getPillarForSubtopic,
  getRelatedArticles,
  type Article,
} from "@/lib/content";
import { getCategory } from "@/lib/categories";
import { extractCitationUrls } from "@/lib/sources";
import {
  generateArticleIntro,
  generateArticleMethodologyNote,
  generateConceptExplanation,
  generateResearchSummary,
  generateUncertaintyNote,
} from "@/lib/content/generators";
import {
  evidenceForConceptCopy,
  exploreTopicCopy,
  relatedInSubtopicCopy,
} from "@/lib/content/internal-links";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import {
  getMessages,
  localeMeta,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type ArticlePageProps = {
  locale: Locale;
  article: Article;
};

export async function ArticlePage({ locale, article }: ArticlePageProps) {
  const def = getCategory(article.category);
  const subtopic = def.subtopics.find((s) => s.slug === article.subtopic);
  if (!subtopic) {
    throw new Error(
      `Article ${article.slug} references unknown subtopic ${article.subtopic}.`,
    );
  }

  const t = translator(getMessages(locale));
  const categoryLabel = t(`categories.${article.category}.label`);
  const subtopicLabel = t(`subtopics.${article.subtopic}.label`);

  // Pillar callout: only show if this article is NOT itself the pillar.
  const subtopicPillar = await getPillarForSubtopic(
    locale,
    article.category,
    article.subtopic,
  );
  const pillarCallout =
    subtopicPillar && subtopicPillar.slug !== article.slug
      ? subtopicPillar
      : article.pillar
        ? await getArticleBySlug(locale, article.pillar)
        : null;

  const related = await getRelatedArticles(article);

  // Generated content blocks — derived from structured frontmatter +
  // body citation count. No external API call, no client-side fetch.
  const citationCount = extractCitationUrls(article.rawBody).length;
  const articleGenInput = {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    subtopic: article.subtopic,
    publishedDate: article.publishedDate,
    updatedDate: article.updatedDate,
    tags: article.tags,
    type: article.type,
    citationCount,
  };
  const introBlock = generateArticleIntro(articleGenInput);
  const researchBlock = generateResearchSummary(articleGenInput);
  const methodologyBlock = generateArticleMethodologyNote(article.category);
  const uncertaintyBlock = generateUncertaintyNote({
    level: citationCount === 0 ? "insufficient" : "medium",
    limitation:
      citationCount < 2 && citationCount > 0
        ? "fewer than two independent citations on this page"
        : undefined,
  });
  const primaryConcept = article.tags[0];
  const conceptBlock = primaryConcept
    ? generateConceptExplanation(
        primaryConcept,
        `${article.category}/${article.subtopic}/${article.slug}`,
      )
    : null;

  // Structured data — use the article's localized URL for inLanguage
  // and mainEntityOfPage. Hreflang is emitted via metadata, not JSON-LD.
  const articleLd = articleJsonLd({
    title: article.title,
    description: article.excerpt,
    path: article.url,
    inLanguage: localeMeta[locale].htmlLang,
    publishedDate: article.publishedDate,
    updatedDate: article.updatedDate,
    authorName: article.author.name,
    image: article.heroImage,
  });
  const faqLd =
    article.faq && article.faq.length > 0 ? faqJsonLd(article.faq) : null;
  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    {
      name: categoryLabel,
      path: localizedPath(locale, `/${article.category}`),
    },
    {
      name: subtopicLabel,
      path: localizedPath(locale, `/${article.category}/${article.subtopic}`),
    },
    { name: article.title, path: article.url },
  ]);

  return (
    <Layout locale={locale}>
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
              <Link href={localizedPath(locale, "/")} className="hover:text-primary-700">
                {t("nav.home")}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={localizedPath(locale, `/${article.category}`)}
                className="hover:text-primary-700"
              >
                {categoryLabel}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={localizedPath(
                  locale,
                  `/${article.category}/${article.subtopic}`,
                )}
                className="hover:text-primary-700"
              >
                {subtopicLabel}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="truncate text-ink-muted">{article.title}</li>
          </ol>
        </nav>

        {/* Locale fallback notice — shown when this URL was requested in
            a locale that hasn't translated this article yet. The page
            still renders with English content (per spec: "do not expose
            broken pages") but flags the gap to the reader. */}
        {article.localeFallback && (
          <div
            role="status"
            className="mt-6 rounded-md border border-accent-200 bg-accent-50/60 px-4 py-3 text-sm text-ink"
          >
            {t("article.fallback_notice", {
              language: localeMeta[locale].nativeName,
            })}
          </div>
        )}

        <header className="mt-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <p className="eyebrow">
              {categoryLabel} · {subtopicLabel}
            </p>
            {article.type === "pillar" && (
              <span className="rounded-sm bg-primary-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-800">
                {t("article.pillar_badge")}
              </span>
            )}
          </div>
          <h1 className="mt-3 font-serif text-display-lg font-semibold tracking-tight text-ink">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {article.excerpt}
          </p>
          <div className="mt-4 max-w-3xl">
            <GeneratedBlock block={introBlock} variant="explanation" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-ink-line py-4">
            <AuthorBlock author={article.author} variant="byline" />
            <div className="text-xs text-ink-subtle">
              <p>
                <span className="font-medium text-ink">{t("article.published")}</span>{" "}
                <time dateTime={article.publishedDate}>
                  {formatDate(article.publishedDate, locale)}
                </time>
              </p>
              <p className="mt-0.5">
                <span className="font-medium text-ink">{t("article.updated")}</span>{" "}
                <time dateTime={article.updatedDate}>
                  {formatDate(article.updatedDate, locale)}
                </time>
                <span aria-hidden> · </span>
                {t("article.min_read", { minutes: article.readingTime })}
              </p>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div className="max-w-reader">
            <ArticleBody html={article.html} />

            {/* Evidence summary — derives from real citation count,
                so it never claims more support than the body has. */}
            <section
              aria-labelledby="evidence-summary-heading"
              className="mt-10 rounded-md border border-ink-line bg-ink-surface p-5"
            >
              <h2
                id="evidence-summary-heading"
                className="font-serif text-lg font-semibold text-ink"
              >
                Evidence and uncertainty
              </h2>
              <div className="mt-3">
                <GeneratedBlock block={researchBlock} variant="note" />
              </div>
              <div className="mt-3">
                <GeneratedBlock block={uncertaintyBlock} variant="note" />
              </div>
              {conceptBlock && (
                <div className="mt-3">
                  <GeneratedBlock
                    block={conceptBlock}
                    variant="note"
                    eyebrow="Concept"
                  />
                  <p className="mt-2 text-xs text-ink-subtle">
                    <Link
                      href={localizedPath(
                        locale,
                        `/${article.category}/${article.subtopic}`,
                      )}
                      className="link-quiet"
                    >
                      {evidenceForConceptCopy(primaryConcept ?? subtopicLabel)}
                    </Link>
                  </p>
                </div>
              )}
              <div className="mt-4">
                <GeneratedBlock
                  block={methodologyBlock}
                  variant="note"
                  eyebrow="Methodology"
                />
              </div>
              <p className="mt-4 text-xs text-ink-subtle">
                Last updated{" "}
                <time dateTime={article.updatedDate}>
                  {formatDate(article.updatedDate, locale)}
                </time>{" "}
                ·{" "}
                <Link
                  href={localizedPath(locale, `/${article.category}`)}
                  className="link-quiet"
                >
                  {exploreTopicCopy(categoryLabel)}
                </Link>{" "}
                ·{" "}
                <Link
                  href={localizedPath(
                    locale,
                    `/${article.category}/${article.subtopic}`,
                  )}
                  className="link-quiet"
                >
                  {relatedInSubtopicCopy(subtopicLabel)}
                </Link>
              </p>
            </section>

            <NewsletterBlock locale={locale} variant="inline" />

            {article.faq && article.faq.length > 0 && (
              <FaqSection items={article.faq} locale={locale} />
            )}

            {pillarCallout && (
              <aside className="mt-12 rounded-lg border border-primary-100 bg-primary-50/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                  {t("article.pillar_callout", { subtopic: subtopicLabel })}
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
                  {t("article.read_pillar")}
                </Link>
              </aside>
            )}

            <AuthorBlock author={article.author} />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={article.toc} locale={locale} />
              {article.tags.length > 0 && (
                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                    {t("article.tagged")}
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
                  {t("article.in_hierarchy")}
                </p>
                <ul className="space-y-1.5 text-sm">
                  <li>
                    <Link
                      href={localizedPath(locale, `/${article.category}`)}
                      className="link-quiet"
                    >
                      ← {categoryLabel}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={localizedPath(
                        locale,
                        `/${article.category}/${article.subtopic}`,
                      )}
                      className="link-quiet"
                    >
                      ← {subtopicLabel}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <RelatedArticles locale={locale} articles={related} showSubtopic />
      </article>
    </Layout>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { ArticleBody } from "@/components/ArticleBody";
import { AuthorBlock } from "@/components/AuthorBlock";
import { TableOfContents } from "@/components/TableOfContents";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { GeneratedBlock } from "@/components/GeneratedBlock";
import { SourceList } from "@/components/SourceList";

import {
  formatDate,
  getAllInsights,
  getInsight,
} from "@/lib/content";
import { extractCitationUrls } from "@/lib/sources";
import {
  generateArticleMethodologyNote,
  generateResearchSummary,
  generateSourceBlock,
  generateUncertaintyNote,
  listSourcesForTopic,
} from "@/lib/content/generators";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
} from "@/lib/seo";
import {
  LOCALES,
  getMessages,
  isLocale,
  localeMeta,
  localizedPath,
  translator,
} from "@/lib/i18n";

type Props = { params: { locale: string; slug: string } };

export async function generateStaticParams() {
  const out: Array<{ locale: string; slug: string }> = [];
  for (const locale of LOCALES) {
    const all = await getAllInsights(locale);
    for (const i of all) out.push({ locale, slug: i.slug });
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const insight = await getInsight(params.locale, params.slug);
  if (!insight) {
    return buildMetadata({
      title: "Insight not found",
      description: "The requested insight could not be found.",
      path: `/insight/${params.slug}`,
      locale: params.locale,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insight/${insight.slug}`,
    locale: params.locale,
    availableLocales: insight.availableLocales,
    type: "article",
    publishedDate: insight.publishedDate,
    updatedDate: insight.updatedDate,
    authors: [insight.author.name],
    tags: insight.tags,
    noIndex: insight.localeFallback,
  });
}

export default async function InsightPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const insight = await getInsight(locale, params.slug);
  if (!insight) notFound();

  const t = translator(getMessages(locale));
  const categoryLabel = t(`categories.${insight.category}.label`);

  // Generated context blocks for the insight: a research summary
  // (sized by real citation count), an uncertainty note, a
  // methodology note, and the curated source registry — all
  // rendered server-side in initial HTML.
  const insightCitationCount = extractCitationUrls(insight.rawBody).length;
  const researchBlock = generateResearchSummary({
    slug: insight.slug,
    title: insight.title,
    excerpt: insight.excerpt,
    category: insight.category,
    // Insights are not pinned to a subtopic — use the first one in
    // the category as the framing context for the generator.
    subtopic: "",
    publishedDate: insight.publishedDate,
    updatedDate: insight.updatedDate,
    tags: insight.tags,
    type: "expert",
    citationCount: insightCitationCount,
  });
  const uncertaintyBlock = generateUncertaintyNote({
    level: insightCitationCount === 0 ? "insufficient" : "medium",
    limitation:
      insightCitationCount > 0 && insightCitationCount < 2
        ? "argument rests on a small citation pool"
        : undefined,
  });
  const methodologyBlock = generateArticleMethodologyNote(insight.category);
  const sourceBlock = generateSourceBlock(insight.category);
  const sources = listSourcesForTopic(insight.category);

  const articleLd = articleJsonLd({
    title: insight.title,
    description: insight.excerpt,
    path: insight.url,
    inLanguage: localeMeta[locale].htmlLang,
    publishedDate: insight.publishedDate,
    updatedDate: insight.updatedDate,
    authorName: insight.author.name,
  });
  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: t("insights.title"), path: localizedPath(locale, "/insights") },
    { name: insight.title, path: insight.url },
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
              <Link href={localizedPath(locale, "/insights")} className="hover:text-primary-700">
                {t("insights.title")}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="truncate text-ink-muted">{insight.title}</li>
          </ol>
        </nav>

        {insight.localeFallback && (
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
          <p className="eyebrow">
            {t("insights.category_eyebrow", { category: categoryLabel })}
          </p>
          <h1 className="mt-3 font-serif text-display-xl font-semibold tracking-tight text-ink">
            {insight.title}
          </h1>

          <p className="mt-6 max-w-3xl border-l-4 border-accent-400 pl-6 font-serif text-xl italic leading-relaxed text-ink md:text-2xl">
            {insight.argument}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-ink-line py-4">
            <AuthorBlock author={insight.author} variant="byline" />
            <div className="text-xs text-ink-subtle">
              <p>
                <span className="font-medium text-ink">{t("article.published")}</span>{" "}
                <time dateTime={insight.publishedDate}>
                  {formatDate(insight.publishedDate, locale)}
                </time>
              </p>
              <p className="mt-0.5">
                <span className="font-medium text-ink">{t("article.updated")}</span>{" "}
                <time dateTime={insight.updatedDate}>
                  {formatDate(insight.updatedDate, locale)}
                </time>
                <span aria-hidden> · </span>
                {t("article.min_read", { minutes: insight.readingTime })}
              </p>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div className="max-w-reader">
            <p className="text-lg leading-relaxed text-ink-muted">
              {insight.excerpt}
            </p>

            <div className="mt-8">
              <ArticleBody html={insight.html} />
            </div>

            {/* Source intro + research summary + transparent
                uncertainty disclosure. All server-rendered. */}
            <section
              aria-labelledby="insight-evidence-heading"
              className="mt-10 rounded-md border border-ink-line bg-ink-surface p-5"
            >
              <h2
                id="insight-evidence-heading"
                className="font-serif text-lg font-semibold text-ink"
              >
                Sources behind this argument
              </h2>
              <div className="mt-3">
                <GeneratedBlock block={sourceBlock} variant="note" />
              </div>
              <div className="mt-3">
                <GeneratedBlock block={researchBlock} variant="note" />
              </div>
              <div className="mt-3">
                <GeneratedBlock
                  block={uncertaintyBlock}
                  variant="note"
                  eyebrow="Uncertainty"
                />
              </div>
              <div className="mt-3">
                <GeneratedBlock
                  block={methodologyBlock}
                  variant="note"
                  eyebrow="Methodology"
                />
              </div>
              <p className="mt-4 text-xs text-ink-subtle">
                Last updated{" "}
                <time dateTime={insight.updatedDate}>
                  {formatDate(insight.updatedDate, locale)}
                </time>
              </p>
            </section>

            <SourceList
              sources={sources}
              heading={`Curated ${categoryLabel} sources`}
              description={`${categoryLabel} citations are validated against this registry of recognised research bodies.`}
              limit={6}
            />

            <NewsletterBlock locale={locale} variant="inline" />

            <AuthorBlock author={insight.author} />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={insight.toc} locale={locale} />
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  );
}

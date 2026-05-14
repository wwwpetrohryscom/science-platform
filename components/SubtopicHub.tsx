import Link from "next/link";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { GeneratedBlock } from "@/components/GeneratedBlock";
import { SourceList } from "@/components/SourceList";
import { FaqBlock } from "@/components/FaqBlock";

import { getCategory, type CategorySlug } from "@/lib/categories";
import {
  getArticlesBySubtopic,
  getPillarForSubtopic,
  getSiblingSubtopics,
  type Article,
} from "@/lib/content";
import {
  generateMethodologyNote,
  generateSubtopicExplanation,
  generateSubtopicIntro,
  listSourcesForTopic,
} from "@/lib/content/generators";
import { getSubtopicFaqs } from "@/lib/content/faqs";
import {
  relatedInSubtopicCopy,
} from "@/lib/content/internal-links";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import {
  getMessages,
  localeMeta,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type SubtopicHubProps = {
  locale: Locale;
  category: CategorySlug;
  subtopicSlug: string;
};

export async function SubtopicHub({
  locale,
  category,
  subtopicSlug,
}: SubtopicHubProps) {
  const def = getCategory(category);
  const subtopic = def.subtopics.find((s) => s.slug === subtopicSlug);
  if (!subtopic) {
    throw new Error(
      `SubtopicHub rendered with unknown subtopic "${subtopicSlug}" for category "${category}".`,
    );
  }

  const t = translator(getMessages(locale));
  const categoryLabel = t(`categories.${category}.label`);
  const subtopicLabel = t(`subtopics.${subtopicSlug}.label`);
  const subtopicDescription = t(`subtopics.${subtopicSlug}.description`);

  const [allInSub, pillar] = await Promise.all([
    getArticlesBySubtopic(locale, category, subtopicSlug),
    getPillarForSubtopic(locale, category, subtopicSlug),
  ]);

  const restOfSub = pillar
    ? allInSub.filter((a) => a.slug !== pillar.slug)
    : allInSub;
  const siblings = getSiblingSubtopics(category, subtopicSlug);
  const grouped = groupByIntent(restOfSub);
  const subtopicFaqs = getSubtopicFaqs(category, subtopicSlug);

  // Structured data: BreadcrumbList + CollectionPage (article
  // inventory) + FAQPage when an FAQ block is rendered.
  const subtopicPath = localizedPath(locale, `/${category}/${subtopicSlug}`);
  const collectionItems = (pillar ? [pillar, ...restOfSub] : restOfSub).map(
    (a) => ({ name: a.title, path: a.url }),
  );
  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: categoryLabel, path: localizedPath(locale, `/${category}`) },
    { name: subtopicLabel, path: subtopicPath },
  ]);
  const collectionLd = collectionPageJsonLd({
    title: `${subtopicLabel} — ${categoryLabel}`,
    description: subtopicDescription,
    path: subtopicPath,
    inLanguage: localeMeta[locale].htmlLang,
    items: collectionItems,
  });
  const faqLd = subtopicFaqs.length > 0 ? faqJsonLd(subtopicFaqs) : null;

  const subtopicIntro = generateSubtopicIntro({
    category,
    subtopicSlug,
    articleCount: allInSub.length,
    pillarTitle: pillar?.title,
  });
  const subtopicExplanationBlock = generateSubtopicExplanation({
    category,
    subtopicSlug,
    articleCount: allInSub.length,
    pillarTitle: pillar?.title,
  });
  const methodology = generateMethodologyNote(category);
  const sources = listSourcesForTopic(category);

  return (
    <Layout locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <PageHeading
        eyebrow={t("subtopic_hub.subtopic_eyebrow", { category: categoryLabel })}
        title={subtopicLabel}
        description={subtopicDescription}
        accent={def.accent}
        crumbs={[
          { label: t("nav.home"), href: localizedPath(locale, "/") },
          { label: categoryLabel, href: localizedPath(locale, `/${category}`) },
        ]}
      />

      {/* Generated subtopic intro */}
      <section
        aria-labelledby="subtopic-intro-heading"
        className="container-page mt-10 max-w-3xl"
      >
        <h2 id="subtopic-intro-heading" className="sr-only">
          About {subtopicLabel}
        </h2>
        <GeneratedBlock block={subtopicIntro} variant="intro" />
        <div className="mt-6">
          <GeneratedBlock
            block={subtopicExplanationBlock}
            variant="explanation"
          />
        </div>
      </section>

      {/* Pillar feature */}
      {pillar && (
        <section
          aria-labelledby="pillar-heading"
          className="container-page mt-14"
        >
          <p
            id="pillar-heading"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle"
          >
            {t("subtopic_hub.start_here")}
          </p>
          <Link
            href={pillar.url}
            className="group mt-3 block rounded-lg border border-primary-100 bg-primary-50/50 p-7 shadow-soft transition-shadow hover:shadow-card md:p-10"
          >
            <p className="eyebrow">{t("subtopic_hub.pillar_label")}</p>
            <h2 className="mt-3 max-w-3xl font-serif text-2xl font-semibold leading-tight tracking-tight text-ink group-hover:text-primary-700 md:text-3xl">
              {pillar.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {pillar.excerpt}
            </p>
            <p className="mt-6 text-sm text-ink-muted">
              {t("subtopic_hub.by_author_reading_time", {
                author: pillar.author.name,
                minutes: pillar.readingTime,
              })}
            </p>
          </Link>
        </section>
      )}

      {/* Rest of subtopic — grouped by intent for crawl clarity. */}
      {restOfSub.length > 0 && (
        <div className="container-page mt-20 space-y-14">
          {INTENT_ORDER.map((intent) => {
            const items = grouped[intent];
            if (items.length === 0) return null;
            return (
              <section
                key={intent}
                aria-labelledby={`group-${intent}-heading`}
              >
                <h2
                  id={`group-${intent}-heading`}
                  className="font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl"
                >
                  {INTENT_LABELS[intent]}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                  {INTENT_DESCRIPTIONS[intent]}
                </p>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((article) => (
                    <ArticleCard
                      key={article.slug}
                      locale={locale}
                      article={article}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {restOfSub.length === 0 && !pillar && (
        <div className="container-page mt-14">
          <p className="text-ink-muted">{t("subtopic_hub.empty")}</p>
        </div>
      )}

      {/* Sibling subtopics — cross-linking within the category */}
      {siblings.length > 0 && (
        <section
          aria-labelledby="siblings-heading"
          className="container-page mt-20"
        >
          <h2
            id="siblings-heading"
            className="font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl"
          >
            {t("subtopic_hub.siblings_title", { category: categoryLabel })}
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {siblings.map((sib) => (
              <Link
                key={sib.slug}
                href={localizedPath(locale, `/${category}/${sib.slug}`)}
                className="group flex items-start justify-between gap-4 rounded-md border border-ink-line bg-white p-5 transition-colors hover:border-primary-300"
              >
                <div>
                  <p className="font-serif text-lg font-semibold text-ink group-hover:text-primary-700">
                    {t(`subtopics.${sib.slug}.label`)}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {t(`subtopics.${sib.slug}.description`)}
                  </p>
                  <p className="mt-2 text-xs text-ink-subtle">
                    {relatedInSubtopicCopy(t(`subtopics.${sib.slug}.label`))}
                  </p>
                </div>
                <span aria-hidden className="text-primary-600 mt-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Source transparency — methodology + curated registry. */}
      <section
        aria-labelledby="subtopic-sources-heading"
        className="container-page mt-20 max-w-3xl"
      >
        <h2
          id="subtopic-sources-heading"
          className="font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl"
        >
          Where the evidence comes from
        </h2>
        <div className="mt-4">
          <GeneratedBlock block={methodology} variant="explanation" />
        </div>
        <SourceList
          sources={sources}
          heading={`Curated sources for ${categoryLabel}`}
          description={`Citations under ${subtopicLabel} are validated against this registry.`}
          limit={6}
        />
      </section>

      {subtopicFaqs.length > 0 && (
        <FaqBlock
          heading={`Frequently asked about ${subtopicLabel.toLowerCase()}`}
          description="Short, source-backed answers anchored to the articles in this subtopic."
          items={subtopicFaqs}
        />
      )}

      <div className="mt-24">
        <NewsletterBlock locale={locale} />
      </div>
    </Layout>
  );
}

type IntentKey = "foundation" | "methods" | "applications";

const INTENT_ORDER: IntentKey[] = ["foundation", "methods", "applications"];

const INTENT_LABELS: Record<IntentKey, string> = {
  foundation: "Foundation",
  methods: "Methods and indicators",
  applications: "Applications and frontiers",
};

const INTENT_DESCRIPTIONS: Record<IntentKey, string> = {
  foundation: "Core definitions and mechanisms — the conceptual base for the rest of this subtopic.",
  methods: "How the phenomenon is measured, monitored, and quantified.",
  applications: "Frontier questions, policy applications, and where the evidence is still being assembled.",
};

/**
 * Deterministic article-to-intent mapping. Uses tags first, then
 * frontmatter type as a fallback. Articles that match no bucket land
 * in "applications" so every article is still surfaced.
 */
function groupByIntent(articles: Article[]): Record<IntentKey, Article[]> {
  const out: Record<IntentKey, Article[]> = {
    foundation: [],
    methods: [],
    applications: [],
  };

  for (const a of articles) {
    const tags = a.tags.map((t) => t.toLowerCase());
    const title = a.title.toLowerCase();
    const isMethods =
      tags.some((t) =>
        [
          "indicator",
          "indicators",
          "monitoring",
          "measurement",
          "methods",
          "method",
        ].includes(t),
      ) ||
      /\b(indicator|indicators|monitoring|measurement)\b/.test(title);

    const isFoundation =
      a.type === "pillar" ||
      /^what is\b|\bbasics?\b/i.test(a.title);

    if (isFoundation) out.foundation.push(a);
    else if (isMethods) out.methods.push(a);
    else out.applications.push(a);
  }
  return out;
}

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { SubtopicCard } from "@/components/SubtopicCard";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { SourceList } from "@/components/SourceList";
import { FaqBlock } from "@/components/FaqBlock";

import { getCategory, type CategorySlug } from "@/lib/categories";
import {
  getArticlesByCategory,
  getPillarForSubtopic,
  getSubtopicCounts,
} from "@/lib/content";
import { listSourcesForTopic } from "@/lib/content/generators";
import { getTopicFaqs } from "@/lib/content/faqs";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import {
  DEFAULT_LOCALE,
  getMessages,
  localeMeta,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type CategoryHubProps = {
  locale: Locale;
  category: CategorySlug;
};

export async function CategoryHub({ locale, category }: CategoryHubProps) {
  const def = getCategory(category);
  const t = translator(getMessages(locale));
  const label = t(`categories.${category}.label`);
  const description = t(`categories.${category}.description`);

  const [allArticles, counts] = await Promise.all([
    getArticlesByCategory(locale, category),
    getSubtopicCounts(locale, category),
  ]);

  const pillars = (
    await Promise.all(
      def.subtopics.map((s) => getPillarForSubtopic(locale, category, s.slug)),
    )
  ).filter((a): a is NonNullable<typeof a> => Boolean(a));

  const latest = allArticles.slice(0, 6);

  const sources = listSourcesForTopic(category);
  const faqs = getTopicFaqs(category);

  // Structured data: BreadcrumbList, CollectionPage (with article
  // inventory), and FAQPage (only when the FAQ block is actually
  // rendered on the page).
  const hubPath = localizedPath(locale, `/${category}`);
  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: label, path: hubPath },
  ]);
  const collectionLd = collectionPageJsonLd({
    title: label,
    description,
    path: hubPath,
    inLanguage: localeMeta[locale].htmlLang,
    items: [...pillars, ...latest.filter((a) => !pillars.includes(a))].map(
      (a) => ({ name: a.title, path: a.url }),
    ),
  });
  const faqLd =
    locale === DEFAULT_LOCALE && faqs.length > 0 ? faqJsonLd(faqs) : null;

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
        eyebrow={t("home.topics_eyebrow")}
        title={label}
        description={description}
        accent={def.accent}
        crumbs={[{ label: t("nav.home"), href: localizedPath(locale, "/") }]}
      />

      {/* Scope line. Derived from the taxonomy and localized, replacing
          a template-composed English paragraph that read the same way on
          every locale and added nothing the description did not. */}
      <section className="container-page mt-10 max-w-3xl">
        <p className="text-base leading-relaxed text-ink-muted">
          {t("hub.topic_scope", { count: def.subtopics.length })}
        </p>
      </section>

      {/* Subtopics */}
      <section
        aria-labelledby="subtopics-heading"
        className="container-page mt-14"
      >
        <SectionHeader
          id="subtopics-heading"
          title={t("category_hub.subtopics_title")}
          subtitle={t("category_hub.subtopics_subtitle", {
            category: label.toLowerCase(),
          })}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {def.subtopics.map((sub) => (
            <SubtopicCard
              key={sub.slug}
              locale={locale}
              category={category}
              subtopicSlug={sub.slug}
              articleCount={counts[sub.slug] ?? 0}
            />
          ))}
        </div>
      </section>

      {/* Pillar articles */}
      {pillars.length > 0 && (
        <section
          aria-labelledby="pillars-heading"
          className="container-page mt-20"
        >
          <SectionHeader
            id="pillars-heading"
            title={t("category_hub.pillars_title")}
            subtitle={t("category_hub.pillars_subtitle")}
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((article) => (
              <ArticleCard
                key={`${article.subtopic}/${article.slug}`}
                locale={locale}
                article={article}
                showSubtopic
              />
            ))}
          </div>
        </section>
      )}

      {/* Latest in category */}
      {latest.length > 0 && (
        <section
          aria-labelledby="latest-heading"
          className="container-page mt-20"
        >
          <SectionHeader
            id="latest-heading"
            title={t("category_hub.latest_title", { category: label })}
            subtitle={t("category_hub.latest_subtitle")}
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard
                key={`${article.subtopic}/${article.slug}`}
                locale={locale}
                article={article}
                showSubtopic
              />
            ))}
          </div>
        </section>
      )}

      {/* Methodology + curated sources — every topic page surfaces
          provenance so generated explanations stay accountable. */}
      <section
        aria-labelledby="methodology-heading"
        className="container-page mt-20 max-w-3xl"
      >
        <h2
          id="methodology-heading"
          className="font-serif text-display-md font-semibold tracking-tight text-ink"
        >
          {t("common.methodology_sources")}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          {t("hub.methodology")}
        </p>
        <SourceList
          sources={sources}
          heading={t("hub.sources_heading")}
          description={t("hub.sources_description")}
          limit={8}
        />
      </section>

      {/* The FAQ registry is English-only, and an English FAQPage under a
          localized URL is both untranslated content and a schema claim in
          the wrong language. Rendered on EN alone until the registry is
          translated. */}
      {locale === DEFAULT_LOCALE && faqs.length > 0 && (
        <FaqBlock
          heading={t("category_hub.faq_heading", { category: label })}
          description={t("category_hub.faq_description")}
          items={faqs}
        />
      )}

      <div className="mt-24">
        <NewsletterBlock locale={locale} />
      </div>
    </Layout>
  );
}

function SectionHeader({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2
        id={id}
        className="font-serif text-display-md font-semibold tracking-tight text-ink"
      >
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-base text-ink-muted">{subtitle}</p>
    </div>
  );
}

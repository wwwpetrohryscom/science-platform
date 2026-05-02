import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { SubtopicCard } from "@/components/SubtopicCard";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";

import { getCategory, type CategorySlug } from "@/lib/categories";
import {
  getArticlesByCategory,
  getPillarForSubtopic,
  getSubtopicCounts,
} from "@/lib/content";
import {
  getMessages,
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

  return (
    <Layout locale={locale}>
      <PageHeading
        eyebrow={t("home.topics_eyebrow")}
        title={label}
        description={description}
        accent={def.accent}
        crumbs={[{ label: t("nav.home"), href: localizedPath(locale, "/") }]}
      />

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

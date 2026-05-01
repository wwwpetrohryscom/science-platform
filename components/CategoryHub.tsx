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

type CategoryHubProps = {
  category: CategorySlug;
};

/**
 * Category landing page (level 1 of 3 in the topic hierarchy).
 *
 * Sections (top to bottom):
 *   - Hero with category description
 *   - Subtopic grid — the primary navigation surface for this category
 *   - Featured pillar articles, one per subtopic
 *   - Latest 6 articles in the category
 *   - Newsletter
 *
 * The same component renders /ecology, /biology, /physics. Per-category
 * customization (different hero accent, custom OG image, additional
 * sections) can be passed through props later without changing the
 * underlying data calls.
 */
export async function CategoryHub({ category }: CategoryHubProps) {
  const def = getCategory(category);

  const [allArticles, counts] = await Promise.all([
    getArticlesByCategory(category),
    getSubtopicCounts(category),
  ]);

  const pillars = (
    await Promise.all(
      def.subtopics.map((s) => getPillarForSubtopic(category, s.slug)),
    )
  ).filter((a): a is NonNullable<typeof a> => Boolean(a));

  const latest = allArticles.slice(0, 6);

  return (
    <Layout>
      <PageHeading
        eyebrow="Topic"
        title={def.label}
        description={def.description}
        accent={def.accent}
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Subtopics */}
      <section
        aria-labelledby="subtopics-heading"
        className="container-page mt-14"
      >
        <SectionHeader
          id="subtopics-heading"
          title="Subtopics"
          subtitle={`Where the ${def.label.toLowerCase()} writing on this site is organized.`}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {def.subtopics.map((sub) => (
            <SubtopicCard
              key={sub.slug}
              category={category}
              subtopic={sub}
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
            title="Start with a pillar"
            subtitle="One in-depth foundation article per subtopic — the recommended entry point."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((article) => (
              <ArticleCard
                key={`${article.subtopic}/${article.slug}`}
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
            title={`Latest in ${def.label}`}
            subtitle="Most recently updated writing across all subtopics."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard
                key={`${article.subtopic}/${article.slug}`}
                article={article}
                showSubtopic
              />
            ))}
          </div>
        </section>
      )}

      <div className="mt-24">
        <NewsletterBlock />
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

import Link from "next/link";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";

import {
  getCategory,
  type CategorySlug,
} from "@/lib/categories";
import { getSiblingSubtopics } from "@/lib/content";
import {
  getArticlesBySubtopic,
  getPillarForSubtopic,
} from "@/lib/content";

type SubtopicHubProps = {
  category: CategorySlug;
  subtopicSlug: string;
};

/**
 * Subtopic landing page (level 2 of 3 in the topic hierarchy).
 *
 * Sections:
 *   - Hero with subtopic intent
 *   - Pillar article — the canonical "start here" piece
 *   - All other articles in the subtopic
 *   - Sibling subtopics — same-category cross-linking
 *   - Newsletter
 *
 * The pillar surfaces twice in different visual treatments because
 * it is doing two distinct jobs: (1) establishing the editorial
 * frame for the page and (2) being part of the article inventory.
 */
export async function SubtopicHub({ category, subtopicSlug }: SubtopicHubProps) {
  const def = getCategory(category);
  const subtopic = def.subtopics.find((s) => s.slug === subtopicSlug);
  if (!subtopic) {
    throw new Error(
      `SubtopicHub rendered with unknown subtopic "${subtopicSlug}" for category "${category}".`,
    );
  }

  const [allInSub, pillar] = await Promise.all([
    getArticlesBySubtopic(category, subtopicSlug),
    getPillarForSubtopic(category, subtopicSlug),
  ]);

  const restOfSub = pillar
    ? allInSub.filter((a) => a.slug !== pillar.slug)
    : allInSub;
  const siblings = getSiblingSubtopics(category, subtopicSlug);

  return (
    <Layout>
      <PageHeading
        eyebrow={`${def.label} subtopic`}
        title={subtopic.label}
        description={subtopic.description}
        accent={def.accent}
        crumbs={[
          { label: "Home", href: "/" },
          { label: def.label, href: `/${category}` },
        ]}
      />

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
            Start here
          </p>
          <Link
            href={pillar.url}
            className="group mt-3 block rounded-lg border border-primary-100 bg-primary-50/50 p-7 shadow-soft transition-shadow hover:shadow-card md:p-10"
          >
            <p className="eyebrow">Pillar article</p>
            <h2 className="mt-3 max-w-3xl font-serif text-2xl font-semibold leading-tight tracking-tight text-ink group-hover:text-primary-700 md:text-3xl">
              {pillar.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {pillar.excerpt}
            </p>
            <p className="mt-6 text-sm text-ink-muted">
              By <span className="font-medium text-ink">{pillar.author.name}</span>{" "}
              · {pillar.readingTime} min read
            </p>
          </Link>
        </section>
      )}

      {/* Rest of subtopic */}
      {restOfSub.length > 0 && (
        <section
          aria-labelledby="more-heading"
          className="container-page mt-20"
        >
          <h2
            id="more-heading"
            className="font-serif text-display-md font-semibold tracking-tight text-ink"
          >
            More in {subtopic.label}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-ink-muted">
            All other writing in this subtopic, most recently updated first.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {restOfSub.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        </section>
      )}

      {restOfSub.length === 0 && !pillar && (
        <div className="container-page mt-14">
          <p className="text-ink-muted">
            No articles published in this subtopic yet — check back soon.
          </p>
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
            Related subtopics in {def.label}
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {siblings.map((sib) => (
              <Link
                key={sib.slug}
                href={`/${category}/${sib.slug}`}
                className="group flex items-start justify-between gap-4 rounded-md border border-ink-line bg-white p-5 transition-colors hover:border-primary-300"
              >
                <div>
                  <p className="font-serif text-lg font-semibold text-ink group-hover:text-primary-700">
                    {sib.label}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {sib.description}
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

      <div className="mt-24">
        <NewsletterBlock />
      </div>
    </Layout>
  );
}

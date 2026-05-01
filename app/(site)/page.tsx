import Link from "next/link";
import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { CategoryCard } from "@/components/CategoryCard";
import { ArticleCard } from "@/components/ArticleCard";
import { InsightCard } from "@/components/InsightCard";
import { DiscussionCard } from "@/components/DiscussionCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";

import {
  getAllArticles,
  getArticlesByCategory,
  getFeaturedInsights,
} from "@/lib/content";
import { getDiscussions } from "@/lib/discussions";
import { buildMetadata } from "@/lib/seo";
import { listCategorySlugs } from "@/lib/categories";

export const metadata: Metadata = buildMetadata({
  title: "Peer-informed writing on ecology, biology, and applied physics",
  description:
    "Independent, scientifically literate writing on ecology, biology, and applied physics. Built to be read slowly and cited carefully.",
  path: "/",
});

export default async function HomePage() {
  const [allArticles, insights, discussions, categoryCounts] =
    await Promise.all([
      getAllArticles(),
      getFeaturedInsights(2),
      getDiscussions(),
      Promise.all(
        listCategorySlugs().map(async (slug) => ({
          slug,
          count: (await getArticlesByCategory(slug)).length,
        })),
      ),
    ]);

  const countMap = Object.fromEntries(
    categoryCounts.map((c) => [c.slug, c.count]),
  );
  const latest = allArticles.slice(0, 6);
  const previewDiscussions = discussions.slice(0, 2);

  return (
    <Layout>
      <Hero />

      <Mission />

      {/* Categories */}
      <section
        aria-labelledby="topics-heading"
        className="container-page mt-20"
      >
        <SectionHeading
          eyebrow="Topics"
          title="Three lenses on the natural world"
          id="topics-heading"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {listCategorySlugs().map((slug) => (
            <CategoryCard
              key={slug}
              category={slug}
              articleCount={countMap[slug]}
            />
          ))}
        </div>
      </section>

      {/* Featured insights */}
      <section
        aria-labelledby="insights-heading"
        className="container-page mt-24"
      >
        <SectionHeading
          eyebrow="Featured insights"
          title="Arguments worth defending"
          id="insights-heading"
          action={{ href: "/insights", label: "All insights" }}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} variant="feature" />
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section
        aria-labelledby="latest-heading"
        className="container-page mt-24"
      >
        <SectionHeading
          eyebrow="Latest"
          title="New writing across the platform"
          id="latest-heading"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard
              key={`${article.category}/${article.subtopic}/${article.slug}`}
              article={article}
              showSubtopic
            />
          ))}
        </div>
      </section>

      {/* Discussions */}
      <section
        aria-labelledby="discussions-heading"
        className="container-page mt-24"
      >
        <SectionHeading
          eyebrow="Open discussions"
          title="Expert-led, moderated conversations"
          id="discussions-heading"
          action={{ href: "/discussions", label: "All discussions" }}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {previewDiscussions.map((discussion) => (
            <DiscussionCard key={discussion.slug} discussion={discussion} />
          ))}
        </div>
      </section>

      <div className="mt-24">
        <NewsletterBlock />
      </div>
    </Layout>
  );
}

/* ----------------------------------------------------------------
   Local sections — kept inline since they aren't reused.
---------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-line bg-gradient-to-b from-primary-50/60 to-white">
      <div className="container-page py-20 md:py-28">
        <p className="eyebrow">A scientific reading platform</p>
        <h1 className="mt-4 max-w-4xl font-serif text-display-xl font-semibold tracking-tight text-ink">
          Slow, careful writing about the systems that sustain us.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          EcoScienceHub is a platform for ecology, biology, and applied physics —
          written by working scientists, edited for clarity, and cited where it
          matters. Built to be read slowly.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/ecology" className="btn-primary">
            Start with ecology
          </Link>
          <Link href="/insights" className="btn-outline">
            Read the latest insights
          </Link>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="container-page mt-20"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="eyebrow">Why this exists</p>
          <h2
            id="mission-heading"
            className="mt-3 font-serif text-display-md font-semibold tracking-tight text-ink"
          >
            Science is a slow conversation. We give it the room it needs.
          </h2>
        </div>
        <div className="text-base leading-relaxed text-ink-muted md:text-lg">
          <p>
            Most of what passes for science writing today is optimized for the
            attention economy. Headlines outrun evidence; nuance is the first
            thing cut. We started EcoScienceHub because the alternative —
            careful, cited, accountable writing — is harder to find than it
            should be.
          </p>
          <p className="mt-4">
            Every article on this platform is organized into a topic hierarchy
            (Topic → Subtopic → Article), written by a working scientist or
            experienced science journalist, and kept current with explicit
            revision dates. When we update something, we say so.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  id,
  action,
}: {
  eyebrow: string;
  title: string;
  id: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2
          id={id}
          className="mt-2 font-serif text-display-md font-semibold tracking-tight text-ink"
        >
          {title}
        </h2>
      </div>
      {action && (
        <Link href={action.href} className="link-strong text-sm">
          {action.label} →
        </Link>
      )}
    </div>
  );
}

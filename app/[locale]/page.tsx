import Link from "next/link";
import { notFound } from "next/navigation";
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
import {
  getMessages,
  isLocale,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = translator(getMessages(params.locale));
  return buildMetadata({
    title: t("home.meta_title"),
    description: t("site.description"),
    path: "/",
    locale: params.locale,
  });
}

export default async function HomePage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const t = translator(getMessages(locale));

  const [allArticles, insights, discussions, categoryCounts] =
    await Promise.all([
      getAllArticles(locale),
      getFeaturedInsights(locale, 2),
      getDiscussions(),
      Promise.all(
        listCategorySlugs().map(async (slug) => ({
          slug,
          count: (await getArticlesByCategory(locale, slug)).length,
        })),
      ),
    ]);

  const countMap = Object.fromEntries(
    categoryCounts.map((c) => [c.slug, c.count]),
  );
  const latest = allArticles.slice(0, 6);
  const previewDiscussions = discussions.slice(0, 2);

  return (
    <Layout locale={locale}>
      <Hero locale={locale} t={t} />
      <Mission t={t} />

      {/* Categories */}
      <section
        aria-labelledby="topics-heading"
        className="container-page mt-20"
      >
        <SectionHeading
          eyebrow={t("home.topics_eyebrow")}
          title={t("home.topics_title")}
          id="topics-heading"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {listCategorySlugs().map((slug) => (
            <CategoryCard
              key={slug}
              locale={locale}
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
          eyebrow={t("home.insights_eyebrow")}
          title={t("home.insights_title")}
          id="insights-heading"
          action={{
            href: localizedPath(locale, "/insights"),
            label: t("home.insights_action"),
          }}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {insights.map((insight) => (
            <InsightCard
              key={insight.slug}
              locale={locale}
              insight={insight}
              variant="feature"
            />
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section
        aria-labelledby="latest-heading"
        className="container-page mt-24"
      >
        <SectionHeading
          eyebrow={t("home.latest_eyebrow")}
          title={t("home.latest_title")}
          id="latest-heading"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard
              key={`${article.category}/${article.subtopic}/${article.slug}`}
              locale={locale}
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
          eyebrow={t("home.discussions_eyebrow")}
          title={t("home.discussions_title")}
          id="discussions-heading"
          action={{
            href: localizedPath(locale, "/discussions"),
            label: t("home.discussions_action"),
          }}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {previewDiscussions.map((discussion) => (
            <DiscussionCard
              key={discussion.slug}
              locale={locale}
              discussion={discussion}
            />
          ))}
        </div>
      </section>

      <div className="mt-24">
        <NewsletterBlock locale={locale} />
      </div>
    </Layout>
  );
}

function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: (key: string, vars?: Record<string, string | number>) => string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-line bg-gradient-to-b from-primary-50/60 to-white">
      <div className="container-page py-20 md:py-28">
        <p className="eyebrow">{t("home.hero_eyebrow")}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-display-xl font-semibold tracking-tight text-ink">
          {t("home.hero_title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {t("home.hero_lede")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={localizedPath(locale, "/ecology")} className="btn-primary">
            {t("home.hero_cta_primary")}
          </Link>
          <Link href={localizedPath(locale, "/insights")} className="btn-outline">
            {t("home.hero_cta_secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Mission({
  t,
}: {
  t: (key: string, vars?: Record<string, string | number>) => string;
}) {
  return (
    <section
      aria-labelledby="mission-heading"
      className="container-page mt-20"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="eyebrow">{t("home.mission_eyebrow")}</p>
          <h2
            id="mission-heading"
            className="mt-3 font-serif text-display-md font-semibold tracking-tight text-ink"
          >
            {t("home.mission_title")}
          </h2>
        </div>
        <div className="text-base leading-relaxed text-ink-muted md:text-lg">
          <p>{t("home.mission_p1")}</p>
          <p className="mt-4">{t("home.mission_p2")}</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { ArticleCard } from "@/components/ArticleCard";
import { authors, type AuthorId } from "@/lib/authors";
import { isAuthorId } from "@/lib/editorial";
import { getCategory, isCategorySlug } from "@/lib/categories";
import { getAllArticles, getAllInsights } from "@/lib/content";
import {
  buildMetadata,
  breadcrumbJsonLd,
  collectionPageJsonLd,
} from "@/lib/seo";
import {
  DEFAULT_LOCALE,
  localeMeta,
  isLocale,
  localizedPath,
} from "@/lib/i18n";

type Props = { params: { locale: string; desk: string } };

/** English-only, following the glossary and policy-page precedent. */
export function generateStaticParams() {
  return Object.keys(authors).map((desk) => ({
    locale: DEFAULT_LOCALE,
    desk,
  }));
}

function describe(deskId: AuthorId): string {
  const desk = authors[deskId];
  return `${desk.bio} ${desk.sourcingNote}`;
}

export function generateMetadata({ params }: Props): Metadata {
  if (params.locale !== DEFAULT_LOCALE || !isAuthorId(params.desk)) {
    return { robots: { index: false, follow: false } };
  }
  const desk = authors[params.desk];
  return buildMetadata({
    title: desk.name,
    description: describe(params.desk),
    path: `/editorial/${params.desk}`,
    locale: DEFAULT_LOCALE,
    availableLocales: [DEFAULT_LOCALE],
  });
}

/** Render a coverage token ("ecology/oceans") as a readable label + href. */
function coverageLink(token: string) {
  const [category, subtopic] = token.split("/");
  if (!isCategorySlug(category)) return null;
  const def = getCategory(category);
  if (!subtopic) {
    return { label: def.label, href: localizedPath(DEFAULT_LOCALE, `/${category}`) };
  }
  const sub = def.subtopics.find((s) => s.slug === subtopic);
  if (!sub) return null;
  return {
    label: `${def.label} · ${sub.label}`,
    href: localizedPath(DEFAULT_LOCALE, `/${category}/${subtopic}`),
  };
}

export default async function EditorialDeskPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  if (params.locale !== DEFAULT_LOCALE) notFound();
  if (!isAuthorId(params.desk)) notFound();

  const desk = authors[params.desk];
  const [allArticles, allInsights] = await Promise.all([
    getAllArticles(DEFAULT_LOCALE),
    getAllInsights(DEFAULT_LOCALE),
  ]);

  const articles = allArticles.filter((a) => a.author.id === desk.id);
  const insights = allInsights.filter((i) => i.author.id === desk.id);
  const coverage = desk.coverage
    .map(coverageLink)
    .filter((c): c is { label: string; href: string } => c !== null);

  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Home", path: localizedPath(DEFAULT_LOCALE, "/") },
    {
      name: "Editorial desks",
      path: localizedPath(DEFAULT_LOCALE, "/editorial"),
    },
    {
      name: desk.name,
      path: localizedPath(DEFAULT_LOCALE, `/editorial/${desk.id}`),
    },
  ]);

  const collectionLd = collectionPageJsonLd({
    title: desk.name,
    description: describe(desk.id),
    path: localizedPath(DEFAULT_LOCALE, `/editorial/${desk.id}`),
    inLanguage: localeMeta[DEFAULT_LOCALE].htmlLang,
    items: articles.map((a) => ({ name: a.title, path: a.url })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <Layout locale={DEFAULT_LOCALE}>
        <PageHeading
          eyebrow="Editorial desk"
          title={desk.name}
          description={desk.bio}
          accent="neutral"
          crumbs={[
            { label: "Home", href: localizedPath(DEFAULT_LOCALE, "/") },
            {
              label: "Editorial desks",
              href: localizedPath(DEFAULT_LOCALE, "/editorial"),
            },
            {
              label: desk.name,
              href: localizedPath(DEFAULT_LOCALE, `/editorial/${desk.id}`),
            },
          ]}
        />

        <div className="container-page py-14">
          <div className="max-w-reader">
            <div className="rounded-lg border border-ink-line bg-ink-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                This is an organizational byline
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {desk.name} is an editorial desk. It is not a person, it does
                not represent a named scientist, and it carries no academic
                credential. See the{" "}
                <Link
                  href={localizedPath(DEFAULT_LOCALE, "/editorial-standards")}
                  className="link-quiet font-medium"
                >
                  editorial standards
                </Link>{" "}
                for why the site is attributed this way.
              </p>
            </div>

            <h2 className="mt-10 font-serif text-2xl font-semibold text-ink">
              What this desk is sourced from
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              {desk.sourcingNote} The general rules are set out in the{" "}
              <Link
                href={localizedPath(DEFAULT_LOCALE, "/sourcing-policy")}
                className="link-quiet font-medium"
              >
                sourcing policy
              </Link>
              , and errors are handled under the{" "}
              <Link
                href={localizedPath(DEFAULT_LOCALE, "/corrections")}
                className="link-quiet font-medium"
              >
                corrections policy
              </Link>
              .
            </p>

            {coverage.length > 0 && (
              <>
                <h2 className="mt-10 font-serif text-2xl font-semibold text-ink">
                  Coverage
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {coverage.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="inline-block rounded-full border border-ink-line px-3 py-1 text-sm text-ink-muted hover:border-primary-300 hover:text-primary-700"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <h2 className="mt-14 font-serif text-2xl font-semibold text-ink">
            Pages attributed to this desk
            <span className="ml-2 text-base font-normal text-ink-subtle">
              ({articles.length + insights.length})
            </span>
          </h2>

          {articles.length === 0 && insights.length === 0 ? (
            <p className="mt-4 text-ink-muted">
              No pages currently carry this attribution.
            </p>
          ) : (
            <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} locale={DEFAULT_LOCALE} />
                </li>
              ))}
            </ul>
          )}

          {insights.length > 0 && (
            <>
              <h3 className="mt-12 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                Insights
              </h3>
              <ul className="mt-4 space-y-3">
                {insights.map((insight) => (
                  <li key={insight.slug}>
                    <Link
                      href={insight.url}
                      className="font-medium text-ink hover:text-primary-700"
                    >
                      {insight.title}
                    </Link>
                    <p className="text-sm text-ink-muted">{insight.excerpt}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}

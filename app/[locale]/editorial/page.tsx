import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { listDesksForDisplay, POLICY_DOCUMENTS } from "@/lib/editorial";
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

type Props = { params: { locale: string } };

const META_TITLE = "Editorial desks";
const META_DESCRIPTION =
  "EcoScienceHub attributes articles to editorial desks rather than to invented individual experts. This page lists every desk, what it covers, and what it is sourced from.";

/** English-only, following the glossary and policy-page precedent. */
export function generateStaticParams() {
  return [{ locale: DEFAULT_LOCALE }];
}

export function generateMetadata({ params }: Props): Metadata {
  if (params.locale !== DEFAULT_LOCALE) {
    return { robots: { index: false, follow: false } };
  }
  return buildMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: "/editorial",
    locale: DEFAULT_LOCALE,
    availableLocales: [DEFAULT_LOCALE],
  });
}

export default async function EditorialIndexPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  if (params.locale !== DEFAULT_LOCALE) notFound();

  const desks = listDesksForDisplay();
  const [articles, insights] = await Promise.all([
    getAllArticles(DEFAULT_LOCALE),
    getAllInsights(DEFAULT_LOCALE),
  ]);

  const counts = new Map<string, number>();
  for (const item of [...articles, ...insights]) {
    counts.set(item.author.id, (counts.get(item.author.id) ?? 0) + 1);
  }

  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Home", path: localizedPath(DEFAULT_LOCALE, "/") },
    { name: META_TITLE, path: localizedPath(DEFAULT_LOCALE, "/editorial") },
  ]);

  const collectionLd = collectionPageJsonLd({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: localizedPath(DEFAULT_LOCALE, "/editorial"),
    inLanguage: localeMeta[DEFAULT_LOCALE].htmlLang,
    items: desks.map((d) => ({
      name: d.name,
      path: localizedPath(DEFAULT_LOCALE, `/editorial/${d.id}`),
    })),
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
          eyebrow="Attribution"
          title={META_TITLE}
          description={META_DESCRIPTION}
          accent="neutral"
          crumbs={[
            { label: "Home", href: localizedPath(DEFAULT_LOCALE, "/") },
            {
              label: "Editorial desks",
              href: localizedPath(DEFAULT_LOCALE, "/editorial"),
            },
          ]}
        />

        <div className="container-page py-14">
          <div className="max-w-reader">
            <div className="rounded-lg border border-ink-line bg-ink-surface p-6">
              <p className="text-sm leading-relaxed text-ink">
                A desk is an organizational byline, not a person. No desk on
                this site represents a named scientist, and none carries an
                academic credential. The reasoning is set out in the{" "}
                <Link
                  href={localizedPath(DEFAULT_LOCALE, "/editorial-standards")}
                  className="link-quiet font-medium"
                >
                  editorial standards
                </Link>
                , and what each desk is sourced from is governed by the{" "}
                <Link
                  href={localizedPath(DEFAULT_LOCALE, "/sourcing-policy")}
                  className="link-quiet font-medium"
                >
                  sourcing policy
                </Link>
                .
              </p>
            </div>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {desks.map((desk) => (
              <li
                key={desk.id}
                className="rounded-lg border border-ink-line bg-white p-6"
              >
                <h2 className="font-serif text-xl font-semibold text-ink">
                  <Link
                    href={localizedPath(
                      DEFAULT_LOCALE,
                      `/editorial/${desk.id}`,
                    )}
                    className="hover:text-primary-700"
                  >
                    {desk.name}
                  </Link>
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-subtle">
                  {desk.title} · {counts.get(desk.id) ?? 0} pages
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {desk.bio}
                </p>
              </li>
            ))}
          </ul>

          <nav className="mt-14 border-t border-ink-line pt-8">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              Editorial policy
            </h2>
            <ul className="mt-4 space-y-3">
              {POLICY_DOCUMENTS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={localizedPath(DEFAULT_LOCALE, `/${d.slug}`)}
                    className="font-medium text-ink hover:text-primary-700"
                  >
                    {d.title}
                  </Link>
                  <p className="text-sm text-ink-muted">{d.summary}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Layout>
    </>
  );
}

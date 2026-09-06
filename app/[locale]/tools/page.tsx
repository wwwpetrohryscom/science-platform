import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { TOOLS, toolPath } from "@/lib/tools/registry";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import {
  LOCALES,
  getMessages,
  isLocale,
  localizedPath,
  translator,
} from "@/lib/i18n";

type Props = { params: { locale: string } };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return { robots: { index: false, follow: false } };
  const t = translator(getMessages(params.locale));
  return buildMetadata({
    title: t("tools.title"),
    description: t("tools.description"),
    path: "/tools",
    locale: params.locale,
    availableLocales: [...LOCALES],
  });
}

export default function ToolsHubPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = translator(getMessages(locale));

  const byCategory = new Map<string, typeof TOOLS>();
  for (const tool of TOOLS) {
    byCategory.set(tool.category, [...(byCategory.get(tool.category) ?? []), tool]);
  }

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: t("tools.title"), path: localizedPath(locale, "/tools") },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Layout locale={locale}>
        <PageHeading
          eyebrow={t("tools.eyebrow")}
          title={t("tools.title")}
          description={t("tools.description")}
          accent="neutral"
          crumbs={[
            { label: t("nav.home"), href: localizedPath(locale, "/") },
            { label: t("tools.title"), href: localizedPath(locale, "/tools") },
          ]}
        />
        <div className="container-page py-14">
          <p className="max-w-reader text-ink-muted">
            {t("tools.count", { count: TOOLS.length })}
          </p>

          {[...byCategory.entries()].map(([category, list]) => (
            <section key={category} className="mt-12">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                {category === "physics"
                  ? t("nav.physics")
                  : category === "ecology"
                    ? t("nav.ecology")
                    : t("tools.eyebrow")}
              </h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {list.map((tool) => (
                  <li key={tool.slug} className="rounded-lg border border-ink-line p-5">
                    <Link
                      href={localizedPath(locale, toolPath(tool.slug))}
                      className="font-serif text-lg font-semibold text-ink hover:text-primary-700"
                    >
                      {t(`tools.${tool.key}.name`)}
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {t(`tools.${tool.key}.summary`)}
                    </p>
                    <p className="mt-3 font-mono text-xs text-ink-subtle">{tool.formula}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Layout>
    </>
  );
}

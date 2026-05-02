import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { InsightCard } from "@/components/InsightCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { buildMetadata } from "@/lib/seo";
import { getAllInsights } from "@/lib/content";
import {
  getMessages,
  isLocale,
  localizedPath,
  translator,
} from "@/lib/i18n";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = translator(getMessages(params.locale));
  return buildMetadata({
    title: `${t("insights.title")}`,
    description: t("insights.description"),
    path: "/insights",
    locale: params.locale,
  });
}

export default async function InsightsIndexPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = translator(getMessages(locale));
  const insights = await getAllInsights(locale);

  return (
    <Layout locale={locale}>
      <PageHeading
        eyebrow={t("insights.eyebrow")}
        title={t("insights.title")}
        description={t("insights.description")}
        accent="accent"
        crumbs={[{ label: t("nav.home"), href: localizedPath(locale, "/") }]}
      />

      <section className="container-page mt-14">
        {insights.length === 0 ? (
          <p className="text-ink-muted">{t("insights.empty")}</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {insights.map((insight) => (
              <InsightCard
                key={insight.slug}
                locale={locale}
                insight={insight}
              />
            ))}
          </div>
        )}
      </section>

      <div className="mt-24">
        <NewsletterBlock locale={locale} />
      </div>
    </Layout>
  );
}

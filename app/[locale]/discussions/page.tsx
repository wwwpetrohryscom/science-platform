import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { DiscussionCard } from "@/components/DiscussionCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { buildMetadata } from "@/lib/seo";
import { getDiscussions } from "@/lib/discussions";
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
    title: t("discussions.title"),
    description: t("discussions.description"),
    path: "/discussions",
    locale: params.locale,
  });
}

export default async function DiscussionsIndexPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = translator(getMessages(locale));
  const discussions = await getDiscussions();

  return (
    <Layout locale={locale}>
      <PageHeading
        eyebrow={t("discussions.eyebrow")}
        title={t("discussions.title")}
        description={t("discussions.description")}
        accent="primary"
        crumbs={[{ label: t("nav.home"), href: localizedPath(locale, "/") }]}
      />

      <section className="container-page mt-14">
        {discussions.length === 0 ? (
          <p className="text-ink-muted">{t("discussions.empty")}</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {discussions.map((discussion) => (
              <DiscussionCard
                key={discussion.slug}
                locale={locale}
                discussion={discussion}
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

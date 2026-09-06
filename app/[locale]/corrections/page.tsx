import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PolicyPage } from "@/components/PolicyPage";
import { policyFor, policyLocales, POLICY_DOCUMENTS } from "@/lib/editorial";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { getMessages, isLocale, localizedPath, translator } from "@/lib/i18n";

type Props = { params: { locale: string } };

const SLUG = "corrections" as const;

/** Only the locales this policy exists in — see lib/editorial.ts. */
export function generateStaticParams() {
  return policyLocales(SLUG).map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  const doc = isLocale(params.locale) ? policyFor(SLUG, params.locale) : undefined;
  if (!doc || !isLocale(params.locale)) {
    return { robots: { index: false, follow: false } };
  }
  return buildMetadata({
    title: doc.title,
    description: doc.summary,
    path: `/${SLUG}`,
    locale: params.locale,
    availableLocales: policyLocales(SLUG),
    updatedDate: doc.updatedDate,
  });
}

export default function CorrectionsPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const doc = policyFor(SLUG, params.locale);
  if (!doc) notFound();

  const t = translator(getMessages(params.locale));

  const siblings = POLICY_DOCUMENTS.filter((d) => d.slug !== SLUG)
    .map((d) => policyFor(d.slug, params.locale))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map((d) => ({ slug: d.slug, title: d.title, summary: d.summary }));

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(params.locale, "/") },
    { name: doc.title, path: localizedPath(params.locale, `/${SLUG}`) },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PolicyPage doc={doc} locale={params.locale} siblings={siblings} />
    </>
  );
}

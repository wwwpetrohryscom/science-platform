import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PolicyPage } from "@/components/PolicyPage";
import { CORRECTIONS_POLICY, POLICY_DOCUMENTS } from "@/lib/editorial";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { DEFAULT_LOCALE, isLocale, localizedPath } from "@/lib/i18n";

type Props = { params: { locale: string } };

const DOC = CORRECTIONS_POLICY;

/** Editorial policy pages are English-only — see lib/editorial.ts. */
export function generateStaticParams() {
  return [{ locale: DEFAULT_LOCALE }];
}

export function generateMetadata({ params }: Props): Metadata {
  if (params.locale !== DEFAULT_LOCALE) {
    return { robots: { index: false, follow: false } };
  }
  return buildMetadata({
    title: DOC.title,
    description: DOC.summary,
    path: `/${DOC.slug}`,
    locale: DEFAULT_LOCALE,
    availableLocales: [DEFAULT_LOCALE],
    updatedDate: DOC.updatedDate,
  });
}

export default function CorrectionsPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  if (params.locale !== DEFAULT_LOCALE) notFound();

  const siblings = POLICY_DOCUMENTS.filter((d) => d.slug !== DOC.slug).map(
    (d) => ({ slug: d.slug, title: d.title, summary: d.summary }),
  );

  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Home", path: localizedPath(DEFAULT_LOCALE, "/") },
    { name: DOC.title, path: localizedPath(DEFAULT_LOCALE, `/${DOC.slug}`) },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PolicyPage doc={DOC} siblings={siblings} />
    </>
  );
}

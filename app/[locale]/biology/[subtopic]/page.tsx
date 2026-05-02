import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SubtopicHub } from "@/components/SubtopicHub";
import { buildMetadata } from "@/lib/seo";
import { getCategory, getSubtopic } from "@/lib/categories";
import { LOCALES, getMessages, isLocale, translator } from "@/lib/i18n";

const CATEGORY = "biology" as const;
type Props = { params: { locale: string; subtopic: string } };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getCategory(CATEGORY).subtopics.map((s) => ({ locale, subtopic: s.slug })),
  );
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const sub = getSubtopic(CATEGORY, params.subtopic);
  if (!sub) {
    return buildMetadata({
      title: "Subtopic not found",
      description: "The requested subtopic could not be found.",
      path: `/${CATEGORY}/${params.subtopic}`,
      locale: params.locale,
      noIndex: true,
    });
  }
  const t = translator(getMessages(params.locale));
  const label = t(`subtopics.${params.subtopic}.label`);
  const description = t(`subtopics.${params.subtopic}.description`);
  const categoryLabel = t(`categories.${CATEGORY}.label`);
  return buildMetadata({
    title: `${label} — ${categoryLabel}`,
    description,
    path: `/${CATEGORY}/${params.subtopic}`,
    locale: params.locale,
  });
}

export default function BiologySubtopicPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  if (!getSubtopic(CATEGORY, params.subtopic)) notFound();
  return (
    <SubtopicHub
      locale={params.locale}
      category={CATEGORY}
      subtopicSlug={params.subtopic}
    />
  );
}

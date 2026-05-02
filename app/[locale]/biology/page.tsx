import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryHub } from "@/components/CategoryHub";
import { buildMetadata } from "@/lib/seo";
import { getMessages, isLocale, translator } from "@/lib/i18n";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = translator(getMessages(params.locale));
  const label = t("categories.biology.label");
  return buildMetadata({
    title: t("category_hub.meta_title", { category: label }),
    description: t("categories.biology.description"),
    path: "/biology",
    locale: params.locale,
  });
}

export default function BiologyHubPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  return <CategoryHub locale={params.locale} category="biology" />;
}

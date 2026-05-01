import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { buildMetadata, categoryMeta } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${categoryMeta.ecology.label} — articles, analyses, and field notes`,
  description: categoryMeta.ecology.description,
  path: "/ecology",
});

export default function EcologyPage() {
  return <CategoryPage category="ecology" />;
}

import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { buildMetadata, categoryMeta } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${categoryMeta.biology.label} — research-grade writing across the life sciences`,
  description: categoryMeta.biology.description,
  path: "/biology",
});

export default function BiologyPage() {
  return <CategoryPage category="biology" />;
}

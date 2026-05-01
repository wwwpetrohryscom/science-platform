import type { Metadata } from "next";
import { CategoryHub } from "@/components/CategoryHub";
import { buildMetadata } from "@/lib/seo";
import { getCategory } from "@/lib/categories";

const def = getCategory("ecology");

export const metadata: Metadata = buildMetadata({
  title: `${def.label} — articles, analyses, and field notes`,
  description: def.description,
  path: "/ecology",
});

export default function EcologyHubPage() {
  return <CategoryHub category="ecology" />;
}

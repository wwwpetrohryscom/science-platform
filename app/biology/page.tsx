import type { Metadata } from "next";
import { CategoryHub } from "@/components/CategoryHub";
import { buildMetadata } from "@/lib/seo";
import { getCategory } from "@/lib/categories";

const def = getCategory("biology");

export const metadata: Metadata = buildMetadata({
  title: `${def.label} — research-grade writing across the life sciences`,
  description: def.description,
  path: "/biology",
});

export default function BiologyHubPage() {
  return <CategoryHub category="biology" />;
}

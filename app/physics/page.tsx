import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { buildMetadata, categoryMeta } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${categoryMeta.physics.label} — energy, materials, and physical systems`,
  description: categoryMeta.physics.description,
  path: "/physics",
});

export default function PhysicsPage() {
  return <CategoryPage category="physics" />;
}

import type { Metadata } from "next";
import { CategoryHub } from "@/components/CategoryHub";
import { buildMetadata } from "@/lib/seo";
import { getCategory } from "@/lib/categories";

const def = getCategory("physics");

export const metadata: Metadata = buildMetadata({
  title: `${def.label} — energy, materials, and physical systems`,
  description: def.description,
  path: "/physics",
});

export default function PhysicsHubPage() {
  return <CategoryHub category="physics" />;
}

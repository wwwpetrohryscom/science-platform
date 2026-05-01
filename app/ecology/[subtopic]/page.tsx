import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SubtopicHub } from "@/components/SubtopicHub";
import { buildMetadata } from "@/lib/seo";
import { getCategory, getSubtopic } from "@/lib/categories";

type Props = { params: { subtopic: string } };

export function generateStaticParams() {
  return getCategory("ecology").subtopics.map((s) => ({ subtopic: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sub = getSubtopic("ecology", params.subtopic);
  if (!sub) {
    return buildMetadata({
      title: "Subtopic not found",
      description: "The requested subtopic could not be found.",
      path: `/ecology/${params.subtopic}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `${sub.label} — Ecology`,
    description: sub.description,
    path: `/ecology/${params.subtopic}`,
  });
}

export default function EcologySubtopicPage({ params }: Props) {
  if (!getSubtopic("ecology", params.subtopic)) notFound();
  return <SubtopicHub category="ecology" subtopicSlug={params.subtopic} />;
}

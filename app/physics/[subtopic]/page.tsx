import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SubtopicHub } from "@/components/SubtopicHub";
import { buildMetadata } from "@/lib/seo";
import { getCategory, getSubtopic } from "@/lib/categories";

type Props = { params: { subtopic: string } };

export function generateStaticParams() {
  return getCategory("physics").subtopics.map((s) => ({ subtopic: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sub = getSubtopic("physics", params.subtopic);
  if (!sub) {
    return buildMetadata({
      title: "Subtopic not found",
      description: "The requested subtopic could not be found.",
      path: `/physics/${params.subtopic}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `${sub.label} — Applied Physics`,
    description: sub.description,
    path: `/physics/${params.subtopic}`,
  });
}

export default function PhysicsSubtopicPage({ params }: Props) {
  if (!getSubtopic("physics", params.subtopic)) notFound();
  return <SubtopicHub category="physics" subtopicSlug={params.subtopic} />;
}

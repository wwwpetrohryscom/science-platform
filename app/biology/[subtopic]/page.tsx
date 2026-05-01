import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SubtopicHub } from "@/components/SubtopicHub";
import { buildMetadata } from "@/lib/seo";
import { getCategory, getSubtopic } from "@/lib/categories";

type Props = { params: { subtopic: string } };

export function generateStaticParams() {
  return getCategory("biology").subtopics.map((s) => ({ subtopic: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sub = getSubtopic("biology", params.subtopic);
  if (!sub) {
    return buildMetadata({
      title: "Subtopic not found",
      description: "The requested subtopic could not be found.",
      path: `/biology/${params.subtopic}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `${sub.label} — Biology`,
    description: sub.description,
    path: `/biology/${params.subtopic}`,
  });
}

export default function BiologySubtopicPage({ params }: Props) {
  if (!getSubtopic("biology", params.subtopic)) notFound();
  return <SubtopicHub category="biology" subtopicSlug={params.subtopic} />;
}

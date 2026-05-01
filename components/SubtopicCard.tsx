import Link from "next/link";
import type { CategorySlug, Subtopic } from "@/lib/categories";

type SubtopicCardProps = {
  category: CategorySlug;
  subtopic: Subtopic;
  articleCount: number;
};

export function SubtopicCard({
  category,
  subtopic,
  articleCount,
}: SubtopicCardProps) {
  return (
    <Link
      href={`/${category}/${subtopic.slug}`}
      className="group flex h-full flex-col rounded-lg border border-ink-line bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
    >
      <h3 className="font-serif text-xl font-semibold tracking-tight text-ink group-hover:text-primary-700">
        {subtopic.label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {subtopic.description}
      </p>
      <div className="mt-auto flex items-center justify-between pt-6 text-xs">
        <span className="font-medium text-primary-700">
          Browse {subtopic.label.toLowerCase()} →
        </span>
        <span className="text-ink-subtle">
          {articleCount} {articleCount === 1 ? "article" : "articles"}
        </span>
      </div>
    </Link>
  );
}

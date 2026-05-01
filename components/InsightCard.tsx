import Link from "next/link";
import { categoryMeta } from "@/lib/seo";
import { formatDate, type Insight } from "@/lib/content";

type InsightCardProps = {
  insight: Insight;
  /** "feature" gets the marquee treatment on the homepage; "default" is the grid card. */
  variant?: "default" | "feature";
};

export function InsightCard({ insight, variant = "default" }: InsightCardProps) {
  const cat = categoryMeta[insight.category];
  const isFeature = variant === "feature";

  return (
    <article
      className={`card flex h-full flex-col p-7 ${
        isFeature ? "md:p-10" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="eyebrow">Insight · {cat.label}</span>
      </div>

      <h3
        className={`mt-3 font-serif font-semibold leading-tight tracking-tight text-ink ${
          isFeature ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        <Link href={insight.url} className="hover:text-primary-700">
          {insight.title}
        </Link>
      </h3>

      <p
        className={`mt-4 leading-relaxed text-ink-muted ${
          isFeature ? "text-base md:text-lg" : "text-sm"
        }`}
      >
        {insight.excerpt}
      </p>

      <blockquote
        className={`mt-5 border-l-4 border-accent-300 pl-4 italic text-ink ${
          isFeature ? "text-base" : "text-sm"
        }`}
      >
        {insight.argument}
      </blockquote>

      <div className="mt-auto pt-6 text-xs text-ink-subtle">
        <span>{insight.author.name}</span>
        <span aria-hidden> · </span>
        <span>{formatDate(insight.updatedDate)}</span>
        <span aria-hidden> · </span>
        <span>{insight.readingTime} min read</span>
      </div>
    </article>
  );
}

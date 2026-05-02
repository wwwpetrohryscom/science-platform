import Link from "next/link";

import { formatDate, type Insight } from "@/lib/content";
import {
  getMessages,
  translator,
  type Locale,
} from "@/lib/i18n";

type InsightCardProps = {
  locale: Locale;
  insight: Insight;
  /** "feature" gets the marquee treatment on the homepage; "default" is the grid card. */
  variant?: "default" | "feature";
};

export function InsightCard({ locale, insight, variant = "default" }: InsightCardProps) {
  const t = translator(getMessages(locale));
  const categoryLabel = t(`categories.${insight.category}.label`);
  const isFeature = variant === "feature";

  return (
    <article
      className={`card flex h-full flex-col p-7 ${isFeature ? "md:p-10" : ""}`}
    >
      <div className="flex items-center gap-2">
        <span className="eyebrow">
          {t("insights.category_eyebrow", { category: categoryLabel })}
        </span>
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
        <span>{formatDate(insight.updatedDate, locale)}</span>
        <span aria-hidden> · </span>
        <span>{t("article.min_read", { minutes: insight.readingTime })}</span>
      </div>
    </article>
  );
}

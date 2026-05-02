import Link from "next/link";

import { formatDate, type Article } from "@/lib/content";
import {
  getMessages,
  translator,
  type Locale,
} from "@/lib/i18n";

type ArticleCardProps = {
  locale: Locale;
  article: Article;
  /** "default" for grid use, "compact" for sidebars / "more in subtopic" lists. */
  variant?: "default" | "compact";
  /**
   * When true, append the subtopic label as a secondary eyebrow.
   * Useful on category pages and the homepage where the subtopic
   * adds navigational signal; redundant on subtopic pages.
   */
  showSubtopic?: boolean;
};

export function ArticleCard({
  locale,
  article,
  variant = "default",
  showSubtopic = false,
}: ArticleCardProps) {
  const t = translator(getMessages(locale));
  const categoryLabel = t(`categories.${article.category}.label`);
  const subtopicLabel = t(`subtopics.${article.subtopic}.label`);

  const eyebrow = showSubtopic
    ? `${categoryLabel} · ${subtopicLabel}`
    : categoryLabel;

  if (variant === "compact") {
    return (
      <Link
        href={article.url}
        className="group block border-b border-ink-line py-4 last:border-b-0"
      >
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="mt-1.5 font-serif text-base font-semibold leading-snug text-ink group-hover:text-primary-700">
          {article.title}
        </h3>
        <p className="mt-1 text-xs text-ink-subtle">
          {formatDate(article.updatedDate, locale)} ·{" "}
          {t("article.min_read", { minutes: article.readingTime })}
        </p>
      </Link>
    );
  }

  return (
    <article className="card flex h-full flex-col p-6">
      <div className="flex items-center gap-2">
        <span className="eyebrow">{eyebrow}</span>
        {article.type === "pillar" && (
          <span className="rounded-sm bg-primary-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-800">
            {t("article.pillar_badge")}
          </span>
        )}
      </div>

      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug tracking-tight text-ink">
        <Link href={article.url} className="hover:text-primary-700">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {article.excerpt}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-subtle">
        <span>{article.author.name}</span>
        <span aria-hidden>·</span>
        <span>{formatDate(article.updatedDate, locale)}</span>
        <span aria-hidden>·</span>
        <span>{t("article.min_read", { minutes: article.readingTime })}</span>
      </div>

      {article.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {article.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded-sm bg-ink-surface px-2 py-0.5 text-[11px] uppercase tracking-wide text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

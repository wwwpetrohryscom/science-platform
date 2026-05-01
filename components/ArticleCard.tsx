import Link from "next/link";
import { categoryMeta } from "@/lib/seo";
import { formatDate, type Article } from "@/lib/content";
import { getCategory } from "@/lib/categories";

type ArticleCardProps = {
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
  article,
  variant = "default",
  showSubtopic = false,
}: ArticleCardProps) {
  const cat = categoryMeta[article.category];
  const subtopic = getCategory(article.category).subtopics.find(
    (s) => s.slug === article.subtopic,
  );

  const eyebrow =
    showSubtopic && subtopic ? `${cat.label} · ${subtopic.label}` : cat.label;

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
          {formatDate(article.updatedDate)} · {article.readingTime} min read
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
            Pillar
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
        <span>{formatDate(article.updatedDate)}</span>
        <span aria-hidden>·</span>
        <span>{article.readingTime} min read</span>
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

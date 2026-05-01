import Link from "next/link";
import { getCategory, type CategorySlug } from "@/lib/categories";

type CategoryCardProps = {
  category: CategorySlug;
  articleCount?: number;
  /** Optionally surface the subtopic list as bottom-of-card chips. */
  showSubtopics?: boolean;
};

const accentClasses: Record<CategorySlug, string> = {
  ecology: "from-primary-50 to-white border-primary-100",
  biology: "from-primary-50 to-white border-primary-100",
  physics: "from-accent-50 to-white border-accent-100",
};

const iconColor: Record<CategorySlug, string> = {
  ecology: "text-primary-700 bg-primary-100",
  biology: "text-primary-700 bg-primary-100",
  physics: "text-accent-700 bg-accent-100",
};

export function CategoryCard({
  category,
  articleCount,
  showSubtopics = true,
}: CategoryCardProps) {
  const def = getCategory(category);

  return (
    <Link
      href={`/${category}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border bg-gradient-to-br p-7 shadow-soft transition-shadow hover:shadow-card ${accentClasses[category]}`}
    >
      <span
        aria-hidden
        className={`grid h-10 w-10 place-items-center rounded-md ${iconColor[category]}`}
      >
        <CategoryIcon category={category} />
      </span>

      <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-ink">
        {def.label}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
        {def.tagline}
      </p>

      {showSubtopics && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {def.subtopics.map((s) => (
            <li
              key={s.slug}
              className="rounded-sm bg-white/70 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink-muted"
            >
              {s.label}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex items-center justify-between pt-6 text-sm">
        <span className="font-medium text-primary-700 group-hover:text-primary-800">
          Browse {def.label.toLowerCase()} →
        </span>
        {typeof articleCount === "number" && (
          <span className="text-xs text-ink-subtle">
            {articleCount} {articleCount === 1 ? "article" : "articles"}
          </span>
        )}
      </div>
    </Link>
  );
}

function CategoryIcon({ category }: { category: CategorySlug }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
  };

  if (category === "ecology") {
    return (
      <svg {...common}>
        <path d="M12 3c4 4 6 7 6 11a6 6 0 1 1-12 0c0-4 2-7 6-11z" />
        <path d="M12 13v8" />
      </svg>
    );
  }
  if (category === "biology") {
    return (
      <svg {...common}>
        <path d="M5 4c4 4 10 4 14 0" />
        <path d="M5 20c4-4 10-4 14 0" />
        <path d="M5 4v16M19 4v16" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

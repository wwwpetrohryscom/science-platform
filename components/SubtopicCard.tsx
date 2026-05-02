import Link from "next/link";

import { type CategorySlug } from "@/lib/categories";
import {
  getMessages,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type SubtopicCardProps = {
  locale: Locale;
  category: CategorySlug;
  subtopicSlug: string;
  articleCount: number;
};

export function SubtopicCard({
  locale,
  category,
  subtopicSlug,
  articleCount,
}: SubtopicCardProps) {
  const t = translator(getMessages(locale));
  const label = t(`subtopics.${subtopicSlug}.label`);
  const description = t(`subtopics.${subtopicSlug}.description`);

  return (
    <Link
      href={localizedPath(locale, `/${category}/${subtopicSlug}`)}
      className="group flex h-full flex-col rounded-lg border border-ink-line bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
    >
      <h3 className="font-serif text-xl font-semibold tracking-tight text-ink group-hover:text-primary-700">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {description}
      </p>
      <div className="mt-auto flex items-center justify-between pt-6 text-xs">
        <span className="font-medium text-primary-700">
          {t("category_hub.browse_cta", { category: label.toLowerCase() })}
        </span>
        <span className="text-ink-subtle">
          {t(
            articleCount === 1
              ? "category_hub.article_count_one"
              : "category_hub.article_count_other",
            { count: articleCount },
          )}
        </span>
      </div>
    </Link>
  );
}

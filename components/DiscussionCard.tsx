import Link from "next/link";

import { formatDate } from "@/lib/content";
import type { Discussion } from "@/lib/discussions";
import {
  getMessages,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type DiscussionCardProps = {
  locale: Locale;
  discussion: Discussion;
};

const statusStyles: Record<Discussion["status"], string> = {
  open: "bg-primary-100 text-primary-800",
  closed: "bg-ink-surface text-ink-muted",
  scheduled: "bg-accent-100 text-accent-800",
};

export function DiscussionCard({ locale, discussion }: DiscussionCardProps) {
  const t = translator(getMessages(locale));
  const categoryLabel = t(`categories.${discussion.category}.label`);

  return (
    <article className="card flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow">
          {t("discussions.category_eyebrow", { category: categoryLabel })}
        </span>
        <span
          className={`rounded-sm px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${
            statusStyles[discussion.status]
          }`}
        >
          {t(`discussions.status.${discussion.status}`)}
        </span>
      </div>

      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug tracking-tight text-ink">
        <Link
          href={localizedPath(locale, `/discussions/${discussion.slug}`)}
          className="hover:text-primary-700"
        >
          {discussion.title}
        </Link>
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {discussion.topic}
      </p>

      <div className="mt-6 flex items-center justify-between text-xs text-ink-subtle">
        <span>
          {t("discussions.moderated_by")}{" "}
          <span className="font-medium text-ink">{discussion.moderator.name}</span>
        </span>
        <span>
          {t("discussions.participants", { count: discussion.participantCount })} ·{" "}
          {formatDate(discussion.updatedDate, locale)}
        </span>
      </div>
    </article>
  );
}

import Link from "next/link";
import { categoryMeta } from "@/lib/seo";
import { formatDate } from "@/lib/content";
import type { Discussion } from "@/lib/discussions";

type DiscussionCardProps = {
  discussion: Discussion;
};

const statusStyles: Record<Discussion["status"], string> = {
  open: "bg-primary-100 text-primary-800",
  closed: "bg-ink-surface text-ink-muted",
  scheduled: "bg-accent-100 text-accent-800",
};

export function DiscussionCard({ discussion }: DiscussionCardProps) {
  const cat = categoryMeta[discussion.category];

  return (
    <article className="card flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow">Discussion · {cat.label}</span>
        <span
          className={`rounded-sm px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${
            statusStyles[discussion.status]
          }`}
        >
          {discussion.status}
        </span>
      </div>

      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug tracking-tight text-ink">
        <Link
          href={`/discussions/${discussion.slug}`}
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
          Moderated by{" "}
          <span className="font-medium text-ink">
            {discussion.moderator.name}
          </span>
        </span>
        <span>
          {discussion.participantCount} participants ·{" "}
          {formatDate(discussion.updatedDate)}
        </span>
      </div>
    </article>
  );
}

import { formatDate } from "@/lib/content";
import type { DiscussionComment } from "@/lib/discussions";
import { getMessages, translator, type Locale } from "@/lib/i18n";

type CommentsThreadProps = {
  locale: Locale;
  comments: DiscussionComment[];
  /** Reserved for when contributions reopen; currently always closed. */
  acceptingNew?: boolean;
};

/**
 * Editorial notes on a curated discussion.
 *
 * There was a submission form here, wired to /api/discussions/comment.
 * That endpoint validated a submission, returned "queued for review",
 * and stored nothing — the moderation backend was never built. The
 * form also told the reader that "verified experts are marked with a
 * badge", and no entry in the corpus has ever been from a verified
 * expert. Both statements were false, so the form is gone and the
 * panel now says what is actually true.
 *
 * The `isExpert` badge stays in the render path because the field is
 * the shape a real moderation backend would return. It has never
 * rendered, because no entry sets it.
 */
export function CommentsThread({
  locale,
  comments,
  acceptingNew = false,
}: CommentsThreadProps) {
  const t = translator(getMessages(locale));
  void acceptingNew;

  return (
    <div className="mt-8">
      <h3 className="font-serif text-lg font-semibold text-ink">
        {t("discussions.notes_heading", { count: comments.length })}
      </h3>

      <ol className="mt-4 space-y-5">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="rounded-md border border-ink-line bg-white p-5"
          >
            <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
              <span className="font-medium text-ink">{comment.authorName}</span>
              {comment.isExpert && (
                <span className="rounded-sm bg-primary-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-800">
                  {t("discussions.verified_contributor")}
                </span>
              )}
              <span className="text-xs text-ink-subtle">
                {comment.authorTitle}
              </span>
              <span className="ml-auto text-xs text-ink-subtle">
                {formatDate(comment.postedAt, locale)}
              </span>
            </header>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              {comment.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-6 rounded-md border border-ink-line bg-ink-surface p-4 text-sm text-ink-muted">
        {t("discussions.closed_notice")}
      </p>
    </div>
  );
}

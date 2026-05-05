import { formatDate } from "@/lib/content";
import type { DiscussionComment } from "@/lib/discussions";
import { type Locale } from "@/lib/i18n";
import {
  HONEYPOT_FIELD,
  HONEYPOT_TIMESTAMP_FIELD,
} from "@/lib/security/honeypot";

type CommentsThreadProps = {
  locale: Locale;
  comments: DiscussionComment[];
  /** When false, the composer is rendered in a read-only state. */
  acceptingNew?: boolean;
};

/**
 * Mock comments UI for moderated discussions.
 *
 * Comment bodies are user-generated content from verified experts and
 * are NOT translated by this layer — they are shown as authored. The
 * surrounding chrome (composer copy, status text) is locale-aware.
 */
export function CommentsThread({
  locale,
  comments,
  acceptingNew = true,
}: CommentsThreadProps) {
  return (
    <div className="mt-8">
      <h3 className="font-serif text-lg font-semibold text-ink">
        Thread ({comments.length})
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
                  Verified expert
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

      {acceptingNew ? (
        <form
          // `/api/discussions/comment` runs the full anti-spam stack
          // (rate-limit, honeypot, sanitize, length & link caps,
          // banned-phrase + spam-shape detectors) before queueing for
          // moderation review.
          action="/api/discussions/comment"
          method="post"
          className="mt-6 rounded-md border border-ink-line bg-ink-surface p-5"
        >
          <label
            htmlFor="comment-body"
            className="text-sm font-medium text-ink"
          >
            Add to the discussion
          </label>
          <p className="mt-1 text-xs text-ink-subtle">
            Comments are reviewed before they appear. Verified experts are
            marked with a badge.
          </p>
          <textarea
            id="comment-body"
            name="body"
            rows={4}
            required
            minLength={30}
            maxLength={4000}
            placeholder="Make a substantive point — citations welcome."
            className="mt-3 w-full rounded-md border border-ink-line bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
          {/* Honeypot — must stay in DOM order so naïve form-fillers
              still see and fill it. */}
          <div aria-hidden="true" className="hp-trap">
            <label htmlFor="comment-website-url">Website</label>
            <input
              id="comment-website-url"
              type="text"
              name={HONEYPOT_FIELD}
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>
          <input
            type="hidden"
            name={HONEYPOT_TIMESTAMP_FIELD}
            defaultValue={Date.now()}
          />
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-ink-subtle">
              Plain text only. Submissions enter a moderation queue.
            </p>
            <button type="submit" className="btn-primary">
              Submit for review
            </button>
          </div>
        </form>
      ) : (
        <p className="mt-6 rounded-md border border-ink-line bg-ink-surface p-4 text-sm text-ink-muted">
          This thread is closed for new comments.
        </p>
      )}
    </div>
  );
}

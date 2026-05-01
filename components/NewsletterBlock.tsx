type NewsletterBlockProps = {
  /** Variant tunes the surrounding chrome — "section" gets a shaded panel, "inline" sits within an article. */
  variant?: "section" | "inline";
};

export function NewsletterBlock({ variant = "section" }: NewsletterBlockProps) {
  const isInline = variant === "inline";

  return (
    <section
      aria-labelledby="newsletter-heading"
      className={
        isInline
          ? "my-12 rounded-lg border border-primary-100 bg-primary-50/60 p-6"
          : "border-y border-ink-line bg-ink-surface"
      }
    >
      <div
        className={
          isInline
            ? "flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
            : "container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between"
        }
      >
        <div className="max-w-xl">
          <p className="eyebrow">Field notes — fortnightly</p>
          <h2
            id="newsletter-heading"
            className="mt-2 font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl"
          >
            One careful brief from the lab to your inbox
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
            Plain-language summaries of the most consequential findings in
            ecology, biology, and applied physics. No churn, no clickbait, no
            reposts.
          </p>
        </div>

        {/* TODO(integration): wire this form to the newsletter provider
            (e.g. Buttondown, ConvertKit, Substack API). The action handler
            should validate the email server-side and double-opt-in. */}
        <form
          action="/api/newsletter"
          method="post"
          className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="you@institution.edu"
            className="flex-1 rounded-md border border-ink-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
      </div>

      {!isInline && (
        <p className="container-page pb-8 text-xs text-ink-subtle">
          We never share or sell your email. Unsubscribe in one click.
        </p>
      )}
    </section>
  );
}

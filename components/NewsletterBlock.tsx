import { getMessages, translator, type Locale } from "@/lib/i18n";
import {
  HONEYPOT_FIELD,
  HONEYPOT_TIMESTAMP_FIELD,
} from "@/lib/security/honeypot";

type NewsletterBlockProps = {
  locale: Locale;
  /** Variant tunes the surrounding chrome — "section" gets a shaded panel, "inline" sits within an article. */
  variant?: "section" | "inline";
};

/**
 * The subscribe form promised delivery ("Subscribe to receive new
 * long-form articles and insights") while /api/newsletter validated the
 * address, returned 202, and stored nothing — no provider was ever
 * configured. Collecting an email address against a promise the site
 * cannot keep is not acceptable, so the form only renders once a
 * provider is configured.
 *
 * Set NEXT_PUBLIC_NEWSLETTER_ENABLED=true (and wire the provider hand-off
 * in app/api/newsletter/route.ts) to restore it. Until then the panel
 * states plainly that the list is not open and that nothing is stored.
 */
const NEWSLETTER_ENABLED =
  process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED === "true";

export function NewsletterBlock({ locale, variant = "section" }: NewsletterBlockProps) {
  const t = translator(getMessages(locale));
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
          <p className="eyebrow">{t("newsletter.eyebrow")}</p>
          <h2
            id="newsletter-heading"
            className="mt-2 font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl"
          >
            {t("newsletter.title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
            {NEWSLETTER_ENABLED
              ? t("newsletter.description")
              : t("newsletter.not_open")}
          </p>
        </div>

        {/* `/api/newsletter` runs the full anti-spam stack
            (rate-limit, honeypot, sanitize, optional CAPTCHA) before
            handing off to the provider integration. */}
        {NEWSLETTER_ENABLED && (
        <form
          action="/api/newsletter"
          method="post"
          className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {t("newsletter.email_label")}
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t("newsletter.email_placeholder")}
            className="flex-1 rounded-md border border-ink-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
          {/* Honeypot — invisible to users, attractive to bots. The
              server rejects submissions that fill this field. */}
          <div aria-hidden="true" className="hp-trap">
            <label htmlFor="newsletter-website-url">Website</label>
            <input
              id="newsletter-website-url"
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
          <button type="submit" className="btn-primary">
            {t("newsletter.submit")}
          </button>
        </form>
        )}
      </div>
    </section>
  );
}

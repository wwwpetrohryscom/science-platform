/**
 * Honeypot pattern.
 *
 * A regular `<input>` rendered off-screen with `aria-hidden`,
 * `tabIndex={-1}`, and `autoComplete="off"`. Real users never reach
 * it; most spam bots (form-fillers, naive scrapers) fill every field
 * they find and are caught by `isHoneypotTriggered` on the server.
 *
 * The field name is mildly obfuscated (`website_url`) because random
 * names defeat field-aware bots without affecting users — we never
 * read or display this value.
 *
 * When combined with the rate limiter and content validators this is
 * sufficient against drive-by spam. Pair with Turnstile/reCAPTCHA
 * (`lib/security/captcha.ts`) for targeted submissions.
 */

export const HONEYPOT_FIELD = "website_url" as const;
/** Submission timestamp field — used to reject sub-second submissions. */
export const HONEYPOT_TIMESTAMP_FIELD = "form_loaded_at" as const;
/** Minimum time (ms) a real user takes to fill the form. */
export const HONEYPOT_MIN_FILL_MS = 2_500;

/** Inline style — visually hides the field without removing it from the DOM. */
export const HONEYPOT_HIDDEN_STYLE: React.CSSProperties = {
  position: "absolute",
  left: "-9999px",
  width: "1px",
  height: "1px",
  opacity: 0,
  pointerEvents: "none",
};

export type HoneypotCheck = {
  ok: boolean;
  reason?: "filled" | "too-fast" | "missing-timestamp";
};

/**
 * Check honeypot signals from a parsed form payload.
 *
 *  - `filled`: bot filled the trap field. Reject silently — never
 *    return a 4xx error message that hints at the trap.
 *  - `too-fast`: form was submitted in well under the minimum human
 *    fill time. Almost always a bot.
 *  - `missing-timestamp`: timestamp field was stripped. Treated as
 *    suspicious (real submissions always carry it).
 */
export function checkHoneypot(form: {
  [HONEYPOT_FIELD]?: unknown;
  [HONEYPOT_TIMESTAMP_FIELD]?: unknown;
}): HoneypotCheck {
  const trap = form[HONEYPOT_FIELD];
  if (typeof trap === "string" && trap.trim().length > 0) {
    return { ok: false, reason: "filled" };
  }

  const ts = form[HONEYPOT_TIMESTAMP_FIELD];
  if (typeof ts !== "string" || !ts) {
    return { ok: false, reason: "missing-timestamp" };
  }
  const tsMs = Number(ts);
  if (!Number.isFinite(tsMs) || tsMs <= 0) {
    return { ok: false, reason: "missing-timestamp" };
  }
  if (Date.now() - tsMs < HONEYPOT_MIN_FILL_MS) {
    return { ok: false, reason: "too-fast" };
  }

  return { ok: true };
}

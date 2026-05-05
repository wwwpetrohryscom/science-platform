/**
 * Input sanitization for user-submitted text.
 *
 * Scope:
 *   - normalize / strip control characters and zero-width spaces
 *   - cap length so a single submission can't blow up storage
 *   - reject HTML/script — comments are plain text in this app
 *   - validate emails and URLs at the boundary
 *
 * No third-party dependency. Keep this file dependency-free so it
 * also runs cleanly inside `app/api/*` route handlers.
 */

/** Characters that have no place in user-typed prose. */
const ZERO_WIDTH = /[​-‍﻿]/g;
const CONTROL = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

/**
 * Normalize a free-text field. Trims, collapses whitespace, removes
 * zero-width and control characters, and (optionally) caps length.
 */
export function sanitizeText(
  input: unknown,
  opts: { maxLength?: number } = {},
): string {
  if (typeof input !== "string") return "";
  const cleaned = input
    .normalize("NFKC")
    .replace(ZERO_WIDTH, "")
    .replace(CONTROL, "")
    .replace(/\s+/g, " ")
    .trim();
  const max = opts.maxLength ?? 4000;
  return cleaned.length > max ? cleaned.slice(0, max) : cleaned;
}

/**
 * Strip every HTML tag. Used as a defence-in-depth — the form fields
 * in this app render text content only, but if a downstream consumer
 * ever rendered the value as HTML, this prevents stored XSS.
 */
export function stripHtml(input: string): string {
  return input
    .replace(/<\/?[a-zA-Z][^>]*>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

/**
 * RFC 5321-ish email check. Conservative: accepts the addresses we'd
 * actually deliver mail to, rejects obvious malformed input. Server-
 * side validation only — never rely on client `type="email"`.
 */
export function isValidEmail(input: string): boolean {
  if (input.length > 254) return false;
  // Local part 1–64, domain 1–253, TLD ≥ 2 chars.
  return /^[A-Za-z0-9._%+\-]{1,64}@[A-Za-z0-9.\-]{1,253}\.[A-Za-z]{2,}$/.test(
    input,
  );
}

/** Block addresses that look like role accounts attackers commonly use. */
const SUSPICIOUS_LOCAL_PARTS = new Set([
  "abuse",
  "admin",
  "noreply",
  "no-reply",
  "postmaster",
  "root",
  "webmaster",
]);

export function isSuspiciousEmail(input: string): boolean {
  const local = input.split("@")[0]?.toLowerCase() ?? "";
  return SUSPICIOUS_LOCAL_PARTS.has(local);
}

/**
 * Validate that a string is a syntactically valid http(s) URL. Used
 * by submission validators that accept user-supplied references.
 */
export function isValidHttpUrl(input: string): boolean {
  try {
    const u = new URL(input);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

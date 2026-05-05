import { NextResponse } from "next/server";

import {
  checkHoneypot,
  getClientIp,
  HONEYPOT_FIELD,
  HONEYPOT_TIMESTAMP_FIELD,
  rateLimit,
  sanitizeText,
  stripHtml,
  verifyCaptcha,
} from "@/lib/security";
import {
  detectKeywordStuffing,
  detectLinkSpam,
  detectRepeatedPhrases,
} from "@/lib/content/quality";
import { BANNED_PHRASES } from "@/lib/content/tone";

/**
 * Discussion comment submission endpoint.
 *
 * Comments enter a moderation queue (per the UI's "Submissions enter
 * a moderation queue" copy). Anti-spam runs at submission time so the
 * queue isn't the first line of defence:
 *
 *   1. Rate-limit by IP — 3 comments / 5 min.
 *   2. Honeypot — silent reject.
 *   3. Length bounds — 30 ≤ chars ≤ 4000.
 *   4. Strip HTML (UI renders plain text only).
 *   5. Spam-shape detectors — keyword stuffing, repeated phrases,
 *      link density. Soft-reject if any trigger.
 *   6. Banned-phrase scan — sensationalism, fake-cure language.
 *   7. Optional CAPTCHA when configured.
 *
 * Successful submissions are returned with `{ queued: true }` and an
 * `id` placeholder — the actual moderation backend is the next step.
 */
export const runtime = "nodejs";

const MIN_LEN = 30;
const MAX_LEN = 4000;
const MAX_LINKS = 3;

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);

  const limit = rateLimit({
    key: `comment:${ip}`,
    max: 3,
    windowMs: 5 * 60_000,
  });
  if (!limit.ok) {
    return jsonError(429, "Too many comments in a short window.", {
      "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)),
    });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await readForm(request);
  } catch {
    return jsonError(400, "Invalid request body.");
  }

  const honeypot = checkHoneypot({
    [HONEYPOT_FIELD]: payload[HONEYPOT_FIELD],
    [HONEYPOT_TIMESTAMP_FIELD]: payload[HONEYPOT_TIMESTAMP_FIELD],
  });
  if (!honeypot.ok) {
    return NextResponse.json({ ok: true, queued: true }, { status: 202 });
  }

  const raw = sanitizeText(payload.body, { maxLength: MAX_LEN + 200 });
  const body = stripHtml(raw).trim();

  if (body.length < MIN_LEN) {
    return jsonError(
      400,
      `Comments must be at least ${MIN_LEN} characters of substantive prose.`,
    );
  }
  if (body.length > MAX_LEN) {
    return jsonError(400, `Comments must be under ${MAX_LEN} characters.`);
  }

  // Outbound link cap — comments aren't a place to advertise.
  const linkCount = (body.match(/https?:\/\/\S+/g) ?? []).length;
  if (linkCount > MAX_LINKS) {
    return jsonError(
      400,
      `Comments can include up to ${MAX_LINKS} links. Cite sparingly.`,
    );
  }

  if (containsBannedPhrase(body)) {
    return jsonError(
      400,
      "This submission contains language we don't accept on the platform.",
    );
  }

  if (
    detectKeywordStuffing(body, { minTokens: 60 }).length > 0 ||
    detectRepeatedPhrases(body, { minN: 5, maxRepeats: 2 }).length > 0 ||
    detectLinkSpam(body) !== null
  ) {
    return jsonError(
      400,
      "Comment looks like spam. Please rephrase as a substantive point.",
    );
  }

  const captcha = await verifyCaptcha({
    token: typeof payload.captcha === "string" ? payload.captcha : undefined,
    remoteIp: ip,
  });
  if (!captcha.ok) {
    return jsonError(400, "We couldn't verify your submission. Please retry.");
  }

  // Moderation backend not wired yet — return 202 + a placeholder id
  // so callers can show "queued for review" without a misleading 200.
  return NextResponse.json(
    { ok: true, queued: true, id: cryptoRandomId() },
    { status: 202 },
  );
}

function containsBannedPhrase(text: string): boolean {
  const lower = text.toLowerCase();
  for (const phrase of BANNED_PHRASES) {
    if (lower.includes(phrase)) return true;
  }
  return false;
}

async function readForm(request: Request): Promise<Record<string, unknown>> {
  const ct = request.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) {
    return (await request.json()) as Record<string, unknown>;
  }
  const form = await request.formData();
  const out: Record<string, unknown> = {};
  for (const [k, v] of form.entries()) out[k] = typeof v === "string" ? v : "";
  return out;
}

function cryptoRandomId(): string {
  // Web Crypto is available in the Node 18+ runtime Next.js targets;
  // fall back to a Math.random id only if absent (development edge).
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `c_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

function jsonError(
  status: number,
  message: string,
  headers: Record<string, string> = {},
) {
  return NextResponse.json({ ok: false, error: message }, { status, headers });
}

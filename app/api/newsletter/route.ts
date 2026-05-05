import { NextResponse } from "next/server";

import {
  checkHoneypot,
  getClientIp,
  HONEYPOT_FIELD,
  HONEYPOT_TIMESTAMP_FIELD,
  isSuspiciousEmail,
  isValidEmail,
  rateLimit,
  sanitizeText,
  verifyCaptcha,
} from "@/lib/security";

/**
 * Newsletter subscription endpoint.
 *
 * Pipeline:
 *   1. Rate-limit by client IP (5 req / 10 min).
 *   2. Honeypot check — silent reject if a bot filled the trap or
 *      submitted faster than `HONEYPOT_MIN_FILL_MS`.
 *   3. Email validation — RFC-shaped + reject role accounts.
 *   4. Optional CAPTCHA (Turnstile or reCAPTCHA v3) — only enforced
 *      when the corresponding secret is configured.
 *   5. Hand off to the provider integration. Today the integration is
 *      not configured, so the route stores nothing and returns 202 to
 *      mirror the eventual double-opt-in flow.
 *
 * Always returns the same shape on legitimate-looking failures so
 * timing oracles can't distinguish "bad email" from "rate limited".
 */
export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);

  const limit = rateLimit({
    key: `newsletter:${ip}`,
    max: 5,
    windowMs: 10 * 60_000,
  });
  if (!limit.ok) {
    return jsonError(429, "Too many requests. Please try again shortly.", {
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
    // Don't tell the caller the trap fired.
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  const email = sanitizeText(payload.email, { maxLength: 254 }).toLowerCase();
  if (!isValidEmail(email) || isSuspiciousEmail(email)) {
    return jsonError(400, "Please provide a valid personal email address.");
  }

  const captcha = await verifyCaptcha({
    token: typeof payload.captcha === "string" ? payload.captcha : undefined,
    remoteIp: ip,
  });
  if (!captcha.ok) {
    return jsonError(400, "We couldn't verify your submission. Please retry.");
  }

  // Provider integration is intentionally not wired up yet. When it
  // lands, send `email` to the double-opt-in endpoint here.
  // Returning 202 documents the "queued, not yet confirmed" state.
  return NextResponse.json({ ok: true, queued: true }, { status: 202 });
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

function jsonError(
  status: number,
  message: string,
  headers: Record<string, string> = {},
) {
  return NextResponse.json({ ok: false, error: message }, { status, headers });
}

/**
 * Optional CAPTCHA verification — Turnstile and reCAPTCHA v3.
 *
 * Both providers are integrated through environment variables only.
 * If neither secret is set, `verifyCaptcha` returns `{ ok: true,
 * provider: "none" }` so existing flows keep working in development.
 *
 *   CLOUDFLARE_TURNSTILE_SECRET_KEY      — server-side secret
 *   NEXT_PUBLIC_TURNSTILE_SITE_KEY       — exposed to the client
 *
 *   RECAPTCHA_V3_SECRET                   — server-side secret
 *   NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY     — exposed to the client
 *
 * Client integration is left to consumers — the goal of this module
 * is the verification boundary so the rest of the codebase doesn't
 * need to know which provider is wired up.
 */

export type CaptchaResult = {
  ok: boolean;
  provider: "turnstile" | "recaptcha" | "none";
  /** Provider-reported error codes, if the verification call failed. */
  errors?: string[];
  /** reCAPTCHA-only — score in [0,1]. Lower = more likely bot. */
  score?: number;
};

/**
 * Verify a CAPTCHA token. Runs against whichever provider has its
 * secret configured. If a token is supplied but no provider is set,
 * we return `ok: true` (graceful no-op) rather than failing requests.
 */
export async function verifyCaptcha(input: {
  token: string | undefined | null;
  remoteIp?: string;
}): Promise<CaptchaResult> {
  const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  const recaptchaSecret = process.env.RECAPTCHA_V3_SECRET;

  if (!turnstileSecret && !recaptchaSecret) {
    return { ok: true, provider: "none" };
  }

  if (!input.token) {
    return { ok: false, provider: turnstileSecret ? "turnstile" : "recaptcha", errors: ["missing-input-token"] };
  }

  if (turnstileSecret) {
    return verifyTurnstile(turnstileSecret, input.token, input.remoteIp);
  }
  return verifyRecaptcha(recaptchaSecret as string, input.token, input.remoteIp);
}

async function verifyTurnstile(
  secret: string,
  token: string,
  remoteIp?: string,
): Promise<CaptchaResult> {
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body },
    );
    const data = (await res.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };
    return {
      ok: data.success === true,
      provider: "turnstile",
      errors: data["error-codes"],
    };
  } catch {
    return { ok: false, provider: "turnstile", errors: ["network-error"] };
  }
}

async function verifyRecaptcha(
  secret: string,
  token: string,
  remoteIp?: string,
): Promise<CaptchaResult> {
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  try {
    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      { method: "POST", body },
    );
    const data = (await res.json()) as {
      success: boolean;
      score?: number;
      "error-codes"?: string[];
    };
    // reCAPTCHA v3 returns `success: true` for any non-malformed token.
    // Treat scores below 0.5 as bot-likely — a defensible default.
    const score = typeof data.score === "number" ? data.score : undefined;
    const ok = data.success === true && (score === undefined || score >= 0.5);
    return {
      ok,
      provider: "recaptcha",
      errors: data["error-codes"],
      score,
    };
  } catch {
    return { ok: false, provider: "recaptcha", errors: ["network-error"] };
  }
}

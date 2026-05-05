/**
 * In-memory token-bucket rate limiter.
 *
 * Trade-offs:
 *   - Per-instance state. On a multi-instance deployment buckets are
 *     not shared; a determined attacker could fan out across regions.
 *     For real production you'd swap this for Upstash, Redis, or a
 *     Vercel KV/Edge Config-backed store. The interface stays the same.
 *   - No external dependency, no cold-start cost. Adequate for an
 *     editorial site receiving low submission volume — and never the
 *     only line of defence (honeypot + content validation also run).
 *
 * The shape (`limit({ key, max, windowMs })`) is intentionally generic
 * so an Upstash adapter is a drop-in replacement.
 */

type Bucket = {
  /** Wall-clock (ms) when the current window opened. */
  start: number;
  /** Hits seen inside the current window. */
  hits: number;
};

const STORE = new Map<string, Bucket>();

export type RateLimitOptions = {
  /** Stable identifier — usually an IP, user id, or `{ip}:{action}`. */
  key: string;
  /** Maximum number of hits allowed inside `windowMs`. */
  max: number;
  /** Window size in ms (e.g. 60_000 for "5 per minute"). */
  windowMs: number;
};

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  /** ms until the next hit will (probably) be allowed. 0 if `ok`. */
  retryAfterMs: number;
};

/**
 * Returns the current bucket state for `key` and (when `ok`)
 * increments it. Atomic on a single Node instance — sufficient here.
 */
export function rateLimit(opts: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const existing = STORE.get(opts.key);

  if (!existing || now - existing.start >= opts.windowMs) {
    STORE.set(opts.key, { start: now, hits: 1 });
    return { ok: true, remaining: opts.max - 1, retryAfterMs: 0 };
  }

  if (existing.hits < opts.max) {
    existing.hits += 1;
    return {
      ok: true,
      remaining: opts.max - existing.hits,
      retryAfterMs: 0,
    };
  }

  return {
    ok: false,
    remaining: 0,
    retryAfterMs: opts.windowMs - (now - existing.start),
  };
}

/**
 * Best-effort client IP extraction. Trusts `x-forwarded-for`'s leftmost
 * entry (Vercel and most reverse proxies put the real client there).
 * Falls back to `x-real-ip`. Returns `"unknown"` so we still keyed
 * something — preferable to silently disabling the limiter.
 */
export function getClientIp(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = headers.get("x-real-ip");
  if (real) return real.trim();
  const cf = headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  return "unknown";
}

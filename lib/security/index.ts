/**
 * Public surface of the security layer. Import from here:
 *
 *   import { sanitizeText, rateLimit, checkHoneypot } from "@/lib/security";
 *
 * Modules are kept independent so you can pull in just what a route
 * needs (e.g. the honeypot constants for a client component) without
 * dragging in the rate-limiter's Map or the CAPTCHA fetch surface.
 */
export {
  sanitizeText,
  stripHtml,
  isValidEmail,
  isSuspiciousEmail,
  isValidHttpUrl,
} from "./sanitize";
export {
  rateLimit,
  getClientIp,
  type RateLimitOptions,
  type RateLimitResult,
} from "./rate-limit";
export {
  checkHoneypot,
  HONEYPOT_FIELD,
  HONEYPOT_TIMESTAMP_FIELD,
  HONEYPOT_MIN_FILL_MS,
  HONEYPOT_HIDDEN_STYLE,
  type HoneypotCheck,
} from "./honeypot";
export { verifyCaptcha, type CaptchaResult } from "./captcha";

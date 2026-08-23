/**
 * Lightweight, dependency-free security helpers for the enquiry endpoint.
 *
 * NOTE ON RATE LIMITING: This uses an in-memory map, which resets on cold
 * start and is NOT shared across serverless instances. It is a reasonable
 * baseline for a low-traffic marketing site on Vercel, but for stronger
 * guarantees under real load, replace with a durable store (e.g. Vercel KV /
 * Upstash Redis) — see README "Security checklist".
 */

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

const store = new Map<string, RateLimitEntry>();

export function checkRateLimit(identifier: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    store.set(identifier, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil((entry.windowStart + WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  entry.count += 1;
  return { allowed: true };
}

/**
 * Very small CSRF guard: verifies the request's Origin (or Referer as a
 * fallback) matches the configured site origin. Combined with SameSite
 * cookies not being required here (no session/auth), this is sufficient for
 * a stateless public enquiry form.
 */
export function isTrustedOrigin(request: Request, allowedOrigin: string): boolean {
  const origin = request.headers.get("origin");
  if (origin) return origin === allowedOrigin;

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).origin === allowedOrigin;
    } catch {
      return false;
    }
  }

  // No Origin/Referer header at all is unusual for a browser form POST —
  // treat as untrusted rather than silently allowing it.
  return false;
}

export function getClientIdentifier(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown";
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Applies a nonce-based Content-Security-Policy on every request. The nonce
 * is passed to the page via a request header so that app/layout.tsx can read
 * it (with next/headers) and attach it to the GA4 <script> tag — this is
 * what lets us avoid 'unsafe-inline' for scripts.
 */
export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID();

  const isProd = process.env.NODE_ENV === "production";

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com`,
    `style-src 'self' 'unsafe-inline'`, // Tailwind's generated styles are inlined by Next; no inline scripts are allowed.
    `img-src 'self' data: https:`,
    `font-src 'self' data:`,
    `connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  // This line was missing. Next.js reads the CSP (and its nonce) off the
  // REQUEST object — not just the response — to auto-nonce the inline
  // hydration/streaming <script> tags it injects internally. Without this,
  // every one of those scripts gets blocked by the browser and the page
  // never hydrates, which is exactly what caused the white screen.
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);

  if (isProd) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except static files and Next internals.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

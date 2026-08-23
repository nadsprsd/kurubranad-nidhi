import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { checkRateLimit, getClientIdentifier, isTrustedOrigin } from "@/lib/security";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  // 1. CSRF-style origin check for this stateless public form.
  if (!isTrustedOrigin(request, new URL(siteConfig.url).origin) && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  }

  // 2. Rate limiting per client IP.
  const identifier = getClientIdentifier(request);
  const rateLimit = checkRateLimit(identifier);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds ?? 600) } }
    );
  }

  // 3. Parse and validate.
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = enquirySchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: result.error.flatten() },
      { status: 400 }
    );
  }

  // 4. Honeypot check — bots that fill every field get silently rejected.
  if (result.data.companyWebsite) {
    return NextResponse.json({ ok: true }); // Respond success to avoid tipping off bots.
  }

  // 5. TODO(CLIENT / DEV): Wire this up to the client's chosen delivery channel
  //    — e.g. a transactional email provider or CRM webhook. Intentionally NOT
  //    implemented with a placeholder/fake integration per project policy.
  //    No sensitive documents are accepted by this schema, so nothing here
  //    requires special encryption-at-rest beyond standard provider practice.
  console.log("New enquiry received:", {
    name: result.data.name,
    service: result.data.service,
    preferredLocation: result.data.preferredLocation,
    // Phone/email intentionally omitted from logs; wire to a real destination
    // (email/CRM) rather than relying on server logs for enquiry handling.
  });

  return NextResponse.json({ ok: true });
}

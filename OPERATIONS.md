# Operations & Launch Checklists

Work through these in order. Do not launch until every relevant box is
checked, and no unverified legal/financial claim is presented as fact.

---

## 1. Content replacement checklist

Search the repo for `TODO(CLIENT)` (also visible directly in the rendered
pages) and replace each with verified, client-supplied content:

- [ ] `config/site.ts` — company name, brand name, domain, address, phone,
      WhatsApp, email, Google Maps link, office hours, CIN, legal structure,
      registration details
- [ ] `config/content.ts` — hero copy, company facts, vision/mission,
      leadership bios, service descriptions, gold-loan documents/benefits/
      charges, corporate profile narrative, compliance sections
- [ ] `public/images/*.jpg` — replace every placeholder image with approved,
      licensed photography (see image checklist below)
- [ ] Logo mark in `components/layout/header.tsx` (currently a text
      placeholder "KN")
- [ ] `app/opengraph-image.tsx` — update once real brand colors/logo confirmed
- [ ] `.env.local` / Vercel env vars — GA4 ID, Search Console verification

### Image checklist

- [ ] Every stock/placeholder image replaced with a client-approved photo
- [ ] Client has confirmed ownership or licensed usage rights for each image
- [ ] Faces and jewellery detail preserved without excessive filtering
- [ ] Images compressed and converted to WebP/AVIF before upload
- [ ] Meaningful `alt` text on every informative image; empty `alt=""` on
      decorative images only
- [ ] No AI-generated people used as if they were real staff/customers
- [ ] No important text baked into an image

---

## 2. Client approval checklist

Route each item to the appropriate approver before publishing:

- [ ] **Legal/CS:** legal structure, CIN, registration details, disclaimers
- [ ] **Compliance:** KYC process, internal controls, valuation/custody
      procedure, grievance redressal process, Privacy Policy, Terms of Use
- [ ] **Finance/Management:** any rate, fee, limit, tenure, or charge — none
      are currently published
- [ ] **Management:** company story, vision, mission, leadership bios and
      photos, corporate profile narrative, "future plans" (must stay labelled
      indicative)
- [ ] **Marketing:** final hero/CTA copy, service area list, FAQ answers
- [ ] Confirm no page states or implies the company is a bank, NBFC, or
      government-backed institution
- [ ] Confirm "subject to eligibility, documentation, company policy, and
      applicable regulations" appears wherever a service is described

---

## 3. SEO launch checklist

- [ ] `config/site.ts` `url` updated to the final production domain
- [ ] Unique title/description confirmed for all 7 routes (`config/seo.ts`)
- [ ] Canonical URLs resolve correctly on the live domain
- [ ] Open Graph image (`/opengraph-image`) renders correctly when shared
- [ ] `sitemap.xml` (`/sitemap.xml`) lists all 7 routes with correct URLs
- [ ] `robots.txt` (`/robots.txt`) allows crawling and disallows `/api/`
- [ ] Organization JSON-LD renders on every page (view source)
- [ ] FAQPage JSON-LD only present where FAQs are visibly rendered (home,
      gold-loan)
- [ ] BreadcrumbList JSON-LD renders on all non-home routes
- [ ] LocalBusiness JSON-LD **added only after** address/phone are verified
      (not implemented by default — see `components/seo/json-ld.tsx`)
- [ ] Internal links between related pages checked (services ↔ gold-loan ↔
      contact)
- [ ] No broken links (`npm run build` + manual click-through of all 7 routes)

---

## 4. Security checklist

- [ ] `npm audit` run and results reviewed; no high/critical vulnerabilities
      left unresolved
- [ ] Security headers present on production responses: CSP (nonce-based,
      see `middleware.ts`), X-Content-Type-Options, X-Frame-Options,
      Referrer-Policy, Permissions-Policy, Strict-Transport-Security
- [ ] No inline `<script>` tags added anywhere without going through the
      nonce mechanism in `middleware.ts`
- [ ] All environment variables containing secrets are server-only (never
      prefixed `NEXT_PUBLIC_` unless intentionally public, like the GA4 ID)
- [ ] Enquiry form: server-side Zod validation confirmed independent of
      client validation (test by disabling JS or posting directly to
      `/api/enquiry`)
- [ ] Honeypot field confirmed working (fill `companyWebsite` manually via
      dev tools and confirm the request is silently accepted but not
      forwarded anywhere real)
- [ ] Rate limiting confirmed (submit >5 enquiries within 10 minutes from the
      same IP and confirm a 429 response)
- [ ] `dangerouslySetInnerHTML` usage limited to JSON-LD `JSON.stringify`
      output only (verify with a repo-wide search)
- [ ] Consider adding `/public/.well-known/security.txt` with a real contact
      if the client wants a disclosure channel
- [ ] `/api/enquiry/route.ts` wired to a real, secure destination (email/CRM)
      before launch — it currently only logs to the server console

---

## 5. Testing checklist

- [ ] `npm run lint` passes with no errors
- [ ] `npm run typecheck` passes with no errors
- [ ] `npm run build` completes successfully
- [ ] All 7 routes load without console errors
- [ ] Mobile navigation opens/closes correctly and traps focus reasonably;
      Escape/tab behavior checked
- [ ] Enquiry form: valid submission succeeds; each required field's error
      message appears when left blank; email format validated when provided
- [ ] Enquiry form keyboard-only: tab through every field, submit with Enter
- [ ] FAQ accordions operable by keyboard (Enter/Space to toggle)
- [ ] 404 page (`/does-not-exist`) renders `app/not-found.tsx`
- [ ] Simulated error boundary (temporarily throw in a page) renders
      `app/error.tsx` with a working "Try again" button
- [ ] Metadata and canonical tags spot-checked via view-source on each route
- [ ] `sitemap.xml` and `robots.txt` validated (open directly in a browser)
- [ ] JSON-LD validated with Google's Rich Results Test for at least the
      home and gold-loan pages

---

## 6. Lighthouse and mobile testing instructions

1. Run a production build locally: `npm run build && npm run start`.
2. In Chrome DevTools, open the **Lighthouse** panel, select **Mobile**, and
   run Performance + Accessibility + Best Practices + SEO audits on `/` and
   `/gold-loan` at minimum.
3. In the **Network** tab, throttle to "Slow 4G" and reload `/` to confirm
   the hero image and layout do not shift (CLS) and text remains readable
   while fonts load.
4. Do not state a specific Lighthouse score anywhere in client-facing
   material until you have actually run this test against the deployed
   production URL — scores vary by environment and connection.
5. Test real devices where possible (a low-end Android phone on mobile data
   is the most representative check for this audience).

---

## 7. Vercel deployment instructions

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, **New Project → Import** the repository. Framework preset:
   Next.js (auto-detected).
3. Under **Environment Variables**, add `NEXT_PUBLIC_GA4_MEASUREMENT_ID` and
   `NEXT_PUBLIC_GSC_VERIFICATION` (Production and Preview scopes).
4. Deploy. Vercel will run `npm run build` automatically.
5. Add the client's domain under **Settings → Domains**, then update DNS at
   the domain registrar (A/CNAME per Vercel's instructions).
6. Once the domain is live, update `config/site.ts` → `url` to match exactly
   (including `https://` and no trailing slash), then redeploy so canonical
   URLs and the sitemap are correct.

---

## 8. WhatsApp notification setup

The site has **no database**, so enquiry delivery is handled two ways, both
already implemented:

**A. WhatsApp deep link (live now, free, no setup required)**
- The floating WhatsApp button, the "Message us on WhatsApp" / "Quick Quote"
  buttons (`components/ui/whatsapp-quote-cta.tsx`), and the main enquiry
  form (`components/forms/enquiry-form.tsx`) all use `wa.me` links built in
  `lib/whatsapp.ts`.
- When someone submits the full enquiry form, it opens WhatsApp on **their**
  device with a neatly formatted message (name, phone, service, location,
  requirement, message) addressed to your business WhatsApp number — they
  just tap Send. This works the instant `siteConfig.contact.whatsappHref` in
  `config/site.ts` is filled in with your real WhatsApp number — no other
  setup needed.
- Limitation: because WhatsApp doesn't let a website send a message on
  someone's behalf, delivery depends on the visitor tapping Send. As a
  backup, the form also quietly posts the same data to `/api/enquiry`
  (currently logged server-side — see the README section on wiring this to
  email/CRM).

**B. Fully automatic notifications (optional upgrade, requires setup + cost)**
If you want a message to land on your business WhatsApp the instant someone
submits, with zero action needed from the visitor, that requires the
**WhatsApp Business Platform (Cloud API)** via Meta:
1. Create/verify a Meta Business Manager account and a WhatsApp Business
   Platform app.
2. Verify your business WhatsApp number with Meta.
3. Get an approved message **template** (Meta requires pre-approved
   templates for business-initiated messages — free-form text isn't
   allowed for the first message in a conversation).
4. Generate a permanent access token and note your Phone Number ID.
5. In `app/api/enquiry/route.ts`, replace the `console.log` with a `fetch`
   call to `https://graph.facebook.com/v20.0/{phone-number-id}/messages`,
   passing the access token and your approved template name/parameters.
6. Each conversation started this way is billed by Meta per their current
   pricing — check their latest rates before enabling this in production.

This is optional — option A above already gets enquiries to your WhatsApp
without any of this setup or ongoing cost.

## 9. Google Analytics 4 setup instructions

1. In [Google Analytics](https://analytics.google.com), create a GA4
   property for the client's business (or use an existing one).
2. Create a **Web** data stream for the production domain and copy the
   **Measurement ID** (format `G-XXXXXXXXXX`).
3. Add it as `NEXT_PUBLIC_GA4_MEASUREMENT_ID` in Vercel env vars, then
   redeploy.
4. Analytics only loads after a visitor accepts the consent banner (see
   `components/layout/analytics-consent.tsx`) — this is intentional and
   should not be bypassed.
5. Confirm in GA4 **Realtime** reports that `page_view` fires on navigation,
   and that `enquiry_submit`, `phone_click`, `whatsapp_click`, and
   `map_click` fire from their respective interactions (see `lib/analytics.ts`
   for the exact event names/params — no PII or financial figures are ever
   included as event parameters).

---

## 10. Google Search Console setup instructions

1. In [Search Console](https://search.google.com/search-console), add the
   production domain as a property (Domain property is preferred if DNS
   access is available; otherwise use the URL-prefix property).
2. For the HTML tag verification method: copy the token from the provided
   `<meta name="google-site-verification" content="...">` tag, set it as
   `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel, and redeploy — `app/layout.tsx`
   already reads this value automatically. For DNS verification, add the
   TXT record at the registrar instead (no code change needed).
3. Once verified, submit `https://<domain>/sitemap.xml` under **Sitemaps**.
4. Use **URL Inspection** on each of the 7 routes to confirm they are
   indexable and request indexing if needed.
5. Revisit Search Console 1–2 weeks after launch to check for crawl errors
   or manual actions.

---

## 11. Google Business Profile setup instructions

1. Go to [Google Business Profile](https://business.google.com) and create
   or claim the listing for Kurubranad Nidhi Limited / Kurubranad Gold Loan
   using the **verified** registered address and phone number only.
2. Select the most accurate business category (do not select "Bank" — use a
   category consistent with the company's actual legal structure, e.g. a
   financial services or credit-related category, confirmed with the client).
3. Complete verification (postcard, phone, or email, depending on what
   Google offers for this listing).
4. Add the production website URL, verified hours, and a link to `/contact`.
5. Once live, link the Business Profile to Search Console for combined
   local-search reporting.

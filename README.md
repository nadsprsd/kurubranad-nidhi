# Kurumbranad Nidhi Limited — Marketing & Enquiry Website

A seven-page marketing and enquiry website for Kurumbranad Nidhi Limited
(brand: **Kurumbranad Gold Loan**), Perambra, Kerala. Built with Next.js App
Router, React, TypeScript, and Tailwind CSS. **No customer login, dashboard,
loan management, or payment processing** — this is enquiry-only, by design.

All company-specific facts (address, phone, CIN, rates, fees, legal
structure, leadership, etc.) are **placeholders** marked `TODO(CLIENT)`
throughout `config/site.ts` and `config/content.ts`. See
[`OPERATIONS.md`](./OPERATIONS.md) for the full content-replacement and
launch checklists — **do not deploy to production until that document has
been worked through.**

## Routes

| Path | Purpose |
|---|---|
| `/` | Home |
| `/about` | Company story, verified facts, vision/mission, leadership |
| `/services` | Savings, RD, FD, member loan services, gold loan overview |
| `/gold-loan` | Gold loan process, documents, valuation, FAQs |
| `/corporate-profile` | Corporate overview (not an investor offer) |
| `/compliance` | Legal structure, KYC, grievance redressal, privacy, terms |
| `/contact` | Enquiry form, phone/WhatsApp/email, map link |

## Local setup

Requires Node.js 20+.

```bash
npm install
cp .env.example .env.local   # fill in GA4 + Search Console values if available
npm run dev                  # http://localhost:3000
```

## Commands

```bash
npm run dev        # local development server
npm run lint        # ESLint (next/core-web-vitals)
npm run typecheck   # tsc --noEmit
npm run build        # production build
npm run start        # serve the production build locally
```

Before any deployment, run all four of the above in order and confirm each
passes cleanly.

## Project structure

```
app/                 Routes (App Router), sitemap.ts, robots.ts, layout.tsx
components/layout/    Header, footer, mobile nav, analytics consent banner
components/ui/        Button, card, section heading, breadcrumbs, FAQ, CTA, WhatsApp button
components/forms/     Enquiry form (client-side validated with Zod)
components/seo/       JSON-LD (Organization, FAQPage, BreadcrumbList)
config/               site.ts, navigation.ts, seo.ts, content.ts — all editable copy/config
lib/                  validation.ts (shared Zod schema), security.ts (rate limit/CSRF), analytics.ts
middleware.ts          Nonce-based CSP + HSTS
```

Content and copy changes should almost always be made in `config/content.ts`
and `config/site.ts` — page components stay presentational.

## Enquiry form data handling

With no database, the site delivers enquiries to WhatsApp:

- The main enquiry form, the floating WhatsApp button, and the "Quick Quote"
  buttons on Services/Gold Loan all use `lib/whatsapp.ts` to build a
  `wa.me` deep link. Submitting the full form opens WhatsApp on the
  visitor's device with a nicely formatted message pre-filled — they tap
  Send to reach your business number, set in
  `config/site.ts` → `contact.whatsappHref`.
- The form also quietly posts the same data to `/api/enquiry` in the
  background as a second, best-effort record. That route validates with the
  same Zod schema server-side, rejects honeypot-triggered submissions, rate
  limits by IP, and checks request Origin — but **currently only logs to
  the server console**. Wire it to a real destination (transactional email
  or CRM webhook) before launch — see the `TODO(CLIENT / DEV)` comment in
  `app/api/enquiry/route.ts`.
- See `OPERATIONS.md` → "WhatsApp notification setup" for the optional,
  fully-automatic upgrade path via Meta's WhatsApp Business Platform.

The form intentionally never collects Aadhaar, PAN, OTPs, bank credentials,
passwords, or file uploads.

## Deployment, analytics, and compliance checklists

See [`OPERATIONS.md`](./OPERATIONS.md) for:

- Content replacement checklist
- Client approval checklist
- SEO launch checklist
- Security checklist
- Testing checklist
- Lighthouse & mobile testing instructions
- Vercel deployment instructions
- **WhatsApp notification setup** (how enquiries reach your WhatsApp with no database)
- Google Analytics 4 setup
- Google Search Console setup
- Google Business Profile setup

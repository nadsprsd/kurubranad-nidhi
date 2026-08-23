import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { headers } from "next/headers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { AnalyticsConsent } from "@/components/layout/analytics-consent";
import { LeadPopup } from "@/components/ui/lead-popup";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  verification: siteConfig.searchConsole.verificationToken
    ? { google: siteConfig.searchConsole.verificationToken }
    : undefined,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Reading the nonce via headers() here is what tells Next.js to embed the
  // same nonce into the inline hydration/streaming <script> tags it
  // generates internally — without this call, Next has no way to know a
  // strict CSP is in effect and emits those scripts with no nonce at all,
  // which the browser then blocks (this was the actual cause of the white
  // screen: middleware alone wasn't enough).
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-surface-warm"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsappButton />
        <AnalyticsConsent />
        <LeadPopup />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}

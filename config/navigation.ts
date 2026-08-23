export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gold Loan", href: "/gold-loan" },
  { label: "Corporate Profile", href: "/corporate-profile" },
  { label: "Compliance", href: "/compliance" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/compliance#privacy-policy" },
  { label: "Terms of Use", href: "/compliance#terms" },
  { label: "Grievance Redressal", href: "/compliance#grievance" },
];

export const breadcrumbLabels: Record<string, string> = {
  "/about": "About",
  "/services": "Services",
  "/gold-loan": "Gold Loan",
  "/corporate-profile": "Corporate Profile",
  "/compliance": "Compliance",
  "/contact": "Contact",
};

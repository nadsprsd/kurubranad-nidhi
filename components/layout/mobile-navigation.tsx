"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/config/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = (
    <div
      id="mobile-nav-panel"
      className="fixed inset-x-0 top-[64px] bottom-0 z-[60] overflow-y-auto bg-navy px-6 py-8"
    >
      <ul className="flex flex-col gap-1">
        {primaryNav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded py-3 text-lg font-body text-surface-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 block rounded bg-gold px-6 py-3 text-center font-body font-medium text-navy-deep"
      >
        Enquire Now
      </Link>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {/*
        Rendered via a portal directly into <body>. The header uses
        backdrop-blur, and CSS backdrop-filter creates a new containing
        block for `position: fixed` descendants — without the portal, this
        panel would be clipped to the header's own 64px height instead of
        covering the screen. This was the "hamburger menu doesn't open" bug.
      */}
      {mounted && open ? createPortal(panel, document.body) : null}
    </div>
  );
}


import Image from "next/image";
import type { Branch } from "@/config/branches";
import { siteConfig } from "@/config/site";

interface BranchesListProps {
  heading: string;
  body: string;
  branches: Branch[];
}

export function BranchesList({ heading, body, branches }: BranchesListProps) {
  return (
    <section className="bg-surface-grey">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-navy relative inline-block">
            {heading}
            <span aria-hidden="true" className="block h-[3px] w-16 bg-gold mt-3 rounded-full" />
          </h2>
          <p className="mt-4 text-ink/70">{body}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <div key={branch.id} className="overflow-hidden rounded-lg border border-navy/10 bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={branch.image}
                  alt={branch.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
                {branch.status === "opening-soon" ? (
                  <span className="absolute left-3 top-3 rounded-full bg-brandred px-3 py-1 text-xs font-semibold text-white">
                    Opening soon
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <h3 className="font-display text-base text-navy">{branch.name}</h3>
                <address className="mt-2 not-italic text-sm leading-relaxed text-ink/70">
                  {branch.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                {branch.licenceNo ? (
                  <p className="mt-2 text-xs text-ink/45">Licence No: {branch.licenceNo}</p>
                ) : null}
                <a
                  href={branch.phone ? `tel:+91${branch.phone.replace(/\s/g, "")}` : siteConfig.contact.phoneHref}
                  className="mt-3 inline-block text-sm font-medium text-navy underline underline-offset-2 hover:text-gold-dark"
                >
                  {branch.phone ?? siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

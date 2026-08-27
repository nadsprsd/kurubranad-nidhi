import Image from "next/image";
import Link from "next/link";
import type { Branch } from "@/config/branches";

interface BranchesPreviewProps {
  heading: string;
  body: string;
  branches: Branch[];
}

export function BranchesPreview({ heading, body, branches }: BranchesPreviewProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-navy relative inline-block">
            {heading}
            <span aria-hidden="true" className="block h-[3px] w-16 bg-gold mt-3 rounded-full" />
          </h2>
          <p className="mt-4 text-ink/70">{body}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 text-sm font-medium text-navy underline underline-offset-2 hover:text-gold-dark"
        >
          View all branches &amp; addresses →
        </Link>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-5 sm:overflow-visible">
        {branches.map((branch) => (
          <div key={branch.id} className="w-40 shrink-0 sm:w-auto">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={branch.image}
                alt={branch.imageAlt}
                fill
                sizes="(min-width: 640px) 20vw, 160px"
                className="object-cover"
              />
              {branch.status === "opening-soon" ? (
                <span className="absolute left-2 top-2 rounded-full bg-brandred px-2 py-0.5 text-[10px] font-semibold text-white">
                  Opening soon
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm font-medium text-navy">{branch.name.replace(" Branch", "")}</p>
            <p className="text-xs text-ink/50">{branch.areaLabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

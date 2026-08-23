import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Error 404</p>
      <h1 className="mt-3 font-display text-3xl text-navy">We couldn&rsquo;t find that page.</h1>
      <p className="mt-4 text-ink/75">
        The page you&rsquo;re looking for may have moved. Try one of the links below, or head back home.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded bg-gold px-6 py-3 font-medium text-navy-deep hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          Go home
        </Link>
        <Link
          href="/contact"
          className="rounded border border-navy/30 px-6 py-3 text-navy hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

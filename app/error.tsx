"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO(DEV): Wire to an error-monitoring service before production launch.
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
        Something went wrong
      </p>
      <h1 className="mt-3 font-display text-3xl text-navy">We hit a snag loading this page.</h1>
      <p className="mt-4 text-ink/75">
        Please try again, or contact us directly if the problem continues.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded bg-gold px-6 py-3 font-medium text-navy-deep hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        Try again
      </button>
    </div>
  );
}

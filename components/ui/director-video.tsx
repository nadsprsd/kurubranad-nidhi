interface DirectorVideoProps {
  heading: string;
  body: string;
}

/**
 * A real, genuine video of director Praveen A.V. speaking directly to
 * camera about the company — supplied by the client. Self-hosted as a
 * static file (same approach many small business sites use for a single
 * short video) rather than embedded via YouTube/Vimeo, since no external
 * hosting account was supplied. Recorded in portrait orientation, so the
 * player is sized to match rather than stretched or cropped.
 */
export function DirectorVideo({ heading, body }: DirectorVideoProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-display text-2xl text-navy sm:text-3xl">{heading}</h2>
        <p className="mt-3 text-sm text-ink/60">{body}</p>
      </div>
      <div className="mx-auto mt-8 w-full max-w-xs overflow-hidden rounded-lg shadow-lg sm:max-w-sm">
        <video
          controls
          preload="metadata"
          poster="/images/directors/director-praveen-video-poster.jpg"
          className="aspect-[478/850] w-full bg-navy-deep object-cover"
        >
          <source src="/videos/director-message.mp4" type="video/mp4" />
          Your browser does not support embedded video. You can{" "}
          <a href="/videos/director-message.mp4" className="underline">
            download the video
          </a>{" "}
          instead.
        </video>
      </div>
      <p className="mt-3 text-center text-xs text-ink/45">
        Praveen A.V., Director, Kurumbranad Nidhi Limited
      </p>
    </section>
  );
}

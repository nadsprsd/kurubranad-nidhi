import Image from "next/image";

interface VideoPlaceholderProps {
  heading: string;
  body: string;
}

/**
 * TODO(CLIENT): Once a real introduction video is supplied (a YouTube /
 * Vimeo link, or an approved hosted file), replace this static placeholder
 * with an actual embedded player. We don't fabricate a video or use stock
 * footage that could be mistaken for the real branch or staff.
 */
export function VideoPlaceholder({ heading, body }: VideoPlaceholderProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-display text-2xl text-navy sm:text-3xl">{heading}</h2>
        <p className="mt-3 text-sm text-ink/60">{body}</p>
      </div>
      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src="/images/about-local-office.jpg"
          alt="Video introduction placeholder — to be replaced once the client supplies a real video"
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/30">
          <span
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-navy-deep shadow-lg"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

import { existsSync } from "fs";
import path from "path";
import VideoPlayer from "./VideoPlayer";
import Reveal from "./Reveal";
import { subjectSlug } from "@/lib/business";
import { photos } from "@/lib/photos";

// Same video-slot contract as WalkthroughSection, for the (currently
// undelivered) aerial flyover. No flyover.mp4 yet → this renders nothing,
// no "coming soon" placeholder. When a future revision drops the file in,
// this section appears on the next deploy with no code change.
const hasFlyover = existsSync(
  path.join(process.cwd(), "public/videos", subjectSlug, "flyover.mp4")
);

export default function FlyoverSection() {
  if (!hasFlyover) return null;

  const hasPoster = existsSync(
    path.join(
      process.cwd(),
      "public/videos",
      subjectSlug,
      "poster-flyover.jpg"
    )
  );
  const exteriorPhoto = photos.find((p) => p.isExterior) ?? photos[0];
  const poster = hasPoster
    ? `/videos/${subjectSlug}/poster-flyover.jpg`
    : exteriorPhoto.file;

  return (
    <section
      id="flyover"
      aria-labelledby="flyover-heading"
      className="bg-surface/30 px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow text-gold">From Above</p>
          <h2
            id="flyover-heading"
            className="mt-3 font-display text-4xl font-light tracking-wide text-ivory sm:text-5xl"
          >
            Zama From the Gaslamp Sky
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <VideoPlayer
            src={`/videos/${subjectSlug}/flyover.mp4`}
            poster={poster}
            label="Aerial flyover of Zama's Gaslamp Quarter block"
          />
        </Reveal>
      </div>
    </section>
  );
}

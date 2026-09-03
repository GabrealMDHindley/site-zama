import { existsSync } from "fs";
import path from "path";
import VideoPlayer from "./VideoPlayer";
import Reveal from "./Reveal";
import { subjectSlug } from "@/lib/business";
import { heroPhoto } from "@/lib/photos";

// Video-slot contract (design-principles.md §5) — renders only when the file
// exists. No file yet → no section, no placeholder.
const hasWalkthrough = existsSync(
  path.join(process.cwd(), "public/videos", subjectSlug, "walkthrough.mp4")
);

export default function WalkthroughSection() {
  if (!hasWalkthrough) return null;

  const hasPoster = existsSync(
    path.join(
      process.cwd(),
      "public/videos",
      subjectSlug,
      "poster-walkthrough.jpg"
    )
  );
  const poster = hasPoster
    ? `/videos/${subjectSlug}/poster-walkthrough.jpg`
    : heroPhoto.file;

  return (
    <section
      id="step-inside"
      aria-labelledby="step-inside-heading"
      className="bg-surface/30 px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow text-gold">The Walkthrough</p>
          <h2
            id="step-inside-heading"
            className="mt-3 font-display text-4xl font-light tracking-wide text-ivory sm:text-5xl"
          >
            Step Inside Zama
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <VideoPlayer
            src={`/videos/${subjectSlug}/walkthrough.mp4`}
            poster={poster}
            label="Step inside Zama — restaurant walkthrough"
          />
        </Reveal>
      </div>
    </section>
  );
}

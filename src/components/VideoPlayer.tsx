"use client";

import { useRef, useState } from "react";

/**
 * Click-to-play from the poster — never autoplay (design brief: "this is a
 * full-length walkthrough, not a background loop"). Exact contract element:
 * <video controls playsInline preload="metadata">.
 */
export default function VideoPlayer({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-sm border border-gold/20 bg-black">
      <video
        ref={videoRef}
        className="h-full w-full"
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          aria-label={`Play: ${label}`}
          className="group absolute inset-0 flex items-center justify-center bg-ground/20 transition-colors hover:bg-ground/10"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-ground/70 text-gold shadow-lg transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-7 w-7 sm:h-8 sm:w-8"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Zama's Amazonian-jungle-themed dining room, bar, sushi bar, and Fifth Avenue storefront in San Diego's Gaslamp Quarter.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="px-5 pb-14 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">In the Jungle</p>
          <h1 className="mt-3 font-display text-5xl font-light tracking-wide text-ivory sm:text-6xl">
            Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-ivory/70">
            The dining room, the bar, the sushi counter, and the storefront
            on Fifth Avenue.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.file}
              delay={(i % 3) * 0.05}
              className="mb-4 break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-sm border border-gold/10">
                <Image
                  src={photo.file}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

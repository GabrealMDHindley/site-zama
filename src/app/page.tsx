import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SignatureDishesScroller from "@/components/SignatureDishesScroller";
import WalkthroughSection from "@/components/WalkthroughSection";
import FlyoverSection from "@/components/FlyoverSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationBand from "@/components/LocationBand";
import { business } from "@/lib/business";
import { signatureDishes } from "@/lib/menu";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Latin American · Asian Fusion in the Gaslamp Quarter",
  description:
    "Zama pairs Peruvian and Mexican flavors with a Japanese-inspired sushi bar inside an Amazonian-jungle-themed dining room in San Diego's Gaslamp Quarter. Reserve on OpenTable.",
  alternates: { canonical: "/" },
};

const spacePhoto = photos.find((p) => p.file.endsWith("/09.jpg"))!;
const sushiPhoto = photos.find((p) => p.file.endsWith("/11.jpg"))!;

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The Space */}
      <section
        aria-labelledby="space-heading"
        className="px-5 py-24 sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-gold">The Space</p>
            <h2
              id="space-heading"
              className="mt-3 font-display text-4xl font-light tracking-wide text-ivory sm:text-5xl"
            >
              An Amazonian jungle, after dark.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ivory/70">
              Zama sits on the corner of Fifth and Island in the Gaslamp
              Quarter — forest greens, custom wood built-ins, a hanging
              jungle canopy, painted butterfly murals, and a bamboo-clad,
              backlit &ldquo;ZAMA&rdquo; sign over a chevron marble floor.
              {" "}{business.design}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              {business.ownership}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 eyebrow text-gold hover:text-ivory"
            >
              The Full Story →
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={spacePhoto.file}
                alt={spacePhoto.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={sushiPhoto.file}
                alt={sushiPhoto.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature Dishes — pinned horizontal drift */}
      <section aria-labelledby="signature-heading" className="bg-surface/25 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-gold">On the Table</p>
              <h2
                id="signature-heading"
                className="mt-3 font-display text-4xl font-light tracking-wide text-ivory sm:text-5xl"
              >
                Signature Dishes
              </h2>
            </div>
            <Link
              href="/menu"
              className="eyebrow text-gold hover:text-ivory"
            >
              View Full Menu →
            </Link>
          </Reveal>
        </div>
        <div className="px-5 sm:px-8">
          <SignatureDishesScroller dishes={signatureDishes} />
        </div>
      </section>

      <WalkthroughSection />
      <FlyoverSection />

      <ReviewsSection />

      <LocationBand />
    </>
  );
}

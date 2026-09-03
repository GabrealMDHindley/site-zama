import Reveal from "./Reveal";
import { business } from "@/lib/business";

export default function LocationBand() {
  return (
    <section
      aria-labelledby="location-heading"
      className="relative overflow-hidden bg-gold-gradient px-5 py-20 text-ground sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3 sm:items-center">
        <Reveal className="sm:col-span-2">
          <h2
            id="location-heading"
            className="font-display text-3xl font-light tracking-wide sm:text-4xl"
          >
            Find us in the heart of the Gaslamp jungle.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ground/80">
            {business.address.full}
          </p>
          <dl className="mt-6 space-y-1 text-sm text-ground/80">
            {business.hours.map((h) => (
              <div key={h.days} className="flex gap-3">
                <dt className="font-medium">{h.days}:</dt>
                <dd>{h.hours}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal
          delay={0.1}
          className="flex flex-col items-start gap-3 sm:items-end"
        >
          <a
            href={business.openTableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-ground bg-ground px-7 py-3 eyebrow tracking-widest2 text-gold transition-colors hover:bg-transparent hover:text-ground"
          >
            Reserve on OpenTable
          </a>
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center rounded-full border border-ground/50 px-7 py-3 eyebrow tracking-widest2 text-ground transition-colors hover:border-ground"
          >
            Call {business.phoneDisplay}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-ground/50 px-7 py-3 eyebrow tracking-widest2 text-ground transition-colors hover:border-ground"
          >
            Get Directions
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { reviews } from "@/lib/reviews";
import { business } from "@/lib/business";

function Stars({ rating }: { rating?: number }) {
  if (!rating) return null;
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-4 text-center">
          <p className="eyebrow text-gold">Guests Say</p>
          <h2
            id="reviews-heading"
            className="mt-3 font-display text-4xl font-light tracking-wide text-ivory sm:text-5xl"
          >
            Word From the Jungle
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ivory/60">
            {business.aggregateRating.ratingValue} / 5 on Google, from
            roughly {business.aggregateRating.reviewCount.toLocaleString()}{" "}
            reviews.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name + r.timeAgo} delay={(i % 4) * 0.06}>
              <figure className="flex h-full flex-col justify-between rounded-sm border border-gold/15 bg-surface/40 p-6">
                <div>
                  <Stars rating={r.rating} />
                  <blockquote className="mt-4 text-sm leading-relaxed text-ivory/80">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 eyebrow text-ivory/50">
                  {r.name} <span className="text-gold/60">· {r.platform}</span>
                  <span className="block normal-case tracking-normal text-ivory/35">
                    {r.timeAgo}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type { MenuItem } from "@/lib/menu";

/**
 * Pinned horizontal-drift on Signature Dishes (design brief, motion
 * language): on desktop with motion allowed, the section pins and vertical
 * scroll drives horizontal movement through the dish cards. Falls back to a
 * plain horizontally-scrollable row (native scroll-snap, always reachable)
 * on small screens, under prefers-reduced-motion, or before GSAP loads.
 */
export default function SignatureDishesScroller({
  dishes,
}: {
  dishes: MenuItem[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;
    if (window.innerWidth < 900) return;
    if (!sectionRef.current || !trackRef.current) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !sectionRef.current || !trackRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const track = trackRef.current;
      const distance = () =>
        Math.max(track.scrollWidth - section.clientWidth, 0);

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }, sectionRef);
      setPinned(true);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <div
        ref={trackRef}
        className={
          pinned
            ? "flex w-max gap-6 will-change-transform"
            : "dish-scroll flex gap-5 overflow-x-auto pb-4"
        }
      >
        {dishes.map((dish) => (
          <article
            key={dish.name}
            className="w-[78vw] shrink-0 rounded-sm border border-gold/25 bg-surface/60 p-7 sm:w-[360px]"
          >
            <h3 className="font-serif text-2xl text-ivory">{dish.name}</h3>
            {dish.description && (
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                {dish.description}
              </p>
            )}
            <div className="mt-6 flex items-center justify-between">
              <span className="eyebrow text-gold/70">Signature</span>
              {dish.price && (
                <span className="font-serif text-xl italic text-gold">
                  {dish.price}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

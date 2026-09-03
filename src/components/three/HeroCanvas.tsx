"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import HeroFallback from "./HeroFallback";

// Video-slot-contract-style pattern from design-principles.md §5: the 3D
// scene is dynamically imported with ssr:false and a styled static fallback
// (never a blank div) while it loads.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function HeroCanvas() {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWebgl(supportsWebGL());
  }, []);

  // Parallax between the hero photo and the 3D layer: the leaf field drifts
  // at a slower rate than the page scroll. Skipped entirely when the visitor
  // prefers reduced motion.
  useEffect(() => {
    if (!wrapRef.current) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !wrapRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.to(wrapRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current!.closest("section") ?? wrapRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      {webgl === false ? <HeroFallback /> : <HeroScene />}
    </div>
  );
}

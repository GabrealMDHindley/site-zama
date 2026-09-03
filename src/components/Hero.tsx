import Image from "next/image";
import HeroCanvas from "./three/HeroCanvas";
import { business } from "@/lib/business";
import { heroPhoto } from "@/lib/photos";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ground sm:items-center"
      aria-label="Zama — hero"
    >
      <Image
        src={heroPhoto.file}
        alt={heroPhoto.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Darken toward the ground color at the edges, per the design brief. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, rgba(18,32,26,0.15) 0%, rgba(18,32,26,0.55) 65%, rgba(18,32,26,0.92) 100%), linear-gradient(to top, #12201A 0%, rgba(18,32,26,0.35) 30%, rgba(18,32,26,0.15) 55%)",
        }}
      />

      {/* Ambient 3D leaf layer — never over the headline or the photo's
          center of interest; opacity kept low inside the scene itself. */}
      <HeroCanvas />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-40 text-center sm:px-8 sm:pb-24 sm:pt-32">
        <Image
          src="/brand/logo.png"
          alt={`${business.fullName} — ${business.tagline}`}
          width={520}
          height={293}
          priority
          className="mx-auto h-auto w-56 sm:w-72"
        />
        <h1 className="sr-only">{business.fullName}</h1>
        <p className="mx-auto mt-6 max-w-xl text-balance font-serif text-lg italic text-ivory/85 sm:text-xl">
          {business.heroLine}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={business.openTableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-gold bg-gold px-8 py-3.5 eyebrow tracking-widest2 text-ground transition-colors hover:bg-transparent hover:text-gold sm:w-auto"
          >
            Reserve a Table
          </a>
          <a
            href="/menu"
            className="inline-flex w-full items-center justify-center rounded-full border border-ivory/40 px-8 py-3.5 eyebrow tracking-widest2 text-ivory transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            View the Menu
          </a>
        </div>

        <p className="mt-8 eyebrow text-ivory/50">
          {business.address.neighborhood} · San Diego
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 z-10 hidden justify-center sm:flex"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ivory/30 p-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold motion-reduce:animate-none" />
        </span>
      </div>
    </section>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Zama — an Amazonian-jungle-themed dining room in San Diego's Gaslamp Quarter designed by Tucker Sadler Architects, and the chefs behind its Latin American — Asian fusion menu.",
  alternates: { canonical: "/about" },
};

const entrance = photos.find((p) => p.file.endsWith("/04.jpg"))!;
const mural = photos.find((p) => p.file.endsWith("/06.jpg"))!;
const bar = photos.find((p) => p.file.endsWith("/09.jpg"))!;
const sushiBar = photos.find((p) => p.file.endsWith("/11.jpg"))!;
const vestibule = photos.find((p) => p.file.endsWith("/15-candidate.jpg"))!;

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-gold">About Zama</p>
          <h1 className="mt-3 font-display text-5xl font-light tracking-wide text-ivory sm:text-6xl">
            Bienvenida a la Selva
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ivory/70">
            Welcome to the jungle — a 3,600-square-foot Amazonian world built
            into a Gaslamp Quarter corner, where Latin American cooking meets
            a Japanese-inspired sushi bar.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full">
            <Image
              src={mural.file}
              alt={mural.alt}
              fill
              sizes="(min-width: 640px) 60vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.05} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={entrance.file}
              alt={entrance.alt}
              fill
              sizes="(min-width: 640px) 30vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={vestibule.file}
              alt={vestibule.alt}
              fill
              sizes="(min-width: 640px) 30vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="design-heading" className="bg-surface/25 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-gold">Design</p>
            <h2
              id="design-heading"
              className="mt-3 font-display text-4xl font-light tracking-wide text-ivory sm:text-5xl"
            >
              An architecture of jungle nightfall.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ivory/70">
              {business.design}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              Inside: forest-green channel-tufted booths, a black-and-white
              chevron marble floor, hanging jungle canopy with gold orbs,
              painted butterfly murals, and a bamboo-clad, backlit
              &ldquo;ZAMA&rdquo; sign beside neon reading &ldquo;Bienvenida a
              la selva.&rdquo; Zama occupies the space previously home to
              &ldquo;Monkey King.&rdquo;
            </p>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              {business.ownership}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={bar.file}
              alt={bar.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="kitchen-heading" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow text-gold">The Kitchen</p>
            <h2
              id="kitchen-heading"
              className="mt-3 font-display text-4xl font-light tracking-wide text-ivory sm:text-5xl"
            >
              Latin American technique, Japanese precision.
            </h2>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="grid gap-6 sm:grid-cols-3">
              {business.chefs.map((chef) => (
                <Reveal key={chef.name}>
                  <div className="rounded-sm border border-gold/15 bg-surface/40 p-6">
                    <h3 className="font-serif text-xl text-ivory">
                      {chef.name}
                    </h3>
                    <p className="mt-1 eyebrow text-gold/70">{chef.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ivory/65">
                      {chef.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={sushiBar.file}
                alt={sushiBar.alt}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

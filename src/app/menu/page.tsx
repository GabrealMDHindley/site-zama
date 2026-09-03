import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { menu, prixFixe } from "@/lib/menu";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Zama's menu — sushi rolls, ceviche, entrées, sushi bar specialties, desserts, and cocktails, San Diego's Latin American — Asian fusion restaurant in the Gaslamp Quarter.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <section className="px-5 pb-14 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-gold">The Menu</p>
          <h1 className="mt-3 font-display text-5xl font-light tracking-wide text-ivory sm:text-6xl">
            Menu
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-ivory/70">
            Latin American cooking meets a Japanese-inspired sushi bar.
            Pricing shown as published; à la carte pricing for unmarked
            dishes is available in-restaurant — reserve a table to explore
            the full menu.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-5xl space-y-20">
          {menu.map((category) => (
            <div key={category.id} id={category.id}>
              <Reveal>
                <h2 className="border-b border-gold/20 pb-4 font-serif text-3xl italic text-gold">
                  {category.title}
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {category.items.map((item, i) => (
                  <Reveal key={item.name} delay={(i % 2) * 0.06}>
                    <div className="flex items-baseline justify-between gap-4 border-b border-ivory/10 pb-4">
                      <div>
                        <h3 className="font-serif text-lg text-ivory">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="mt-1.5 text-sm leading-relaxed text-ivory/60">
                            {item.description}
                          </p>
                        )}
                      </div>
                      {item.price && (
                        <span className="shrink-0 whitespace-nowrap font-serif text-lg italic text-gold">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface/30 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="eyebrow text-gold">Limited Time</p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-wide text-ivory sm:text-4xl">
              {prixFixe.title}
            </h2>
            <p className="mt-2 font-serif text-2xl italic text-gold">
              {prixFixe.price}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ivory/55">
              {prixFixe.note}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {prixFixe.courses.map((course) => (
              <Reveal key={course.name}>
                <h3 className="eyebrow text-gold">{course.name}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ivory/70">
                  {course.choices.map((choice) => (
                    <li key={choice}>{choice}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center sm:px-8">
        <a
          href={business.openTableUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-gold bg-gold px-8 py-3.5 eyebrow tracking-widest2 text-ground transition-colors hover:bg-transparent hover:text-gold"
        >
          Reserve a Table
        </a>
      </section>
    </>
  );
}

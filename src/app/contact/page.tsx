import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zama in San Diego's Gaslamp Quarter — address, phone, hours, and reservations. 467 Fifth Ave, San Diego, CA 92101.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Get in Touch</p>
          <h1 className="mt-3 font-display text-5xl font-light tracking-wide text-ivory sm:text-6xl">
            Contact
          </h1>
          <p className="mt-6 text-balance text-base leading-relaxed text-ivory/70">
            For an immediate reservation, book directly on OpenTable or call
            the restaurant. For questions, private dining, or events, send us
            a note below.
          </p>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-10">
            <div>
              <h2 className="eyebrow text-gold">Reserve</h2>
              <a
                href={business.openTableUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center rounded-full border border-gold bg-gold px-6 py-3 eyebrow tracking-widest2 text-ground transition-colors hover:bg-transparent hover:text-gold"
              >
                Reserve on OpenTable
              </a>
            </div>

            <div>
              <h2 className="eyebrow text-gold">Address</h2>
              <address className="mt-3 not-italic text-ivory/75">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region}{" "}
                  {business.address.postalCode}
                </a>
              </address>
              <p className="mt-1 text-sm text-ivory/45">
                {business.address.neighborhood}
              </p>
            </div>

            <div>
              <h2 className="eyebrow text-gold">Phone</h2>
              <a
                href={`tel:${business.phone}`}
                className="mt-3 block text-ivory/75 hover:text-gold"
              >
                {business.phoneDisplay}
              </a>
            </div>

            <div>
              <h2 className="eyebrow text-gold">Hours</h2>
              <dl className="mt-3 space-y-2 text-sm text-ivory/75">
                {business.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6">
                    <dt>{h.days}</dt>
                    <dd className="font-serif italic text-ivory/60">
                      {h.hours}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-ivory/40">{business.hoursNote}</p>
            </div>

            <div>
              <h2 className="eyebrow text-gold">Follow</h2>
              <div className="mt-3 flex gap-5">
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/75 hover:text-gold"
                >
                  Instagram
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/75 hover:text-gold"
                >
                  Facebook
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-sm border border-gold/15 bg-surface/30 p-6 sm:p-10">
            <h2 className="font-serif text-2xl text-ivory">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-ivory/55">
              We typically reply within one business day.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 overflow-hidden rounded-sm border border-gold/15">
          <iframe
            title={`Map to ${business.fullName}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              business.address.full
            )}&output=embed`}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

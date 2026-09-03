import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-[#0d1712]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/brand/logo.png"
              alt="Zama — Latin American - Asian Fusion"
              width={160}
              height={90}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Latin American — Asian fusion, in the heart of the Gaslamp
              jungle.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-ivory/70 hover:text-gold"
              >
                Instagram
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-ivory/70 hover:text-gold"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h2 className="eyebrow text-gold">Hours</h2>
            <ul className="mt-4 space-y-2 text-sm text-ivory/75">
              {business.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-6">
                  <span>{h.days}</span>
                  <span className="font-serif italic text-ivory/60">
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-gold">Find Us</h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-ivory/75">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold"
              >
                {business.address.street}
                <br />
                {business.address.city}, {business.address.region}{" "}
                {business.address.postalCode}
              </a>
              <a
                href={`tel:${business.phone}`}
                className="block hover:text-gold"
              >
                {business.phoneDisplay}
              </a>
            </address>
          </div>

          <div>
            <h2 className="eyebrow text-gold">Reserve</h2>
            <p className="mt-4 text-sm text-ivory/75">
              Booking is handled through OpenTable.
            </p>
            <a
              href={business.openTableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-full border border-gold px-5 py-2 eyebrow tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ground"
            >
              Reserve on OpenTable
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gold/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Zama Restaurant &amp; Bar. Operated
            by The San Diego Dining Group.
          </p>
          <nav aria-label="Footer" className="flex gap-5">
            <Link href="/menu" className="hover:text-gold">
              Menu
            </Link>
            <Link href="/gallery" className="hover:text-gold">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-gold">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

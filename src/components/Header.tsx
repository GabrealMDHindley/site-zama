"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ground/95 backdrop-blur-sm border-b border-gold/20"
          : "bg-gradient-to-b from-ground/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Zama — home"
        >
          <Image
            src="/brand/logo.png"
            alt="Zama — Latin American - Asian Fusion"
            width={140}
            height={79}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`eyebrow tracking-widest2 transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-ivory/85"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.openTableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full border border-gold bg-gold px-5 py-2 eyebrow tracking-widest2 text-ground transition-all hover:bg-transparent hover:text-gold sm:inline-flex"
          >
            Reserve
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-ivory transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ivory transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 border-t border-gold/15 bg-ground px-5 py-4"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow py-3 text-ivory/90 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={business.openTableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-gold bg-gold px-5 py-3 eyebrow tracking-widest2 text-ground"
            >
              Reserve a Table
            </a>
            <a
              href={`tel:${business.phone}`}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-gold/50 px-5 py-3 eyebrow tracking-widest2 text-ivory"
            >
              Call {business.phoneDisplay}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

import { business } from "./business";
import { reviews } from "./reviews";
import { SITE_URL } from "./site";

// schema.org Restaurant JSON-LD — every value here is a real captured fact
// (see business.ts / reviews.md); aggregateRating uses Google's published
// 4.6/5 across ~1,926 reviews, the most complete real figure captured.
// image/logo must point at THIS site's own hosted assets (SITE_URL), never
// business.url (the old zamasandiego.com domain) — those files don't exist
// there.
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.fullName,
    alternateName: business.name,
    servesCuisine: ["Latin American", "Peruvian", "Mexican", "Japanese", "Sushi"],
    description:
      "Upscale Latin American — Asian fusion restaurant and sushi bar in San Diego's Gaslamp Quarter, set inside an Amazonian-jungle-themed dining room.",
    image: `${SITE_URL}/subjects/467-fifth-ave/06.jpg`,
    logo: `${SITE_URL}/brand/logo.png`,
    url: SITE_URL,
    telephone: business.phone,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    acceptsReservations: "True",
    reservationUrl: business.openTableUrl,
    menu: `${SITE_URL}/menu`,
    sameAs: [business.social.instagram, business.social.facebook, business.url],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.aggregateRating.ratingValue,
      reviewCount: business.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews
      .filter((r) => r.rating)
      .map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: 5,
        },
        reviewBody: r.quote,
        publisher: { "@type": "Organization", name: r.platform },
      })),
  };
}

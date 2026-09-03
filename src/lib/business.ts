// Real business facts for Zama — sourced from clients/zama/intake.md and
// assets/subjects/467-fifth-ave/details.md. Keep this the single source of
// truth so every page/component/JSON-LD stays consistent.

export const business = {
  name: "Zama",
  fullName: "Zama Restaurant & Bar",
  tagline: "Latin American — Asian Fusion",
  industryLine:
    "Latin American (Peruvian/Mexican) cuisine with a Japanese-inspired sushi bar",
  heroLine: "Latin American — Asian fusion, in the heart of the Gaslamp jungle.",
  address: {
    street: "467 Fifth Ave",
    city: "San Diego",
    region: "CA",
    postalCode: "92101",
    country: "US",
    full: "467 Fifth Ave, San Diego, CA 92101",
    neighborhood: "Gaslamp Quarter",
  },
  geo: {
    latitude: 32.7106,
    longitude: -117.16,
  },
  phone: "+16199155789",
  phoneDisplay: "(619) 915-5789",
  email: "info@zamasandiego.com",
  url: "https://www.zamasandiego.com/",
  openTableUrl:
    "https://www.opentable.com/r/zama-restaurant-and-bar-san-diego",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Zama+Restaurant+467+Fifth+Ave+San+Diego+CA+92101",
  social: {
    instagram: "https://www.instagram.com/zamasandiego/",
    facebook: "https://www.facebook.com/ZamaSandiego/",
  },
  hours: [
    { days: "Monday – Thursday", hours: "5:00 PM – 11:00 PM" },
    { days: "Friday – Saturday", hours: "5:00 PM – 1:30 AM" },
    { days: "Sunday", hours: "5:00 PM – 11:00 PM" },
  ],
  // schema.org openingHoursSpecification day tokens
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"], opens: "17:00", closes: "23:00" },
    { days: ["Friday", "Saturday"], opens: "17:00", closes: "01:30" },
  ],
  hoursNote:
    "Hours vary slightly by source — confirm current hours before your visit by calling ahead.",
  ownership:
    "Operated by The San Diego Dining Group (also behind Farmer’s Table, Breakfast & Bubbles, Osteria Panevino), with Rusticucina & Basilico partners.",
  design:
    "Designed by Tucker Sadler Architects (Greg Mueller) — also behind AC Hotel Gaslamp, Portside Pier, and The Rady Shell — forest greens, custom wood built-ins, and a hanging jungle canopy built for an “Amazonian jungle” atmosphere.",
  chefs: [
    {
      name: "Chef Takuya Kudo",
      role: "Kitchen Lead",
      bio: "Formerly of Nobu and Lumi, Chef Kudo leads Zama’s kitchen, threading Japanese precision through a Latin American menu.",
    },
    {
      name: "Luis Alberto Vergara",
      role: "Chef de Cuisine, Sushi Bar",
      bio: "Oversees the sushi bar’s rolls and crudo program, pairing Peruvian citrus and Japanese technique.",
    },
    {
      name: "Jovani Palacious",
      role: "Executive Chef",
      bio: "Credited across Zama’s culinary leadership, shaping the kitchen’s Latin American — Asian fusion identity.",
    },
  ],
  aggregateRating: {
    ratingValue: 4.6,
    reviewCount: 1926,
    source: "Google",
  },
  otherRatings: [
    { platform: "Yelp", reviews: "915 reviews, 1,792 photos" },
    { platform: "TripAdvisor", rating: "4.7 / 5", detail: "#235 of 3,209 San Diego restaurants" },
    { platform: "OpenTable", rating: "4.0–4.1 / 5", detail: "~459–547 reviews" },
  ],
} as const;

export const subjectSlug = "467-fifth-ave";

// Real photo inventory — from
// clients/zama/assets/subjects/467-fifth-ave/details.md. Alt text is written
// from the real, verified descriptions in that file. Files live in
// public/subjects/467-fifth-ave/.

export type Photo = {
  file: string;
  alt: string;
  width: number;
  height: number;
  isExterior?: boolean;
};

const base = "/subjects/467-fifth-ave";

export const photos: Photo[] = [
  {
    file: `${base}/01.jpg`,
    alt: "Zama bar and lounge at night with the jungle canopy overhead and glass roll-up doors open to Fifth Avenue — Zama Restaurant & Bar, Gaslamp Quarter",
    width: 1920,
    height: 1440,
  },
  {
    file: `${base}/02.jpg`,
    alt: "Zama's storefront at night — cream facade, dark teal-green trim, black awning with gold \"Latin American\" lettering, and patio seating on Fifth Avenue",
    width: 1920,
    height: 1440,
    isExterior: true,
  },
  {
    file: `${base}/03.jpg`,
    alt: "Zama's Fifth Avenue storefront and patio, with the green-velvet dining room visible through the windows",
    width: 1500,
    height: 1125,
    isExterior: true,
  },
  {
    file: `${base}/04.jpg`,
    alt: "Zama's entrance with the backlit bamboo \"ZAMA\" sign, green neon \"Bienvenida a la selva,\" and hanging jungle greenery",
    width: 2048,
    height: 1366,
  },
  {
    file: `${base}/05.png`,
    alt: "Close-up of Zama's green neon \"Bienvenida a la selva\" sign beside the bamboo-clad ZAMA entrance panel",
    width: 1340,
    height: 1422,
  },
  {
    file: `${base}/06.jpg`,
    alt: "Zama's dining room — emerald channel-tufted velvet booths, black-and-white chevron marble floor, hanging jungle canopy with gold orbs, and a painted butterfly mural beneath the gold ZAMA sign",
    width: 2048,
    height: 1639,
  },
  {
    file: `${base}/07.jpg`,
    alt: "Bright daytime view of Zama's dining room with exposed brick, framed botanical art, and the chevron floor",
    width: 1500,
    height: 1125,
  },
  {
    file: `${base}/08.jpg`,
    alt: "Zama's bar and lounge at night beneath the hanging jungle canopy, with the illuminated liquor wall behind the bar",
    width: 720,
    height: 1080,
  },
  {
    file: `${base}/09.jpg`,
    alt: "Zama's back-bar wall of tiered, warm-lit wood shelving lined with liquor bottles, exposed brick, and leaf-shaped pendant lamps",
    width: 2048,
    height: 1366,
  },
  {
    file: `${base}/10.jpg`,
    alt: "Vertical view of Zama's liquor wall, brick column, and arched window",
    width: 1366,
    height: 2048,
  },
  {
    file: `${base}/11.jpg`,
    alt: "Zama's sushi bar — two chefs behind the glass fish case, with black-and-white patterned tile and the Yoshimasa display cases",
    width: 2048,
    height: 1366,
  },
  {
    file: `${base}/12.jpg`,
    alt: "A private dining table set with white linens and yellow napkins against a green tufted velvet banquette and brick wall at Zama",
    width: 1500,
    height: 2000,
  },
  {
    file: `${base}/13.jpg`,
    alt: "Candlelit lounge seating at Zama beneath the brick wall and hanging greenery",
    width: 1920,
    height: 1280,
  },
  {
    file: `${base}/14-candidate.jpg`,
    alt: "Holiday-decorated dining room at Zama with disco balls, jungle canopy, bar shelving, and the chevron floor",
    width: 1920,
    height: 1440,
  },
  {
    file: `${base}/15-candidate.jpg`,
    alt: "Zama's bamboo entrance vestibule with the backlit ZAMA wordmark and gazelle logo in neon, beside the glass wine display wall",
    width: 900,
    height: 600,
  },
];

export const heroPhoto = photos.find((p) => p.file.endsWith("/06.jpg"))!;

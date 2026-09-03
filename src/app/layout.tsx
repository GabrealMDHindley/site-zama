import type { Metadata, Viewport } from "next";
import { jost, playfair, inter } from "@/lib/fonts";
import { business } from "@/lib/business";
import { restaurantJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} — Latin American · Asian Fusion, Gaslamp Quarter San Diego`,
    template: `%s — ${business.name}`,
  },
  description:
    "Zama is an upscale Latin American — Asian fusion restaurant and sushi bar in San Diego's Gaslamp Quarter, set inside an Amazonian-jungle-themed dining room. Reserve on OpenTable.",
  keywords: [
    "Zama San Diego",
    "Gaslamp Quarter restaurant",
    "Peruvian Japanese fusion San Diego",
    "sushi bar Gaslamp",
    "Latin American restaurant San Diego",
  ],
  openGraph: {
    title: `${business.name} — Latin American · Asian Fusion`,
    description:
      "Upscale Latin American — Asian fusion dining in San Diego's Gaslamp Quarter. Reserve on OpenTable.",
    url: SITE_URL,
    siteName: business.fullName,
    images: [
      {
        url: "/subjects/467-fifth-ave/06.jpg",
        width: 2048,
        height: 1639,
        alt: "Zama's jungle-themed dining room in the Gaslamp Quarter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — Latin American · Asian Fusion`,
    description:
      "Upscale Latin American — Asian fusion dining in San Diego's Gaslamp Quarter.",
    images: ["/subjects/467-fifth-ave/06.jpg"],
  },
  icons: {
    icon: "/brand/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#12201A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd()),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

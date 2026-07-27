import type { Metadata } from "next";
import { playfair, dmSans, cormorant } from "@/lib/fonts";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/common/SplashScreen";
import FloatingActions from "@/components/common/FloatingActions";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://racontractor.in"),
  title: {
    default: "RA CONTRACTOR — Luxury Civil Construction, Turnkey & Interior Execution",
    template: "%s | RA CONTRACTOR",
  },
  description:
    "Creating timeless structures and luxury interiors for modern living. RA CONTRACTOR is a top-tier construction and interior execution contractor specializing in luxury residential, commercial, and turnkey projects.",
  keywords: [
    "RA Contractor",
    "civil contractor",
    "turnkey contractor",
    "building construction",
    "interior execution",
    "luxury interior",
    "residential construction",
    "commercial contractor",
    "architectural execution",
    "modular kitchen",
    "living room design",
    "turnkey fit-out",
  ],
  authors: [{ name: "RA CONTRACTOR" }],
  creator: "RA CONTRACTOR",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://racontractor.in",
    siteName: "RA CONTRACTOR",
    title: "RA CONTRACTOR — Luxury Civil Construction, Turnkey & Interior Execution",
    description:
      "Creating timeless structures and interiors for modern living. Premium civil construction, turnkey contractor services, and bespoke interior execution.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RA CONTRACTOR — Turnkey Construction & Interior Execution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RA CONTRACTOR — Turnkey Construction & Interior Execution",
    description:
      "Creating timeless structures and interiors for modern living. Premium civil construction and interior execution.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "RA CONTRACTOR",
  image: "https://racontractor.in/images/og-image.jpg",
  "@id": "https://racontractor.in/#organization",
  url: "https://racontractor.in",
  telephone: "+91 83748 97487",
  email: "racontractor35@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Allapur Rd, near JK Point, Swaraj Nagar, Borabanda",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500114",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4529,
    longitude: 78.4062,
  },
  hasMap: "https://maps.app.goo.gl/Fr5AXyx2DzKuqXZN8",
  areaServed: [
    {
      "@type": "City",
      name: "Hyderabad",
    },
    {
      "@type": "AdministrativeArea",
      name: "Telangana",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://maps.app.goo.gl/Fr5AXyx2DzKuqXZN8",
    "https://instagram.com/racontractor",
    "https://facebook.com/racontractor",
    "https://linkedin.com/company/racontractor",
    "https://pinterest.com/racontractor",
    "https://youtube.com/@racontractor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <SplashScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

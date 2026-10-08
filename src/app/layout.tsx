import { services } from "@/lib/services";
import type { Metadata } from "next";
import { playfair, dmSans, cormorant } from "@/lib/fonts";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/common/SplashScreen";
import FloatingActions from "@/components/common/FloatingActions";
import "./globals.css";

const TITLE = "Turnkey Contractor in Hyderabad | Civil & Interior Contractors – RA Contractor";
const DESC =
  "RA Contractor is a Hyderabad-based turnkey civil and interior contractor offering residential construction, luxury interiors, commercial fit-outs and complete project execution.";

export const metadata: Metadata = {
  metadataBase: new URL("https://racontractor.in"),
  title: {
    default: TITLE,
    template: "%s | RA Contractor",
  },
  description: DESC,
  alternates: { canonical: "/" },
  authors: [{ name: "RA Contractor" }],
  creator: "RA Contractor",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://racontractor.in",
    siteName: "RA Contractor",
    title: TITLE,
    description: DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
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

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://racontractor.in/#website",
  url: "https://racontractor.in",
  name: "RA Contractor",
  publisher: { "@id": "https://racontractor.in/#organization" },
  inLanguage: "en-IN",
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "RA CONTRACTOR",
  alternateName: "RA Contractor",
  image: "https://racontractor.in/opengraph-image",
  "@id": "https://racontractor.in/#organization",
  url: "https://racontractor.in",
  telephone: "+91 83748 97487",
  email: "racontractor35@gmail.com",
  priceRange: "₹₹₹",
  description:
    "Hyderabad-based turnkey civil and interior contractor: residential construction, luxury interiors, commercial fit-outs and complete project execution.",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Interior Services",
    itemListElement: services.map((sv) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: sv.h1, url: `https://racontractor.in/services/${sv.slug}` },
    })),
  },
  hasMap: "https://maps.app.goo.gl/Fr5AXyx2DzKuqXZN8",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Financial District, Hyderabad" },
    { "@type": "AdministrativeArea", name: "HITEC City, Hyderabad" },
    { "@type": "AdministrativeArea", name: "Gachibowli, Hyderabad" },
    { "@type": "AdministrativeArea", name: "Madhapur, Hyderabad" },
    { "@type": "AdministrativeArea", name: "Kondapur, Hyderabad" },
    { "@type": "AdministrativeArea", name: "Kokapet, Hyderabad" },
    { "@type": "AdministrativeArea", name: "Jubilee Hills, Hyderabad" },
    { "@type": "AdministrativeArea", name: "Banjara Hills, Hyderabad" },
    { "@type": "AdministrativeArea", name: "Nanakramguda, Hyderabad" },
    { "@type": "AdministrativeArea", name: "Raidurg, Hyderabad" },
    { "@type": "City", name: "Hyderabad" },
  ],
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
      lang="en-IN"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
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

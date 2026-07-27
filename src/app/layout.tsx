import type { Metadata } from "next";
import { playfair, dmSans, cormorant } from "@/lib/fonts";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/common/SplashScreen";
import FloatingActions from "@/components/common/FloatingActions";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://racontractor.com"),
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
    url: "https://racontractor.com",
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

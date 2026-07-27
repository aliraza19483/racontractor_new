import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";

// Primary display font — luxury serif for headlines
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Body font — clean, modern sans-serif
export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

// Accent font — editorial serif for subheadings and quotes
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

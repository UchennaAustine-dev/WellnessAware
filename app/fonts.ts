import { DM_Sans, Smooch_Sans, Inter } from "next/font/google";

// Load Inter as the primary font
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Load Smooch Sans for headings
export const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Load DM Sans as an alternative body font
export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

import { DM_Sans, Smooch_Sans } from "next/font/google";

// Load Smooch Sans for headings
export const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Load DM Sans for body text
export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

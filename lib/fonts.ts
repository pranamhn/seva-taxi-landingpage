import { Geist_Mono, Plus_Jakarta_Sans, Bricolage_Grotesque, Caveat } from "next/font/google";

// Dipakai kedua root layout: app/(id)/layout.tsx dan app/(en)/layout.tsx.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-jakarta",
});

export const brico = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-brico",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-hand",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const fontClassNames = `${jakarta.variable} ${brico.variable} ${caveat.variable} ${geistMono.variable}`;

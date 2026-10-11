import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";

// Dipakai kedua root layout: app/(id)/layout.tsx dan app/(en)/layout.tsx.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-jakarta",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const fontClassNames = `${jakarta.variable} ${geistMono.variable}`;

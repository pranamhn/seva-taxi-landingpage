import { Geist_Mono, Inter } from "next/font/google";

// Dipakai kedua root layout: app/(id)/layout.tsx dan app/(en)/layout.tsx.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const fontClassNames = `${inter.variable} ${geistMono.variable}`;

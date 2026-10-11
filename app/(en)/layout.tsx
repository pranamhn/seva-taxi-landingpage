import type { Metadata } from "next";
import "../globals.css";
import { LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
import { fontClassNames } from "@/lib/fonts";
import SiteJsonLd from "@/components/seo/SiteJsonLd";
import { OG_IMAGE } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

// Root layout versi Inggris (/en/...). Pasangannya: app/(id)/layout.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEVA Taxi, Ride-hailing & Delivery",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Book motorbike rides, cars, and same-day courier delivery across Greater Jakarta with SEVA: verified drivers and an upfront fare with no surge pricing.",
  keywords: [
    "SEVA Taxi",
    "ride hailing Jakarta",
    "online taxi Jakarta",
    "motorbike taxi Jakarta",
    "airport taxi Jakarta",
    "courier Jakarta",
  ],
  authors: [{ name: LEGAL_NAME }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "SEVA Taxi, Ride-hailing & Delivery",
    description: "Rides and deliveries across Greater Jakarta with verified drivers and upfront fares.",
    url: "/en",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEVA Taxi, Ride-hailing & Delivery",
    description: "Rides and deliveries across Greater Jakarta with upfront fares.",
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontClassNames}>
      <body className="antialiased">
        <SiteJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

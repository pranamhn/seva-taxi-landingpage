import type { Metadata } from "next";
import "../globals.css";
import { LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
import { fontClassNames } from "@/lib/fonts";
import SiteJsonLd from "@/components/seo/SiteJsonLd";
import { OG_IMAGE } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEVA Taxi, Ride-hailing & Delivery",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Pesan ojek & taksi online SEVA di Jabodetabek: driver terverifikasi, tarif pasti di awal tanpa lonjakan, plus kirim paket instan dengan SEVA Send.",
  keywords: [
    "SEVA Taxi",
    "ride hailing Indonesia",
    "taksi online",
    "pesan taksi",
    "ojek online",
    "driver terverifikasi",
    "transportasi online",
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
    description:
      "Pergi ke mana saja, kapan saja. Driver terverifikasi, harga transparan, perjalanan aman.",
    url: "/",
    type: "website",
    locale: "id_ID",
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEVA Taxi, Ride-hailing & Delivery",
    description: "Pergi ke mana saja, kapan saja. Pesan ride sekarang.",
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={fontClassNames}>
      <body className="antialiased">
        <SiteJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

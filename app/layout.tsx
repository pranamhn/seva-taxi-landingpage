import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import {
  CONTACT_PHONE_E164,
  INSTAGRAM_URL,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEVA Taxi — Ride-Hailing & Taksi Online Jabodetabek",
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
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "SEVA Taxi — Ride-Hailing & Taksi Online Jabodetabek",
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
    title: "SEVA Taxi — Ride-Hailing & Taksi Online Jabodetabek",
    description: "Pergi ke mana saja, kapan saja. Pesan ride sekarang.",
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

const JABODETABEK = [
  "Jakarta",
  "Kota Bogor",
  "Kabupaten Bogor",
  "Kota Depok",
  "Kota Tangerang",
  "Kota Tangerang Selatan",
  "Kota Bekasi",
  "Kabupaten Bekasi",
];

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icons/icon-512.png`,
      email: SUPPORT_EMAIL,
      sameAs: [INSTAGRAM_URL],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${CONTACT_PHONE_E164}`,
        email: SUPPORT_EMAIL,
        areaServed: "ID",
        availableLanguage: ["id"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "id-ID",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "TaxiService",
      "@id": `${SITE_URL}/#taxi-service`,
      name: "SEVA Ride & SEVA Car",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: JABODETABEK.map((name) => ({ "@type": "City", name })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

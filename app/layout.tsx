import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

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
  title: "SEVA Taxi — Ride-Hailing Terpercaya di Indonesia",
  description:
    "Pesan taksi online dengan mudah. Driver terverifikasi, harga transparan, perjalanan aman bersama SEVA Taxi. Tersedia di Jakarta, Surabaya, Bandung, dan kota-kota lainnya.",
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
  openGraph: {
    title: "SEVA Taxi — Ride-Hailing Terpercaya di Indonesia",
    description:
      "Pergi ke mana saja, kapan saja. Driver terverifikasi, harga transparan, perjalanan aman.",
    type: "website",
    locale: "id_ID",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SEVA Taxi — Ride-Hailing Terpercaya di Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEVA Taxi — Ride-Hailing Terpercaya di Indonesia",
    description: "Pergi ke mana saja, kapan saja. Pesan ride sekarang.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icons/icon-512.png`,
  email: "support@seva.id",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

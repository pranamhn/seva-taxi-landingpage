import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const OG_IMAGE = {
  url: "/og-seva-taxi.jpg",
  width: 1200,
  height: 630,
  alt: "SEVA Taxi — Ride-Hailing & Taksi Online Jabodetabek",
};

// Metadata per halaman: judul, deskripsi, canonical, dan kartu pratinjau (WhatsApp/Facebook/X) yang sesuai halaman.
// Metadata Next.js digabung secara dangkal, jadi openGraph/twitter harus lengkap di sini agar tidak mewarisi milik beranda.
export function pageMetadata({
  title,
  description,
  path,
  article,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  /** Isi untuk halaman artikel agar Open Graph bertipe "article". */
  article?: { publishedTime: string; section?: string };
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      locale: "id_ID",
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      ...(article
        ? { type: "article", publishedTime: article.publishedTime, section: article.section }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

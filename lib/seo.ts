import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { OG_LOCALE, localePath, type Locale } from "@/lib/i18n";

export const OG_IMAGE = {
  url: "/og-seva-taxi.jpg",
  width: 1200,
  height: 630,
  alt: "SEVA Taxi, Ride-hailing & Delivery",
};

/** hreflang untuk pasangan halaman id/en. `path` = path versi Indonesia. */
export function languageAlternates(path: string) {
  return { "id-ID": path, en: localePath("en", path), "x-default": path };
}

// Metadata per halaman: judul, deskripsi, canonical, hreflang, dan kartu pratinjau (WhatsApp/Facebook/X) yang sesuai halaman.
// Metadata Next.js digabung secara dangkal, jadi openGraph/twitter harus lengkap di sini agar tidak mewarisi milik beranda.
export function pageMetadata({
  title,
  description,
  path,
  article,
  keywords,
  locale = "id",
}: {
  title: string;
  description: string;
  path: string;
  /** Isi untuk halaman artikel agar Open Graph bertipe "article". */
  article?: { publishedTime: string; section?: string };
  keywords?: string[];
  /** Bahasa halaman; `path` tetap path versi Indonesia. */
  locale?: Locale;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = localePath(locale, path);
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title: fullTitle,
      description,
      url,
      locale: OG_LOCALE[locale],
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

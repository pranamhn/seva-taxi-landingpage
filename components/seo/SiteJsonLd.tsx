import {
  CONTACT_PHONE_E164,
  INSTAGRAM_URL,
  LEGAL_NAME,
  OFFICE_ADDRESS,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";

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

// Satu graph entitas lengkap untuk Google Search, Sitelinks, dan Knowledge Graph
export default function SiteJsonLd() {
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icons/icon-512.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/og-seva-taxi.jpg`,
        email: SUPPORT_EMAIL,
        sameAs: [INSTAGRAM_URL],
        address: {
          "@type": "PostalAddress",
          streetAddress: OFFICE_ADDRESS.street,
          addressLocality: OFFICE_ADDRESS.city,
          addressRegion: OFFICE_ADDRESS.region,
          postalCode: OFFICE_ADDRESS.postalCode,
          addressCountry: OFFICE_ADDRESS.country,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: `+${CONTACT_PHONE_E164}`,
          email: SUPPORT_EMAIL,
          areaServed: "ID",
          availableLanguage: ["id", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: ["SEVA", "SEVA Taxi", "SEVA Ride-Hailing", "SEVA Car"],
        inLanguage: ["id-ID", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
        hasPart: [
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/services`,
            url: `${SITE_URL}/services`,
            name: "Pilihan Armada & Tarif Layanan",
            description: "Daftar armada SEVA RIDE, SEVA CAR, SEVA SEND, dan SEVA FOOD dengan tarif pasti transparan.",
          },
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/how-it-works`,
            url: `${SITE_URL}/how-it-works`,
            name: "Cara Pesan & Alur Perjalanan",
            description: "Panduan pesan ojek online, taksi harian, dan kirim paket dalam 3 langkah mudah.",
          },
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/safety`,
            url: `${SITE_URL}/safety`,
            name: "Standar Keselamatan & Fitur Darurat",
            description: "Fitur keamanan tombol SOS, live tracking, driver terverifikasi, dan bantuan 24 jam.",
          },
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/cities`,
            url: `${SITE_URL}/cities`,
            name: "Cakupan Wilayah Jabodetabek & Hub Bandara",
            description: "Area operasional SEVA di Jakarta, Bogor, Depok, Tangerang, Bekasi, dan hub bandara.",
          },
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/about`,
            url: `${SITE_URL}/about`,
            name: "Tentang SEVA & Legalitas TDPSE Komdigi",
            description: "Profil perusahaan CV Twin Digital Investama, visi misi, dan legalitas resmi TDPSE.",
          },
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/faq`,
            url: `${SITE_URL}/faq`,
            name: "Pusat Bantuan & Pertanyaan Umum (FAQ)",
            description: "Jawaban pertanyaan umum seputar cara pesan, pembayaran, dan argo tanpa lonjakan.",
          },
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/partner/fleet`,
            url: `${SITE_URL}/partner/fleet`,
            name: "Kemitraan Pemilik Armada (Fleet Operator)",
            description: "Integrasi manajemen armada taksi dan rental dengan sistem IoT dan rekonsiliasi otomatis.",
          },
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/contact`,
            url: `${SITE_URL}/contact`,
            name: "Hubungi Kami & Layanan Pelanggan",
            description: "Kontak resmi kantor pusat Jakarta Selatan, WhatsApp bantuan, dan email dukungan.",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#site-navigation`,
        name: "Navigasi Utama SEVA Taxi",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "Pilihan Armada & Tarif",
            url: `${SITE_URL}/services`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "Cara Pesan",
            url: `${SITE_URL}/how-it-works`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 3,
            name: "Standar Keselamatan",
            url: `${SITE_URL}/safety`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 4,
            name: "Cakupan Wilayah",
            url: `${SITE_URL}/cities`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 5,
            name: "Tentang Kami",
            url: `${SITE_URL}/about`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 6,
            name: "Pusat Bantuan",
            url: `${SITE_URL}/faq`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 7,
            name: "Mitra Armada",
            url: `${SITE_URL}/partner/fleet`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 8,
            name: "Hubungi Kami",
            url: `${SITE_URL}/contact`,
          },
        ],
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />;
}

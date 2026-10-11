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

// Satu graph entitas untuk kedua bahasa (dipasang di root layout id & en).
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
        logo: `${SITE_URL}/icons/icon-512.png`,
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
        inLanguage: ["id-ID", "en"],
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />;
}

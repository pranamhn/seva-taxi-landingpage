// Base URL used for metadataBase, sitemap, robots, and JSON-LD.
// Override with NEXT_PUBLIC_SITE_URL for staging/preview deployments.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sevataxi.com").replace(/\/$/, "");

export const SITE_NAME = "SEVA Taxi";
export const LEGAL_NAME = "CV Twin Digital Investama";

// Public, indexable routes.
export const PUBLIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ride", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/car", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/send", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/food", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
  { path: "/safety", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/partner/driver", priority: 0.85, changeFrequency: "monthly" },
  { path: "/partner/fleet", priority: 0.8, changeFrequency: "monthly" },
  { path: "/partner/b2b", priority: 0.85, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/promo", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/newsroom", priority: 0.6, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
] as const;

export const APP_STORE_URL = "https://apps.apple.com/id/app/seva-driver/id6761700121";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.rentfms.driver&pcampaignid=web_share";

// Kontak resmi
export const SUPPORT_EMAIL = "support@seva.taxi";
export const CONTACT_PHONE_E164 = "628137797167";
export const CONTACT_PHONE_DISPLAY = "+62 813-7797-167";
export const CONTACT_WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_E164}`;
export const INSTAGRAM_HANDLE = "@seva.taxi";
export const INSTAGRAM_URL = "https://www.instagram.com/seva.taxi";
export const LINKEDIN_URL = "https://www.linkedin.com/company/sevataxi";

// Alamat kantor (dipakai halaman Tentang Kami, Kontak, footer, dan JSON-LD Organization)
export const OFFICE_ADDRESS = {
  street: "Jl. Raya Tanjung Barat No. 81 C, RT.02/RW.04",
  district: "Kel. Tanjung Barat, Kec. Jagakarsa",
  city: "Kota Jakarta Selatan",
  region: "DKI Jakarta",
  postalCode: "12530",
  country: "ID",
} as const;
export const OFFICE_ADDRESS_LINES = [
  OFFICE_ADDRESS.street,
  OFFICE_ADDRESS.district,
  `${OFFICE_ADDRESS.city}, ${OFFICE_ADDRESS.region} ${OFFICE_ADDRESS.postalCode}`,
];
export const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Jl. Raya Tanjung Barat No. 81 C, Tanjung Barat, Jagakarsa, Jakarta Selatan 12530"
)}`;

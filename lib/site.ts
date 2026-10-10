// Base URL used for metadataBase, sitemap, robots, and JSON-LD.
// Override with NEXT_PUBLIC_SITE_URL for staging/preview deployments.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://seva.taxi").replace(/\/$/, "");

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
  { path: "/driver", priority: 0.85, changeFrequency: "monthly" },
  { path: "/fleet-operator", priority: 0.8, changeFrequency: "monthly" },
  { path: "/b2b-partners", priority: 0.85, changeFrequency: "monthly" },
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

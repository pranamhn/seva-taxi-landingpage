// Base URL used for metadataBase, sitemap, robots, and JSON-LD.
// Override with NEXT_PUBLIC_SITE_URL for staging/preview deployments.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://seva.taxi").replace(/\/$/, "");

export const SITE_NAME = "SEVA Taxi";
export const LEGAL_NAME = "PT Seva Inovasi Digital";

// Public, indexable routes. /driver and /fleet-partner only redirect to /fleet-operator.
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
  { path: "/fleet-operator", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
] as const;

export const APP_STORE_URL = "https://apps.apple.com/id/app/seva-driver/id6761700121";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.rentfms.driver&pcampaignid=web_share";

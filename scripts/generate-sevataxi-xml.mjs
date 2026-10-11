import fs from "fs";
import path from "path";

const SITE_URL = "https://sevataxi.com";

// 1. Core routes with priorities and change frequencies
const CORE_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "daily", image: { loc: `${SITE_URL}/og-seva-taxi.jpg`, title: "SEVA Taxi - Ride-Hailing & Taksi Online Jabodetabek" } },
  { path: "/services", priority: 0.9, changefreq: "weekly" },
  { path: "/services/ride", priority: 0.85, changefreq: "weekly", image: { loc: `${SITE_URL}/assets/services/seva-ride.webp`, title: "SEVA RIDE - Ojek Motor Online Jabodetabek" } },
  { path: "/services/car", priority: 0.85, changefreq: "weekly", image: { loc: `${SITE_URL}/assets/services/seva-car.webp`, title: "SEVA CAR - Layanan Taksi & Mobil Harian" } },
  { path: "/services/send", priority: 0.85, changefreq: "weekly", image: { loc: `${SITE_URL}/assets/services/seva-send.webp`, title: "SEVA SEND - Kurir Paket & Dokumen Instan" } },
  { path: "/services/food", priority: 0.8, changefreq: "weekly", image: { loc: `${SITE_URL}/assets/services/seva-food.webp`, title: "SEVA FOOD - Pesan Antar Makanan & Kuliner" } },
  { path: "/how-it-works", priority: 0.75, changefreq: "monthly" },
  { path: "/safety", priority: 0.75, changefreq: "monthly" },
  { path: "/cities", priority: 0.75, changefreq: "weekly" },
  { path: "/partner/driver", priority: 0.8, changefreq: "weekly" },
  { path: "/partner/fleet", priority: 0.8, changefreq: "weekly" },
  { path: "/partner/b2b", priority: 0.8, changefreq: "weekly" },
  { path: "/faq", priority: 0.7, changefreq: "weekly" },
  { path: "/promo", priority: 0.7, changefreq: "daily" },
  { path: "/about", priority: 0.7, changefreq: "monthly", image: { loc: `${SITE_URL}/assets/logo/logo-seva.png`, title: "Tentang SEVA Taxi & Legalitas TDPSE Komdigi" } },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
  { path: "/newsroom", priority: 0.7, changefreq: "daily" },
  { path: "/blog", priority: 0.7, changefreq: "daily" },
  { path: "/privacy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms", priority: 0.3, changefreq: "yearly" },
];

// 2. City Directory
const CITIES = [
  "jakarta-pusat",
  "jakarta-utara",
  "jakarta-barat",
  "jakarta-selatan",
  "jakarta-timur",
  "kota-tangerang",
  "kota-tangerang-selatan",
  "kota-bogor",
  "kabupaten-bogor",
  "kota-depok",
  "kota-bekasi",
  "kabupaten-bekasi",
];

// 3. Extract Blog Articles from lib/articles.ts
const articlesRaw = fs.readFileSync("lib/articles.ts", "utf8");
const articleMatches = [...articlesRaw.matchAll(/slug:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?published:\s*["']([^"']+)["']/g)];
const articles = articleMatches.map((m) => ({
  slug: m[1],
  title: m[2],
  published: m[3],
}));

const TODAY = new Date().toISOString().split("T")[0];

function escapeXml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateUrlBlock(idPath, enPath, priority, changefreq, lastmod, image) {
  const idUrl = `${SITE_URL}${idPath === "/" ? "" : idPath}`;
  const enUrl = `${SITE_URL}/en${idPath === "/" ? "" : idPath}`;

  let xml = "";

  // Versi ID
  xml += `  <url>\n`;
  xml += `    <loc>${idUrl}</loc>\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="id-ID" href="${idUrl}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${idUrl}" />\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority.toFixed(2)}</priority>\n`;
  if (image) {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${escapeXml(image.loc)}</image:loc>\n`;
    xml += `      <image:title>${escapeXml(image.title)}</image:title>\n`;
    xml += `    </image:image>\n`;
  }
  xml += `  </url>\n`;

  // Versi EN
  const enPriority = Math.max(0.2, Math.round(priority * 0.9 * 100) / 100);
  xml += `  <url>\n`;
  xml += `    <loc>${enUrl}</loc>\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="id-ID" href="${idUrl}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${idUrl}" />\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${enPriority.toFixed(2)}</priority>\n`;
  if (image) {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${escapeXml(image.loc)}</image:loc>\n`;
    xml += `      <image:title>${escapeXml(image.title)}</image:title>\n`;
    xml += `    </image:image>\n`;
  }
  xml += `  </url>\n`;

  return xml;
}

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- ========================================== -->
  <!-- 1. HALAMAN UTAMA & CORE ROUTES             -->
  <!-- ========================================== -->
`;

for (const route of CORE_ROUTES) {
  sitemapXml += generateUrlBlock(route.path, route.path, route.priority, route.changefreq, TODAY, route.image);
}

sitemapXml += `
  <!-- ========================================== -->
  <!-- 2. CAKUPAN KOTA & HUB REGIONAL (JABODETABEK) -->
  <!-- ========================================== -->
`;

for (const city of CITIES) {
  sitemapXml += generateUrlBlock(`/cities/${city}`, `/cities/${city}`, 0.65, "weekly", TODAY);
}

sitemapXml += `
  <!-- ========================================== -->
  <!-- 3. PANDUAN, ARTIKEL BLOG & EDUKASI KOMUTER -->
  <!-- ========================================== -->
`;

for (const art of articles) {
  sitemapXml += generateUrlBlock(`/blog/${art.slug}`, `/blog/${art.slug}`, 0.60, "monthly", art.published || TODAY);
}

sitemapXml += `</urlset>\n`;

fs.writeFileSync("public/sevataxi.xml", sitemapXml, "utf8");
console.log(`Generated public/sevataxi.xml successfully with clean indentation and rich metadata!`);

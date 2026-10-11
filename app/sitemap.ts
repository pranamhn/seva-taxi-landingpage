import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES, SITE_URL } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";
import { ARTICLES_EN } from "@/lib/articles-en";
import { CITY_DIRECTORY } from "@/lib/cities";
import { localePath, type Locale } from "@/lib/i18n";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified: Date;
  /** Bahasa yang tersedia untuk path ini. */
  locales: Locale[];
};

const abs = (locale: Locale, path: string) => {
  const p = localePath(locale, path);
  return `${SITE_URL}${p === "/" ? "" : p}`;
};

// Setiap URL dicantumkan per bahasa, lengkap dengan pasangan hreflang-nya.
function expand(entries: Entry[]): MetadataRoute.Sitemap {
  return entries.flatMap(({ path, priority, changeFrequency, lastModified, locales }) => {
    const languages = Object.fromEntries([
      ...locales.map((l) => [l === "id" ? "id-ID" : l, abs(l, path)]),
      ...(locales.length > 1 ? [["x-default", abs("id", path)]] : []),
    ]);
    return locales.map((locale) => ({
      url: abs(locale, path),
      lastModified,
      changeFrequency,
      priority: locale === "id" ? priority : Math.round(priority * 0.9 * 100) / 100,
      alternates: locales.length > 1 ? { languages } : undefined,
    }));
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const enArticles = new Set(ARTICLES_EN.map((a) => a.slug));

  const pages: Entry[] = PUBLIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    path,
    priority,
    changeFrequency,
    lastModified,
    locales: ["id", "en"],
  }));
  const cities: Entry[] = CITY_DIRECTORY.map((c) => ({
    path: `/cities/${c.slug}`,
    priority: 0.65,
    changeFrequency: "monthly",
    lastModified,
    locales: ["id", "en"],
  }));
  const articles: Entry[] = ARTICLES.map((a) => ({
    path: `/blog/${a.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
    lastModified: new Date(a.published),
    locales: enArticles.has(a.slug) ? ["id", "en"] : ["id"],
  }));

  return expand([...pages, ...cities, ...articles]);
}

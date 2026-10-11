// Bahasa situs. Indonesia di root URL (tanpa prefiks) agar URL & SEO lama tetap; Inggris di /en/...
export type Locale = "id" | "en";

export const LOCALES: Locale[] = ["id", "en"];

/** Path untuk locale tertentu. `path` selalu path versi Indonesia (mis. "/services/ride"). */
export function localePath(locale: Locale, path: string) {
  if (locale === "id") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** Path versi Indonesia dari pathname apa pun (menghapus prefiks /en). */
export function basePath(pathname: string) {
  if (pathname === "/en") return "/";
  return pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
}

export const localeFromPathname = (pathname: string): Locale =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";

export const HTML_LANG: Record<Locale, string> = { id: "id", en: "en" };
export const OG_LOCALE: Record<Locale, string> = { id: "id_ID", en: "en_US" };
export const DATE_LOCALE: Record<Locale, string> = { id: "id-ID", en: "en-GB" };

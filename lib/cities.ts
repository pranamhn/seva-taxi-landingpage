import type { Locale } from "@/lib/i18n";

// Sumber data tunggal wilayah layanan (dipakai direktori /cities dan halaman per kota /cities/[slug]).

export interface CityItem {
  code: string;
  slug: string;
  /** Kata kunci untuk mencocokkan artikel blog terkait (dicek di slug & judul artikel). */
  keywords: string[];
  name: string;
  nameEn: string;
  province: string;
  zone: "jakarta" | "tangerang" | "bodetabek";
  activeFleet: string;
  avgArrival: string;
  status: "AKTIF";
}

export const CITY_DIRECTORY: CityItem[] = [
  {
    code: "JKT-01",
    slug: "jakarta-pusat",
    keywords: ["jakarta-pusat", "jakarta pusat"],
    name: "Jakarta Pusat",
    nameEn: "Central Jakarta",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    status: "AKTIF",
  },
  {
    code: "JKT-02",
    slug: "jakarta-utara",
    keywords: ["jakarta-utara", "jakarta utara"],
    name: "Jakarta Utara",
    nameEn: "North Jakarta",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "JKT-03",
    slug: "jakarta-barat",
    keywords: ["jakarta-barat", "jakarta barat"],
    name: "Jakarta Barat",
    nameEn: "West Jakarta",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "JKT-04",
    slug: "jakarta-selatan",
    keywords: ["jakarta-selatan", "jakarta selatan"],
    name: "Jakarta Selatan",
    nameEn: "South Jakarta",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    status: "AKTIF",
  },
  {
    code: "JKT-05",
    slug: "jakarta-timur",
    keywords: ["jakarta-timur", "jakarta timur", "halim"],
    name: "Jakarta Timur",
    nameEn: "East Jakarta",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    status: "AKTIF",
  },
  {
    code: "TNG-01",
    slug: "kota-tangerang",
    keywords: ["tangerang", "soekarno-hatta"],
    name: "Kota Tangerang",
    nameEn: "Tangerang City",
    province: "Banten",
    zone: "tangerang",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    status: "AKTIF",
  },
  {
    code: "TNG-02",
    slug: "kota-tangerang-selatan",
    keywords: ["tangerang-selatan", "tangerang selatan", "bsd", "tangsel"],
    name: "Kota Tangerang Selatan",
    nameEn: "South Tangerang",
    province: "Banten",
    zone: "tangerang",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "BGR-01",
    slug: "kota-bogor",
    keywords: ["bogor"],
    name: "Kota Bogor",
    nameEn: "Bogor City",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "BGR-02",
    slug: "kabupaten-bogor",
    keywords: ["bogor", "cibubur"],
    name: "Kabupaten Bogor",
    nameEn: "Bogor Regency",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "DPK-01",
    slug: "kota-depok",
    keywords: ["depok"],
    name: "Kota Depok",
    nameEn: "Depok City",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "BKS-01",
    slug: "kota-bekasi",
    keywords: ["bekasi"],
    name: "Kota Bekasi",
    nameEn: "Bekasi City",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "BKS-02",
    slug: "kabupaten-bekasi",
    keywords: ["bekasi", "cikarang"],
    name: "Kabupaten Bekasi",
    nameEn: "Bekasi Regency",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
];

export const ZONE_LABELS: Record<Locale, Record<CityItem["zone"], string>> = {
  id: { jakarta: "DKI Jakarta", tangerang: "Tangerang & BSD", bodetabek: "Bogor, Depok & Bekasi" },
  en: { jakarta: "Jakarta", tangerang: "Tangerang & BSD", bodetabek: "Bogor, Depok & Bekasi" },
};

const PROVINCE_EN: Record<string, string> = { "DKI Jakarta": "Jakarta", Banten: "Banten", "Jawa Barat": "West Java" };

export const cityName = (c: CityItem, locale: Locale) => (locale === "en" ? c.nameEn : c.name);
export const provinceName = (c: CityItem, locale: Locale) => (locale === "en" ? PROVINCE_EN[c.province] ?? c.province : c.province);
/** "2–4 mnt" → "2–4 min" untuk versi Inggris. */
export const arrivalLabel = (c: CityItem, locale: Locale) => (locale === "en" ? c.avgArrival.replace("mnt", "min") : c.avgArrival);

export const getCity = (slug: string) => CITY_DIRECTORY.find((c) => c.slug === slug);

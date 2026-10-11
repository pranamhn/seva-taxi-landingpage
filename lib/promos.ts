// Sumber data halaman /promo.
// Tambahkan promo HANYA bila kodenya sudah aktif di aplikasi. Promo otomatis disembunyikan setelah `validUntil`
// (halaman /promo divalidasi ulang tiap jam). Jangan isi contoh/dummy: kode yang tidak berlaku merugikan konsumen.

import type { Locale } from "@/lib/i18n";

export type PromoAudience = "penumpang" | "driver" | "korporat";
export type PromoService = "ride" | "car" | "send" | "semua";

export interface Promo {
  id: string;
  title: string;
  desc: string;
  audience: PromoAudience;
  service: PromoService;
  /** Kode yang dimasukkan di aplikasi; kosongkan bila promo otomatis. */
  code?: string;
  /** ISO date (YYYY-MM-DD), berlaku sejak awal hari WIB. */
  validFrom: string;
  /** ISO date (YYYY-MM-DD), berlaku hingga akhir hari WIB. */
  validUntil: string;
  terms: string[];
  /** Teks versi Inggris untuk /en/promo; bila kosong, teks Indonesia yang tampil. */
  en?: { title: string; desc: string; terms: string[] };
}

export const PROMOS: Promo[] = [];

const startOfDayWIB = (iso: string) => new Date(`${iso}T00:00:00+07:00`).getTime();
const endOfDayWIB = (iso: string) => new Date(`${iso}T23:59:59+07:00`).getTime();

export function activePromos(now: number = Date.now()) {
  return PROMOS.filter((p) => startOfDayWIB(p.validFrom) <= now && now <= endOfDayWIB(p.validUntil));
}

export const AUDIENCE_LABELS: Record<Locale, Record<PromoAudience, string>> = {
  id: { penumpang: "Penumpang", driver: "Mitra Driver", korporat: "Korporat" },
  en: { penumpang: "Passengers", driver: "Driver Partners", korporat: "Corporate" },
};

export const SERVICE_LABELS: Record<Locale, Record<PromoService, string>> = {
  id: { ride: "SEVA Ride", car: "SEVA Car", send: "SEVA Send", semua: "Semua layanan" },
  en: { ride: "SEVA Ride", car: "SEVA Car", send: "SEVA Send", semua: "All services" },
};

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Bike, Car, Package, Utensils } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

export type ServiceSlug = "ride" | "car" | "send" | "food";

const ICON: Record<ServiceSlug, LucideIcon> = { ride: Bike, car: Car, send: Package, food: Utensils };

const COPY: Record<
  Locale,
  { title: string; intro: string; all: string; cards: Record<ServiceSlug, { tagline: string; badge: string }> }
> = {
  id: {
    title: "Jelajahi Layanan SEVA Lainnya",
    intro: "Pilihan armada mobilitas dan logistik terintegrasi untuk kebutuhan Anda",
    all: "Lihat Semua Layanan & Perbandingan →",
    cards: {
      ride: { tagline: "Motor lincah tembus jam sibuk", badge: "Tarif Hemat" },
      car: { tagline: "Taksi mobil nyaman & bersih", badge: "Populer" },
      send: { tagline: "Kurir on-demand s/d 20 kg", badge: "Kirim Kilat" },
      food: { tagline: "Pesan antar kuliner hangat", badge: "Segera Hadir" },
    },
  },
  en: {
    title: "Explore Other SEVA Services",
    intro: "Rides and deliveries in one app",
    all: "See All Services & Comparison →",
    cards: {
      ride: { tagline: "Nimble motorbike rides through rush hour", badge: "Budget" },
      car: { tagline: "Clean, comfortable cars", badge: "Popular" },
      send: { tagline: "On-demand courier up to 20 kg", badge: "Express" },
      food: { tagline: "Food delivery from local favourites", badge: "Coming Soon" },
    },
  },
};

// Tautan silang ke layanan lain di halaman detail layanan.
export default function OtherServices({ current, locale }: { current: ServiceSlug; locale: Locale }) {
  const t = COPY[locale];
  const others = (["ride", "car", "send", "food"] as const).filter((k) => k !== current);
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
            <p className="text-xs text-slate-500">{t.intro}</p>
          </div>
          <Link href={localePath(locale, "/services")} className="text-xs font-bold text-[#225FD2] hover:underline flex items-center gap-1 shrink-0">
            {t.all}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {others.map((key) => {
            const Icon = ICON[key];
            const card = t.cards[key];
            return (
              <Link
                key={key}
                href={localePath(locale, `/services/${key}`)}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span>SEVA {key.toUpperCase()}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-normal">{card.badge}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">{card.tagline}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#225FD2] group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

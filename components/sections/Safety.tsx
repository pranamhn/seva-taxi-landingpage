"use client";

import { PhoneCallIcon as PhoneCall, ShareNetworkIcon as Share2, SirenIcon as Siren } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";

const FEATURE_STYLE = [
  { icon: Siren, accent: "text-red-600" },
  { icon: Share2, accent: "text-[#225FD2]" },
  { icon: PhoneCall, accent: "text-amber-600" },
];

const COPY: Record<
  Locale,
  { eyebrow: string; titleLead: string; titleAccent: string; intro: string; features: { title: string; desc: string; badge: string }[] }
> = {
  id: {
    eyebrow: "FITUR KEAMANAN PERJALANAN",
    titleLead: "Tenang di Setiap Perjalanan,",
    titleAccent: "Keselamatan Prioritas Utama",
    intro: "Fitur keamanan proaktif kami siap melindungi setiap langkah perjalanan Anda.",
    features: [
      {
        title: "Tombol Darurat (SOS)",
        desc: "Satu ketukan di aplikasi untuk menelepon layanan darurat 112 atau kontak darurat yang Anda simpan.",
        badge: "Satu Ketukan",
      },
      {
        title: "Bagikan Perjalanan (Live Trip Sharing)",
        desc: "Kirimkan tautan pelacakan langsung ke keluarga atau teman agar mereka dapat memantau posisi, pelat nomor, dan rute perjalanan Anda secara live.",
        badge: "Real-Time Tracking",
      },
      {
        title: "Bantuan Layanan Pelanggan 24 Jam",
        desc: "Pusat bantuan responsif siap menangani kendala barang tertinggal, dan pelaporan keluhan selama perjalanan.",
        badge: "Siaga 24/7",
      },
    ],
  },
  en: {
    eyebrow: "TRIP SAFETY FEATURES",
    titleLead: "Peace of Mind on Every Trip,",
    titleAccent: "Safety Comes First",
    intro: "Our proactive safety features protect you and your loved ones on every ride.",
    features: [
      {
        title: "Emergency Button (SOS)",
        desc: "One tap in the app calls the 112 emergency line or the emergency contact you have saved.",
        badge: "One Tap",
      },
      {
        title: "Live Trip Sharing",
        desc: "Send a live tracking link to family or friends so they can follow your position, plate number, and route.",
        badge: "Real-Time Tracking",
      },
      {
        title: "24-Hour Customer Support",
        desc: "Our help team handles lost items and trip complaints.",
        badge: "24/7",
      },
    ],
  },
};

export default function Safety({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  return (
    <section id="safety" className="py-10 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
            {t.titleLead}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              {t.titleAccent}
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.intro}
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((feat, idx) => {
            const { icon: Icon, accent } = FEATURE_STYLE[idx];
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon weight="duotone" className={`w-8 h-8 ${accent}`} />
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

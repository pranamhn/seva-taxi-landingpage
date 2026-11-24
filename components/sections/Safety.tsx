"use client";

import {
  PhoneCallIcon as PhoneCall,
  ShareNetworkIcon as Share2,
  SirenIcon as Siren,
  ShieldCheckIcon as ShieldCheck,
  CheckCircleIcon as CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";

const FEATURE_STYLE = [
  { icon: Siren, bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-600", dot: "bg-rose-500" },
  { icon: Share2, bg: "bg-blue-50", border: "border-blue-200", text: "text-[#225FD2]", dot: "bg-[#225FD2]" },
  { icon: PhoneCall, bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", dot: "bg-emerald-500" },
];

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    intro: string;
    stickyNote: string;
    features: { title: string; desc: string; badge: string; highlight: string }[];
  }
> = {
  id: {
    eyebrow: "SISTEM KEAMANAN TERPADU",
    titleLead: "Tenang di Setiap Perjalanan,",
    titleAccent: "Keselamatan Prioritas Utama",
    intro: "Perlindungan berlapis dari sebelum naik hingga sampai tujuan. Anda dan keluarga dapat bepergian tanpa rasa was-was.",
    stickyNote: "Terhubung langsung dengan 112 & Kepolisian 🛡️",
    features: [
      {
        title: "Tombol Darurat SOS (1-Tap Call)",
        desc: "Satu ketukan darurat di aplikasi untuk terhubung seketika ke layanan tanggap darurat 112 dan kontak darurat keluarga terpilih.",
        badge: "Respon Kilat 112",
        highlight: "Langsung tersambung tanpa jeda",
      },
      {
        title: "Bagikan Perjalanan (Live Trip GPS)",
        desc: "Kirimkan tautan pelacakan real-time ke WhatsApp keluarga. Mereka dapat memantau titik lokasi, rute gerak, dan pelat nomor armada secara live.",
        badge: "Pelacakan Real-Time",
        highlight: "Bisa dipantau tanpa harus instal app",
      },
      {
        title: "Penyamaran Nomor HP & CS 24 Jam",
        desc: "Nomor telepon pribadi Anda tidak pernah diperlihatkan kepada driver berkat virtual number masking. Pusat bantuan siaga 24 jam penuh.",
        badge: "Privasi Terlindungi",
        highlight: "Bantuan cepat untuk barang tertinggal",
      },
    ],
  },
  en: {
    eyebrow: "INTEGRATED SAFETY SYSTEM",
    titleLead: "Peace of Mind on Every Trip,",
    titleAccent: "Safety Comes First",
    intro: "Multi-layered passenger safety from pickup to drop-off. You and your family travel with total peace of mind.",
    stickyNote: "Direct link to 112 & emergency services 🛡️",
    features: [
      {
        title: "Emergency SOS Button (1-Tap Call)",
        desc: "One single tap connects you directly to the 112 official emergency line and sends your location to chosen family contacts.",
        badge: "112 Instant Link",
        highlight: "Zero delay emergency dispatch",
      },
      {
        title: "Live GPS Trip Sharing",
        desc: "Share a live tracking link to family WhatsApp. They follow your route, driver details, and license plate in real time.",
        badge: "Live GPS Tracking",
        highlight: "Viewable on web without app install",
      },
      {
        title: "Virtual Phone Masking & 24/7 CS",
        desc: "Your real phone number is masked for 100% privacy protection. Our dedicated support team is active 24 hours every day.",
        badge: "Privacy Protected",
        highlight: "Fast response for lost & found items",
      },
    ],
  },
};

export default function Safety({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  return (
    <section id="safety" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200/80 transition-colors relative overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#225FD2] text-xs font-bold tracking-wide uppercase shadow-2xs">
            <ShieldCheck size={15} className="text-[#225FD2]" />
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="v11-h text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.12]">
            {t.titleLead}{" "}
            <span className="v11-mark text-[#225FD2]">
              {t.titleAccent}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* 3 Safety Cards Grid with 3D Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {t.features.map((feat, idx) => {
            const style = FEATURE_STYLE[idx];
            const Icon = style.icon;
            return (
              <div
                key={idx}
                className="v11-card3d !p-6 sm:!p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${style.bg} border ${style.border} flex items-center justify-center ${style.text} shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot} animate-pulse`} />
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="v11-h text-xl text-slate-900 font-bold mb-2.5 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" weight="fill" />
                  <span>{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sticky Note Assurance Doodle */}
        <div className="mt-10 flex justify-center">
          <div className="v11-sticky-emerald relative px-5 py-2.5 v11-hand text-[20px] text-[#064E3B] rotate-[-1.5deg] shadow-md pointer-events-none select-none">
            <span className="v11-tape" />
            <span>{t.stickyNote}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

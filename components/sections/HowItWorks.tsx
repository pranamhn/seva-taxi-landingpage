"use client";

import { MapPin, Car, CreditCard, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const STEP_META = [
  { step: "01", screenshot: "/images/app/app-home.jpg", icon: MapPin },
  { step: "02", screenshot: "/images/app/app-fare-map.jpg", icon: Car },
  { step: "03", screenshot: "/images/app/app-chat.jpg", icon: CreditCard },
];

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    intro: string;
    stepOf: (n: number) => string;
    steps: { title: string; desc: string; highlight: string }[];
  }
> = {
  id: {
    eyebrow: "MUDAH & CEPAT",
    titleLead: "Cara Pesan Perjalanan dalam",
    titleAccent: "3 Langkah Mudah",
    intro: "Pesan praktis dari ponsel Anda tanpa repot antre atau tawar-menawar harga.",
    stepOf: (n) => `Langkah ${n} dari 3`,
    steps: [
      {
        title: "Tentukan Titik Jemput & Tujuan",
        desc: "Buka aplikasi SEVA di Android atau iOS. Masukkan alamat tujuan atau geser pin di peta untuk titik penjemputan yang akurat hingga nomor gerbang atau lobi gedung.",
        highlight: "Titik jemput akurat di peta",
      },
      {
        title: "Pilih Kendaraan & Cek Tarif Transparan",
        desc: "Tentukan pilihan armada: SEVA Ride, SEVA Car, atau SEVA Send. Lihat rincian biaya argo pasti dan estimasi waktu penjemputan driver sebelum melakukan konfirmasi.",
        highlight: "Tarif pasti tanpa lonjakan liar saat jam sibuk",
      },
      {
        title: "Driver Menjemput & Bayar Cashless",
        desc: "Pantau kedatangan armada langsung di peta. Sapa driver profesional Anda, nikmati perjalanan yang nyaman, dan bayar otomatis via SEVA eWallet, QRIS, atau Tunai.",
        highlight: "Keamanan perjalanan terpantau real-time",
      },
    ],
  },
  en: {
    eyebrow: "QUICK & EASY",
    titleLead: "Book a Ride in",
    titleAccent: "3 Simple Steps",
    intro: "Book easily from your phone without waiting curbside or haggling over fares.",
    stepOf: (n) => `Step ${n} of 3`,
    steps: [
      {
        title: "Set Your Pickup & Destination",
        desc: "Open the SEVA app on Android or iOS. Enter your destination or drag the pin on the map to the exact pickup point, down to the gate or building lobby.",
        highlight: "Accurate pickup point on the map",
      },
      {
        title: "Choose a Vehicle & See the Fare",
        desc: "Pick SEVA Ride, SEVA Car, or SEVA Send. See the fixed fare and estimated pickup time before you confirm.",
        highlight: "Fixed fare, no rush-hour surge",
      },
      {
        title: "Meet Your Driver & Pay Cashless",
        desc: "Watch your driver arrive on the map, enjoy the ride, and pay with SEVA eWallet, QRIS, or cash.",
        highlight: "Trip tracked in real time",
      },
    ],
  },
};

export default function HowItWorks({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  return (
    <section id="how-it-works" className="py-10 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
            {t.titleLead}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
              {t.titleAccent}
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.intro}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEP_META.map((meta, idx) => {
            const s = { ...meta, ...t.steps[idx] };
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_15px_35px_-20px_rgba(34,95,210,0.12)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-blue-400/50 transition-all duration-300"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black tracking-tight text-[#225FD2]/75">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-[#225FD2]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* App Screen Preview Frame */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-200/80 shadow-inner group">
                    <Image
                      src={s.screenshot}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-medium text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{s.highlight}</span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Step Connector Indicator for Mobile/Desktop */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#225FD2] font-semibold">
                  <span>{t.stepOf(idx + 1)}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import {
  MapPinIcon as MapPin,
  CarIcon as Car,
  CreditCardIcon as CreditCard,
  ArrowRightIcon as ArrowRight,
  CheckCircleIcon as CheckCircle,
  SparkleIcon as Sparkles,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const STEP_META = [
  { step: "01", screenshot: "/images/app/app-home.jpg", icon: MapPin, doodle: "Tinggal tentukan pin jemput 📍" },
  { step: "02", screenshot: "/images/app/app-fare-map.jpg", icon: Car, doodle: "Tarif flat pasti di awal 🔒" },
  { step: "03", screenshot: "/images/app/app-chat.jpg", icon: CreditCard, doodle: "Bayar otomatis via eWallet ⚡" },
];

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    intro: string;
    stepOf: (n: number) => string;
    steps: { label: string; title: string; desc: string; highlight: string }[];
  }
> = {
  id: {
    eyebrow: "MUDAH & PRAKTIS",
    titleLead: "Pesan Perjalanan dalam",
    titleAccent: "3 Langkah Sederhana",
    intro: "Proses cepat dari genggaman ponsel Anda. Tanpa antre, tanpa tawar-menawar harga, langsung jalan.",
    stepOf: (n) => `Langkah ${n} dari 3`,
    steps: [
      {
        label: "Atur Rute",
        title: "Tentukan Titik Jemput & Tujuan",
        desc: "Buka aplikasi SEVA di smartphone Anda. Masukkan alamat tujuan atau geser pin di peta untuk titik jemput yang akurat hingga lobi gedung atau nomor gerbang.",
        highlight: "Titik jemput presisi GPS",
      },
      {
        label: "Pilih Armada",
        title: "Pilih Kendaraan & Cek Tarif Pasti",
        desc: "Tentukan tipe armada: SEVA Ride, SEVA Car, atau SEVA Send. Lihat rincian argo pasti dan estimasi waktu penjemputan driver sebelum melakukan konfirmasi.",
        highlight: "Tarif pasti tanpa lonjakan jam sibuk",
      },
      {
        label: "Jalan & Bayar",
        title: "Driver Menjemput & Bayar Cashless",
        desc: "Pantau kedatangan driver langsung di peta live. Nikmati perjalanan yang nyaman, lalu bayar otomatis melalui SEVA eWallet, QRIS, atau Tunai.",
        highlight: "Perjalanan aman & terlindungi SOS",
      },
    ],
  },
  en: {
    eyebrow: "QUICK & EASY",
    titleLead: "Book Your Ride in",
    titleAccent: "3 Simple Steps",
    intro: "Fast booking from your phone. No lines, no haggling, just smooth and predictable travel.",
    stepOf: (n) => `Step ${n} of 3`,
    steps: [
      {
        label: "Set Route",
        title: "Set Pickup & Destination",
        desc: "Open the SEVA app on your phone. Enter your destination or drag the pin on the map to your exact pickup location, down to the building lobby.",
        highlight: "High precision GPS pickup point",
      },
      {
        label: "Pick Fleet",
        title: "Choose Vehicle & Check Upfront Fare",
        desc: "Select SEVA Ride, SEVA Car, or SEVA Send. Review your exact upfront fare and estimated driver arrival time before confirming.",
        highlight: "Locked fare with zero rush-hour surge",
      },
      {
        label: "Ride & Pay",
        title: "Meet Driver & Pay Cashless",
        desc: "Watch your driver arrive in real time on the map. Enjoy a comfortable ride and pay seamlessly with SEVA eWallet, QRIS, or cash.",
        highlight: "Trip protected with 24/7 SOS tracking",
      },
    ],
  },
};

export default function HowItWorks({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 transition-colors">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#225FD2] text-xs font-bold tracking-wide uppercase shadow-2xs">
            <Sparkles size={14} className="text-[#225FD2]" />
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

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {STEP_META.map((meta, idx) => {
            const s = { ...meta, ...t.steps[idx] };
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="v11-card3d !p-6 sm:!p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#225FD2] text-white font-mono text-xs font-bold shadow-md shadow-blue-500/30">
                        {s.step}
                      </span>
                      <span className="v11-h text-base text-slate-900 font-bold">
                        {s.label}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#225FD2] shadow-2xs group-hover:bg-[#225FD2] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* App Screen Preview Frame */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-200/90 shadow-inner group">
                    <Image
                      src={s.screenshot}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-semibold text-white flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" weight="fill" />
                      <span className="truncate">{s.highlight}</span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="v11-h text-lg text-slate-900 font-bold mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Step Footer with Doodle */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#225FD2]">{t.stepOf(idx + 1)}</span>
                  <span className="v11-hand text-slate-500 text-[16px]">{s.doodle}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

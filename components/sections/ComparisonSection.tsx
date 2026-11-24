"use client";

import { useState } from "react";
import {
  CheckIcon as Check,
  XIcon as X,
  ShieldCheckIcon as ShieldCheck,
  SparkleIcon as Sparkles,
  ArrowRightIcon as ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    intro: string;
    tabCaraLama: string;
    tabSeva: string;
    caraLamaHeading: string;
    caraLamaBadge: string;
    sevaHeading: string;
    sevaBadge: string;
    stickyNote: string;
    painPoints: { title: string; desc: string }[];
    sevaPoints: { title: string; desc: string; tag: string }[];
    footerNote: string;
  }
> = {
  id: {
    eyebrow: "STANDAR LAYANAN MOBILITAS",
    titleLead: "Tinggalkan Was-Was,",
    titleAccent: "Pilih Standar Pasti SEVA",
    intro: "Bandingkan pengalaman perjalanan sehari-hari. Rasakan kenyamanan transportasi yang adil, transparan, dan dapat diandalkan.",
    tabCaraLama: "Cara Lama (Was-was)",
    tabSeva: "Standar Pasti SEVA (Nyaman)",
    caraLamaHeading: "Keresahan Penumpang Pada Umumnya",
    caraLamaBadge: "Sering Dikeluhkan",
    sevaHeading: "Standar Pasti di Setiap Trip SEVA",
    sevaBadge: "Standar Resmi SEVA",
    stickyNote: "Bebas dari argo siluman saat jam sibuk! ⚡",
    painPoints: [
      {
        title: "Argo Melonjak Liar Saat Jam Sibuk & Hujan",
        desc: "Tarif bisa tiba-tiba naik 2 hingga 3 kali lipat begitu mendung atau rush hour sore hari.",
      },
      {
        title: "Driver Sering Tolak / Cancel Pesanan",
        desc: "Potongan komisi konvensional 20-30% membuat pengemudi enggan menerima trip tertentu.",
      },
      {
        title: "Privasi Nomor Pribadi Rentan Bocor",
        desc: "Nomor WhatsApp asli penumpang sering terlihat langsung tanpa proteksi penyamaran data.",
      },
      {
        title: "Pilihan Bayar Terbatas & Tambahan Biaya",
        desc: "Sering dikenai biaya layanan tambahan tersembunyi yang baru muncul saat checkout.",
      },
    ],
    sevaPoints: [
      {
        title: "Tarif Pasti Tanpa Lonjakan Liar",
        desc: "Harga yang tertera di awal adalah harga final yang Anda bayar, bahkan saat hujan lebat.",
        tag: "100% Transparan",
      },
      {
        title: "Bagi Hasil 95% untuk Mitra Driver",
        desc: "Platform fee hanya 5%, driver sejahtera dan dengan senang hati menerima pesanan Anda.",
        tag: "Driver Bahagia",
      },
      {
        title: "Virtual Number Masking & Tombol SOS 112",
        desc: "Nomor HP disamarkan secara otomatis. Dilengkapi tombol darurat terintegrasi 112 dan kontak keluarga.",
        tag: "Privasi Terlindungi",
      },
      {
        title: "Bebas Bayar: eWallet, QRIS & Tunai",
        desc: "Pilih metode pembayaran sesuai kenyamanan Anda tanpa biaya admin terselubung.",
        tag: "Fleksibel",
      },
    ],
    footerNote: "💡 Kesimpulan: Nikmati perjalanan harian yang tenang, terprediksi, dan adil bagi penumpang maupun driver.",
  },
  en: {
    eyebrow: "MOBILITY SERVICE STANDARDS",
    titleLead: "Leave Worry Behind,",
    titleAccent: "Choose the SEVA Standard",
    intro: "Compare daily travel experiences. Feel the comfort of transportation that is fair, transparent, and dependable.",
    tabCaraLama: "Old Way (Uncertain)",
    tabSeva: "The SEVA Standard (Peace of Mind)",
    caraLamaHeading: "Common Rider Frustrations",
    caraLamaBadge: "Common Pain Points",
    sevaHeading: "The SEVA Guarantee on Every Trip",
    sevaBadge: "Official SEVA Standard",
    stickyNote: "Zero surge pricing shocks in rush hour! ⚡",
    painPoints: [
      {
        title: "Surge Fares in Rush Hour & Heavy Rain",
        desc: "Prices suddenly shoot up 2x to 3x higher the moment clouds form or rush hour hits.",
      },
      {
        title: "Frequent Driver Cancellations",
        desc: "High 20-30% commission cuts cause drivers to reject or cancel trips arbitrarily.",
      },
      {
        title: "Personal Phone Numbers Exposed",
        desc: "Your private phone number is exposed directly without virtual masking protection.",
      },
      {
        title: "Hidden Platform & Service Fees",
        desc: "Sneaky extra checkout fees that were not visible when choosing your ride.",
      },
    ],
    sevaPoints: [
      {
        title: "Fixed Upfront Fares — Zero Surge",
        desc: "The exact fare shown before you book is what you pay, even during torrential downpours.",
        tag: "100% Upfront",
      },
      {
        title: "95% Fare Payout to Driver Partners",
        desc: "With only a 5% platform fee, motivated drivers happily accept and complete your trip.",
        tag: "Happy Drivers",
      },
      {
        title: "Virtual Number Masking & 112 SOS",
        desc: "Personal phone numbers are masked automatically. Instant SOS link to 112 and family.",
        tag: "Total Privacy",
      },
      {
        title: "Pay Your Way: eWallet, QRIS & Cash",
        desc: "Choose whichever payment method suits you best with zero hidden processing fees.",
        tag: "Zero Surcharge",
      },
    ],
    footerNote: "💡 Bottom Line: Experience calmer, predictable daily commuting that is genuinely fair to both rider and driver.",
  },
};

export default function ComparisonSection({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  const [activeView, setActiveView] = useState<"both" | "lama" | "seva">("both");

  return (
    <section className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200/80 transition-colors">
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

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Column 1: Keresahan Cara Lama (Subtle Red/Slate tint with strikethroughs) */}
          <div className="rounded-3xl border border-slate-300/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[11px] font-bold">
                    {t.caraLamaBadge}
                  </span>
                  <h3 className="v11-h text-xl text-slate-800 font-bold mt-2">
                    {t.caraLamaHeading}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                  <X className="w-5 h-5" weight="bold" />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {t.painPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✕
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium text-center">
              Pola konvensional yang kerap merugikan kenyamanan perjalanan Anda.
            </div>
          </div>

          {/* Column 2: Standar Pasti SEVA (Tactile 3D Card with Blue & Emerald Highlights) */}
          <div className="v11-card3d !p-6 sm:!p-8 shadow-xl flex flex-col justify-between relative overflow-hidden ring-2 ring-blue-500/10">
            
            {/* Playful Sticky Note Doodle on Top Right */}
            <div className="v11-sticky absolute -top-2 right-4 z-20 px-3.5 py-1.5 v11-hand text-[18px] text-[#3B3000] rotate-[3deg] shadow-md pointer-events-none select-none hidden sm:block">
              <span className="v11-tape" />
              <span>{t.stickyNote}</span>
            </div>

            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#225FD2] border border-blue-200 text-[11px] font-bold">
                    {t.sevaBadge}
                  </span>
                  <h3 className="v11-h text-xl text-slate-900 font-bold mt-2">
                    {t.sevaHeading}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0 border border-blue-200 shadow-xs">
                  <Check className="w-5 h-5" weight="bold" />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {t.sevaPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50/50 border border-blue-100/80">
                    <div className="w-5 h-5 rounded-full bg-[#225FD2] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3.5 h-3.5" weight="bold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {item.title}
                        </p>
                        <span className="text-[10px] font-bold text-[#225FD2] bg-white px-2 py-0.5 rounded-full border border-blue-200 shrink-0">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" weight="fill" />
                <span>Jaminan Transparansi & Bebas Lonjakan</span>
              </div>
              <span className="text-[10px] font-bold bg-white text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                100% Fair
              </span>
            </div>

          </div>

        </div>

        {/* Closing Summary Note */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-medium text-slate-500">
            {t.footerNote}
          </p>
        </div>

      </div>
    </section>
  );
}

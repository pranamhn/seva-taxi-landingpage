"use client";

import { Check, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n";

// Hanya menjelaskan standar SEVA sendiri — tanpa membandingkan atau menyebut kekurangan aplikasi lain.
const COPY: Record<
  Locale,
  { eyebrow: string; titleLead: string; titleAccent: string; intro: string; aspect: string; standard: string; rows: { feature: string; seva: string }[] }
> = {
  id: {
    eyebrow: "STANDAR LAYANAN SEVA",
    titleLead: "Yang Anda Dapatkan di",
    titleAccent: "Setiap Perjalanan SEVA",
    intro: "Standar yang kami terapkan agar perjalanan Anda lebih tenang, adil, dan hemat.",
    aspect: "Aspek Perjalanan",
    standard: "Standar SEVA",
    rows: [
      { feature: "Skema Tarif & Jam Sibuk", seva: "Tarif pasti dan transparan sejak awal pesan, tanpa lonjakan sepihak saat jam sibuk atau hujan." },
      { feature: "Kepastian Driver", seva: "Bagi hasil 95% untuk pengemudi (platform fee hanya 5%) agar mitra driver nyaman menerima dan menyelesaikan pesanan." },
      { feature: "Keamanan & Respon Bantuan", seva: "Tombol darurat SOS ke 112 atau kontak darurat, bagikan perjalanan secara live, dan penyamaran nomor HP." },
      { feature: "Titik Jemput & GPS", seva: "Posisi driver dipantau via GPS real-time dan estimasi penjemputan ditampilkan sebelum Anda memesan." },
      { feature: "Pilihan Metode Pembayaran", seva: "Bebas pilih: SEVA eWallet, QRIS semua bank & dompet digital, atau Tunai." },
    ],
  },
  en: {
    eyebrow: "THE SEVA STANDARD",
    titleLead: "What You Get on",
    titleAccent: "Every SEVA Trip",
    intro: "The standards we hold ourselves to so every trip is calmer, fairer, and better value.",
    aspect: "Trip Aspect",
    standard: "SEVA Standard",
    rows: [
      { feature: "Fares & Rush Hour", seva: "A fixed, transparent fare from the moment you book, with no surge pricing in rush hour or rain." },
      { feature: "Reliable Drivers", seva: "Drivers keep 95% of the fare (5% platform fee), so they are happy to accept and complete your trip." },
      { feature: "Safety & Support", seva: "SOS button to call 112 or your emergency contact, live trip sharing, and phone number masking." },
      { feature: "Pickup & GPS", seva: "Your driver's position is tracked by live GPS and the pickup time is shown before you book." },
      { feature: "Payment Options", seva: "Your choice: SEVA eWallet, QRIS from any bank or e-wallet, or cash." },
    ],
  },
};

export default function ComparisonSection({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  return (
    <section className="py-10 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.titleLead}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
              {t.titleAccent}
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.intro}
          </p>
        </div>

        {/* Standards Table Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-25px_rgba(34,95,210,0.18)]">
          <div className="hidden md:grid md:grid-cols-12 border-b border-slate-200/80 bg-slate-50/80">
            <div className="p-5 md:col-span-4 font-bold text-xs uppercase tracking-wider text-slate-500">
              {t.aspect}
            </div>
            <div className="p-5 md:col-span-8 font-bold text-xs uppercase tracking-wider text-[#225FD2] border-l border-slate-200/80 bg-blue-50/70">
              {t.standard}
            </div>
          </div>

          <div className="divide-y divide-slate-200/70">
            {t.rows.map((row) => (
              <div key={row.feature} className="p-4 md:p-0 md:grid md:grid-cols-12 items-stretch">
                <div className="md:p-5 md:col-span-4 flex items-center mb-2 md:mb-0">
                  <span className="font-bold text-sm text-slate-900 break-words">{row.feature}</span>
                </div>
                <div className="md:p-5 md:col-span-8 md:border-l border-slate-200/80 md:bg-blue-50/30 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="leading-relaxed break-words">{row.seva}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

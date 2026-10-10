"use client";

import { MapPin, Car, CreditCard, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const STEPS = [
  {
    step: "01",
    title: "Tentukan Titik Jemput & Tujuan",
    desc: "Buka aplikasi SEVA di Android atau iOS. Masukkan alamat tujuan atau geser pin di peta untuk titik penjemputan yang akurat hingga nomor gerbang atau lobi gedung.",
    screenshot: "/images/app/app-home.jpg",
    icon: MapPin,
    highlight: "Akurasi titik GPS hingga 2 meter",
  },
  {
    step: "02",
    title: "Pilih Kendaraan & Cek Tarif Transparan",
    desc: "Tentukan pilihan armada: SEVA Motor, Car, EV, atau XL. Lihat rincian biaya argo pasti dan estimasi waktu penjemputan driver sebelum melakukan konfirmasi.",
    screenshot: "/images/app/app-fare-map.jpg",
    icon: Car,
    highlight: "Tarif pasti tanpa lonjakan liar saat jam sibuk",
  },
  {
    step: "03",
    title: "Driver Menjemput & Bayar Cashless",
    desc: "Pantau kedatangan armada langsung di peta. Sapa driver profesional Anda, nikmati perjalanan nyaman ber-AC, dan bayar otomatis via QRIS, e-Wallet, atau Tunai.",
    screenshot: "/images/app/app-chat.jpg",
    icon: CreditCard,
    highlight: "Keamanan perjalanan terpantau real-time",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MUDAH &amp; CEPAT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Cara Pesan Perjalanan dalam{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
              3 Langkah Mudah
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Tidak perlu menunggu di pinggir jalan atau tawar-menawar harga. Semua selesai dalam hitungan detik melalui smartphone Anda.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_15px_35px_-20px_rgba(34,95,210,0.12)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-blue-400/50 transition-all duration-300"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-[#225FD2]/30">
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
                  <span>Langkah {idx + 1} dari 3</span>
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

"use client";

import { CheckCircle2, Sparkles, Wallet, Zap, Clock } from "lucide-react";
import StoreBadges from "@/components/ui/StoreBadges";
import Image from "next/image";

export default function DriverCTA() {
  return (
    <section id="driver" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#102a6b] to-[#154194] text-white p-8 sm:p-12 lg:p-14 shadow-[0_25px_60px_-15px_rgba(21,65,148,0.35)]">
          
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-blue-200 backdrop-blur-md shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>KEMITRAAN PENGEMUDI SEVA</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
                Gabung Jadi Mitra Pengemudi,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                  Bawa Pulang Bersih 85%
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl">
                Nikmati potongan komisi platform terendah di Indonesia (hanya 15%), pencairan dana instan setiap hari (H+0) langsung ke rekening Anda, dan kebebasan penuh mengatur jam kerja.
              </p>

              {/* 3 Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-xl bg-emerald-400/20 text-emerald-400 flex items-center justify-center mb-2 font-bold">
                    85%
                  </div>
                  <div className="text-xs font-bold text-white">Bagi Hasil Adil</div>
                  <div className="text-[11px] text-blue-200/80 mt-0.5">Potongan hanya 15%</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-xl bg-blue-400/20 text-blue-300 flex items-center justify-center mb-2">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Pencairan H+0</div>
                  <div className="text-[11px] text-blue-200/80 mt-0.5">Tarik saldo tiap hari</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-xl bg-purple-400/20 text-purple-300 flex items-center justify-center mb-2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Jam Kerja Bebas</div>
                  <div className="text-[11px] text-blue-200/80 mt-0.5">Atur jadwal sendiri</div>
                </div>
              </div>

              {/* 3 Simple Requirements */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-blue-200 uppercase tracking-wider mb-2 font-bold">
                  Persyaratan Mudah:
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-blue-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    KTP &amp; SIM Aktif (A/C)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    STNK Kendaraan
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Smartphone Android / iOS
                  </span>
                </div>
              </div>

              {/* Action Buttons: App Store & Google Play */}
              <div className="pt-4 flex items-center gap-3">
                <StoreBadges size="lg" />
              </div>

            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Image Frame with Liquid Glass Cards */}
              <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden bg-gradient-to-tr from-white/10 to-white/5 border border-white/20 p-4 shadow-2xl flex items-center justify-center">
                <Image
                  src="/images/driver-partner.webp"
                  alt="Mitra Driver SEVA"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="w-full h-full object-cover rounded-2xl select-none"
                />

                {/* Floating Badge 1 (Top Left): 85% Bersih */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-white text-slate-900 shadow-lg animate-float-slow select-none">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    85%
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">Bagi Hasil Bersih</div>
                    <div className="text-[9px] text-slate-500 font-medium">Potongan cuma 15%</div>
                  </div>
                </div>

                {/* Floating Badge 2 (Bottom Right): Pencairan Cepat */}
                <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-white text-slate-900 shadow-lg animate-float-slow select-none">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#225FD2] flex items-center justify-center font-bold text-xs">
                    <Wallet className="w-4 h-4 text-[#225FD2]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">Pencairan Harian</div>
                    <div className="text-[9px] text-emerald-600 font-semibold">Instan H+0 ke Rekening</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

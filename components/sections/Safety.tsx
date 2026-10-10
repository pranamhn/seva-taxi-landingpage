"use client";

import { ShieldCheck, PhoneCall, Share2, AlertTriangle } from "lucide-react";

const SAFETY_FEATURES = [
  {
    icon: AlertTriangle,
    title: "Tombol Darurat (SOS) 24/7",
    desc: "Akses satu ketukan di aplikasi untuk menghubungkan Anda langsung dengan Command Center darurat SEVA dan aparat berwenang terdekat.",
    badge: "Respon Prioritas",
    accent: "text-red-600 bg-red-50 border-red-200",
  },
  {
    icon: Share2,
    title: "Bagikan Perjalanan (Live Trip Sharing)",
    desc: "Kirimkan tautan pelacakan langsung ke keluarga atau teman agar mereka dapat memantau posisi, pelat nomor, dan rute perjalanan Anda secara live.",
    badge: "Real-Time Tracking",
    accent: "text-[#225FD2] bg-blue-50 border-blue-200",
  },
  {
    icon: PhoneCall,
    title: "Bantuan Layanan Pelanggan 24 Jam",
    desc: "Pusat bantuan responsif siap menangani kendala barang tertinggal, pelaporan keluhan, atau bantuan darurat kapan pun Anda butuhkan.",
    badge: "Siaga 24/7",
    accent: "text-amber-600 bg-amber-50 border-amber-200",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="py-10 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 mb-3 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>STANDAR KEAMANAN TERTINGGI</span>
          </div>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
            Tenang di Setiap Perjalanan,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              Keselamatan Prioritas Utama
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Dari penjemputan hingga tiba di tujuan, fitur keamanan canggih kami bekerja secara proaktif melindungi Anda dan orang terkasih.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAFETY_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${feat.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold font-mono px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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

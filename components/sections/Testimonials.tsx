"use client";

import { Star, Sparkles, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Nathalia Siregar",
    role: "Financial Consultant, SCBD",
    tag: "Komuter Harian",
    quote: "Kualitas kendaraan SEVA jauh lebih konsisten dibanding aplikasi lain. Unitnya selalu bersih ber-AC dingin, tidak bau rokok, dan yang terpenting: tidak ada lonjakan harga mendadak saat hujan lebat di jam pulang kantor Sudirman.",
    rating: 5,
    verifiedTrip: "248 Trip Terverifikasi",
    avatarBg: "bg-blue-100 text-[#225FD2]",
  },
  {
    name: "Dimas Anggara",
    role: "Software Engineer, BSD",
    tag: "Pengguna SEVA Motor",
    quote: "Paling suka sama SEVA Ride karena driver-nya ramah, helm selalu bersih wangi ada hairnet gratis, dan jarang banget cancel order. Waktu jemput cuma 2-3 menit langsung sampai depan lobi.",
    rating: 5,
    verifiedTrip: "180 Trip Terverifikasi",
    avatarBg: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Clarissa Wijaya",
    role: "Ibu Rumah Tangga & Traveler",
    tag: "Pengguna SEVA CAR",
    quote: "Kalau ke Bandara Soetta bareng anak-anak dan koper besar selalu pakai SEVA CAR. Mobilnya lega, driver bantu angkat koper, dan tarifnya transparan fiks tanpa tagihan siluman.",
    rating: 5,
    verifiedTrip: "52 Trip Bandara",
    avatarBg: "bg-purple-100 text-purple-700",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ULASAN PENUMPANG</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Cerita Nyata dari{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
              Jutaan Penumpang Setia
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Dengarkan langsung pengalaman komuter perkotaan, pekerja kantoran, dan keluarga yang mengandalkan SEVA untuk mobilitas harian mereka.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_15px_40px_-20px_rgba(34,95,210,0.12)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {Array(rev.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                  </div>
                  <Quote className="w-7 h-7 text-blue-200 group-hover:text-blue-400 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm ${rev.avatarBg}`}>
                    {rev.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">{rev.role}</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { Check, X, Sparkles } from "lucide-react";

const COMPARISON_ROWS = [
  {
    feature: "Skema Tarif & Jam Sibuk",
    otherApps: "Lonjakan tarif mendadak (surge pricing) hingga 2x-3x lipat saat jam pulang kantor atau cuaca hujan.",
    seva: "Tarif pasti & transparan tanpa markup lonjakan liar sepihak, argo tertera jelas sejak awal pesan.",
  },
  {
    feature: "Kepastian Driver & Cancel Order",
    otherApps: "Driver sering membatalkan pesanan sepihak karena potongan komisi platform yang tinggi (20%-30%).",
    seva: "Mitra driver cepat menerima orderan & jarang cancel berkat skema bagi hasil adil 85% untuk pengemudi.",
  },
  {
    feature: "Kenyamanan Kabin & Armada",
    otherApps: "Kondisi unit acak, AC mobil kadang kurang dingin, atau helm motor kotor tanpa penutup kepala.",
    seva: "Standar ketat: kabin mobil bersih ber-AC dingin, serta helm SNI higienis dengan hairnet steril gratis.",
  },
  {
    feature: "Keamanan & Respon Bantuan",
    otherApps: "Pusat bantuan didominasi bot otomatis, proses pelaporan darurat sering memakan waktu lama.",
    seva: "Tombol darurat SOS 24/7 terhubung langsung ke tim respons, live trip sharing, dan penyamaran nomor HP.",
  },
  {
    feature: "Akurasi Titik Jemput & GPS",
    otherApps: "Marker driver di peta sering delay atau melompat, estimasi kedatangan (ETA) sering meleset.",
    seva: "Telematika GPS real-time terkalibrasi presisi dengan estimasi penjemputan akurat rata-rata 2-4 menit.",
  },
  {
    feature: "Pilihan Metode Pembayaran",
    otherApps: "Sering terkunci ke satu ekosistem e-wallet tertentu, ribet jika saldo e-wallet tidak mencukupi.",
    seva: "Bebas pilih: SEVA Wallet, QRIS semua bank & dompet digital, Tunai, atau Kartu Debit/Kredit.",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PERBANDINGAN LAYANAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Aplikasi Ride-Hailing Lain vs{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
              Standar SEVA
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Ketahui keunggulan nyata SEVA dibandingkan aplikasi transportasi online lainnya untuk perjalanan yang lebih tenang, adil, dan hemat.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-25px_rgba(34,95,210,0.18)]">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200/80 bg-slate-50/80">
            <div className="p-4 sm:p-5 md:col-span-4 font-bold text-xs uppercase tracking-wider text-slate-500 font-mono flex items-center">
              Aspek Perjalanan
            </div>
            <div className="p-4 sm:p-5 md:col-span-4 font-bold text-xs uppercase tracking-wider text-slate-500 font-mono border-t md:border-t-0 md:border-l border-slate-200/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span>Aplikasi Ride-Hailing Lain</span>
            </div>
            <div className="p-4 sm:p-5 md:col-span-4 font-bold text-xs uppercase tracking-wider text-[#225FD2] font-mono border-t md:border-t-0 md:border-l border-slate-200/80 bg-blue-50/70 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#225FD2] animate-pulse"></span>
              <span>SEVA (Standar Baru)</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-200/70">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 items-stretch hover:bg-slate-50/50 transition-colors"
              >
                {/* Feature Name */}
                <div className="p-4 sm:p-5 md:col-span-4 flex items-center">
                  <span className="font-bold text-sm text-slate-900">
                    {row.feature}
                  </span>
                </div>

                {/* Other Ride-Hailing Apps */}
                <div className="p-4 sm:p-5 md:col-span-4 border-t md:border-t-0 md:border-l border-slate-200/70 flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed">{row.otherApps}</span>
                </div>

                {/* SEVA */}
                <div className="p-4 sm:p-5 md:col-span-4 border-t md:border-t-0 md:border-l border-slate-200/70 bg-blue-50/30 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed">{row.seva}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

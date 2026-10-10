"use client";

import { useState } from "react";
import {
  Sparkles,
  QrCode,
} from "lucide-react";
import StoreBadges from "@/components/ui/StoreBadges";
import Image from "next/image";

const APP_SCREENS = [
  {
    id: "home",
    name: "Beranda Utama",
    title: "Semua Kebutuhan Perjalanan dalam Satu Genggaman",
    desc: "Akses kilat ke layanan SEVA RIDE, SEVA CAR, hingga SEVA SEND. Cek saldo dompet dan promo harian secara instan.",
    image: "/images/app/app-home.jpg",
    badge: "SUPER-APP HUB",
  },
  {
    id: "fare",
    name: "Peta & Rute",
    title: "Peta Presisi & Tarif Tetap Transparan",
    desc: "Lihat titik penjemputan presisi, rute lalu lintas live, dan argo pasti tanpa khawatir kenaikan harga sepihak saat jam sibuk atau hujan lebat.",
    image: "/images/app/app-fare-map.jpg",
    badge: "LIVE GPS ROUTE",
  },
  {
    id: "chat",
    name: "Chat & Driver",
    title: "Komunikasi Lancar dengan Nomor Tersamar",
    desc: "Kirim pesan teks atau panggilan suara langsung ke driver dengan proteksi virtual number masking. Privasi nomor HP Anda terjaga 100%.",
    image: "/images/app/app-chat.jpg",
    badge: "PRIVACY MASKING",
  },
  {
    id: "wallet",
    name: "Dompet & Pembayaran",
    title: "Bebas Pilih Pembayaran Nontunai",
    desc: "Terhubung langsung dengan QRIS, GoPay, OVO, DANA, dan Kartu Debit. Simpan struk digital otomatis untuk klaim perjalanan kantor.",
    image: "/images/app/app-wallet.jpg",
    badge: "CASHLESS WALLET",
  },
  {
    id: "profile",
    name: "Profil & Keamanan",
    title: "Akses Cepat Fitur Keamanan & Bantuan",
    desc: "Kelola kontak darurat keluarga, fitur bagikan perjalanan langsung, riwayat perjalanan, dan reward poin SEVA Member.",
    image: "/images/app/app-profile.jpg",
    badge: "SAFETY CENTER",
  },
];

export default function AppDownload() {
  const [activeScreen, setActiveScreen] = useState(APP_SCREENS[0]);

  return (
    <section id="download" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Banner Card Wrapper */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#194cb0] via-[#225FD2] to-[#0d3480] text-white p-8 sm:p-14 overflow-hidden shadow-[0_30px_70px_-25px_rgba(34,95,210,0.5)]">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-300/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200 bg-white/10 backdrop-blur-md border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>UNDUH APLIKASI SEVA SEKARANG</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
                Pengalaman Ride-Hailing Paling Nyaman Ada di Saku Anda
              </h2>

              <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
                Unduh aplikasi SEVA sekarang untuk iOS dan Android. Nikmati potongan diskon pengguna baru hingga Rp 30.000 untuk perjalanan pertama Anda!
              </p>

              {/* Screen Feature Selector Pills */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase text-blue-200 tracking-wider mb-2.5">
                  Jelajahi Fitur Aplikasi:
                </div>
                <div className="flex flex-wrap gap-2">
                  {APP_SCREENS.map((screen) => {
                    const isActive = activeScreen.id === screen.id;
                    return (
                      <button
                        key={screen.id}
                        type="button"
                        onClick={() => setActiveScreen(screen)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-white text-[#225FD2] shadow-md font-bold"
                            : "bg-white/15 text-white hover:bg-white/25 border border-white/10"
                        }`}
                      >
                        {screen.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Screen Info Text */}
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-300 font-bold mb-1">
                  <span>{activeScreen.badge}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  {activeScreen.title}
                </h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  {activeScreen.desc}
                </p>
              </div>

              {/* Download Buttons & QR Code */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <StoreBadges size="lg" />
                </div>

                <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-white/20">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center text-slate-900 shadow-md">
                    <QrCode className="w-10 h-10" />
                  </div>
                  <div className="text-left text-xs">
                    <p className="font-bold text-white">Scan untuk Unduh</p>
                    <p className="text-[11px] text-blue-200">iOS &amp; Android</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Smartphone Screen Mockup Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[300px] sm:max-w-[330px] p-2 bg-slate-900/40 backdrop-blur-xl rounded-[44px] border-4 border-white/40 shadow-2xl">
                
                {/* Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-900 rounded-full z-30" />

                {/* Smartphone Display */}
                <div className="relative w-full aspect-[9/18.5] rounded-[36px] overflow-hidden bg-slate-900 shadow-inner">
                  <Image
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    fill
                    sizes="(max-width: 640px) 80vw, 320px"
                    className="object-cover object-top transition-opacity duration-300"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

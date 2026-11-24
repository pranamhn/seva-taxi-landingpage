"use client";

import { useState } from "react";
import {
  SparkleIcon as Sparkles,
  CheckCircleIcon as CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import StoreBadges from "@/components/ui/StoreBadges";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const SCREEN_IMAGES = [
  { id: "home", image: "/images/app/app-home.jpg", badge: "SUPER-APP HUB" },
  { id: "fare", image: "/images/app/app-fare-map.jpg", badge: "LIVE GPS ROUTE" },
  { id: "chat", image: "/images/app/app-chat.jpg", badge: "PRIVACY MASKING" },
  { id: "wallet", image: "/images/app/app-wallet.jpg", badge: "SEVA eWALLET" },
  { id: "profile", image: "/images/app/app-profile.jpg", badge: "SAFETY CENTER" },
] as const;

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    body: string;
    explore: string;
    tabsLabel: string;
    screens: { name: string; title: string; desc: string }[];
    trustChecks: string[];
    doodle: string;
  }
> = {
  id: {
    eyebrow: "UNDUH APLIKASI SEVA SEKARANG",
    title: "Tinggalkan Cara Lama yang Bikin Was-was. Jalan Lebih Nyaman.",
    body: "Pesan SEVA Ride, SEVA Car, hingga kurir SEVA Send dalam hitungan detik. Tarif pasti di awal tanpa lonjakan, driver terverifikasi dengan bagi hasil 95%.",
    explore: "Fitur Unggulan Aplikasi",
    tabsLabel: "Fitur aplikasi SEVA",
    screens: [
      {
        name: "Beranda",
        title: "Semua Kebutuhan Mobilitas dalam Satu Sentuhan",
        desc: "Akses kilat ke SEVA RIDE, SEVA CAR, hingga SEVA SEND. Cek saldo eWallet dan promo harian secara instan.",
      },
      {
        name: "Peta & Rute",
        title: "Peta Presisi & Tarif Tetap Transparan",
        desc: "Titik penjemputan akurat hingga nomor gerbang atau lobi gedung. Argo flat tanpa lonjakan sepihak saat hujan deras.",
      },
      {
        name: "Chat & Masking",
        title: "Komunikasi Lancar dengan Nomor Tersamar",
        desc: "Kirim pesan teks atau telepon langsung ke driver dengan proteksi virtual number. Privasi nomor HP Anda 100% terlindungi.",
      },
      {
        name: "Dompet Cashless",
        title: "Pembayaran Praktis via eWallet & QRIS",
        desc: "Bayar otomatis tanpa repot uang kembalian. Struk digital tersimpan rapi untuk kebutuhan reimbursement kantor.",
      },
      {
        name: "Pusat Keamanan",
        title: "Akses Cepat Fitur SOS & Bantuan 24 Jam",
        desc: "Satu ketukan darurat SOS 112, fitur bagikan perjalanan live ke keluarga, serta customer care responsif.",
      },
    ],
    trustChecks: [
      "Tarif Pasti Tanpa Lonjakan Saat Hujan",
      "Mitra Pengemudi Terima 95% Bagi Hasil",
      "Perlindungan Asuransi Penumpang Resmi",
      "Bebas Biaya Cancel 5 Menit Pertama",
    ],
    doodle: "⚡ Unduh sekarang & rasakan bedanya!",
  },
  en: {
    eyebrow: "GET THE SEVA APP",
    title: "Leave Stress Behind. Commute with Total Confidence.",
    body: "Book SEVA Ride, SEVA Car, or instant courier delivery in seconds. Exact fixed fares upfront with zero rush hour surge, backed by verified drivers keeping 95% payout.",
    explore: "App Highlights",
    tabsLabel: "SEVA app features",
    screens: [
      {
        name: "Home",
        title: "Every Mobility Need, in One Clean App",
        desc: "Quick access to SEVA RIDE, SEVA CAR, and SEVA SEND. Check your wallet balance and daily promo discounts instantly.",
      },
      {
        name: "Map & Route",
        title: "Precise Map Tracking & Upfront Fixed Fare",
        desc: "Accurate pickup down to your exact gate or lobby. Zero surge pricing shocks during rush hour or heavy thunderstorms.",
      },
      {
        name: "Chat & Masking",
        title: "Seamless Chat with Virtual Phone Masking",
        desc: "Call or message your driver without exposing your real phone number. 100% privacy-protected communications.",
      },
      {
        name: "Cashless Wallet",
        title: "Effortless Payment with eWallet & QRIS",
        desc: "Pay automatically with zero change hassle. Digital receipts saved instantly for business travel expense reports.",
      },
      {
        name: "Safety Center",
        title: "Instant 112 SOS & 24/7 Support Hotline",
        desc: "One-tap emergency call to 112, live trip route sharing to your family, and 24/7 responsive customer assistance.",
      },
    ],
    trustChecks: [
      "Zero Surge Pricing in Rain or Rush Hour",
      "Drivers Keep 95% of Fares (5% Platform Fee)",
      "Official Passenger Insurance Protection",
      "Free Cancellation in the First 5 Minutes",
    ],
    doodle: "⚡ Download now & experience the difference!",
  },
};

export default function AppDownload({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = { ...SCREEN_IMAGES[activeIndex], ...t.screens[activeIndex] };

  return (
    <section id="download" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden transition-colors">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Radiant Closing Banner Box (Deeportal Style) */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#123A8C] via-[#225FD2] to-[#194CB0] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_30px_70px_-25px_rgba(34,95,210,0.55)]">
          
          {/* Concentric Ambient Rings */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-72 -top-72 h-[640px] w-[640px] rounded-full border border-white/5" />
          
          {/* Radial Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-300/15 blur-3xl pointer-events-none" />

          {/* Hand-drawn Doodle Note on Top Left */}
          <div className="hidden sm:block absolute top-6 right-8 v11-hand text-amber-200 text-[22px] rotate-[3deg] pointer-events-none select-none">
            <span>{t.doodle}</span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-200 bg-white/10 backdrop-blur-md border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>{t.eyebrow}</span>
              </div>

              <h2 className="v11-h text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.08] tracking-tight">
                {t.title}
              </h2>

              <p className="text-base sm:text-lg text-blue-100 max-w-xl leading-relaxed font-normal">
                {t.body}
              </p>

              {/* Feature Screen Selector Tabs */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase text-blue-200 tracking-wider mb-2.5">
                  {t.explore}
                </div>
                <div
                  role="tablist"
                  aria-label={t.tabsLabel}
                  className="inline-flex max-w-full items-center gap-1.5 overflow-x-auto no-scrollbar rounded-2xl border border-white/20 bg-white/10 p-1.5"
                >
                  {SCREEN_IMAGES.map((screen, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <button
                        key={screen.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveIndex(i)}
                        className={`shrink-0 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? "bg-white text-[#225FD2] shadow-md"
                            : "text-white/80 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        {t.screens[i].name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Screen Feature Glass Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-2 text-[11px] text-cyan-300 font-bold mb-1 font-mono">
                  <span>{activeScreen.badge}</span>
                </div>
                <h3 className="v11-h text-base sm:text-lg font-bold text-white mb-1">
                  {activeScreen.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-blue-100 leading-relaxed">
                  {activeScreen.desc}
                </p>
              </div>

              {/* Store Download Badges */}
              <div className="pt-3">
                <StoreBadges size="lg" locale={locale} />
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-blue-100 font-medium">
                {t.trustChecks.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" weight="fill" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: App Screen Showcase Card (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[290px] sm:max-w-[330px] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-2 border-white/20 bg-slate-900 transition-all duration-300 hover:scale-[1.02] hover:border-white/35">
                {/* Showcase Screen Graphic (No double phone bezel) */}
                <div className="relative w-full aspect-[473/1024]">
                  <Image
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    fill
                    sizes="(max-width: 640px) 80vw, 330px"
                    className="object-cover object-top transition-opacity duration-300"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

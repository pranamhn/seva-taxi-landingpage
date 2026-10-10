"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Car,
  Bike,
  Package,
  MapPin,
  Navigation,
  ArrowRight,
  Download,
  Sparkles,
  Clock,
  Wallet,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";

// Popular commute route presets in Jabodetabek
const RIDE_PRESETS = [
  {
    name: "Stasiun Gambir ➔ SCBD",
    distance: 8.5,
    pickup: "Stasiun Gambir, Jakarta Pusat",
    dest: "SCBD Sudirman, Jakarta Selatan",
  },
  {
    name: "Bandara CGK ➔ Thamrin",
    distance: 31.4,
    pickup: "Terminal 3 Bandara Soekarno-Hatta (CGK)",
    dest: "Grand Indonesia / Bundaran HI, Thamrin",
  },
  {
    name: "Stasiun KCIC Whoosh ➔ Kuningan",
    distance: 14.2,
    pickup: "Stasiun Kereta Cepat Halim (KCIC)",
    dest: "Mega Kuningan, Jakarta Selatan",
  },
  {
    name: "BSD City ➔ Senayan",
    distance: 26.8,
    pickup: "The Breeze BSD City, Tangsel",
    dest: "Gelora Bung Karno (GBK), Senayan",
  },
];

// Ride-hailing vehicle categories: SEVA RIDE, SEVA CAR, SEVA SEND, SEVA FOOD (Soon)
const RIDE_CATEGORIES = [
  {
    id: "ride",
    icon: Bike,
    name: "SEVA RIDE",
    badge: "Hemat",
    baseFare: 8000,
    perKm: 2500,
    eta: "~2 mnt",
  },
  {
    id: "car",
    icon: Car,
    name: "SEVA CAR",
    badge: "Populer",
    baseFare: 9500,
    perKm: 6200,
    eta: "~3 mnt",
  },
  {
    id: "send",
    icon: Package,
    name: "SEVA SEND",
    badge: "Instan",
    baseFare: 10000,
    perKm: 3000,
    eta: "~5 mnt",
  },
  {
    id: "food",
    icon: UtensilsCrossed,
    name: "SEVA FOOD",
    badge: "Soon",
    baseFare: 10000,
    perKm: 2000,
    eta: "Segera",
  },
];



export default function Hero() {
  const [activeCategory, setActiveCategory] = useState("ride");
  const [pickup, setPickup] = useState(RIDE_PRESETS[0].pickup);
  const [dest, setDest] = useState(RIDE_PRESETS[0].dest);
  const [distance, setDistance] = useState(RIDE_PRESETS[0].distance);

  const selectedVehicle = RIDE_CATEGORIES.find((c) => c.id === activeCategory) || RIDE_CATEGORIES[0];
  const calculatedFare = selectedVehicle.baseFare + Math.round(distance * selectedVehicle.perKm) + 1000;

  const handleSelectPreset = (preset: typeof RIDE_PRESETS[0]) => {
    setPickup(preset.pickup);
    setDest(preset.dest);
    setDistance(preset.distance);
  };

  return (
    <section id="hero" className="relative isolate w-full min-h-[calc(100vh-68px)] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-white">
      {/* Sky Blue Highway Ambient Background with Soft Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-bg.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-95"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/35 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-4 sm:px-6 my-auto">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, and Clean Quick Ride Estimator */}
          <div className="text-left space-y-4 sm:space-y-5 animate-hero-fade">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-blue-500/10 border border-blue-500/20 text-[#225FD2] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#225FD2]" />
              <span>Platform Ride-Hailing &amp; Taksi Terpercaya di Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-slate-900 leading-[1.14]">
              Perjalanan Nyaman,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
                Cepat &amp; Aman
              </span>{" "}
              dengan Tarif Transparan
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-slate-600 max-w-xl leading-relaxed">
              Pesan SEVA RIDE, SEVA CAR, kirim barang dengan SEVA SEND, serta segera nikmati pesan antar SEVA FOOD. Tarif pasti di awal, tanpa lonjakan liar.
            </p>

            {/* Clean Quick Ride Booking Widget */}
            <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_-20px_rgba(34,95,210,0.18)] space-y-3.5">
              
              {/* Category Switcher Tabs: SEVA RIDE, SEVA CAR, SEVA SEND, SEVA FOOD */}
              <div className="grid grid-cols-4 gap-1 sm:gap-1.5 bg-slate-100/80 p-1 rounded-2xl">
                {RIDE_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      aria-pressed={isActive}
                      aria-label={cat.badge === "Soon" ? `${cat.name} (segera hadir)` : cat.name}
                      className={`flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 sm:px-1.5 rounded-xl text-[11px] sm:text-xs transition-all duration-200 ${
                        isActive
                          ? "bg-white text-[#225FD2] shadow-xs border border-slate-200/80 font-bold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/60 font-semibold"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-[#225FD2]" : "text-slate-500"}`} />
                      <span className="truncate">
                        <span className="hidden sm:inline">SEVA </span>
                        {cat.name.replace(/^SEVA\s+/, "")}
                      </span>
                      {cat.badge === "Soon" && (
                        <>
                          <span className="sm:hidden w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden="true" />
                          <span className="hidden sm:inline text-[9px] px-1.5 py-0.2 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                            Soon
                          </span>
                        </>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Commuter Route Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
                <span className="text-slate-400 font-medium shrink-0">Rute:</span>
                {RIDE_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className={`px-2.5 py-1 rounded-full border transition-all whitespace-nowrap shrink-0 ${
                      pickup === preset.pickup
                        ? "bg-blue-50 border-blue-300 text-[#225FD2] font-bold shadow-2xs"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>

              {/* Pickup & Destination Inputs with Connector Line */}
              <div className="space-y-2 relative">
                <div className="relative flex items-center">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#225FD2] flex items-center justify-center absolute left-2.5 pointer-events-none">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    value={pickup}
                    aria-label="Lokasi penjemputan"
                    autoComplete="off"
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder={
                      activeCategory === "food"
                        ? "Cari resto atau kuliner favorit..."
                        : activeCategory === "send"
                        ? "Alamat penjemputan barang / paket..."
                        : "Lokasi penjemputan..."
                    }
                    className="w-full pl-10 pr-3 py-2 text-xs font-medium rounded-xl bg-slate-50/90 border border-slate-200 text-slate-800 focus:bg-white focus:outline-none focus:border-[#225FD2] transition-colors"
                  />
                </div>

                <div className="relative flex items-center">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center absolute left-2.5 pointer-events-none">
                    <Navigation className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    value={dest}
                    aria-label="Tujuan perjalanan"
                    autoComplete="off"
                    onChange={(e) => setDest(e.target.value)}
                    placeholder={
                      activeCategory === "food"
                        ? "Alamat pengantaran makanan..."
                        : activeCategory === "send"
                        ? "Alamat tujuan pengiriman..."
                        : "Tujuan perjalanan..."
                    }
                    className="w-full pl-10 pr-3 py-2 text-xs font-medium rounded-xl bg-slate-50/90 border border-slate-200 text-slate-800 focus:bg-white focus:outline-none focus:border-[#225FD2] transition-colors"
                  />
                </div>
              </div>

              {/* Price Calculation & Action Trigger */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Clock className="w-3 h-3 text-[#225FD2]" />
                    <span>Jemput: {selectedVehicle.eta}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-semibold">
                      {activeCategory === "food" ? "Segera Hadir" : "Tarif Pasti"}
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono tracking-tight mt-0.5">
                    {activeCategory === "food" ? "Coming Soon" : `Rp ${calculatedFare.toLocaleString("id-ID")}`}
                  </div>
                </div>

                <Link
                  href="#download"
                  className="h-9 px-4.5 rounded-xl bg-[#225FD2] hover:bg-[#194cb0] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02]"
                >
                  <span>
                    {activeCategory === "food"
                      ? "Nantikan di SEVA"
                      : activeCategory === "send"
                      ? "Kirim Sekarang"
                      : "Pesan Sekarang"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

            {/* Trust Badges Bar */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 pt-1">
              <div className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5 text-[#225FD2]" />
                <span className="font-bold text-slate-900">10K+</span>
                <span>Unduhan Aplikasi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Smartphone Mockup with Real Passenger App Screen from User */}
          <div className="relative flex justify-center items-center my-auto mt-6 lg:mt-0">
            
            {/* Ambient Radial Blue Glow */}
            <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-blue-500/18 blur-3xl pointer-events-none -z-10" />

            {/* Floating e-Wallet Card (Top Left) — Ultra-Glossy Liquid Glass */}
            <div className="absolute top-6 sm:top-10 -left-3 sm:-left-8 lg:-left-12 z-30 flex items-center gap-3 rounded-2xl sm:rounded-3xl px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_18px_40px_-8px_rgba(34,95,210,0.22),0_4px_16px_rgba(0,0,0,0.06)] select-none animate-float-slow">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-2 bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                <Wallet className="w-5 h-5 text-[#225FD2]" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
                </span>
              </div>
              <div>
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight leading-tight">
                  SEVA e-Wallet
                </p>
                <p className="text-[10px] sm:text-xs font-semibold text-emerald-600 mt-0.5">
                  Rp 384.000 • Cashless
                </p>
              </div>
            </div>

            {/* Realistic Titanium Phone Chassis with the User Uploaded Screen */}
            <div className="relative w-full max-w-[285px] sm:max-w-[320px] md:max-w-[335px] p-2 sm:p-2.5 bg-gradient-to-b from-slate-700 via-slate-900 to-black rounded-[46px] shadow-[0_25px_60px_-15px_rgba(0,66,196,0.28),0_0_0_1px_rgba(255,255,255,0.2)_inset] border border-slate-700/80 z-10 transition-transform duration-300 hover:scale-[1.01]">
              
              {/* Dynamic Notch */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 pointer-events-none flex items-center justify-end pr-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                <div className="w-1 h-1 rounded-full bg-blue-900" />
              </div>

              {/* Phone Screen — screenshot sudah di-crop (tanpa bezel & status bar bawaan);
                  strip atas berwarna sama dengan header app agar notch tidak menimpa konten */}
              <div className="relative w-full rounded-[38px] overflow-hidden bg-[#1C408A] pt-7 shadow-inner">
                <Image
                  src="/images/app/app-home-screen.webp"
                  alt="SEVA Ride-Hailing App - Pesanan Selesai & Promo"
                  width={446}
                  height={967}
                  sizes="(max-width: 640px) 265px, 315px"
                  priority
                  className="block w-full h-auto select-none"
                  draggable={false}
                />
              </div>

            </div>

            {/* Floating Verified Ride Card (Bottom Right) — Ultra-Glossy Liquid Glass */}
            <div className="absolute bottom-6 sm:bottom-10 -right-2 sm:-right-6 lg:-right-8 z-30 flex items-center gap-3 rounded-2xl sm:rounded-3xl px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_18px_40px_-8px_rgba(16,185,129,0.25),0_4px_16px_rgba(0,0,0,0.06)] select-none animate-float-slow">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-2 bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                <Image src="/icons/vehicle.webp" alt="Ride Hailing" width={40} height={40} className="w-full h-full object-contain" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#225FD2] border border-white"></span>
                </span>
              </div>
              <div>
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight leading-tight">
                  Ride Hailing SEVA
                </p>
                <p className="text-[10px] sm:text-xs font-semibold text-emerald-600 mt-0.5">
                  Pembayaran Terverifikasi
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

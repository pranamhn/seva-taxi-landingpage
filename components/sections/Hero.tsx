"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Car,
  Bike,
  Package,
  ArrowRight,
  ArrowUpDown,
  Download,
  Sparkles,
  Star,
  Clock,
  Wallet,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";
import { FARES } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

type Route = { name?: string; distance: number; pickup: string; dest: string };

// Kategori yang bisa dipesan sekarang; tarif diambil dari FARES agar sama dengan halaman layanan & FAQ
const RIDE_CATEGORIES = [
  { id: "ride", icon: Bike, name: "SEVA RIDE", baseFare: FARES.ride.base, perKm: FARES.ride.perKm },
  { id: "car", icon: Car, name: "SEVA CAR", baseFare: FARES.car.base, perKm: FARES.car.perKm },
  { id: "send", icon: Package, name: "SEVA SEND", baseFare: FARES.send.base, perKm: FARES.send.perKm },
] as const;

type CategoryId = (typeof RIDE_CATEGORIES)[number]["id"];

const COPY: Record<
  Locale,
  {
    numberLocale: string;
    badgeShort: string;
    badgeLong: string;
    h1Lead: string;
    h1Accent: string;
    h1Tail: string;
    subtitle: string;
    categories: Record<CategoryId, { eta: string }>;
    defaultRoute: Route;
    presets: Route[];
    pickupLabel: string;
    destLabel: string;
    pickupAria: string;
    destAria: string;
    pickupPlaceholder: string;
    pickupPlaceholderSend: string;
    destPlaceholder: string;
    destPlaceholderSend: string;
    swap: string;
    pickupEta: string;
    fixedFare: string;
    bookNow: string;
    sendNow: string;
    downloads: string;
    rating: string;
    mockupAlt: string;
    cardTitle: string;
    cardSubtitle: string;
  }
> = {
  id: {
    numberLocale: "id-ID",
    badgeShort: "Ride-Hailing & Taksi Online",
    badgeLong: "Platform Ride-Hailing & Taksi Online Jabodetabek",
    h1Lead: "Perjalanan Nyaman,",
    h1Accent: "Cepat & Aman",
    h1Tail: "dengan Tarif Transparan",
    subtitle: "Pesan SEVA RIDE, SEVA CAR, atau kirim barang dengan SEVA SEND. Tarif pasti di awal, tanpa lonjakan liar.",
    categories: {
      ride: { eta: "~1–3 mnt" },
      car: { eta: "~3–5 mnt" },
      send: { eta: "~2–4 mnt" },
    },
    defaultRoute: { distance: 8.5, pickup: "Stasiun Gambir, Jakarta Pusat", dest: "SCBD Sudirman, Jakarta Selatan" },
    presets: [
      { name: "CGK ➔ Thamrin", distance: 31.4, pickup: "Terminal 3 Bandara Soekarno-Hatta (CGK)", dest: "Grand Indonesia / Bundaran HI, Thamrin" },
      { name: "Whoosh ➔ Kuningan", distance: 14.2, pickup: "Stasiun Kereta Cepat Halim (KCIC)", dest: "Mega Kuningan, Jakarta Selatan" },
      { name: "BSD ➔ Senayan", distance: 26.8, pickup: "The Breeze BSD City, Tangsel", dest: "Gelora Bung Karno (GBK), Senayan" },
    ],
    pickupLabel: "Titik Jemput",
    destLabel: "Tujuan Pengantaran",
    pickupAria: "Lokasi penjemputan",
    destAria: "Tujuan perjalanan",
    pickupPlaceholder: "Lokasi penjemputan...",
    pickupPlaceholderSend: "Alamat penjemputan barang / paket...",
    destPlaceholder: "Tujuan perjalanan...",
    destPlaceholderSend: "Alamat tujuan pengiriman...",
    swap: "Tukar Titik Jemput dan Tujuan",
    pickupEta: "Jemput",
    fixedFare: "Tarif Pasti di Awal",
    bookNow: "Pesan Sekarang",
    sendNow: "Kirim Sekarang",
    downloads: "Unduhan Aplikasi",
    rating: "Rating",
    mockupAlt: "Aplikasi SEVA Ride Hailing - Beranda Utama",
    cardTitle: "Ride Hailing SEVA",
    cardSubtitle: "Pembayaran Terverifikasi",
  },
  en: {
    numberLocale: "en-US",
    badgeShort: "Ride-Hailing & Online Taxi",
    badgeLong: "Ride-Hailing & Online Taxi in Greater Jakarta",
    h1Lead: "Comfortable,",
    h1Accent: "Fast & Safe Rides",
    h1Tail: "with Upfront Fares",
    subtitle: "Book SEVA RIDE or SEVA CAR, or send a package with SEVA SEND. Your fare is fixed before you book, with no surge pricing.",
    categories: {
      ride: { eta: "~1–3 min" },
      car: { eta: "~3–5 min" },
      send: { eta: "~2–4 min" },
    },
    defaultRoute: { distance: 8.5, pickup: "Gambir Station, Central Jakarta", dest: "SCBD Sudirman, South Jakarta" },
    presets: [
      { name: "CGK ➔ Thamrin", distance: 31.4, pickup: "Soekarno-Hatta Airport Terminal 3 (CGK)", dest: "Grand Indonesia / Bundaran HI, Thamrin" },
      { name: "Whoosh ➔ Kuningan", distance: 14.2, pickup: "Halim High-Speed Rail Station (Whoosh)", dest: "Mega Kuningan, South Jakarta" },
      { name: "BSD ➔ Senayan", distance: 26.8, pickup: "The Breeze BSD City, South Tangerang", dest: "Gelora Bung Karno (GBK), Senayan" },
    ],
    pickupLabel: "Pickup",
    destLabel: "Drop-off",
    pickupAria: "Pickup location",
    destAria: "Destination",
    pickupPlaceholder: "Pickup location...",
    pickupPlaceholderSend: "Package pickup address...",
    destPlaceholder: "Where to?",
    destPlaceholderSend: "Delivery address...",
    swap: "Swap pickup and destination",
    pickupEta: "Pickup",
    fixedFare: "Upfront Fare",
    bookNow: "Book Now",
    sendNow: "Send Now",
    downloads: "App Downloads",
    rating: "Rating",
    mockupAlt: "SEVA ride-hailing app - home screen",
    cardTitle: "SEVA Ride Hailing",
    cardSubtitle: "Verified Payments",
  },
};

export default function Hero({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  const [activeCategory, setActiveCategory] = useState<CategoryId>("ride");
  const [pickup, setPickup] = useState(t.defaultRoute.pickup);
  const [dest, setDest] = useState(t.defaultRoute.dest);
  const [distance, setDistance] = useState(t.defaultRoute.distance);

  const selectedVehicle = RIDE_CATEGORIES.find((c) => c.id === activeCategory) || RIDE_CATEGORIES[0];
  const calculatedFare = selectedVehicle.baseFare + Math.round(distance * selectedVehicle.perKm);

  const handleSelectPreset = (preset: Route) => {
    setPickup(preset.pickup);
    setDest(preset.dest);
    setDistance(preset.distance);
  };

  return (
    <section id="hero" className="relative isolate w-full min-h-[100svh] flex items-center justify-center pt-[84px] sm:pt-[88px] pb-6 sm:pb-8 overflow-hidden bg-white">
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

      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-4 sm:px-6">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, and Clean Quick Ride Estimator */}
          <div className="text-left space-y-3 sm:space-y-4 lg:space-y-[clamp(8px,1.6vh,16px)] w-full animate-hero-fade">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-blue-500/10 border border-blue-500/20 text-[#225FD2] shadow-2xs max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-[#225FD2] shrink-0" />
              <span className="sm:hidden">{t.badgeShort}</span>
              <span className="hidden sm:inline">{t.badgeLong}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[clamp(28px,min(5.4vh,3.3vw),42px)] font-extrabold tracking-tight text-slate-900 leading-[1.14] break-words">
              {t.h1Lead}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
                {t.h1Accent}
              </span>{" "}
              <br className="hidden lg:block" />
              {t.h1Tail}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-slate-600 max-w-xl leading-relaxed">
              {t.subtitle}
            </p>

            {/* Premium Ride Booking Simulator Card */}
            <div className="w-full max-w-[540px] bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_-15px_rgba(34,95,210,0.18)] space-y-3.5 transition-all">
              
              {/* Category Switcher Tabs: SEVA RIDE, SEVA CAR, SEVA SEND */}
              <div className="grid grid-cols-3 gap-1 sm:gap-1.5 bg-slate-100/90 p-1 sm:p-1.5 rounded-2xl border border-slate-200/60">
                {RIDE_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      aria-pressed={isActive}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 relative py-2 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-white text-[#225FD2] shadow-sm border border-slate-200/90 font-bold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/60 font-semibold"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-[#225FD2]" : "text-slate-500"}`} />
                      <span className="truncate">
                        <span className="hidden sm:inline">SEVA </span>
                        {cat.name.replace(/^SEVA\s+/, "")}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Connected Route Selector (Unified Pickup & Destination Box) */}
              <div className="relative rounded-2xl bg-slate-50/90 border border-slate-200/90 p-2.5 sm:p-3 transition-colors focus-within:border-blue-400 focus-within:bg-white focus-within:shadow-sm">
                {/* Left Route Indicator (Pickup Dot -> Dashed Line -> Destination Marker) */}
                <div className="absolute left-3.5 top-[18px] bottom-[18px] flex flex-col items-center justify-between pointer-events-none">
                  {/* Pickup Dot */}
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[#225FD2] bg-white flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#225FD2]" />
                  </div>
                  {/* Dashed Connector Line */}
                  <div className="w-0 flex-1 my-1 border-l-2 border-dashed border-slate-300" />
                  {/* Destination Marker */}
                  <div className="w-2.5 h-2.5 rounded-xs bg-emerald-500 shadow-xs" />
                </div>

                {/* Input Fields */}
                <div className="pl-6 pr-10 space-y-1.5">
                  {/* Pickup Field */}
                  <div className="relative">
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider leading-none mb-0.5">
                      {t.pickupLabel}
                    </div>
                    <input
                      type="text"
                      value={pickup}
                      aria-label={t.pickupAria}
                      autoComplete="off"
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder={
                        activeCategory === "send" ? t.pickupPlaceholderSend : t.pickupPlaceholder
                      }
                      className="w-full text-xs sm:text-[13px] font-semibold text-slate-900 bg-transparent outline-none truncate placeholder:text-slate-400 placeholder:font-normal"
                    />
                  </div>

                  {/* Clean Divider */}
                  <div className="h-px bg-slate-200/80 my-1" />

                  {/* Destination Field */}
                  <div className="relative">
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider leading-none mb-0.5">
                      {t.destLabel}
                    </div>
                    <input
                      type="text"
                      value={dest}
                      aria-label={t.destAria}
                      autoComplete="off"
                      onChange={(e) => setDest(e.target.value)}
                      placeholder={
                        activeCategory === "send" ? t.destPlaceholderSend : t.destPlaceholder
                      }
                      className="w-full text-xs sm:text-[13px] font-semibold text-slate-900 bg-transparent outline-none truncate placeholder:text-slate-400 placeholder:font-normal"
                    />
                  </div>
                </div>

                {/* Swap Button */}
                <button
                  type="button"
                  onClick={() => {
                    const temp = pickup;
                    setPickup(dest);
                    setDest(temp);
                  }}
                  title={t.swap}
                  aria-label={t.swap}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-500 hover:text-[#225FD2] flex items-center justify-center transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ArrowUpDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Commuter Route Pills (Quick Suggestions) */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0">
                  Rute Cepat:
                </span>
                {t.presets.map((preset) => {
                  const isSelected = pickup === preset.pickup && dest === preset.dest;
                  return (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`px-2.5 py-1 rounded-lg border transition-all whitespace-nowrap shrink-0 text-xs cursor-pointer ${
                        isSelected
                          ? "bg-blue-50 border-blue-300 text-[#225FD2] font-bold shadow-2xs"
                          : "bg-slate-50/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      {preset.name}
                    </button>
                  );
                })}
              </div>

              {/* Price Calculation & Action Trigger */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#225FD2]" />
                      <span>{t.pickupEta}: {t.categories[selectedVehicle.id].eta}</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-semibold truncate">
                      {t.fixedFare}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                      Rp {calculatedFare.toLocaleString(t.numberLocale)}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      ({distance} km)
                    </span>
                  </div>
                </div>

                <Link
                  href="#download"
                  className="h-10 px-5 rounded-xl bg-gradient-to-r from-[#225FD2] to-[#184cb3] hover:from-[#1b53c7] hover:to-[#143f96] text-white text-xs sm:text-[13px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] shrink-0 w-full sm:w-auto"
                >
                  <span>
                    {activeCategory === "send" ? t.sendNow : t.bookNow}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 h-9 pl-1.5 pr-3 rounded-xl bg-white/85 backdrop-blur border border-slate-200/80 shadow-2xs text-xs">
                <span className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Download className="w-3.5 h-3.5 text-[#225FD2]" aria-hidden="true" />
                </span>
                <span className="font-bold text-slate-900">10K+</span>
                <span className="font-medium text-slate-600">{t.downloads}</span>
              </div>
              <div className="inline-flex items-center gap-2 h-9 pl-1.5 pr-3 rounded-xl bg-white/85 backdrop-blur border border-slate-200/80 shadow-2xs text-xs">
                <span className="w-6 h-6 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" aria-hidden="true" />
                </span>
                <span className="font-bold text-slate-900">4.8/5.0</span>
                <span className="font-medium text-slate-500">{t.rating}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Smartphone Mockup with Real Passenger App Screen from User */}
          <div className="relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Ambient Radial Blue Glow */}
            <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-blue-500/18 blur-3xl pointer-events-none -z-10" />

            {/* Floating e-Wallet Card (Top Left) — Glossy Liquid Glass */}
            <div className="absolute top-6 sm:top-10 left-0 z-30 flex items-center gap-3 overflow-hidden rounded-2xl sm:rounded-[22px] pl-2.5 pr-4 py-2.5 sm:pl-3 sm:pr-5 sm:py-3 bg-gradient-to-br from-white/95 via-white/85 to-blue-100/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 ring-1 ring-blue-900/5 shadow-[0_24px_48px_-16px_rgba(34,95,210,0.45),0_4px_12px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] select-none animate-float-slow">
              {/* Top gloss highlight */}
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/70 to-transparent" />
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#5b94ff] via-[#225FD2] to-[#143f96] shadow-[0_8px_16px_-6px_rgba(34,95,210,0.75),inset_0_1px_0_rgba(255,255,255,0.45)] flex items-center justify-center shrink-0">
                <Wallet className="w-5 h-5 text-white drop-shadow-sm" aria-hidden="true" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
                </span>
              </div>
              <div className="relative">
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight leading-tight">
                  SEVA eWallet
                </p>
                <p className="mt-1 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700 tabular-nums">Rp 384.000</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] leading-none font-bold text-emerald-700">
                    Cashless
                  </span>
                </p>
              </div>
            </div>

            {/* Realistic Smartphone Mockup — Beranda SEVA Ride Hailing */}
            <div className="relative w-full max-w-[285px] sm:max-w-[320px] md:max-w-[335px] lg:max-w-none lg:w-auto lg:shrink-0 lg:aspect-[427/860] lg:h-[min(660px,calc(100svh-215px))] z-10 transition-transform duration-300 hover:scale-[1.01] drop-shadow-[0_25px_50px_rgba(0,66,196,0.28)]">
              <Image
                src="/images/app/beranda-seva-ride-hailing.webp"
                alt={t.mockupAlt}
                width={427}
                height={860}
                sizes="(max-width: 640px) 285px, 320px"
                priority
                className="block w-full h-auto lg:h-full object-contain select-none"
                draggable={false}
              />
            </div>

            {/* Floating Verified Ride Card (Bottom Right) — Glossy Liquid Glass */}
            <div className="absolute bottom-6 sm:bottom-10 right-0 z-30 flex items-center gap-3 overflow-hidden rounded-2xl sm:rounded-[22px] pl-2.5 pr-4 py-2.5 sm:pl-3 sm:pr-5 sm:py-3 bg-gradient-to-br from-white/95 via-white/85 to-emerald-100/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 ring-1 ring-emerald-900/5 shadow-[0_24px_48px_-16px_rgba(16,185,129,0.45),0_4px_12px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] select-none animate-float-slow">
              {/* Top gloss highlight */}
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/70 to-transparent" />
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-2 bg-gradient-to-br from-white to-emerald-100 border border-white shadow-[0_8px_16px_-6px_rgba(16,185,129,0.55),inset_0_1px_0_rgba(255,255,255,0.9)] flex items-center justify-center shrink-0">
                <Image src="/icons/vehicle.webp" alt="Ride Hailing" width={40} height={40} className="w-full h-full object-contain" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#225FD2] border border-white"></span>
                </span>
              </div>
              <div className="relative">
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight leading-tight">
                  {t.cardTitle}
                </p>
                <p className="mt-1 flex items-center gap-1 whitespace-nowrap text-[10px] sm:text-xs font-semibold text-emerald-700">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                  {t.cardSubtitle}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

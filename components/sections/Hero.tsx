"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CarIcon as Car,
  MotorcycleIcon as Bike,
  PackageIcon as Package,
  ArrowRightIcon as ArrowRight,
  ArrowsDownUpIcon as ArrowUpDown,
  DownloadSimpleIcon as Download,
  StarIcon as Star,
  ClockIcon as Clock,
  WalletIcon as Wallet,
  SealCheckIcon as BadgeCheck,
  ShieldCheckIcon as ShieldCheck,
  CheckCircleIcon as CheckCircle,
  MapPinIcon as MapPin,
  SparkleIcon as Sparkles,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { FARES } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

type Route = { name?: string; distance: number; pickup: string; dest: string };

const RIDE_CATEGORIES = [
  { id: "ride", icon: Bike, name: "SEVA RIDE", label: "Ride (Motor)", baseFare: FARES.ride.base, perKm: FARES.ride.perKm, eta: "~1–3 mnt", badge: "Hemat" },
  { id: "car", icon: Car, name: "SEVA CAR", label: "Car (Mobil)", baseFare: FARES.car.base, perKm: FARES.car.perKm, eta: "~3–5 mnt", badge: "Populer" },
  { id: "send", icon: Package, name: "SEVA SEND", label: "Send (Kurir)", baseFare: FARES.send.base, perKm: FARES.send.perKm, eta: "~2–4 mnt", badge: "Kilat" },
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
    defaultRoute: Route;
    presets: Route[];
    pickupLabel: string;
    destLabel: string;
    pickupPlaceholder: string;
    pickupPlaceholderSend: string;
    destPlaceholder: string;
    destPlaceholderSend: string;
    swap: string;
    fixedFare: string;
    bookNow: string;
    sendNow: string;
    rating: string;
    mockupAlt: string;
    doodleNote: string;
    trustPills: string[];
  }
> = {
  id: {
    numberLocale: "id-ID",
    badgeShort: "Ride-Hailing & Taksi Online",
    badgeLong: "Platform Mobilitas & Taksi Online Jabodetabek",
    h1Lead: "Perjalanan Nyaman, Cepat & Aman.",
    h1Accent: "Tarif Pasti di Awal",
    h1Tail: "Tanpa Lonjakan Liar.",
    subtitle: "Pesan SEVA RIDE, SEVA CAR, atau kirim barang kilat via SEVA SEND. Tarif transparan sejak sebelum Anda klik pesan — bebas was-was saat hujan dan jam sibuk.",
    defaultRoute: { distance: 8.5, pickup: "Stasiun Gambir, Jakarta Pusat", dest: "SCBD Sudirman, Jakarta Selatan" },
    presets: [
      { name: "CGK ➔ Thamrin", distance: 31.4, pickup: "Terminal 3 Bandara Soekarno-Hatta (CGK)", dest: "Grand Indonesia / Bundaran HI, Thamrin" },
      { name: "Whoosh ➔ Kuningan", distance: 14.2, pickup: "Stasiun Kereta Cepat Halim (KCIC)", dest: "Mega Kuningan, Jakarta Selatan" },
      { name: "BSD ➔ Senayan", distance: 26.8, pickup: "The Breeze BSD City, Tangsel", dest: "Gelora Bung Karno (GBK), Senayan" },
    ],
    pickupLabel: "Titik Jemput",
    destLabel: "Tujuan Pengantaran",
    pickupPlaceholder: "Lokasi penjemputan...",
    pickupPlaceholderSend: "Alamat penjemputan barang / paket...",
    destPlaceholder: "Tujuan perjalanan...",
    destPlaceholderSend: "Alamat tujuan pengiriman...",
    swap: "Tukar Titik Jemput dan Tujuan",
    fixedFare: "Tarif Pasti Transparan",
    bookNow: "Pesan Sekarang",
    sendNow: "Kirim Sekarang",
    rating: "4.9/5 dari 120k+ Ulasan",
    mockupAlt: "Aplikasi SEVA Ride Hailing - Beranda Utama",
    doodleNote: "⚡ Estimasi tarif real-time dalam 3 detik!",
    trustPills: [
      "Tanpa Lonjakan Jam Sibuk & Hujan",
      "Bagi Hasil Mitra 95% (Komisi 5%)",
      "Driver Terverifikasi SKCK & SIM",
      "Perlindungan Asuransi Resmi",
    ],
  },
  en: {
    numberLocale: "en-US",
    badgeShort: "Ride-Hailing & Online Taxi",
    badgeLong: "Mobility & Online Taxi Platform in Greater Jakarta",
    h1Lead: "Comfortable, Fast & Safe Rides.",
    h1Accent: "Upfront Fixed Fares",
    h1Tail: "with Zero Surge.",
    subtitle: "Book SEVA RIDE, SEVA CAR, or on-demand parcel dispatch via SEVA SEND. Exact fare locked before booking — no surge shock during rush hour or rain.",
    defaultRoute: { distance: 8.5, pickup: "Gambir Station, Central Jakarta", dest: "SCBD Sudirman, South Jakarta" },
    presets: [
      { name: "CGK ➔ Thamrin", distance: 31.4, pickup: "Soekarno-Hatta Airport Terminal 3 (CGK)", dest: "Grand Indonesia / Bundaran HI, Thamrin" },
      { name: "Whoosh ➔ Kuningan", distance: 14.2, pickup: "Halim High-Speed Rail Station (Whoosh)", dest: "Mega Kuningan, South Jakarta" },
      { name: "BSD ➔ Senayan", distance: 26.8, pickup: "The Breeze BSD City, South Tangerang", dest: "Gelora Bung Karno (GBK), Senayan" },
    ],
    pickupLabel: "Pickup",
    destLabel: "Drop-off",
    pickupPlaceholder: "Pickup location...",
    pickupPlaceholderSend: "Package pickup address...",
    destPlaceholder: "Where to?",
    destPlaceholderSend: "Delivery address...",
    swap: "Swap pickup and destination",
    fixedFare: "Upfront Fixed Fare",
    bookNow: "Book Now",
    sendNow: "Send Now",
    rating: "4.9/5 from 120k+ Reviews",
    mockupAlt: "SEVA ride-hailing app - home screen",
    doodleNote: "⚡ Real-time fare estimate in 3 seconds!",
    trustPills: [
      "No Surge Pricing in Rush Hour & Rain",
      "Drivers Keep 95% (5% Platform Fee)",
      "Police-Vetted & Verified Drivers",
      "Official Passenger Insurance",
    ],
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

  const handleSwap = () => {
    setPickup(dest);
    setDest(pickup);
  };

  return (
    <section id="hero" className="relative isolate w-full min-h-[100svh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden bg-[#fafbfc]">
      {/* Sky Blue Ambient Background with Clean Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-bg.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-90"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-[#fafbfc]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1260px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Punchy Bricolage Headline + Tactile 3D Estimator Card */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
            
            {/* Top Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/95 border border-blue-200/90 text-[#225FD2] text-xs font-bold shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#225FD2] animate-pulse" />
              <span>{t.badgeLong}</span>
            </div>

            {/* Punchy Bricolage Headline */}
            <h1 className="v11-h text-[2.35rem] sm:text-5xl lg:text-[3.4rem] text-slate-900 leading-[1.08] tracking-tight">
              {t.h1Lead}{" "}
              <span className="v11-mark text-[#225FD2]">
                {t.h1Accent}
              </span>{" "}
              <span className="block mt-1 sm:mt-1.5">{t.h1Tail}</span>
            </h1>

            {/* Subtitle with Stabilo Highlighter */}
            <p className="text-base sm:text-[17px] text-slate-600 max-w-xl leading-relaxed">
              {t.subtitle}
            </p>

            {/* Estimator Wrapper with Playful Hand-drawn Doodle Note */}
            <div className="relative w-full max-w-[580px] pt-4">
              
              {/* Handwritten Doodle Note (Desktop xl) pointing at simulator */}
              <div className="hidden sm:flex items-center gap-2 absolute -top-4 right-2 v11-hand text-[#225FD2] text-[21px] rotate-[2deg] pointer-events-none select-none">
                <span>{t.doodleNote}</span>
                <svg width="36" height="20" viewBox="0 0 36 20" className="shrink-0 text-[#225FD2] rotate-12" aria-hidden="true">
                  <path d="M4 4 C 14 12, 24 14, 32 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M24 8 L32 14 L24 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Tactile 3D Ride Estimator Simulator Card */}
              <div className="v11-card3d p-5 sm:p-6 shadow-xl space-y-4">
                
                {/* Header of Card: Category Switcher */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Pilih Layanan Armada
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Armada Siap Jemput
                  </span>
                </div>

                {/* Tactile Category Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80">
                  {RIDE_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={`v11-btn !min-h-[42px] px-2 py-1.5 text-xs transition-all cursor-pointer ${
                          isActive
                            ? "v11-btn-brand shadow-md"
                            : "v11-btn-ghost !text-slate-700 hover:!text-slate-900"
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Pickup & Destination Inputs with Swap */}
                <div className="space-y-2.5">
                  {/* Pickup Row */}
                  <div className="relative flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 bg-white focus-within:border-[#225FD2] focus-within:ring-2 focus-within:ring-blue-500/10 transition">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#225FD2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label htmlFor="hero-pickup" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {t.pickupLabel}
                      </label>
                      <input
                        id="hero-pickup"
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder={activeCategory === "send" ? t.pickupPlaceholderSend : t.pickupPlaceholder}
                        className="w-full text-xs sm:text-[13px] font-semibold text-slate-800 bg-transparent outline-none truncate"
                      />
                    </div>
                  </div>

                  {/* Swap Button Bar */}
                  <div className="flex items-center justify-center -my-1.5 relative z-10">
                    <button
                      type="button"
                      onClick={handleSwap}
                      className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#225FD2] hover:border-[#225FD2] text-[11px] font-bold shadow-2xs flex items-center gap-1 transition cursor-pointer"
                      title={t.swap}
                    >
                      <ArrowUpDown className="w-3 h-3" />
                      <span>Tukar Rute</span>
                    </button>
                  </div>

                  {/* Destination Row */}
                  <div className="relative flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 bg-white focus-within:border-[#225FD2] focus-within:ring-2 focus-within:ring-blue-500/10 transition">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label htmlFor="hero-dest" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {t.destLabel}
                      </label>
                      <input
                        id="hero-dest"
                        type="text"
                        value={dest}
                        onChange={(e) => setDest(e.target.value)}
                        placeholder={activeCategory === "send" ? t.destPlaceholderSend : t.destPlaceholder}
                        className="w-full text-xs sm:text-[13px] font-semibold text-slate-800 bg-transparent outline-none truncate"
                      />
                    </div>
                  </div>
                </div>

                {/* 1-Click Preset Route Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-400 mr-1">Rute Cepat:</span>
                  {t.presets.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer border ${
                        preset.pickup === pickup && preset.dest === dest
                          ? "bg-blue-50 text-[#225FD2] border-blue-300 font-bold"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>

                {/* Calculation Output & 3D CTA Bar */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-slate-50/70 p-3 sm:p-4 rounded-2xl">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500">{t.fixedFare}</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#225FD2] text-[10px] font-bold font-mono">
                        {distance.toFixed(1)} km • {selectedVehicle.eta}
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="v11-h text-2xl sm:text-3xl text-slate-900 font-bold">
                        Rp {calculatedFare.toLocaleString(t.numberLocale)}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-600">
                        (Tanpa lonjakan)
                      </span>
                    </div>
                  </div>

                  <a
                    href="#download"
                    className="v11-btn v11-btn-brand px-6 py-3 text-sm font-bold shadow-lg w-full sm:w-auto"
                  >
                    <span>{activeCategory === "send" ? t.sendNow : t.bookNow}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Micro Trust Indicators below the card */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                {t.trustPills.map((pill) => (
                  <div key={pill} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" weight="fill" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Right Column (5 cols): Phone Mockup with Tactile 3D Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Ambient Radiant Glow behind Phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

            {/* Floating Top Left Badge: eWallet Live Balance */}
            <div
              className="v11-float absolute -top-4 sm:top-2 -left-2 sm:-left-6 z-20 v11-card3d !p-3 sm:!p-3.5 shadow-xl flex items-center gap-3 select-none"
              style={{ "--r": "-3deg" } as React.CSSProperties}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D6FE8] to-[#194CB0] text-white flex items-center justify-center shadow-md shrink-0">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">SEVA eWallet</p>
                <p className="v11-h text-sm sm:text-base text-slate-900 font-bold font-mono">Rp 384.000</p>
                <div className="flex items-center gap-1 mt-0.5 text-[10px] text-emerald-600 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Cashless Instan</span>
                </div>
              </div>
            </div>

            {/* Realistic Smartphone Mockup */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] z-10 drop-shadow-[0_25px_50px_rgba(34,95,210,0.28)] transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src="/images/app/beranda-seva-ride-hailing.webp"
                alt={t.mockupAlt}
                width={427}
                height={860}
                priority
                className="block w-full h-auto object-contain select-none"
                draggable={false}
              />
            </div>

            {/* Floating Bottom Right Badge: Verified Driver & High Rating */}
            <div
              className="v11-float absolute -bottom-4 sm:bottom-4 -right-2 sm:-right-4 z-20 v11-card3d !p-3 sm:!p-3.5 shadow-xl flex items-center gap-3 select-none"
              style={{ "--r": "3deg", animationDelay: "-3s" } as React.CSSProperties}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shrink-0">
                <BadgeCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-900 ml-1">4.9</span>
                </div>
                <p className="v11-h text-xs sm:text-[13px] text-slate-900 font-bold mt-0.5">Driver Terverifikasi</p>
                <p className="text-[10px] text-slate-500 font-medium">Bagi hasil 95% • SKCK & SIM Aktif</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

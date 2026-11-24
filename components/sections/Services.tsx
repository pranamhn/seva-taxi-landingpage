"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckIcon as Check,
  ArrowRightIcon as ArrowRight,
  CarIcon as Car,
  MotorcycleIcon as Bike,
  PackageIcon as Package,
  ForkKnifeIcon as Utensils,
  SparkleIcon as Sparkles,
  ClockIcon as Clock,
  UsersIcon as Users,
  TagIcon as Tag,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { FARES } from "@/lib/articles";
import { localePath, type Locale } from "@/lib/i18n";

type ServiceId = "ride" | "car" | "send" | "food";

const SERVICE_META: { id: ServiceId; name: string; image: string; fallbackVehicle: string; icon: typeof Bike }[] = [
  { id: "ride", name: "SEVA RIDE", image: "/assets/services/seva-ride.webp", fallbackVehicle: "/assets/services/seva-ride.webp", icon: Bike },
  { id: "car", name: "SEVA CAR", image: "/assets/services/seva-car.webp", fallbackVehicle: "/assets/services/seva-car.webp", icon: Car },
  { id: "send", name: "SEVA SEND", image: "/assets/services/seva-send.webp", fallbackVehicle: "/assets/services/seva-send.webp", icon: Package },
  { id: "food", name: "SEVA FOOD", image: "/assets/services/seva-food.webp", fallbackVehicle: "/assets/services/seva-food.webp", icon: Utensils },
];

type ServiceCopy = {
  tagline: string;
  category: string;
  badge: string;
  capacity: string;
  eta: string;
  baseFare?: string;
  kmFare?: string;
  description: string;
  features: string[];
  highlight: string;
  doodle: string;
};

const fare = (key: "ride" | "car" | "send", numberLocale: string, perKmLabel: string) => ({
  baseFare: `Rp ${FARES[key].base.toLocaleString(numberLocale)}`,
  kmFare: `Rp ${FARES[key].perKm.toLocaleString(numberLocale)} / ${perKmLabel}`,
});

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    intro: string;
    capacity: string;
    pickupEta: string;
    baseFare: string;
    standards: string;
    detail: string;
    compareAll: string;
    ready: string;
    services: Record<ServiceId, ServiceCopy>;
  }
> = {
  id: {
    eyebrow: "PILIHAN LAYANAN SEVA",
    titleLead: "Satu Aplikasi untuk",
    titleAccent: "Semua Kebutuhan Perjalanan",
    intro: "Pesan motor gesit, taksi mobil nyaman, kirim paket kilat, hingga kuliner dengan tarif pasti transparan.",
    capacity: "Kapasitas",
    pickupEta: "Estimasi Jemput",
    baseFare: "Tarif Dasar",
    standards: "Standar Layanan & Keamanan Resmi:",
    detail: "Detail Layanan",
    compareAll: "Bandingkan Semua Layanan",
    ready: "Armada Tersedia",
    services: {
      ride: {
        tagline: "Tembus Macet Kota Lebih Cepat & Hemat",
        category: "Sepeda Motor",
        badge: "Paling Hemat",
        capacity: "1 Penumpang",
        eta: "1-3 Menit",
        ...fare("ride", "id-ID", "km"),
        description:
          "Solusi mobilitas lincah untuk mengejar waktu di jam sibuk perkotaan. Driver terverifikasi membawa helm berstandar SNI dan jas hujan cadangan.",
        features: [
          "Penjemputan kilat rata-rata ~2 menit",
          "Helm higienis berstandar SNI disediakan driver",
          "Driver terlatih safety riding & SOP sopan",
          "Rute navigasi presisi menghindari titik macet",
        ],
        highlight: "Driver Terverifikasi & Helm SNI",
        doodle: "⚡ Paling cepat tembus macet Sudirman & Thamrin!",
      },
      car: {
        tagline: "Taksi & Mobil Harian Terstandar",
        category: "Mobil / Taksi",
        badge: "Paling Populer",
        capacity: "4 Penumpang",
        eta: "3-5 Menit",
        ...fare("car", "id-ID", "km"),
        description:
          "Pilihan utama komuter dan keluarga perkotaan. Kabin sejuk ber-AC, interior bersih wangi, serta tarif pasti tanpa lonjakan sepihak saat hujan.",
        features: [
          "Armada terawat, sejuk ber-AC & kabin wangi",
          "Tombol darurat SOS & live trip tracking real-time",
          "Standar keselamatan & SOP pengemudi ramah",
          "Bebas biaya pembatalan dalam 5 menit pertama",
        ],
        highlight: "Kabin Bersih & SOP Pengemudi Sopan",
        doodle: "🚗 Bebas was-was saat hujan deras!",
      },
      send: {
        tagline: "Pengiriman Paket & Dokumen Instan On-Demand",
        category: "Kurir Instan",
        badge: "Tiba Hari Ini",
        capacity: "Paket s/d 20kg",
        eta: "Langsung Berangkat",
        ...fare("send", "id-ID", "km"),
        description:
          "Kirim dokumen penting, pesanan bisnis, atau barang pribadi tiba dalam hitungan jam. Dilengkapi pelacakan kurir real-time dan konfirmasi foto tanda terima.",
        features: [
          "Kurir langsung jalan tanpa transit gudang",
          "Live tracking posisi kurir di peta real-time",
          "Bukti foto penerimaan & tanda tangan digital",
          "Jaminan pengantaran aman dan tepat waktu",
        ],
        highlight: "Live Tracking GPS & Konfirmasi Foto",
        doodle: "📦 Paket tiba di hari yang sama!",
      },
      food: {
        tagline: "Pesan Antar Makanan & Kuliner Pilihan",
        category: "Pesan Antar Makanan",
        badge: "Segera Hadir",
        capacity: "Mitra Resto",
        eta: "Segera Hadir",
        baseFare: "Segera Hadir",
        kmFare: "Segera Hadir",
        description:
          "Nikmati aneka hidangan lezat dari ribuan resto mitra terkurasi. Makanan diantar hangat dengan ongkos kirim bersahabat langsung ke depan pintu Anda.",
        features: [
          "Ribuan pilihan resto & merchant kuliner",
          "Tas termal pengantar menjaga makanan tetap hangat",
          "Promo harian dan cashback tanpa syarat rumit",
          "Tracking pesanan dari dapur hingga depan pintu",
        ],
        highlight: "Segera Hadir di Aplikasi SEVA",
        doodle: "🍜 Makanan favorit siap diantar!",
      },
    },
  },
  en: {
    eyebrow: "OUR SERVICES",
    titleLead: "One App for",
    titleAccent: "Every Mobility Need",
    intro: "Book agile motorbikes, comfortable cars, send on-demand parcels, or order food with clear upfront fares.",
    capacity: "Capacity",
    pickupEta: "Pickup Time",
    baseFare: "Base Fare",
    standards: "Official Standards & Safety:",
    detail: "Service Details",
    compareAll: "Compare All Services",
    ready: "Fleet Available",
    services: {
      ride: {
        tagline: "Beat City Traffic Faster & Cheaper",
        category: "Motorbike Ride",
        badge: "Best Value",
        capacity: "1 Passenger",
        eta: "1-3 Min",
        ...fare("ride", "en-US", "km"),
        description:
          "Agile mobility to beat the rush hour clock. Verified drivers provide clean SNI-standard helmets and spare raincoats.",
        features: [
          "Fast pickup in average ~2 minutes",
          "Clean SNI standard helmet provided",
          "Trained in professional defensive riding",
          "Precision routing to avoid traffic jams",
        ],
        highlight: "Verified Driver & Safety Gear",
        doodle: "⚡ Fastest way through city gridlock!",
      },
      car: {
        tagline: "Standardized Daily Cars & Taxis",
        category: "Car / Taxi",
        badge: "Most Popular",
        capacity: "4 Passengers",
        eta: "3-5 Min",
        ...fare("car", "en-US", "km"),
        description:
          "The first choice for commuters and families. Clean, air-conditioned interiors with upfront fares and zero surge during rain.",
        features: [
          "Well-maintained cars with cool air conditioning",
          "Emergency SOS button & real-time trip sharing",
          "Strict driver etiquette and safety SOPs",
          "Free cancellation within the first 5 minutes",
        ],
        highlight: "Clean Cabin & Courteous Drivers",
        doodle: "🚗 Zero surge pricing during rain storms!",
      },
      send: {
        tagline: "Instant On-Demand Parcel Delivery",
        category: "Instant Courier",
        badge: "Same-Day",
        capacity: "Parcels up to 20kg",
        eta: "Direct Dispatch",
        ...fare("send", "en-US", "km"),
        description:
          "Send urgent business docs or personal packages in hours with real-time courier GPS tracking and photo proof of delivery.",
        features: [
          "Direct dispatch without warehouse stops",
          "Live courier GPS route tracking",
          "Photo proof of delivery and digital signoff",
          "Safe and guaranteed on-time delivery",
        ],
        highlight: "Live GPS Tracking & Photo Delivery Proof",
        doodle: "📦 Safe door-to-door delivery today!",
      },
      food: {
        tagline: "Curated Culinary & Food Delivery",
        category: "Food Delivery",
        badge: "Coming Soon",
        capacity: "Partner Restos",
        eta: "Coming Soon",
        baseFare: "Coming Soon",
        kmFare: "Coming Soon",
        description:
          "Enjoy culinary delights from thousands of curated partner restaurants. Food delivered warm with fair delivery fees.",
        features: [
          "Thousands of partner merchants & restaurants",
          "Thermal bags to keep meals piping hot",
          "Daily transparent promo savings",
          "Track order status from kitchen to your door",
        ],
        highlight: "Coming Soon to the SEVA App",
        doodle: "🍜 Delicious meals delivered fast!",
      },
    },
  },
};

export default function Services({
  locale = "id",
  hideHeader = false,
}: {
  locale?: Locale;
  hideHeader?: boolean;
}) {
  const t = COPY[locale];
  const [activeTab, setActiveTab] = useState<ServiceId>("ride");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const currentMeta = SERVICE_META.find((s) => s.id === activeTab) || SERVICE_META[0];
  const currentService = t.services[activeTab];
  const imageSrc = failedImages[currentMeta.id] ? currentMeta.fallbackVehicle : currentMeta.image;

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 transition-colors">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#225FD2] text-xs font-bold tracking-wide uppercase shadow-2xs">
              <Sparkles size={14} className="text-[#225FD2]" />
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="v11-h text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.12]">
              {t.titleLead}{" "}
              <span className="v11-mark text-[#225FD2]">
                {t.titleAccent}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </div>
        )}

        {/* 4 Tactile Category Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {SERVICE_META.map((item) => {
            const Icon = item.icon;
            const sCopy = t.services[item.id];
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`v11-card3d !p-3.5 sm:!p-4 text-left flex flex-col justify-between gap-3 cursor-pointer transition-all ${
                  isActive
                    ? "!border-[#225FD2] shadow-lg ring-2 ring-blue-500/15"
                    : "hover:bg-slate-50 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-[#225FD2] text-white shadow-sm" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-blue-100 text-[#225FD2]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {sCopy.badge}
                  </span>
                </div>
                <div>
                  <p className="v11-h text-sm sm:text-base text-slate-900 font-bold">{item.name}</p>
                  <p className="text-[11px] text-slate-500 font-medium truncate">{sCopy.category}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Bento: 3D Detail Card + Vehicle Mockup */}
        <div className="v11-card3d !p-6 sm:!p-8 lg:!p-10 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#225FD2] text-xs font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#225FD2] animate-pulse" />
                  <span>{currentService.category}</span>
                </div>
                <h3 className="v11-h text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {currentService.tagline}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    {t.capacity}
                  </span>
                  <span className="v11-h text-xs sm:text-sm text-slate-900 font-bold mt-0.5 block truncate">
                    {currentService.capacity}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    {t.pickupEta}
                  </span>
                  <span className="v11-h text-xs sm:text-sm text-emerald-600 font-bold mt-0.5 block truncate">
                    {currentService.eta}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Tarif Per Km
                  </span>
                  <span className="v11-h text-xs sm:text-sm text-[#225FD2] font-bold mt-0.5 block truncate font-mono">
                    {currentService.kmFare}
                  </span>
                </div>
              </div>

              {/* Standard Checkpoints */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {t.standards}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Check weight="bold" className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href={localePath(locale, `/services/${currentMeta.id}`)}
                  className="v11-btn v11-btn-brand px-6 py-3 text-xs sm:text-sm font-bold shadow-md"
                >
                  <span>{t.detail} {currentMeta.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={localePath(locale, "/services")}
                  className="v11-btn v11-btn-ghost px-5 py-3 text-xs sm:text-sm font-bold text-slate-700"
                >
                  <span>{t.compareAll}</span>
                </Link>
              </div>

            </div>

            {/* Right Visual Column (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Playful Sticky Note Doodle */}
              <div className="v11-sticky-blue absolute -top-4 -right-2 sm:-right-4 z-20 px-3.5 py-2 v11-hand text-[19px] leading-tight rotate-[3deg] shadow-lg pointer-events-none select-none">
                <span className="v11-tape" />
                <span>{currentService.doodle}</span>
              </div>

              {/* Vehicle Showcase Card */}
              <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-lg group">
                <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-700 tracking-wide">
                      {currentMeta.name} • {currentService.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-200/80 font-mono">
                    {currentService.kmFare}
                  </span>
                </div>

                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50">
                  <Image
                    key={currentMeta.id}
                    src={imageSrc}
                    alt={currentMeta.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    draggable={false}
                    className="select-none transition-transform duration-700 group-hover:scale-105 object-cover object-center"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [currentMeta.id]: true }))
                    }
                  />
                </div>

                <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <span className="font-semibold text-slate-800 text-[11px]">
                      {currentService.highlight}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold shrink-0 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {t.ready}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon as Check, ArrowRightIcon as ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { FARES } from "@/lib/articles";
import { localePath, type Locale } from "@/lib/i18n";

type ServiceId = "ride" | "car" | "send" | "food";

const SERVICE_META: { id: ServiceId; name: string; image: string; fallbackVehicle: string }[] = [
  { id: "ride", name: "SEVA RIDE", image: "/assets/services/seva-ride.webp", fallbackVehicle: "/assets/services/seva-ride.webp" },
  { id: "car", name: "SEVA CAR", image: "/assets/services/seva-car.webp", fallbackVehicle: "/assets/services/seva-car.webp" },
  { id: "send", name: "SEVA SEND", image: "/assets/services/seva-send.webp", fallbackVehicle: "/assets/services/seva-send.webp" },
  { id: "food", name: "SEVA FOOD", image: "/assets/services/seva-food.webp", fallbackVehicle: "/assets/services/seva-food.webp" },
];

type ServiceCopy = {
  tagline: string;
  category: string;
  badge: string;
  /** Badge versi pendek untuk layar kecil (opsional). */
  badgeShort?: string;
  capacity: string;
  eta: string;
  baseFare?: string;
  kmFare?: string;
  description: string;
  features: string[];
  highlight: string;
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
    intro: "Pesan motor, mobil taksi, kirim paket, hingga makanan dengan tarif pasti transparan.",
    capacity: "Kapasitas",
    pickupEta: "Estimasi Jemput",
    baseFare: "Tarif Dasar",
    standards: "Standar Kenyamanan & Keamanan:",
    detail: "Detail Layanan & Tarif",
    compareAll: "Bandingkan Semua",
    ready: "Siap Jemput",
    services: {
      ride: {
        tagline: "Tembus Macet Kota Lebih Cepat & Hemat",
        category: "Sepeda Motor",
        badge: "Hemat",
        capacity: "1 Penumpang",
        eta: "1-3 Menit",
        ...fare("ride", "id-ID", "km"),
        description:
          "Solusi mobilitas lincah untuk mengejar waktu di jam sibuk perkotaan. Driver terverifikasi membawa helm untuk penumpang dan jas hujan cadangan.",
        features: [
          "Penjemputan instan dalam hitungan menit",
          "Helm penumpang disediakan driver",
          "Driver terlatih safety riding profesional",
          "Rute navigasi menghindari macet",
        ],
        highlight: "Driver Terverifikasi & Terlatih",
      },
      car: {
        tagline: "Taksi & Mobil Harian Terstandar",
        category: "Mobil / Taksi",
        badge: "Nyaman",
        capacity: "4 Penumpang",
        eta: "3-5 Menit",
        ...fare("car", "id-ID", "km"),
        description:
          "Pilihan utama komuter perkotaan untuk mobilitas sehari-hari. Kabin sejuk terawat, interior bersih dan wangi, serta tarif pasti tanpa lonjakan sepihak.",
        features: [
          "Armada standar Euro 4 & transmisi halus",
          "Tombol darurat & live tracking",
          "Standar keselamatan & SOP berkendara ketat",
          "Bebas biaya pembatalan dalam 5 menit pertama",
        ],
        highlight: "Kabin Bersih & SOP Pengemudi Sopan",
      },
      send: {
        tagline: "Pengiriman Paket & Dokumen Instan On-Demand",
        category: "Kurir Instan",
        badge: "Tiba Hari Ini",
        badgeShort: "Hari Ini",
        capacity: "Paket s/d 20kg",
        eta: "Langsung Berangkat",
        ...fare("send", "id-ID", "km"),
        description:
          "Kirim dokumen penting, pesanan bisnis, atau barang pribadi tiba dalam hitungan jam. Dilengkapi pelacakan kurir real-time dan konfirmasi foto tanda terima.",
        features: [
          "Kurir langsung jalan tanpa transit gudang",
          "Live tracking posisi kurir di peta",
          "Bukti foto penerimaan & tanda tangan digital",
          "Pengantaran cepat dan aman",
        ],
        highlight: "Live Tracking GPS & Konfirmasi Foto",
      },
      food: {
        tagline: "Pesan Antar Makanan & Kuliner Pilihan",
        category: "Pesan Antar Makanan",
        badge: "Soon",
        capacity: "Mitra Resto Pilihan",
        eta: "Segera Hadir",
        baseFare: "Segera Hadir",
        kmFare: "Segera Hadir",
        description:
          "Layanan pesan antar makanan dari mitra resto pilihan dan UMKM lokal langsung diantar ke tempat Anda. Pesanan terlindungi dengan tas khusus pengantaran yang bersih dan rapi.",
        features: [
          "Pilihan resto terdekat & kuliner lokal",
          "Tas khusus pengantaran aman & rapi",
          "Daftar tunggu dibuka untuk pengguna & merchant",
          "Pembayaran non-tunai praktis di aplikasi",
        ],
        highlight: "Thermal Bag Penjaga Suhu Makanan",
      },
    },
  },
  en: {
    eyebrow: "SEVA SERVICES",
    titleLead: "One App for",
    titleAccent: "Every Trip You Need",
    intro: "Book motorbikes, cars, instant parcel deliveries, and food with transparent upfront fares.",
    capacity: "Capacity",
    pickupEta: "Pickup Time",
    baseFare: "Base Fare",
    standards: "Comfort & Safety Standards:",
    detail: "Service Details & Fares:",
    compareAll: "Compare All",
    ready: "Ready for Pickup",
    services: {
      ride: {
        tagline: "Beat City Traffic, Faster and Cheaper",
        category: "Motorbike",
        badge: "Budget",
        capacity: "1 Passenger",
        eta: "1-3 Minutes",
        ...fare("ride", "en-US", "km"),
        description:
          "A nimble way to beat rush-hour traffic. Verified drivers bring a passenger helmet and a spare raincoat for you.",
        features: [
          "Pickup within minutes",
          "Passenger helmet provided by the driver",
          "Drivers trained in safe riding",
          "Navigation routes around traffic",
        ],
        highlight: "Verified & Trained Drivers",
      },
      car: {
        tagline: "Standardised Taxi & Daily Car Rides",
        category: "Car / Taxi",
        badge: "Comfort",
        capacity: "4 Passengers",
        eta: "3-5 Minutes",
        ...fare("car", "en-US", "km"),
        description:
          "The everyday choice for city commuters. A clean cabin and a fixed fare with no surge pricing.",
        features: [
          "Euro 4-standard vehicles",
          "Emergency button & live tracking",
          "Strict safety and driving procedures",
          "Free cancellation within the first 5 minutes",
        ],
        highlight: "Clean Cabin & Courteous Drivers",
      },
      send: {
        tagline: "On-Demand Parcel & Document Delivery",
        category: "Instant Courier",
        badge: "Same Day",
        capacity: "Parcels up to 20 kg",
        eta: "Leaves Immediately",
        ...fare("send", "en-US", "km"),
        description:
          "Send important documents, business orders, or personal items and have them arrive within hours, with live courier tracking and photo proof of delivery.",
        features: [
          "Direct delivery, no warehouse stops",
          "Live courier tracking on the map",
          "Photo proof & digital signature",
          "Fast, secure delivery",
        ],
        highlight: "Live GPS Tracking & Photo Proof",
      },
      food: {
        tagline: "Food Delivery from Local Favourites",
        category: "Food Delivery",
        badge: "Soon",
        capacity: "Selected Restaurants",
        eta: "Coming Soon",
        baseFare: "Coming Soon",
        kmFare: "Coming Soon",
        description:
          "Food delivery from selected restaurants and local small businesses, brought to your door in a clean, dedicated delivery bag.",
        features: [
          "Nearby restaurants & local dishes",
          "Dedicated, clean delivery bags",
          "Waitlist open for customers & merchants",
          "Cashless payment in the app",
        ],
        highlight: "Insulated Bags Keep Food Warm",
      },
    },
  },
};

export default function Services({ hideHeader = false, locale = "id" }: { hideHeader?: boolean; locale?: Locale }) {
  const t = COPY[locale];
  const [activeTab, setActiveTab] = useState<ServiceId>("ride");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const meta = SERVICE_META.find((s) => s.id === activeTab) || SERVICE_META[0];
  const currentService = { ...meta, ...t.services[meta.id] };
  const imageSrc = failedImages[currentService.id] ? currentService.fallbackVehicle : currentService.image;

  return (
    <section 
      id="services" 
      className={`${hideHeader ? "pt-6 sm:pt-8 pb-12 sm:pb-16" : "py-10 sm:py-16"} bg-slate-50/70 border-b border-slate-200/80`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Hidden when used inside /services page with PageHeader) */}
        {!hideHeader && (
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
              {t.titleLead}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
                {t.titleAccent}
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.intro}
            </p>
          </div>
        )}

        {/* Tab Navigation Pill Bar - Grid 2x2 rapi & simetris di Mobile, Flex Center di Desktop */}
        <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-2 sm:gap-3 max-w-md sm:max-w-none mx-auto mb-6">
          {SERVICE_META.map((m) => {
            const service = { ...m, ...t.services[m.id] };
            const isActive = activeTab === service.id;
            const isSoon = service.id === "food";
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap border cursor-pointer w-full sm:w-auto ${
                  isActive
                    ? "bg-[#225FD2] text-white border-[#225FD2] shadow-md shadow-blue-500/25"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60"
                }`}
              >
                <span>{service.name}</span>
                {service.badge && (
                  <span
                    className={`text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold shrink-0 ${
                      isActive
                        ? "bg-white text-[#225FD2]"
                        : isSoon
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : "bg-blue-50 text-[#225FD2]"
                    }`}
                  >
                    {service.badgeShort ? (
                      <>
                        <span className="hidden sm:inline">{service.badge}</span>
                        <span className="sm:hidden">{service.badgeShort}</span>
                      </>
                    ) : (
                      service.badge
                    )}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-25px_rgba(34,95,210,0.15)] overflow-hidden p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {currentService.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  {currentService.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentService.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-medium text-slate-500 block">{t.capacity}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block">
                    {currentService.capacity}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-medium text-slate-500 block">{t.pickupEta}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#225FD2] mt-0.5 block">
                    {currentService.eta}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-medium text-slate-500 block">{t.baseFare}</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-700 tabular-nums mt-0.5 block">
                    {currentService.baseFare}
                  </span>
                </div>
              </div>

              {/* Service Features Checkmarks */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {t.standards}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0">
                        <Check weight="bold" className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href={localePath(locale, `/services/${currentService.id}`)}
                  className="h-10 px-6 rounded-full bg-[#225FD2] hover:bg-[#194cb0] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-500/25 cursor-pointer"
                >
                  <span>
                    {t.detail} {currentService.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={localePath(locale, "/services")}
                  className="h-10 px-4 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{t.compareAll}</span>
                </Link>
              </div>

            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[480px]">
                {/* Subtle Ambient Radial Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/15 via-[#225FD2]/10 to-emerald-500/15 rounded-[32px] blur-xl opacity-70 pointer-events-none" />

                {/* Main Showcase Frame */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-lg group">
                  
                  {/* Top Meta Bar */}
                  <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-700 tracking-wide">
                        {currentService.name} • {currentService.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-200/80">
                      {currentService.kmFare}
                    </span>
                  </div>

                  {/* Image Display */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50">
                    <Image
                      key={currentService.id}
                      src={imageSrc}
                      alt={currentService.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      draggable={false}
                      className="select-none transition-transform duration-700 group-hover:scale-105 object-cover object-center"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [currentService.id]: true }))
                      }
                    />
                  </div>

                  {/* Floating Bottom Info Pill inside the Frame */}
                  <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <span className="font-semibold text-slate-800 text-[11px] sm:text-[11.5px]">
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

      </div>
    </section>
  );
}

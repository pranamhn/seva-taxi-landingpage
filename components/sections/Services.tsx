"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const RIDE_SERVICES = [
  {
    id: "ride",
    name: "SEVA RIDE",
    tagline: "Tembus Macet Kota Lebih Cepat & Hemat",
    category: "Sepeda Motor",
    image: "/assets/bikecard.webp",
    imageFit: "cover",
    fallbackVehicle: "/assets/bikecard.webp",
    badge: "Tarif Termurah",
    capacity: "1 Penumpang",
    luggage: "1 Ransel / Tas Laptop",
    baseFare: "Rp 8.000",
    kmFare: "Rp 2.500 / km",
    eta: "1-3 Menit",
    description:
      "Solusi mobilitas paling lincah untuk mengejar waktu di jam sibuk perkotaan. Driver terverifikasi dilengkapi helm berstandar SNI higienis, penutup kepala steril, dan jas hujan cadangan.",
    features: [
      "Penjemputan instan dalam hitungan menit",
      "Helm higienis & hairnet steril gratis",
      "Driver terlatih safety riding profesional",
      "Rute navigasi tercepat menghindari macet",
    ],
  },
  {
    id: "car",
    name: "SEVA CAR",
    tagline: "Taksi & Mobil Harian Terstandarisasi",
    category: "Mobil AC",
    image: "/assets/carcard.webp",
    imageFit: "cover",
    fallbackVehicle: "/assets/vehicles/toyota-avanza.webp",
    badge: "Paling Populer",
    capacity: "4 Penumpang",
    luggage: "2 Koper Medium",
    baseFare: "Rp 9.500",
    kmFare: "Rp 6.200 / km",
    eta: "3-5 Menit",
    description:
      "Pilihan utama komuter perkotaan untuk mobilitas sehari-hari. Kabin dingin ber-AC, interior bersih dan wangi, serta argo resmi tanpa tarif lonjakan sepihak.",
    features: [
      "Armada standar Euro 4 & transmisi halus",
      "Kamera kabin (dashcam) & tombol darurat",
      "Standar keselamatan & SOP berkendara ketat",
      "Bebas biaya pembatalan dalam 5 menit pertama",
    ],
  },
  {
    id: "send",
    name: "SEVA SEND",
    tagline: "Pengiriman Paket & Dokumen Instan On-Demand",
    category: "Kurir Instan",
    image: "/assets/sendcard.webp",
    imageFit: "cover",
    fallbackVehicle: "/assets/sendcard.webp",
    badge: "Sampai Hari Ini",
    capacity: "Paket s/d 20kg",
    luggage: "Dimensi 40x40x40 cm",
    baseFare: "Rp 10.000",
    kmFare: "Rp 3.000 / km",
    eta: "Langsung Berangkat",
    description:
      "Kirim dokumen penting, pesanan bisnis, atau barang pribadi tiba dalam hitungan jam. Dilengkapi pelacakan kurir real-time dan konfirmasi foto tanda terima.",
    features: [
      "Kurir langsung jalan tanpa transit gudang",
      "Live tracking posisi kurir di peta",
      "Bukti foto penerimaan & tanda tangan digital",
      "Pengantaran cepat, aman dan terpercaya",
    ],
  },
  {
    id: "food",
    name: "SEVA FOOD",
    tagline: "Pesan Antar Makanan & Kuliner Pilihan",
    category: "Pesan Antar Makanan",
    image: "/assets/foodcard.webp",
    imageFit: "contain",
    fallbackVehicle: "/assets/foodcard.webp",
    badge: "Soon",
    capacity: "Ribuan Merchant Resto",
    luggage: "Thermal Box Khusus",
    baseFare: "Promo Menarik",
    kmFare: "Ongkir Hemat",
    eta: "Segera Hadir",
    description:
      "Layanan pesan antar makanan dari ribuan resto favorit, kuliner legendaris, dan UMKM lokal langsung diantar ke tempat Anda. Makanan tetap hangat dan higienis berkat tas termal berstandar khusus.",
    features: [
      "Ribuan pilihan resto & kuliner nusantara",
      "Thermal delivery bag higienis penjaga suhu",
      "Voucher diskon & promo gratis ongkir",
      "Pembayaran instan terhubung SEVA Wallet",
    ],
  },
];

export default function Services({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeTab, setActiveTab] = useState("ride");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const currentService = RIDE_SERVICES.find((s) => s.id === activeTab) || RIDE_SERVICES[0];
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PILIHAN LAYANAN SEVA</span>
            </div>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
              Satu Aplikasi untuk{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#194cb0] to-[#225FD2]">
                Semua Kebutuhan Perjalanan
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Nikmati kemudahan pesan motor, mobil taksi ber-AC, kirim paket instan, hingga pesan antar kuliner dengan tarif pasti transparan.
            </p>
          </div>
        )}

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap pb-1 mb-6">
          {RIDE_SERVICES.map((service) => {
            const isActive = activeTab === service.id;
            const isSoon = service.badge === "Soon";
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 border cursor-pointer ${
                  isActive
                    ? "bg-[#225FD2] text-white border-[#225FD2] shadow-md shadow-blue-500/25"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60"
                }`}
              >
                <span>{service.name}</span>
                {service.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : isSoon
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : "bg-blue-50 text-[#225FD2]"
                    }`}
                  >
                    {service.badge}
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-[#225FD2] border border-blue-200/70 mb-2">
                  {currentService.category}
                </div>
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
                  <span className="text-[11px] font-medium text-slate-500 block">Kapasitas</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block">
                    {currentService.capacity}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-medium text-slate-500 block">Estimasi Jemput</span>
                  <span className="text-xs sm:text-sm font-bold text-[#225FD2] mt-0.5 block">
                    {currentService.eta}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-medium text-slate-500 block">Tarif Dasar</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-600 font-mono mt-0.5 block">
                    {currentService.baseFare}
                  </span>
                </div>
              </div>

              {/* Service Features Checkmarks */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Standar Kenyamanan &amp; Keamanan:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href={`/services/${currentService.id}`}
                  className="h-10 px-6 rounded-full bg-[#225FD2] hover:bg-[#194cb0] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-500/25 cursor-pointer"
                >
                  <span>
                    Detail Layanan &amp; Tarif {currentService.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/services"
                  className="h-10 px-4 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Bandingkan Semua</span>
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
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-200/80">
                      {currentService.kmFare}
                    </span>
                  </div>

                  {/* Image Display */}
                  <div className={`relative w-full aspect-[16/10] overflow-hidden ${
                    currentService.imageFit === "contain" ? "bg-white p-4" : "bg-slate-100"
                  }`}>
                    <Image
                      key={currentService.id}
                      src={imageSrc}
                      alt={currentService.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      draggable={false}
                      className={`select-none transition-transform duration-700 group-hover:scale-105 ${
                        currentService.imageFit === "contain" 
                          ? "object-contain p-2" 
                          : "object-cover object-center"
                      }`}
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [currentService.id]: true }))
                      }
                    />
                    
                    {/* Soft Bottom Gradient on Cover Images */}
                    {currentService.imageFit !== "contain" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                    )}
                  </div>

                  {/* Floating Bottom Info Pill inside the Frame */}
                  <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <span className="font-semibold text-slate-800 text-[11px] sm:text-[11.5px]">
                        {currentService.id === "ride"
                          ? "Helm SNI Higienis & Driver Terlatih"
                          : currentService.id === "car"
                          ? "Kabin AC Dingin & SOP Pengemudi Sopan"
                          : currentService.id === "send"
                          ? "Live Tracking GPS & Konfirmasi Foto"
                          : "Thermal Bag Penjaga Suhu Makanan"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold shrink-0 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Siap Jemput
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

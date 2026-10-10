"use client";

import { useState } from "react";
import { Search, MapPin, Sparkles, Plane, Train, CheckCircle2, Clock } from "lucide-react";

interface CityItem {
  code: string;
  name: string;
  province: string;
  zone: "jakarta" | "tangerang" | "bodetabek";
  activeFleet: string;
  avgArrival: string;
  hub: string;
  hubType: "airport" | "train" | "transit";
  status: "AKTIF";
}

const CITY_DIRECTORY: CityItem[] = [
  {
    code: "JKT-01",
    name: "Jakarta Pusat & Selatan",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    hub: "SCBD, Sudirman, Kuningan, Stasiun Gambir & MRT",
    hubType: "transit",
    status: "AKTIF",
  },
  {
    code: "JKT-02",
    name: "Jakarta Barat & Utara",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    hub: "Kawasan PIK, Pluit, Kelapa Gading, Tj. Priok",
    hubType: "transit",
    status: "AKTIF",
  },
  {
    code: "JKT-03",
    name: "Jakarta Timur & Halim",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    hub: "Bandara Halim Perdanakusuma (HLP) & Stasiun Whoosh",
    hubType: "airport",
    status: "AKTIF",
  },
  {
    code: "TNG-01",
    name: "Kota Tangerang & Bandara CGK",
    province: "Banten",
    zone: "tangerang",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    hub: "Bandara Soekarno-Hatta (Terminal 1, 2, 3) & Kota",
    hubType: "airport",
    status: "AKTIF",
  },
  {
    code: "TNG-02",
    name: "Tangerang Selatan & BSD City",
    province: "Banten",
    zone: "tangerang",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    hub: "BSD City, Alam Sutera, Bintaro Jaya, Serpong",
    hubType: "transit",
    status: "AKTIF",
  },
  {
    code: "BGR-01",
    name: "Kota & Kabupaten Bogor",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    hub: "Pusat Kota Bogor, Sentul City, Stasiun Bogor",
    hubType: "train",
    status: "AKTIF",
  },
  {
    code: "DPK-01",
    name: "Kota Depok",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    hub: "Margonda Raya, Cinere, Kawasan Kampus UI & Sawangan",
    hubType: "transit",
    status: "AKTIF",
  },
  {
    code: "BKS-01",
    name: "Kota & Kabupaten Bekasi",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    hub: "Bekasi Barat, Summarecon, Stasiun LRT, Cikarang",
    hubType: "train",
    status: "AKTIF",
  },
];

interface CityCoverageProps {
  hideHeader?: boolean;
}

export default function CityCoverage({ hideHeader = false }: CityCoverageProps) {
  const [search, setSearch] = useState("");
  const [activeZone, setActiveZone] = useState<"all" | "jakarta" | "tangerang" | "bodetabek">("all");

  const filtered = CITY_DIRECTORY.filter((c) => {
    const matchesZone = activeZone === "all" ? true : c.zone === activeZone;
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.province.toLowerCase().includes(search.toLowerCase()) ||
      c.hub.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase());

    return matchesZone && matchesSearch;
  });

  return (
    <section id="cities" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Optional Header (shown on Home, hidden if page already has PageHeader) */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WILAYAH OPERASIONAL RESMI</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Beroperasi Penuh di Jabodetabek
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                Saat ini SEVA melayani seluruh kawasan Jakarta, Bogor, Depok, Tangerang, dan Bekasi — termasuk penjemputan bandara dan stasiun kereta.
              </p>
            </div>
          </div>
        )}

        {/* Operational Notice Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#225FD2] text-white flex items-center justify-center shrink-0 shadow-xs">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                Layanan SEVA Aktif di Seluruh Kawasan Jabodetabek
              </div>
              <div className="text-xs text-slate-600">
                Pemesanan SEVA RIDE, SEVA CAR, dan SEVA SEND telah aktif beroperasi 24 jam untuk Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
              </div>
            </div>
          </div>
          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0 self-start sm:self-auto">
            ● 8 Zona Aktif Live
          </span>
        </div>

        {/* Controls: Zone Filter & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Zone Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              type="button"
              onClick={() => setActiveZone("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                activeZone === "all"
                  ? "bg-[#225FD2] text-white border-[#225FD2] shadow-xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Semua Wilayah ({CITY_DIRECTORY.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveZone("jakarta")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                activeZone === "jakarta"
                  ? "bg-[#225FD2] text-white border-[#225FD2] shadow-xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              DKI Jakarta
            </button>
            <button
              type="button"
              onClick={() => setActiveZone("tangerang")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                activeZone === "tangerang"
                  ? "bg-[#225FD2] text-white border-[#225FD2] shadow-xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Tangerang &amp; BSD
            </button>
            <button
              type="button"
              onClick={() => setActiveZone("bodetabek")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                activeZone === "bodetabek"
                  ? "bg-[#225FD2] text-white border-[#225FD2] shadow-xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Bogor, Depok &amp; Bekasi
            </button>
          </div>

          {/* Search Box */}
          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              aria-label="Cari wilayah, bandara, atau stasiun"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari wilayah, bandara, stasiun..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-slate-50 border border-slate-200 text-slate-800 focus:bg-white focus:outline-none focus:border-[#225FD2] transition-colors"
            />
          </div>
        </div>

        {/* City Cards Grid - ONLY ACTIVE ONES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((city) => (
            <div
              key={city.code}
              className="rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between bg-white border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#225FD2]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{city.code}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1.5 border bg-emerald-50 text-emerald-700 border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {city.status}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-0.5">
                  {city.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{city.province}</p>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 space-y-2">
                  <div className="flex items-start gap-1.5">
                    {city.hubType === "airport" ? (
                      <Plane className="w-3.5 h-3.5 text-[#225FD2] shrink-0 mt-0.5" />
                    ) : city.hubType === "train" ? (
                      <Train className="w-3.5 h-3.5 text-[#225FD2] shrink-0 mt-0.5" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5 text-[#225FD2] shrink-0 mt-0.5" />
                    )}
                    <span className="text-[11px] font-medium leading-snug line-clamp-2">
                      {city.hub}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-200/60 font-mono">
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> Waktu Jemput:
                    </span>
                    <span className="font-bold text-[#225FD2]">
                      {city.avgArrival}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                <span>Status Armada:</span>
                <span className="font-bold text-slate-900">
                  {city.activeFleet}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">
              Tidak ada wilayah atau hub transit yang cocok dengan pencarian &quot;{search}&quot;.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

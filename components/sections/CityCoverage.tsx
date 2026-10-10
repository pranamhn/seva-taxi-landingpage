"use client";

import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

interface CityItem {
  code: string;
  name: string;
  province: string;
  zone: "jakarta" | "tangerang" | "bodetabek";
  activeFleet: string;
  avgArrival: string;
  status: "AKTIF";
}

const CITY_DIRECTORY: CityItem[] = [
  {
    code: "JKT-01",
    name: "Jakarta Pusat",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    status: "AKTIF",
  },
  {
    code: "JKT-02",
    name: "Jakarta Utara",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "JKT-03",
    name: "Jakarta Barat",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "JKT-04",
    name: "Jakarta Selatan",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    status: "AKTIF",
  },
  {
    code: "JKT-05",
    name: "Jakarta Timur",
    province: "DKI Jakarta",
    zone: "jakarta",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    status: "AKTIF",
  },
  {
    code: "TNG-01",
    name: "Kota Tangerang",
    province: "Banten",
    zone: "tangerang",
    activeFleet: "Aktif 24/7",
    avgArrival: "2–4 mnt",
    status: "AKTIF",
  },
  {
    code: "TNG-02",
    name: "Kota Tangerang Selatan",
    province: "Banten",
    zone: "tangerang",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "BGR-01",
    name: "Kota Bogor",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "BGR-02",
    name: "Kabupaten Bogor",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "DPK-01",
    name: "Kota Depok",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "BKS-01",
    name: "Kota Bekasi",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
  {
    code: "BKS-02",
    name: "Kabupaten Bekasi",
    province: "Jawa Barat",
    zone: "bodetabek",
    activeFleet: "Aktif 24/7",
    avgArrival: "3–5 mnt",
    status: "AKTIF",
  },
];

type ZoneFilter = "all" | CityItem["zone"];

const ZONE_FILTERS: { id: ZoneFilter; label: string }[] = [
  { id: "all", label: "Semua Wilayah" },
  { id: "jakarta", label: "DKI Jakarta" },
  { id: "tangerang", label: "Tangerang & BSD" },
  { id: "bodetabek", label: "Bogor, Depok & Bekasi" },
];

interface CityCoverageProps {
  hideHeader?: boolean;
}

export default function CityCoverage({ hideHeader = false }: CityCoverageProps) {
  const [search, setSearch] = useState("");
  const [activeZone, setActiveZone] = useState<ZoneFilter>("all");

  const query = search.trim().toLowerCase();
  const filtered = CITY_DIRECTORY.filter((c) => {
    const matchesZone = activeZone === "all" ? true : c.zone === activeZone;
    const matchesSearch =
      !query ||
      c.name.toLowerCase().includes(query) ||
      c.province.toLowerCase().includes(query) ||
      c.code.toLowerCase().includes(query);

    return matchesZone && matchesSearch;
  });

  const countFor = (zone: ZoneFilter) =>
    zone === "all" ? CITY_DIRECTORY.length : CITY_DIRECTORY.filter((c) => c.zone === zone).length;

  return (
    <section id="cities" className="py-10 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Optional Header (shown on Home, hidden if page already has PageHeader) */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WILAYAH OPERASIONAL RESMI</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Beroperasi Penuh di Jabodetabek
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                Saat ini SEVA melayani seluruh kawasan Jakarta, Bogor, Depok, Tangerang, dan Bekasi — termasuk penjemputan bandara dan stasiun kereta.
              </p>
            </div>
          </div>
        )}

        {/* Directory header (page already has a hero header on /cities) */}
        {hideHeader && (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Direktori Wilayah Layanan
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl leading-relaxed">
              SEVA RIDE, SEVA CAR, dan SEVA SEND aktif 24 jam di seluruh wilayah berikut.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start lg:self-auto text-xs font-semibold text-emerald-700 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="tabular-nums">{CITY_DIRECTORY.length}</span> zona aktif
          </span>
        </div>
        )}

        {/* Controls: Zone Filter & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200/80">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-1 px-1" role="group" aria-label="Filter wilayah">
            {ZONE_FILTERS.map((z) => {
              const isActive = activeZone === z.id;
              return (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setActiveZone(z.id)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap border cursor-pointer ${
                    isActive
                      ? "bg-[#225FD2] text-white border-[#225FD2]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {z.label}
                  <span
                    className={`tabular-nums text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {countFor(z.id)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-full md:w-72 relative shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              aria-label="Cari kota atau kabupaten"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari kota atau kabupaten..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#225FD2] focus:ring-2 focus:ring-blue-500/15 transition-colors"
            />
          </div>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((city) => (
              <article
                key={city.code}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
              >
                <header className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-400">
                    {city.code}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Aktif
                  </span>
                </header>

                <div className="mt-4">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{city.name}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">{city.province}</p>
                </div>

                <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                  <div>
                    <dt className="text-[11px] text-slate-500">Waktu jemput</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-slate-900 tabular-nums">{city.avgArrival}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] text-slate-500">Armada</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-slate-900">{city.activeFleet}</dd>
                  </div>
                </dl>
              </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">
              Tidak ada kota atau kabupaten yang cocok dengan pencarian &quot;{search}&quot;.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

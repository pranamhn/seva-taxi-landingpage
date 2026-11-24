"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRightIcon as ArrowRight,
  MagnifyingGlassIcon as Search,
  MapPinIcon as MapPin,
  SparkleIcon as Sparkles,
} from "@phosphor-icons/react/dist/ssr";
import { CITY_DIRECTORY, ZONE_LABELS, arrivalLabel, cityName, provinceName, type CityItem } from "@/lib/cities";
import { localePath, type Locale } from "@/lib/i18n";

type ZoneFilter = "all" | CityItem["zone"];

const COPY: Record<
  Locale,
  {
    zones: Record<ZoneFilter, string>;
    eyebrow: string;
    title: string;
    intro: string;
    directoryTitle: string;
    directoryIntro: string;
    activeZones: string;
    searchLabel: string;
    searchPlaceholder: string;
    active: string;
    pickup: string;
    fares: string;
    empty: (q: string) => string;
    filterLabel: string;
  }
> = {
  id: {
    zones: { all: "Semua Wilayah", ...ZONE_LABELS.id },
    eyebrow: "WILAYAH OPERASIONAL RESMI",
    title: "Melayani Seluruh Kawasan Jabodetabek",
    intro: "SEVA melayani 100% kawasan Jakarta, Bogor, Depok, Tangerang, dan Bekasi — termasuk penjemputan bandara CGK, KCIC Halim, dan stasiun komuter.",
    directoryTitle: "Direktori Wilayah Layanan",
    directoryIntro: "SEVA RIDE, SEVA CAR, dan SEVA SEND beroperasi aktif 24 jam nonstop di seluruh area berikut.",
    activeZones: "zona aktif",
    searchLabel: "Cari kota atau kabupaten",
    searchPlaceholder: "Cari kota, kabupaten, atau kode...",
    active: "Siap Jemput",
    pickup: "Jemput:",
    fares: "Cek Tarif",
    empty: (q) => `Tidak ada kota atau kabupaten yang cocok dengan pencarian "${q}".`,
    filterLabel: "Filter wilayah",
  },
  en: {
    zones: { all: "All Areas", ...ZONE_LABELS.en },
    eyebrow: "OFFICIAL SERVICE AREAS",
    title: "Serving All Greater Jakarta Regions",
    intro: "SEVA operates 100% across Jakarta, Bogor, Depok, Tangerang, and Bekasi, including CGK Airport, KCIC Halim, and commuter rail hubs.",
    directoryTitle: "Service Area Directory",
    directoryIntro: "SEVA RIDE, SEVA CAR, and SEVA SEND operate 24 hours a day in all of these service areas.",
    activeZones: "active regions",
    searchLabel: "Search for a city or regency",
    searchPlaceholder: "Search city, regency, or code...",
    active: "Ready",
    pickup: "Pickup:",
    fares: "View Fares",
    empty: (q) => `No city or regency matches "${q}".`,
    filterLabel: "Filter areas",
  },
};

const ZONE_IDS: ZoneFilter[] = ["all", "jakarta", "tangerang", "bodetabek"];

interface CityCoverageProps {
  hideHeader?: boolean;
  locale?: Locale;
}

export default function CityCoverage({ hideHeader = false, locale = "id" }: CityCoverageProps) {
  const t = COPY[locale];
  const [search, setSearch] = useState("");
  const [activeZone, setActiveZone] = useState<ZoneFilter>("all");

  const query = search.trim().toLowerCase();
  const filtered = CITY_DIRECTORY.filter((c) => {
    const matchesZone = activeZone === "all" ? true : c.zone === activeZone;
    const matchesSearch =
      !query ||
      c.name.toLowerCase().includes(query) ||
      c.nameEn.toLowerCase().includes(query) ||
      c.province.toLowerCase().includes(query) ||
      c.code.toLowerCase().includes(query);

    return matchesZone && matchesSearch;
  });

  const countFor = (zone: ZoneFilter) =>
    zone === "all" ? CITY_DIRECTORY.length : CITY_DIRECTORY.filter((c) => c.zone === zone).length;

  return (
    <section id="cities" className="py-16 sm:py-20 bg-white border-b border-slate-200/80 transition-colors">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#225FD2] text-xs font-bold tracking-wide uppercase shadow-2xs">
              <MapPin size={14} className="text-[#225FD2]" />
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="v11-h text-3xl sm:text-4xl text-slate-900 leading-[1.14]">
              {t.title}
            </h2>

            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </div>
        )}

        {hideHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="v11-h text-2xl sm:text-3xl text-slate-900">
                {t.directoryTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl leading-relaxed">
                {t.directoryIntro}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 shadow-2xs shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tabular-nums font-mono">{CITY_DIRECTORY.length}</span> {t.activeZones}
            </span>
          </div>
        )}

        {/* Filter Pills & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-8 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
          
          {/* Zone Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -mx-1 px-1" role="group" aria-label={t.filterLabel}>
            {ZONE_IDS.map((id) => {
              const isActive = activeZone === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveZone(id)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "v11-btn-brand shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <span>{t.zones[id]}</span>
                  <span
                    className={`tabular-nums text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {countFor(id)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              aria-label={t.searchLabel}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#225FD2] focus:ring-2 focus:ring-blue-500/15 transition-all"
            />
          </div>
        </div>

        {/* Tactile 3D City Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((city) => (
            <Link
              key={city.code}
              href={localePath(locale, `/cities/${city.slug}`)}
              className="v11-card3d !p-3.5 sm:!p-4.5 flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              <div>
                <header className="flex items-center justify-between gap-1 mb-2.5">
                  <span className="text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-lg bg-blue-50 text-[#225FD2] border border-blue-200">
                    {city.code}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t.active}
                  </span>
                </header>

                <div>
                  <h3 className="v11-h text-sm sm:text-base text-slate-900 leading-snug truncate group-hover:text-[#225FD2] transition-colors">
                    {cityName(city, locale)}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-slate-500 truncate">
                    {provinceName(city, locale)}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-slate-500 font-medium">
                  <span>{t.pickup}</span>
                  <span className="font-bold text-slate-900 font-mono">{arrivalLabel(city, locale)}</span>
                </div>
                <span className="inline-flex items-center gap-0.5 font-bold text-[#225FD2] group-hover:translate-x-0.5 transition-transform">
                  <span>{t.fares}</span>
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">
              {t.empty(search)}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

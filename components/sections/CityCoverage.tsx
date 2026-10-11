"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";
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
    eyebrow: "WILAYAH OPERASIONAL",
    title: "Beroperasi Penuh di Jabodetabek",
    intro: "Saat ini SEVA melayani seluruh kawasan Jakarta, Bogor, Depok, Tangerang, dan Bekasi — termasuk penjemputan bandara dan stasiun kereta.",
    directoryTitle: "Direktori Wilayah Layanan",
    directoryIntro: "SEVA RIDE, SEVA CAR, dan SEVA SEND aktif 24 jam di seluruh wilayah berikut.",
    activeZones: "zona aktif",
    searchLabel: "Cari kota atau kabupaten",
    searchPlaceholder: "Cari kota atau wilayah...",
    active: "Aktif",
    pickup: "Jemput:",
    fares: "Tarif",
    empty: (q) => `Tidak ada kota atau kabupaten yang cocok dengan pencarian "${q}".`,
    filterLabel: "Filter wilayah",
  },
  en: {
    zones: { all: "All Areas", ...ZONE_LABELS.en },
    eyebrow: "SERVICE AREAS",
    title: "Serving All of Greater Jakarta",
    intro: "SEVA covers Jakarta, Bogor, Depok, Tangerang, and Bekasi, including airport and train station pickups.",
    directoryTitle: "Service Area Directory",
    directoryIntro: "SEVA RIDE, SEVA CAR, and SEVA SEND run 24 hours a day in all of these areas.",
    activeZones: "active areas",
    searchLabel: "Search for a city or regency",
    searchPlaceholder: "Search a city or area...",
    active: "Active",
    pickup: "Pickup:",
    fares: "Fares",
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
    <section id="cities" className="py-8 sm:py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Optional Header (shown on Home, hidden if page already has PageHeader) */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-slate-200/80 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-2 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.eyebrow}</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                {t.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                {t.intro}
              </p>
            </div>
          </div>
        )}

        {/* Directory header (page already has a hero header on /cities) */}
        {hideHeader && (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {t.directoryTitle}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {t.directoryIntro}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start lg:self-auto text-xs font-semibold text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="tabular-nums">{CITY_DIRECTORY.length}</span> {t.activeZones}
          </span>
        </div>
        )}

        {/* Controls: Zone Filter & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200/80">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar -mx-1 px-1" role="group" aria-label={t.filterLabel}>
            {ZONE_IDS.map((id) => {
              const z = { id, label: t.zones[id] };
              const isActive = activeZone === z.id;
              return (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setActiveZone(z.id)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap border cursor-pointer ${
                    isActive
                      ? "bg-[#225FD2] text-white border-[#225FD2]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {z.label}
                  <span
                    className={`tabular-nums text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                      isActive ? "bg-white text-[#225FD2]" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {countFor(z.id)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-full md:w-64 relative shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              aria-label={t.searchLabel}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#225FD2] focus:ring-2 focus:ring-blue-500/15 transition-colors"
            />
          </div>
        </div>

        {/* City Cards Grid - Compact & Responsive (2 kolom di mobile, 4 kolom di desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
          {filtered.map((city) => (
            <Link
              key={city.code}
              href={localePath(locale, `/cities/${city.slug}`)}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3 sm:p-4 hover:border-[#225FD2]/40 hover:shadow-xs transition-all duration-150"
            >
              <div>
                <header className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#225FD2] transition-colors">
                    {city.code}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t.active}
                  </span>
                </header>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate">
                    {cityName(city, locale)}
                  </h3>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-slate-500 truncate">
                    {provinceName(city, locale)}
                  </p>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px]">
                <div className="flex items-center gap-1 text-slate-500">
                  <span>{t.pickup}</span>
                  <span className="font-semibold text-slate-900 tabular-nums">{arrivalLabel(city, locale)}</span>
                </div>
                <span className="inline-flex items-center gap-0.5 font-semibold text-slate-400 group-hover:text-[#225FD2] transition-colors">
                  {t.fares}
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

"use client";

import { useState } from "react";
import {
  Search,
  Building2,
  Car,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { FLEET_COMPANIES, FLEET_COMPANY_COUNT } from "@/lib/fleet-companies";
import type { Locale } from "@/lib/i18n";

type Category = "all" | "taxi" | "rental" | "premium" | "ev";

const COPY: Record<
  Locale,
  {
    numberLocale: string;
    eyebrow: string;
    title: string;
    introLead: string;
    vehiclesUnit: string;
    introTail: (companies: number) => string;
    totalLabel: string;
    tabs: Record<Category, string>;
    searchLabel: string;
    searchPlaceholder: string;
    cols: { company: string; status: string; vehicles: string; share: string };
    active: string;
    unit: string;
    fleetSize: string;
    empty: (q: string) => string;
  }
> = {
  id: {
    numberLocale: "id-ID",
    eyebrow: "DAFTAR MITRA FLEET TERDAFTAR",
    title: "Perusahaan Fleet Operator Terintegrasi",
    introLead: "Sebanyak",
    vehiclesUnit: "unit armada",
    introTail: (n) => `dari ${n} perusahaan telah terdaftar resmi dan beroperasi dalam ekosistem mobilitas SEVA.`,
    totalLabel: "Total Armada Terdaftar",
    tabs: { all: "Semua Operator", taxi: "Taksi Reguler", rental: "Rental Mobil", premium: "VIP & Premium", ev: "EV Listrik" },
    searchLabel: "Cari nama perusahaan armada",
    searchPlaceholder: "Cari nama perusahaan armada...",
    cols: { company: "Perusahaan (Company)", status: "Status", vehicles: "Jumlah Armada (Vehicles)", share: "Pangsa (%)" },
    active: "Active",
    unit: "Unit",
    fleetSize: "Jumlah Armada:",
    empty: (q) => `Tidak ada operator yang cocok dengan pencarian "${q}".`,
  },
  en: {
    numberLocale: "en-US",
    eyebrow: "REGISTERED FLEET PARTNERS",
    title: "Integrated Fleet Operators",
    introLead: "A total of",
    vehiclesUnit: "vehicles",
    introTail: (n) => `from ${n} companies are officially registered and operating in the SEVA network.`,
    totalLabel: "Total Registered Vehicles",
    tabs: { all: "All Operators", taxi: "Regular Taxi", rental: "Car Rental", premium: "VIP & Premium", ev: "Electric (EV)" },
    searchLabel: "Search fleet companies",
    searchPlaceholder: "Search fleet companies...",
    cols: { company: "Company", status: "Status", vehicles: "Vehicles", share: "Share (%)" },
    active: "Active",
    unit: "Vehicles",
    fleetSize: "Fleet size:",
    empty: (q) => `No operator matches "${q}".`,
  },
};

const CATEGORIES: Category[] = ["all", "taxi", "rental", "premium", "ev"];

export default function FleetOperatorDirectory({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<Category>("all");

  const filtered = FLEET_COMPANIES.filter((item) => {
    const q = search.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(q) ||
      item.typeLabel.toLowerCase().includes(q) ||
      item.typeLabelEn.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.descriptionEn.toLowerCase().includes(q);
    const matchesCategory =
      filterCategory === "all" ? true : item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalVehicles = FLEET_COMPANIES.reduce((acc, curr) => acc + curr.vehicles, 0);

  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.eyebrow}</span>
            </div>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
              {t.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              {t.introLead}{" "}
              <strong>
                {totalVehicles.toLocaleString(t.numberLocale)} {t.vehiclesUnit}
              </strong>{" "}
              {t.introTail(FLEET_COMPANY_COUNT)}
            </p>
          </div>

          {/* Quick Counter Card */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center border border-blue-100">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 tabular-nums">
                {totalVehicles.toLocaleString(t.numberLocale)}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {t.totalLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {CATEGORIES.map((cat) => {
              const isActive = filterCategory === cat;
              const activeClass = cat === "ev" ? "bg-emerald-600 text-white border-emerald-600 shadow-xs" : "bg-[#225FD2] text-white border-[#225FD2] shadow-xs";
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilterCategory(cat)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                    isActive ? activeClass : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {t.tabs[cat]}
                  {cat === "all" && ` (${FLEET_COMPANIES.length})`}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              aria-label={t.searchLabel}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-[#225FD2] transition-colors"
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden mb-6">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              <tr>
                <th scope="col" className="py-4 px-6">{t.cols.company}</th>
                <th scope="col" className="py-4 px-6 text-center">{t.cols.status}</th>
                <th scope="col" className="py-4 px-6 text-right">{t.cols.vehicles}</th>
                <th scope="col" className="py-4 px-6 text-right">{t.cols.share}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((item) => (
                <tr key={item.name} className="hover:bg-blue-50/30 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={item.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Fallback to building icon if image fails
                              (e.target as HTMLElement).style.display = "none";
                            }}
                          />
                        ) : (
                          <Building2 className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                        <div className="text-xs text-slate-500 font-normal">{locale === "en" ? item.descriptionEn : item.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {t.active}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-slate-900 text-base tabular-nums">
                    {item.vehicles.toLocaleString(t.numberLocale)}{" "}
                    <span className="text-xs text-slate-400 font-normal">{t.unit}</span>
                  </td>
                  <td className="py-4 px-6 text-right text-xs text-slate-500 tabular-nums">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[#225FD2] h-1.5 rounded-full"
                          style={{
                            width: `${Math.min(100, Math.max(2, (item.vehicles / totalVehicles) * 100))}%`,
                          }}
                        />
                      </div>
                      <span className="font-bold text-slate-700 w-12 text-right">{item.share}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between gap-2.5">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Building2 className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-slate-900 text-sm break-words leading-snug">{item.name}</div>
                    <div className="text-[11px] text-slate-500 truncate">{locale === "en" ? item.typeLabelEn : item.typeLabel}</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                  {t.active}
                </span>
              </div>

              <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl flex items-center justify-between">
                <span className="text-slate-500">{t.fleetSize}</span>
                <span className="font-bold text-slate-900 text-sm tabular-nums">
                  {item.vehicles.toLocaleString(t.numberLocale)} {t.unit}
                </span>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                {locale === "en" ? item.descriptionEn : item.description}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">
              {t.empty(search)}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

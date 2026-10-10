"use client";

import { useState } from "react";
import {
  Search,
  Building2,
  Car,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

interface FleetCompany {
  name: string;
  logo?: string;
  status: "Active" | "Inactive";
  subscription: "Active" | "Unpaid" | "Expired";
  vehicles: number;
  category: "taxi" | "rental" | "premium" | "ev";
  typeLabel: string;
  share: string;
  description: string;
}

const FLEET_COMPANIES: FleetCompany[] = [
  {
    name: "PT. Satu Kosong Tujuh",
    logo: "/assets/logo/partners/trimmed/pt-satu-kosong-7.png",
    status: "Active",
    subscription: "Active",
    vehicles: 2668,
    category: "taxi",
    typeLabel: "Taksi Reguler & Perkotaan",
    share: "60.3%",
    description: "Mitra operator armada taksi perkotaan terbesar dalam jaringan SEVA.",
  },
  {
    name: "PT Transgo Mobility Rental",
    logo: "/assets/logo/partners/trimmed/transgo.png",
    status: "Active",
    subscription: "Active",
    vehicles: 1126,
    category: "rental",
    typeLabel: "Rental & Airport Mobility",
    share: "25.4%",
    description: "Spesialis persewaan armada bandara dan korporasi terstandarisasi.",
  },
  {
    name: "PT Express Trasindo Utama, Tbk",
    logo: "/assets/logo/partners/trimmed/express-group.png",
    status: "Active",
    subscription: "Active",
    vehicles: 386,
    category: "taxi",
    typeLabel: "Taksi Publik Reguler",
    share: "8.7%",
    description: "Salah satu korporasi taksi publik legendaris dan berlisensi di Indonesia.",
  },
  {
    name: "PT. Karya Kreatif Andalan",
    logo: "/assets/logo/partners/trimmed/kka.png",
    status: "Active",
    subscription: "Active",
    vehicles: 92,
    category: "rental",
    typeLabel: "Car Rental & On-Demand",
    share: "2.1%",
    description: "Penyedia mobil rental harian dan bulanan dengan perawatan berkala.",
  },
  {
    name: "PT Luxury Trans Indonesia",
    logo: "/assets/logo/partners/trimmed/lti.png",
    status: "Active",
    subscription: "Active",
    vehicles: 55,
    category: "premium",
    typeLabel: "Premium Fleet & VIP Transfer",
    share: "1.2%",
    description: "Layanan transportasi eksekutif untuk perjalanan bisnis dan pariwisata.",
  },
  {
    name: "PT. Sinergi Armada Grup",
    logo: "/assets/logo/partners/sinergi-armada-grup.png",
    status: "Active",
    subscription: "Active",
    vehicles: 39,
    category: "taxi",
    typeLabel: "Armada Taksi & Shuttle",
    share: "0.9%",
    description: "Konsorsium pengelola armada transportasi penumpang metropolitan.",
  },
  {
    name: "PT. Empati Persona Djaya Bersama",
    logo: "/assets/logo/partners/empati-persona-djaya.png",
    status: "Active",
    subscription: "Active",
    vehicles: 14,
    category: "rental",
    typeLabel: "Shuttle & Car Rental",
    share: "0.3%",
    description: "Armada operasional pendukung mobilitas harian dan pengantaran.",
  },
  {
    name: "Sarnaz Transport Indonesia",
    logo: "/assets/logo/partners/trimmed/sarnaz-transport.png",
    status: "Active",
    subscription: "Active",
    vehicles: 10,
    category: "rental",
    typeLabel: "Transportasi Penumpang",
    share: "0.2%",
    description: "Operator armada regional dengan fokus kenyamanan perjalanan.",
  },
  {
    name: "RENEWA GREEN ENERGY",
    logo: "/assets/logo/partners/trimmed/renewa.png",
    status: "Active",
    subscription: "Active",
    vehicles: 0,
    category: "ev",
    typeLabel: "Pionir Mobil Listrik (BEV)",
    share: "0.0%",
    description: "Mitra transisi armada masa depan ramah lingkungan bebas emisi (dalam tahap penyiapan unit).",
  },
];

export default function FleetOperatorDirectory() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filtered = FLEET_COMPANIES.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.typeLabel.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
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
              <span>DAFTAR MITRA FLEET TERDAFTAR</span>
            </div>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
              Perusahaan Fleet Operator Terintegrasi
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Sebanyak <strong>{totalVehicles.toLocaleString("id-ID")} unit armada</strong> dari 10 perusahaan telah terdaftar resmi dan beroperasi dalam ekosistem mobilitas SEVA.
            </p>
          </div>

          {/* Quick Counter Card */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center border border-blue-100">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 font-mono">
                {totalVehicles.toLocaleString("id-ID")}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Total Armada Terdaftar
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              type="button"
              onClick={() => setFilterCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                filterCategory === "all"
                  ? "bg-[#225FD2] text-white border-[#225FD2] shadow-xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Semua Operator ({FLEET_COMPANIES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("taxi")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                filterCategory === "taxi"
                  ? "bg-[#225FD2] text-white border-[#225FD2] shadow-xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Taksi Reguler
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("rental")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                filterCategory === "rental"
                  ? "bg-[#225FD2] text-white border-[#225FD2] shadow-xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Rental Mobil
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("premium")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                filterCategory === "premium"
                  ? "bg-[#225FD2] text-white border-[#225FD2] shadow-xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              VIP &amp; Premium
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("ev")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                filterCategory === "ev"
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              EV Listrik
            </button>
          </div>

          {/* Search Box */}
          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              aria-label="Cari nama perusahaan armada"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama perusahaan armada..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-[#225FD2] transition-colors"
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden mb-6">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              <tr>
                <th scope="col" className="py-4 px-6">Perusahaan (Company)</th>
                <th scope="col" className="py-4 px-6 text-center">Status</th>
                <th scope="col" className="py-4 px-6 text-right">Jumlah Armada (Vehicles)</th>
                <th scope="col" className="py-4 px-6 text-right">Pangsa (%)</th>
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
                        <div className="text-xs text-slate-500 font-normal">{item.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Active
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-slate-900 text-base">
                    {item.vehicles.toLocaleString("id-ID")}{" "}
                    <span className="text-xs text-slate-400 font-normal">Unit</span>
                  </td>
                  <td className="py-4 px-6 text-right text-xs text-slate-500 font-mono">
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
                    <div className="text-[11px] text-slate-500 truncate">{item.typeLabel}</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                  Active
                </span>
              </div>

              <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl flex items-center justify-between">
                <span className="text-slate-500">Jumlah Armada:</span>
                <span className="font-mono font-bold text-slate-900 text-sm">
                  {item.vehicles.toLocaleString("id-ID")} Unit
                </span>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">
              Tidak ada operator yang cocok dengan pencarian &quot;{search}&quot;.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

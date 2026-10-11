"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Car,
  ChevronDown,
  HelpCircle,
  Mail,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  UserCheck,
} from "lucide-react";
import { FAQ_CATEGORY_LABELS, FAQ_LIST, type FaqCategory } from "@/lib/faq";
import { CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL, SUPPORT_EMAIL } from "@/lib/site";

type CategoryFilter = "all" | FaqCategory;

const CATEGORIES: { id: CategoryFilter; label: string; icon: LucideIcon }[] = [
  { id: "all", label: "Semua Kategori", icon: Sparkles },
  { id: "booking", label: "Pemesanan & Tarif", icon: Car },
  { id: "send", label: "SEVA Send & Food", icon: Package },
  { id: "ewallet", label: "SEVA eWallet", icon: Wallet },
  { id: "driver", label: "Mitra Driver", icon: UserCheck },
  { id: "safety", label: "Keamanan & Akun", icon: ShieldCheck },
  { id: "partner", label: "Fleet & Korporat", icon: Building2 },
];

export default function FaqCenter() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ [FAQ_LIST[0].id]: true });

  const toggleItem = (id: string) => setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));

  const query = search.trim().toLowerCase();
  const filteredFAQs = FAQ_LIST.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      FAQ_CATEGORY_LABELS[faq.category].toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-10 sm:py-16 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar: menempel saat halaman di-scroll (desktop) */}
          <aside className="lg:col-span-4 lg:self-start lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto no-scrollbar space-y-4">
            {/* Search Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs space-y-3">
              <label htmlFor="faq-search" className="text-xs uppercase tracking-wider font-bold text-slate-700 block">
                Cari Jawaban
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="faq-search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ketik kata kunci (tarif, eWallet, driver)..."
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#225FD2] focus:bg-white focus:ring-2 focus:ring-blue-500/15 transition-all"
                />
              </div>
            </div>

            {/* Category Navigation */}
            <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-2xs">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-700 block px-2 mb-2">
                Kategori FAQ
              </span>
              <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const Icon = cat.icon;
                  const count = cat.id === "all" ? FAQ_LIST.length : FAQ_LIST.filter((f) => f.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      aria-pressed={isActive}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        isActive ? "bg-[#225FD2] text-white shadow-2xs font-bold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{cat.label}</span>
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                          isActive ? "bg-white text-[#225FD2]" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-[#194cb0] to-[#225FD2] text-white shadow-md space-y-3">
              <div className="space-y-1">
                <h2 className="font-bold text-sm">Butuh Bantuan Lain?</h2>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Hubungi tim bantuan SEVA untuk kendala perjalanan, pembayaran, atau akun.
                </p>
              </div>
              <div className="space-y-2 pt-1 text-xs font-semibold">
                <a
                  href={`${CONTACT_WHATSAPP_URL}?text=Halo%20Tim%20Customer%20Care%20SEVA,%20saya%20butuh%20informasi%20bantuan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp: {CONTACT_PHONE_DISPLAY}</span>
                </a>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center gap-2 border border-white/20 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{SUPPORT_EMAIL}</span>
                </a>
              </div>
            </div>
          </aside>

          {/* FAQ list */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between pb-1 text-xs text-slate-500">
              <span>
                Menampilkan <strong className="text-slate-800">{filteredFAQs.length}</strong> pertanyaan
              </span>
              {(activeCategory !== "all" || query) && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("all");
                    setSearch("");
                  }}
                  className="text-[#225FD2] hover:underline font-semibold cursor-pointer"
                >
                  Reset Filter
                </button>
              )}
            </div>

            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => {
                const isOpen = !!openIds[faq.id] || !!query;
                const panelId = `faq-panel-${faq.id}`;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs transition-colors hover:border-slate-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <div className="space-y-1 pr-2">
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#225FD2] bg-blue-50 px-2 py-0.5 rounded">
                          {FAQ_CATEGORY_LABELS[faq.category]}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{faq.question}</h3>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                          isOpen ? "bg-blue-50 border-blue-200 text-[#225FD2] rotate-180" : "bg-slate-50 border-slate-200 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div id={panelId} className="px-4 sm:px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-3">
                        <p>{faq.answer}</p>
                        {faq.link && (
                          <Link
                            href={faq.link.href}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#225FD2] hover:underline"
                          >
                            {faq.link.label}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-10 text-center bg-white rounded-2xl border border-slate-200">
                <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">
                  Tidak ditemukan pertanyaan yang cocok dengan &quot;{search}&quot;
                </p>
                <p className="text-xs text-slate-500 mt-1">Coba kata kunci lain atau pilih &quot;Semua Kategori&quot;.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

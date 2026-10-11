"use client";

import { useState } from "react";
import Link from "next/link";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ArrowRightIcon as ArrowRight, BuildingsIcon as Building2, CarIcon as Car, CaretDownIcon as ChevronDown, QuestionIcon as HelpCircle, EnvelopeSimpleIcon as Mail, PackageIcon as Package, PhoneIcon as Phone, MagnifyingGlassIcon as Search, ShieldCheckIcon as ShieldCheck, SparkleIcon as Sparkles, WalletIcon as Wallet, UserCheckIcon as UserCheck } from "@phosphor-icons/react/dist/ssr";
import { FAQ_CATEGORY_LABELS, FAQ_LIST, type FaqCategory } from "@/lib/faq";
import { FAQ_CATEGORY_LABELS_EN, FAQ_LIST_EN } from "@/lib/faq-en";
import { localePath, type Locale } from "@/lib/i18n";
import { CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL, SUPPORT_EMAIL } from "@/lib/site";

type CategoryFilter = "all" | FaqCategory;

const CATEGORY_ICONS: { id: CategoryFilter; icon: PhosphorIcon }[] = [
  { id: "all", icon: Sparkles },
  { id: "booking", icon: Car },
  { id: "send", icon: Package },
  { id: "ewallet", icon: Wallet },
  { id: "driver", icon: UserCheck },
  { id: "safety", icon: ShieldCheck },
  { id: "partner", icon: Building2 },
];

// Pintu masuk per peran pengguna, seperti pusat bantuan Gojek/Grab; tiap peran memfilter kategori yang relevan.
type AudienceCategory = "booking" | "send" | "driver" | "partner";
const AUDIENCE_CATEGORIES: AudienceCategory[] = ["booking", "send", "driver", "partner"];

const COPY: Record<
  Locale,
  {
    list: typeof FAQ_LIST;
    categoryLabels: Record<FaqCategory, string>;
    /** Label pendek untuk tombol kategori di sidebar. */
    categories: Record<CategoryFilter, string>;
    audiences: Record<AudienceCategory, { label: string; desc: string }>;
    audienceTitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    categoryTitle: string;
    helpTitle: string;
    helpBody: string;
    report: string;
    whatsappText: string;
    showing: (n: number) => [string, string];
    reset: string;
    emptyTitle: (q: string) => string;
    emptyLead: string;
    emptyLink: string;
  }
> = {
  id: {
    list: FAQ_LIST,
    categoryLabels: FAQ_CATEGORY_LABELS,
    categories: {
      all: "Semua Kategori",
      booking: "Pemesanan & Tarif",
      send: "SEVA Send & Food",
      ewallet: "SEVA eWallet",
      driver: "Mitra Driver",
      safety: "Keamanan & Akun",
      partner: "Fleet & Korporat",
    },
    audiences: {
      booking: { label: "Penumpang", desc: "Pesan, tarif, perjalanan" },
      send: { label: "Pengirim paket", desc: "SEVA Send & pelacakan" },
      driver: { label: "Mitra driver", desc: "Daftar, bagi hasil, jam kerja" },
      partner: { label: "Fleet & korporat", desc: "Armada, akun perusahaan" },
    },
    audienceTitle: "Saya butuh bantuan sebagai",
    searchLabel: "Cari Jawaban",
    searchPlaceholder: "Ketik kata kunci (tarif, eWallet, driver)...",
    categoryTitle: "Kategori FAQ",
    helpTitle: "Butuh Bantuan Lain?",
    helpBody: "Hubungi tim bantuan SEVA untuk kendala perjalanan, pembayaran, atau akun.",
    report: "Laporkan Masalah",
    whatsappText: "Halo Tim Customer Care SEVA, saya butuh informasi bantuan.",
    showing: () => ["Menampilkan", "pertanyaan"],
    reset: "Reset Filter",
    emptyTitle: (q) => `Tidak ditemukan pertanyaan yang cocok dengan "${q}"`,
    emptyLead: "Coba kata kunci lain, atau",
    emptyLink: "laporkan masalah Anda",
  },
  en: {
    list: FAQ_LIST_EN,
    categoryLabels: FAQ_CATEGORY_LABELS_EN,
    categories: {
      all: "All Categories",
      booking: "Booking & Fares",
      send: "SEVA Send & Food",
      ewallet: "SEVA eWallet",
      driver: "Driver Partners",
      safety: "Safety & Account",
      partner: "Fleet & Corporate",
    },
    audiences: {
      booking: { label: "Passenger", desc: "Booking, fares, trips" },
      send: { label: "Parcel sender", desc: "SEVA Send & tracking" },
      driver: { label: "Driver partner", desc: "Sign-up, earnings, hours" },
      partner: { label: "Fleet & corporate", desc: "Fleets, company accounts" },
    },
    audienceTitle: "I need help as a",
    searchLabel: "Search Answers",
    searchPlaceholder: "Type a keyword (fare, eWallet, driver)...",
    categoryTitle: "FAQ Categories",
    helpTitle: "Need More Help?",
    helpBody: "Contact the SEVA help team about trips, payments, or your account.",
    report: "Report a Problem",
    whatsappText: "Hello SEVA Customer Care, I need some help.",
    showing: (n) => ["Showing", n === 1 ? "question" : "questions"],
    reset: "Reset Filters",
    emptyTitle: (q) => `No questions match "${q}"`,
    emptyLead: "Try another keyword, or",
    emptyLink: "report your problem",
  },
};

export default function FaqCenter({ locale = "id" }: { locale?: Locale }) {
  const t = COPY[locale];
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ [t.list[0].id]: true });

  const toggleItem = (id: string) => setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));

  const query = search.trim().toLowerCase();
  const filteredFAQs = t.list.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      t.categoryLabels[faq.category].toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-10 sm:py-16 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-slate-900">{t.audienceTitle}</h2>
          <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {AUDIENCE_CATEGORIES.map((category) => ({ category, ...t.audiences[category] })).map((a) => {
              const isActive = activeCategory === a.category;
              return (
                <button
                  key={a.category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(a.category);
                    setSearch("");
                  }}
                  aria-pressed={isActive}
                  className={`p-3 sm:p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                    isActive ? "border-[#225FD2] bg-white ring-1 ring-[#225FD2]" : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <span className={`block text-sm font-semibold ${isActive ? "text-[#225FD2]" : "text-slate-900"}`}>{a.label}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">{a.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar: menempel saat halaman di-scroll (desktop) */}
          <aside className="lg:col-span-4 lg:self-start lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto no-scrollbar space-y-4">
            {/* Search Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs space-y-3">
              <label htmlFor="faq-search" className="text-xs uppercase tracking-wider font-bold text-slate-700 block">
                {t.searchLabel}
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="faq-search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#225FD2] focus:bg-white focus:ring-2 focus:ring-blue-500/15 transition-all"
                />
              </div>
            </div>

            {/* Category Navigation */}
            <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-2xs">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-700 block px-2 mb-2">
                {t.categoryTitle}
              </span>
              <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
                {CATEGORY_ICONS.map(({ id, icon }) => ({ id, icon, label: t.categories[id] })).map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const Icon = cat.icon;
                  const count = cat.id === "all" ? t.list.length : t.list.filter((f) => f.category === cat.id).length;
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
                <h2 className="font-bold text-sm">{t.helpTitle}</h2>
                <p className="text-xs text-blue-100 leading-relaxed">
                  {t.helpBody}
                </p>
              </div>
              <div className="space-y-2 pt-1 text-xs font-semibold">
                <a
                  href="#laporkan-masalah"
                  className="w-full py-2 px-3 rounded-lg bg-white text-[#225FD2] hover:bg-blue-50 flex items-center justify-center gap-2 transition-all"
                >
                  <span>{t.report}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(t.whatsappText)}`}
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
                {t.showing(filteredFAQs.length)[0]} <strong className="text-slate-800">{filteredFAQs.length}</strong>{" "}
                {t.showing(filteredFAQs.length)[1]}
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
                  {t.reset}
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
                          {t.categoryLabels[faq.category]}
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
                      <div id={panelId} className="px-4 sm:px-5 pb-5 pt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-3">
                        <p>{faq.answer}</p>
                        {faq.link && (
                          <Link
                            href={localePath(locale, faq.link.href)}
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
                  {t.emptyTitle(search)}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {t.emptyLead}{" "}
                  <a href="#laporkan-masalah" className="font-semibold text-[#225FD2] hover:underline">
                    {t.emptyLink}
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

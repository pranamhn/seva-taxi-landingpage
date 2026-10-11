"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
  Calendar,
  Train,
  Calculator,
  Package,
  Car,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readMinutes: number;
}

const PAGE_SIZE = 9;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });

const CATEGORY_STYLES: Record<
  string,
  {
    icon: typeof BookOpen;
    badge: string;
    gradient: string;
  }
> = {
  "Bandara & Stasiun": {
    icon: Train,
    badge: "bg-sky-50 text-sky-700 border-sky-200/80",
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
  },
  "Tarif & Biaya": {
    icon: Calculator,
    badge: "bg-blue-50 text-[#225FD2] border-blue-200/80",
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  },
  "Kirim Paket": {
    icon: Package,
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
  },
  "Mitra Driver": {
    icon: Car,
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
  },
  "Keamanan": {
    icon: ShieldCheck,
    badge: "bg-teal-50 text-teal-700 border-teal-200/80",
    gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
  },
};

const DEFAULT_CATEGORY_STYLE = {
  icon: BookOpen,
  badge: "bg-blue-50 text-[#225FD2] border-blue-200/80",
  gradient: "from-blue-500/10 via-slate-500/5 to-transparent",
};

export default function BlogExplorer({ articles }: { articles: ArticleSummary[] }) {
  const [category, setCategory] = useState("Semua");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => ["Semua", ...Array.from(new Set(articles.map((a) => a.category)))], [articles]);
  const q = query.trim().toLowerCase();
  const filtered = articles.filter(
    (a) =>
      (category === "Semua" || a.category === category) &&
      (!q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q))
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const goTo = (n: number) => {
    setPage(n);
    document.getElementById("daftar-artikel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const changeCategory = (c: string) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <section id="daftar-artikel" className="scroll-mt-20 py-10 sm:py-16 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Filter + pencarian */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto no-scrollbar py-1" role="group" aria-label="Kategori artikel">
            {categories.map((c) => {
              const active = c === category;
              const count = c === "Semua" ? articles.length : articles.filter((a) => a.category === c).length;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => changeCategory(c)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
                    active
                      ? "border-[#225FD2] bg-[#225FD2] text-white shadow-blue-500/20"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {c}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums ${
                      active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full shrink-0 lg:w-80">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Cari artikel (tarif, bandara, paket)..."
              aria-label="Cari artikel"
              className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#225FD2] focus:outline-none focus:ring-2 focus:ring-blue-500/15 shadow-2xs"
            />
          </div>
        </div>

        {/* Daftar artikel */}
        {pageItems.length > 0 ? (
          <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((a) => {
              const catStyle = CATEGORY_STYLES[a.category] || DEFAULT_CATEGORY_STYLE;
              const CatIcon = catStyle.icon;

              return (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-blue-300/80 transition-all duration-300 overflow-hidden"
                >
                  {/* Soft Decorative Ambient Top Mesh */}
                  <div
                    className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${catStyle.gradient} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Top Badges: Category & Reading Time */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${catStyle.badge}`}>
                        <CatIcon className="w-3.5 h-3.5" />
                        <span>{a.category}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{a.readMinutes} mnt baca</span>
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-4 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <time dateTime={a.published}>{formatDate(a.published)}</time>
                    </div>

                    {/* Title */}
                    <h2 className="text-base sm:text-lg font-bold leading-snug text-slate-900 group-hover:text-[#225FD2] transition-colors line-clamp-2">
                      {a.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                      {a.description}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs sm:text-[13px] font-bold text-slate-700 group-hover:text-[#225FD2] transition-colors">
                      Baca Selengkapnya
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#225FD2] text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xs">
            <p className="text-sm font-semibold text-slate-700">
              Belum ada artikel yang cocok dengan &quot;{query}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                changeCategory("Semua");
              }}
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#225FD2] hover:underline cursor-pointer"
            >
              <span>Tampilkan semua artikel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between" aria-label="Halaman artikel">
            <p className="text-xs text-slate-500 font-medium">
              Menampilkan <span className="text-slate-900 font-bold tabular-nums">{(current - 1) * PAGE_SIZE + 1}–{Math.min(current * PAGE_SIZE, filtered.length)}</span> dari <span className="text-slate-900 font-bold tabular-nums">{filtered.length}</span> artikel
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                disabled={current === 1}
                aria-label="Halaman sebelumnya"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => goTo(n)}
                  aria-current={n === current ? "page" : undefined}
                  className={`h-9 min-w-9 rounded-xl border px-3 text-xs sm:text-sm font-bold tabular-nums transition-all cursor-pointer shadow-2xs ${
                    n === current
                      ? "border-[#225FD2] bg-[#225FD2] text-white shadow-blue-500/25"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                disabled={current === totalPages}
                aria-label="Halaman berikutnya"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer shadow-2xs"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}

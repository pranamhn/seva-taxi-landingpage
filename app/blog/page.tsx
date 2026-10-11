import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleHelp, Megaphone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import BlogExplorer from "@/components/sections/BlogExplorer";
import { ARTICLES } from "@/lib/articles";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_NAME, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Panduan & Tips Perjalanan",
  description:
    "Panduan SEVA seputar tarif ojek dan taksi online di Jakarta, perjalanan ke bandara dan stasiun, kirim paket instan, dan cara daftar driver di Jabodetabek.",
  path: "/blog",
});

// Urutkan terbaru dulu; artikel pertama menjadi panduan unggulan.
const SORTED = [...ARTICLES].sort((a, b) => b.published.localeCompare(a.published));

export default function PanduanPage() {
  const summaries = SORTED.map(({ slug, title, description, category, published, readMinutes }) => ({
    slug,
    title,
    description,
    category,
    published,
    readMinutes,
  }));
  const categoryCount = new Set(ARTICLES.map((a) => a.category)).size;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Panduan ${SITE_NAME}`,
    url: `${SITE_URL}/blog`,
    inLanguage: "id-ID",
    blogPost: SORTED.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE_URL}/blog/${a.slug}`,
      datePublished: a.published,
    })),
  };

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
        <PageHeader
          badge="BLOG SEVA // PANDUAN & TIPS"
          title="Panduan & Tips Perjalanan"
          subtitle="Cara menghitung tarif, tips ke bandara dan stasiun, aturan kirim paket, hingga cara daftar jadi driver. Semua yang perlu Anda tahu untuk bepergian di Jabodetabek."
          breadcrumbs={[{ label: "Blog" }]}
          metrics={[
            { label: "Artikel", value: `${ARTICLES.length} Artikel`, hint: "Diperbarui berkala" },
            { label: "Topik", value: `${categoryCount} Kategori`, hint: "Tarif, bandara, paket" },
          ]}
        />

        <BlogExplorer articles={summaries} />

        {/* Bantuan lanjutan */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link
              href="/faq"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200"
            >
              <CircleHelp className="h-6 w-6 text-[#225FD2]" />
              <div className="mt-6">
                <h2 className="text-base font-bold text-slate-900">Butuh jawaban cepat?</h2>
                <p className="mt-1 text-sm text-slate-600">Cari di Pusat Bantuan berisi tanya-jawab seputar layanan SEVA.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#225FD2]">
                  Buka FAQ <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
            <Link
              href="/how-it-works"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200"
            >
              <BookOpen className="h-6 w-6 text-[#225FD2]" />
              <div className="mt-6">
                <h2 className="text-base font-bold text-slate-900">Baru pertama kali pesan?</h2>
                <p className="mt-1 text-sm text-slate-600">Pelajari alur pemesanan, cara hitung tarif, dan pembayaran.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#225FD2]">
                  Lihat cara kerja <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#194cb0] to-[#225FD2] p-6 text-white"
            >
              <Megaphone className="h-6 w-6" />
              <div className="mt-6">
                <h2 className="text-base font-bold">Ikuti info terbaru</h2>
                <p className="mt-1 text-sm text-blue-100">Pengumuman layanan dan tips perjalanan di Instagram.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                  {INSTAGRAM_HANDLE} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

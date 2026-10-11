import Link from "next/link";
import { ArrowRightIcon as ArrowRight, BookOpenIcon as BookOpen, QuestionIcon as CircleHelp, MegaphoneIcon as Megaphone } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import BlogExplorer from "@/components/sections/BlogExplorer";
import type { Article } from "@/lib/articles";
import { localePath, type Locale } from "@/lib/i18n";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export const BLOG_COPY = {
  id: {
    metaTitle: "Blog: Panduan & Tips Perjalanan",
    metaDescription:
      "Panduan SEVA seputar tarif ojek dan taksi online di Jakarta, perjalanan ke bandara dan stasiun, kirim paket instan, dan cara daftar driver di Jabodetabek.",
    blogName: `Panduan ${SITE_NAME}`,
    inLanguage: "id-ID",
    badge: "BLOG SEVA // PANDUAN & TIPS",
    title: "Panduan & Tips Perjalanan",
    subtitle:
      "Cara menghitung tarif, tips ke bandara dan stasiun, aturan kirim paket, hingga cara daftar jadi driver. Semua yang perlu Anda tahu untuk bepergian di Jabodetabek.",
    metrics: (articles: number, categories: number) => [
      { label: "Artikel", value: `${articles} Artikel`, hint: "Diperbarui berkala" },
      { label: "Topik", value: `${categories} Kategori`, hint: "Tarif, bandara, paket" },
    ],
    faqTitle: "Butuh jawaban cepat?",
    faqBody: "Cari di Pusat Bantuan berisi tanya-jawab seputar layanan SEVA.",
    faqCta: "Buka FAQ",
    howTitle: "Baru pertama kali pesan?",
    howBody: "Pelajari alur pemesanan, cara hitung tarif, dan pembayaran.",
    howCta: "Lihat cara kerja",
    igTitle: "Ikuti info terbaru",
    igBody: "Pengumuman layanan dan tips perjalanan di Instagram.",
  },
  en: {
    metaTitle: "Blog: Travel Guides & Tips",
    metaDescription:
      "SEVA guides to motorbike taxi and online taxi fares in Jakarta, trips to airports and stations, same-day parcel delivery, and becoming a driver in Greater Jakarta.",
    blogName: `${SITE_NAME} Guides`,
    inLanguage: "en",
    badge: "SEVA BLOG // GUIDES & TIPS",
    title: "Travel Guides & Tips",
    subtitle:
      "How fares are calculated, tips for airports and stations, parcel rules, and how to become a driver. Everything you need to get around Greater Jakarta.",
    metrics: (articles: number, categories: number) => [
      { label: "Articles", value: `${articles} Articles`, hint: "Updated regularly" },
      { label: "Topics", value: `${categories} Categories`, hint: "Fares, airports, parcels" },
    ],
    faqTitle: "Need a quick answer?",
    faqBody: "Search the Help Center for answers about SEVA services.",
    faqCta: "Open FAQ",
    howTitle: "Booking for the first time?",
    howBody: "Learn how booking, fares, and payment work.",
    howCta: "See how it works",
    igTitle: "Follow the latest news",
    igBody: "Service announcements and travel tips on Instagram.",
  },
};

// Dipakai app/(id)/blog dan app/(en)/en/blog.
export default function BlogIndexPage({ locale, articles }: { locale: Locale; articles: Article[] }) {
  const t = BLOG_COPY[locale];
  const lp = (href: string) => localePath(locale, href);
  // Urutkan terbaru dulu.
  const sorted = [...articles].sort((a, b) => b.published.localeCompare(a.published));
  const summaries = sorted.map(({ slug, title, description, category, published, readMinutes }) => ({
    slug,
    title,
    description,
    category,
    published,
    readMinutes,
  }));
  const categoryCount = new Set(articles.map((a) => a.category)).size;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: t.blogName,
    url: `${SITE_URL}${lp("/blog")}`,
    inLanguage: t.inLanguage,
    blogPost: sorted.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE_URL}${lp(`/blog/${a.slug}`)}`,
      datePublished: a.published,
    })),
  };

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: "Blog" }]}
          metrics={t.metrics(articles.length, categoryCount)}
        />

        <BlogExplorer articles={summaries} locale={locale} />

        {/* Bantuan lanjutan */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link
              href={lp("/faq")}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200"
            >
              <CircleHelp className="h-6 w-6 text-[#225FD2]" />
              <div className="mt-6">
                <h2 className="text-base font-bold text-slate-900">{t.faqTitle}</h2>
                <p className="mt-1 text-sm text-slate-600">{t.faqBody}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#225FD2]">
                  {t.faqCta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
            <Link
              href={lp("/how-it-works")}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200"
            >
              <BookOpen className="h-6 w-6 text-[#225FD2]" />
              <div className="mt-6">
                <h2 className="text-base font-bold text-slate-900">{t.howTitle}</h2>
                <p className="mt-1 text-sm text-slate-600">{t.howBody}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#225FD2]">
                  {t.howCta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
                <h2 className="text-base font-bold">{t.igTitle}</h2>
                <p className="mt-1 text-sm text-blue-100">{t.igBody}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                  {INSTAGRAM_HANDLE} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

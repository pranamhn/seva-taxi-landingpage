import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon as ArrowRight, ArrowUpRightIcon as ArrowUpRight, DownloadSimpleIcon as Download, EnvelopeSimpleIcon as Mail, CheckCircleIcon as CheckCircle2, ShieldCheckIcon as ShieldCheck, ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { INDUSTRY_NEWS, TOPIC_LABELS } from "@/lib/newsroom";
import { DATE_LOCALE, localePath, type Locale } from "@/lib/i18n";
import { SUPPORT_EMAIL } from "@/lib/site";

export const NEWSROOM_COPY = {
  id: {
    metaTitle: "Newsroom",
    metaDescription:
      "Sorotan berita industri ride-hailing di Indonesia — regulasi komisi 8%, tarif, dan keselamatan penumpang — beserta posisi SEVA terhadap setiap isu, plus kontak media dan aset merek.",
    badge: "NEWSROOM SEVA",
    title: "Sorotan Industri & Posisi SEVA",
    subtitle:
      "Kami merangkum berita penting tentang ride-hailing di Indonesia dan menjelaskan apa yang sudah SEVA jalankan untuk setiap isu: bagi hasil driver, tarif yang jelas, dan keselamatan penumpang.",
    readOn: (source: string) => `Baca di ${source}`,
    ready: "Kesiapan SEVA",
    disclaimer:
      'Artikel di atas adalah milik media masing-masing dan ditautkan ke sumber aslinya. SEVA tidak berafiliasi dengan media tersebut; ringkasan dan bagian "Kesiapan SEVA" ditulis oleh tim SEVA.',
    resourcesEyebrow: "PUSAT MEDIA & ASET MEREK",
    resourcesTitle: "Kontak Pers & Identitas Resmi",
    resourcesSubtitle: "Saluran komunikasi langsung bagi rekan media dan jurnalis, serta kit identitas visual beresolusi tinggi untuk kebutuhan publikasi resmi.",
    mediaTitle: "Kontak Redaksi & Media",
    mediaBody: "Untuk wawancara pimpinan, permintaan data operasional, konfirmasi pemberitaan, atau liputan lapangan.",
    mediaSubject: "Permintaan Media SEVA",
    mediaResponseTime: "Respon Cepat Tim Humas",
    mediaPoints: [
      "Wawancara eksekutif & data industri terkini",
      "Kutipan resmi pers dan rilis pers bersama",
      "Dokumentasi armada & liputan visual operasional",
    ],
    mediaCta: "Kirim Permintaan Media",
    brandTitle: "Aset Merek & Logo Resmi",
    brandBody: "Unduh logo resmi berkualitas tinggi dengan format transparan untuk menjaga konsistensi identitas merek SEVA.",
    brandEyebrow: "KIT IDENTITAS RESMI",
    brandRules: "Harap gunakan logo resmi tanpa mengubah proporsi warna, aspek rasio, atau menambahkan efek bayangan.",
    logoHorizontalName: "Logo Utama Horizontal",
    logoHorizontalSpec: "PNG Transparan · 864 × 272 px",
    logoSquareName: "Logo Persegi / App Icon",
    logoSquareSpec: "PNG Transparan · 512 × 512 px",
    downloadBtn: "Unduh File",
  },
  en: {
    metaTitle: "Newsroom",
    metaDescription:
      "Key ride-hailing industry news in Indonesia — the 8% commission cap, fares, and passenger safety — with SEVA's position on each issue, plus media contacts and brand assets.",
    badge: "SEVA NEWSROOM",
    title: "Industry Highlights & Where SEVA Stands",
    subtitle:
      "We summarise key ride-hailing news in Indonesia and explain what SEVA already does on each issue: driver earnings, clear fares, and passenger safety. Source articles are in Indonesian.",
    readOn: (source: string) => `Read on ${source} (Indonesian)`,
    ready: "Where SEVA Stands",
    disclaimer:
      'The articles above belong to their respective publishers and link to the original source. SEVA is not affiliated with these publishers; the summaries and "Where SEVA Stands" notes are written by the SEVA team.',
    resourcesEyebrow: "MEDIA HUB & BRAND ASSETS",
    resourcesTitle: "Press Relations & Official Brand Kit",
    resourcesSubtitle: "Direct communication access for press and journalists, along with high-resolution visual identity files for official publications.",
    mediaTitle: "Editorial & Media Contact",
    mediaBody: "For executive interviews, operational data requests, fact-checking, or on-the-ground news coverage.",
    mediaSubject: "SEVA Media Request",
    mediaResponseTime: "Fast Press Response",
    mediaPoints: [
      "Executive interviews & industry data insights",
      "Official press quotes & joint media releases",
      "Fleet photo documentation & field press inquiries",
    ],
    mediaCta: "Send Media Request",
    brandTitle: "Brand Assets & Official Logos",
    brandBody: "Download high-resolution official logos in transparent format to maintain SEVA brand consistency.",
    brandEyebrow: "OFFICIAL BRAND KIT",
    brandRules: "Please use official assets without modifying colors, proportions, or adding distortion effects.",
    logoHorizontalName: "Primary Horizontal Logo",
    logoHorizontalSpec: "Transparent PNG · 864 × 272 px",
    logoSquareName: "Square Logo / App Icon",
    logoSquareSpec: "Transparent PNG · 512 × 512 px",
    downloadBtn: "Download File",
  },
} as const;

const news = [...INDUSTRY_NEWS].sort((a, b) => b.published.localeCompare(a.published));

// Dipakai app/(id)/newsroom dan app/(en)/en/newsroom.
export default function NewsroomPage({ locale }: { locale: Locale }) {
  const t = NEWSROOM_COPY[locale];
  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00+07:00`).toLocaleDateString(DATE_LOCALE[locale], {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta",
    });

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader locale={locale} badge={t.badge} title={t.title} subtitle={t.subtitle} breadcrumbs={[{ label: "Newsroom" }]} />

        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <ol className="space-y-4">
              {news.map((n) => {
                const pos = n.sevaPosition[locale];
                return (
                  <li key={n.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                      {/* Berita */}
                      <article className="p-5 sm:p-6">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                          <span className="font-semibold text-slate-700">{n.source}</span>
                          <span aria-hidden="true">·</span>
                          <time dateTime={n.published} className="tabular-nums">{formatDate(n.published)}</time>
                          <span className="ml-1 px-2 py-0.5 rounded bg-slate-100 text-[11px] font-semibold text-slate-600">
                            {TOPIC_LABELS[locale][n.topic]}
                          </span>
                        </div>
                        <h2 className="mt-2 text-base sm:text-lg font-bold tracking-tight text-slate-900" lang="id">
                          <a href={n.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#225FD2] transition-colors">
                            {n.title}
                          </a>
                        </h2>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{n.summary[locale]}</p>
                        <a
                          href={n.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-[#225FD2] transition-colors"
                        >
                          {t.readOn(n.source)}
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </article>

                      {/* Posisi SEVA */}
                      <div className="p-5 sm:p-6 bg-blue-50/50 border-t lg:border-t-0 lg:border-l border-slate-200">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#225FD2]">{t.ready}</p>
                        <h3 className="mt-1 font-semibold text-slate-900">{pos.headline}</h3>
                        <ul className="mt-2 space-y-1.5 text-sm text-slate-700 leading-relaxed list-disc pl-4 marker:text-[#225FD2]">
                          {pos.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                        <Link href={localePath(locale, pos.href)} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#225FD2] hover:underline">
                          {pos.cta}
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="mt-6 text-xs text-slate-500 leading-relaxed max-w-3xl">{t.disclaimer}</p>
          </div>
        </section>

        {/* Kontak media & aset merek */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 border-b border-slate-200/80 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {t.resourcesTitle}
              </h2>
              <p className="mt-2.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {t.resourcesSubtitle}
              </p>
            </div>

            {/* Grid 2 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              
              {/* Card 1: Kontak Media */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_15px_35px_-20px_rgba(34,95,210,0.10)] hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <Mail weight="duotone" className="w-9 h-9 text-[#225FD2] group-hover:scale-105 transition-transform" />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {t.mediaResponseTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {t.mediaTitle}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {t.mediaBody}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                    {t.mediaPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#225FD2] mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email Resmi Redaksi</p>
                      <p className="text-sm font-semibold text-slate-900 truncate mt-0.5">{SUPPORT_EMAIL}</p>
                    </div>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(t.mediaSubject)}`}
                      className="inline-flex items-center justify-center gap-2 h-10 px-4.5 rounded-xl bg-[#225FD2] hover:bg-[#1a4bb3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all shrink-0"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{t.mediaCta}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Aset Merek & Logo */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_15px_35px_-20px_rgba(34,95,210,0.10)] hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <ImageIcon weight="duotone" className="w-9 h-9 text-indigo-600 group-hover:scale-105 transition-transform" />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs">
                      {t.brandEyebrow}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {t.brandTitle}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {t.brandBody}
                  </p>

                  {/* Logo Download Mini Cards with Visual Previews */}
                  <div className="mt-5 space-y-3">
                    {/* Logo Horizontal */}
                    <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/item hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-24 h-12 bg-white rounded-xl border border-slate-200/70 flex items-center justify-center p-2 shrink-0 shadow-2xs">
                          <Image
                            src="/assets/logo/logo-seva.png"
                            alt="Logo SEVA Horizontal"
                            width={80}
                            height={25}
                            className="max-h-7 w-auto object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">{t.logoHorizontalName}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{t.logoHorizontalSpec}</p>
                        </div>
                      </div>
                      <a
                        href="/assets/logo/logo-seva.png"
                        download
                        className="inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#225FD2] hover:text-[#225FD2] text-xs font-semibold text-slate-700 transition-all shadow-2xs shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{t.downloadBtn}</span>
                      </a>
                    </div>

                    {/* Logo Persegi / App Icon */}
                    <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/item hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-24 h-12 bg-white rounded-xl border border-slate-200/70 flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
                          <Image
                            src="/assets/logo/logo-seva-square.png"
                            alt="Logo SEVA Square"
                            width={36}
                            height={36}
                            className="w-8 h-8 rounded-lg object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">{t.logoSquareName}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{t.logoSquareSpec}</p>
                        </div>
                      </div>
                      <a
                        href="/assets/logo/logo-seva-square.png"
                        download
                        className="inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#225FD2] hover:text-[#225FD2] text-xs font-semibold text-slate-700 transition-all shadow-2xs shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{t.downloadBtn}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.brandRules}</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

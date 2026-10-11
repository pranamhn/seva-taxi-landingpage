import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import { FARES } from "@/lib/articles";
import { AUDIENCE_LABELS, SERVICE_LABELS, activePromos } from "@/lib/promos";
import { DATE_LOCALE, localePath, type Locale } from "@/lib/i18n";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

const rp = (n: number, locale: Locale) => `Rp ${n.toLocaleString(locale === "en" ? "en-US" : "id-ID")}`;

export const PROMO_COPY = {
  id: {
    metaTitle: "Promo & Keuntungan",
    metaDescription:
      "Promo SEVA yang sedang berlaku untuk SEVA Ride, Car, dan Send, plus keuntungan tetap: tarif pasti tanpa lonjakan, bayar QRIS atau tunai, dan struk digital untuk klaim kantor.",
    badge: "PROMO SEVA",
    title: "Promo & Keuntungan",
    subtitle: "Promo yang sedang berlaku di aplikasi SEVA, ditambah keuntungan yang bisa Anda pakai setiap hari.",
    crumb: "Promo",
    activeTitle: "Promo Berlaku",
    automatic: "Otomatis di aplikasi",
    until: "s.d.",
    emptyTitle: "Belum ada promo yang berjalan saat ini.",
    emptyBodyLead: "Promo baru diumumkan lewat notifikasi aplikasi dan Instagram",
    emptyBodyTail: ". Sementara itu, keuntungan di bawah berlaku setiap hari.",
    alwaysTitle: "Keuntungan Setiap Hari",
    termsLead: "Syarat dan ketentuan lengkap tersedia di",
    termsLink: "Syarat & Ketentuan",
    alwaysOn: [
      { title: "Tarif pasti, tanpa lonjakan", desc: "Tarif tampil sebelum Anda memesan dan tidak naik sepihak saat jam sibuk atau hujan.", href: "/services" },
      {
        title: `Ojek mulai ${rp(FARES.ride.base, "id")}`,
        desc: `SEVA Ride ${rp(FARES.ride.base, "id")} + ${rp(FARES.ride.perKm, "id")}/km, SEVA Car mulai ${rp(FARES.car.base, "id")}.`,
        href: "/services/ride",
      },
      { title: "Batal gratis 5 menit (SEVA Car)", desc: "Pembatalan dalam 5 menit pertama setelah memesan SEVA Car tidak dikenai biaya.", href: "/faq" },
      { title: "Bayar sesuai pilihan", desc: "SEVA eWallet, QRIS dari e-wallet atau mobile banking, atau tunai ke driver.", href: "/faq" },
      { title: "Struk PDF untuk klaim kantor", desc: "Struk digital otomatis tersimpan di riwayat perjalanan dan bisa diunduh.", href: "/partner/b2b" },
      { title: "Driver: daftar gratis, bawa pulang 95%", desc: "Pendaftaran online tanpa biaya dan potongan platform hanya 5%.", href: "/partner/driver" },
    ],
  },
  en: {
    metaTitle: "Promos & Benefits",
    metaDescription:
      "Current SEVA promos for SEVA Ride, Car, and Send, plus everyday benefits: upfront fares with no surge, pay by QRIS or cash, and digital receipts for expense claims.",
    badge: "SEVA PROMOS",
    title: "Promos & Benefits",
    subtitle: "Promos currently running in the SEVA app, plus benefits you can use every day.",
    crumb: "Promos",
    activeTitle: "Current Promos",
    automatic: "Applied automatically",
    until: "until",
    emptyTitle: "There are no promos running right now.",
    emptyBodyLead: "New promos are announced through app notifications and on Instagram",
    emptyBodyTail: ". In the meantime, the benefits below apply every day.",
    alwaysTitle: "Everyday Benefits",
    termsLead: "Full terms and conditions are in our",
    termsLink: "Terms & Conditions",
    alwaysOn: [
      { title: "Upfront fares, no surge", desc: "Your fare is shown before you book and never jumps in rush hour or rain.", href: "/services" },
      {
        title: `Motorbike rides from ${rp(FARES.ride.base, "en")}`,
        desc: `SEVA Ride ${rp(FARES.ride.base, "en")} + ${rp(FARES.ride.perKm, "en")}/km, SEVA Car from ${rp(FARES.car.base, "en")}.`,
        href: "/services/ride",
      },
      { title: "Free 5-minute cancellation (SEVA Car)", desc: "Cancel within the first 5 minutes of booking a SEVA Car at no cost.", href: "/faq" },
      { title: "Pay your way", desc: "SEVA eWallet, QRIS from any e-wallet or mobile banking app, or cash to the driver.", href: "/faq" },
      { title: "PDF receipts for expense claims", desc: "Digital receipts are saved automatically in your trip history and can be downloaded.", href: "/partner/b2b" },
      { title: "Drivers: free sign-up, keep 95%", desc: "Free online registration and only a 5% platform fee.", href: "/partner/driver" },
    ],
  },
} as const;

// Dipakai app/(id)/promo dan app/(en)/en/promo.
export default function PromoPage({ locale }: { locale: Locale }) {
  const t = PROMO_COPY[locale];
  const lp = (href: string) => localePath(locale, href);
  const promos = activePromos();
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
        <PageHeader locale={locale} badge={t.badge} title={t.title} subtitle={t.subtitle} breadcrumbs={[{ label: t.crumb }]} />

        {/* Promo aktif */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{t.activeTitle}</h2>

            {promos.length > 0 ? (
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {promos.map((p) => {
                  const text = locale === "en" && p.en ? p.en : p;
                  return (
                    <li key={p.id} className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white">
                      <div>
                        <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold">
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-[#225FD2]">{SERVICE_LABELS[locale][p.service]}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600">{AUDIENCE_LABELS[locale][p.audience]}</span>
                        </div>
                        <h3 className="mt-3 font-semibold text-slate-900">{text.title}</h3>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{text.desc}</p>
                        {text.terms.length > 0 && (
                          <ul className="mt-3 list-disc pl-4 space-y-1 text-xs text-slate-500">
                            {text.terms.map((term) => (
                              <li key={term}>{term}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                        {p.code ? (
                          <span className="font-mono text-sm font-bold tracking-wider text-slate-900 px-2.5 py-1 rounded-lg border border-dashed border-slate-300">
                            {p.code}
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-emerald-700">{t.automatic}</span>
                        )}
                        <span className="text-xs text-slate-500 tabular-nums">
                          {t.until} {formatDate(p.validUntil)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="mt-6 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/70">
                <p className="font-semibold text-slate-900">{t.emptyTitle}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {t.emptyBodyLead}{" "}
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#225FD2] hover:underline">
                    {INSTAGRAM_HANDLE}
                  </a>
                  {t.emptyBodyTail}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Keuntungan tetap */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{t.alwaysTitle}</h2>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {t.alwaysOn.map((b) => (
                <li key={b.title}>
                  <Link
                    href={lp(b.href)}
                    className="group flex h-full flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#225FD2]/50 transition-colors"
                  >
                    <span>
                      <span className="block font-semibold text-slate-900 tabular-nums">{b.title}</span>
                      <span className="mt-1 block text-sm text-slate-600 leading-relaxed">{b.desc}</span>
                    </span>
                    <ArrowRight className="mt-4 w-4 h-4 text-slate-400 group-hover:text-[#225FD2] transition-colors" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              {t.termsLead}{" "}
              <Link href={lp("/terms")} className="font-semibold text-[#225FD2] hover:underline">
                {t.termsLink}
              </Link>
              .
            </p>
          </div>
        </section>

        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

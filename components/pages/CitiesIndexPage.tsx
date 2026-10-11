import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, HelpCircle, MapPin, Plane, Sparkles, Train } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CityCoverage from "@/components/sections/CityCoverage";
import CoverageMap from "@/components/sections/CoverageMap";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { localePath, type Locale } from "@/lib/i18n";

const HUB_ICONS: LucideIcon[] = [Plane, Plane, Train, Train];

export const CITIES_COPY = {
  id: {
    metaTitle: "Cakupan Wilayah Operasional",
    metaDescription:
      "Wilayah layanan SEVA di Jabodetabek: Jakarta, Bogor, Depok, Tangerang, dan Bekasi, termasuk penjemputan di Bandara Soekarno-Hatta, Halim, dan Whoosh.",
    badge: "ZONA OPERASIONAL // FOKUS JABODETABEK",
    title: "Cakupan Operasional SEVA",
    subtitle:
      "Saat ini SEVA beroperasi penuh di seluruh wilayah aglomerasi Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi), termasuk penjemputan di Bandara Soekarno-Hatta, Halim, dan hub transit KCIC Whoosh.",
    crumb: "Cakupan Wilayah",
    metrics: [
      { label: "Wilayah Operasional", value: "Jabodetabek", hint: "Jakarta, Bogor, Depok, Tangerang, Bekasi" },
      { label: "Ketersediaan Layanan", value: "Aktif 24/7", hint: "Siap melayani perjalanan" },
    ],
    hubsEyebrow: "TITIK TRANSIT UTAMA",
    hubsTitle: "Penjemputan Mudah di Bandara & Stasiun",
    hubsIntro: "Layanan SEVA siap sedia di gerbang kedatangan bandara internasional dan simpul transportasi utama Jabodetabek.",
    hubs: [
      {
        name: "Bandara Internasional Soekarno-Hatta (CGK)",
        location: "Tangerang, Banten",
        desc: "Titik penjemputan mudah di Terminal 1, Terminal 2, dan Terminal 3 kedatangan domestik maupun internasional.",
        badge: "Hub Bandara Utama",
      },
      {
        name: "Bandara Halim Perdanakusuma (HLP)",
        location: "Jakarta Timur",
        desc: "Penjemputan di area lobi kedatangan penumpang untuk rute cepat ke pusat bisnis Jakarta.",
        badge: "Hub Bandara Kota",
      },
      {
        name: "Stasiun Kereta Cepat Whoosh Halim",
        location: "Jakarta Timur",
        desc: "Integrasi langsung dengan kedatangan penumpang Whoosh rute Jakarta–Bandung untuk sambungan mobilitas perkotaan.",
        badge: "Hub KCIC Whoosh",
      },
      {
        name: "Simpul Transit KRL, MRT & LRT Jabodebek",
        location: "Seluruh Koridor Metropolitan",
        desc: "Penjemputan instan di sekitar stasiun Manggarai, Sudirman, Dukuh Atas, Lebak Bulus, hingga stasiun LRT Bekasi & Cibubur.",
        badge: "Hub Transit Publik",
      },
    ],
    faqEyebrow: "INFORMASI OPERASIONAL",
    faqTitle: "Pertanyaan Seputar Wilayah Layanan",
    faqIntro: "Punya pertanyaan tentang rute dan jangkauan penjemputan SEVA?",
    faqs: [
      {
        q: "Apakah SEVA saat ini sudah bisa dipesan di luar wilayah Jabodetabek?",
        a: "Untuk saat ini, operasional SEVA (SEVA RIDE, SEVA CAR, dan SEVA SEND) berfokus melayani seluruh kawasan Jabodetabek (Jakarta, Bogor, Depok, Tangerang, dan Bekasi) secara penuh 24 jam sehari.",
      },
      {
        q: "Apakah bisa memesan SEVA CAR untuk perjalanan ke luar Jabodetabek?",
        a: "Bisa, selama titik jemput awal berada di dalam wilayah operasional Jabodetabek dan tujuan akhir disepakati di dalam aplikasi sebelum perjalanan dimulai.",
      },
      {
        q: "Bagaimana sistem pembayaran tiket tol dan parkir bandara?",
        a: "Tarif yang tertera di aplikasi adalah tarif argo perjalanan dasar. Biaya tol dan tiket parkir resmi bandara/stasiun/gedung ditanggung oleh penumpang secara transparan sesuai tarif riil.",
      },
      {
        q: "Bagaimana cara mengetahui jika SEVA sudah aktif di kota saya?",
        a: "Anda dapat memantau notifikasi di aplikasi SEVA atau mengikuti akun media sosial resmi kami. Pengumuman wilayah baru akan disampaikan di kedua kanal tersebut.",
      },
    ],
    driverLead: "Ingin mendaftarkan armada Anda di Jabodetabek?",
    driverLink: "Kemitraan fleet operator",
  },
  en: {
    metaTitle: "Service Areas",
    metaDescription:
      "SEVA service areas in Greater Jakarta: Jakarta, Bogor, Depok, Tangerang, and Bekasi, including pickups at Soekarno-Hatta and Halim airports and Whoosh station.",
    badge: "SERVICE AREAS // GREATER JAKARTA",
    title: "Where SEVA Operates",
    subtitle:
      "SEVA currently covers all of Greater Jakarta (Jakarta, Bogor, Depok, Tangerang, Bekasi), including pickups at Soekarno-Hatta and Halim airports and the Whoosh high-speed rail hub.",
    crumb: "Service Areas",
    metrics: [
      { label: "Service Area", value: "Greater Jakarta", hint: "Jakarta, Bogor, Depok, Tangerang, Bekasi" },
      { label: "Availability", value: "24/7", hint: "Ready when you are" },
    ],
    hubsEyebrow: "KEY TRANSIT HUBS",
    hubsTitle: "Easy Pickups at Airports & Stations",
    hubsIntro: "SEVA is ready at international airport arrival gates and the main transport hubs around Greater Jakarta.",
    hubs: [
      {
        name: "Soekarno-Hatta International Airport (CGK)",
        location: "Tangerang, Banten",
        desc: "Easy pickup points at Terminals 1, 2, and 3, for both domestic and international arrivals.",
        badge: "Main Airport Hub",
      },
      {
        name: "Halim Perdanakusuma Airport (HLP)",
        location: "East Jakarta",
        desc: "Pickups at the arrivals lobby for a quick trip into Jakarta's business districts.",
        badge: "City Airport Hub",
      },
      {
        name: "Whoosh Halim High-Speed Rail Station",
        location: "East Jakarta",
        desc: "Connects directly with Whoosh Jakarta–Bandung arrivals for your onward city trip.",
        badge: "Whoosh Rail Hub",
      },
      {
        name: "KRL, MRT & LRT Jabodebek Transit Hubs",
        location: "Across the Metro Area",
        desc: "Quick pickups around Manggarai, Sudirman, Dukuh Atas, and Lebak Bulus, plus the Bekasi and Cibubur LRT stations.",
        badge: "Public Transit Hub",
      },
    ],
    faqEyebrow: "SERVICE AREA INFO",
    faqTitle: "Questions About Service Areas",
    faqIntro: "Have a question about SEVA's routes and pickup coverage?",
    faqs: [
      {
        q: "Can I book SEVA outside Greater Jakarta?",
        a: "For now, SEVA RIDE, SEVA CAR, and SEVA SEND focus on serving all of Greater Jakarta (Jakarta, Bogor, Depok, Tangerang, and Bekasi), 24 hours a day.",
      },
      {
        q: "Can I book SEVA CAR for a trip outside Greater Jakarta?",
        a: "Yes, as long as the pickup point is inside Greater Jakarta and the destination is agreed in the app before the trip starts.",
      },
      {
        q: "How are tolls and airport parking paid?",
        a: "The fare in the app is the base trip fare. Official tolls and airport, station, or building parking are paid by the passenger at their actual cost.",
      },
      {
        q: "How will I know when SEVA launches in my city?",
        a: "Watch for notifications in the SEVA app or follow our official social media. New areas are announced on both channels.",
      },
    ],
    driverLead: "Want to register your fleet in Greater Jakarta?",
    driverLink: "Fleet operator partnership",
  },
} as const;

// Dipakai app/(id)/cities dan app/(en)/en/cities.
export default function CitiesIndexPage({ locale }: { locale: Locale }) {
  const t = CITIES_COPY[locale];
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: t.crumb }]}
          metrics={[...t.metrics]}
        />

        <CoverageMap locale={locale} />

        <CityCoverage hideHeader={true} locale={locale} />

        {/* Transit Hubs Highlights */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hubsEyebrow}</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                {t.hubsTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">{t.hubsIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.hubs.map((hub, idx) => {
                const Icon = HUB_ICONS[idx];
                return (
                  <div
                    key={hub.name}
                    className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center border border-blue-100">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-200">{hub.badge}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{hub.name}</h3>
                      <div className="text-xs text-slate-500 mb-2.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{hub.location}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{hub.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FaqJsonLd faqs={[...t.faqs]} />

        {/* FAQs Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{t.faqEyebrow}</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                {t.faqTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">{t.faqIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {t.faqs.map((faq, idx) => (
                <div key={faq.q} className="p-5 sm:p-6 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                    <span className="text-[#225FD2] text-xs mt-0.5 font-bold">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs sm:text-sm text-slate-500">
                {t.driverLead}{" "}
                <Link href={localePath(locale, "/partner/fleet")} className="text-[#225FD2] font-semibold hover:underline inline-flex items-center gap-1">
                  {t.driverLink} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

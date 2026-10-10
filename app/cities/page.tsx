import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CityCoverage from "@/components/sections/CityCoverage";
import CoverageMap from "@/components/sections/CoverageMap";
import AppDownload from "@/components/sections/AppDownload";
import {
  Plane,
  Train,
  MapPin,
  ArrowRight,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cakupan Wilayah Operasional — SEVA",
  description:
    "Zona operasional resmi SEVA beroperasi penuh di wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi), termasuk penjemputan Bandara Soekarno-Hatta, Halim, dan KCIC Whoosh.",
  alternates: { canonical: "/cities" },
};

const TRANSIT_HUBS = [
  {
    icon: Plane,
    name: "Bandara Internasional Soekarno-Hatta (CGK)",
    location: "Tangerang, Banten",
    desc: "Titik penjemputan mudah di Terminal 1, Terminal 2, dan Terminal 3 kedatangan domestik maupun internasional.",
    badge: "Hub Bandara Utama",
  },
  {
    icon: Plane,
    name: "Bandara Halim Perdanakusuma (HLP)",
    location: "Jakarta Timur",
    desc: "Shelter penjemputan resmi tepat di area lobi kedatangan penumpang untuk rute cepat ke pusat bisnis Jakarta.",
    badge: "Hub Bandara Kota",
  },
  {
    icon: Train,
    name: "Stasiun Kereta Cepat Whoosh Halim",
    location: "Jakarta Timur",
    desc: "Integrasi langsung dengan kedatangan penumpang Whoosh rute Jakarta–Bandung untuk sambungan mobilitas perkotaan.",
    badge: "Hub KCIC Whoosh",
  },
  {
    icon: Train,
    name: "Simpul Transit KRL, MRT & LRT Jabodebek",
    location: "Seluruh Koridor Metropolitan",
    desc: "Penjemputan instan di sekitar stasiun Manggarai, Sudirman, Dukuh Atas, Lebak Bulus, hingga stasiun LRT Bekasi & Cibubur.",
    badge: "Hub Transit Publik",
  },
];

const FAQS_CITIES = [
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
    a: "Anda dapat memantau notifikasi di aplikasi SEVA atau mengikuti akun media sosial resmi kami. Ketika layanan baru diresmikan di kota Anda, promo peluncuran akan langsung tersedia.",
  },
];

export default function CitiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Page Header */}
        <PageHeader
          badge="ZONA OPERASIONAL // FOKUS JABODETABEK"
          title="Cakupan Operasional SEVA"
          subtitle="Saat ini SEVA beroperasi penuh di seluruh wilayah aglomerasi Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi), termasuk penjemputan di Bandara Soekarno-Hatta, Halim, dan hub transit KCIC Whoosh."
          breadcrumbs={[{ label: "Cakupan Wilayah" }]}
          metrics={[
            { label: "Wilayah Operasional", value: "Jabodetabek", hint: "Jakarta, Bogor, Depok, Tangerang, Bekasi" },
            { label: "Hub Bandara & Kereta", value: "CGK • HLP • Whoosh", hint: "Shelter titik jemput resmi" },
            { label: "Ketersediaan Layanan", value: "Aktif 24/7", hint: "Siap melayani perjalanan" },
          ]}
        />

        {/* Interactive Coverage Map (Radar & Google Maps Embed) */}
        <CoverageMap />

        {/* Directory & Tabs */}
        <CityCoverage hideHeader={true} />

        {/* Transit Hubs Highlights */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TITIK TRANSIT UTAMA</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Penjemputan Mudah di Bandara &amp; Stasiun
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                Layanan SEVA siap sedia di gerbang kedatangan bandara internasional dan simpul transportasi utama Jabodetabek.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TRANSIT_HUBS.map((hub, idx) => {
                const Icon = hub.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center border border-blue-100">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-200">
                          {hub.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        {hub.name}
                      </h3>
                      <div className="text-xs text-slate-500 font-mono mb-2.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{hub.location}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {hub.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>INFORMASI OPERASIONAL</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Pertanyaan Seputar Wilayah Layanan
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                Punya pertanyaan tentang rute dan jangkauan penjemputan SEVA?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FAQS_CITIES.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-2"
                >
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                    <span className="text-[#225FD2] font-mono text-xs mt-0.5 font-bold">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs sm:text-sm text-slate-500">
                Ingin mendaftarkan diri sebagai mitra pengemudi di Jabodetabek?{" "}
                <Link
                  href="/fleet-operator"
                  className="text-[#225FD2] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Kemitraan fleet operator <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Download App */}
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

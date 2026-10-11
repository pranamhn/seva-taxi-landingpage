import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import StoreBadges from "@/components/ui/StoreBadges";
import {
  Bike,
  Car,
  Package,
  Utensils,
  ShieldCheck,
  Clock,
  Wallet,
  Sparkles,
  ArrowRight,
  Compass,
} from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "SEVA Ride — Layanan Taksi Motor Online Hemat & Cepat",
  description:
    "Solusi mobilitas lincah roda dua on-demand untuk tembus kemacetan kota. Dilengkapi helm berstandar SNI higienis, hairnet steril, dan tarif mulai Rp 8.000.",
  path: "/services/ride",
});

const RIDE_SPECS = [
  { label: "Tipe Kendaraan", value: "Sepeda Motor (Matic / Bebek Terawat)" },
  { label: "Kapasitas Penumpang", value: "1 Orang Dewasa" },
  { label: "Bawaan Maksimal", value: "1 Ransel / Tas Laptop (maks. 10 kg)" },
  { label: "Perlengkapan Keamanan", value: "Helm SNI Bersih + Hairnet Steril Gratis" },
  { label: "Perlengkapan Cuaca", value: "Jas Hujan Cadangan Tersedia" },
  { label: "Waktu Tunggu Rata-rata", value: "1–3 Menit (Driver Terdekat)" },
];

const OTHER_SERVICES = [
  {
    name: "SEVA CAR",
    href: "/services/car",
    tagline: "Taksi mobil AC nyaman & bersih",
    baseFare: "Rp 9.500",
    icon: Car,
    badge: "Populer",
  },
  {
    name: "SEVA SEND",
    href: "/services/send",
    tagline: "Kurir on-demand s/d 20 kg",
    baseFare: "Rp 10.000",
    icon: Package,
    badge: "Kirim Kilat",
  },
  {
    name: "SEVA FOOD",
    href: "/services/food",
    tagline: "Pesan antar kuliner hangat",
    baseFare: "Promo Menarik",
    icon: Utensils,
    badge: "Segera Hadir",
  },
];

export default function SevaRidePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Header Breadcrumb */}
        <PageHeader
          badge="LAYANAN MOBILITAS // SEVA RIDE"
          title="SEVA Ride: Tembus Macet Lebih Lincah & Hemat"
          subtitle="Solusi mobilitas roda dua on-demand yang andal untuk mengejar jadwal jam sibuk perkotaan. Helm berstandar SNI, hairnet steril, dan tarif pasti transparan di muka."
          breadcrumbs={[
            { label: "Layanan", href: "/services" },
            { label: "SEVA Ride" },
          ]}
          metrics={[
            { label: "Tarif Buka Pintu", value: "Rp 8.000", hint: "Tarif dasar awal" },
            { label: "Tarif per Km", value: "Rp 2.500 / km", hint: "Pasti tanpa lonjakan" },
            { label: "Estimasi Jemput", value: "1–3 Menit", hint: "Driver terdekat langsung respon" },
          ]}
        />

        {/* Hero Showcase Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Product Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-50 border border-blue-200">
                  <Bike className="w-3.5 h-3.5" />
                  <span>MOBILITAS CEPAT RODA DUA</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Pilihan Utama Komuter Perkotaan di Jam Sibuk
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  SEVA Ride dirancang khusus untuk memotong waktu tempuh di tengah padatnya lalu lintas kota. Pengemudi terverifikasi kami menguasai rute alternatif dengan kepatuhan penuh pada keselamatan lalu lintas.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#225FD2] flex items-center justify-center mb-2.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Penjemputan Super Cepat</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Sistem langsung menugaskan driver terdekat dari titik jemput Anda.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Helm & Hairnet Higienis</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Helm SNI bersih terawat disertai hairnet steril gratis untuk kenyamanan setiap perjalanan.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Tarif Argo Pasti</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Nominal harga transparan di muka tanpa kenaikan mendadak saat jam pulang kantor.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Navigasi Rute Pintas</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Driver berpengalaman memanfaatkan jalur alternatif yang terverifikasi di peta GPS.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <StoreBadges size="md" />
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                  >
                    <span>Bandingkan Semua Layanan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Card Visual & Specs Table */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-gradient-to-b from-slate-100 to-slate-200 p-3 sm:p-4">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-inner">
                    <Image
                      src="/assets/bikecard.webp"
                      alt="SEVA Ride - Sepeda Motor On-Demand"
                      fill
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#225FD2] text-white shadow-xs">
                      Hemat
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-900 backdrop-blur-sm shadow-xs border border-slate-200">
                      Mulai Rp 8.000
                    </div>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200">
                    Spesifikasi & Standar Armada
                  </div>
                  <dl className="divide-y divide-slate-200/60 text-xs">
                    {RIDE_SPECS.map((spec) => (
                      <div key={spec.label} className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                        <dt className="text-slate-500">{spec.label}</dt>
                        <dd className="font-semibold text-slate-900 text-left sm:text-right">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Simulation & Transparency Section */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SKEMA TARIF TRANSPARAN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Simulasi Perjalanan SEVA Ride
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Tarif dihitung berdasarkan jarak tempuh rute yang ditampilkan di aplikasi. Tanpa biaya parkir liar atau tarif siluman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Jarak Dekat (3 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 tabular-nums">Rp 15.500</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Cocok untuk antar stasiun MRT/KRL ke gedung kantor atau antar perumahan.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi waktu:</span>
                  <span className="font-bold text-slate-900">~7-10 Menit</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#225FD2] text-white">
                  Rute Harian
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#225FD2] uppercase">Jarak Menengah (8 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 tabular-nums">Rp 28.000</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Pilihan komuter harian antar wilayah kota yang padat saat jam sibuk.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi waktu:</span>
                  <span className="font-bold text-slate-900">~18-25 Menit</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Jarak Jauh (15 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 tabular-nums">Rp 45.500</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Perjalanan lintas batas kota penyangga (Depok, Bekasi, Tangerang ke Jakarta).
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi waktu:</span>
                  <span className="font-bold text-slate-900">~35-45 Menit</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Order Steps */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cara Pesan SEVA Ride dalam 4 Langkah
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Pesan motor kapan saja dengan beberapa ketukan langsung dari aplikasi smartphone Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Pilih Menu SEVA Ride",
                  desc: "Buka aplikasi SEVA lalu ketuk ikon SEVA Ride di beranda utama.",
                },
                {
                  step: "02",
                  title: "Tentukan Lokasi",
                  desc: "Masukkan titik jemput dan alamat tujuan Anda secara presisi.",
                },
                {
                  step: "03",
                  title: "Konfirmasi Tarif Argo",
                  desc: "Cek tarif pasti dan pilih metode bayar (Tunai, QRIS, atau Dompet Digital).",
                },
                {
                  step: "04",
                  title: "Driver Tiba & Jalan",
                  desc: "Driver menjemput membawa helm SNI higienis. Perjalanan siap dimulai!",
                },
              ].map((item) => (
                <div key={item.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-black text-[#225FD2] mb-3">{item.step}</div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services Cross Links */}
        <section className="py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Jelajahi Layanan SEVA Lainnya</h3>
                <p className="text-xs text-slate-500">Pilihan armada mobilitas dan logistik terintegrasi untuk kebutuhan Anda</p>
              </div>
              <Link
                href="/services"
                className="text-xs font-bold text-[#225FD2] hover:underline flex items-center gap-1 shrink-0"
              >
                Lihat Semua Layanan & Perbandingan →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {OTHER_SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                          <span>{s.name}</span>
                          <span className="text-[10px] px-2 py-0.2 rounded-full bg-slate-100 text-slate-600 font-normal">
                            {s.badge}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500">{s.tagline}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#225FD2] group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* App Download CTA */}
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import StoreBadges from "@/components/ui/StoreBadges";
import {
  Car,
  Bike,
  Package,
  Utensils,
  ShieldCheck,
  Clock,
  Wallet,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Luggage,
  Wind,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEVA Car — Taksi Mobil Harian Ber-AC Nyaman & Resmi | SEVA Taxi",
  description:
    "Armada taksi dan mobil harian ber-AC dingin terstandarisasi. Kapasitas 4 penumpang, kabin bersih, argo resmi transparan tanpa lonjakan tarif sepihak.",
  alternates: { canonical: "/services/car" },
};

const CAR_SPECS = [
  { label: "Tipe Armada", value: "MPV & Sedan Terstandarisasi (Euro 4)" },
  { label: "Kapasitas Penumpang", value: "Hingga 4 Orang Dewasa" },
  { label: "Kapasitas Bagasi", value: "2 Koper Medium + 2 Tas Ransel" },
  { label: "Kenyamanan Kabin", value: "AC Dingin Terkalibrasi & Kabin Bersih Higienis" },
  { label: "Fitur Keselamatan", value: "Dashcam Aktif, Sabuk Pengaman Lengkap, Tombol SOS" },
  { label: "Kebijakan Pembatalan", value: "Gratis Pembatalan dalam 5 Menit Pertama" },
];

const OTHER_SERVICES = [
  {
    name: "SEVA RIDE",
    href: "/services/ride",
    tagline: "Motor lincah tembus jam sibuk",
    baseFare: "Rp 8.000",
    icon: Bike,
    badge: "Tarif Hemat",
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

export default function SevaCarPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Header Breadcrumb */}
        <PageHeader
          badge="LAYANAN MOBILITAS // SEVA CAR"
          title="SEVA Car: Taksi & Mobil Harian Kabin Dingin Ber-AC"
          subtitle="Kenyamanan perjalanan komuter keluarga, bisnis, dan antar-jemput bandara dengan kabin bersih wangi ber-AC, transmisi halus, dan kepastian tarif tanpa lonjakan sepihak."
          breadcrumbs={[
            { label: "Layanan", href: "/services" },
            { label: "SEVA Car" },
          ]}
          metrics={[
            { label: "Tarif Buka Pintu", value: "Rp 9.500", hint: "Tarif argo dasar" },
            { label: "Tarif per Km", value: "Rp 6.200 / km", hint: "Pasti transparan di muka" },
            { label: "Kapasitas Kabin", value: "4 Penumpang", hint: "Bagasi luas & AC dingin" },
          ]}
        />

        {/* Hero Showcase Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Product Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-50 border border-blue-200">
                  <Car className="w-3.5 h-3.5" />
                  <span>MOBIL TAKSI BER-AC TERSTANDARISASI</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Perjalanan Nyaman Tanpa Khawatir Cuaca & Panas
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  SEVA Car menghadirkan standar baru mobilitas roda empat perkotaan. Menggunakan armada MPV dan Sedan generasi terbaru dengan kabin wangi, pendingin udara dingin maksimal, serta pengemudi profesional yang ramah dan beretika tinggi.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#225FD2] flex items-center justify-center mb-2.5">
                      <Wind className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">AC Dingin & Bebas Bau Asap</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Kabin non-smoking steril dengan filter AC berkala demi kenyamanan pernapasan seluruh keluarga.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                      <Luggage className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Bagasi Luas & Fleksibel</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Kapasitas muat 2 koper medium dan tas belanjaan tanpa mengorbankan ruang kaki penumpang.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2.5">
                      <Video className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Keamanan Dashcam & GPS</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Setiap perjalanan terpantau live oleh Command Center dan dilindungi tombol darurat SOS 24/7.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Argo Pasti Tanpa Lonjakan</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Bebas dari manipulasi argo atau kenaikan harga 3x lipat saat hujan badai melanda kota.
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
                      src="/assets/carcard.webp"
                      alt="SEVA Car - Mobil Taksi Harian Ber-AC"
                      fill
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#225FD2] text-white shadow-xs">
                      Paling Populer
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/95 text-slate-900 backdrop-blur-sm shadow-xs border border-slate-200">
                      Mulai Rp 9.500
                    </div>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200">
                    Spesifikasi & Fasilitas Kabin
                  </div>
                  <dl className="divide-y divide-slate-200/60 text-xs">
                    {CAR_SPECS.map((spec) => (
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

        {/* Pricing Simulation Section */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SKEMA TARIF SEVA CAR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Simulasi Perjalanan SEVA Car
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Transparan dan rasional. Tidak ada biaya lonjakan harga tak wajar di jam sibuk atau saat hari hujan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-500 uppercase">Perjalanan Dekat (5 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 font-mono">Rp 40.500</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Perjalanan meeting kantor, belanja bulanan supermarket, atau antar anak les.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi waktu:</span>
                  <span className="font-bold text-slate-900 font-mono">~12-18 Menit</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#225FD2] text-white">
                  Paling Diminati
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-[#225FD2] uppercase">Rute Kota (12 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 font-mono">Rp 83.900</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Mobilitas antar sentra bisnis (Sudirman, Kuningan, SCBD, TB Simatupang).
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi waktu:</span>
                  <span className="font-bold text-slate-900 font-mono">~25-40 Menit</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-500 uppercase">Rute Bandara (25 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 font-mono">Rp 164.500</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Perjalanan ke Bandara Soekarno-Hatta / Halim Perdanakusuma dengan bagasi koper aman.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi waktu:</span>
                  <span className="font-bold text-slate-900 font-mono">~45-60 Menit</span>
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
                Alur Pemesanan SEVA Car
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Pesan mobil taksi ber-AC dengan beberapa ketukan praktis di ponsel Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Pilih Menu SEVA Car",
                  desc: "Pilih opsi mobil pada aplikasi untuk perjalanan keluarga atau bisnis Anda.",
                },
                {
                  step: "02",
                  title: "Atur Titik Penjemputan",
                  desc: "Masukkan alamat atau pilih lobi gedung/pintu bandara terdekat.",
                },
                {
                  step: "03",
                  title: "Lihat Detail Mobil & Driver",
                  desc: "Dapatkan nama driver, nomor plat kendaraan resmi, dan foto mobil di aplikasi.",
                },
                {
                  step: "04",
                  title: "Perjalanan Ber-AC Tenang",
                  desc: "Nikmati kabin bersih ber-AC dingin dan kwitansi digital dikirim otomatis.",
                },
              ].map((item) => (
                <div key={item.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-black font-mono text-[#225FD2] mb-3">{item.step}</div>
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

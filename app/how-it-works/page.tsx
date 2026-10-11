import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Car,
  Package,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  Navigation,
  MessageCircle,
  Share2,
  UserCheck,
  Sparkles,
  Phone,
  Clock,
  MapPin,
  Users,
  Briefcase,
  AlertTriangle,
  BadgeCheck,
  ChevronRight,
  Calculator,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import HowItWorks from "@/components/sections/HowItWorks";
import AppDownload from "@/components/sections/AppDownload";
import { FARES, rupiah, estimateFare } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cara Kerja & Alur Pemesanan",
  description:
    "Panduan lengkap cara pesan SEVA Ride, SEVA Car, dan SEVA Send: alur tiap layanan, formula tarif transparan tanpa lonjakan, dan fitur keamanan selama perjalanan.",
  path: "/how-it-works",
});

const SERVICE_FLOWS = [
  {
    id: "ride",
    icon: Bike,
    name: "SEVA Ride",
    tag: "Ojek Motor Hemat & Gesit",
    badge: "Paling Populer & Cepat",
    href: "/services/ride",
    accentColor: "text-[#225FD2]",
    badgeBg: "bg-blue-50 text-[#225FD2] border-blue-200/70",
    iconBg: "bg-blue-600 text-white shadow-blue-500/25",
    borderAccent: "hover:border-blue-400/60",
    specs: [
      { label: "1 Penumpang", icon: Users },
      { label: "Helm SNI + Hairnet", icon: ShieldCheck },
    ],
    steps: [
      {
        num: "01",
        title: "Tentukan Titik Jemput & Tujuan",
        desc: "Buka aplikasi SEVA, pilih SEVA Ride, dan geser pin akurat hingga pintu gerbang atau lobi stasiun.",
      },
      {
        num: "02",
        title: "Kunci Tarif Transparan",
        desc: "Lihat argo pasti tanpa lonjakan jam sibuk. Pilih metode bayar lalu konfirmasi pesanan.",
      },
      {
        num: "03",
        title: "Pencocokan Driver Otomatis",
        desc: "Sistem dispatching GPS menghubungkan Anda dengan driver terdekat berating tinggi dalam hitungan detik.",
      },
      {
        num: "04",
        title: "Driver Tiba & Melaju Cepat",
        desc: "Driver menjemput membawa helm SNI bersih. Nikmati perjalanan gesit bebas hambatan macet.",
      },
    ],
    highlight: "Pilihan utama komuter stasiun MRT/KRL dan mobilitas cepat saat jam sibuk.",
    cta: "Pelajari Detail SEVA Ride",
  },
  {
    id: "car",
    icon: Car,
    name: "SEVA Car",
    tag: "Mobil Nyaman Kabin Dingin",
    badge: "Kenyamanan Ekstra",
    href: "/services/car",
    accentColor: "text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
    iconBg: "bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-indigo-500/25",
    borderAccent: "hover:border-indigo-400/60",
    specs: [
      { label: "Hingga 4 Penumpang", icon: Users },
      { label: "2 Koper + Ransel", icon: Briefcase },
    ],
    steps: [
      {
        num: "01",
        title: "Atur Penjemputan di Lobi",
        desc: "Pilih SEVA Car untuk perjalanan rombongan keluarga, meeting dinas, atau perjalanan bandara.",
      },
      {
        num: "02",
        title: "Cek Rincian Argo Pasti",
        desc: "Tarif ditampilkan di awal. Biaya tol dan parkir gedung resmi ditanggung riil sesuai perjalanan.",
      },
      {
        num: "03",
        title: "Verifikasi Mobil & Driver",
        desc: "Periksa foto driver, tipe armada mobil, dan plat nomor resmi di aplikasi sebelum Anda naik.",
      },
      {
        num: "04",
        title: "Perjalanan Tenang & E-Receipt",
        desc: "Kabin bersih, rute optimal, dan kuitansi digital otomatis tersimpan di riwayat trip Anda.",
      },
    ],
    highlight: "Sempurna untuk antar-jemput bandara, perjalanan kantor, dan belanja keluarga.",
    cta: "Pelajari Detail SEVA Car",
  },
  {
    id: "send",
    icon: Package,
    name: "SEVA Send",
    tag: "Kurir Kilat Door-to-Door",
    badge: "Langsung Tanpa Transit",
    href: "/services/send",
    accentColor: "text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
    iconBg: "bg-emerald-600 text-white shadow-emerald-500/25",
    borderAccent: "hover:border-emerald-400/60",
    specs: [
      { label: "Maksimal 20 kg", icon: Briefcase },
      { label: "Maks. 40×40×40 cm", icon: Package },
    ],
    steps: [
      {
        num: "01",
        title: "Input Detail Pengirim & Penerima",
        desc: "Pilih SEVA Send, lengkapi alamat detail, nomor kontak penerima, serta catatan khusus barang.",
      },
      {
        num: "02",
        title: "Tarif Flat Rute Langsung",
        desc: "Ongkir pasti dihitung berdasarkan jarak tempuh langsung tanpa biaya sortir atau transit gudang.",
      },
      {
        num: "03",
        title: "Penjemputan Paket Cepat",
        desc: "Kurir menjemput paket langsung dari tangan Anda dan segera berangkat menuju alamat tujuan.",
      },
      {
        num: "04",
        title: "Pantau Live & Foto Bukti (POD)",
        desc: "Lacak perjalanan kurir di peta dan terima foto bukti serah terima paket saat tiba di penerima.",
      },
    ],
    highlight: "Solusi cepat pengiriman dokumen darurat, pesanan kuliner, dan produk toko online.",
    cta: "Pelajari Detail SEVA Send",
  },
];

const TRIP_SAFETY_FEATURES = [
  {
    icon: UserCheck,
    title: "Verifikasi Driver & Armada",
    desc: "Cek nama pengemudi, rating bintang, dan nomor plat kendaraan sebelum Anda menaiki kendaraan.",
    tag: "Identitas Resmi",
    accent: "text-[#225FD2] bg-blue-50 border-blue-200/70",
  },
  {
    icon: Navigation,
    title: "Pelacakan GPS Real-Time",
    desc: "Lihat posisi mobil atau motor di peta interaktif secara langsung dari penjemputan hingga tiba di tujuan.",
    tag: "Akurasi Tinggi",
    accent: "text-indigo-600 bg-indigo-50 border-indigo-200/70",
  },
  {
    icon: MessageCircle,
    title: "Nomor HP Tersamar (Masking)",
    desc: "Hubungi driver via in-app chat atau panggilan tanpa mengekspos nomor HP pribadi Anda demi privasi.",
    tag: "Privasi Terjamin",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200/70",
  },
  {
    icon: Share2,
    title: "Bagikan Perjalanan (Share Trip)",
    desc: "Kirim tautan pelacakan perjalanan ke keluarga atau teman lewat WhatsApp hanya dalam 1 ketukan.",
    tag: "Pantau Bersama",
    accent: "text-sky-600 bg-sky-50 border-sky-200/70",
  },
  {
    icon: ShieldAlert,
    title: "Tombol Darurat SOS 24/7",
    desc: "Satu sentuhan langsung tersambung ke Command Center SEVA dan pihak berwenang jika ada situasi mendesak.",
    tag: "Respons Darurat",
    accent: "text-rose-600 bg-rose-50 border-rose-200/70",
  },
  {
    icon: ShieldCheck,
    title: "Standar Armada & Pengemudi",
    desc: "Setiap armada melewati uji kelayakan rutin dan mitra driver terlatih dalam etika pelayanan ramah.",
    tag: "Kenyamanan Maksimal",
    accent: "text-amber-600 bg-amber-50 border-amber-200/70",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          badge="ALUR LAYANAN // DISPATCHING OTOMATIS BERBASIS GPS"
          title="Cara Kerja & Alur Pemesanan"
          subtitle="Dari menentukan titik jemput hingga menikmati perjalanan nyaman: semua yang perlu Anda tahu sebelum memesan SEVA Ride, SEVA Car, atau SEVA Send. Tanpa tawar-menawar, tanpa biaya terselubung."
          breadcrumbs={[{ label: "Cara Kerja" }]}
          metrics={[
            { label: "Pencocokan Driver", value: "Otomatis", hint: "Driver terdekat" },
            { label: "Metode Bayar", value: "SEVA eWallet", hint: "QRIS & Tunai" },
            { label: "Bukti Transaksi", value: "E-Receipt", hint: "Kuitansi PDF" },
          ]}
        />

        {/* 3 langkah utama overview */}
        <HowItWorks />

        {/* Alur per layanan (Section Modern) */}
        <section id="service-flows" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ALUR PER LAYANAN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Cara Pesan Sesuai Kebutuhan Mobilitas Anda
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Setiap armada SEVA dirancang dengan standar operasional spesifik. Temukan alur langkah pemesanan dan spesifikasi armada yang paling cocok untuk perjalanan atau pengiriman Anda.
              </p>
            </div>

            {/* 3 Modern Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {SERVICE_FLOWS.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl ${service.borderAccent} transition-all duration-300 flex flex-col justify-between`}
                  >
                    <div>
                      {/* Top Badges & Icon */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${service.badgeBg}`}>
                          {service.badge}
                        </span>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${service.iconBg}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Title & Tag */}
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        {service.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mt-0.5 mb-4">
                        {service.tag}
                      </p>

                      {/* Capacity / Spec Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.specs.map((spec) => {
                          const SpecIcon = spec.icon;
                          return (
                            <span
                              key={spec.label}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 text-slate-700 text-[11px] font-medium"
                            >
                              <SpecIcon className="w-3.5 h-3.5 text-slate-500" />
                              <span>{spec.label}</span>
                            </span>
                          );
                        })}
                      </div>

                      {/* Steps Timeline */}
                      <div className="space-y-4 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-100 pl-1 mb-6">
                        {service.steps.map((step) => (
                          <div key={step.num} className="relative flex items-start gap-3.5">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-800 shadow-2xs z-10">
                              {step.num}
                            </span>
                            <div className="pt-0.5">
                              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                {step.title}
                              </h4>
                              <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Highlight & CTA */}
                    <div className="pt-5 border-t border-slate-100 space-y-3">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{service.highlight}</span>
                      </div>

                      <Link
                        href={service.href}
                        className="w-full h-11 px-4 rounded-xl bg-slate-100 hover:bg-[#225FD2] text-slate-800 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all group-hover:bg-[#225FD2] group-hover:text-white shadow-xs"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cara hitung tarif (Section Modern) */}
        <section id="fare-calculation" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            
            {/* Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>TARIF TRANSPARAN &amp; PASTI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Cara Tarif Dihitung di Aplikasi SEVA
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Kami percaya pada transparansi penuh. Tidak ada algoritma kenaikan harga sepihak (surge pricing) saat jam sibuk atau cuaca hujan lebat. Semua komponen argo dihitung dengan formula baku yang teruji.
              </p>
            </div>

            {/* Formula Visual Card */}
            <div className="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 p-6 sm:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-[#225FD2] uppercase tracking-wider">
                <BadgeCheck className="w-4 h-4" />
                <span>Formula Perhitungan Tarif Baku</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* Komponen 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Komponen A
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    Tarif Buka Pintu
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Biaya operasional awal penjemputan armada hingga titik lokasi Anda.
                  </p>
                </div>

                {/* Komponen 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="text-[11px] font-semibold text-[#225FD2] uppercase tracking-wider block">
                    Komponen B (Jarak Rute)
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    Jarak (km) × Tarif / km
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Dihitung otomatis berbasis pemetaan GPS rute tercepat dan akurat.
                  </p>
                </div>

                {/* Hasil */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#225FD2] to-[#1a4cb0] text-white shadow-md shadow-blue-500/20">
                  <span className="text-[11px] font-semibold text-blue-100 uppercase tracking-wider block">
                    Hasil di Aplikasi
                  </span>
                  <div className="text-base sm:text-lg font-bold mt-1">
                    Total Tarif Pasti Terkunci
                  </div>
                  <p className="text-xs text-blue-100 mt-1 leading-relaxed">
                    Nominal final yang tampil sebelum Anda klik pesan. Tidak bertambah di akhir.
                  </p>
                </div>
              </div>

              {/* 3 Jaminan Transparansi */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-blue-200/60">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bebas Lonjakan Hujan:</strong> Tidak ada surge 2x lipat saat cuaca buruk.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tol &amp; Parkir Riil:</strong> Karcis tol/parkir ditanggung terpisah sesuai struk fisik.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tanpa Biaya Siluman:</strong> Tidak ada biaya admin misterius yang diselipkan.</span>
                </div>
              </div>
            </div>

            {/* Rates Comparison Table */}
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Tabel Tarif Dasar &amp; Simulasi Perjalanan
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Angka baku operasional resmi armada SEVA di wilayah Jabodetabek.
                  </p>
                </div>
                <Link
                  href="/blog/tarif-ojek-online-jakarta"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#225FD2] hover:underline"
                >
                  <span>Lihat Panduan Tarif Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Tarif dasar layanan SEVA</caption>
                  <thead className="bg-slate-50/80 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200/80">
                    <tr>
                      <th scope="col" className="px-5 py-3.5">Layanan</th>
                      <th scope="col" className="px-5 py-3.5 text-right">Tarif Buka Pintu</th>
                      <th scope="col" className="px-5 py-3.5 text-right">Tarif per KM</th>
                      <th scope="col" className="px-5 py-3.5 text-right">Simulasi 5 KM</th>
                      <th scope="col" className="px-5 py-3.5 text-right">Simulasi 10 KM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {Object.values(FARES).map((fare) => (
                      <tr key={fare.name} className="hover:bg-blue-50/30 transition-colors">
                        <th scope="row" className="px-5 py-4 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#225FD2]" />
                          <span>{fare.name}</span>
                        </th>
                        <td className="px-5 py-4 text-right tabular-nums text-slate-700 font-medium">
                          {rupiah(fare.base)}
                        </td>
                        <td className="px-5 py-4 text-right tabular-nums text-slate-700 font-medium">
                          {rupiah(fare.perKm)} / km
                        </td>
                        <td className="px-5 py-4 text-right tabular-nums text-slate-800 font-semibold">
                          {rupiah(fare.base + fare.perKm * 5)}
                        </td>
                        <td className="px-5 py-4 text-right font-bold tabular-nums text-[#225FD2] bg-blue-50/20">
                          {rupiah(fare.base + fare.perKm * 10)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
                <span>* Simulasi di atas belum termasuk biaya tol/parkir resmi jika rute melewatinya.</span>
                <span className="text-slate-600 font-medium">Tarif final selalu tampil sebelum Anda mengonfirmasi pesanan.</span>
              </div>
            </div>

          </div>
        </section>

        {/* Selama perjalanan (Section Modern) */}
        <section id="during-trip" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            
            {/* Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SELAMA PERJALANAN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Yang Bisa Anda Lakukan di Aplikasi SEVA
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Kendali penuh dan rasa aman ada di tangan Anda. Dari detik pertama driver ditugaskan hingga tiba di tujuan akhir, seluruh instrumen keselamatan dan pelacakan aktif bekerja.
              </p>
            </div>

            {/* In-App Live Trip Simulation Bar */}
            <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-r from-[#194cb0] via-[#225FD2] to-[#1a51bd] text-white p-6 sm:p-7 mb-10 shadow-xl shadow-blue-500/20 relative overflow-hidden">
              {/* Subtle ambient light highlight */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Trip Telemetry Left */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                      Perjalanan Aktif Terpantau GPS
                    </span>
                    <span className="text-blue-200">•</span>
                    <span className="text-xs font-medium text-blue-100">
                      ETA 6 Menit (2.1 km lagi)
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>Budi Santoso</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-amber-400/25 text-amber-200 font-semibold border border-amber-300/30">
                        ★ 4.96
                      </span>
                    </h3>
                    <p className="text-xs text-blue-100 mt-0.5">
                      Toyota Avanza Silver • Plat No: <span className="font-semibold text-white">B 1842 KFD</span>
                    </p>
                  </div>
                </div>

                {/* Quick Actions Right */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-xs transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-blue-200" />
                    <span>Chat In-App</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-xs transition-colors">
                    <Phone className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Telepon Masking</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-xs transition-colors">
                    <Share2 className="w-3.5 h-3.5 text-sky-200" />
                    <span>Bagi Rute Live</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-rose-900/30 border border-rose-400/30 transition-colors">
                    <ShieldAlert className="w-3.5 h-3.5 text-white" />
                    <span>Tombol SOS</span>
                  </div>
                </div>

              </div>
            </div>

            {/* 6 Grid Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TRIP_SAFETY_FEATURES.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${feature.accent}`}>
                          <FeatureIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100">
                          {feature.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Safety CTA Footer */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#225FD2] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Ingin tahu lebih detail standar keselamatan SEVA?
                  </h4>
                  <p className="text-xs text-slate-600">
                    Pelajari protokol verifikasi mitra, fitur asuransi, dan tim penanganan darurat 24/7 kami.
                  </p>
                </div>
              </div>
              <Link
                href="/safety"
                className="h-10 px-5 rounded-xl bg-[#225FD2] hover:bg-[#1a4cb0] text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-500/25 shrink-0"
              >
                <span>Pelajari Pusat Keselamatan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* Download App CTA */}
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

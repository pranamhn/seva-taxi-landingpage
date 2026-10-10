import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import StoreBadges from "@/components/ui/StoreBadges";
import {
  Package,
  Bike,
  Car,
  Utensils,
  ShieldCheck,
  Clock,
  Wallet,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MapPin,
  Camera,
  FileCheck,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEVA Send — Layanan Kurir & Pengiriman Paket Instan On-Demand | SEVA Taxi",
  description:
    "Kirim dokumen penting, pesanan bisnis, atau paket harian instan tiba hitungan jam. Tanpa transit gudang, live tracking GPS real-time, dan bukti foto tanda terima resmi.",
  alternates: { canonical: "/services/send" },
};

const SEND_SPECS = [
  { label: "Beban Maksimal", value: "Hingga 20 kg per Pengiriman" },
  { label: "Dimensi Maksimal Paket", value: "40 x 40 x 40 cm (Sesuai Kompartemen Motor)" },
  { label: "Metode Pengantaran", value: "Langsung Point-to-Point (Tanpa Transit Gudang)" },
  { label: "Pelacakan Pengiriman", value: "Live GPS Tracking di Peta Real-Time" },
  { label: "Bukti Penerimaan", value: "Foto Serah Terima & Tanda Tangan Digital" },
  { label: "Kecepatan Pengantaran", value: "Langsung Berangkat Begitu Kurir Mengambil Paket" },
];

const FAQS_SEND = [
  {
    q: "Apakah kurir SEVA Send mampir ke gudang transit?",
    a: "Tidak. SEVA Send adalah layanan instan point-to-point. Kurir langsung mengambil paket dari tangan pengirim dan meluncur langsung mengantarkannya ke penerima.",
  },
  {
    q: "Bagaimana cara penerima melacak posisi kurir?",
    a: "Pengirim dapat membagikan tautan tracking live kepada penerima melalui WhatsApp atau SMS. Penerima dapat memantau pergerakan kurir di peta secara real-time tanpa perlu menginstal aplikasi.",
  },
  {
    q: "Barang apa saja yang dilarang dikirim melalui SEVA Send?",
    a: "Barang terlarang mencakup narkotika, senjata tajam/api, zat kimia berbahaya mudah meledak/terbakar, uang tunai, hewan hidup, dan barang ilegal lainnya yang melanggar hukum RI.",
  },
  {
    q: "Apakah ada asuransi atau garansi perlindungan barang?",
    a: "Setiap paket dilindungi standar pertanggungan ganti rugi sesuai ketentuan layanan. Pastikan barang dikemas rapi dengan pelindung kardus atau bubble wrap yang layak sebelum diserahkan ke kurir.",
  },
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
    name: "SEVA CAR",
    href: "/services/car",
    tagline: "Taksi mobil AC nyaman & bersih",
    baseFare: "Rp 9.500",
    icon: Car,
    badge: "Populer",
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

export default function SevaSendPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Header Breadcrumb */}
        <PageHeader
          badge="LOGISTIK ON-DEMAND // SEVA SEND"
          title="SEVA Send: Kirim Dokumen & Paket Tiba Hitungan Jam"
          subtitle="Layanan kurir instan on-demand untuk UMKM, kantor, dan kebutuhan personal. Kurir langsung berangkat, pelacakan live GPS transparan, dan foto bukti penerima aman."
          breadcrumbs={[
            { label: "Layanan", href: "/services" },
            { label: "SEVA Send" },
          ]}
          metrics={[
            { label: "Tarif Buka Pintu", value: "Rp 10.000", hint: "Tarif awal penjemputan" },
            { label: "Tarif per Km", value: "Rp 3.000 / km", hint: "Hemat & transparan" },
            { label: "Beban Maksimal", value: "20 Kg", hint: "Dimensi maks 40x40x40 cm" },
          ]}
        />

        {/* Hero Showcase Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Product Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-50 border border-blue-200">
                  <Package className="w-3.5 h-3.5" />
                  <span>PENGIRIMAN INSTAN POINT-TO-POINT</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Kirim Dokumen & Paket Tanpa Tertunda
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Solusi ideal bagi pemilik toko online, pengiriman berkas kantor mendesak, atau pengiriman barang pribadi. Kurir terlatih kami mengantarkan paket Anda dengan hati-hati, menjaga keamanan dan keutuhan paket hingga sampai di tangan penerima.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#225FD2] flex items-center justify-center mb-2.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Tanpa Transit Gudang</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Paket tidak diinapkan atau ditumpuk di gudang sortir. Langsung diantar ke alamat penerima saat itu juga.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Foto Tanda Terima Resmi</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Dokumentasi foto saat kurir menyerahkan barang langsung muncul di riwayat aplikasi Anda.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Live GPS Tracking</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Pantau posisi kurir secara real-time di peta dan bagikan link tracking ke penerima dengan mudah.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Multi-Drop Fleksibel</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Mendukung pengiriman banyak titik alamat dalam satu pesanan untuk efisiensi operasional bisnis.
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
                      src="/assets/sendcard.webp"
                      alt="SEVA Send - Kurir Pengiriman Paket Instan"
                      fill
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#225FD2] text-white shadow-xs">
                      Sampai Hari Ini
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/95 text-slate-900 backdrop-blur-sm shadow-xs border border-slate-200">
                      Mulai Rp 10.000
                    </div>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200">
                    Spesifikasi Batas Pengiriman
                  </div>
                  <dl className="divide-y divide-slate-200/60 text-xs">
                    {SEND_SPECS.map((spec) => (
                      <div key={spec.label} className="py-2 flex items-center justify-between gap-4">
                        <dt className="text-slate-500">{spec.label}</dt>
                        <dd className="font-semibold text-slate-900 text-right">{spec.value}</dd>
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
                <span>SKEMA TARIF SEVA SEND</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Simulasi Ongkir Kurir Instan SEVA Send
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Tarif ongkos kirim pasti transparan dihitung per kilometer rute aktual tanpa biaya tak terduga.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-500 uppercase">Radius Dekat (4 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 font-mono">Rp 22.000</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Pengiriman dokumen kantor mendesak, kunci tertinggal, atau pesanan kuliner rumahan.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi sampai:</span>
                  <span className="font-bold text-slate-900 font-mono">~20-30 Menit</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#225FD2] text-white">
                  Paling Populer
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-[#225FD2] uppercase">Radius Kota (10 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 font-mono">Rp 40.000</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Pesanan online shop instan antar kecamatan, pakaian, alat elektronik, dan hampers.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi sampai:</span>
                  <span className="font-bold text-slate-900 font-mono">~45-60 Menit</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-500 uppercase">Lintas Kota (18 km)</div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 font-mono">Rp 64.000</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Pengiriman antar perbatasan kotamadya yang membutuhkan kepastian sampai hari yang sama.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Estimasi sampai:</span>
                  <span className="font-bold text-slate-900 font-mono">~1.5 - 2 Jam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines / Permitted items */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Panduan Pengemasan & Batas Barang
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Demi keamanan berkendara mitra kurir dan keselamatan paket Anda, perhatikan ketentuan berikut:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Allowed */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                <div className="flex items-center gap-2.5 font-bold text-emerald-800 text-sm mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Barang yang Dianjurkan Dikirim</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>Dokumen legal, surat kontrak kantor, paspor, dan berkas penting dalam amplop tertutup.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>Pakaian, kain, tas, sepatu, dan produk fashion dengan kemasan plastik/kardus rapi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>Makanan kering, kue, hampers, atau bungkusan kuliner yang tertutup rapat dan higienis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>Barang elektronik kecil (headphone, charger, suku cadang) dengan bubble wrap tebal.</span>
                  </li>
                </ul>
              </div>

              {/* Prohibited */}
              <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200/80">
                <div className="flex items-center gap-2.5 font-bold text-rose-800 text-sm mb-4">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <span>Barang Dilarang Demi Keselamatan</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>Zat berbahaya mudah meledak, gas aerosol bertekanan, bensin, dan bahan kimia beracun.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>Senjata tajam, senjata api, narkotika, dan segala bentuk komoditas ilegal yang dilarang undang-undang.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>Hewan peliharaan atau makhluk hidup dalam kondisi apa pun.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>Barang dengan berat melebihi 20 kg atau dimensi yang membahayakan kestabilan motor.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-200/60 mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FAQ SEVA SEND</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pertanyaan Seputar SEVA Send
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS_SEND.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
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

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import StoreBadges from "@/components/ui/StoreBadges";
import {
  Utensils,
  Bike,
  Car,
  Package,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
  Store,
  Percent,
  CheckCircle2,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEVA Food (Segera Hadir) — Pesan Antar Kuliner & Resto Favorit | SEVA Taxi",
  description:
    "Layanan pesan antar makanan dari resto favorit dan UMKM nusantara. Dilengkapi tas termal higienis penjaga suhu dan skema komisi adil bagi pelaku kuliner.",
  alternates: { canonical: "/services/food" },
};

const FOOD_SPECS = [
  { label: "Status Peluncuran", value: "Tahap Integrasi Merchant & Restoran Rekanan" },
  { label: "Standar Wadah Antar", value: "Tas Termal Higienis Khusus (Isolasi Suhu Panas & Dingin)" },
  { label: "Pilihan Kuliner", value: "Beragam Menu Restoran Pilihan & UMKM Kuliner" },
  { label: "Skema Kemitraan Resto", value: "Komisi Ramah UMKM (Tumbuh Bersama Mitra)" },
  { label: "Estimasi Pengantaran", value: "Waktu Masak + Rute Antar Tercepat Driver Terdekat" },
  { label: "Kebersihan Kemasan", value: "Standar Segel Higienis Anti Tumpah" },
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
    name: "SEVA SEND",
    href: "/services/send",
    tagline: "Kurir on-demand s/d 20 kg",
    baseFare: "Rp 10.000",
    icon: Package,
    badge: "Kirim Kilat",
  },
];

export default function SevaFoodPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Header Breadcrumb */}
        <PageHeader
          badge="KULINER NUSANTARA // SEVA FOOD (SEGERA HADIR)"
          title="SEVA Food: Kuliner Resto & UMKM Diantar Hangat"
          subtitle="Platform pesan antar makanan yang menghubungkan pecinta kuliner dengan resto favorit dan pelaku UMKM lokal. Dilengkapi tas termal higienis dan komisi adil bagi mitra."
          breadcrumbs={[
            { label: "Layanan", href: "/services" },
            { label: "SEVA Food" },
          ]}
          metrics={[
            { label: "Status Layanan", value: "Segera Hadir", hint: "Tahap integrasi merchant" },
            { label: "Standar Tas", value: "Thermal Box", hint: "Suhu makanan terjaga higienis" },
            { label: "Komisi Merchant", value: "Ramah UMKM", hint: "Dukung pertumbuhan resto lokal" },
          ]}
        />

        {/* Hero Showcase Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Product Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>PREVIEW LAYANAN MENDATANG</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Nikmati Makanan Hangat Langsung di Meja Anda
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  SEVA Food hadir untuk memberikan pengalaman pesan antar kuliner yang lebih baik bagi pelanggan maupun mitra merchant. Kami menjaga integritas rasa hidangan dengan tas termal berinsulasi tinggi, diantar tepat waktu oleh mitra pengemudi terlatih.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Tas Termal Pengontrol Suhu</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Menjaga makanan panas tetap hangat dan minuman segar tetap dingin tanpa mencair saat diantar.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                      <Percent className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Skema Komisi Adil & Berkelanjutan</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Potongan komisi rendah sehingga merchant tidak perlu menaikkan harga menu secara berlebihan.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#225FD2] flex items-center justify-center mb-2.5">
                      <Store className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Beragam Pilihan Kuliner Nusantara</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Mulai dari restoran waralaba ternama hingga warung kuliner legendaris UMKM di sekitar Anda.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Estimasi Waktu Tepat & Terpantau</div>
                    <p className="text-xs text-slate-600 mt-1">
                      Pantau proses memasak di dapur resto hingga pergerakan driver yang membawa pesanan Anda.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="mailto:partners@seva.id?subject=Pendaftaran%20Merchant%20SEVA%20Food"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#225FD2] text-white font-semibold text-xs hover:bg-[#1a4cb0] transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Daftar Jadi Merchant Kuliner</span>
                  </a>
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
                      src="/assets/foodcard.webp"
                      alt="SEVA Food - Pesan Antar Makanan & Kuliner"
                      fill
                      priority
                      className="object-contain p-4"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-600 text-white shadow-xs">
                      Segera Hadir
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/95 text-slate-900 backdrop-blur-sm shadow-xs border border-slate-200">
                      Promo Menarik
                    </div>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200">
                    Standar Operasional SEVA Food
                  </div>
                  <dl className="divide-y divide-slate-200/60 text-xs">
                    {FOOD_SPECS.map((spec) => (
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

        {/* Merchant Partnership Callout */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-blue-900 via-[#1a4cb0] to-[#225FD2] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="max-w-2xl relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-100 border border-white/20">
                  <Store className="w-3.5 h-3.5" />
                  <span>KEMITRAAN MERCHANT RESTORAN & KULINER</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Bergabung Lebih Awal Bersama Ekosistem SEVA Food
                </h2>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
                  Dapatkan eksposur prioritas kepada pengguna aktif SEVA di kota Anda dengan komisi transparan yang mendukung profitabilitas resto Anda.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <div className="font-bold text-white mb-1">Bebas Biaya Registrasi</div>
                    <div className="text-blue-200 text-[11px]">Onboarding dibantu tim hingga menu online</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <div className="font-bold text-white mb-1">Akses Pengguna Aplikasi SEVA</div>
                    <div className="text-blue-200 text-[11px]">Promosi langsung di halaman depan aplikasi</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <div className="font-bold text-white mb-1">Pencairan Dana Instan</div>
                    <div className="text-blue-200 text-[11px]">Sistem settlement otomatis & transparan</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:partners@seva.id?subject=Pendaftaran%20Merchant%20Kuliner%20SEVA"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#225FD2] font-bold text-xs hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Hubungi Tim Kemitraan (partners@seva.id)</span>
                  </a>
                </div>
              </div>
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

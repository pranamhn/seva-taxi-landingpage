import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Services from "@/components/sections/Services";
import AppDownload from "@/components/sections/AppDownload";
import {
  Bike,
  Car,
  Package,
  Utensils,
  CheckCircle2,
  ShieldCheck,
  Wallet,
  Clock,
  Sparkles,
  HelpCircle,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Pilihan Armada & Tarif",
  description:
    "Daftar tipe kendaraan, spesifikasi kapasitas, dan tarif argo pasti transparan untuk SEVA RIDE, SEVA CAR, SEVA SEND, dan SEVA FOOD.",
  path: "/services",
});

const COMPARISON_DATA = [
  {
    name: "SEVA RIDE",
    href: "/services/ride",
    icon: Bike,
    type: "Sepeda Motor",
    baseFare: "Rp 8.000",
    kmFare: "Rp 2.500 / km",
    capacity: "1 Penumpang",
    luggage: "1 Ransel / Tas Laptop",
    eta: "1–3 Menit",
    idealFor: "Mobilitas lincah tembus jam sibuk & hemat biaya",
    status: "Aktif Beroperasi",
    statusType: "active",
  },
  {
    name: "SEVA CAR",
    href: "/services/car",
    icon: Car,
    type: "Mobil MPV",
    baseFare: "Rp 9.500",
    kmFare: "Rp 6.200 / km",
    capacity: "4 Penumpang",
    luggage: "2 Koper Medium + Tas",
    eta: "3–5 Menit",
    idealFor: "Perjalanan keluarga, kantor, & antar-jemput bandara",
    status: "Aktif Beroperasi",
    statusType: "active",
  },
  {
    name: "SEVA SEND",
    href: "/services/send",
    icon: Package,
    type: "Kurir Motor Cepat",
    baseFare: "Rp 10.000",
    kmFare: "Rp 3.000 / km",
    capacity: "Barang s/d 20 kg",
    luggage: "Dimensi maks. 40x40x40 cm",
    eta: "2–4 Menit",
    idealFor: "Kirim dokumen kantor, belanjaan, atau paket instan",
    status: "Aktif Beroperasi",
    statusType: "active",
  },
  {
    name: "SEVA FOOD",
    href: "/services/food",
    icon: Utensils,
    type: "Pesan Antar Makanan",
    baseFare: "Segera Hadir",
    kmFare: "Segera Hadir",
    capacity: "Makanan & Minuman",
    luggage: "Tas thermal higienis",
    eta: "Estimasi Masak + Kirim",
    idealFor: "Pesan menu restoran & UMKM kuliner favorit",
    status: "Segera Hadir",
    statusType: "soon",
  },
];

const SERVICE_BENEFITS = [
  {
    icon: Wallet,
    title: "Tarif Pasti Tanpa Kejutan",
    desc: "Nominal tarif tampil transparan di aplikasi sebelum Anda klik konfirmasi pesanan. Tidak ada biaya siluman atau lonjakan tarif tak wajar.",
  },
  {
    icon: ShieldCheck,
    title: "Standar Higienis & Terawat",
    desc: "Mitra SEVA RIDE menyediakan helm berstandar SNI yang bersih, sedangkan armada SEVA CAR selalu menjaga kabin wangi dan AC dingin terkalibrasi.",
  },
  {
    icon: BadgeCheck,
    title: "Driver Terverifikasi",
    desc: "Setiap mitra pengemudi melewati verifikasi identitas, pengecekan dokumen kendaraan aktif, serta pembekalan SOP keselamatan berkendara.",
  },
  {
    icon: Clock,
    title: "Penjemputan Presisi & Cepat",
    desc: "Algoritma penugasan pintar SEVA menghubungkan pesanan Anda langsung ke driver terdekat, membantu memangkas waktu tunggu penjemputan.",
  },
];

const FAQS = [
  {
    q: "Bagaimana cara SEVA menghitung tarif perjalanan?",
    a: "Tarif dihitung berdasarkan tarif buka pintu dasar ditambah biaya per kilometer sesuai jarak rute yang tertera di peta aplikasi sebelum Anda memesan.",
  },
  {
    q: "Apakah ada biaya tambahan untuk membawa barang atau bagasi?",
    a: "Tidak ada biaya tambahan selama barang bawaan masih dalam batas kapasitas wajar armada (1 tas untuk SEVA RIDE, dan kapasitas bagasi standar untuk SEVA CAR).",
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "SEVA mendukung pembayaran tunai langsung ke pengemudi serta pembayaran non-tunai praktis melalui SEVA eWallet dan QRIS terintegrasi.",
  },
  {
    q: "Kapan layanan SEVA FOOD resmi dapat digunakan?",
    a: "SEVA FOOD saat ini dalam tahap integrasi merchant kuliner dan mitra restoran pilihan. Pantau terus aplikasi SEVA untuk pengumuman peluncuran resmi dan voucher promo perdana.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Hero / Page Header */}
        <PageHeader
          badge="LAYANAN SEVA // TARIF PASTI"
          title="Pilihan Armada & Tarif Layanan"
          subtitle="Jelajahi armada terstandar SEVA: motor lincah tembus macet, mobil taksi ber-AC yang nyaman, pengiriman paket instan, hingga layanan pesan antar kuliner."
          breadcrumbs={[{ label: "Armada" }]}
          metrics={[
            { label: "Layanan Aktif", value: "RIDE • CAR • SEND", hint: "SEVA FOOD segera hadir" },
            { label: "Tarif Mulai", value: "Rp 8.000", hint: "Pasti transparan di muka" },
            { label: "Estimasi Jemput", value: "2–4 Menit", hint: "Driver terdekat langsung jalan" },
          ]}
        />

        {/* Interactive Services Tab Showcase (Header hidden to prevent duplication) */}
        <Services hideHeader={true} />

        {/* Comparison Matrix Table */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TABEL PERBANDINGAN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Bandingkan Spesifikasi & Tarif
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Pilih layanan yang paling tepat sesuai kebutuhan perjalanan harian atau logistik Anda.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="py-4 px-6">Layanan</th>
                    <th scope="col" className="py-4 px-5">Tipe Kendaraan</th>
                    <th scope="col" className="py-4 px-5">Tarif Buka Pintu</th>
                    <th scope="col" className="py-4 px-5">Kapasitas</th>
                    <th scope="col" className="py-4 px-6">Ideal Untuk</th>
                    <th scope="col" className="py-4 px-6 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {COMPARISON_DATA.map((item) => {
                    const Icon = item.icon;
                    const isSoon = item.statusType === "soon";
                    return (
                      <tr key={item.name} className="hover:bg-blue-50/30 transition-colors">
                        <td className="py-4 px-6">
                          <Link href={item.href} className="flex items-center gap-3 group">
                            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-105 group-hover:bg-[#225FD2] group-hover:text-white transition-all">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 group-hover:text-[#225FD2] transition-colors flex items-center gap-1">
                                <span>{item.name}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#225FD2]" />
                              </div>
                              <div className="text-[11px] text-slate-500 font-medium">Jemput ~{item.eta}</div>
                            </div>
                          </Link>
                        </td>
                        <td className="py-4 px-5 text-slate-700">{item.type}</td>
                        <td className="py-4 px-5 font-bold text-slate-900">{item.baseFare}</td>
                        <td className="py-4 px-5 text-slate-600 text-xs">
                          <div>{item.capacity}</div>
                          <div className="text-slate-400 text-[11px]">{item.luggage}</div>
                        </td>
                        <td className="py-4 px-6 text-slate-600 text-xs leading-relaxed max-w-xs">
                          {item.idealFor}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              isSoon
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSoon ? "bg-amber-500" : "bg-emerald-500"
                              }`}
                            ></span>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMPARISON_DATA.map((item) => {
                const Icon = item.icon;
                const isSoon = item.statusType === "soon";
                return (
                  <div
                    key={item.name}
                    className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0 border border-blue-100">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-base">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.type}</div>
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isSoon
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-xs">
                      <div className="bg-slate-50/80 p-2.5 rounded-xl">
                        <div className="text-[10px] font-semibold text-slate-500 uppercase">Tarif Dasar Buka Pintu</div>
                        <div className="font-bold text-slate-900 text-sm mt-0.5">{item.baseFare}</div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1 pt-1">
                      <div><strong className="text-slate-800">Kapasitas:</strong> {item.capacity} ({item.luggage})</div>
                      <div><strong className="text-slate-800">Ideal:</strong> {item.idealFor}</div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#225FD2] hover:underline"
                      >
                        <span>Lihat Detail & Tarif Lengkap</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Keunggulan Standar Layanan SEVA */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>JAMINAN KUALITAS SETIAP PERJALANAN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Standar Kenyamanan di Setiap Armada
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Apapun pilihan armada Anda, SEVA menjamin standar layanan yang konsisten, aman, dan dapat diandalkan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICE_BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#225FD2] mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FaqJsonLd faqs={FAQS} />

        {/* FAQ Layanan & Tarif */}
        <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>TANYA JAWAB</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pertanyaan Seputar Layanan & Tarif
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Punya pertanyaan sebelum memesan? Temukan jawaban langsung di bawah ini.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-2"
                >
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                    <span className="text-[#225FD2] text-xs mt-0.5 font-bold">0{idx + 1}.</span>
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
                Butuh bantuan lain terkait pemesanan atau kemitraan?{" "}
                <Link
                  href="/safety"
                  className="text-[#225FD2] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Pelajari panduan keamanan <ArrowRight className="w-3.5 h-3.5" />
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

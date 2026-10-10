import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import {
  Building2,
  Briefcase,
  Receipt,
  BarChart3,
  ShieldCheck,
  Zap,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Car,
  Package,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kemitraan Korporat & B2B Partners — SEVA Taxi",
  description:
    "Solusi mobilitas korporat terintegrasi untuk perusahaan, hotel, dan instansi: voucher transportasi karyawan, billing bulanan terpusat, faktur pajak resmi, dan armada standby.",
  alternates: { canonical: "/b2b-partners" },
};

const B2B_SOLUTIONS = [
  {
    icon: Briefcase,
    title: "Corporate Mobility & Voucher Karyawan",
    desc: "Tinggalkan proses reimburse manual yang memakan waktu. Berikan alokasi kuota transportasi digital untuk perjalanan dinas tim Anda dengan kontrol anggaran presisi.",
    badge: "Efisiensi 30%",
  },
  {
    icon: Building2,
    title: "Transportasi Tamu Hotel & Bandara",
    desc: "Armada MPV dan Sedan eksekutif ber-AC dingin standby di lobi hotel atau bandara dengan standar hospitality prima bagi tamu VVIP dan wisatawan.",
    badge: "SLA Prioritas",
  },
  {
    icon: Package,
    title: "Logistik On-Demand & Pengiriman Dokumen",
    desc: "Integrasikan alur pengiriman dokumen kantor, paket ritel, atau pesanan e-commerce Anda melalui kurir instan SEVA Send point-to-point tanpa transit.",
    badge: "API Terintegrasi",
  },
  {
    icon: Calendar,
    title: "Armada Acara, MICE & Proyek Lapangan",
    desc: "Penyediaan puluhan armada seragam untuk kebutuhan mobilitas konferensi, pertemuan delegasi, gathering perusahaan, atau mobilisasi proyek lapangan.",
    badge: "Skala Besar",
  },
];

const B2B_ADVANTAGES = [
  {
    icon: Receipt,
    title: "Invoicing Bulanan & Faktur Pajak Resmi",
    desc: "Satu tagihan terpusat di akhir bulan dengan faktur pajak lengkap yang memudahkan pencatatan keuangan dan rekonsiliasi audit perpajakan perusahaan.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Konsol Pengeluaran Real-Time",
    desc: "Pantau penggunaan budget transportasi setiap divisi secara transparan, unduh laporan PDF/Excel, dan atur limit anggaran per karyawan dengan fleksibel.",
  },
  {
    icon: Zap,
    title: "SLA Penjemputan Cepat & Prioritas",
    desc: "Akun bisnis korporat mendapatkan alokasi armada prioritas oleh sistem dispatching pintar SEVA untuk menjamin ketepatan waktu agenda penting Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Standar Keamanan & Armada Terverifikasi",
    desc: "Seluruh armada memenuhi uji kelaikan jalan (KIR), kamera dashcam kabin aktif, serta mitra pengemudi terverifikasi bebas catatan kriminal.",
  },
];

export default function B2BPartnersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Header Breadcrumb */}
        <PageHeader
          badge="KEMITRAAN KORPORAT // B2B PARTNERS"
          title="B2B Partners: Solusi Mobilitas & Logistik Korporat Terpadu"
          subtitle="Tingkatkan produktivitas bisnis Anda dengan ekosistem transportasi terpusat: voucher mobilitas staf, tagihan bulanan terpadu dengan faktur pajak, dan dukungan armada prioritas."
          breadcrumbs={[
            { label: "Kemitraan", href: "/fleet-operator" },
            { label: "B2B Partners" },
          ]}
          metrics={[
            { label: "Sistem Tagihan", value: "Invoice Terpusat", hint: "Termin pembayaran TOP 30" },
            { label: "Dokumentasi", value: "Faktur Pajak PPN", hint: "Mudahkan rekonsiliasi audit" },
            { label: "Dukungan", value: "Dedicated Manager", hint: "Layanan prioritas 24/7" },
          ]}
        />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-50 border border-blue-200">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>EFISIENSI OPERASIONAL BISNIS</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Sederhanakan Mobilitas Perjalanan Dinas Karyawan Anda
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Hemat hingga 30% anggaran transportasi perusahaan dengan mengeliminasi struk kertas palsu, proses klaim reimburse manual, dan ketidakpastian biaya perjalanan kantor.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Kontrol penuh alokasi budget per departemen atau level jabatan",
                    "Akses armada motor lincah (SEVA Ride), taksi ber-AC (SEVA Car), dan kurir (SEVA Send)",
                    "Laporan audit perjalanan detail: rute GPS, waktu jemput, hingga biaya aktual",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href="mailto:partners@seva.id?subject=Kemitraan%20B2B%20Corporate%20SEVA"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#225FD2] text-white font-bold text-xs hover:bg-[#1a4cb0] transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>Ajukan Proposal Kemitraan</span>
                  </a>
                  <Link
                    href="/fleet-operator"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    <span>Lihat Ekosistem Fleet Operator</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-md space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <div className="text-xs font-mono font-bold uppercase text-slate-500">Corporate Portal Preview</div>
                      <div className="text-base font-extrabold text-slate-900 mt-0.5">SEVA Business Console</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                      Aktif
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[11px] text-slate-500 font-mono">Total Utilisasi Trip Bulan Ini</div>
                      <div className="text-2xl font-black font-mono text-slate-900 mt-1">1.482 Perjalanan</div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-1">↑ 18% lebih hemat dibanding rental bulanan</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                        <div className="text-slate-500 text-[10px] font-mono">Invoice Status</div>
                        <div className="font-bold text-slate-900 mt-0.5">Faktur Pajak Terbit</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                        <div className="text-slate-500 text-[10px] font-mono">Ketepatan SLA</div>
                        <div className="font-bold text-[#225FD2] mt-0.5">99.4% On-Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 B2B Solutions */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SOLUSI KEMITRAAN</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Pilihan Model Kerjasama B2B
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                Pilih paket solusi yang paling sesuai dengan kebutuhan industri dan operasional perusahaan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {B2B_SOLUTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-100">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Keunggulan Layanan Korporat SEVA
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                Transparansi finansial dan kepatuhan standar hukum untuk kenyamanan manajemen perusahaan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {B2B_ADVANTAGES.map((adv) => {
                const Icon = adv.icon;
                return (
                  <div key={adv.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#225FD2] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{adv.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{adv.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Contact Form Box */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-slate-900 via-[#102a6b] to-[#154194] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 text-blue-200 border border-white/20 max-w-full">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="break-words">KONSULTASI GRATIS MOBILITAS BISNIS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight break-words">
                  Mulai Kemitraan Bisnis dengan SEVA Hari Ini
                </h2>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                  Hubungi tim Account Manager kami untuk mendapatkan simulasi penghematan biaya transportasi dan presentasi solusi khusus untuk kantor Anda.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-semibold">
                  <a
                    href="mailto:partners@seva.id"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-[#225FD2] font-bold hover:bg-blue-50 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>Email: partners@seva.id</span>
                  </a>
                  <a
                    href="https://wa.me/6281280005789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>WhatsApp: +62 812-8000-5789</span>
                  </a>
                </div>
              </div>
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

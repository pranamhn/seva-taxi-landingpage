import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import DriverCTA from "@/components/sections/DriverCTA";
import FleetOperatorDirectory from "@/components/sections/FleetOperatorDirectory";
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Sparkles,
  Phone,
  Mail,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mitra Fleet Operator & Ekosistem Armada — SEVA",
  description:
    "Ekosistem kemitraan fleet operator SEVA menghubungkan lebih dari 4.400 unit kendaraan dari 10 perusahaan terpercaya di Indonesia dengan teknologi manajemen armada terpadu.",
  alternates: { canonical: "/fleet-operator" },
};

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Tingkatkan Utilisasi Armada",
    desc: "Hubungkan armada Anda ke jutaan permintaan mobilitas harian di Jabodetabek. Meminimalkan waktu menganggur (idle time) hingga 35%.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Monitoring Terpusat",
    desc: "Pantau posisi armada, status trip perjalanan pengemudi, riwayat pesanan, dan efisiensi harian melalui satu konsol terpadu yang transparan.",
  },
  {
    icon: Zap,
    title: "Skema Bagi Hasil Adil & H+0",
    desc: "Potongan platform yang kompetitif hingga 85% bagi hasil bersih. Rekonsiliasi keuangan transparan dengan pencairan dana harian langsung.",
  },
  {
    icon: ShieldCheck,
    title: "Standar Keselamatan & Perawatan",
    desc: "Verifikasi ketat mitra pengemudi (SKCK & SOP safety driving) serta kepatuhan uji berkala demi menjaga kondisi dan nilai aset kendaraan Anda.",
  },
];

const ONBOARDING_STEPS = [
  {
    step: "01",
    title: "Registrasi Profil Operator",
    desc: "Daftarkan profil perusahaan (PT / CV / Koperasi) beserta jumlah dan jenis armada yang dimiliki melalui formulir kemitraan.",
  },
  {
    step: "02",
    title: "Verifikasi Dokumen & Legalitas",
    desc: "Tim kepatuhan SEVA memverifikasi kelengkapan izin usaha, kepemilikan armada, uji kelaikan jalan (KIR), dan asuransi kendaraan.",
  },
  {
    step: "03",
    title: "Integrasi Sistem & Onboarding Pengemudi",
    desc: "Armada didaftarkan ke sistem alokasi SEVA dan mitra pengemudi dibekali pelatihan SOP pelayanan serta aplikasi pengemudi.",
  },
  {
    step: "04",
    title: "Armada Siap Beroperasi",
    desc: "Unit langsung aktif menerima order di jalan dan menghasilkan pendapatan harian dengan laporan performa berkala.",
  },
];

export default function FleetOperatorPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Page Header */}
        <PageHeader
          badge="EKOSISTEM MITRA ARMADA // FLEET OPERATOR RESMI"
          title="Kemitraan Fleet Operator & Manajemen Armada"
          subtitle="Bergabunglah bersama 4.400+ unit armada yang telah terhubung dalam ekosistem SEVA. Maksimalkan utilisasi armada taksi, rental mobil, shuttle, dan kendaraan komersial Anda dengan platform mobilitas terpercaya."
          breadcrumbs={[{ label: "Fleet Operator" }]}
          metrics={[
            { label: "Total Armada Terhubung", value: "4.390+ Unit", hint: "9 Perusahaan Mitra Aktif" },
            { label: "Perusahaan Terdaftar", value: "9 Operator", hint: "Taksi, Rental, EV & Logistik" },
            { label: "Skema Bagi Hasil", value: "Hingga 85%", hint: "Pencairan harian H+0" },
          ]}
        />

        {/* Fleet Operator Live Directory Table */}
        <FleetOperatorDirectory />

        {/* Keunggulan Kemitraan Fleet Operator */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NILAI TAMBAH MITRA FLEET</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Mengapa Bermitra dengan SEVA?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Kami menyediakan teknologi distribusi pesanan pintar dan model kemitraan yang menguntungkan bagi pemilik armada besar maupun operator transportasi berkembang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((item, idx) => {
                const Icon = item.icon;
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
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4 Langkah Mudah Bergabung */}
        <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ALUR KEMITRAAN CEPAT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                4 Langkah Mudah Mengintegrasikan Armada
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Proses orientasi yang terstruktur memastikan armada Anda dapat segera aktif di jalan tanpa birokrasi berbelit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ONBOARDING_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs relative flex flex-col justify-between"
                >
                  <div>
                    <div className="text-2xl font-black text-[#225FD2] font-mono mb-3">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership CTA Banner */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#194cb0] to-[#225FD2] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-blue-500/20">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Tertarik Menghubungkan Armada Perusahaan Anda?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                  Hubungi tim kemitraan korporat SEVA untuk konsultasi integrasi, simulasi proyeksi pendapatan, dan penawaran skema khusus fleet operator.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="mailto:partners@seva.id"
                  className="px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <Mail className="w-4 h-4 text-[#225FD2]" />
                  <span>Email Kemitraan</span>
                </a>
                <a
                  href="https://wa.me/6281211119999?text=Halo%20Tim%20Kemitraan%20SEVA,%20saya%20ingin%20berkonsultasi%20mengenai%20kemitraan%20Fleet%20Operator."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Bisnis</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Driver App Download Section (with the updated black badges) */}
        <DriverCTA />
      </main>
      <Footer />
    </>
  );
}

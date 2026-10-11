import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
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
  ExternalLink,
  Laptop,
  MapPin,
  Users,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { CONTACT_WHATSAPP_URL, SUPPORT_EMAIL } from "@/lib/site";
import { FLEET_COMPANY_COUNT, FLEET_TOTAL_VEHICLES } from "@/lib/fleet-companies";
import { pageMetadata } from "@/lib/seo";
import LeadForm from "@/components/sections/LeadForm";

const FLEET_TOTAL_LABEL = FLEET_TOTAL_VEHICLES.toLocaleString("id-ID");

export const metadata: Metadata = pageMetadata({
  title: "Mitra Fleet Operator & Ekosistem Armada",
  description:
    `Ekosistem kemitraan fleet operator SEVA menghubungkan ${FLEET_TOTAL_LABEL} unit kendaraan dari ${FLEET_COMPANY_COUNT} perusahaan mitra dengan teknologi manajemen armada terpadu.`,
  path: "/fleet-partners",
});

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Tingkatkan Utilisasi Armada",
    desc: "Hubungkan armada Anda ke permintaan mobilitas harian di Jabodetabek. Membantu mengurangi waktu menganggur (idle time) armada.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Monitoring Terpusat",
    desc: "Pantau posisi armada, status trip perjalanan pengemudi, riwayat pesanan, dan efisiensi harian melalui satu konsol terpadu yang transparan.",
  },
  {
    icon: Zap,
    title: "Skema Bagi Hasil Adil & H+0",
    desc: "Potongan platform hanya 5%, tidak lebih, dengan bagi hasil bersih hingga 95%. Rekonsiliasi keuangan transparan dengan pencairan dana harian langsung.",
  },
  {
    icon: ShieldCheck,
    title: "Standar Keselamatan & Perawatan",
    desc: "Verifikasi ketat mitra pengemudi (SKCK & SOP safety driving) serta kepatuhan uji berkala demi menjaga kondisi dan nilai aset kendaraan Anda.",
  },
];

const FMS_MODULES = [
  { icon: MapPin, title: "Pelacakan GPS Real-time", desc: "Posisi dan status setiap unit di peta" },
  { icon: Users, title: "Penugasan Pengemudi", desc: "Atur driver, shift, dan riwayat trip" },
  { icon: Wrench, title: "Jadwal Servis & KIR", desc: "Pengingat perawatan dan masa uji kendaraan" },
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
    desc: "Tim kepatuhan SEVA memverifikasi kelengkapan izin usaha, kepemilikan armada, dan uji kelaikan jalan (KIR).",
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
          badge="EKOSISTEM MITRA ARMADA // FLEET PARTNERS"
          title="Kemitraan Fleet Partners & Manajemen Armada"
          subtitle={`Bergabunglah bersama ${FLEET_TOTAL_LABEL} unit armada yang telah terhubung dalam ekosistem SEVA. Maksimalkan utilisasi armada taksi, rental mobil, shuttle, dan kendaraan komersial Anda bersama platform mobilitas SEVA.`}
          breadcrumbs={[{ label: "Fleet Partners" }]}
          metrics={[
            { label: "Total Armada Terhubung", value: `${FLEET_TOTAL_LABEL} Unit`, hint: `${FLEET_COMPANY_COUNT} Perusahaan Mitra Terdaftar` },
            { label: "Perusahaan Terdaftar", value: `${FLEET_COMPANY_COUNT} Operator`, hint: "Taksi, Rental & EV" },
            { label: "Skema Bagi Hasil", value: "Hingga 95%", hint: "Pencairan harian H+0" },
          ]}
        />

        {/* Fleet Operator Live Directory Table */}
        <FleetOperatorDirectory />

        {/* Fleet Management System (FMS) SEVA Showcase & Direct CTA ke sevaqu.com */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50/70 to-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d2861] to-[#133d8c] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
                    <Laptop className="w-3.5 h-3.5 text-blue-300" />
                    <span>SEVA FLEET MANAGEMENT SYSTEM (FMS)</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    Kelola Seluruh Operasional Armada Anda dari Satu Konsol Terpadu
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-blue-100/90 leading-relaxed max-w-xl">
                    Pantau posisi GPS kendaraan secara real-time, kelola penugasan pengemudi, riwayat trip perjalanan, jadwal servis berkala, dan rekonsiliasi bagi hasil harian secara otomatis dan transparan.
                  </p>

                  {/* Feature Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
                      <div className="font-bold text-white mb-0.5">Live Telematics</div>
                      <div className="text-blue-200 text-[11px]">Pelacakan GPS armada 24/7</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
                      <div className="font-bold text-white mb-0.5">Analitik Utilisasi</div>
                      <div className="text-blue-200 text-[11px]">Laporan performa &amp; efisiensi</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs col-span-2 sm:col-span-1">
                      <div className="font-bold text-white mb-0.5">Settlement H+0</div>
                      <div className="text-blue-200 text-[11px]">Rekonsiliasi dana harian</div>
                    </div>
                  </div>

                  {/* Action CTA Buttons - Kanan Kiri (Side by Side) */}
                  <div className="pt-1 grid grid-cols-2 gap-2.5">
                    <a
                      href="https://launch.sevaqu.com/auth/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 rounded-xl bg-[#225FD2] hover:bg-[#1a4cb0] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/25 hover:scale-[1.01] text-center"
                    >
                      <span className="truncate">Gunakan FMS SEVA</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    </a>
                    <a
                      href="https://sevaqu.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-blue-100 hover:text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all text-center"
                    >
                      <span className="truncate">Pelajari di sevaqu.com</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    </a>
                  </div>
                </div>

                {/* Right: ringkasan modul FMS */}
                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.16] via-white/[0.08] to-white/[0.03] p-5 sm:p-6 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(2,6,23,0.6),inset_0_1px_0_rgba(255,255,255,0.25)]">
                    {/* Gloss highlight */}
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />

                    <div className="relative flex items-center justify-between gap-3 pb-4 border-b border-white/15">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#225FD2] shadow-sm">
                          <Laptop className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white leading-tight">SEVA FMS</p>
                          <p className="text-[11px] text-blue-200 font-medium">sevaqu.com</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        Terbuka untuk operator
                      </span>
                    </div>

                    <ul className="relative pt-4 space-y-2">
                      {FMS_MODULES.map(({ icon: Icon, title, desc }) => (
                        <li
                          key={title}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3 transition-colors hover:bg-white/10"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-100">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-white">{title}</span>
                            <span className="block text-xs text-blue-200/90 leading-relaxed">{desc}</span>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="relative mt-4 pt-4 border-t border-white/15 text-xs text-blue-100/90 leading-relaxed">
                      Tanpa ganti perangkat keras — armada terdaftar langsung terhubung ke alokasi order SEVA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Kemitraan Fleet Operator */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NILAI TAMBAH MITRA FLEET</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Mengapa Bermitra dengan SEVA?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
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
            <div className="text-center max-w-4xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ALUR KEMITRAAN CEPAT</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                4 Langkah Mudah Mengintegrasikan Armada
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
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
                    <div className="text-2xl font-black text-[#225FD2] tracking-tight mb-3">
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
                  href={`mailto:${SUPPORT_EMAIL}?subject=Kemitraan%20Fleet%20Operator%20SEVA`}
                  className="px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <Mail className="w-4 h-4 text-[#225FD2]" />
                  <span>Email Kemitraan</span>
                </a>
                <a
                  href={`${CONTACT_WHATSAPP_URL}?text=Halo%20Tim%20Kemitraan%20SEVA,%20saya%20ingin%20berkonsultasi%20mengenai%20kemitraan%20Fleet%20Operator.`}
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

        {/* Lead form: dikirim lewat WhatsApp */}
        <LeadForm variant="fleet" />
      </main>
      <Footer />
    </>
  );
}

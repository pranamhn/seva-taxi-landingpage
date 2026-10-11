import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ArrowRightIcon as ArrowRight, ChartBarIcon as BarChart3, ArrowSquareOutIcon as ExternalLink, LaptopIcon as Laptop, EnvelopeSimpleIcon as Mail, MapPinIcon as MapPin, PhoneIcon as Phone, ShieldCheckIcon as ShieldCheck, TrendUpIcon as TrendingUp, UsersIcon as Users, WrenchIcon as Wrench, LightningIcon as Zap } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import FleetOperatorDirectory from "@/components/sections/FleetOperatorDirectory";
import LeadForm from "@/components/sections/LeadForm";
import { CONTACT_WHATSAPP_URL, SUPPORT_EMAIL } from "@/lib/site";
import { FLEET_COMPANY_COUNT, FLEET_TOTAL_VEHICLES } from "@/lib/fleet-companies";
import type { Locale } from "@/lib/i18n";

const BENEFIT_ICONS: PhosphorIcon[] = [TrendingUp, BarChart3, Zap, ShieldCheck];
const MODULE_ICONS: PhosphorIcon[] = [MapPin, Users, Wrench];

const total = (locale: Locale) => FLEET_TOTAL_VEHICLES.toLocaleString(locale === "en" ? "en-US" : "id-ID");

export const FLEET_COPY = {
  id: {
    metaTitle: "Mitra Fleet Operator & Ekosistem Armada",
    metaDescription: `Ekosistem kemitraan fleet operator SEVA menghubungkan ${total("id")} unit kendaraan dari ${FLEET_COMPANY_COUNT} perusahaan mitra dengan teknologi manajemen armada terpadu.`,
    badge: "EKOSISTEM MITRA ARMADA // FLEET PARTNERS",
    title: "Kemitraan Fleet Partners & Manajemen Armada",
    subtitle: `Bergabunglah bersama ${total("id")} unit armada yang telah terhubung dalam ekosistem SEVA. Maksimalkan utilisasi armada taksi, rental mobil, shuttle, dan kendaraan komersial Anda bersama platform mobilitas SEVA.`,
    metrics: [
      { label: "Total Armada Terhubung", value: `${total("id")} Unit`, hint: `${FLEET_COMPANY_COUNT} Perusahaan Mitra Terdaftar` },
      { label: "Perusahaan Terdaftar", value: `${FLEET_COMPANY_COUNT} Operator`, hint: "Taksi, Rental & EV" },
      { label: "Skema Bagi Hasil", value: "Hingga 95%", hint: "Pencairan harian H+0" },
    ],
    fmsEyebrow: "SEVA FLEET MANAGEMENT SYSTEM (FMS)",
    fmsTitle: "Kelola Seluruh Operasional Armada Anda dari Satu Konsol Terpadu",
    fmsBody:
      "Pantau posisi GPS kendaraan secara real-time, kelola penugasan pengemudi, riwayat trip perjalanan, jadwal servis berkala, dan rekonsiliasi bagi hasil harian secara otomatis dan transparan.",
    fmsBadges: [
      { title: "Live GPS Tracking", desc: "Posisi armada via aplikasi driver" },
      { title: "Analitik Utilisasi", desc: "Laporan performa & efisiensi" },
      { title: "Settlement H+0", desc: "Rekonsiliasi dana harian" },
    ],
    fmsUse: "Gunakan FMS SEVA",
    fmsLearn: "Pelajari di sevaqu.com",
    fmsOpen: "Terbuka untuk operator",
    modules: [
      { title: "Pelacakan GPS Real-time", desc: "Posisi dan status setiap unit di peta" },
      { title: "Penugasan Pengemudi", desc: "Atur driver, shift, dan riwayat trip" },
      { title: "Jadwal Servis & KIR", desc: "Pengingat perawatan dan masa uji kendaraan" },
    ],
    fmsNote: "Tanpa ganti perangkat keras — armada terdaftar langsung terhubung ke alokasi order SEVA.",
    benefitsEyebrow: "NILAI TAMBAH MITRA FLEET",
    benefitsTitle: "Mengapa Bermitra dengan SEVA?",
    benefitsIntro:
      "Kami menyediakan teknologi distribusi pesanan pintar dan model kemitraan yang menguntungkan bagi pemilik armada besar maupun operator transportasi berkembang.",
    benefits: [
      { title: "Tingkatkan Utilisasi Armada", desc: "Hubungkan armada Anda ke permintaan mobilitas harian di Jabodetabek. Membantu mengurangi waktu menganggur (idle time) armada." },
      { title: "Dashboard Monitoring Terpusat", desc: "Pantau posisi armada, status trip perjalanan pengemudi, riwayat pesanan, dan efisiensi harian melalui satu konsol terpadu yang transparan." },
      { title: "Skema Bagi Hasil Adil & H+0", desc: "Potongan platform hanya 5%, tidak lebih, dengan bagi hasil bersih hingga 95%. Rekonsiliasi keuangan transparan dengan pencairan dana harian langsung." },
      { title: "Standar Keselamatan & Perawatan", desc: "Verifikasi ketat mitra pengemudi (SKCK & SOP safety driving) serta kepatuhan uji berkala demi menjaga kondisi dan nilai aset kendaraan Anda." },
    ],
    stepsEyebrow: "ALUR KEMITRAAN CEPAT",
    stepsTitle: "4 Langkah Mudah Mengintegrasikan Armada",
    stepsIntro: "Proses orientasi yang terstruktur memastikan armada Anda dapat segera aktif di jalan tanpa birokrasi berbelit.",
    steps: [
      { title: "Registrasi Profil Operator", desc: "Daftarkan profil perusahaan (PT / CV / Koperasi) beserta jumlah dan jenis armada yang dimiliki melalui formulir kemitraan." },
      { title: "Verifikasi Dokumen & Legalitas", desc: "Tim kepatuhan SEVA memverifikasi kelengkapan izin usaha, kepemilikan armada, dan uji kelaikan jalan (KIR)." },
      { title: "Integrasi Sistem & Onboarding Pengemudi", desc: "Armada didaftarkan ke sistem alokasi SEVA dan mitra pengemudi dibekali pelatihan SOP pelayanan serta aplikasi pengemudi." },
      { title: "Armada Siap Beroperasi", desc: "Unit langsung aktif menerima order di jalan dan menghasilkan pendapatan harian dengan laporan performa berkala." },
    ],
    ctaTitle: "Tertarik Menghubungkan Armada Perusahaan Anda?",
    ctaBody: "Hubungi tim kemitraan korporat SEVA untuk konsultasi integrasi, simulasi proyeksi pendapatan, dan penawaran skema khusus fleet operator.",
    ctaEmail: "Email Kemitraan",
    ctaEmailSubject: "Kemitraan Fleet Operator SEVA",
    ctaWhatsapp: "WhatsApp Bisnis",
    ctaWhatsappText: "Halo Tim Kemitraan SEVA, saya ingin berkonsultasi mengenai kemitraan Fleet Operator.",
  },
  en: {
    metaTitle: "Fleet Operator Partners",
    metaDescription: `SEVA's fleet partner network connects ${total("en")} vehicles from ${FLEET_COMPANY_COUNT} partner companies with integrated fleet management technology.`,
    badge: "FLEET PARTNER NETWORK // FLEET PARTNERS",
    title: "Fleet Partnerships & Fleet Management",
    subtitle: `Join the ${total("en")} vehicles already connected to SEVA. Get more out of your taxis, rental cars, shuttles, and commercial vehicles with the SEVA mobility platform.`,
    metrics: [
      { label: "Connected Vehicles", value: `${total("en")} Vehicles`, hint: `${FLEET_COMPANY_COUNT} Registered Partner Companies` },
      { label: "Registered Companies", value: `${FLEET_COMPANY_COUNT} Operators`, hint: "Taxi, Rental & EV" },
      { label: "Revenue Share", value: "Up to 95%", hint: "Same-day payouts" },
    ],
    fmsEyebrow: "SEVA FLEET MANAGEMENT SYSTEM (FMS)",
    fmsTitle: "Run Your Whole Fleet from One Console",
    fmsBody:
      "Track vehicle GPS positions in real time, manage driver assignments, trip history, service schedules, and daily revenue reconciliation, automatically and transparently.",
    fmsBadges: [
      { title: "Live GPS Tracking", desc: "Fleet position via the driver app" },
      { title: "Utilisation Analytics", desc: "Performance & efficiency reports" },
      { title: "Same-Day Settlement", desc: "Daily payout reconciliation" },
    ],
    fmsUse: "Use SEVA FMS",
    fmsLearn: "Learn more at sevaqu.com",
    fmsOpen: "Open to operators",
    modules: [
      { title: "Real-Time GPS Tracking", desc: "Position and status of every vehicle on the map" },
      { title: "Driver Assignment", desc: "Manage drivers, shifts, and trip history" },
      { title: "Service & Roadworthiness Schedule", desc: "Reminders for maintenance and KIR tests" },
    ],
    fmsNote: "No hardware changes — registered vehicles connect straight to SEVA order dispatch.",
    benefitsEyebrow: "WHY FLEET PARTNERS JOIN",
    benefitsTitle: "Why Partner with SEVA?",
    benefitsIntro:
      "We provide smart order dispatch and a partnership model that works for large fleet owners and growing transport operators alike.",
    benefits: [
      { title: "Higher Fleet Utilisation", desc: "Connect your fleet to daily trip demand across Greater Jakarta and reduce idle time." },
      { title: "Central Monitoring Dashboard", desc: "Track fleet positions, driver trip status, order history, and daily efficiency in one transparent console." },
      { title: "Fair, Same-Day Revenue Share", desc: "The platform fee is only 5%, with up to 95% net revenue share. Transparent reconciliation with daily payouts." },
      { title: "Safety & Maintenance Standards", desc: "Strict driver checks (police clearance & safe-driving procedures) and regular roadworthiness tests to protect your vehicles' condition and value." },
    ],
    stepsEyebrow: "FAST ONBOARDING",
    stepsTitle: "Connect Your Fleet in 4 Steps",
    stepsIntro: "A structured onboarding process gets your fleet on the road quickly, without red tape.",
    steps: [
      { title: "Register Your Company", desc: "Submit your company profile (PT / CV / cooperative) with your fleet size and vehicle types via the partnership form." },
      { title: "Document & Licence Check", desc: "SEVA's compliance team verifies your business licence, vehicle ownership, and roadworthiness tests (KIR)." },
      { title: "System Integration & Driver Onboarding", desc: "Vehicles are added to SEVA dispatch and drivers are trained on service procedures and the driver app." },
      { title: "Ready to Operate", desc: "Vehicles start taking orders and earning daily, with regular performance reports." },
    ],
    ctaTitle: "Interested in Connecting Your Company's Fleet?",
    ctaBody: "Contact SEVA's partnerships team for an integration consultation, revenue projection, and a fleet operator offer.",
    ctaEmail: "Email Partnerships",
    ctaEmailSubject: "SEVA Fleet Operator Partnership",
    ctaWhatsapp: "Business WhatsApp",
    ctaWhatsappText: "Hello SEVA Partnerships team, I would like to discuss a fleet operator partnership.",
  },
};

// Dipakai app/(id)/partner/fleet dan app/(en)/en/partner/fleet.
export default function FleetPartnersPage({ locale }: { locale: Locale }) {
  const t = FLEET_COPY[locale];
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: "Fleet Partners" }]}
          metrics={t.metrics}
        />

        <FleetOperatorDirectory locale={locale} />

        {/* Fleet Management System (FMS) SEVA Showcase & Direct CTA ke sevaqu.com */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50/70 to-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d2861] to-[#133d8c] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
                    <Laptop className="w-3.5 h-3.5 text-blue-300" />
                    <span>{t.fmsEyebrow}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">{t.fmsTitle}</h2>

                  <p className="text-xs sm:text-sm md:text-base text-blue-100/90 leading-relaxed max-w-xl">{t.fmsBody}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                    {t.fmsBadges.map((b, i) => (
                      <div key={b.title} className={`p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                        <div className="font-bold text-white mb-0.5">{b.title}</div>
                        <div className="text-blue-200 text-[11px]">{b.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-1 grid grid-cols-2 gap-2.5">
                    <a
                      href="https://launch.sevaqu.com/auth/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 rounded-xl bg-[#225FD2] hover:bg-[#1a4cb0] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/25 hover:scale-[1.01] text-center"
                    >
                      <span className="truncate">{t.fmsUse}</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    </a>
                    <a
                      href="https://sevaqu.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-blue-100 hover:text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all text-center"
                    >
                      <span className="truncate">{t.fmsLearn}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.16] via-white/[0.08] to-white/[0.03] p-5 sm:p-6 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(2,6,23,0.6),inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />

                    <div className="relative flex items-center justify-between gap-3 pb-4 border-b border-white/15">
                      <div className="flex items-center gap-3">
                        <Laptop weight="duotone" className="w-8 h-8 text-[#225FD2]" />
                        <div>
                          <p className="text-sm font-bold text-white leading-tight">SEVA FMS</p>
                          <p className="text-[11px] text-blue-200 font-medium">sevaqu.com</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        {t.fmsOpen}
                      </span>
                    </div>

                    <ul className="relative pt-4 space-y-2">
                      {t.modules.map(({ title, desc }, i) => {
                        const Icon = MODULE_ICONS[i];
                        return (
                          <li key={title} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3 transition-colors hover:bg-white/10">
                            <Icon weight="duotone" className="w-6 h-6 mt-0.5 shrink-0 text-blue-100" />
                            <span>
                              <span className="block text-sm font-semibold text-white">{title}</span>
                              <span className="block text-xs text-blue-200/90 leading-relaxed">{desc}</span>
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <p className="relative mt-4 pt-4 border-t border-white/15 text-xs text-blue-100/90 leading-relaxed">{t.fmsNote}</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
                {t.benefitsTitle}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">{t.benefitsIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.benefits.map((item, idx) => {
                const Icon = BENEFIT_ICONS[idx];
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <Icon weight="duotone" className="w-9 h-9 text-[#225FD2] mb-4 group-hover:scale-105 transition-transform" />
                      <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
                {t.stepsTitle}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">{t.stepsIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.steps.map((step, idx) => (
                <div key={step.title} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs relative flex flex-col justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-[#225FD2] tracking-tight mb-3">0{idx + 1}</div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#194cb0] to-[#225FD2] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-blue-500/20">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold">{t.ctaTitle}</h3>
                <p className="text-xs sm:text-sm text-blue-100 max-w-xl">{t.ctaBody}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(t.ctaEmailSubject)}`}
                  className="px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <Mail className="w-4 h-4 text-[#225FD2]" />
                  <span>{t.ctaEmail}</span>
                </a>
                <a
                  href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(t.ctaWhatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.ctaWhatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <LeadForm variant="fleet" locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

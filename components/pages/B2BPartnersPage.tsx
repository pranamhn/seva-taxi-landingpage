import Link from "next/link";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ArrowRightIcon as ArrowRight, ChartBarIcon as BarChart3, BriefcaseIcon as Briefcase, BuildingsIcon as Building2, CalendarBlankIcon as Calendar, CheckCircleIcon as CheckCircle2, EnvelopeSimpleIcon as Mail, PackageIcon as Package, ReceiptIcon as Receipt, ShieldCheckIcon as ShieldCheck, LightningIcon as Zap } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import LeadForm from "@/components/sections/LeadForm";
import { localePath, type Locale } from "@/lib/i18n";

const SOLUTION_ICONS: PhosphorIcon[] = [Briefcase, Building2, Package, Calendar];
const ADVANTAGE_ICONS: PhosphorIcon[] = [Receipt, BarChart3, Zap, ShieldCheck];

export const B2B_COPY = {
  id: {
    metaTitle: "Kemitraan Korporat & B2B Partners",
    metaDescription:
      "Mobilitas korporat untuk perusahaan, hotel, dan instansi: voucher perjalanan karyawan, tagihan bulanan terpusat dengan faktur pajak, dan kurir SEVA Send.",
    badge: "KEMITRAAN KORPORAT // B2B PARTNERS",
    title: "B2B Partners: Solusi Mobilitas & Logistik Korporat Terpadu",
    subtitle:
      "Tingkatkan produktivitas bisnis Anda dengan ekosistem transportasi terpusat: voucher mobilitas staf, tagihan bulanan terpadu dengan faktur pajak, dan dukungan armada prioritas.",
    metrics: [
      { label: "Sistem Tagihan", value: "Invoice Terpusat", hint: "Termin pembayaran TOP 30" },
      { label: "Dokumentasi", value: "Faktur Pajak PPN", hint: "Mudahkan rekonsiliasi audit" },
      { label: "Dukungan", value: "Dedicated Manager", hint: "Layanan prioritas 24/7" },
    ],
    heroEyebrow: "EFISIENSI OPERASIONAL BISNIS",
    heroTitle: "Sederhanakan Mobilitas Perjalanan Dinas Karyawan Anda",
    heroBody:
      "Hemat anggaran transportasi perusahaan dengan menghapus struk kertas, proses klaim reimburse manual, dan ketidakpastian biaya perjalanan kantor.",
    heroPoints: [
      "Kontrol penuh alokasi budget per departemen atau level jabatan",
      "Akses armada motor lincah (SEVA Ride), taksi mobil (SEVA Car), dan kurir (SEVA Send)",
      "Laporan audit perjalanan detail: rute GPS, waktu jemput, hingga biaya aktual",
    ],
    heroCta: "Ajukan Proposal Kemitraan",
    heroFleet: "Lihat Ekosistem Fleet Operator",
    console: {
      label: "Contoh Tampilan (Ilustrasi)",
      title: "SEVA Business Console",
      active: "Aktif",
      tripsLabel: "Total Utilisasi Trip Bulan Ini",
      trips: "1.482 Perjalanan",
      saving: "↑ 18% lebih hemat dibanding rental bulanan",
      invoiceLabel: "Invoice Status",
      invoice: "Faktur Pajak Terbit",
      slaLabel: "Ketepatan SLA",
      sla: "99.4% On-Time",
    },
    solutionsEyebrow: "SOLUSI KEMITRAAN",
    solutionsTitle: "Pilihan Model Kerjasama B2B",
    solutionsIntro: "Pilih paket solusi yang paling sesuai dengan kebutuhan industri dan operasional perusahaan Anda.",
    solutions: [
      {
        title: "Corporate Mobility & Voucher Karyawan",
        desc: "Tinggalkan proses reimburse manual yang memakan waktu. Berikan alokasi kuota transportasi digital untuk perjalanan dinas tim Anda dengan kontrol anggaran presisi.",
        badge: "Efisiensi Biaya",
      },
      {
        title: "Transportasi Tamu Hotel & Bandara",
        desc: "Armada MPV standby di lobi hotel atau bandara dengan standar hospitality prima bagi tamu VVIP dan wisatawan.",
        badge: "SLA Prioritas",
      },
      {
        title: "Logistik On-Demand & Pengiriman Dokumen",
        desc: "Integrasikan alur pengiriman dokumen kantor, paket ritel, atau pesanan e-commerce Anda melalui kurir instan SEVA Send point-to-point tanpa transit.",
        badge: "API Terintegrasi",
      },
      {
        title: "Armada Acara, MICE & Proyek Lapangan",
        desc: "Penyediaan puluhan armada seragam untuk kebutuhan mobilitas konferensi, pertemuan delegasi, gathering perusahaan, atau mobilisasi proyek lapangan.",
        badge: "Skala Besar",
      },
    ],
    advantagesTitle: "Keunggulan Layanan Korporat SEVA",
    advantagesIntro: "Transparansi finansial dan kepatuhan standar hukum untuk kenyamanan manajemen perusahaan.",
    advantages: [
      {
        title: "Invoicing Bulanan & Faktur Pajak Resmi",
        desc: "Satu tagihan terpusat di akhir bulan dengan faktur pajak lengkap yang memudahkan pencatatan keuangan dan rekonsiliasi audit perpajakan perusahaan.",
      },
      {
        title: "Dashboard Konsol Pengeluaran Real-Time",
        desc: "Pantau penggunaan budget transportasi setiap divisi secara transparan, unduh laporan PDF/Excel, dan atur limit anggaran per karyawan dengan fleksibel.",
      },
      {
        title: "SLA Penjemputan Cepat & Prioritas",
        desc: "Akun bisnis korporat mendapatkan alokasi armada prioritas oleh sistem dispatching pintar SEVA untuk menjamin ketepatan waktu agenda penting Anda.",
      },
      {
        title: "Standar Keamanan & Armada Terverifikasi",
        desc: "Armada mengikuti uji kelaikan jalan (KIR) berkala dan mitra pengemudi melewati verifikasi dokumen, termasuk SKCK.",
      },
    ],
  },
  en: {
    metaTitle: "Corporate & B2B Partnerships",
    metaDescription:
      "Corporate mobility for companies, hotels, and institutions: staff travel vouchers, one monthly invoice with tax invoices, and SEVA Send courier.",
    badge: "CORPORATE PARTNERSHIPS // B2B PARTNERS",
    title: "B2B Partners: Integrated Corporate Mobility & Delivery",
    subtitle:
      "Boost your team's productivity with centralised transport: staff mobility vouchers, one monthly invoice with tax invoices, and priority fleet support.",
    metrics: [
      { label: "Billing", value: "Central Invoice", hint: "30-day payment terms" },
      { label: "Documents", value: "VAT Tax Invoice", hint: "Easier audit reconciliation" },
      { label: "Support", value: "Dedicated Manager", hint: "Priority service 24/7" },
    ],
    heroEyebrow: "BUSINESS EFFICIENCY",
    heroTitle: "Simplify Your Team's Business Travel",
    heroBody:
      "Cut your company's transport costs by removing paper receipts, manual reimbursement claims, and unpredictable travel costs.",
    heroPoints: [
      "Full control of budgets by department or job level",
      "Access to motorbikes (SEVA Ride), cars (SEVA Car), and couriers (SEVA Send)",
      "Detailed trip audit reports: GPS route, pickup time, and actual cost",
    ],
    heroCta: "Request a Partnership Proposal",
    heroFleet: "See the Fleet Operator Network",
    console: {
      label: "Sample View (Illustration)",
      title: "SEVA Business Console",
      active: "Active",
      tripsLabel: "Trips This Month",
      trips: "1,482 Trips",
      saving: "↑ 18% cheaper than monthly car rental",
      invoiceLabel: "Invoice Status",
      invoice: "Tax Invoice Issued",
      slaLabel: "SLA Accuracy",
      sla: "99.4% On-Time",
    },
    solutionsEyebrow: "PARTNERSHIP SOLUTIONS",
    solutionsTitle: "B2B Partnership Models",
    solutionsIntro: "Choose the solution that best fits your industry and operations.",
    solutions: [
      {
        title: "Corporate Mobility & Staff Vouchers",
        desc: "Drop slow manual reimbursements. Give your team digital transport allowances for business trips with precise budget control.",
        badge: "Cost Efficiency",
      },
      {
        title: "Hotel Guest & Airport Transport",
        desc: "MPVs on standby at hotel lobbies or airports, with hospitality standards for VIP guests and travellers.",
        badge: "Priority SLA",
      },
      {
        title: "On-Demand Logistics & Document Delivery",
        desc: "Plug your office documents, retail parcels, or e-commerce orders into SEVA Send's direct point-to-point courier.",
        badge: "API Integration",
      },
      {
        title: "Event, MICE & Project Fleets",
        desc: "Dozens of matching vehicles for conferences, delegations, company gatherings, or field project mobilisation.",
        badge: "Large Scale",
      },
    ],
    advantagesTitle: "Why Companies Choose SEVA",
    advantagesIntro: "Financial transparency and legal compliance that make life easier for management.",
    advantages: [
      {
        title: "Monthly Billing & Official Tax Invoices",
        desc: "One central invoice at month end with complete tax invoices for easier bookkeeping and tax audits.",
      },
      {
        title: "Real-Time Spending Dashboard",
        desc: "Track each division's transport budget, download PDF/Excel reports, and set spending limits per employee.",
      },
      {
        title: "Fast, Priority Pickup SLA",
        desc: "Corporate accounts get priority vehicle allocation from SEVA's smart dispatch to keep important schedules on time.",
      },
      {
        title: "Safety Standards & Verified Fleet",
        desc: "Vehicles pass regular roadworthiness tests (KIR) and drivers pass document checks, including police clearance.",
      },
    ],
  },
} as const;

// Dipakai app/(id)/partner/b2b dan app/(en)/en/partner/b2b.
export default function B2BPartnersPage({ locale }: { locale: Locale }) {
  const t = B2B_COPY[locale];
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: "B2B Partners" }]}
          metrics={[...t.metrics]}
        />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-50 border border-blue-200">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{t.heroEyebrow}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">{t.heroTitle}</h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{t.heroBody}</p>

                <div className="space-y-3 pt-2">
                  {t.heroPoints.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href="#ajukan-kemitraan"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#225FD2] text-white font-bold text-xs hover:bg-[#1a4cb0] transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>{t.heroCta}</span>
                  </a>
                  <Link
                    href={localePath(locale, "/partner/fleet")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    <span>{t.heroFleet}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-md space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <div className="text-xs font-bold uppercase text-slate-500">{t.console.label}</div>
                      <div className="text-base font-extrabold text-slate-900 mt-0.5">{t.console.title}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">{t.console.active}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[11px] text-slate-500 font-medium">{t.console.tripsLabel}</div>
                      <div className="text-2xl font-extrabold text-slate-900 mt-1 tabular-nums">{t.console.trips}</div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-1">{t.console.saving}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                        <div className="text-slate-500 text-[10px] font-semibold uppercase">{t.console.invoiceLabel}</div>
                        <div className="font-bold text-slate-900 mt-0.5">{t.console.invoice}</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                        <div className="text-slate-500 text-[10px] font-semibold uppercase">{t.console.slaLabel}</div>
                        <div className="font-bold text-[#225FD2] mt-0.5">{t.console.sla}</div>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
                {t.solutionsTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">{t.solutionsIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.solutions.map((item, i) => {
                const Icon = SOLUTION_ICONS[i];
                return (
                  <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Icon weight="duotone" className="w-8 h-8 text-[#225FD2]" />
                        <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-100">{item.badge}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
                {t.advantagesTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">{t.advantagesIntro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.advantages.map((adv, i) => {
                const Icon = ADVANTAGE_ICONS[i];
                return (
                  <div key={adv.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <Icon weight="duotone" className="w-7 h-7 text-[#225FD2] mb-3" />
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{adv.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{adv.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <LeadForm variant="b2b" locale={locale} />

        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

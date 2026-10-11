import type { LucideIcon } from "lucide-react";
import { Award, CheckCircle2, Clock, FileText, Headphones, Smartphone, Sparkles, Wallet, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import StoreBadges from "@/components/ui/StoreBadges";
import type { Locale } from "@/lib/i18n";

const BENEFIT_ICONS: LucideIcon[] = [Wallet, Zap, Clock, Award, Smartphone, Headphones];

export const DRIVER_COPY = {
  id: {
    metaTitle: "Pendaftaran Mitra Pengemudi",
    metaDescription:
      "Gabung jadi mitra pengemudi SEVA Ride atau SEVA Car. Komisi hanya 5% (bawa pulang bersih 95%), pencairan dana harian H+0, dan kebebasan penuh mengatur jam kerja.",
    badge: "KEMITRAAN PENGEMUDI // SEVA DRIVER",
    title: "Gabung Jadi Mitra Pengemudi, Bawa Pulang Bersih 95%",
    subtitle:
      "Raih penghasilan maksimal dengan potongan komisi platform hanya 5%, tidak lebih, pencairan dana instan harian (H+0), dan kebebasan penuh mengatur waktu kerja Anda.",
    crumb: "Mitra Driver",
    metrics: [
      { label: "Bagi Hasil Bersih", value: "95%", hint: "Potongan hanya 5%" },
      { label: "Pencairan Dana", value: "H+0 Instan", hint: "Tarik saldo setiap hari" },
      { label: "Biaya Registrasi", value: "GRATIS", hint: "Tanpa biaya pendaftaran" },
    ],
    heroEyebrow: "PENDAFTARAN DIBUKA DI JABODETABEK",
    heroTitle: "Pilihan Tepat untuk Masa Depan Finansial Anda",
    heroBody:
      "Jadilah bagian dari ekosistem transportasi on-demand yang adil bagi pengemudi. Terima order dari pengguna aplikasi SEVA untuk layanan SEVA Ride, SEVA Car, dan SEVA Send.",
    earningsLabel: "Ilustrasi Pendapatan Bulanan",
    earningsValue: "Rp 5–12 Jt",
    earningsNote: "Ilustrasi, bukan jaminan. Hasil bergantung pada jam aktif, jumlah trip, wilayah, dan bonus.",
    benefitsEyebrow: "KEUNTUNGAN MITRA SEVA",
    benefitsTitle: "Mengapa Harus Bergabung dengan SEVA?",
    benefitsIntro: "Kami menempatkan kesejahteraan pengemudi sebagai prioritas dalam ekosistem transportasi.",
    benefits: [
      { title: "Bawa Pulang Bersih 95%", desc: "Potongan platform hanya 5%, tidak lebih. Kerja keras Anda dihargai maksimal dengan 95% pendapatan perjalanan menjadi milik Anda.", badge: "Komisi 5%" },
      { title: "Pencairan Dana Instan H+0", desc: "Hasil perjalanan langsung masuk ke dompet pengemudi dan bisa ditarik kapan saja ke rekening bank tanpa potongan tersembunyi.", badge: "Tarik Harian" },
      { title: "Kebebasan Jam Kerja Fleksibel", desc: "Anda bos untuk diri sendiri. Tentukan kapan mulai dan selesai bekerja, cocok untuk penghasilan utama maupun penghasilan tambahan.", badge: "Bebas Waktu" },
      { title: "Bonus Target & Insentif Rutin", desc: "Raih bonus performa mingguan dan skema insentif jam sibuk untuk meningkatkan total penghasilan Anda.", badge: "Bonus Mingguan" },
      { title: "Pendaftaran Gratis & 100% Online", desc: "Daftar langsung dari aplikasi SEVA Driver tanpa biaya pendaftaran. Unggah dokumen dari ponsel, tanpa perlu datang ke kantor.", badge: "Tanpa Biaya" },
      { title: "Dukungan Tim Operasional", desc: "Customer support SEVA membantu kendala mitra di jalan melalui aplikasi dan WhatsApp.", badge: "Bantuan Mitra" },
    ],
    reqEyebrow: "DOKUMEN & SYARAT",
    reqTitle: "Syarat Pendaftaran Mitra Pengemudi",
    reqIntro: "Siapkan dokumen asli berikut sebelum melakukan pendaftaran di aplikasi SEVA Driver:",
    requirements: [
      {
        category: "Persyaratan Pribadi",
        items: [
          "Warga Negara Indonesia (WNI), usia 18–60 tahun",
          "KTP Asli yang masih berlaku",
          "SIM C Asli aktif (untuk motor) atau SIM A Asli aktif (untuk mobil)",
          "SKCK (Surat Keterangan Catatan Kepolisian) yang masih berlaku",
          "Memiliki rekening bank atas nama pribadi",
        ],
      },
      {
        category: "Persyaratan Kendaraan & Perangkat",
        items: [
          "STNK dan Pajak Kendaraan aktif sesuai unit",
          "Sepeda motor minimal tahun 2017 (kondisi prima)",
          "Mobil MPV minimal tahun 2017",
          "Smartphone Android (RAM min 3GB) atau iOS dengan GPS aktif",
          "Kondisi fisik kendaraan bersih dan layak jalan",
        ],
      },
    ],
    stepsTitle: "Cara Mendaftar Jadi Mitra Driver",
    stepsIntro: "Proses registrasi 100% online langsung dari ponsel pintar Anda.",
    steps: [
      { title: "Unduh Aplikasi SEVA Driver", desc: "Download aplikasi resmi SEVA Driver di Google Play Store atau Apple App Store secara gratis." },
      { title: "Lengkapi Data & Dokumen", desc: "Buka aplikasi, masukkan nomor ponsel aktif, lalu foto KTP, SIM, STNK, dan SKCK secara jelas." },
      { title: "Verifikasi Cepat 1x24 Jam", desc: "Tim verifikasi SEVA akan memeriksa berkas Anda dan mengirimkan notifikasi aktivasi akun." },
      { title: "Ambil Atribut & Langsung Narik", desc: "Setelah akun aktif, hidupkan tombol online dan mulai terima pesanan pertama Anda." },
    ],
  },
  en: {
    metaTitle: "Become a Driver Partner",
    metaDescription:
      "Drive with SEVA Ride or SEVA Car. Only a 5% commission (keep 95%), same-day payouts, and full freedom to set your own hours.",
    badge: "DRIVER PARTNERSHIP // SEVA DRIVER",
    title: "Become a Driver Partner and Keep 95% of Every Fare",
    subtitle:
      "Earn more with a platform commission of just 5%, same-day payouts, and complete freedom over your working hours.",
    crumb: "Driver Partners",
    metrics: [
      { label: "Your Share", value: "95%", hint: "Only a 5% fee" },
      { label: "Payouts", value: "Same Day", hint: "Withdraw every day" },
      { label: "Sign-Up Fee", value: "FREE", hint: "No registration cost" },
    ],
    heroEyebrow: "NOW RECRUITING IN GREATER JAKARTA",
    heroTitle: "A Smart Move for Your Income",
    heroBody:
      "Join an on-demand transport network that is fair to drivers. Take orders from SEVA app users for SEVA Ride, SEVA Car, and SEVA Send.",
    earningsLabel: "Monthly Earnings Illustration",
    earningsValue: "Rp 5–12 M",
    earningsNote: "An illustration, not a guarantee. Earnings depend on hours online, number of trips, area, and bonuses.",
    benefitsEyebrow: "DRIVER PARTNER BENEFITS",
    benefitsTitle: "Why Drive with SEVA?",
    benefitsIntro: "We put driver wellbeing first.",
    benefits: [
      { title: "Keep 95% of the Fare", desc: "The platform fee is just 5%, nothing more. You keep 95% of every trip's earnings.", badge: "5% Fee" },
      { title: "Same-Day Payouts", desc: "Trip earnings go straight to your driver wallet and can be withdrawn to your bank account any time, with no hidden deductions.", badge: "Daily Withdrawals" },
      { title: "Flexible Hours", desc: "Be your own boss. Decide when to start and stop, whether driving is your main income or a side job.", badge: "Your Schedule" },
      { title: "Bonuses & Incentives", desc: "Earn weekly performance bonuses and rush-hour incentives to boost your total income.", badge: "Weekly Bonus" },
      { title: "Free, 100% Online Sign-Up", desc: "Register in the SEVA Driver app with no fee. Upload documents from your phone, no office visit needed.", badge: "No Fee" },
      { title: "Operations Support", desc: "SEVA customer support helps drivers with issues on the road via the app and WhatsApp.", badge: "Driver Support" },
    ],
    reqEyebrow: "DOCUMENTS & REQUIREMENTS",
    reqTitle: "Driver Partner Requirements",
    reqIntro: "Have these original documents ready before you register in the SEVA Driver app:",
    requirements: [
      {
        category: "Personal Requirements",
        items: [
          "Indonesian citizen aged 18–60",
          "Valid original national ID card (KTP)",
          "Valid original SIM C (motorbike) or SIM A (car) driving licence",
          "Valid police clearance certificate (SKCK)",
          "A bank account in your own name",
        ],
      },
      {
        category: "Vehicle & Device Requirements",
        items: [
          "Valid vehicle registration (STNK) with vehicle tax paid",
          "Motorbike from 2017 or newer, in good condition",
          "MPV car from 2017 or newer",
          "Android smartphone (min. 3 GB RAM) or iOS with GPS on",
          "A clean, roadworthy vehicle",
        ],
      },
    ],
    stepsTitle: "How to Sign Up as a Driver",
    stepsIntro: "Registration is 100% online, right from your smartphone.",
    steps: [
      { title: "Download the SEVA Driver App", desc: "Get the official SEVA Driver app free on Google Play or the Apple App Store." },
      { title: "Add Your Details & Documents", desc: "Open the app, enter your phone number, then take clear photos of your KTP, SIM, STNK, and SKCK." },
      { title: "Fast Verification (24 Hours)", desc: "The SEVA team checks your documents and sends an account activation notification." },
      { title: "Get Your Gear & Start Driving", desc: "Once your account is active, go online and accept your first order." },
    ],
  },
} as const;

// Dipakai app/(id)/partner/driver dan app/(en)/en/partner/driver.
export default function DriverPartnersPage({ locale }: { locale: Locale }) {
  const t = DRIVER_COPY[locale];
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: t.crumb }]}
          metrics={[...t.metrics]}
        />

        {/* Hero Banner Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#102a6b] to-[#154194] text-white p-5 sm:p-10 lg:p-14 shadow-xl">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 border border-white/20 text-blue-200 max-w-full">
                    <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                    <span className="break-words">{t.heroEyebrow}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight break-words">{t.heroTitle}</h2>

                  <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">{t.heroBody}</p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <StoreBadges size="lg" locale={locale} />
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center max-w-xs space-y-3">
                    <div className="text-xs font-semibold uppercase text-blue-200">{t.earningsLabel}</div>
                    <div className="text-3xl sm:text-4xl font-black text-emerald-400 tabular-nums">{t.earningsValue}</div>
                    <p className="text-xs text-blue-100/80">{t.earningsNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.benefitsEyebrow}</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                {t.benefitsTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">{t.benefitsIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.benefits.map((b, i) => {
                const Icon = BENEFIT_ICONS[i];
                return (
                  <div
                    key={b.title}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-100">{b.badge}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">{b.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>{t.reqEyebrow}</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                {t.reqTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">{t.reqIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.requirements.map((req) => (
                <div key={req.category} className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-4 pb-3 border-b border-slate-200">{req.category}</h3>
                  <ul className="space-y-3.5 text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                    {req.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Steps to Register */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                {t.stepsTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">{t.stepsIntro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.steps.map((s, i) => (
                <div key={s.title} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="text-3xl font-black text-[#225FD2] tracking-tight mb-3">0{i + 1}</div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

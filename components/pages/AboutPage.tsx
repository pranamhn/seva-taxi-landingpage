import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon as ArrowRight,
  ArrowSquareOutIcon as ExternalLink,
  ShieldCheckIcon as ShieldCheck,
  CalculatorIcon as Calculator,
  CoinsIcon as Coins,
  BuildingsIcon as Building2,
  CarIcon as Car,
  DeviceMobileIcon as DeviceMobile,
  FirstAidKitIcon as FirstAid,
  LockKeyIcon as LockKey,
  ClockIcon as Clock,
  EnvelopeSimpleIcon as Mail,
  PhoneIcon as Phone,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import { FARES } from "@/lib/articles";
import { CITY_DIRECTORY } from "@/lib/cities";
import { FLEET_COMPANIES, FLEET_COMPANY_COUNT, FLEET_TOTAL_VEHICLES } from "@/lib/fleet-companies";
import { localePath, type Locale } from "@/lib/i18n";
import {
  LEGAL_NAME,
  OFFICE_ADDRESS_LINES,
  OFFICE_MAPS_URL,
  SITE_NAME,
  SUPPORT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
} from "@/lib/site";

const num = (n: number, locale: Locale) => n.toLocaleString(locale === "en" ? "en-US" : "id-ID");
const rp = (n: number, locale: Locale) => `Rp ${num(n, locale)}`;

export const ABOUT_COPY = {
  id: {
    metaTitle: "Tentang Kami — Platform Mobilitas Jabodetabek",
    metaDescription: `${SITE_NAME} adalah platform ride-hailing dan kurir di Jabodetabek: tarif pasti di awal tanpa surge, bagi hasil 95/5, dan pengemudi terverifikasi.`,
    badge: "TENTANG SEVA",
    title: "Mobilitas Pasti & Kemitraan Adil",
    subtitle: "Ride-hailing dan kurir instan di Jabodetabek: tarif pasti di awal tanpa lonjakan harga, bagi hasil 95% untuk pengemudi, dan armada terverifikasi.",
    crumb: "Tentang Kami",
    metrics: [
      { label: "Wilayah", value: `${CITY_DIRECTORY.length} Kota/Kab`, hint: "Jabodetabek" },
      { label: "Armada", value: `${num(FLEET_TOTAL_VEHICLES, "id")}+ Unit`, hint: `${FLEET_COMPANY_COUNT} Operator` },
      { label: "Bagi Hasil", value: "95% Driver", hint: "Fee platform 5%" },
      { label: "Pencairan", value: "H+0 Harian", hint: "Tanpa potongan" },
    ],

    // Mission & Comparison
    missionEyebrow: "KENAPA SEVA",
    missionTitle: "Mengubah Pola Mobilitas Jabodetabek",
    missionIntro:
      "Di Jabodetabek, penumpang sering menemui lonjakan tarif mendadak saat jam sibuk dan hujan, sementara pengemudi terbebani potongan 20–30%. SEVA menghadirkan tarif jarak pasti di muka dan bagi hasil 95% yang adil.",

    comparisonTitle: "Konvensional vs Standar SEVA",
    comparisons: [
      { aspect: "Potongan Platform", conv: "20% – 30%", seva: "5% Flat" },
      { aspect: "Mekanisme Tarif", conv: "Surge dinamis", seva: "Pasti di awal" },
      { aspect: "Pencairan Dana", conv: "Mingguan / fee admin", seva: "H+0 harian gratis" },
      { aspect: "Ekosistem Armada", conv: "Tanpa FMS", seva: "FMS sevaqu.com" },
    ],

    // 3 Principles
    principlesEyebrow: "NILAI OPERASIONAL",
    principlesTitle: "Tiga Fondasi Layanan",
    principles: [
      {
        title: "Tarif Jarak Pasti",
        desc: `Tarif dihitung murni dari jarak, mulai ${rp(FARES.ride.base, "id")}. Bebas lonjakan harga sepihak saat jam sibuk atau hujan.`,
        tag: "0% SURGE",
      },
      {
        title: "Bagi Hasil 95/5",
        desc: "Potongan platform hanya 5%. Driver menerima 95% bersih, dicairkan di hari yang sama (H+0) tanpa potongan tersembunyi.",
        tag: "95% DRIVER",
      },
      {
        title: "Driver Terverifikasi",
        desc: "Pemeriksaan fisik KTP, SIM, SKCK, dan STNK secara langsung, plus standar uji berkala KIR untuk seluruh armada.",
        tag: "AUDIT SKCK & KIR",
      },
    ],

    // Ecosystem
    ecosystemEyebrow: "EKOSISTEM",
    ecosystemTitle: "Tiga Pilar Terintegrasi",
    ecosystemPillars: [
      {
        role: "Aplikasi Penumpang",
        badge: "PENGGUNA",
        desc: "Pesan ojek, taksi mobil, kurir paket, dan makanan dengan estimasi argo pasti serta live tracking GPS.",
        ctaText: "Unduh Aplikasi",
        ctaHref: "#download",
      },
      {
        role: "Aplikasi Pengemudi",
        badge: "DRIVER",
        desc: "Alokasi pesanan radius terdekat, rincian bagi hasil 95% transparan, dan pencairan saldo instan H+0.",
        ctaText: "Daftar Driver",
        ctaHref: "/partner/driver",
      },
      {
        role: "Konsol FMS Armada",
        badge: "OPERATOR",
        desc: "Pantau posisi GPS armada real-time, modul telemetri OBD-II, dan rekonsiliasi harian otomatis via sevaqu.com.",
        ctaText: "Konsol FMS",
        ctaHref: "/partner/fleet",
      },
    ],

    // Services
    servicesEyebrow: "LAYANAN",
    servicesTitle: "Layanan SEVA",
    servicesCta: "Lihat semua",

    // Fleet Partners
    partnersEyebrow: "MITRA FLEET",
    partnersTitle: "Operator Armada Mitra",
    partnersCta: "Gabung mitra",

    // Safety
    safetyEyebrow: "KESELAMATAN",
    safetyTitle: "Standar Keselamatan",
    safetyFeatures: [
      { title: "Tombol Darurat SOS", desc: "Akses cepat 112 dan kontak darurat 24/7." },
      { title: "Asuransi Perjalanan", desc: "Perlindungan medis dan santunan resmi." },
      { title: "Penyamaran Nomor", desc: "Nomor telepon disamarkan demi privasi." },
      { title: "Uji Kelaikan KIR", desc: "Armada lolos uji KIR dan standar emisi." },
    ],
    safetyCta: "Detail keselamatan",

    // Legal & Support
    legalEyebrow: "LEGALITAS & KANTOR",
    legalTitle: "Legalitas & Kontak",
    pseLabel: "Pendaftaran PSE Komdigi RI",
    pseNumber: "009824.01/DJAI.PSE/09/2026",
    pseStatus: "TERDAFTAR RESMI",
    officeLabel: "Kantor Operasional",
    openMaps: "Google Maps",
    supportLabel: "Bantuan 24/7",
    contactCta: "Hubungi Kami",
  },

  en: {
    metaTitle: "About Us — Mobility Platform Greater Jakarta",
    metaDescription: `${SITE_NAME} is an on-demand mobility platform in Greater Jakarta: upfront fares with zero surge, 95/5 revenue split, and verified drivers.`,
    badge: "ABOUT SEVA",
    title: "Upfront Fares & Fair Partnerships",
    subtitle: "Ride-hailing and couriers in Greater Jakarta: transparent distance-based fares, 95% driver revenue share, and verified fleets.",
    crumb: "About Us",
    metrics: [
      { label: "Coverage", value: `${CITY_DIRECTORY.length} Regions`, hint: "Greater Jakarta" },
      { label: "Fleet", value: `${num(FLEET_TOTAL_VEHICLES, "en")}+ Units`, hint: `${FLEET_COMPANY_COUNT} Operators` },
      { label: "Split", value: "95% Driver", hint: "5% platform fee" },
      { label: "Payout", value: "Daily H+0", hint: "Zero hidden fees" },
    ],

    // Mission & Comparison
    missionEyebrow: "WHY SEVA",
    missionTitle: "Rethinking Urban Mobility",
    missionIntro:
      "In Greater Jakarta, passengers face unpredictable surge pricing while drivers carry 20–30% commissions. SEVA brings upfront distance-based fares and a fair 95% revenue split.",

    comparisonTitle: "Conventional vs SEVA Standard",
    comparisons: [
      { aspect: "Platform Fee", conv: "20% – 30%", seva: "5% Flat" },
      { aspect: "Pricing", conv: "Dynamic surge", seva: "Upfront & fixed" },
      { aspect: "Payouts", conv: "Weekly / admin fees", seva: "Daily H+0 free" },
      { aspect: "Fleet Tech", conv: "No FMS", seva: "sevaqu.com FMS" },
    ],

    // 3 Principles
    principlesEyebrow: "CORE PILLARS",
    principlesTitle: "Three Foundations",
    principles: [
      {
        title: "Upfront Fares",
        desc: `Fares are strictly based on distance, from ${rp(FARES.ride.base, "en")}. Zero surge pricing during rush hour or rain.`,
        tag: "0% SURGE",
      },
      {
        title: "95/5 Revenue Split",
        desc: "Platform takes only 5%. Drivers keep 95% net with same-day (H+0) daily payouts and zero hidden fees.",
        tag: "95% DRIVER",
      },
      {
        title: "Verified Drivers",
        desc: "In-person checks for ID, licence, police clearance (SKCK), and vehicle roadworthiness (KIR).",
        tag: "AUDITED & TESTED",
      },
    ],

    // Ecosystem
    ecosystemEyebrow: "ECOSYSTEM",
    ecosystemTitle: "Three Integrated Pillars",
    ecosystemPillars: [
      {
        role: "Passenger App",
        badge: "RIDERS",
        desc: "Book motorbikes, cars, couriers, and food with upfront fares and real-time live GPS tracking.",
        ctaText: "Download App",
        ctaHref: "#download",
      },
      {
        role: "Driver App",
        badge: "DRIVERS",
        desc: "Smart nearest-radius dispatching, transparent 95% fare breakdown, and instant H+0 payouts.",
        ctaText: "Join as Driver",
        ctaHref: "/partner/driver",
      },
      {
        role: "Fleet FMS Console",
        badge: "OPERATORS",
        desc: "Live GPS fleet tracking, OBD-II telemetry, and automated financial settlements via sevaqu.com.",
        ctaText: "Fleet Console",
        ctaHref: "/partner/fleet",
      },
    ],

    // Services
    servicesEyebrow: "SERVICES",
    servicesTitle: "SEVA Services",
    servicesCta: "View all",

    // Fleet Partners
    partnersEyebrow: "FLEET PARTNERS",
    partnersTitle: "Partner Fleet Operators",
    partnersCta: "Join as partner",

    // Safety
    safetyEyebrow: "SAFETY",
    safetyTitle: "Safety Standards",
    safetyFeatures: [
      { title: "24/7 SOS Button", desc: "Instant trigger to 112 and emergency contacts." },
      { title: "Trip Insurance", desc: "Official medical and accident coverage." },
      { title: "Number Masking", desc: "Private phone numbers remain hidden." },
      { title: "KIR Tested", desc: "Mandatory vehicle roadworthiness inspections." },
    ],
    safetyCta: "Safety details",

    // Legal & Support
    legalEyebrow: "LEGAL & OFFICE",
    legalTitle: "Legal Entity & Contact",
    pseLabel: "Ministry Registration (Komdigi RI)",
    pseNumber: "009824.01/DJAI.PSE/09/2026",
    pseStatus: "OFFICIALLY REGISTERED",
    officeLabel: "Headquarters",
    openMaps: "Google Maps",
    supportLabel: "24/7 Support",
    contactCta: "Contact Us",
  },
} as const;

const SERVICES_DATA = [
  {
    id: "ride",
    name: "SEVA Ride",
    tagline: { id: "Ojek lincah jam sibuk", en: "Rush hour motorbike rides" },
    image: "/assets/services/seva-ride.webp",
    badge: { id: "Mulai Rp 8.000", en: "From Rp 8,000" },
    href: "/services/ride",
  },
  {
    id: "car",
    name: "SEVA Car",
    tagline: { id: "Taksi kabin AC bersih", en: "Everyday clean car rides" },
    image: "/assets/services/seva-car.webp",
    badge: { id: "Mulai Rp 9.500", en: "From Rp 9,500" },
    href: "/services/car",
  },
  {
    id: "send",
    name: "SEVA Send",
    tagline: { id: "Kurir kilat sameday", en: "Same-day parcel delivery" },
    image: "/assets/services/seva-send.webp",
    badge: { id: "Mulai Rp 10.000", en: "From Rp 10,000" },
    href: "/services/send",
  },
  {
    id: "food",
    name: "SEVA Food",
    tagline: { id: "Pesan antar kuliner", en: "Local food delivery" },
    image: "/assets/services/seva-food.webp",
    badge: { id: "Segera Hadir", en: "Coming Soon" },
    href: "/services/food",
  },
];

const partnerLogos = FLEET_COMPANIES.filter((c) => c.logo);

const H2 = "text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight";
const LINK = "inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#225FD2] hover:text-[#194cb0] transition-colors";
const CONTAINER = "max-w-[1240px] mx-auto px-4 sm:px-6";

export default function AboutPage({ locale }: { locale: Locale }) {
  const t = ABOUT_COPY[locale];
  const lp = (href: string) => localePath(locale, href);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Header with Breadcrumbs & Metrics */}
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: t.crumb }]}
          metrics={[...t.metrics]}
        />

        {/* 1. Why SEVA & Comparison (Compact Split) */}
        <section className="py-12 sm:py-16 bg-white">
          <div className={CONTAINER}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Punchy Narrative */}
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#225FD2] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-semibold">
                  {t.missionEyebrow}
                </span>
                <h2 className={H2}>{t.missionTitle}</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{t.missionIntro}</p>

                <div className="pt-2 flex flex-wrap gap-2.5">
                  <Link
                    href={lp("/partner/driver")}
                    className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-[#225FD2] hover:bg-[#194cb0] text-xs font-semibold text-white transition-colors"
                  >
                    <span>{locale === "en" ? "Driver Partner (95%)" : "Mitra Driver (95%)"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={lp("/partner/fleet")}
                    className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 transition-colors"
                  >
                    <Building2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>{locale === "en" ? "Fleet Network" : "Mitra Armada"}</span>
                  </Link>
                </div>
              </div>

              {/* Right: Concise Comparison Box */}
              <div className="lg:col-span-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <h3 className="text-sm font-bold text-slate-900">{t.comparisonTitle}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                      STANDARD
                    </span>
                  </div>

                  <div className="divide-y divide-slate-200/80">
                    {t.comparisons.map((c, i) => (
                      <div key={i} className="py-2.5 flex items-center justify-between text-xs gap-3">
                        <span className="font-medium text-slate-700">{c.aspect}</span>
                        <div className="flex items-center gap-2">
                          <span className="line-through text-slate-400">{c.conv}</span>
                          <span className="text-slate-300">→</span>
                          <span className="font-bold text-[#225FD2] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                            {c.seva}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Three Core Principles */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-y border-slate-200/80">
          <div className={CONTAINER}>
            <div className="mb-8 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#225FD2] font-semibold">
                {t.principlesEyebrow}
              </span>
              <h2 className={H2}>{t.principlesTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {t.principles.map((p, idx) => {
                const Icon = idx === 0 ? Calculator : idx === 1 ? Coins : ShieldCheck;
                return (
                  <div
                    key={p.title}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                          <Icon className="w-4.5 h-4.5 text-[#225FD2]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {p.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. The Tri-Party Ecosystem */}
        <section className="py-12 sm:py-16 bg-white">
          <div className={CONTAINER}>
            <div className="mb-8 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#225FD2] font-semibold">
                {t.ecosystemEyebrow}
              </span>
              <h2 className={H2}>{t.ecosystemTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {t.ecosystemPillars.map((pillar, i) => {
                const Icon = i === 0 ? DeviceMobile : i === 1 ? Car : Building2;
                return (
                  <div
                    key={pillar.role}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                          <Icon className="w-4.5 h-4.5 text-[#225FD2]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#225FD2] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{pillar.role}</h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200">
                      <Link href={lp(pillar.ctaHref)} className={LINK}>
                        <span>{pillar.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Services Grid (Clean & Visual) */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-y border-slate-200/80">
          <div className={CONTAINER}>
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#225FD2] font-semibold">
                  {t.servicesEyebrow}
                </span>
                <h2 className={H2}>{t.servicesTitle}</h2>
              </div>
              <Link href={lp("/services")} className={LINK}>
                <span>{t.servicesCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES_DATA.map((srv) => (
                <Link
                  key={srv.id}
                  href={lp(srv.href)}
                  className="group block p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      src={srv.image}
                      alt={srv.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-900">
                      {srv.badge[locale]}
                    </span>
                  </div>
                  <div className="mt-2.5">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#225FD2] transition-colors">
                      {srv.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 truncate">{srv.tagline[locale]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Partner Fleet Operators */}
        {partnerLogos.length > 0 && (
          <section className="py-12 sm:py-16 bg-white">
            <div className={CONTAINER}>
              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#225FD2] font-semibold">
                    {t.partnersEyebrow}
                  </span>
                  <h2 className={H2}>{t.partnersTitle}</h2>
                </div>
                <Link href={lp("/partner/fleet")} className={LINK}>
                  <span>{t.partnersCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {partnerLogos.map((c) => (
                  <div
                    key={c.name}
                    className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center text-center gap-2"
                  >
                    <div className="h-10 w-full flex items-center justify-center">
                      <Image
                        src={c.logo!}
                        alt={c.name}
                        width={120}
                        height={40}
                        className="max-h-8 w-auto object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-800 truncate w-full">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. Safety Standards */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-y border-slate-200/80">
          <div className={CONTAINER}>
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#225FD2] font-semibold">
                  {t.safetyEyebrow}
                </span>
                <h2 className={H2}>{t.safetyTitle}</h2>
              </div>
              <Link href={lp("/safety")} className={LINK}>
                <span>{t.safetyCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {t.safetyFeatures.map((feat, idx) => {
                const Icon = idx === 0 ? FirstAid : idx === 1 ? ShieldCheck : idx === 2 ? LockKey : Clock;
                return (
                  <div key={feat.title} className="p-4 rounded-xl bg-white border border-slate-200">
                    <Icon className="w-5 h-5 text-[#225FD2] mb-2" />
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">{feat.title}</h3>
                    <p className="mt-1 text-[11px] text-slate-500 leading-snug">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. Legal & Contact (Minimalist Clean) */}
        <section className="py-12 sm:py-16 bg-white">
          <div className={CONTAINER}>
            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#225FD2] font-semibold">
                {t.legalEyebrow}
              </span>
              <h2 className={H2}>{t.legalTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              {/* Box 1: Legal Entity & PSE */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                  BADAN HUKUM &amp; PSE
                </span>
                <p className="font-bold text-slate-900 text-sm">{LEGAL_NAME}</p>
                <div className="flex items-center gap-2 pt-1">
                  <Image
                    src="/images/logo-pse-small.png"
                    alt="PSE Komdigi"
                    width={182}
                    height={50}
                    className="h-4 w-auto object-contain"
                  />
                  <span className="font-mono text-[11px] font-bold text-slate-800">{t.pseNumber}</span>
                </div>
              </div>

              {/* Box 2: Office Address */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                  {t.officeLabel}
                </span>
                <p className="text-slate-700 leading-relaxed text-xs">{OFFICE_ADDRESS_LINES.join(", ")}</p>
                <a
                  href={OFFICE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK} pt-1`}
                >
                  <span>{t.openMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Box 3: Support & Contact */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                  {t.supportLabel}
                </span>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-center gap-1.5 font-semibold text-slate-800 hover:text-[#225FD2]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#225FD2]" />
                  <span>{SUPPORT_EMAIL}</span>
                </a>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-slate-800 hover:text-[#225FD2]"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{CONTACT_PHONE_DISPLAY}</span>
                </a>
                <div className="pt-1">
                  <Link
                    href={lp("/contact")}
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#225FD2] hover:bg-[#194cb0] text-white font-semibold text-[11px]"
                  >
                    <span>{t.contactCta}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

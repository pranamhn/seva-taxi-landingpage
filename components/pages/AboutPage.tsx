import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  BadgePercent,
  CircleDollarSign,
  Building2,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Car,
  Bike,
  Package,
  Utensils,
  ExternalLink,
  Users,
} from "lucide-react";
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
    metaTitle: "Tentang Kami — Transportasi Online & Kurir Jabodetabek",
    metaDescription: `${SITE_NAME} adalah platform ride-hailing dan kurir instan di Jabodetabek yang dioperasikan oleh ${LEGAL_NAME}: tarif pasti di awal tanpa surge pricing, driver terverifikasi, dan kemitraan armada yang adil.`,
    badge: "TENTANG SEVA TAXI",
    title: "Transportasi Online dengan Tarif Pasti & Kemitraan yang Adil",
    subtitle: `${SITE_NAME} hadir untuk memberikan kepastian bagi mobilitas perkotaan: harga jujur di awal tanpa lonjakan sepihak, armada terstandar, dan skema bagi hasil 95/5 yang memberdayakan pengemudi.`,
    crumb: "Tentang Kami",
    metrics: {
      areas: "Wilayah Layanan",
      areasValue: (n: number) => `${n} Kota/Kab.`,
      areasHint: "Jabodetabek Terpadu",
      fleet: "Armada Mitra",
      fleetValue: (n: string) => `${n} Unit`,
      fleetHint: (n: number) => `${n} Operator Mitra`,
      share: "Bagi Hasil Driver",
      shareHint: "Potongan Platform 5%",
    },
    missionEyebrow: "VISI & MISI KAMI",
    missionTitle: "Membangun Ekosistem Mobilitas yang Berkelanjutan & Berkeadilan",
    missionParagraph1:
      "Mobilitas perkotaan di Jabodetabek selama bertahun-tahun diwarnai oleh ketidakpastian: penumpang mengeluhkan lonjakan tarif ganda saat jam pulang kantor dan hujan lebat, sementara mitra pengemudi terhimpit oleh tingginya potongan komisi platform hingga 20-30%.",
    missionParagraph2:
      "SEVA didirikan untuk menata ulang hubungan tersebut. Kami percaya bahwa transportasi umum on-demand harus transparan bagi penumpang, menguntungkan secara layak bagi pengemudi, dan membuka kolaborasi sehat dengan operator armada lokal.",
    missionPillars: [
      {
        title: "Tanpa Lonjakan Sepihak (Zero Dynamic Surge)",
        desc: "Argo dihitung dari formula jarak transparan sejak awal pemesanan.",
      },
      {
        title: "Bagi Hasil 95/5 Terbesar di Indonesia",
        desc: "Mitra driver membawa pulang 95% hasil kerja keras mereka setiap hari.",
      },
      {
        title: "Keamanan Berstandar Kemenhub & Jasa Raharja",
        desc: "Tombol darurat terintegrasi, live share trip, dan proteksi asuransi.",
      },
    ],
    servicesEyebrow: "4 PILAR LAYANAN MOBILITAS",
    servicesTitle: "Satu Aplikasi Terpadu untuk Semua Kebutuhan Kota",
    servicesSubtitle:
      "Dari perjalanan kilat menembus kemacetan, taksi mobil keluarga, pengiriman barang cepat, hingga pesan antar santapan favorit.",
    servicesCta: "Lihat Semua Layanan & Rincian Tarif",
    principlesEyebrow: "KOMITMEN KAMI",
    principlesTitle: "Tiga Prinsip Fundamental yang Kami Pegang",
    principlesSubtitle: "Standar operasional yang menjadi dasar setiap baris kode dan kebijakan di SEVA.",
    principles: [
      {
        number: "01",
        title: "Tarif Pasti Tanpa Spekulasi",
        desc: `Tarif dihitung murni dari tarif dasar buka pintu dan kilometer perjalanan (mulai ${rp(
          FARES.ride.base,
          "id"
        )} untuk SEVA Ride). Tidak ada algoritma 'surge pricing' yang tiba-tiba melipatgandakan tarif saat Anda paling membutuhkannya.`,
        tag: "Transparan 100%",
      },
      {
        number: "02",
        title: "Verifikasi Pengemudi & SOP Ketat",
        desc: "Setiap calon pengemudi wajib melewati validasi fisik dokumen (KTP, SIM resmi, SKCK kepolisian, dan STNK aktif) serta pembekalan safety riding dan SOP kesopanan berkendara.",
        tag: "Aman & Tepercaya",
      },
      {
        number: "03",
        title: "Kemitraan Adil 95/5",
        desc: "Kami membatasi potongan komisi platform hanya 5%. Driver berhak menikmati 95% penghasilan bersih dari tarif perjalanan, dengan pencairan instan H+0 tanpa potongan terselubung.",
        tag: "Bagi Hasil Tertinggi",
      },
    ],
    partnersEyebrow: "JARINGAN MITRA",
    partnersTitle: "Didukung oleh Operator Armada & Mitra Terpercaya",
    partnersSubtitle: (n: number) =>
      `${n} perusahaan operator taksi, sewa kendaraan, dan fleet management telah terhubung ke platform dispatch terpadu SEVA.`,
    partnersCta: "Gabung Jadi Mitra Armada",
    b2bCta: "Solusi Akun Korporat",
    legalEyebrow: "LEGALITAS & TRANSPARANSI",
    legalTitle: "Legalitas Terdaftar & Kantor Resmi Operasional",
    operatorLabel: "Badan Usaha Pengelola",
    officeLabel: "Alamat Kantor Operasional",
    pseLabel: "Pendaftaran Komdigi",
    supportLabel: "Kanal Bantuan & Kontak",
    supportDesc: "Tim operasional dan customer relations kami siap melayani mitra dan penumpang 24/7.",
    openMaps: "Buka di Google Maps",
    contactCta: "Hubungi Tim SEVA",
  },
  en: {
    metaTitle: "About Us — Ride-Hailing & Logistics in Greater Jakarta",
    metaDescription: `${SITE_NAME} is a ride-hailing and courier platform in Greater Jakarta operated by ${LEGAL_NAME}: upfront fares with zero surge, verified drivers, and fair fleet partnerships.`,
    badge: "ABOUT SEVA TAXI",
    title: "On-Demand Mobility with Upfront Fares & Fair Partnerships",
    subtitle: `${SITE_NAME} was built to restore confidence in urban transit: predictable upfront pricing without unilateral surges, standardized fleets, and an industry-leading 95/5 revenue split.`,
    crumb: "About Us",
    metrics: {
      areas: "Service Coverage",
      areasValue: (n: number) => `${n} Cities/Regencies`,
      areasHint: "Greater Jakarta Region",
      fleet: "Partner Fleet",
      fleetValue: (n: string) => `${n} Vehicles`,
      fleetHint: (n: number) => `${n} Partner Operators`,
      share: "Driver Take-Home",
      shareHint: "5% Platform Fee",
    },
    missionEyebrow: "OUR VISION & MISSION",
    missionTitle: "Building a Sustainable and Fair Urban Mobility Ecosystem",
    missionParagraph1:
      "Urban commuters in Greater Jakarta have long endured unpredictable fare spikes during peak hours and rainstorms, while driver partners faced steep platform commission fees of 20% to 30%.",
    missionParagraph2:
      "SEVA was founded to reset these dynamics. We believe on-demand transportation should be transparent for riders, truly rewarding for drivers, and open to healthy collaboration with fleet operators.",
    missionPillars: [
      {
        title: "Zero Dynamic Surge Pricing",
        desc: "Fares are calculated using a transparent distance-based formula shown before booking.",
      },
      {
        title: "Indonesia's Highest 95/5 Split",
        desc: "Drivers keep 95% of their hard-earned fares every single day.",
      },
      {
        title: "Verified Safety & Insurance Standards",
        desc: "Integrated SOS button, live trip sharing, and Jasa Raharja insurance coverage.",
      },
    ],
    servicesEyebrow: "4 CORE MOBILITY PILLARS",
    servicesTitle: "One Unified App for Every Urban Mobility Need",
    servicesSubtitle:
      "From brisk motorbike trips through traffic jams, family car rides, express parcel couriers, to delicious meal deliveries.",
    servicesCta: "Explore All Services & Fares",
    principlesEyebrow: "OUR COMMITMENTS",
    principlesTitle: "Three Core Principles We Live By",
    principlesSubtitle: "The foundational operational standards behind every feature and policy at SEVA.",
    principles: [
      {
        number: "01",
        title: "Upfront Transparent Fares",
        desc: `Every fare is calculated directly from base fare and distance (from ${rp(
          FARES.ride.base,
          "en"
        )} for SEVA Ride). No opaque surge algorithms that double prices when you need a ride the most.`,
        tag: "100% Transparent",
      },
      {
        number: "02",
        title: "Rigorous Driver Verification",
        desc: "Every driver candidate undergoes in-person verification of their ID, driver's licence, police criminal record certificate, and active vehicle registration.",
        tag: "Safe & Trusted",
      },
      {
        number: "03",
        title: "Fair 95/5 Revenue Share",
        desc: "We cap our platform fee at just 5%. Drivers retain 95% of the fare with instant same-day cashouts and zero hidden deductions.",
        tag: "Highest Take-Home",
      },
    ],
    partnersEyebrow: "PARTNER NETWORK",
    partnersTitle: "Trusted by Fleet Operators & Corporate Partners",
    partnersSubtitle: (n: number) =>
      `${n} taxi companies, rental vehicle firms, and fleet operators are connected to the unified SEVA dispatch network.`,
    partnersCta: "Join as Fleet Partner",
    b2bCta: "Corporate Account Solutions",
    legalEyebrow: "LEGAL & COMPLIANCE",
    legalTitle: "Registered Legal Entity & Official Headquarters",
    operatorLabel: "Operating Entity",
    officeLabel: "Headquarters Address",
    pseLabel: "Ministry of Communication Registration",
    supportLabel: "Support Channels & Contacts",
    supportDesc: "Our dedicated support team is available 24/7 for partners and passengers.",
    openMaps: "Open in Google Maps",
    contactCta: "Contact SEVA Team",
  },
} as const;

const SERVICES_DATA = [
  {
    id: "ride",
    name: "SEVA Ride",
    category: { id: "Sepeda Motor", en: "Motorbike Taxi" },
    tagline: { id: "Tembus Macet Cepat & Hemat", en: "Beat Traffic Fast & Affordably" },
    desc: {
      id: "Solusi mobilitas roda dua lincah di jam sibuk dengan pengemudi terlatih dan terverifikasi.",
      en: "Agile two-wheeler mobility for rush hours with verified riders.",
    },
    image: "/assets/services/seva-ride.webp",
    badge: { id: "Mulai Rp 8.000", en: "From Rp 8,000" },
    href: "/services/ride",
    icon: Bike,
  },
  {
    id: "car",
    name: "SEVA Car",
    category: { id: "Mobil", en: "Car" },
    tagline: { id: "Taksi & Mobil Harian Nyaman", en: "Comfortable Everyday Taxi" },
    desc: {
      id: "Kenyamanan standar taksi eksekutif, interior bersih, dan tarif pasti tanpa kenaikan harga sepihak.",
      en: "Executive-grade comfort with clean interiors, and fixed upfront fares with zero surge.",
    },
    image: "/assets/services/seva-car.webp",
    badge: { id: "Mulai Rp 9.500", en: "From Rp 9,500" },
    href: "/services/car",
    icon: Car,
  },
  {
    id: "send",
    name: "SEVA Send",
    category: { id: "Kurir Instan", en: "Instant Courier" },
    tagline: { id: "Kirim Paket & Dokumen Tiba Hari Ini", en: "Fast Same-Day Delivery" },
    desc: {
      id: "Pengiriman barang, dokumen, dan pesanan bisnis tiba dalam hitungan jam dengan bukti foto tanda terima.",
      en: "On-demand city logistics for parcels and business orders with live GPS tracking and photo proof.",
    },
    image: "/assets/services/seva-send.webp",
    badge: { id: "Mulai Rp 10.000", en: "From Rp 10,000" },
    href: "/services/send",
    icon: Package,
  },
  {
    id: "food",
    name: "SEVA Food",
    category: { id: "Kuliner & Resto", en: "Food Delivery" },
    tagline: { id: "Pesan Antar Makanan Pilihan", en: "Curated Culinary Delivery" },
    desc: {
      id: "Pesan makanan favorit dari resto lokal dan UMKM dengan ongkir hemat dan tas khusus berinsulasi.",
      en: "Order meals from local eateries and merchants delivered fresh with insulated courier bags.",
    },
    image: "/assets/services/seva-food.webp",
    badge: { id: "Segera Hadir", en: "Coming Soon" },
    href: "/services/food",
    icon: Utensils,
  },
];

const partnerLogos = FLEET_COMPANIES.filter((c) => c.logo);

export default function AboutPage({ locale }: { locale: Locale }) {
  const t = ABOUT_COPY[locale];
  const lp = (href: string) => localePath(locale, href);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* 1. Page Header with Breadcrumbs & Top Telemetry */}
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: t.crumb }]}
          metrics={[
            {
              label: t.metrics.areas,
              value: t.metrics.areasValue(CITY_DIRECTORY.length),
              hint: t.metrics.areasHint,
            },
            {
              label: t.metrics.fleet,
              value: t.metrics.fleetValue(num(FLEET_TOTAL_VEHICLES, locale)),
              hint: t.metrics.fleetHint(FLEET_COMPANY_COUNT),
            },
            {
              label: t.metrics.share,
              value: "95%",
              hint: t.metrics.shareHint,
            },
          ]}
        />

        {/* 2. Story & Mission High-Impact Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Mission Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#225FD2]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.missionEyebrow}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {t.missionTitle}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <p>{t.missionParagraph1}</p>
                  <p>{t.missionParagraph2}</p>
                </div>

                {/* Key Pillars Checklist */}
                <div className="pt-2 space-y-3">
                  {t.missionPillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 transition-colors hover:bg-blue-50/40 hover:border-blue-200/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#225FD2] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">{pillar.title}</h3>
                        <p className="text-xs text-slate-600 mt-0.5">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Fleet Showcase Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6 sm:p-7 shadow-[0_20px_50px_-25px_rgba(34,95,210,0.15)] space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-900 tracking-wide">
                        {locale === "en" ? "SEVA DISPATCH TELEMETRY" : "STATUS ARMADA & TELEMETRI"}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      LIVE 24/7
                    </span>
                  </div>

                  {/* Dual 3D Vehicle Render Preview */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative rounded-2xl bg-white border border-slate-200/90 p-3 shadow-xs overflow-hidden group">
                      <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-50 mb-2">
                        <Image
                          src="/assets/services/seva-car.webp"
                          alt="SEVA Car"
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="block text-xs font-bold text-slate-900">SEVA Car</span>
                      <span className="block text-[11px] font-medium text-emerald-600 mt-0.5">
                        {locale === "en" ? "Standard Euro 4 & EV" : "Standar Euro 4 & EV"}
                      </span>
                    </div>

                    <div className="relative rounded-2xl bg-white border border-slate-200/90 p-3 shadow-xs overflow-hidden group">
                      <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-50 mb-2">
                        <Image
                          src="/assets/services/seva-ride.webp"
                          alt="SEVA Ride"
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="block text-xs font-bold text-slate-900">SEVA Ride</span>
                      <span className="block text-[11px] font-medium text-[#225FD2] mt-0.5">
                        {locale === "en" ? "Verified Riders" : "Rider Terverifikasi"}
                      </span>
                    </div>
                  </div>

                  {/* Quick Stat Bar */}
                  <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        {locale === "en" ? "Coverage" : "Wilayah"}
                      </span>
                      <span className="block text-sm font-extrabold text-slate-900 mt-0.5">Jabodetabek</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        {locale === "en" ? "Driver Cut" : "Bagi Hasil"}
                      </span>
                      <span className="block text-sm font-extrabold text-[#225FD2] mt-0.5">95%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        {locale === "en" ? "Surge Fare" : "Surge Pricing"}
                      </span>
                      <span className="block text-sm font-extrabold text-emerald-600 mt-0.5">Rp 0 (None)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 4 Core Mobility Services Visual Cards Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-2xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#225FD2]">
                  <Car className="w-3.5 h-3.5" />
                  <span>{t.servicesEyebrow}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t.servicesTitle}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{t.servicesSubtitle}</p>
              </div>

              <Link
                href={lp("/services")}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#225FD2] hover:text-[#194cb0] transition-colors shrink-0 group"
              >
                <span>{t.servicesCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 4 Visual Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES_DATA.map((srv) => {
                const IconComponent = srv.icon;
                const category = srv.category[locale];
                const tagline = srv.tagline[locale];
                const desc = srv.desc[locale];
                const badge = srv.badge[locale];

                return (
                  <Link
                    key={srv.id}
                    href={lp(srv.href)}
                    className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#225FD2]/40 transition-all duration-300 overflow-hidden"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                        <Image
                          src={srv.image}
                          alt={srv.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-900 shadow-xs backdrop-blur-xs border border-slate-200/80">
                          {badge}
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-5 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#225FD2]">
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#225FD2] transition-colors flex items-center justify-between">
                          <span>{srv.name}</span>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#225FD2] group-hover:translate-x-1 transition-all" />
                        </h3>
                        <p className="text-xs font-medium text-slate-700">{tagline}</p>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{desc}</p>
                      </div>
                    </div>

                    {/* Card Footer Link */}
                    <div className="px-5 pb-5 pt-1">
                      <span className="text-xs font-bold text-[#225FD2] inline-flex items-center gap-1 group-hover:underline">
                        {locale === "en" ? "View Details & Fare" : "Lihat Tarif & Pesan"} →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Core Principles & Operational Commitments */}
        <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#225FD2]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.principlesEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {t.principlesTitle}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">{t.principlesSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.principles.map((p) => (
                <div
                  key={p.number}
                  className="relative p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 shadow-sm hover:shadow-md hover:border-[#225FD2]/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-[#225FD2] border border-blue-200/60 tabular-nums">
                        {p.number}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">{p.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>
                      {locale === "en" ? "Guaranteed in SEVA App" : "Dijamin dalam Setiap Perjalanan"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Fleet Partners Network */}
        {partnerLogos.length > 0 && (
          <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#225FD2] mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{t.partnersEyebrow}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                    {t.partnersTitle}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">{t.partnersSubtitle(FLEET_COMPANY_COUNT)}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={lp("/partner/fleet")}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#225FD2] hover:text-[#194cb0] transition-colors"
                  >
                    <span>{t.partnersCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link
                    href={lp("/partner/b2b")}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <span>{t.b2bCta}</span>
                  </Link>
                </div>
              </div>

              {/* Logo Grid */}
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {partnerLogos.map((c) => (
                  <li
                    key={c.name}
                    className="flex h-20 items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs hover:border-[#225FD2]/40 transition-colors"
                  >
                    <Image
                      src={c.logo!}
                      alt={c.name}
                      width={120}
                      height={48}
                      className="max-h-9 w-auto object-contain filter grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 6. Legal Compliance & Physical Headquarters Verification */}
        <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#225FD2]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.legalEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {t.legalTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Official Legal & PSE Entity */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-slate-50/60 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#225FD2] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{t.operatorLabel}</h3>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">{LEGAL_NAME}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">
                    {t.pseLabel}
                  </span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/logo-pse-small.png"
                      alt="PSE Komdigi"
                      width={182}
                      height={50}
                      className="h-5 w-auto object-contain"
                    />
                    <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md">
                      028759.01/DJAI.PSE
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    {locale === "en"
                      ? "Officially registered under the Ministry of Communication and Digital Economy of the Republic of Indonesia."
                      : "Terdaftar resmi sebagai Penyelenggara Sistem Elektronik (PSE) Lingkup Privat di Kementerian Komunikasi dan Digital RI."}
                  </p>
                </div>

                {/* Office Location */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    {t.officeLabel}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">{OFFICE_ADDRESS_LINES.join(", ")}</p>
                  <a
                    href={OFFICE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#225FD2] hover:underline pt-1"
                  >
                    <span>{t.openMaps}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 2: Contact & Verified Support Channels */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-blue-50/30 via-white to-slate-50 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{t.supportLabel}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{t.supportDesc}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 transition-colors group"
                    >
                      <div>
                        <span className="text-xs text-slate-500 block">Email Bantuan Resmi</span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-[#225FD2]">
                          {SUPPORT_EMAIL}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#225FD2] group-hover:translate-x-1 transition-all" />
                    </a>

                    <a
                      href={CONTACT_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 transition-colors group"
                    >
                      <div>
                        <span className="text-xs text-slate-500 block">WhatsApp Customer Care</span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600">
                          {CONTACT_PHONE_DISPLAY}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {locale === "en" ? "Need business or fleet assistance?" : "Butuh bantuan kemitraan?"}
                  </span>
                  <Link
                    href={lp("/contact")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#225FD2] hover:bg-[#194cb0] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>{t.contactCta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Conversion App Download Section */}
        <AppDownload locale={locale} />
      </main>
      <Footer />
    </>
  );
}

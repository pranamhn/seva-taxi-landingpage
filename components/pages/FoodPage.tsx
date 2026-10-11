import Link from "next/link";
import Image from "next/image";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ArrowRightIcon as ArrowRight, ClockIcon as Clock, EnvelopeSimpleIcon as Mail, PercentIcon as Percent, ShieldCheckIcon as ShieldCheck, SparkleIcon as Sparkles, StorefrontIcon as Store } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import LeadForm from "@/components/sections/LeadForm";
import OtherServices from "@/components/sections/OtherServices";
import { localePath, type Locale } from "@/lib/i18n";
import { SUPPORT_EMAIL } from "@/lib/site";

const HIGHLIGHT_STYLE: { icon: PhosphorIcon; tone: string }[] = [
  { icon: ShieldCheck, tone: "text-[#225FD2]" },
  { icon: Percent, tone: "text-emerald-700" },
  { icon: Store, tone: "text-amber-700" },
  { icon: Clock, tone: "text-purple-700" },
];

export const FOOD_COPY = {
  id: {
    metaTitle: "SEVA Food — Pesan Antar Makanan (Segera Hadir)",
    metaDescription:
      "Layanan pesan antar makanan praktis dari resto pilihan dan UMKM kuliner lokal. Diantar aman dengan tas khusus oleh mitra pengemudi SEVA.",
    badge: "KULINER NUSANTARA // SEVA FOOD (SEGERA HADIR)",
    title: "SEVA Food: Kuliner Resto & UMKM Diantar Hangat",
    subtitle:
      "Platform pesan antar makanan yang menghubungkan pecinta kuliner dengan resto favorit dan pelaku UMKM lokal. Dilengkapi tas termal higienis dan komisi adil bagi mitra.",
    servicesCrumb: "Layanan",
    metrics: [
      { label: "Status Layanan", value: "Segera Hadir", hint: "Tahap integrasi merchant" },
      { label: "Standar Tas", value: "Thermal Box", hint: "Suhu makanan terjaga higienis" },
      { label: "Komisi Merchant", value: "Ramah UMKM", hint: "Dukung pertumbuhan resto lokal" },
    ],
    eyebrow: "PREVIEW LAYANAN MENDATANG",
    heading: "Pesan Antar Makanan Lebih Praktis",
    body: "SEVA Food disiapkan untuk memudahkan pemesanan makanan dan minuman dari mitra resto terdekat, diantar dengan standar keamanan kemasan oleh mitra pengemudi SEVA.",
    highlights: [
      { title: "Tas Khusus Pengantaran", desc: "Pesanan dibawa dengan tas khusus pengantaran agar kemasan makanan tetap rapi dan terlindungi di perjalanan." },
      { title: "Skema Kemitraan Ramah Mitra", desc: "Skema bagi hasil yang transparan dan kompetitif untuk mendukung pertumbuhan usaha resto lokal." },
      { title: "Pilihan Kuliner Terdekat", desc: "Kemudahan memesan aneka menu favorit dari mitra resto dan UMKM kuliner di sekitar lokasi Anda." },
      { title: "Status Pengantaran Terpantau", desc: "Pantau proses pesanan dan pergerakan mitra driver secara langsung di peta hingga tiba di tujuan." },
    ],
    merchantCta: "Daftar Jadi Merchant Kuliner",
    waitlistCta: "Masuk Daftar Tunggu",
    compareAll: "Bandingkan Semua Layanan",
    imageAlt: "SEVA Food - Pesan Antar Makanan & Kuliner",
    imageBadge: "Segera Hadir",
    imageNote: "Daftar Tunggu Dibuka",
    specsTitle: "Standar Operasional SEVA Food",
    specs: [
      { label: "Status Peluncuran", value: "Tahap Integrasi Merchant & Restoran Rekanan" },
      { label: "Standar Wadah Antar", value: "Tas Termal Higienis Khusus (Isolasi Suhu Panas & Dingin)" },
      { label: "Pilihan Kuliner", value: "Beragam Menu Restoran Pilihan & UMKM Kuliner" },
      { label: "Skema Kemitraan Resto", value: "Komisi Ramah UMKM (Tumbuh Bersama Mitra)" },
      { label: "Estimasi Pengantaran", value: "Waktu Masak + Rute Antar Tercepat Driver Terdekat" },
      { label: "Kebersihan Kemasan", value: "Standar Segel Higienis Anti Tumpah" },
    ],
    merchantEyebrow: "KEMITRAAN MERCHANT RESTORAN & KULINER",
    merchantTitle: "Bergabung Lebih Awal Bersama Ekosistem SEVA Food",
    merchantBody:
      "Dapatkan eksposur prioritas kepada pengguna aktif SEVA di Jabodetabek dengan komisi transparan yang mendukung profitabilitas resto Anda.",
    merchantPerks: [
      { title: "Bebas Biaya Registrasi", desc: "Onboarding dibantu tim hingga menu online" },
      { title: "Akses Pengguna Aplikasi SEVA", desc: "Promosi langsung di halaman depan aplikasi" },
      { title: "Settlement Transparan", desc: "Rincian penjualan & pencairan dapat dipantau" },
    ],
    merchantSubject: "Pendaftaran Merchant Kuliner SEVA",
    merchantContact: "Hubungi Tim Kemitraan",
  },
  en: {
    metaTitle: "SEVA Food — Food Delivery (Coming Soon)",
    metaDescription:
      "Food delivery from selected restaurants and local food businesses, delivered safely in dedicated bags by SEVA driver partners.",
    badge: "LOCAL FOOD // SEVA FOOD (COMING SOON)",
    title: "SEVA Food: Restaurant & Local Favourites, Delivered Warm",
    subtitle:
      "A food delivery service connecting food lovers with favourite restaurants and local small businesses, with insulated, hygienic bags and a fair commission for merchants.",
    servicesCrumb: "Services",
    metrics: [
      { label: "Status", value: "Coming Soon", hint: "Onboarding merchants" },
      { label: "Delivery Bag", value: "Thermal Box", hint: "Keeps food at temperature" },
      { label: "Merchant Commission", value: "SME-Friendly", hint: "Helping local restaurants grow" },
    ],
    eyebrow: "UPCOMING SERVICE PREVIEW",
    heading: "Food Delivery, Made Easier",
    body: "SEVA Food is being built to make it easy to order food and drinks from nearby restaurants, delivered by SEVA driver partners with safe packaging standards.",
    highlights: [
      { title: "Dedicated Delivery Bags", desc: "Orders travel in dedicated delivery bags so packaging stays neat and protected." },
      { title: "Merchant-Friendly Terms", desc: "A transparent, competitive revenue share that helps local restaurants grow." },
      { title: "Nearby Food Choices", desc: "Order favourite dishes from restaurants and local food businesses around you." },
      { title: "Track Your Delivery", desc: "Follow your order and the driver's location on the map until it arrives." },
    ],
    merchantCta: "Register as a Food Merchant",
    waitlistCta: "Join the Waitlist",
    compareAll: "Compare All Services",
    imageAlt: "SEVA Food - food delivery",
    imageBadge: "Coming Soon",
    imageNote: "Waitlist Open",
    specsTitle: "SEVA Food Operating Standards",
    specs: [
      { label: "Launch Status", value: "Onboarding Merchants & Partner Restaurants" },
      { label: "Delivery Container", value: "Dedicated Insulated Bag (Hot & Cold)" },
      { label: "Food Choices", value: "Selected Restaurants & Local Food Businesses" },
      { label: "Restaurant Partnership", value: "SME-Friendly Commission (Growing Together)" },
      { label: "Delivery Time", value: "Cooking Time + Fastest Route from the Nearest Driver" },
      { label: "Packaging Hygiene", value: "Sealed, Spill-Proof Standard" },
    ],
    merchantEyebrow: "RESTAURANT & FOOD MERCHANT PARTNERSHIP",
    merchantTitle: "Join the SEVA Food Ecosystem Early",
    merchantBody:
      "Get priority exposure to active SEVA users across Greater Jakarta, with a transparent commission that supports your restaurant's margins.",
    merchantPerks: [
      { title: "No Registration Fee", desc: "Our team helps you onboard and put your menu online" },
      { title: "Reach SEVA App Users", desc: "Promotion on the app's home screen" },
      { title: "Transparent Settlement", desc: "Track your sales and payouts" },
    ],
    merchantSubject: "SEVA Food Merchant Registration",
    merchantContact: "Contact Our Partnerships Team",
  },
} as const;

// Dipakai app/(id)/services/food dan app/(en)/en/services/food.
export default function FoodPage({ locale }: { locale: Locale }) {
  const t = FOOD_COPY[locale];
  const lp = (href: string) => localePath(locale, href);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: t.servicesCrumb, href: lp("/services") }, { label: "SEVA Food" }]}
          metrics={[...t.metrics]}
        />

        {/* Hero Showcase Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Product Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.eyebrow}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{t.heading}</h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{t.body}</p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {t.highlights.map((h, i) => {
                    const { icon: Icon, tone } = HIGHLIGHT_STYLE[i];
                    return (
                      <div key={h.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <Icon weight="duotone" className={`w-6 h-6 ${tone} mb-2.5`} />
                        <div className="font-bold text-slate-900 text-sm">{h.title}</div>
                        <p className="text-xs text-slate-600 mt-1">{h.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="#daftar-merchant"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#225FD2] text-white font-semibold text-xs hover:bg-[#1a4cb0] transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t.merchantCta}</span>
                  </a>
                  <a
                    href="#waitlist-food"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#225FD2]/40 bg-white text-[#225FD2] font-semibold text-xs hover:bg-blue-50 transition-colors"
                  >
                    <span>{t.waitlistCta}</span>
                  </a>
                  <Link
                    href={lp("/services")}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                  >
                    <span>{t.compareAll}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Card Visual & Specs Table */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-gradient-to-b from-slate-100 to-slate-200 p-3 sm:p-4">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-inner">
                    <Image
                      src="/assets/services/seva-food.webp"
                      alt={t.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-600 text-white shadow-xs">
                      {t.imageBadge}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-900 backdrop-blur-sm shadow-xs border border-slate-200">
                      {t.imageNote}
                    </div>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200">{t.specsTitle}</div>
                  <dl className="divide-y divide-slate-200/60 text-xs">
                    {t.specs.map((spec) => (
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
                  <span>{t.merchantEyebrow}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">{t.merchantTitle}</h2>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">{t.merchantBody}</p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  {t.merchantPerks.map((perk) => (
                    <div key={perk.title} className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
                      <div className="font-bold text-white mb-1">{perk.title}</div>
                      <div className="text-blue-200 text-[11px]">{perk.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(t.merchantSubject)}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#225FD2] font-bold text-xs hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>
                      {t.merchantContact} ({SUPPORT_EMAIL})
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OtherServices current="food" locale={locale} />

        {/* Lead form: dikirim lewat WhatsApp */}
        <LeadForm variant="food-waitlist" locale={locale} />
        <LeadForm variant="merchant" locale={locale} />

        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

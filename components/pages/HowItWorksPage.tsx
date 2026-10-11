import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  Briefcase,
  Calculator,
  Car,
  CheckCircle2,
  MessageCircle,
  Navigation,
  Package,
  Phone,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import HowItWorks from "@/components/sections/HowItWorks";
import AppDownload from "@/components/sections/AppDownload";
import { FARES } from "@/lib/articles";
import { localePath, type Locale } from "@/lib/i18n";

type FlowId = "ride" | "car" | "send";

const FLOW_STYLE: Record<FlowId, { icon: LucideIcon; specIcons: [LucideIcon, LucideIcon]; badgeBg: string; iconBg: string; borderAccent: string }> = {
  ride: {
    icon: Bike,
    specIcons: [Users, ShieldCheck],
    badgeBg: "bg-blue-50 text-[#225FD2] border-blue-200/70",
    iconBg: "bg-blue-600 text-white shadow-blue-500/25",
    borderAccent: "hover:border-blue-400/60",
  },
  car: {
    icon: Car,
    specIcons: [Users, Briefcase],
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
    iconBg: "bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-indigo-500/25",
    borderAccent: "hover:border-indigo-400/60",
  },
  send: {
    icon: Package,
    specIcons: [Briefcase, Package],
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
    iconBg: "bg-emerald-600 text-white shadow-emerald-500/25",
    borderAccent: "hover:border-emerald-400/60",
  },
};

const FEATURE_STYLE: { icon: LucideIcon; accent: string }[] = [
  { icon: UserCheck, accent: "text-[#225FD2] bg-blue-50 border-blue-200/70" },
  { icon: Navigation, accent: "text-indigo-600 bg-indigo-50 border-indigo-200/70" },
  { icon: MessageCircle, accent: "text-emerald-600 bg-emerald-50 border-emerald-200/70" },
  { icon: Share2, accent: "text-sky-600 bg-sky-50 border-sky-200/70" },
  { icon: ShieldAlert, accent: "text-rose-600 bg-rose-50 border-rose-200/70" },
  { icon: ShieldCheck, accent: "text-amber-600 bg-amber-50 border-amber-200/70" },
];

type Flow = { tag: string; badge: string; specs: [string, string]; steps: { title: string; desc: string }[]; highlight: string; cta: string };

export const HOW_COPY = {
  id: {
    numberLocale: "id-ID",
    metaTitle: "Cara Kerja & Alur Pemesanan",
    metaDescription:
      "Panduan lengkap cara pesan SEVA Ride, SEVA Car, dan SEVA Send: alur tiap layanan, formula tarif transparan tanpa lonjakan, dan fitur keamanan selama perjalanan.",
    badge: "ALUR LAYANAN // DISPATCHING OTOMATIS BERBASIS GPS",
    title: "Cara Kerja & Alur Pemesanan",
    subtitle:
      "Dari menentukan titik jemput hingga menikmati perjalanan nyaman: semua yang perlu Anda tahu sebelum memesan SEVA Ride, SEVA Car, atau SEVA Send. Tanpa tawar-menawar, tanpa biaya terselubung.",
    crumb: "Cara Kerja",
    metrics: [
      { label: "Pencocokan Driver", value: "Otomatis", hint: "Driver terdekat" },
      { label: "Metode Bayar", value: "SEVA eWallet", hint: "QRIS & Tunai" },
      { label: "Bukti Transaksi", value: "E-Receipt", hint: "Kuitansi PDF" },
    ],
    flowsEyebrow: "ALUR PER LAYANAN",
    flowsTitle: "Cara Pesan Sesuai Kebutuhan Mobilitas Anda",
    flowsIntro:
      "Setiap armada SEVA dirancang dengan standar operasional spesifik. Temukan alur langkah pemesanan dan spesifikasi armada yang paling cocok untuk perjalanan atau pengiriman Anda.",
    flows: {
      ride: {
        tag: "Ojek Motor Hemat & Gesit",
        badge: "Paling Populer & Cepat",
        specs: ["1 Penumpang", "Helm dari driver"],
        steps: [
          { title: "Tentukan Titik Jemput & Tujuan", desc: "Buka aplikasi SEVA, pilih SEVA Ride, dan geser pin akurat hingga pintu gerbang atau lobi stasiun." },
          { title: "Kunci Tarif Transparan", desc: "Lihat argo pasti tanpa lonjakan jam sibuk. Pilih metode bayar lalu konfirmasi pesanan." },
          { title: "Pencocokan Driver Otomatis", desc: "Sistem dispatching GPS menghubungkan Anda dengan driver terdekat berating tinggi dalam hitungan detik." },
          { title: "Driver Tiba & Melaju Cepat", desc: "Driver menjemput sambil membawa helm untuk Anda. Nikmati perjalanan gesit menembus macet." },
        ],
        highlight: "Pilihan utama komuter stasiun MRT/KRL dan mobilitas cepat saat jam sibuk.",
        cta: "Pelajari Detail SEVA Ride",
      },
      car: {
        tag: "Mobil Nyaman & Bersih",
        badge: "Kenyamanan Ekstra",
        specs: ["Hingga 4 Penumpang", "2 Koper + Ransel"],
        steps: [
          { title: "Atur Penjemputan di Lobi", desc: "Pilih SEVA Car untuk perjalanan rombongan keluarga, meeting dinas, atau perjalanan bandara." },
          { title: "Cek Rincian Argo Pasti", desc: "Tarif ditampilkan di awal. Biaya tol dan parkir gedung resmi ditanggung riil sesuai perjalanan." },
          { title: "Verifikasi Mobil & Driver", desc: "Periksa foto driver, tipe armada mobil, dan plat nomor resmi di aplikasi sebelum Anda naik." },
          { title: "Perjalanan Tenang & E-Receipt", desc: "Kabin bersih, rute optimal, dan kuitansi digital otomatis tersimpan di riwayat trip Anda." },
        ],
        highlight: "Sempurna untuk antar-jemput bandara, perjalanan kantor, dan belanja keluarga.",
        cta: "Pelajari Detail SEVA Car",
      },
      send: {
        tag: "Kurir Kilat Door-to-Door",
        badge: "Langsung Tanpa Transit",
        specs: ["Maksimal 20 kg", "Maks. 40×40×40 cm"],
        steps: [
          { title: "Input Detail Pengirim & Penerima", desc: "Pilih SEVA Send, lengkapi alamat detail, nomor kontak penerima, serta catatan khusus barang." },
          { title: "Tarif Flat Rute Langsung", desc: "Ongkir pasti dihitung berdasarkan jarak tempuh langsung tanpa biaya sortir atau transit gudang." },
          { title: "Penjemputan Paket Cepat", desc: "Kurir menjemput paket langsung dari tangan Anda dan segera berangkat menuju alamat tujuan." },
          { title: "Pantau Live & Foto Bukti (POD)", desc: "Lacak perjalanan kurir di peta dan terima foto bukti serah terima paket saat tiba di penerima." },
        ],
        highlight: "Solusi cepat pengiriman dokumen darurat, pesanan kuliner, dan produk toko online.",
        cta: "Pelajari Detail SEVA Send",
      },
    } satisfies Record<FlowId, Flow>,
    fareEyebrow: "TARIF TRANSPARAN & PASTI",
    fareTitle: "Cara Tarif Dihitung di Aplikasi SEVA",
    fareIntro:
      "Kami percaya pada transparansi penuh. Tidak ada algoritma kenaikan harga sepihak (surge pricing) saat jam sibuk atau cuaca hujan lebat. Semua komponen argo dihitung dengan formula baku yang teruji.",
    formulaTitle: "Formula Perhitungan Tarif Baku",
    compA: { label: "Komponen A", title: "Tarif Buka Pintu", desc: "Biaya operasional awal penjemputan armada hingga titik lokasi Anda." },
    compB: { label: "Komponen B (Jarak Rute)", title: "Jarak (km) × Tarif / km", desc: "Dihitung otomatis berbasis pemetaan GPS rute tercepat dan akurat." },
    result: { label: "Hasil di Aplikasi", title: "Total Tarif Pasti Terkunci", desc: "Nominal final yang tampil sebelum Anda klik pesan. Tidak bertambah di akhir." },
    guarantees: [
      { strong: "Bebas Lonjakan Hujan:", text: "Tidak ada surge 2x lipat saat cuaca buruk." },
      { strong: "Tol & Parkir Riil:", text: "Karcis tol/parkir ditanggung terpisah sesuai struk fisik." },
      { strong: "Tanpa Biaya Siluman:", text: "Tidak ada biaya admin misterius yang diselipkan." },
    ],
    tableTitle: "Tabel Tarif Dasar & Simulasi Perjalanan",
    tableIntro: "Angka baku operasional resmi armada SEVA di wilayah Jabodetabek.",
    tableGuide: "Lihat Panduan Tarif Lengkap",
    tableCaption: "Tarif dasar layanan SEVA",
    cols: { service: "Layanan", base: "Tarif Buka Pintu", perKm: "Tarif per KM", sim5: "Simulasi 5 KM", sim10: "Simulasi 10 KM" },
    tableNote: "* Simulasi di atas belum termasuk biaya tol/parkir resmi jika rute melewatinya.",
    tableNote2: "Tarif final selalu tampil sebelum Anda mengonfirmasi pesanan.",
    tripEyebrow: "SELAMA PERJALANAN",
    tripTitle: "Yang Bisa Anda Lakukan di Aplikasi SEVA",
    tripIntro:
      "Kendali penuh dan rasa aman ada di tangan Anda. Dari detik pertama driver ditugaskan hingga tiba di tujuan akhir, seluruh instrumen keselamatan dan pelacakan aktif bekerja.",
    mock: {
      live: "Perjalanan Aktif Terpantau GPS",
      eta: "ETA 6 Menit (2.1 km lagi)",
      vehicle: "Toyota Avanza Silver • Plat No:",
      chat: "Chat In-App",
      call: "Telepon Masking",
      share: "Bagi Rute Live",
      sos: "Tombol SOS",
    },
    features: [
      { title: "Verifikasi Driver & Armada", desc: "Cek nama pengemudi, rating bintang, dan nomor plat kendaraan sebelum Anda menaiki kendaraan.", tag: "Identitas Resmi" },
      { title: "Pelacakan GPS Real-Time", desc: "Lihat posisi mobil atau motor di peta interaktif secara langsung dari penjemputan hingga tiba di tujuan.", tag: "Akurasi Tinggi" },
      { title: "Nomor HP Tersamar (Masking)", desc: "Hubungi driver via in-app chat atau panggilan tanpa mengekspos nomor HP pribadi Anda demi privasi.", tag: "Privasi Terjamin" },
      { title: "Bagikan Perjalanan (Share Trip)", desc: "Kirim tautan pelacakan perjalanan ke keluarga atau teman lewat WhatsApp hanya dalam 1 ketukan.", tag: "Pantau Bersama" },
      { title: "Tombol Darurat SOS", desc: "Satu sentuhan untuk menelepon layanan darurat 112 atau kontak darurat Anda saat ada situasi mendesak.", tag: "Respons Darurat" },
      { title: "Standar Armada & Pengemudi", desc: "Setiap armada melewati uji kelayakan rutin dan mitra driver terlatih dalam etika pelayanan ramah.", tag: "Kenyamanan Maksimal" },
    ],
    safetyTitle: "Ingin tahu lebih detail standar keselamatan SEVA?",
    safetyBody: "Pelajari protokol verifikasi mitra, tombol darurat SOS, dan fitur bagikan perjalanan.",
    safetyCta: "Pelajari Pusat Keselamatan",
  },
  en: {
    numberLocale: "en-US",
    metaTitle: "How It Works & How to Book",
    metaDescription:
      "A complete guide to booking SEVA Ride, SEVA Car, and SEVA Send: the steps for each service, our transparent no-surge fare formula, and in-trip safety features.",
    badge: "HOW IT WORKS // AUTOMATIC GPS DISPATCH",
    title: "How It Works & How to Book",
    subtitle:
      "From setting your pickup to enjoying the ride: everything to know before booking SEVA Ride, SEVA Car, or SEVA Send. No haggling and no hidden fees.",
    crumb: "How It Works",
    metrics: [
      { label: "Driver Matching", value: "Automatic", hint: "Nearest driver" },
      { label: "Payment", value: "SEVA eWallet", hint: "QRIS & Cash" },
      { label: "Receipt", value: "E-Receipt", hint: "PDF receipt" },
    ],
    flowsEyebrow: "STEP BY STEP",
    flowsTitle: "How to Book for Every Kind of Trip",
    flowsIntro:
      "Each SEVA service has its own operating standards. Find the booking steps and vehicle specs that suit your trip or delivery.",
    flows: {
      ride: {
        tag: "Affordable, Nimble Motorbike Taxi",
        badge: "Most Popular & Fastest",
        specs: ["1 Passenger", "Helmet from driver"],
        steps: [
          { title: "Set Pickup & Destination", desc: "Open the SEVA app, choose SEVA Ride, and drag the pin to the exact gate or station lobby." },
          { title: "Lock In a Clear Fare", desc: "See a fixed fare with no rush-hour surge. Choose how to pay and confirm." },
          { title: "Automatic Driver Matching", desc: "GPS dispatch connects you to a nearby, highly rated driver within seconds." },
          { title: "Your Driver Arrives", desc: "Your driver brings a helmet for you. Enjoy a quick ride through the traffic." },
        ],
        highlight: "The commuter's choice for MRT/KRL stations and fast trips at rush hour.",
        cta: "See SEVA Ride Details",
      },
      car: {
        tag: "Comfortable Car Rides",
        badge: "Extra Comfort",
        specs: ["Up to 4 Passengers", "2 Suitcases + Backpack"],
        steps: [
          { title: "Set a Lobby Pickup", desc: "Choose SEVA Car for family trips, business meetings, or airport runs." },
          { title: "Check the Fixed Fare", desc: "The fare is shown upfront. Official tolls and parking are paid at cost." },
          { title: "Check the Car & Driver", desc: "Check the driver's photo, car type, and plate number in the app before you get in." },
          { title: "Relax & Get an E-Receipt", desc: "A clean cabin, an efficient route, and a digital receipt saved in your trip history." },
        ],
        highlight: "Perfect for airport transfers, office trips, and family shopping.",
        cta: "See SEVA Car Details",
      },
      send: {
        tag: "Express Door-to-Door Courier",
        badge: "Direct, No Transit",
        specs: ["Up to 20 kg", "Max. 40×40×40 cm"],
        steps: [
          { title: "Enter Sender & Recipient", desc: "Choose SEVA Send and fill in the full address, the recipient's phone number, and any item notes." },
          { title: "Flat, Direct-Route Fare", desc: "The delivery fee is based on the direct distance, with no sorting or warehouse fees." },
          { title: "Fast Parcel Pickup", desc: "The courier collects the parcel from you and heads straight to the destination." },
          { title: "Live Tracking & Photo Proof", desc: "Follow the courier on the map and get a photo proof of delivery on arrival." },
        ],
        highlight: "A fast way to send urgent documents, food orders, and online-shop products.",
        cta: "See SEVA Send Details",
      },
    } satisfies Record<FlowId, Flow>,
    fareEyebrow: "TRANSPARENT, FIXED FARES",
    fareTitle: "How Fares Are Calculated in the SEVA App",
    fareIntro:
      "We believe in full transparency. There is no surge pricing in rush hour or heavy rain. Every fare is calculated with the same fixed formula.",
    formulaTitle: "Our Standard Fare Formula",
    compA: { label: "Part A", title: "Base Fare", desc: "The starting cost of sending a vehicle to your pickup point." },
    compB: { label: "Part B (Route Distance)", title: "Distance (km) × Rate per km", desc: "Calculated automatically from the fastest GPS route." },
    result: { label: "Shown in the App", title: "A Fixed, Locked Total", desc: "The final amount shown before you book. It does not go up at the end." },
    guarantees: [
      { strong: "No Rain Surge:", text: "No 2x price jumps in bad weather." },
      { strong: "Tolls & Parking at Cost:", text: "Toll and parking tickets are paid separately at their actual cost." },
      { strong: "No Hidden Fees:", text: "No mysterious admin fees added on." },
    ],
    tableTitle: "Base Fares & Trip Examples",
    tableIntro: "SEVA's official fares across Greater Jakarta.",
    tableGuide: "Read the Full Fare Guide",
    tableCaption: "SEVA base fares",
    cols: { service: "Service", base: "Base Fare", perKm: "Per KM", sim5: "5 KM Example", sim10: "10 KM Example" },
    tableNote: "* Examples exclude official tolls/parking if your route uses them.",
    tableNote2: "The final fare is always shown before you confirm.",
    tripEyebrow: "DURING YOUR TRIP",
    tripTitle: "What You Can Do in the SEVA App",
    tripIntro:
      "You stay in control. From the moment a driver is assigned until you arrive, every safety and tracking tool is active.",
    mock: {
      live: "Live Trip Tracked by GPS",
      eta: "ETA 6 Minutes (2.1 km away)",
      vehicle: "Silver Toyota Avanza • Plate:",
      chat: "In-App Chat",
      call: "Masked Call",
      share: "Share Live Route",
      sos: "SOS Button",
    },
    features: [
      { title: "Driver & Vehicle Check", desc: "Check the driver's name, star rating, and plate number before you get in.", tag: "Verified Identity" },
      { title: "Real-Time GPS Tracking", desc: "Watch the car or motorbike on a live map from pickup to drop-off.", tag: "High Accuracy" },
      { title: "Number Masking", desc: "Contact your driver via in-app chat or call without revealing your personal number.", tag: "Privacy Protected" },
      { title: "Share Your Trip", desc: "Send a live trip link to family or friends on WhatsApp in one tap.", tag: "Follow Together" },
      { title: "SOS Emergency Button", desc: "One tap calls the 112 emergency line or your emergency contact when something is urgent.", tag: "Emergency" },
      { title: "Vehicle & Driver Standards", desc: "Vehicles pass regular roadworthiness checks and driver partners are trained in courteous service.", tag: "Maximum Comfort" },
    ],
    safetyTitle: "Want to know more about SEVA's safety standards?",
    safetyBody: "Learn about driver verification, the SOS button, and trip sharing.",
    safetyCta: "Visit the Safety Center",
  },
} as const;

const FLOW_IDS: FlowId[] = ["ride", "car", "send"];

// Dipakai app/(id)/how-it-works dan app/(en)/en/how-it-works.
export default function HowItWorksPage({ locale }: { locale: Locale }) {
  const t = HOW_COPY[locale];
  const lp = (href: string) => localePath(locale, href);
  const rp = (n: number) => `Rp ${n.toLocaleString(t.numberLocale)}`;

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

        {/* 3 langkah utama overview */}
        <HowItWorks locale={locale} />

        {/* Alur per layanan */}
        <section id="service-flows" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.flowsEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{t.flowsTitle}</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{t.flowsIntro}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {FLOW_IDS.map((id) => {
                const style = FLOW_STYLE[id];
                const service = t.flows[id];
                const Icon = style.icon;
                return (
                  <div
                    key={id}
                    className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl ${style.borderAccent} transition-all duration-300 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${style.badgeBg}`}>
                          {service.badge}
                        </span>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${style.iconBg}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{FARES[id].name}</h3>
                      <p className="text-xs font-medium text-slate-500 mt-0.5 mb-4">{service.tag}</p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.specs.map((label, i) => {
                          const SpecIcon = style.specIcons[i];
                          return (
                            <span
                              key={label}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 text-slate-700 text-[11px] font-medium"
                            >
                              <SpecIcon className="w-3.5 h-3.5 text-slate-500" />
                              <span>{label}</span>
                            </span>
                          );
                        })}
                      </div>

                      <div className="space-y-4 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-100 pl-1 mb-6">
                        {service.steps.map((step, i) => (
                          <div key={step.title} className="relative flex items-start gap-3.5">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-800 shadow-2xs z-10">
                              0{i + 1}
                            </span>
                            <div className="pt-0.5">
                              <h4 className="text-xs sm:text-sm font-bold text-slate-900">{step.title}</h4>
                              <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-slate-100 space-y-3">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{service.highlight}</span>
                      </div>

                      <Link
                        href={lp(`/services/${id}`)}
                        className="w-full h-11 px-4 rounded-xl bg-slate-100 hover:bg-[#225FD2] text-slate-800 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all group-hover:bg-[#225FD2] group-hover:text-white shadow-xs"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cara hitung tarif */}
        <section id="fare-calculation" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>{t.fareEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{t.fareTitle}</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{t.fareIntro}</p>
            </div>

            <div className="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 p-6 sm:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-[#225FD2] uppercase tracking-wider">
                <BadgeCheck className="w-4 h-4" />
                <span>{t.formulaTitle}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">{t.compA.label}</span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-1">{t.compA.title}</div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{t.compA.desc}</p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="text-[11px] font-semibold text-[#225FD2] uppercase tracking-wider block">{t.compB.label}</span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-1">{t.compB.title}</div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{t.compB.desc}</p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#225FD2] to-[#1a4cb0] text-white shadow-md shadow-blue-500/20">
                  <span className="text-[11px] font-semibold text-blue-100 uppercase tracking-wider block">{t.result.label}</span>
                  <div className="text-base sm:text-lg font-bold mt-1">{t.result.title}</div>
                  <p className="text-xs text-blue-100 mt-1 leading-relaxed">{t.result.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-blue-200/60">
                {t.guarantees.map((g) => (
                  <div key={g.strong} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>{g.strong}</strong> {g.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{t.tableTitle}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{t.tableIntro}</p>
                </div>
                <Link href={lp("/blog/tarif-ojek-online-jakarta")} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#225FD2] hover:underline">
                  <span>{t.tableGuide}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">{t.tableCaption}</caption>
                  <thead className="bg-slate-50/80 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200/80">
                    <tr>
                      <th scope="col" className="px-5 py-3.5">{t.cols.service}</th>
                      <th scope="col" className="px-5 py-3.5 text-right">{t.cols.base}</th>
                      <th scope="col" className="px-5 py-3.5 text-right">{t.cols.perKm}</th>
                      <th scope="col" className="px-5 py-3.5 text-right">{t.cols.sim5}</th>
                      <th scope="col" className="px-5 py-3.5 text-right">{t.cols.sim10}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {Object.values(FARES).map((fare) => (
                      <tr key={fare.name} className="hover:bg-blue-50/30 transition-colors">
                        <th scope="row" className="px-5 py-4 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#225FD2]" />
                          <span>{fare.name}</span>
                        </th>
                        <td className="px-5 py-4 text-right tabular-nums text-slate-700 font-medium">{rp(fare.base)}</td>
                        <td className="px-5 py-4 text-right tabular-nums text-slate-700 font-medium">{rp(fare.perKm)} / km</td>
                        <td className="px-5 py-4 text-right tabular-nums text-slate-800 font-semibold">{rp(fare.base + fare.perKm * 5)}</td>
                        <td className="px-5 py-4 text-right font-bold tabular-nums text-[#225FD2] bg-blue-50/20">{rp(fare.base + fare.perKm * 10)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
                <span>{t.tableNote}</span>
                <span className="text-slate-600 font-medium">{t.tableNote2}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Selama perjalanan */}
        <section id="during-trip" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.tripEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{t.tripTitle}</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{t.tripIntro}</p>
            </div>

            {/* In-App Live Trip Simulation Bar (ilustrasi tampilan aplikasi) */}
            <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-r from-[#194cb0] via-[#225FD2] to-[#1a51bd] text-white p-6 sm:p-7 mb-10 shadow-xl shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">{t.mock.live}</span>
                    <span className="text-blue-200">•</span>
                    <span className="text-xs font-medium text-blue-100">{t.mock.eta}</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>Budi Santoso</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-amber-400/25 text-amber-200 font-semibold border border-amber-300/30">★ 4.96</span>
                    </h3>
                    <p className="text-xs text-blue-100 mt-0.5">
                      {t.mock.vehicle} <span className="font-semibold text-white">B 1842 KFD</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-xs transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-blue-200" />
                    <span>{t.mock.chat}</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-xs transition-colors">
                    <Phone className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{t.mock.call}</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-xs transition-colors">
                    <Share2 className="w-3.5 h-3.5 text-sky-200" />
                    <span>{t.mock.share}</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-rose-900/30 border border-rose-400/30 transition-colors">
                    <ShieldAlert className="w-3.5 h-3.5 text-white" />
                    <span>{t.mock.sos}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.features.map((feature, i) => {
                const { icon: FeatureIcon, accent } = FEATURE_STYLE[i];
                return (
                  <div
                    key={feature.title}
                    className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${accent}`}>
                          <FeatureIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100">{feature.tag}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#225FD2] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.safetyTitle}</h4>
                  <p className="text-xs text-slate-600">{t.safetyBody}</p>
                </div>
              </div>
              <Link
                href={lp("/safety")}
                className="h-10 px-5 rounded-xl bg-[#225FD2] hover:bg-[#1a4cb0] text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-500/25 shrink-0"
              >
                <span>{t.safetyCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

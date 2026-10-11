import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  AlertTriangle,
  Bike,
  Camera,
  Car,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  Luggage,
  MapPin,
  Package,
  ShieldCheck,
  Sparkles,
  Video,
  Wallet,
  Wind,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import StoreBadges from "@/components/ui/StoreBadges";
import OtherServices from "@/components/sections/OtherServices";
import { FARES, estimateFare } from "@/lib/articles";
import { localePath, type Locale } from "@/lib/i18n";

// Halaman detail SEVA Ride, Car & Send (kerangka sama, isi berbeda; Send memakai panduan barang, bukan langkah pesan).
// Dipakai app/(id)/services/{ride,car,send} dan app/(en)/en/services/{ride,car,send}.

type Tone = "blue" | "emerald" | "amber" | "purple";
const TONE: Record<Tone, string> = {
  blue: "bg-blue-100 text-[#225FD2]",
  emerald: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  purple: "bg-purple-100 text-purple-700",
};

type ServiceKey = "ride" | "car" | "send";

type DetailCopy = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  title: string;
  subtitle: string;
  metrics: { label: string; value: string; hint: string }[];
  eyebrow: string;
  heading: string;
  body: string;
  highlights: { icon: LucideIcon; tone: Tone; title: string; desc: string }[];
  imageAlt: string;
  imageBadge: string;
  specsTitle: string;
  specs: { label: string; value: string }[];
  pricingEyebrow: string;
  pricingTitle: string;
  pricingIntro: string;
  simulations: { km: number; label: string; desc: string; duration: string; featured?: string }[];
  /** Label durasi pada kartu simulasi; default SharedCopy.estTime. */
  estLabel?: string;
  steps?: { title: string; intro: string; items: { title: string; desc: string }[] };
  guidelines?: { title: string; intro: string; allowedTitle: string; allowed: string[]; prohibitedTitle: string; prohibited: string[] };
};

type SharedCopy = {
  numberLocale: string;
  servicesCrumb: string;
  compareAll: string;
  from: string;
  estTime: string;
};

const SHARED: Record<Locale, SharedCopy> = {
  id: {
    numberLocale: "id-ID",
    servicesCrumb: "Layanan",
    compareAll: "Bandingkan Semua Layanan",
    from: "Mulai",
    estTime: "Estimasi waktu:",
  },
  en: {
    numberLocale: "en-US",
    servicesCrumb: "Services",
    compareAll: "Compare All Services",
    from: "From",
    estTime: "Estimated time:",
  },
};

const rp = (n: number, numberLocale: string) => `Rp ${n.toLocaleString(numberLocale)}`;

function buildCopy(key: ServiceKey, locale: Locale): DetailCopy {
  const nl = SHARED[locale].numberLocale;
  const base = rp(FARES[key].base, nl);
  const perKm = `${rp(FARES[key].perKm, nl)} / km`;

  if (key === "ride") {
    return locale === "id"
      ? {
          metaTitle: "SEVA Ride — Layanan Taksi Motor Online Hemat & Cepat",
          metaDescription: `Solusi mobilitas lincah roda dua on-demand untuk tembus kemacetan kota. Driver terverifikasi, helm untuk penumpang dari driver, dan tarif mulai ${base}.`,
          badge: "LAYANAN MOBILITAS // SEVA RIDE",
          title: "SEVA Ride: Tembus Macet Lebih Lincah & Hemat",
          subtitle:
            "Solusi mobilitas roda dua on-demand yang andal untuk mengejar jadwal jam sibuk perkotaan. Driver terverifikasi dan tarif pasti transparan di muka.",
          metrics: [
            { label: "Tarif Buka Pintu", value: base, hint: "Tarif dasar awal" },
            { label: "Tarif per Km", value: perKm, hint: "Pasti tanpa lonjakan" },
            { label: "Estimasi Jemput", value: "1–3 Menit", hint: "Driver terdekat langsung respon" },
          ],
          eyebrow: "MOBILITAS CEPAT RODA DUA",
          heading: "Pilihan Utama Komuter Perkotaan di Jam Sibuk",
          body: "SEVA Ride dirancang khusus untuk memotong waktu tempuh di tengah padatnya lalu lintas kota. Pengemudi terverifikasi kami menguasai rute alternatif dengan kepatuhan penuh pada keselamatan lalu lintas.",
          highlights: [
            { icon: Clock, tone: "blue", title: "Penjemputan Super Cepat", desc: "Sistem langsung menugaskan driver terdekat dari titik jemput Anda." },
            { icon: ShieldCheck, tone: "emerald", title: "Driver Terverifikasi", desc: "Setiap driver lolos pemeriksaan KTP, SIM, SKCK, dan STNK sebelum bisa menerima pesanan." },
            { icon: Wallet, tone: "amber", title: "Tarif Argo Pasti", desc: "Nominal harga transparan di muka tanpa kenaikan mendadak saat jam pulang kantor." },
            { icon: Compass, tone: "purple", title: "Navigasi Rute Pintas", desc: "Driver berpengalaman memanfaatkan jalur alternatif yang terverifikasi di peta GPS." },
          ],
          imageAlt: "SEVA Ride - Sepeda Motor On-Demand",
          imageBadge: "Hemat",
          specsTitle: "Spesifikasi & Standar Armada",
          specs: [
            { label: "Tipe Kendaraan", value: "Sepeda Motor (Matic / Bebek Terawat)" },
            { label: "Kapasitas Penumpang", value: "1 Orang Dewasa" },
            { label: "Bawaan Maksimal", value: "1 Ransel / Tas Laptop (maks. 10 kg)" },
            { label: "Perlengkapan Keamanan", value: "Helm Penumpang Disediakan Driver" },
            { label: "Perlengkapan Cuaca", value: "Jas Hujan Cadangan Tersedia" },
            { label: "Waktu Tunggu Rata-rata", value: "1–3 Menit (Driver Terdekat)" },
          ],
          pricingEyebrow: "SKEMA TARIF TRANSPARAN",
          pricingTitle: "Simulasi Perjalanan SEVA Ride",
          pricingIntro: "Tarif dihitung berdasarkan jarak tempuh rute yang ditampilkan di aplikasi. Tanpa biaya parkir liar atau tarif siluman.",
          simulations: [
            { km: 3, label: "Jarak Dekat (3 km)", desc: "Cocok untuk antar stasiun MRT/KRL ke gedung kantor atau antar perumahan.", duration: "~7-10 Menit" },
            { km: 8, label: "Jarak Menengah (8 km)", desc: "Pilihan komuter harian antar wilayah kota yang padat saat jam sibuk.", duration: "~18-25 Menit", featured: "Rute Harian" },
            { km: 15, label: "Jarak Jauh (15 km)", desc: "Perjalanan lintas batas kota penyangga (Depok, Bekasi, Tangerang ke Jakarta).", duration: "~35-45 Menit" },
          ],
          steps: {
            title: "Cara Pesan SEVA Ride dalam 4 Langkah",
            intro: "Pesan motor kapan saja dengan beberapa ketukan langsung dari aplikasi smartphone Anda.",
            items: [
              { title: "Pilih Menu SEVA Ride", desc: "Buka aplikasi SEVA lalu ketuk ikon SEVA Ride di beranda utama." },
              { title: "Tentukan Lokasi", desc: "Masukkan titik jemput dan alamat tujuan Anda secara presisi." },
              { title: "Konfirmasi Tarif Argo", desc: "Cek tarif pasti dan pilih metode bayar (Tunai, QRIS, atau Dompet Digital)." },
              { title: "Driver Tiba & Jalan", desc: "Driver menjemput sambil membawa helm untuk Anda. Perjalanan siap dimulai!" },
            ],
          },
        }
      : {
          metaTitle: "SEVA Ride — Affordable, Fast Motorbike Taxi",
          metaDescription: `On-demand motorbike rides to beat city traffic, with verified drivers who bring a passenger helmet, and fares from ${base}.`,
          badge: "MOBILITY SERVICE // SEVA RIDE",
          title: "SEVA Ride: Beat the Traffic, Faster and Cheaper",
          subtitle:
            "Reliable on-demand motorbike rides for rush-hour schedules. Verified drivers and a fixed fare shown upfront.",
          metrics: [
            { label: "Base Fare", value: base, hint: "Starting fare" },
            { label: "Per Km", value: perKm, hint: "Fixed, no surge" },
            { label: "Pickup Time", value: "1–3 Minutes", hint: "Nearest driver responds" },
          ],
          eyebrow: "FAST TWO-WHEEL RIDES",
          heading: "The Commuter's Choice for Rush Hour",
          body: "SEVA Ride is built to cut travel time through dense city traffic. Our verified drivers know the alternative routes and follow traffic safety rules.",
          highlights: [
            { icon: Clock, tone: "blue", title: "Quick Pickup", desc: "The nearest driver to your pickup point is assigned right away." },
            { icon: ShieldCheck, tone: "emerald", title: "Verified Drivers", desc: "Every driver passes ID, licence, police clearance, and vehicle registration checks before taking orders." },
            { icon: Wallet, tone: "amber", title: "Fixed Fare", desc: "A clear price upfront that won't jump during the evening rush." },
            { icon: Compass, tone: "purple", title: "Smart Shortcuts", desc: "Experienced drivers use verified alternative routes on GPS." },
          ],
          imageAlt: "SEVA Ride - on-demand motorbike",
          imageBadge: "Budget",
          specsTitle: "Vehicle Specs & Standards",
          specs: [
            { label: "Vehicle Type", value: "Motorbike (well-kept scooter or underbone)" },
            { label: "Passengers", value: "1 Adult" },
            { label: "Max Luggage", value: "1 Backpack / Laptop Bag (max. 10 kg)" },
            { label: "Safety Gear", value: "Passenger Helmet Provided by Driver" },
            { label: "Weather Gear", value: "Spare Raincoat Available" },
            { label: "Average Wait", value: "1–3 Minutes (Nearest Driver)" },
          ],
          pricingEyebrow: "TRANSPARENT FARES",
          pricingTitle: "SEVA Ride Fare Examples",
          pricingIntro: "Fares are based on the route distance shown in the app. No hidden fees or unofficial parking charges.",
          simulations: [
            { km: 3, label: "Short Trip (3 km)", desc: "Ideal from an MRT/KRL station to the office, or between neighbourhoods.", duration: "~7-10 Minutes" },
            { km: 8, label: "Medium Trip (8 km)", desc: "A typical daily commute across busy city districts at rush hour.", duration: "~18-25 Minutes", featured: "Daily Route" },
            { km: 15, label: "Long Trip (15 km)", desc: "Cross-city trips from Depok, Bekasi, or Tangerang into Jakarta.", duration: "~35-45 Minutes" },
          ],
          steps: {
            title: "Book SEVA Ride in 4 Steps",
            intro: "Book a motorbike any time with a few taps in the app.",
            items: [
              { title: "Choose SEVA Ride", desc: "Open the SEVA app and tap the SEVA Ride icon on the home screen." },
              { title: "Set Your Locations", desc: "Enter your exact pickup point and destination." },
              { title: "Confirm the Fare", desc: "Check the fixed fare and choose how to pay (cash, QRIS, or e-wallet)." },
              { title: "Your Driver Arrives", desc: "Your driver arrives with a helmet for you. You're ready to go!" },
            ],
          },
        };
  }

  if (key === "car") return locale === "id"
    ? {
        metaTitle: "SEVA Car — Layanan Taksi & Mobil Harian",
        metaDescription:
          "Armada taksi dan mobil harian terstandar. Kapasitas 4 penumpang, kabin bersih, tarif pasti transparan tanpa lonjakan sepihak.",
        badge: "LAYANAN MOBILITAS // SEVA CAR",
        title: "SEVA Car: Taksi & Mobil Harian Nyaman Terstandar",
        subtitle:
          "Kenyamanan perjalanan komuter keluarga, bisnis, dan antar-jemput bandara dengan kabin bersih, transmisi halus, dan kepastian tarif tanpa lonjakan sepihak.",
        metrics: [
          { label: "Tarif Buka Pintu", value: base, hint: "Tarif argo dasar" },
          { label: "Tarif per Km", value: perKm, hint: "Pasti transparan di muka" },
          { label: "Kapasitas Kabin", value: "4 Penumpang", hint: "Bagasi luas & kabin bersih" },
        ],
        eyebrow: "ARMADA MOBIL TAKSI TERSTANDAR",
        heading: "Perjalanan Nyaman Tanpa Khawatir Cuaca & Panas",
        body: "SEVA Car menghadirkan standar baru mobilitas roda empat perkotaan. Menggunakan armada MPV generasi terbaru dengan kabin wangi dan bersih, serta pengemudi profesional yang ramah dan beretika tinggi.",
        highlights: [
          { icon: Wind, tone: "blue", title: "Kabin Bersih & Bebas Asap Rokok", desc: "Kabin non-smoking yang dijaga bersih demi kenyamanan seluruh keluarga." },
          { icon: Luggage, tone: "emerald", title: "Bagasi Luas & Fleksibel", desc: "Kapasitas muat 2 koper medium dan tas belanjaan tanpa mengorbankan ruang kaki penumpang." },
          { icon: Video, tone: "purple", title: "Keamanan GPS & SOS", desc: "Perjalanan dapat dipantau lewat live tracking dan dilengkapi tombol darurat SOS ke 112 atau kontak darurat." },
          { icon: Wallet, tone: "amber", title: "Argo Pasti Tanpa Lonjakan", desc: "Bebas dari manipulasi argo dan lonjakan harga saat hujan maupun jam sibuk." },
        ],
        imageAlt: "SEVA Car - Layanan Mobil Taksi Harian",
        imageBadge: "Nyaman",
        specsTitle: "Spesifikasi & Fasilitas Kabin",
        specs: [
          { label: "Tipe Armada", value: "MPV Terstandar (Euro 4)" },
          { label: "Kapasitas Penumpang", value: "Hingga 4 Orang Dewasa" },
          { label: "Kapasitas Bagasi", value: "2 Koper Medium + 2 Tas Ransel" },
          { label: "Kenyamanan Kabin", value: "Kabin Bersih & Bebas Asap Rokok" },
          { label: "Fitur Keselamatan", value: "Sabuk Pengaman Lengkap, Tombol SOS, Live Tracking" },
          { label: "Kebijakan Pembatalan", value: "Gratis Pembatalan dalam 5 Menit Pertama" },
        ],
        pricingEyebrow: "SKEMA TARIF SEVA CAR",
        pricingTitle: "Simulasi Perjalanan SEVA Car",
        pricingIntro: "Transparan dan rasional. Tidak ada biaya lonjakan harga tak wajar di jam sibuk atau saat hari hujan.",
        simulations: [
          { km: 5, label: "Perjalanan Dekat (5 km)", desc: "Perjalanan meeting kantor, belanja bulanan supermarket, atau antar anak les.", duration: "~12-18 Menit" },
          { km: 12, label: "Rute Kota (12 km)", desc: "Mobilitas antar sentra bisnis (Sudirman, Kuningan, SCBD, TB Simatupang).", duration: "~25-40 Menit", featured: "Rute Harian" },
          { km: 25, label: "Rute Bandara (25 km)", desc: "Perjalanan ke Bandara Soekarno-Hatta / Halim Perdanakusuma dengan bagasi koper aman.", duration: "~45-60 Menit" },
        ],
        steps: {
          title: "Alur Pemesanan SEVA Car",
          intro: "Pesan mobil taksi dengan beberapa ketukan praktis di ponsel Anda.",
          items: [
            { title: "Pilih Menu SEVA Car", desc: "Pilih opsi mobil pada aplikasi untuk perjalanan keluarga atau bisnis Anda." },
            { title: "Atur Titik Penjemputan", desc: "Masukkan alamat atau pilih lobi gedung/pintu bandara terdekat." },
            { title: "Lihat Detail Mobil & Driver", desc: "Dapatkan nama driver, nomor plat kendaraan, dan foto mobil di aplikasi." },
            { title: "Perjalanan Tenang", desc: "Nikmati kabin bersih dan nyaman, kuitansi digital dikirim otomatis." },
          ],
        },
      }
    : {
        metaTitle: "SEVA Car — Comfortable Online Car Taxi",
        metaDescription:
          "Standardised taxis and daily cars. Seats 4 passengers, clean cabin, and a fixed upfront fare with no surge pricing.",
        badge: "MOBILITY SERVICE // SEVA CAR",
        title: "SEVA Car: Comfortable Taxi & Daily Car Rides",
        subtitle:
          "Comfortable rides for families, business trips, and airport transfers, with a clean cabin and a fixed fare with no surge pricing.",
        metrics: [
          { label: "Base Fare", value: base, hint: "Starting fare" },
          { label: "Per Km", value: perKm, hint: "Shown upfront" },
          { label: "Cabin Capacity", value: "4 Passengers", hint: "Roomy boot" },
        ],
        eyebrow: "STANDARDISED CAR TAXI",
        heading: "Comfortable Rides, Whatever the Weather",
        body: "SEVA Car sets a new standard for city car rides: recent MPVs with a fresh-smelling cabin, strong air conditioning, and friendly professional drivers.",
        highlights: [
          { icon: Wind, tone: "blue", title: "Clean, Smoke-Free Cabin", desc: "A non-smoking cabin kept clean for the whole family." },
          { icon: Luggage, tone: "emerald", title: "Roomy, Flexible Boot", desc: "Fits 2 medium suitcases and shopping bags without losing legroom." },
          { icon: Video, tone: "purple", title: "GPS Tracking & SOS", desc: "Trips can be followed with live tracking, plus an SOS button to call 112 or your emergency contact." },
          { icon: Wallet, tone: "amber", title: "Fixed Fare, No Surge", desc: "No meter tricks and no price jumps in rain or rush hour." },
        ],
        imageAlt: "SEVA Car - daily car taxi",
        imageBadge: "Comfort",
        specsTitle: "Specs & Cabin Features",
        specs: [
          { label: "Vehicle Type", value: "Standardised MPV (Euro 4)" },
          { label: "Passengers", value: "Up to 4 Adults" },
          { label: "Luggage", value: "2 Medium Suitcases + 2 Backpacks" },
          { label: "Cabin Comfort", value: "Clean, Smoke-Free Cabin" },
          { label: "Safety Features", value: "Full Seat Belts, SOS Button, Live Tracking" },
          { label: "Cancellation Policy", value: "Free Cancellation in the First 5 Minutes" },
        ],
        pricingEyebrow: "SEVA CAR FARES",
        pricingTitle: "SEVA Car Fare Examples",
        pricingIntro: "Transparent and reasonable. No unfair price surges in rush hour or rain.",
        simulations: [
          { km: 5, label: "Short Trip (5 km)", desc: "Office meetings, the monthly grocery run, or school pickups.", duration: "~12-18 Minutes" },
          { km: 12, label: "City Route (12 km)", desc: "Between business districts (Sudirman, Kuningan, SCBD, TB Simatupang).", duration: "~25-40 Minutes", featured: "Daily Route" },
          { km: 25, label: "Airport Route (25 km)", desc: "To Soekarno-Hatta or Halim Perdanakusuma airport with your suitcases.", duration: "~45-60 Minutes" },
        ],
        steps: {
          title: "How to Book SEVA Car",
          intro: "Book a car with a few taps on your phone.",
          items: [
            { title: "Choose SEVA Car", desc: "Pick the car option in the app for family or business trips." },
            { title: "Set Your Pickup", desc: "Enter an address or choose the nearest building lobby or airport door." },
            { title: "See Car & Driver Details", desc: "Get the driver's name, plate number, and car photo in the app." },
            { title: "Relax on the Way", desc: "Enjoy a clean cabin, with a digital receipt sent automatically." },
          ],
        },
      };

  // SEVA Send
  return locale === "id"
    ? {
        metaTitle: "SEVA Send — Kurir & Kirim Paket Instan",
        metaDescription:
          "Kirim dokumen dan paket instan di Jabodetabek, tiba dalam hitungan jam. Tanpa transit gudang, live tracking GPS, dan foto bukti serah terima.",
        badge: "LOGISTIK ON-DEMAND // SEVA SEND",
        title: "SEVA Send: Kirim Dokumen & Paket Tiba dalam Hitungan Jam",
        subtitle:
          "Layanan kurir instan on-demand untuk UMKM, kantor, dan kebutuhan personal. Kurir langsung berangkat, pelacakan live GPS transparan, dan foto bukti penerima aman.",
        metrics: [
          { label: "Tarif Buka Pintu", value: base, hint: "Tarif awal penjemputan" },
          { label: "Tarif per Km", value: perKm, hint: "Hemat & transparan" },
          { label: "Beban Maksimal", value: "20 Kg", hint: "Dimensi maks 40x40x40 cm" },
        ],
        eyebrow: "PENGIRIMAN INSTAN POINT-TO-POINT",
        heading: "Kirim Dokumen & Paket Tanpa Tertunda",
        body: "Solusi ideal bagi pemilik toko online, pengiriman berkas kantor mendesak, atau pengiriman barang pribadi. Kurir terlatih kami mengantarkan paket Anda dengan hati-hati, menjaga keamanan dan keutuhan paket hingga sampai di tangan penerima.",
        highlights: [
          { icon: Clock, tone: "blue", title: "Tanpa Transit Gudang", desc: "Paket tidak diinapkan atau ditumpuk di gudang sortir. Langsung diantar ke alamat penerima saat itu juga." },
          { icon: Camera, tone: "emerald", title: "Foto Tanda Terima", desc: "Dokumentasi foto saat kurir menyerahkan barang langsung muncul di riwayat aplikasi Anda." },
          { icon: MapPin, tone: "purple", title: "Live GPS Tracking", desc: "Pantau posisi kurir secara real-time di peta dan bagikan link tracking ke penerima dengan mudah." },
          { icon: FileCheck, tone: "amber", title: "Multi-Drop Fleksibel", desc: "Mendukung pengiriman banyak titik alamat dalam satu pesanan untuk efisiensi operasional bisnis." },
        ],
        imageAlt: "SEVA Send - Kurir Pengiriman Paket Instan",
        imageBadge: "Tiba Hari Ini",
        specsTitle: "Spesifikasi Batas Pengiriman",
        specs: [
          { label: "Beban Maksimal", value: "Hingga 20 kg per Pengiriman" },
          { label: "Dimensi Maksimal Paket", value: "40 x 40 x 40 cm (Sesuai Kompartemen Motor)" },
          { label: "Metode Pengantaran", value: "Langsung Point-to-Point (Tanpa Transit Gudang)" },
          { label: "Pelacakan Pengiriman", value: "Live GPS Tracking di Peta Real-Time" },
          { label: "Bukti Penerimaan", value: "Foto Serah Terima & Tanda Tangan Digital" },
          { label: "Kecepatan Pengantaran", value: "Langsung Berangkat Begitu Kurir Mengambil Paket" },
        ],
        pricingEyebrow: "SKEMA TARIF SEVA SEND",
        pricingTitle: "Simulasi Ongkir Kurir Instan SEVA Send",
        pricingIntro: "Tarif ongkos kirim pasti transparan dihitung per kilometer rute aktual tanpa biaya tak terduga.",
        estLabel: "Estimasi sampai:",
        simulations: [
          { km: 4, label: "Radius Dekat (4 km)", desc: "Pengiriman dokumen kantor mendesak, kunci tertinggal, atau pesanan kuliner rumahan.", duration: "~20-30 Menit" },
          { km: 10, label: "Radius Kota (10 km)", desc: "Pesanan online shop instan antar kecamatan, pakaian, alat elektronik, dan hampers.", duration: "~45-60 Menit", featured: "Rute Harian" },
          { km: 18, label: "Lintas Kota (18 km)", desc: "Pengiriman antar perbatasan kota yang membutuhkan kepastian sampai hari yang sama.", duration: "~1.5 - 2 Jam" },
        ],
        guidelines: {
          title: "Panduan Pengemasan & Batas Barang",
          intro: "Demi keamanan berkendara mitra kurir dan keselamatan paket Anda, perhatikan ketentuan berikut:",
          allowedTitle: "Barang yang Dianjurkan Dikirim",
          allowed: [
            "Dokumen legal, surat kontrak kantor, paspor, dan berkas penting dalam amplop tertutup.",
            "Pakaian, kain, tas, sepatu, dan produk fashion dengan kemasan plastik/kardus rapi.",
            "Makanan kering, kue, hampers, atau bungkusan kuliner yang tertutup rapat dan higienis.",
            "Barang elektronik kecil (headphone, charger, suku cadang) dengan bubble wrap tebal.",
          ],
          prohibitedTitle: "Barang Dilarang Demi Keselamatan",
          prohibited: [
            "Zat berbahaya mudah meledak, gas aerosol bertekanan, bensin, dan bahan kimia beracun.",
            "Senjata tajam, senjata api, narkotika, dan segala bentuk komoditas ilegal yang dilarang undang-undang.",
            "Hewan peliharaan atau makhluk hidup dalam kondisi apa pun.",
            "Barang dengan berat melebihi 20 kg atau dimensi yang membahayakan kestabilan motor.",
          ],
        },
      }
    : {
        metaTitle: "SEVA Send — Same-Day Courier & Parcel Delivery",
        metaDescription:
          "Send documents and parcels across Greater Jakarta within hours. No warehouse stops, live GPS tracking, and photo proof of delivery.",
        badge: "ON-DEMAND DELIVERY // SEVA SEND",
        title: "SEVA Send: Documents & Parcels Delivered Within Hours",
        subtitle:
          "On-demand courier for small businesses, offices, and personal deliveries. The courier leaves right away, with live GPS tracking and photo proof of delivery.",
        metrics: [
          { label: "Base Fare", value: base, hint: "Pickup starting fare" },
          { label: "Per Km", value: perKm, hint: "Clear and affordable" },
          { label: "Max Weight", value: "20 kg", hint: "Max size 40x40x40 cm" },
        ],
        eyebrow: "DIRECT POINT-TO-POINT DELIVERY",
        heading: "Send Documents & Parcels Without Delay",
        body: "Ideal for online sellers, urgent office documents, or personal items. Our trained couriers handle your parcel with care until it reaches the recipient.",
        highlights: [
          { icon: Clock, tone: "blue", title: "No Warehouse Stops", desc: "Parcels are never held or sorted in a warehouse. They go straight to the recipient." },
          { icon: Camera, tone: "emerald", title: "Photo Proof of Delivery", desc: "A photo taken at handover appears in your app history right away." },
          { icon: MapPin, tone: "purple", title: "Live GPS Tracking", desc: "Follow the courier on the map and share a tracking link with the recipient." },
          { icon: FileCheck, tone: "amber", title: "Flexible Multi-Drop", desc: "Deliver to several addresses in one order to keep business deliveries efficient." },
        ],
        imageAlt: "SEVA Send - same-day parcel courier",
        imageBadge: "Same Day",
        specsTitle: "Delivery Limits",
        specs: [
          { label: "Max Weight", value: "Up to 20 kg per Delivery" },
          { label: "Max Parcel Size", value: "40 x 40 x 40 cm (Fits the Motorbike Box)" },
          { label: "Delivery Method", value: "Direct Point-to-Point (No Warehouse)" },
          { label: "Tracking", value: "Live GPS Tracking on the Map" },
          { label: "Proof of Delivery", value: "Handover Photo & Digital Signature" },
          { label: "Delivery Speed", value: "Leaves as Soon as the Courier Picks Up" },
        ],
        pricingEyebrow: "SEVA SEND FARES",
        pricingTitle: "SEVA Send Delivery Fee Examples",
        pricingIntro: "A fixed, transparent delivery fee based on the actual route distance, with no unexpected charges.",
        estLabel: "Estimated delivery:",
        simulations: [
          { km: 4, label: "Nearby (4 km)", desc: "Urgent office documents, forgotten keys, or home-cooked food orders.", duration: "~20-30 Minutes" },
          { km: 10, label: "Across the City (10 km)", desc: "Same-day online shop orders, clothing, electronics, and gift hampers.", duration: "~45-60 Minutes", featured: "Daily Route" },
          { km: 18, label: "Cross-City (18 km)", desc: "Deliveries between neighbouring cities that must arrive the same day.", duration: "~1.5 - 2 Hours" },
        ],
        guidelines: {
          title: "Packing Guide & Item Limits",
          intro: "For the courier's safety and your parcel's, please follow these rules:",
          allowedTitle: "Recommended Items",
          allowed: [
            "Legal documents, contracts, passports, and important papers in a sealed envelope.",
            "Clothing, fabric, bags, shoes, and fashion items neatly packed in plastic or a box.",
            "Dry food, cakes, hampers, or food parcels that are tightly sealed and hygienic.",
            "Small electronics (headphones, chargers, spare parts) wrapped in thick bubble wrap.",
          ],
          prohibitedTitle: "Prohibited for Safety",
          prohibited: [
            "Explosive or hazardous substances, pressurised aerosols, petrol, and toxic chemicals.",
            "Sharp weapons, firearms, narcotics, and any goods prohibited by law.",
            "Pets or any living animals.",
            "Items over 20 kg or of a size that makes the motorbike unstable.",
          ],
        },
      };
}

export function serviceDetailMeta(key: ServiceKey, locale: Locale) {
  const c = buildCopy(key, locale);
  return { title: c.metaTitle, description: c.metaDescription };
}

export default function ServiceDetailPage({ service, locale }: { service: ServiceKey; locale: Locale }) {
  const t = buildCopy(service, locale);
  const s = SHARED[locale];
  const lp = (href: string) => localePath(locale, href);
  const HeaderIcon = service === "ride" ? Bike : service === "car" ? Car : Package;

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: s.servicesCrumb, href: lp("/services") }, { label: FARES[service].name }]}
          metrics={t.metrics}
        />

        {/* Hero Showcase Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Product Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-50 border border-blue-200">
                  <HeaderIcon className="w-3.5 h-3.5" />
                  <span>{t.eyebrow}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.heading}</h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{t.body}</p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {t.highlights.map((h) => {
                    const Icon = h.icon;
                    return (
                      <div key={h.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className={`w-8 h-8 rounded-lg ${TONE[h.tone]} flex items-center justify-center mb-2.5`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-slate-900 text-sm">{h.title}</div>
                        <p className="text-xs text-slate-600 mt-1">{h.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <StoreBadges size="md" locale={locale} />
                  </div>
                  <Link
                    href={lp("/services")}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                  >
                    <span>{s.compareAll}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Card Visual & Specs Table */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-gradient-to-b from-slate-100 to-slate-200 p-3 sm:p-4">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-inner">
                    <Image
                      src={`/assets/services/seva-${service}.webp`}
                      alt={t.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#225FD2] text-white shadow-xs">
                      {t.imageBadge}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-900 backdrop-blur-sm shadow-xs border border-slate-200">
                      {s.from} {rp(FARES[service].base, s.numberLocale)}
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

        {/* Pricing Simulation Section */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.pricingEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.pricingTitle}</h2>
              <p className="mt-2 text-sm text-slate-600">{t.pricingIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.simulations.map((sim) =>
                sim.featured ? (
                  <div
                    key={sim.km}
                    className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-xs flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#225FD2] text-white">{sim.featured}</div>
                    <div>
                      <div className="text-xs font-semibold text-[#225FD2] uppercase">{sim.label}</div>
                      <div className="mt-2 text-3xl font-extrabold text-slate-900 tabular-nums">{rp(estimateFare(service, sim.km), s.numberLocale)}</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{sim.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-slate-500">
                      <span>{t.estLabel ?? s.estTime}</span>
                      <span className="font-bold text-slate-900">{sim.duration}</span>
                    </div>
                  </div>
                ) : (
                  <div key={sim.km} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase">{sim.label}</div>
                      <div className="mt-2 text-3xl font-extrabold text-slate-900 tabular-nums">{rp(estimateFare(service, sim.km), s.numberLocale)}</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{sim.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>{t.estLabel ?? s.estTime}</span>
                      <span className="font-bold text-slate-900">{sim.duration}</span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* How to Order Steps */}
        {t.steps && (
          <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.steps.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{t.steps.intro}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.steps.items.map((item, i) => (
                  <div key={item.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="text-2xl font-black text-[#225FD2] mb-3">0{i + 1}</div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Packing guidelines (SEVA Send) */}
        {t.guidelines && (
          <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.guidelines.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{t.guidelines.intro}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                  <div className="flex items-center gap-2.5 font-bold text-emerald-800 text-sm mb-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>{t.guidelines.allowedTitle}</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {t.guidelines.allowed.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200/80">
                  <div className="flex items-center gap-2.5 font-bold text-rose-800 text-sm mb-4">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    <span>{t.guidelines.prohibitedTitle}</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {t.guidelines.prohibited.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        <OtherServices current={service} locale={locale} />

        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

// Sorotan industri untuk /newsroom: berita media tentang ride-hailing + posisi SEVA terhadap isu tersebut.
// Aturan isi:
// - Hanya artikel yang sudah dibaca dan diverifikasi; tautkan ke sumber asli, judul ditulis persis (tidak diterjemahkan).
// - `summary` ditulis ulang dengan kata-kata sendiri (jangan menyalin isi artikel).
// - `sevaPosition` hanya memuat fakta SEVA yang juga tercantum di halaman lain situs ini; tidak menyebut/menjelekkan aplikator lain.
import type { Locale } from "@/lib/i18n";

type Position = { headline: string; points: string[]; href: string; cta: string };

export interface NewsItem {
  id: string;
  source: string;
  title: string;
  url: string;
  published: string; // ISO date
  topic: "regulation" | "fares" | "safety" | "delivery" | "drivers";
  summary: Record<Locale, string>;
  sevaPosition: Record<Locale, Position>;
}

export const TOPIC_LABELS: Record<Locale, Record<NewsItem["topic"], string>> = {
  id: { regulation: "Regulasi", fares: "Tarif", safety: "Keselamatan", delivery: "Pengiriman", drivers: "Mitra Driver" },
  en: { regulation: "Regulation", fares: "Fares", safety: "Safety", delivery: "Delivery", drivers: "Driver Partners" },
};

export const INDUSTRY_NEWS: NewsItem[] = [
  {
    id: "perpres-27-2026",
    source: "CNN Indonesia",
    title: "Perpres Ojol Terbit, Tegaskan Potongan 8% dan Tarif Diatur Kemenhub",
    url: "https://www.cnnindonesia.com/otomotif/20261009100050-579-1413414/perpres-ojol-terbit-tegaskan-potongan-8-dan-tarif-diatur-kemenhub",
    published: "2026-10-09",
    topic: "regulation",
    summary: {
      id: "Pemerintah menerbitkan Perpres Nomor 27 Tahun 2026 tentang perlindungan ekosistem transportasi berbasis platform digital. Potongan aplikator dibatasi maksimal 8 persen, tarif dasar ditetapkan Kemenhub, dan aturan turunannya ditargetkan terbit paling lambat akhir 2026.",
      en: "The government issued Presidential Regulation No. 27/2026 on protecting the digital transport platform ecosystem. Platform commission is capped at 8 percent, base fares are set by the Ministry of Transportation, and implementing rules are due by the end of 2026.",
    },
    sevaPosition: {
      id: {
        headline: "Potongan SEVA 5%, di bawah batas 8%",
        points: [
          "Potongan platform untuk mitra pengemudi hanya 5% sejak awal, sehingga 95% pendapatan perjalanan menjadi milik driver.",
          "Rumus tarif (tarif buka pintu + per km) dipublikasikan terbuka di situs dan aplikasi.",
        ],
        href: "/partner/driver",
        cta: "Lihat skema mitra driver",
      },
      en: {
        headline: "SEVA's fee is 5%, below the 8% cap",
        points: [
          "Driver partners have paid only a 5% platform fee from day one, keeping 95% of every fare.",
          "Our fare formula (base fare + per km) is published openly on the website and in the app.",
        ],
        href: "/partner/driver",
        cta: "See the driver partner scheme",
      },
    },
  },
  {
    id: "komisi-8-persen-1-juli",
    source: "Kompas.com",
    title: "Komisi Ojol Dipangkas Jadi 8 Persen Mulai 1 Juli, Menhub: Langsung Berlaku!",
    url: "https://money.kompas.com/read/2026/06/28/071700926/komisi-ojol-dipangkas-jadi-8-persen-mulai-1-juli-menhub--langsung-berlaku-",
    published: "2026-06-28",
    topic: "regulation",
    summary: {
      id: "Menteri Perhubungan memastikan batas komisi ojek online turun dari 20 persen menjadi maksimal 8 persen mulai 1 Juli 2026, tanpa masa uji coba, sebagai tindak lanjut arahan Presiden.",
      en: "The Minister of Transportation confirmed that the commission cap for motorbike ride-hailing drops from 20 percent to a maximum of 8 percent from 1 July 2026, with no trial period, following the President's instruction.",
    },
    sevaPosition: {
      id: {
        headline: "Tidak perlu penyesuaian: driver SEVA sudah membawa pulang 95%",
        points: ["Bagi hasil 95% untuk driver dengan pencairan harian.", "Pendaftaran mitra gratis dan sepenuhnya online."],
        href: "/partner/driver",
        cta: "Gabung jadi mitra",
      },
      en: {
        headline: "No change needed: SEVA drivers already keep 95%",
        points: ["Drivers keep 95% of the fare, paid out daily.", "Free, fully online driver sign-up."],
        href: "/partner/driver",
        cta: "Become a driver partner",
      },
    },
  },
  {
    id: "tarif-ojol-tak-naik",
    source: "ANTARA",
    title: "Menhub pastikan tarif ojol tak naik usai potongan komisi jadi 8 persen",
    url: "https://www.antaranews.com/berita/5629693/menhub-pastikan-tarif-ojol-tak-naik-usai-potongan-komisi-jadi-8-persen",
    published: "2026-06-30",
    topic: "fares",
    summary: {
      id: "Menhub menyatakan tarif ojek online tidak naik setelah komisi dipangkas, dengan biaya asuransi kini ditanggung aplikator. Pemerintah hanya mengatur tarif layanan dasar, sehingga harga tiap aplikator tetap bisa berbeda.",
      en: "The Minister said motorbike ride-hailing fares would not rise after the commission cut, with insurance costs now borne by the platforms. The government only regulates basic-tier fares, so prices can still differ between apps.",
    },
    sevaPosition: {
      id: {
        headline: "Tarif pasti di awal, tanpa lonjakan sepihak",
        points: [
          "Total tarif tampil di aplikasi sebelum Anda mengonfirmasi pesanan.",
          "Tidak ada kenaikan sepihak saat jam sibuk atau hujan.",
        ],
        href: "/services",
        cta: "Bandingkan tarif SEVA",
      },
      en: {
        headline: "Fixed upfront fares, no surge pricing",
        points: [
          "The total fare is shown in the app before you confirm your booking.",
          "No sudden price increases in rush hour or rain.",
        ],
        href: "/services",
        cta: "Compare SEVA fares",
      },
    },
  },
  {
    id: "komnas-perempuan-aturan-baru",
    source: "Kompas.com",
    title: "Marak Pelecehan, Komnas Perempuan Dorong Aturan Baru Transportasi Online",
    url: "https://megapolitan.kompas.com/read/2026/04/06/20285071/marak-pelecehan-komnas-perempuan-dorong-aturan-baru-transportasi-online",
    published: "2026-04-06",
    topic: "safety",
    summary: {
      id: "Komnas Perempuan mendorong regulasi khusus transportasi online, termasuk seleksi pengemudi yang lebih ketat, fitur keamanan aplikasi yang diatur, dan kewajiban aplikator menindaklanjuti laporan penumpang.",
      en: "Komnas Perempuan (the National Commission on Violence Against Women) is calling for dedicated rules for online transport, including stricter driver screening, regulated in-app safety features, and an obligation for platforms to act on passenger reports.",
    },
    sevaPosition: {
      id: {
        headline: "Lapisan keselamatan yang sudah berjalan di SEVA",
        points: [
          "Verifikasi dokumen driver: KTP, SIM, SKCK, dan STNK sebelum menerima pesanan.",
          "Tombol SOS ke 112 atau kontak darurat, Bagikan Perjalanan secara live, dan penyamaran nomor HP.",
          "Kanal laporan masalah di Pusat Bantuan dan WhatsApp resmi.",
        ],
        href: "/safety",
        cta: "Standar keselamatan SEVA",
      },
      en: {
        headline: "Safety measures already running at SEVA",
        points: [
          "Driver document checks (national ID, driving licence, police clearance, vehicle registration) before taking orders.",
          "SOS button to call 112 or your emergency contact, live trip sharing, and phone number masking.",
          "A problem-report channel in the Help Center and on our official WhatsApp.",
        ],
        href: "/safety",
        cta: "SEVA safety standards",
      },
    },
  },
{
    id: "menhub-keselamatan-kendaraan-ojol",
    source: "CNN Indonesia",
    title: "Menhub Minta Aplikator Awasi Keselamatan Kendaraan Ojol",
    url: "https://www.cnnindonesia.com/ekonomi/20261010121805-92-1413823/menhub-minta-aplikator-awasi-keselamatan-kendaraan-ojol",
    published: "2026-10-10",
    topic: "safety",
    summary: {
      id: "Merujuk Perpres 27/2026, Menhub meminta aplikator ikut mengawasi standar keselamatan kendaraan mitra, termasuk helm dan perawatan berkala, serta menyediakan pusat pengaduan yang menanggapi keluhan paling lambat tujuh hari.",
      en: "Citing Presidential Regulation 27/2026, the Minister of Transportation asked platforms to help oversee partner vehicle safety, including helmets and regular maintenance, and to run a complaints centre that responds within seven days.",
    },
    sevaPosition: {
      id: {
        headline: "Standar kendaraan dan perlengkapan sudah tertulis",
        points: [
          "Syarat kendaraan mitra: minimal tahun 2017, STNK dan pajak aktif, serta layak jalan.",
          "Driver SEVA Ride membawa helm untuk penumpang.",
          "Keluhan bisa dilaporkan lewat formulir Laporkan Masalah di Pusat Bantuan atau WhatsApp resmi.",
        ],
        href: "/partner/driver",
        cta: "Lihat syarat mitra driver",
      },
      en: {
        headline: "Vehicle and safety-gear standards are already in writing",
        points: [
          "Partner vehicle requirements: 2017 or newer, valid registration and tax, and roadworthy condition.",
          "SEVA Ride drivers bring a helmet for their passenger.",
          "Complaints can be filed through the Report a Problem form in the Help Center or on our official WhatsApp.",
        ],
        href: "/partner/driver",
        cta: "See driver partner requirements",
      },
    },
  },
  {
    id: "perpres-kurir-komdigi",
    source: "detikFinance",
    title: "Perpres Baru Transportasi Online: Tarif Ojol Diatur Kemenhub, Kurir di Komdigi",
    url: "https://finance.detik.com/berita-ekonomi-bisnis/d-8697667/perpres-baru-transportasi-online-tarif-ojol-diatur-kemenhub-kurir-di-komdigi",
    published: "2026-10-08",
    topic: "delivery",
    summary: {
      id: "Perpres 27/2026 membagi kewenangan tarif: tarif penumpang ojol diatur Kemenhub, sedangkan biaya jasa pengantaran barang dan makanan akan ditetapkan Komdigi lewat Peraturan Menteri, termasuk transparansi cara platform membentuk tarif.",
      en: "Presidential Regulation 27/2026 splits fare authority: passenger fares are set by the Ministry of Transportation, while goods and food delivery fees will be set by the Ministry of Communication and Digital Affairs, including transparency on how platforms build their prices.",
    },
    sevaPosition: {
      id: {
        headline: "Rumus ongkir SEVA Send sudah terbuka",
        points: [
          "Ongkir SEVA Send = Rp 10.000 tarif awal + Rp 3.000/km, ditampilkan di aplikasi sebelum memesan.",
          "Paket diantar langsung tanpa transit gudang, dengan foto bukti serah terima.",
        ],
        href: "/services/send",
        cta: "Lihat tarif SEVA Send",
      },
      en: {
        headline: "SEVA Send's delivery fee formula is already public",
        points: [
          "SEVA Send fee = Rp 10,000 base fare + Rp 3,000/km, shown in the app before you book.",
          "Parcels go directly with no warehouse stops, with photo proof of delivery.",
        ],
        href: "/services/send",
        cta: "See SEVA Send fares",
      },
    },
  },
  {
    id: "status-mitra-ojol",
    source: "ANTARA",
    title: "Menteri UMKM sebut pengemudi ojol tetap berstatus mitra",
    url: "https://www.antaranews.com/berita/5776625/menteri-umkm-sebut-pengemudi-ojol-tetap-berstatus-mitra",
    published: "2026-10-08",
    topic: "drivers",
    summary: {
      id: "Pemerintah menegaskan pengemudi ojol tetap berstatus mitra. Kementerian UMKM akan mengawal perjanjian kemitraan, memimpin satgas bersama Kemenhub dan Komdigi, dan menjanjikan kepastian perlindungan sosial bagi pengemudi.",
      en: "The government confirmed that ride-hailing drivers remain partners rather than employees. The Ministry of SMEs will oversee partnership agreements, lead a task force with the transport and digital ministries, and promised social protection for drivers.",
    },
    sevaPosition: {
      id: {
        headline: "Kemitraan yang jelas sejak hari pertama",
        points: [
          "Pendaftaran mitra gratis dan sepenuhnya online.",
          "Mitra bebas menentukan jam kerja sendiri, dengan pencairan pendapatan harian.",
          "Bagi hasil 95% untuk mitra; potongan platform hanya 5%.",
        ],
        href: "/partner/driver",
        cta: "Gabung jadi mitra",
      },
      en: {
        headline: "A clear partnership from day one",
        points: [
          "Free, fully online driver sign-up.",
          "Drivers set their own hours, with daily payouts.",
          "Drivers keep 95%; the platform fee is only 5%.",
        ],
        href: "/partner/driver",
        cta: "Become a driver partner",
      },
    },
  },
  {
    id: "ruu-transportasi-online-prolegnas",
    source: "CNBC Indonesia",
    title: "DPR Kebut Undang-Undang Ojol, Aturan Data Pribadi Mau Direvisi",
    url: "https://www.cnbcindonesia.com/tech/20260522084017-37-736912/dpr-kebut-undang-undang-ojol-aturan-data-pribadi-mau-direvisi",
    published: "2026-05-22",
    topic: "regulation",
    summary: {
      id: "DPR memasukkan RUU Transportasi Online ke Prolegnas Prioritas 2026 untuk memberi dasar hukum bagi pekerja berbasis aplikasi, bersamaan dengan revisi UU Pelindungan Data Pribadi dan RUU Pekerja Ekonomi Gig.",
      en: "Parliament added an Online Transportation Bill to its 2026 priority legislation list to give app-based workers a legal basis, alongside a revision of the Personal Data Protection Law and a Gig Economy Workers Bill.",
    },
    sevaPosition: {
      id: {
        headline: "Data penumpang diproses sesuai UU PDP",
        points: [
          "Nomor telepon disamarkan saat penumpang dan driver berkomunikasi.",
          "Data hanya dibagikan sebatas yang diperlukan untuk menjalankan pesanan, dan SEVA tidak menjual data pribadi.",
        ],
        href: "/privacy",
        cta: "Baca Kebijakan Privasi",
      },
      en: {
        headline: "Passenger data is handled under the PDP Law",
        points: [
          "Phone numbers are masked when passengers and drivers communicate.",
          "Data is only shared as needed to fulfil an order, and SEVA does not sell personal data.",
        ],
        href: "/privacy",
        cta: "Read the Privacy Policy",
      },
    },
  },
  {
    id: "komisi-8-persen-tarif-turun",
    source: "Kompas.com",
    title: "Potongan Aplikasi Turun Jadi 8 Persen, Driver Ojol: Tarif Customer kok Ikut Turun?",
    url: "https://megapolitan.kompas.com/read/2026/07/01/13002291/potongan-aplikasi-turun-jadi-8-persen-driver-ojol-tarif-customer-kok-ikut",
    published: "2026-07-01",
    topic: "fares",
    summary: {
      id: "Di hari pertama komisi 8 persen berlaku, pengemudi di Jakarta melaporkan pendapatan per order hampir tidak berubah karena tarif yang dibayar penumpang ikut turun dan biaya jasa aplikasi dipotong sebelum bagi hasil dihitung.",
      en: "On the first day of the 8 percent commission cap, Jakarta drivers reported almost no change in earnings per order, because passenger fares also fell and an app service fee was deducted before the revenue share was calculated.",
    },
    sevaPosition: {
      id: {
        headline: "Rumus tarif dan bagi hasil yang bisa dicek siapa pun",
        points: [
          "Tarif = tarif buka pintu + biaya per km, dipublikasikan untuk setiap layanan.",
          "Bagian mitra 95% dari tarif perjalanan, dengan contoh perhitungannya di blog SEVA.",
        ],
        href: "/blog/menghitung-pendapatan-driver-bagi-hasil-95-persen",
        cta: "Lihat cara hitung pendapatan driver",
      },
      en: {
        headline: "A fare and revenue-share formula anyone can check",
        points: [
          "Fare = base fare + per-km charge, published for every service.",
          "Drivers get 95% of the trip fare, with a worked example on the SEVA blog.",
        ],
        href: "/blog/menghitung-pendapatan-driver-bagi-hasil-95-persen",
        cta: "See how driver earnings are calculated",
      },
    },
  },
  {
    id: "transaksi-di-luar-aplikasi",
    source: "The Conversation Indonesia",
    title: "Maraknya transaksi taksi ‘online’ di luar aplikasi adalah kemunduran, semua pihak merugi",
    url: "https://theconversation.com/maraknya-transaksi-taksi-online-di-luar-aplikasi-adalah-kemunduran-semua-pihak-merugi-285481",
    published: "2026-06-29",
    topic: "safety",
    summary: {
      id: "Akademisi Politeknik Negeri Bandung menilai praktik membatalkan pesanan lalu membayar langsung ke pengemudi merugikan semua pihak: perjalanan tidak tercatat, fitur keamanan tidak berlaku, barang tertinggal sulit dilacak, dan harga kembali ditawar.",
      en: "A Politeknik Negeri Bandung academic argues that cancelling in-app orders and paying drivers directly hurts everyone: trips go unrecorded, safety features stop working, lost items are hard to trace, and prices go back to haggling.",
    },
    sevaPosition: {
      id: {
        headline: "Alasan untuk tetap memesan di aplikasi",
        points: [
          "Setiap perjalanan tercatat di riwayat, sehingga barang tertinggal bisa dilacak lewat driver terkait.",
          "Tombol SOS, Bagikan Perjalanan, dan penyamaran nomor hanya aktif untuk pesanan di aplikasi.",
          "Tarif sudah pasti di awal, jadi tidak perlu tawar-menawar.",
        ],
        href: "/safety",
        cta: "Standar keselamatan SEVA",
      },
      en: {
        headline: "Why you should keep your booking in the app",
        points: [
          "Every trip is recorded in your history, so lost items can be traced through the right driver.",
          "SOS, Trip Sharing, and number masking only work for in-app bookings.",
          "The fare is fixed upfront, so there's no haggling.",
        ],
        href: "/safety",
        cta: "SEVA safety standards",
      },
    },
  },
];

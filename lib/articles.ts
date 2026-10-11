// Artikel Panduan SEVA (konten SEO jangka panjang).
// Semua angka tarif dihitung dari tarif dasar yang sama dengan halaman layanan (lib di bawah),
// sehingga artikel otomatis ikut berubah bila tarif diperbarui.

export const FARES = {
  ride: { name: "SEVA Ride", base: 8000, perKm: 2500 },
  car: { name: "SEVA Car", base: 9500, perKm: 6200 },
  send: { name: "SEVA Send", base: 10000, perKm: 3000 },
} as const;

export type FareKey = keyof typeof FARES;

export const estimateFare = (key: FareKey, km: number) => FARES[key].base + Math.round(km * FARES[key].perKm);
export const rupiah = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "fareTable"; service: FareKey; distances: { km: number; label: string }[] }
  | { type: "note"; text: string }
  | { type: "cta"; text: string; href: string; label: string };

export interface Article {
  slug: string;
  title: string;
  /** Judul pendek untuk tag <title> (≤ 50 karakter, sebelum "| SEVA Taxi") */
  seoTitle: string;
  description: string;
  category: string;
  published: string; // ISO date
  readMinutes: number;
  keywords: string[];
  blocks: ArticleBlock[];
  related: { href: string; label: string }[];
}

const FARE_NOTE =
  "Angka di atas adalah estimasi dari tarif dasar dan jarak rute. Tarif final selalu ditampilkan di aplikasi SEVA sebelum Anda mengonfirmasi pesanan.";

export const ARTICLES: Article[] = [
  {
    slug: "tarif-ojek-online-jakarta",
    title: "Tarif Ojek Online Jakarta: Cara Hitung & Contoh Harga SEVA Ride",
    seoTitle: "Tarif Ojek Online Jakarta & Cara Hitungnya",
    description:
      "Berapa tarif ojek online di Jakarta? Pelajari cara menghitung tarif SEVA Ride beserta contoh harga untuk jarak 3 hingga 15 km di Jabodetabek.",
    category: "Tarif & Biaya",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["tarif ojek online jakarta", "harga ojol per km", "ojek online murah jakarta"],
    blocks: [
      {
        type: "p",
        text: "Ojek online jadi andalan banyak komuter Jakarta untuk menembus macet di jam sibuk. Sebelum memesan, ada baiknya Anda tahu bagaimana tarif dihitung agar bisa memperkirakan biaya perjalanan harian.",
      },
      { type: "h2", text: "Cara menghitung tarif SEVA Ride" },
      {
        type: "p",
        text: "Tarif SEVA Ride terdiri dari dua komponen: tarif buka pintu Rp 8.000 ditambah Rp 2.500 untuk setiap kilometer sesuai jarak rute yang ditampilkan di aplikasi. Rumus sederhananya: Rp 8.000 + (jarak km × Rp 2.500).",
      },
      { type: "h2", text: "Contoh tarif ojek online di Jakarta" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 3, label: "Stasiun MRT ke kantor terdekat" },
          { km: 5, label: "Antar kawasan dalam satu kota" },
          { km: 8, label: "Komuter harian antar wilayah" },
          { km: 10, label: "Perjalanan lintas kota di Jakarta" },
          { km: 15, label: "Dari kota penyangga ke pusat Jakarta" },
        ],
      },
      { type: "note", text: FARE_NOTE },
      { type: "h2", text: "Apakah tarif naik saat jam sibuk atau hujan?" },
      {
        type: "p",
        text: "Tidak. SEVA menerapkan tarif pasti yang tampil sejak awal pemesanan, tanpa lonjakan sepihak saat jam pulang kantor atau ketika hujan. Nominal yang Anda lihat saat konfirmasi adalah tarif perjalanan Anda.",
      },
      { type: "h2", text: "Tips hemat naik ojek online" },
      {
        type: "ul",
        items: [
          "Geser pin ke titik jemput yang mudah diakses motor, misalnya pintu samping gedung, agar driver tidak memutar jauh.",
          "Bawa barang secukupnya: SEVA Ride memuat 1 penumpang dengan 1 ransel atau tas laptop (maksimal 10 kg).",
          "Untuk barang tanpa penumpang, gunakan SEVA Send agar lebih aman dan sesuai kapasitas.",
          "Bayar dengan SEVA eWallet atau QRIS agar tidak perlu menyiapkan uang pas.",
        ],
      },
      {
        type: "cta",
        text: "Lihat spesifikasi lengkap dan simulasi tarif SEVA Ride.",
        href: "/services/ride",
        label: "Detail SEVA Ride",
      },
    ],
    related: [
      { href: "/blog/ojek-atau-taksi-online", label: "SEVA Ride atau SEVA Car: pilih yang mana?" },
      { href: "/services", label: "Bandingkan tarif semua layanan" },
    ],
  },
  {
    slug: "taksi-online-ke-bandara-soekarno-hatta",
    title: "Taksi Online ke Bandara Soekarno-Hatta: Estimasi Tarif & Tips",
    seoTitle: "Taksi Online ke Bandara Soekarno-Hatta",
    description:
      "Panduan naik taksi online ke Bandara Soekarno-Hatta (CGK): estimasi tarif SEVA Car, kapasitas koper, biaya tol dan parkir, serta tips agar tidak terlambat.",
    category: "Bandara & Stasiun",
    published: "2026-10-11",
    readMinutes: 5,
    keywords: ["taksi online ke bandara soekarno hatta", "tarif taksi ke bandara cgk", "taksi bandara jakarta"],
    blocks: [
      {
        type: "p",
        text: "Perjalanan ke Bandara Soekarno-Hatta (CGK) sering melibatkan koper besar, rombongan keluarga, dan jadwal penerbangan yang tidak boleh terlewat. Taksi online seperti SEVA Car membuat perjalanan lebih nyaman dan biayanya bisa diperkirakan sejak awal.",
      },
      { type: "h2", text: "Estimasi tarif SEVA Car ke Bandara Soekarno-Hatta" },
      {
        type: "p",
        text: "Tarif SEVA Car dihitung dari tarif buka pintu Rp 9.500 ditambah Rp 6.200 per kilometer sesuai jarak rute di aplikasi. Berikut contoh estimasi berdasarkan jarak perjalanan:",
      },
      {
        type: "fareTable",
        service: "car",
        distances: [
          { km: 20, label: "Dari kawasan barat Jakarta / Tangerang" },
          { km: 25, label: "Dari pusat kota (contoh rute bandara)" },
          { km: 30, label: "Dari Jakarta Selatan" },
          { km: 40, label: "Dari kota penyangga timur atau selatan" },
        ],
      },
      { type: "note", text: FARE_NOTE },
      { type: "h2", text: "Biaya tol dan parkir bandara" },
      {
        type: "p",
        text: "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil di lokasi. Siapkan saldo uang elektronik atau tunai untuk membayar biaya tersebut.",
      },
      { type: "h2", text: "Berapa koper yang muat di SEVA Car?" },
      {
        type: "p",
        text: "SEVA Car memuat hingga 4 penumpang dewasa dengan bagasi sekitar 2 koper medium ditambah 2 tas ransel. Jika barang Anda lebih banyak, sebaiknya pesan dua kendaraan.",
      },
      { type: "h2", text: "Tips agar tidak terlambat ke bandara" },
      {
        type: "ol",
        items: [
          "Pesan lebih awal dan beri waktu cadangan untuk kemacetan, terutama di jam sibuk pagi dan sore.",
          "Pastikan titik jemput tepat (lobi atau pintu gedung) agar driver langsung menemukan Anda.",
          "Cek nama driver, nomor plat, dan foto mobil di aplikasi sebelum naik.",
          "Aktifkan fitur Bagikan Perjalanan agar keluarga bisa memantau rute Anda secara live.",
          "Butuh membatalkan? Untuk SEVA Car, pembatalan dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
        ],
      },
      { type: "h2", text: "Pulang dari bandara" },
      {
        type: "p",
        text: "Penjemputan juga tersedia di area kedatangan Terminal 1, 2, dan 3 Bandara Soekarno-Hatta, serta di Bandara Halim Perdanakusuma. Pesan setelah Anda mengambil bagasi agar waktu tunggu driver lebih singkat.",
      },
      {
        type: "cta",
        text: "Lihat kapasitas kabin, fitur keselamatan, dan simulasi tarif SEVA Car.",
        href: "/services/car",
        label: "Detail SEVA Car",
      },
    ],
    related: [
      { href: "/cities", label: "Titik jemput bandara & stasiun" },
      { href: "/blog/ojek-atau-taksi-online", label: "SEVA Ride atau SEVA Car: pilih yang mana?" },
    ],
  },
  {
    slug: "kirim-paket-instan-jakarta",
    title: "Kirim Paket Instan di Jakarta: Tarif, Batas Ukuran & Barang Terlarang",
    seoTitle: "Kirim Paket Instan di Jakarta: Tarif & Aturan",
    description:
      "Cara kirim paket instan di Jabodetabek dengan SEVA Send: cara hitung ongkir, contoh tarif, batas berat 20 kg, ukuran 40×40×40 cm, dan daftar barang terlarang.",
    category: "Pengiriman",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["kirim paket instan jakarta", "kurir instan jakarta", "ongkir kurir motor per km"],
    blocks: [
      {
        type: "p",
        text: "Dokumen kontrak yang harus sampai hari ini, pesanan pelanggan toko online, atau kunci yang tertinggal: kurir instan membuat barang tiba dalam hitungan jam tanpa singgah di gudang sortir.",
      },
      { type: "h2", text: "Cara menghitung ongkir SEVA Send" },
      {
        type: "p",
        text: "Ongkir SEVA Send terdiri dari tarif awal penjemputan Rp 10.000 ditambah Rp 3.000 per kilometer sesuai jarak rute. Contoh estimasinya:",
      },
      {
        type: "fareTable",
        service: "send",
        distances: [
          { km: 4, label: "Dokumen kantor jarak dekat" },
          { km: 10, label: "Pesanan online shop antar kecamatan" },
          { km: 18, label: "Antar kota di Jabodetabek" },
        ],
      },
      { type: "note", text: FARE_NOTE },
      { type: "h2", text: "Batas berat dan ukuran paket" },
      {
        type: "ul",
        items: [
          "Berat maksimal 20 kg per pengiriman.",
          "Dimensi maksimal 40 × 40 × 40 cm agar aman dibawa kurir motor.",
          "Paket diantar langsung point-to-point dari pengirim ke penerima, tanpa transit gudang.",
        ],
      },
      { type: "h2", text: "Barang yang tidak boleh dikirim" },
      {
        type: "ul",
        items: [
          "Zat mudah meledak atau terbakar, gas aerosol bertekanan, bensin, dan bahan kimia beracun.",
          "Senjata tajam, senjata api, narkotika, dan barang ilegal lainnya.",
          "Hewan peliharaan atau makhluk hidup dalam kondisi apa pun.",
        ],
      },
      { type: "h2", text: "Tips mengemas paket" },
      {
        type: "ul",
        items: [
          "Masukkan dokumen penting ke amplop tertutup.",
          "Bungkus barang elektronik kecil dengan bubble wrap tebal.",
          "Pastikan makanan kering dan hampers tertutup rapat.",
          "Bagikan tautan pelacakan ke penerima agar mereka siap menerima paket. Foto serah terima akan muncul di riwayat pesanan Anda.",
        ],
      },
      {
        type: "cta",
        text: "Lihat spesifikasi pengiriman dan simulasi ongkir SEVA Send.",
        href: "/services/send",
        label: "Detail SEVA Send",
      },
    ],
    related: [
      { href: "/partner/b2b", label: "SEVA Send untuk kebutuhan kantor" },
      { href: "/faq", label: "Pusat Bantuan & FAQ" },
    ],
  },
  {
    slug: "ojek-atau-taksi-online",
    title: "Ojek atau Taksi Online? Cara Memilih SEVA Ride vs SEVA Car",
    seoTitle: "Ojek atau Taksi Online? Ini Cara Memilihnya",
    description:
      "Bingung memilih ojek atau taksi online? Bandingkan tarif, kapasitas, dan kenyamanan SEVA Ride dan SEVA Car untuk perjalanan harian di Jabodetabek.",
    category: "Tips & Keamanan",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["ojek atau taksi online", "beda ojek online dan taksi online", "taksi online jabodetabek"],
    blocks: [
      {
        type: "p",
        text: "Untuk perjalanan yang sama, pilihan antara motor dan mobil bergantung pada jumlah penumpang, barang bawaan, cuaca, dan anggaran. Berikut perbandingan singkatnya.",
      },
      { type: "h2", text: "Kapan memilih SEVA Ride (motor)" },
      {
        type: "ul",
        items: [
          "Bepergian sendiri dengan barang ringan (1 ransel atau tas laptop, maksimal 10 kg).",
          "Mengejar waktu di jam sibuk dan ingin menembus kemacetan.",
          "Ingin tarif paling ringan: mulai Rp 8.000 + Rp 2.500/km.",
        ],
      },
      { type: "h2", text: "Kapan memilih SEVA Car (mobil)" },
      {
        type: "ul",
        items: [
          "Bepergian berdua hingga berempat, atau bersama anak-anak.",
          "Membawa koper atau belanjaan (sekitar 2 koper medium + 2 tas ransel).",
          "Cuaca hujan atau panas terik, atau perjalanan jauh seperti ke bandara.",
          "Tarif mulai Rp 9.500 + Rp 6.200/km.",
        ],
      },
      { type: "h2", text: "Perbandingan tarif untuk jarak 10 km" },
      {
        type: "fareTable",
        service: "ride",
        distances: [{ km: 10, label: "SEVA Ride, 1 penumpang" }],
      },
      {
        type: "fareTable",
        service: "car",
        distances: [{ km: 10, label: "SEVA Car, hingga 4 penumpang" }],
      },
      {
        type: "p",
        text: "Jika Anda bepergian bertiga atau berempat, biaya SEVA Car per orang bisa lebih ringan dibanding memesan beberapa motor sekaligus.",
      },
      { type: "note", text: FARE_NOTE },
      {
        type: "cta",
        text: "Bandingkan spesifikasi, kapasitas, dan tarif semua layanan SEVA dalam satu tabel.",
        href: "/services",
        label: "Bandingkan layanan",
      },
    ],
    related: [
      { href: "/blog/tarif-ojek-online-jakarta", label: "Tarif ojek online Jakarta" },
      { href: "/blog/taksi-online-ke-bandara-soekarno-hatta", label: "Taksi online ke Bandara Soekarno-Hatta" },
    ],
  },
  {
    slug: "taksi-online-ke-stasiun-whoosh-halim",
    title: "Taksi Online dari Stasiun Whoosh Halim: Tarif & Cara Pesan",
    seoTitle: "Taksi Online dari Stasiun Whoosh Halim",
    description:
      "Baru tiba dengan kereta cepat Whoosh di Halim? Ini cara pesan SEVA Car atau SEVA Ride dari Stasiun Halim, estimasi tarif, dan tips agar cepat dijemput.",
    category: "Bandara & Stasiun",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["taksi online stasiun whoosh halim", "ojek online stasiun halim", "transportasi dari stasiun kereta cepat halim"],
    blocks: [
      {
        type: "p",
        text: "Stasiun Kereta Cepat Whoosh Halim menjadi gerbang utama penumpang dari Bandung menuju Jakarta. Setelah turun dari kereta, Anda bisa melanjutkan perjalanan ke kantor, hotel, atau rumah dengan SEVA tanpa perlu antre taksi.",
      },
      { type: "h2", text: "Pilih SEVA Ride atau SEVA Car?" },
      {
        type: "ul",
        items: [
          "SEVA Ride: cocok jika Anda bepergian sendiri dengan tas kecil (maksimal 1 ransel atau tas laptop, 10 kg) dan ingin menembus macet.",
          "SEVA Car: cocok jika membawa koper, bepergian bersama keluarga atau rekan kerja (hingga 4 penumpang), atau saat hujan.",
        ],
      },
      { type: "h2", text: "Estimasi tarif dari Stasiun Whoosh Halim" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 10, label: "Ke kawasan bisnis terdekat" },
          { km: 14, label: "Ke Kuningan / Mega Kuningan" },
        ],
      },
      {
        type: "fareTable",
        service: "car",
        distances: [
          { km: 10, label: "Ke kawasan bisnis terdekat" },
          { km: 14, label: "Ke Kuningan / Mega Kuningan" },
          { km: 20, label: "Ke pusat kota Jakarta" },
        ],
      },
      { type: "note", text: FARE_NOTE },
      { type: "h2", text: "Tips agar cepat dijemput" },
      {
        type: "ol",
        items: [
          "Pesan setelah Anda keluar dari gerbang kedatangan agar driver tidak menunggu terlalu lama.",
          "Tentukan titik jemput yang jelas di area penjemputan stasiun, lalu cek nomor plat di aplikasi.",
          "Gunakan chat di aplikasi untuk memberi tahu posisi Anda; nomor HP Anda tetap tersamar.",
          "Biaya tol yang dilalui ditanggung penumpang sesuai tarif riil.",
        ],
      },
      {
        type: "cta",
        text: "Lihat titik penjemputan bandara dan stasiun yang dilayani SEVA di Jabodetabek.",
        href: "/cities",
        label: "Lihat peta layanan",
      },
    ],
    related: [
      { href: "/blog/taksi-online-ke-bandara-soekarno-hatta", label: "Taksi online ke Bandara Soekarno-Hatta" },
      { href: "/blog/ojek-online-ke-bandara-halim", label: "Ojek & taksi online ke Bandara Halim" },
    ],
  },
  {
    slug: "ojek-online-ke-bandara-halim",
    title: "Ojek & Taksi Online ke Bandara Halim Perdanakusuma",
    seoTitle: "Ojek & Taksi Online ke Bandara Halim",
    description:
      "Panduan ke Bandara Halim Perdanakusuma (HLP) dengan SEVA Ride atau SEVA Car: kapan memilih motor atau mobil, estimasi tarif, dan tips penjemputan.",
    category: "Bandara & Stasiun",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["ojek online ke bandara halim", "taksi online bandara halim", "transportasi ke bandara hlp"],
    blocks: [
      {
        type: "p",
        text: "Bandara Halim Perdanakusuma (HLP) di Jakarta Timur relatif dekat dengan pusat kota, sehingga perjalanan ke sana bisa ditempuh dengan motor maupun mobil. Pilihan terbaik bergantung pada barang bawaan Anda.",
      },
      { type: "h2", text: "Motor atau mobil ke Bandara Halim?" },
      {
        type: "ul",
        items: [
          "Pilih SEVA Ride jika hanya membawa ransel atau tas kabin kecil (maksimal 10 kg).",
          "Pilih SEVA Car jika membawa koper: kapasitasnya sekitar 2 koper medium dan 2 tas ransel untuk hingga 4 penumpang.",
        ],
      },
      { type: "h2", text: "Contoh estimasi tarif" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 8, label: "Dari Jakarta Timur" },
          { km: 15, label: "Dari pusat kota Jakarta" },
        ],
      },
      {
        type: "fareTable",
        service: "car",
        distances: [
          { km: 8, label: "Dari Jakarta Timur" },
          { km: 15, label: "Dari pusat kota Jakarta" },
          { km: 25, label: "Dari kota penyangga" },
        ],
      },
      { type: "note", text: FARE_NOTE },
      { type: "h2", text: "Saat tiba di Bandara Halim" },
      {
        type: "p",
        text: "Penjemputan tersedia di area lobi kedatangan. Pesan setelah bagasi Anda diambil, lalu cocokkan nama driver, nomor plat, dan foto kendaraan di aplikasi sebelum naik.",
      },
      {
        type: "cta",
        text: "Bandingkan kapasitas dan tarif SEVA Ride dan SEVA Car.",
        href: "/services",
        label: "Bandingkan layanan",
      },
    ],
    related: [
      { href: "/blog/taksi-online-ke-bandara-soekarno-hatta", label: "Taksi online ke Bandara Soekarno-Hatta" },
      { href: "/blog/ojek-atau-taksi-online", label: "Ojek atau taksi online?" },
    ],
  },
  {
    slug: "ongkir-kurir-instan-jakarta-bekasi-tangerang",
    title: "Ongkir Kurir Instan Antarkota: Jakarta ke Bekasi, Tangerang & Depok",
    seoTitle: "Ongkir Kurir Instan Jakarta–Bekasi–Tangerang",
    description:
      "Berapa ongkir kurir instan dari Jakarta ke Bekasi, Tangerang, atau Depok? Lihat cara hitung ongkir SEVA Send dan contoh tarif untuk jarak 15–30 km.",
    category: "Pengiriman",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["ongkir kurir instan jakarta bekasi", "kurir instan jakarta tangerang", "kirim barang same day jabodetabek"],
    blocks: [
      {
        type: "p",
        text: "Pengiriman antarkota di Jabodetabek sering dibutuhkan untuk dokumen kantor, pesanan toko online, atau barang pribadi yang harus sampai hari itu juga. SEVA Send mengantar paket langsung dari pengirim ke penerima tanpa singgah di gudang.",
      },
      { type: "h2", text: "Cara hitung ongkir antarkota" },
      {
        type: "p",
        text: "Ongkir SEVA Send = Rp 10.000 tarif awal + Rp 3.000 per kilometer sesuai jarak rute. Semakin jauh jaraknya, semakin besar komponen per kilometernya, tanpa biaya tambahan antarkota.",
      },
      {
        type: "fareTable",
        service: "send",
        distances: [
          { km: 15, label: "Antarkota jarak dekat" },
          { km: 20, label: "Contoh Jakarta ke kota penyangga" },
          { km: 25, label: "Antarkota jarak menengah" },
          { km: 30, label: "Antarkota jarak jauh" },
        ],
      },
      { type: "note", text: FARE_NOTE },
      { type: "h2", text: "Pastikan paket memenuhi syarat" },
      {
        type: "ul",
        items: [
          "Berat maksimal 20 kg dan ukuran maksimal 40 × 40 × 40 cm.",
          "Kemas rapi: dokumen dalam amplop tertutup, elektronik dengan bubble wrap tebal.",
          "Barang mudah terbakar, senjata, narkotika, dan hewan hidup tidak dapat dikirim.",
        ],
      },
      {
        type: "cta",
        text: "Untuk pengiriman rutin perusahaan, gunakan akun korporat dengan tagihan bulanan terpusat.",
        href: "/partner/b2b",
        label: "Akun korporat",
      },
    ],
    related: [
      { href: "/blog/kirim-paket-instan-jakarta", label: "Aturan kirim paket instan" },
      { href: "/services/send", label: "Detail SEVA Send" },
    ],
  },
  {
    slug: "cara-daftar-driver-ojek-online",
    title: "Cara Daftar Jadi Driver Ojek & Taksi Online SEVA: Syarat dan Langkahnya",
    seoTitle: "Cara Daftar Driver Ojek Online SEVA",
    description:
      "Ingin jadi mitra driver? Ini syarat dokumen, syarat kendaraan, langkah pendaftaran online, dan skema bagi hasil 95% untuk mitra pengemudi SEVA.",
    category: "Mitra & Bisnis",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["cara daftar driver ojek online", "syarat jadi driver ojol", "daftar mitra driver taksi online"],
    blocks: [
      {
        type: "p",
        text: "Menjadi mitra pengemudi SEVA bisa jadi penghasilan utama maupun tambahan. Pendaftarannya gratis dan sepenuhnya online dari ponsel.",
      },
      { type: "h2", text: "Kenapa bergabung dengan SEVA?" },
      {
        type: "ul",
        items: [
          "Bawa pulang 95% pendapatan perjalanan; potongan platform hanya 5%, tidak lebih.",
          "Pencairan harian (H+0) ke rekening bank atas nama Anda.",
          "Bebas menentukan jam kerja sendiri.",
          "Bonus target mingguan dan insentif jam sibuk.",
        ],
      },
      { type: "h2", text: "Syarat dokumen" },
      {
        type: "ul",
        items: [
          "WNI berusia 18–60 tahun dengan KTP asli yang masih berlaku.",
          "SIM C aktif untuk motor atau SIM A aktif untuk mobil.",
          "SKCK yang masih berlaku.",
          "Rekening bank atas nama pribadi.",
        ],
      },
      { type: "h2", text: "Syarat kendaraan dan perangkat" },
      {
        type: "ul",
        items: [
          "STNK dan pajak kendaraan aktif.",
          "Sepeda motor atau mobil MPV minimal tahun 2017.",
          "Smartphone Android atau iOS dengan GPS aktif.",
          "Kendaraan bersih dan layak jalan.",
        ],
      },
      { type: "h2", text: "Langkah pendaftaran" },
      {
        type: "ol",
        items: [
          "Unduh aplikasi SEVA Driver di Google Play Store atau Apple App Store.",
          "Masukkan nomor ponsel aktif, lalu foto KTP, SIM, STNK, dan SKCK dengan jelas.",
          "Tim SEVA memverifikasi berkas dalam 1×24 jam dan mengirim notifikasi aktivasi.",
          "Setelah akun aktif, hidupkan tombol online dan mulai terima pesanan.",
        ],
      },
      {
        type: "cta",
        text: "Lihat keuntungan lengkap dan mulai pendaftaran mitra pengemudi.",
        href: "/partner/driver",
        label: "Daftar jadi driver",
      },
    ],
    related: [
      { href: "/partner/driver", label: "Halaman mitra pengemudi" },
      { href: "/faq", label: "Pusat Bantuan & FAQ" },
    ],
  },
  {
    slug: "ojek-online-ke-stasiun-krl-mrt-jakarta",
    title: "Ojek Online ke Stasiun KRL & MRT Jakarta: Hemat Waktu Perjalanan Harian",
    seoTitle: "Ojek Online ke Stasiun KRL & MRT Jakarta",
    description:
      "Gabungkan KRL atau MRT dengan SEVA Ride untuk perjalanan pertama dan terakhir. Estimasi tarif jarak dekat, titik jemput stasiun, dan tips komuter harian.",
    category: "Bandara & Stasiun",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["ojek online ke stasiun krl", "ojek dari stasiun mrt", "transportasi komuter jakarta"],
    blocks: [
      {
        type: "p",
        text: "Banyak komuter Jabodetabek menggabungkan KRL, MRT, atau LRT dengan ojek online untuk jarak pendek dari rumah ke stasiun dan dari stasiun ke kantor. Kombinasi ini sering lebih cepat daripada membawa kendaraan sendiri di jam sibuk.",
      },
      { type: "h2", text: "Estimasi tarif jarak pendek dengan SEVA Ride" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 2, label: "Stasiun ke gedung kantor terdekat" },
          { km: 3, label: "Rumah ke stasiun terdekat" },
          { km: 5, label: "Stasiun ke kawasan perumahan" },
        ],
      },
      { type: "note", text: FARE_NOTE },
      { type: "h2", text: "Stasiun yang sering menjadi titik jemput" },
      {
        type: "p",
        text: "Penjemputan tersedia di sekitar simpul transit Jabodetabek, misalnya Stasiun Manggarai, Sudirman, Dukuh Atas, Lebak Bulus, serta stasiun LRT Bekasi dan Cibubur.",
      },
      { type: "h2", text: "Tips komuter harian" },
      {
        type: "ul",
        items: [
          "Pesan saat kereta mendekati stasiun tujuan agar driver tiba bersamaan dengan Anda keluar gerbang.",
          "Pilih titik jemput di luar area padat pintu keluar agar mudah dijangkau motor.",
          "Gunakan SEVA eWallet agar pembayaran otomatis tanpa mencari uang kecil.",
          "Saat hujan atau membawa banyak barang, pertimbangkan SEVA Car.",
        ],
      },
      { type: "cta", text: "Lihat wilayah dan titik transit yang dilayani SEVA.", href: "/cities", label: "Peta wilayah layanan" },
    ],
    related: [
      { href: "/blog/tarif-ojek-online-jakarta", label: "Tarif ojek online Jakarta" },
      { href: "/blog/ojek-atau-taksi-online", label: "Ojek atau taksi online?" },
    ],
  },
  {
    slug: "taksi-online-bsd-ke-jakarta",
    title: "Taksi Online dari BSD & Tangerang Selatan ke Jakarta: Estimasi Tarif",
    seoTitle: "Taksi Online BSD ke Jakarta: Estimasi Tarif",
    description:
      "Estimasi tarif SEVA Car dan SEVA Ride dari BSD City, Alam Sutera, dan Bintaro ke Jakarta, plus tips perjalanan lintas kota di jam sibuk.",
    category: "Tarif & Biaya",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["taksi online bsd ke jakarta", "ojek online bsd senayan", "tarif taksi tangerang selatan jakarta"],
    blocks: [
      {
        type: "p",
        text: "Perjalanan dari BSD City, Alam Sutera, atau Bintaro ke Jakarta termasuk rute lintas kota yang padat setiap hari kerja. Berikut gambaran biayanya dengan SEVA.",
      },
      { type: "h2", text: "Estimasi tarif SEVA Car" },
      {
        type: "fareTable",
        service: "car",
        distances: [
          { km: 20, label: "Bintaro ke Jakarta Selatan" },
          { km: 27, label: "BSD ke Senayan" },
          { km: 35, label: "BSD ke pusat kota Jakarta" },
        ],
      },
      { type: "h2", text: "Estimasi tarif SEVA Ride" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 20, label: "Bintaro ke Jakarta Selatan" },
          { km: 27, label: "BSD ke Senayan" },
        ],
      },
      { type: "note", text: FARE_NOTE },
      { type: "h2", text: "Tips perjalanan lintas kota" },
      {
        type: "ul",
        items: [
          "Biaya tol yang dilalui SEVA Car ditanggung penumpang sesuai tarif riil.",
          "Untuk perjalanan bersama 2–4 orang, SEVA Car bisa lebih hemat per orang dibanding beberapa motor.",
          "Tarif tidak naik saat jam sibuk atau hujan, sehingga biaya harian lebih mudah direncanakan.",
        ],
      },
      { type: "cta", text: "Bandingkan kapasitas dan tarif semua layanan.", href: "/services", label: "Bandingkan layanan" },
    ],
    related: [
      { href: "/blog/ojek-atau-taksi-online", label: "Ojek atau taksi online?" },
      { href: "/blog/tarif-pasti-tanpa-lonjakan", label: "Kenapa tarif SEVA tidak naik saat hujan" },
    ],
  },
  {
    slug: "tarif-pasti-tanpa-lonjakan",
    title: "Tarif Pasti Tanpa Lonjakan: Kenapa Tarif SEVA Tidak Naik Saat Hujan",
    seoTitle: "Tarif Pasti Tanpa Lonjakan Saat Hujan",
    description:
      "Mengapa tarif SEVA tidak naik saat jam sibuk atau hujan, apa saja yang termasuk dalam tarif, dan biaya apa yang tetap perlu Anda siapkan.",
    category: "Tarif & Biaya",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["tarif ojek online saat hujan", "tarif tanpa surge", "taksi online tanpa lonjakan harga"],
    blocks: [
      {
        type: "p",
        text: "Salah satu keluhan paling umum saat memesan transportasi online adalah harga yang tiba-tiba melonjak ketika hujan atau di jam pulang kantor. SEVA menerapkan tarif pasti agar biaya perjalanan Anda bisa direncanakan.",
      },
      { type: "h2", text: "Bagaimana tarif pasti bekerja" },
      {
        type: "p",
        text: "Tarif dihitung dari tarif buka pintu ditambah biaya per kilometer sesuai jarak rute. Totalnya ditampilkan di aplikasi sebelum Anda mengonfirmasi pesanan, dan tidak dinaikkan sepihak karena cuaca atau jam sibuk.",
      },
      {
        type: "ul",
        items: [
          "SEVA Ride: Rp 8.000 + Rp 2.500/km",
          "SEVA Car: Rp 9.500 + Rp 6.200/km",
          "SEVA Send: Rp 10.000 + Rp 3.000/km",
        ],
      },
      { type: "h2", text: "Biaya yang tetap perlu disiapkan" },
      {
        type: "p",
        text: "Biaya tol dan tiket parkir resmi di bandara, stasiun, atau gedung tidak termasuk dalam tarif perjalanan dan ditanggung penumpang sesuai tarif riil di lokasi.",
      },
      { type: "h2", text: "Contoh: perjalanan 8 km di hari hujan" },
      {
        type: "fareTable",
        service: "ride",
        distances: [{ km: 8, label: "Sama di jam biasa maupun saat hujan" }],
      },
      {
        type: "fareTable",
        service: "car",
        distances: [{ km: 8, label: "Sama di jam biasa maupun saat hujan" }],
      },
      { type: "note", text: FARE_NOTE },
      { type: "cta", text: "Pelajari alur pemesanan dan cara tarif dihitung.", href: "/how-it-works", label: "Cara kerja SEVA" },
    ],
    related: [
      { href: "/blog/tarif-ojek-online-jakarta", label: "Tarif ojek online Jakarta" },
      { href: "/blog/taksi-online-ke-bandara-soekarno-hatta", label: "Taksi online ke Bandara Soekarno-Hatta" },
    ],
  },
  {
    slug: "tips-aman-naik-ojek-dan-taksi-online",
    title: "7 Tips Aman Naik Ojek & Taksi Online, Terutama Saat Malam Hari",
    seoTitle: "7 Tips Aman Naik Ojek & Taksi Online",
    description:
      "Cara memastikan perjalanan ojek dan taksi online tetap aman: cek driver dan plat, bagikan perjalanan, gunakan SOS, dan jaga kerahasiaan kode OTP.",
    category: "Tips & Keamanan",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["tips aman naik ojek online", "tips aman naik taksi online malam", "fitur keamanan ojek online"],
    blocks: [
      {
        type: "p",
        text: "Fitur keselamatan di aplikasi paling efektif bila dipakai dengan kebiasaan yang tepat. Berikut langkah sederhana yang bisa Anda lakukan setiap kali bepergian.",
      },
      {
        type: "ol",
        items: [
          "Cocokkan nama driver, nomor plat, dan foto kendaraan di aplikasi sebelum naik.",
          "Tunggu di tempat terang dan ramai, terutama saat malam hari.",
          "Aktifkan Bagikan Perjalanan agar keluarga atau teman bisa memantau rute Anda secara live.",
          "Hubungi driver hanya lewat chat atau telepon di aplikasi; nomor HP Anda tetap tersamar.",
          "Gunakan tombol darurat SOS bila merasa tidak aman untuk menelepon 112 atau kontak darurat Anda.",
          "Jangan pernah membagikan kode OTP kepada siapa pun, termasuk yang mengaku dari SEVA.",
          "Untuk SEVA Ride, selalu gunakan helm yang disediakan driver.",
        ],
      },
      { type: "h2", text: "Jika terjadi kendala" },
      {
        type: "p",
        text: "Laporkan kejadian melalui aplikasi atau hubungi tim bantuan SEVA lewat WhatsApp atau email dengan menyebutkan ID perjalanan agar dapat segera ditindaklanjuti.",
      },
      { type: "cta", text: "Lihat semua fitur keselamatan perjalanan SEVA.", href: "/safety", label: "Standar keselamatan" },
    ],
    related: [
      { href: "/blog/barang-tertinggal-di-taksi-online", label: "Barang tertinggal di taksi online" },
      { href: "/faq", label: "Pusat Bantuan & FAQ" },
    ],
  },
  {
    slug: "barang-tertinggal-di-taksi-online",
    title: "Barang Tertinggal di Taksi atau Ojek Online? Ini Langkah yang Harus Dilakukan",
    seoTitle: "Barang Tertinggal di Taksi Online? Lakukan Ini",
    description:
      "Langkah cepat saat barang tertinggal di kendaraan SEVA: hubungi driver lewat riwayat perjalanan, siapkan ID perjalanan, dan hubungi tim bantuan.",
    category: "Tips & Keamanan",
    published: "2026-10-11",
    readMinutes: 2,
    keywords: ["barang tertinggal di taksi online", "barang ketinggalan ojek online", "cara menghubungi driver setelah turun"],
    blocks: [
      {
        type: "p",
        text: "Ponsel, dompet, atau tas tertinggal di kendaraan bisa terjadi pada siapa saja. Semakin cepat Anda bertindak, semakin besar peluang barang kembali.",
      },
      { type: "h2", text: "Langkah yang perlu dilakukan" },
      {
        type: "ol",
        items: [
          "Buka menu Riwayat Perjalanan di aplikasi SEVA.",
          "Pilih perjalanan terkait, lalu hubungi driver melalui fitur chat atau telepon di aplikasi.",
          "Jelaskan ciri barang dan sepakati cara pengembaliannya.",
          "Jika driver tidak dapat dihubungi, kontak tim bantuan SEVA lewat WhatsApp atau email dengan menyebutkan ID perjalanan.",
        ],
      },
      { type: "h2", text: "Tips agar tidak terulang" },
      {
        type: "ul",
        items: [
          "Cek kursi dan bagasi sebelum turun dari kendaraan.",
          "Simpan barang kecil di satu tas, jangan diletakkan di kursi.",
          "Jika ponsel Anda yang tertinggal, gunakan ponsel lain untuk menghubungi tim bantuan.",
        ],
      },
      { type: "cta", text: "Temukan jawaban lain seputar akun dan keamanan.", href: "/faq", label: "Buka Pusat Bantuan" },
    ],
    related: [
      { href: "/blog/tips-aman-naik-ojek-dan-taksi-online", label: "7 tips aman naik ojek & taksi online" },
      { href: "/safety", label: "Standar keselamatan" },
    ],
  },
  {
    slug: "cara-pakai-aplikasi-seva-pertama-kali",
    title: "Cara Pakai Aplikasi SEVA untuk Pertama Kali: Dari Daftar hingga Bayar",
    seoTitle: "Cara Pakai Aplikasi SEVA Pertama Kali",
    description:
      "Panduan pengguna baru: daftar dengan nomor ponsel, pesan SEVA Ride, Car, atau Send, memilih metode bayar, hingga mengunduh struk perjalanan.",
    category: "Tips & Keamanan",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["cara pakai aplikasi seva", "cara pesan ojek online pertama kali", "cara daftar aplikasi taksi online"],
    blocks: [
      {
        type: "p",
        text: "Baru pertama kali memakai SEVA? Panduan ini membawa Anda dari unduh aplikasi hingga menyelesaikan perjalanan pertama.",
      },
      { type: "h2", text: "1. Unduh dan daftar" },
      {
        type: "p",
        text: "Unduh aplikasi SEVA di Google Play Store atau Apple App Store, lalu daftar menggunakan nomor ponsel aktif. Masukkan kode OTP yang dikirim untuk verifikasi, dan jangan bagikan kode ini kepada siapa pun.",
      },
      { type: "h2", text: "2. Pilih layanan" },
      {
        type: "ul",
        items: [
          "SEVA Ride untuk perjalanan motor sendiri dengan barang ringan.",
          "SEVA Car untuk mobil hingga 4 penumpang.",
          "SEVA Send untuk mengirim paket hingga 20 kg.",
        ],
      },
      { type: "h2", text: "3. Tentukan titik jemput dan tujuan" },
      {
        type: "p",
        text: "Masukkan alamat tujuan atau geser pin di peta hingga tepat di gerbang atau lobi gedung. Titik yang akurat membuat driver lebih cepat menemukan Anda.",
      },
      { type: "h2", text: "4. Cek tarif dan pilih pembayaran" },
      {
        type: "p",
        text: "Tarif pasti tampil sebelum konfirmasi. Pilih bayar dengan SEVA eWallet, QRIS, atau tunai, lalu konfirmasi pesanan.",
      },
      { type: "h2", text: "5. Selama dan setelah perjalanan" },
      {
        type: "p",
        text: "Pantau posisi driver di peta, gunakan Bagikan Perjalanan bila perlu, dan setelah tiba, struk digital tersimpan di riwayat. Struk dapat diunduh dalam format PDF.",
      },
      { type: "cta", text: "Lihat alur lengkap pemesanan dan pembayaran.", href: "/how-it-works", label: "Cara kerja SEVA" },
    ],
    related: [
      { href: "/blog/tips-aman-naik-ojek-dan-taksi-online", label: "Tips aman naik ojek & taksi online" },
      { href: "/blog/tarif-pasti-tanpa-lonjakan", label: "Tarif pasti tanpa lonjakan" },
    ],
  },
  {
    slug: "transportasi-karyawan-untuk-perusahaan",
    title: "Transportasi Karyawan untuk Perusahaan: Voucher Perjalanan & Tagihan Bulanan",
    seoTitle: "Transportasi Karyawan untuk Perusahaan",
    description:
      "Kelola perjalanan dinas karyawan tanpa reimburse manual: voucher perjalanan, tagihan bulanan terpusat dengan faktur pajak, dan kurir dokumen SEVA Send.",
    category: "Mitra & Bisnis",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["transportasi karyawan perusahaan", "voucher transportasi karyawan", "taksi online untuk perjalanan dinas"],
    blocks: [
      {
        type: "p",
        text: "Proses reimburse perjalanan dinas sering memakan waktu: mengumpulkan struk, memeriksa nominal, dan mencocokkan anggaran. Akun korporat SEVA dirancang untuk menyederhanakan proses tersebut.",
      },
      { type: "h2", text: "Yang didapat perusahaan" },
      {
        type: "ul",
        items: [
          "Voucher perjalanan karyawan dengan pengaturan anggaran per departemen atau level jabatan.",
          "Satu tagihan bulanan terpusat lengkap dengan faktur pajak.",
          "Laporan perjalanan berisi rute, waktu jemput, dan biaya aktual untuk keperluan audit.",
          "Akses ke SEVA Ride, SEVA Car, dan kurir SEVA Send untuk dokumen kantor.",
        ],
      },
      { type: "h2", text: "Cocok untuk siapa?" },
      {
        type: "p",
        text: "Perusahaan, hotel, maupun instansi yang rutin memiliki perjalanan dinas, antar-jemput tamu, atau pengiriman dokumen di Jabodetabek.",
      },
      {
        type: "cta",
        text: "Isi formulir singkat dan tim SEVA akan menghubungi Anda untuk penawaran.",
        href: "/partner/b2b#ajukan-kemitraan",
        label: "Ajukan akun korporat",
      },
    ],
    related: [
      { href: "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang", label: "Ongkir kurir instan antarkota" },
      { href: "/partner/b2b", label: "B2B Partners" },
    ],
  },
  {
    slug: "cara-daftar-armada-fleet-operator",
    title: "Cara Mendaftarkan Armada sebagai Fleet Operator SEVA",
    seoTitle: "Cara Daftar Armada sebagai Fleet Operator",
    description:
      "Pemilik armada taksi, rental, atau shuttle: pelajari 4 langkah bergabung sebagai fleet operator SEVA dan memantau armada lewat Fleet Management System.",
    category: "Mitra & Bisnis",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["cara daftar fleet operator", "kerja sama armada rental mobil", "mitra armada taksi online"],
    blocks: [
      {
        type: "p",
        text: "Pemilik armada dapat menghubungkan kendaraannya ke permintaan perjalanan di Jabodetabek melalui SEVA, sekaligus memantau operasional dari satu konsol.",
      },
      { type: "h2", text: "4 langkah bergabung" },
      {
        type: "ol",
        items: [
          "Registrasi profil perusahaan (PT, CV, atau koperasi) beserta jumlah dan jenis armada.",
          "Verifikasi dokumen: izin usaha, kepemilikan armada, dan uji kelaikan jalan (KIR).",
          "Integrasi sistem dan onboarding pengemudi, termasuk pelatihan SOP pelayanan.",
          "Armada aktif menerima order dengan laporan performa berkala.",
        ],
      },
      { type: "h2", text: "Fitur Fleet Management System" },
      {
        type: "ul",
        items: [
          "Pelacakan GPS real-time untuk setiap unit.",
          "Penugasan pengemudi, shift, dan riwayat trip.",
          "Pengingat jadwal servis dan masa uji KIR.",
          "Skema bagi hasil hingga 95% dengan pencairan harian.",
        ],
      },
      {
        type: "cta",
        text: "Daftarkan armada Anda lewat formulir kemitraan fleet operator.",
        href: "/partner/fleet#daftar-operator",
        label: "Daftarkan armada",
      },
    ],
    related: [
      { href: "/blog/cara-daftar-driver-ojek-online", label: "Cara daftar driver" },
      { href: "/partner/fleet", label: "Halaman fleet operator" },
    ],
  },
  {
    "slug": "ojek-online-depok-ke-jakarta",
    "title": "Ojek & Taksi Online dari Depok ke Jakarta: Estimasi Tarif Harian",
    "seoTitle": "Ojek Online Depok ke Jakarta: Estimasi Tarif",
    "description": "Estimasi tarif SEVA Ride dan SEVA Car dari Depok (Margonda, Cinere, Sawangan) ke Jakarta, plus tips perjalanan komuter harian.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "ojek online depok ke jakarta",
      "taksi online depok jakarta",
      "tarif ojol margonda"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Depok adalah salah satu kota penyangga dengan komuter terbanyak ke Jakarta. Berikut gambaran biaya perjalanan dengan SEVA."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 10,
            "label": "Margonda ke Jakarta Selatan bagian selatan"
          },
          {
            "km": 15,
            "label": "Depok ke kawasan bisnis Jakarta Selatan"
          },
          {
            "km": 20,
            "label": "Depok ke pusat kota"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Depok ke kawasan bisnis Jakarta Selatan"
          },
          {
            "km": 20,
            "label": "Depok ke pusat kota"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "ul",
        "items": [
          "Kombinasikan dengan KRL: naik SEVA Ride ke stasiun terdekat, lalu lanjut kereta.",
          "Tarif tidak naik saat jam sibuk atau hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Lihat wilayah layanan SEVA di Depok dan sekitarnya.",
        "href": "/cities",
        "label": "Peta wilayah"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-stasiun-krl-mrt-jakarta",
        "label": "Ojek online ke stasiun KRL & MRT"
      },
      {
        "href": "/blog/tarif-ojek-online-jakarta",
        "label": "Tarif ojek online Jakarta"
      }
    ]
  },
  {
    "slug": "taksi-online-bekasi-ke-jakarta",
    "title": "Taksi Online dari Bekasi ke Jakarta: Estimasi Tarif & Tips Hemat",
    "seoTitle": "Taksi Online Bekasi ke Jakarta: Estimasi Tarif",
    "description": "Berapa tarif taksi dan ojek online dari Bekasi ke Jakarta? Lihat estimasi SEVA Car dan SEVA Ride untuk jarak 15–30 km dan tips hemat perjalanan.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online bekasi ke jakarta",
      "ojek online bekasi jakarta",
      "tarif taksi bekasi"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Rute Bekasi–Jakarta termasuk yang paling padat di Jabodetabek. Mengetahui estimasi tarif membantu Anda memilih moda yang paling sesuai."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Bekasi Barat ke Jakarta Timur"
          },
          {
            "km": 25,
            "label": "Bekasi ke kawasan bisnis Jakarta"
          },
          {
            "km": 30,
            "label": "Bekasi ke Jakarta Selatan"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 15,
            "label": "Bekasi Barat ke Jakarta Timur"
          },
          {
            "km": 25,
            "label": "Bekasi ke kawasan bisnis Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Tips hemat"
      },
      {
        "type": "ul",
        "items": [
          "Bepergian berdua hingga berempat? SEVA Car bisa lebih hemat per orang.",
          "Gunakan LRT Bekasi dan SEVA Ride untuk jarak pendek ke stasiun.",
          "Pilih metode bayar SEVA eWallet agar tidak perlu uang pas."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif semua layanan SEVA.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "taksi-online-bogor-ke-jakarta",
    "title": "Taksi Online dari Bogor ke Jakarta: Estimasi Tarif & Pilihan Rute",
    "seoTitle": "Taksi Online Bogor ke Jakarta: Estimasi Tarif",
    "description": "Estimasi tarif SEVA Car dari Bogor dan Sentul ke Jakarta, kapan sebaiknya memakai KRL, dan tips perjalanan jarak jauh di Jabodetabek.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online bogor ke jakarta",
      "tarif taksi bogor jakarta",
      "transportasi bogor jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bogor dan Sentul berjarak cukup jauh dari pusat Jakarta. Untuk perjalanan bersama keluarga atau membawa barang, taksi online memberi kenyamanan dari pintu ke pintu."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 30,
            "label": "Sentul ke Jakarta Timur"
          },
          {
            "km": 40,
            "label": "Bogor ke Jakarta Selatan"
          },
          {
            "km": 50,
            "label": "Bogor ke pusat kota Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "SEVA Car atau KRL?"
      },
      {
        "type": "ul",
        "items": [
          "Pilih KRL untuk perjalanan sendiri dengan barang ringan, lalu lanjutkan dengan SEVA Ride dari stasiun.",
          "Pilih SEVA Car jika bepergian bersama 2–4 orang, membawa koper, atau tujuan jauh dari stasiun."
        ]
      },
      {
        "type": "h2",
        "text": "Biaya tambahan"
      },
      {
        "type": "p",
        "text": "Biaya tol yang dilalui ditanggung penumpang sesuai tarif riil, di luar tarif perjalanan yang tampil di aplikasi."
      },
      {
        "type": "cta",
        "text": "Lihat detail kapasitas dan fasilitas SEVA Car.",
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-stasiun-krl-mrt-jakarta",
        "label": "Ojek online ke stasiun KRL & MRT"
      },
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      }
    ]
  },
  {
    "slug": "cara-bayar-seva-ewallet-dan-qris",
    "title": "Cara Bayar Perjalanan SEVA: SEVA eWallet, QRIS, atau Tunai",
    "seoTitle": "Cara Bayar SEVA: eWallet, QRIS, atau Tunai",
    "description": "Penjelasan metode pembayaran di aplikasi SEVA: cara kerja SEVA eWallet, membayar dengan QRIS, pembayaran tunai, dan di mana menemukan struk perjalanan.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "cara bayar ojek online pakai qris",
      "seva ewallet",
      "metode pembayaran taksi online"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "SEVA menyediakan beberapa pilihan pembayaran agar Anda tidak terkunci pada satu metode saja."
      },
      {
        "type": "h2",
        "text": "SEVA eWallet"
      },
      {
        "type": "p",
        "text": "Dompet digital di dalam aplikasi. Saldo dipotong otomatis setelah perjalanan selesai, dan setiap transaksi tercatat di riwayat. Isi saldo melalui menu Dompet dengan metode yang tersedia di aplikasi."
      },
      {
        "type": "h2",
        "text": "QRIS"
      },
      {
        "type": "p",
        "text": "Bayar memakai aplikasi e-wallet atau mobile banking apa pun yang mendukung QRIS."
      },
      {
        "type": "h2",
        "text": "Tunai"
      },
      {
        "type": "p",
        "text": "Bayar langsung kepada mitra pengemudi di akhir perjalanan sesuai tarif yang tampil di aplikasi."
      },
      {
        "type": "h2",
        "text": "Struk perjalanan"
      },
      {
        "type": "p",
        "text": "Setelah perjalanan, struk digital tersimpan di riwayat dan bisa diunduh sebagai PDF untuk keperluan klaim kantor."
      },
      {
        "type": "cta",
        "text": "Lihat alur pemesanan dan pembayaran lengkap.",
        "href": "/how-it-works",
        "label": "Cara kerja SEVA"
      }
    ],
    "related": [
      {
        "href": "/blog/cara-klaim-perjalanan-dinas-dengan-struk-digital",
        "label": "Cara klaim perjalanan dinas"
      },
      {
        "href": "/blog/cara-pakai-aplikasi-seva-pertama-kali",
        "label": "Cara pakai aplikasi SEVA"
      }
    ]
  },
  {
    "slug": "cara-klaim-perjalanan-dinas-dengan-struk-digital",
    "title": "Cara Klaim Perjalanan Dinas dengan Struk Digital SEVA",
    "seoTitle": "Cara Klaim Perjalanan Dinas dengan Struk Digital",
    "description": "Langkah mengunduh struk perjalanan SEVA dalam format PDF untuk reimburse kantor, serta pilihan akun korporat dengan tagihan bulanan.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara klaim reimburse taksi online",
      "struk ojek online untuk kantor",
      "bukti perjalanan dinas"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Untuk reimburse perjalanan dinas, kantor biasanya meminta bukti berisi tanggal, rute, dan nominal. Struk digital SEVA memuat informasi tersebut."
      },
      {
        "type": "h2",
        "text": "Langkah mengunduh struk"
      },
      {
        "type": "ol",
        "items": [
          "Buka menu Riwayat Perjalanan di aplikasi SEVA.",
          "Pilih perjalanan yang ingin diklaim.",
          "Unduh struk dalam format PDF.",
          "Lampirkan struk ke formulir reimburse kantor Anda."
        ]
      },
      {
        "type": "h2",
        "text": "Lebih praktis dengan akun korporat"
      },
      {
        "type": "p",
        "text": "Jika perjalanan dinas rutin, perusahaan dapat memakai akun korporat dengan voucher perjalanan karyawan dan satu tagihan bulanan terpusat lengkap dengan faktur pajak, sehingga karyawan tidak perlu reimburse manual."
      },
      {
        "type": "cta",
        "text": "Ajukan akun korporat untuk perusahaan Anda.",
        "href": "/partner/b2b#ajukan-kemitraan",
        "label": "Ajukan akun korporat"
      }
    ],
    "related": [
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Transportasi karyawan untuk perusahaan"
      },
      {
        "href": "/blog/cara-bayar-seva-ewallet-dan-qris",
        "label": "Cara bayar perjalanan SEVA"
      }
    ]
  },
  {
    "slug": "kirim-dokumen-penting-hari-ini",
    "title": "Kirim Dokumen Penting Hari Ini: Panduan Kurir Instan untuk Kantor",
    "seoTitle": "Kirim Dokumen Penting Hari Ini dengan Kurir Instan",
    "description": "Cara mengirim kontrak, berkas legal, atau dokumen kantor yang harus tiba hari ini dengan SEVA Send: pengemasan, pelacakan, dan bukti serah terima.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "kirim dokumen hari ini jakarta",
      "kurir dokumen kantor",
      "kirim kontrak same day"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Kontrak yang harus ditandatangani hari ini atau berkas yang tertinggal di rumah tidak bisa menunggu ekspedisi reguler. Kurir instan mengantar langsung tanpa transit gudang."
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Antar gedung di satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Cara mengemas dokumen"
      },
      {
        "type": "ul",
        "items": [
          "Masukkan dokumen ke amplop tertutup, gunakan map plastik bila berisi banyak lembar.",
          "Tulis nama dan nomor penerima dengan jelas di amplop.",
          "Jangan mengirim uang tunai; uang tidak termasuk barang yang boleh dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Pantau hingga diterima"
      },
      {
        "type": "p",
        "text": "Bagikan tautan pelacakan ke penerima. Setelah diserahkan, foto serah terima dan tanda tangan digital penerima muncul di riwayat pesanan Anda."
      },
      {
        "type": "cta",
        "text": "Lihat spesifikasi pengiriman SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Transportasi karyawan untuk perusahaan"
      }
    ]
  },
  {
    "slug": "kirim-hampers-dan-kue-dengan-kurir-instan",
    "title": "Kirim Hampers & Kue dengan Kurir Instan: Tips Agar Tetap Rapi",
    "seoTitle": "Kirim Hampers & Kue dengan Kurir Instan",
    "description": "Tips mengirim hampers, kue, dan makanan kering dengan SEVA Send agar tiba rapi: batas ukuran, cara mengemas, dan estimasi ongkir di Jabodetabek.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "kirim hampers jakarta",
      "kurir instan kue",
      "kirim makanan same day jabodetabek"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Hampers dan kue sering dikirim untuk momen spesial. Agar tiba rapi, perhatikan ukuran paket dan cara mengemasnya."
      },
      {
        "type": "h2",
        "text": "Pastikan ukuran sesuai"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm agar aman dibawa kurir motor.",
          "Untuk hampers besar, bagi menjadi beberapa paket."
        ]
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Gunakan kotak kardus yang kokoh dan tutup rapat.",
          "Isi rongga kosong dengan kertas atau bubble wrap agar isi tidak bergeser.",
          "Makanan harus tertutup rapat dan higienis.",
          "Tandai sisi atas kotak bila isinya mudah rusak."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 4,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 18,
            "label": "Antarkota"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Cek batas berat, ukuran, dan barang terlarang.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "menghitung-pendapatan-driver-bagi-hasil-95-persen",
    "title": "Cara Menghitung Pendapatan Driver dengan Bagi Hasil 95%",
    "seoTitle": "Cara Hitung Pendapatan Driver Bagi Hasil 95%",
    "description": "Simulasi sederhana pendapatan per perjalanan untuk mitra pengemudi SEVA dengan potongan platform hanya 5%, plus faktor yang memengaruhi penghasilan.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "cara hitung pendapatan driver ojol",
      "bagi hasil driver ojek online",
      "potongan aplikasi ojol 5 persen"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Mitra pengemudi SEVA membawa pulang 95% dari tarif perjalanan; potongan platform hanya 5%. Berikut cara menghitung pendapatan per perjalanan."
      },
      {
        "type": "h2",
        "text": "Rumus sederhana"
      },
      {
        "type": "p",
        "text": "Pendapatan mitra per perjalanan = tarif perjalanan × 95%. Contoh: untuk tarif SEVA Ride Rp 28.000 (jarak 8 km), bagian mitra adalah Rp 26.600 dan potongan platform Rp 1.400."
      },
      {
        "type": "h2",
        "text": "Contoh tarif perjalanan"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 5,
            "label": "Perjalanan pendek"
          },
          {
            "km": 8,
            "label": "Perjalanan menengah"
          },
          {
            "km": 15,
            "label": "Perjalanan jauh"
          }
        ]
      },
      {
        "type": "p",
        "text": "Kalikan tarif di atas dengan 95% untuk mendapatkan bagian mitra. Bonus mingguan dan insentif jam sibuk menjadi tambahan di luar perhitungan ini."
      },
      {
        "type": "h2",
        "text": "Faktor yang memengaruhi penghasilan"
      },
      {
        "type": "ul",
        "items": [
          "Jumlah jam aktif dan jumlah perjalanan per hari.",
          "Wilayah dan waktu operasi, termasuk jam sibuk.",
          "Pencapaian target bonus mingguan."
        ]
      },
      {
        "type": "note",
        "text": "Perhitungan ini adalah ilustrasi, bukan jaminan penghasilan. Rincian pendapatan setiap perjalanan tersedia di aplikasi SEVA Driver."
      },
      {
        "type": "cta",
        "text": "Lihat syarat dan keuntungan menjadi mitra pengemudi.",
        "href": "/partner/driver",
        "label": "Gabung jadi driver"
      }
    ],
    "related": [
      {
        "href": "/blog/cara-daftar-driver-ojek-online",
        "label": "Cara daftar driver"
      },
      {
        "href": "/partner/driver",
        "label": "Halaman mitra pengemudi"
      }
    ]
  },
  {
    "slug": "mengenal-seva-food",
    "title": "Mengenal SEVA Food: Layanan Pesan Antar Makanan yang Segera Hadir",
    "seoTitle": "Mengenal SEVA Food: Pesan Antar Makanan",
    "description": "Apa itu SEVA Food, kapan bisa digunakan, dan bagaimana pemilik restoran atau UMKM kuliner bisa mendaftar lebih awal sebagai merchant.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "seva food",
      "pesan antar makanan jabodetabek",
      "daftar merchant pesan antar makanan"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "SEVA Food adalah layanan pesan antar makanan dari mitra restoran dan UMKM kuliner yang sedang disiapkan SEVA. Saat ini layanan masih dalam tahap integrasi merchant dan belum dapat dipesan."
      },
      {
        "type": "h2",
        "text": "Apa yang bisa diharapkan"
      },
      {
        "type": "ul",
        "items": [
          "Pilihan menu dari resto dan UMKM kuliner lokal di Jabodetabek.",
          "Pesanan diantar mitra pengemudi SEVA dengan tas khusus pengantaran.",
          "Pembayaran terhubung dengan SEVA eWallet dan metode lain di aplikasi."
        ]
      },
      {
        "type": "h2",
        "text": "Untuk pemilik restoran dan UMKM"
      },
      {
        "type": "p",
        "text": "Pemilik restoran, kafe, atau usaha kuliner dapat mendaftar lebih awal tanpa biaya registrasi. Tim SEVA akan menghubungi saat onboarding dibuka."
      },
      {
        "type": "p",
        "text": "Pengumuman peluncuran akan disampaikan melalui aplikasi SEVA dan Instagram @seva.taxi."
      },
      {
        "type": "cta",
        "text": "Daftarkan usaha kuliner Anda sebagai merchant.",
        "href": "/services/food#daftar-merchant",
        "label": "Daftar merchant"
      }
    ],
    "related": [
      {
        "href": "/services/food",
        "label": "Tentang SEVA Food"
      },
      {
        "href": "/blog/kirim-hampers-dan-kue-dengan-kurir-instan",
        "label": "Kirim hampers & kue"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-pusat-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Jakarta Pusat ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Jakarta Pusat ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Jakarta Pusat ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online jakarta pusat ke bandara soekarno hatta",
      "tarif taksi jakarta pusat ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari kawasan Thamrin, Sudirman, dan Monas menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Jakarta Pusat"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 22,
            "label": "Dari sisi Jakarta Pusat yang lebih dekat ke bandara"
          },
          {
            "km": 27,
            "label": "Contoh perjalanan rata-rata dari Jakarta Pusat"
          },
          {
            "km": 32,
            "label": "Dari sisi Jakarta Pusat yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-selatan-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Jakarta Selatan ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Jakarta Selatan ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Jakarta Selatan ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online jakarta selatan ke bandara soekarno hatta",
      "tarif taksi jakarta selatan ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari SCBD, Kuningan, dan Kebayoran menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Jakarta Selatan"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 30,
            "label": "Dari sisi Jakarta Selatan yang lebih dekat ke bandara"
          },
          {
            "km": 35,
            "label": "Contoh perjalanan rata-rata dari Jakarta Selatan"
          },
          {
            "km": 40,
            "label": "Dari sisi Jakarta Selatan yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-barat-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Jakarta Barat ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Jakarta Barat ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Jakarta Barat ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online jakarta barat ke bandara soekarno hatta",
      "tarif taksi jakarta barat ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari Puri Indah, Grogol, dan Kebon Jeruk menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Jakarta Barat"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Dari sisi Jakarta Barat yang lebih dekat ke bandara"
          },
          {
            "km": 20,
            "label": "Contoh perjalanan rata-rata dari Jakarta Barat"
          },
          {
            "km": 25,
            "label": "Dari sisi Jakarta Barat yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-utara-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Jakarta Utara ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Jakarta Utara ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Jakarta Utara ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online jakarta utara ke bandara soekarno hatta",
      "tarif taksi jakarta utara ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari PIK, Pluit, dan Kelapa Gading menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Jakarta Utara"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 20,
            "label": "Dari sisi Jakarta Utara yang lebih dekat ke bandara"
          },
          {
            "km": 25,
            "label": "Contoh perjalanan rata-rata dari Jakarta Utara"
          },
          {
            "km": 30,
            "label": "Dari sisi Jakarta Utara yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-timur-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Jakarta Timur ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Jakarta Timur ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Jakarta Timur ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online jakarta timur ke bandara soekarno hatta",
      "tarif taksi jakarta timur ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari Cawang, Rawamangun, dan Cakung menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Jakarta Timur"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 35,
            "label": "Dari sisi Jakarta Timur yang lebih dekat ke bandara"
          },
          {
            "km": 40,
            "label": "Contoh perjalanan rata-rata dari Jakarta Timur"
          },
          {
            "km": 45,
            "label": "Dari sisi Jakarta Timur yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-tangerang-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Kota Tangerang ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Kota Tangerang ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Kota Tangerang ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online kota tangerang ke bandara soekarno hatta",
      "tarif taksi kota tangerang ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari pusat Kota Tangerang dan sekitarnya menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Kota Tangerang"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 10,
            "label": "Dari sisi Kota Tangerang yang lebih dekat ke bandara"
          },
          {
            "km": 15,
            "label": "Contoh perjalanan rata-rata dari Kota Tangerang"
          },
          {
            "km": 20,
            "label": "Dari sisi Kota Tangerang yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-bsd-tangerang-selatan-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari BSD & Tangerang Selatan ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi BSD & Tangerang Selatan ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari BSD & Tangerang Selatan ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online bsd & tangerang selatan ke bandara soekarno hatta",
      "tarif taksi bsd & tangerang selatan ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari BSD City, Alam Sutera, dan Serpong menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari BSD & Tangerang Selatan"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 30,
            "label": "Dari sisi BSD & Tangerang Selatan yang lebih dekat ke bandara"
          },
          {
            "km": 35,
            "label": "Contoh perjalanan rata-rata dari BSD & Tangerang Selatan"
          },
          {
            "km": 40,
            "label": "Dari sisi BSD & Tangerang Selatan yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-bintaro-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Bintaro ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Bintaro ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Bintaro ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online bintaro ke bandara soekarno hatta",
      "tarif taksi bintaro ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari kawasan Bintaro Jaya menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Bintaro"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 25,
            "label": "Dari sisi Bintaro yang lebih dekat ke bandara"
          },
          {
            "km": 30,
            "label": "Contoh perjalanan rata-rata dari Bintaro"
          },
          {
            "km": 35,
            "label": "Dari sisi Bintaro yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-depok-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Depok ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Depok ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Depok ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online depok ke bandara soekarno hatta",
      "tarif taksi depok ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari Margonda, Cinere, dan Sawangan menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Depok"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 45,
            "label": "Dari sisi Depok yang lebih dekat ke bandara"
          },
          {
            "km": 50,
            "label": "Contoh perjalanan rata-rata dari Depok"
          },
          {
            "km": 55,
            "label": "Dari sisi Depok yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-bekasi-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Bekasi ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Bekasi ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Bekasi ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online bekasi ke bandara soekarno hatta",
      "tarif taksi bekasi ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari Bekasi Barat, Summarecon, dan Harapan Indah menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Bekasi"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 45,
            "label": "Dari sisi Bekasi yang lebih dekat ke bandara"
          },
          {
            "km": 50,
            "label": "Contoh perjalanan rata-rata dari Bekasi"
          },
          {
            "km": 55,
            "label": "Dari sisi Bekasi yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-bogor-ke-bandara-soekarno-hatta",
    "title": "Taksi Online dari Bogor ke Bandara Soekarno-Hatta: Estimasi Tarif",
    "seoTitle": "Taksi Online Bogor ke Bandara Soetta",
    "description": "Estimasi tarif SEVA Car dari Bogor ke Bandara Soekarno-Hatta (CGK), kapasitas koper, biaya tol, dan tips berangkat agar tidak terlambat.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "taksi online bogor ke bandara soekarno hatta",
      "tarif taksi bogor ke cgk",
      "taksi ke bandara soetta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Berangkat dari pusat Kota Bogor dan Sentul menuju Bandara Soekarno-Hatta? SEVA Car menjemput Anda di depan rumah atau lobi gedung dengan mobil MPV yang nyaman, sehingga Anda tidak perlu repot membawa koper ke titik transportasi umum."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car dari Bogor"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 65,
            "label": "Dari sisi Bogor yang lebih dekat ke bandara"
          },
          {
            "km": 70,
            "label": "Contoh perjalanan rata-rata dari Bogor"
          },
          {
            "km": 75,
            "label": "Dari sisi Bogor yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Biaya tol dan parkir"
      },
      {
        "type": "p",
        "text": "Tarif di aplikasi adalah tarif perjalanan. Biaya tol yang dilalui dan tiket parkir resmi bandara ditanggung penumpang sesuai tarif riil."
      },
      {
        "type": "h2",
        "text": "Tips berangkat ke bandara"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan, terutama pada jam sibuk pagi dan sore.",
          "SEVA Car memuat hingga 4 penumpang dengan sekitar 2 koper medium dan 2 tas ransel; pesan dua mobil bila barang lebih banyak.",
          "Pembatalan SEVA Car dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Aktifkan Bagikan Perjalanan agar keluarga bisa memantau rute Anda."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap perjalanan ke Bandara Soekarno-Hatta.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Panduan bandara CGK"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Taksi online ke Bandara Soekarno-Hatta"
      },
      {
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-pusat-ke-bandara-halim",
    "title": "Taksi & Ojek Online dari Jakarta Pusat ke Bandara Halim: Estimasi Tarif",
    "seoTitle": "Taksi Online Jakarta Pusat ke Bandara Halim",
    "description": "Estimasi tarif SEVA Car dan SEVA Ride dari Jakarta Pusat ke Bandara Halim Perdanakusuma (HLP), plus tips penjemputan di area kedatangan.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "taksi online jakarta pusat ke bandara halim",
      "transportasi ke bandara halim"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bandara Halim Perdanakusuma (HLP) di Jakarta Timur dapat dijangkau dari Jakarta Pusat dengan SEVA Car, atau SEVA Ride bila Anda hanya membawa tas kecil."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Contoh perjalanan dari Jakarta Pusat"
          },
          {
            "km": 20,
            "label": "Dari sisi Jakarta Pusat yang lebih jauh"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 15,
            "label": "Contoh perjalanan dari Jakarta Pusat"
          }
        ]
      },
      {
        "type": "p",
        "text": "SEVA Ride memuat 1 penumpang dengan 1 ransel atau tas laptop (maksimal 10 kg). Untuk koper, pilih SEVA Car."
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Saat tiba di Bandara Halim"
      },
      {
        "type": "p",
        "text": "Penjemputan tersedia di area lobi kedatangan. Pesan setelah bagasi diambil, lalu cocokkan nama driver, nomor plat, dan foto kendaraan di aplikasi."
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap ke Bandara Halim.",
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Panduan Bandara Halim"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Ojek & taksi online ke Bandara Halim"
      },
      {
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Taksi dari Stasiun Whoosh Halim"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-selatan-ke-bandara-halim",
    "title": "Taksi & Ojek Online dari Jakarta Selatan ke Bandara Halim: Estimasi Tarif",
    "seoTitle": "Taksi Online Jakarta Selatan ke Bandara Halim",
    "description": "Estimasi tarif SEVA Car dan SEVA Ride dari Jakarta Selatan ke Bandara Halim Perdanakusuma (HLP), plus tips penjemputan di area kedatangan.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "taksi online jakarta selatan ke bandara halim",
      "transportasi ke bandara halim"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bandara Halim Perdanakusuma (HLP) di Jakarta Timur dapat dijangkau dari Jakarta Selatan dengan SEVA Car, atau SEVA Ride bila Anda hanya membawa tas kecil."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Contoh perjalanan dari Jakarta Selatan"
          },
          {
            "km": 20,
            "label": "Dari sisi Jakarta Selatan yang lebih jauh"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 15,
            "label": "Contoh perjalanan dari Jakarta Selatan"
          }
        ]
      },
      {
        "type": "p",
        "text": "SEVA Ride memuat 1 penumpang dengan 1 ransel atau tas laptop (maksimal 10 kg). Untuk koper, pilih SEVA Car."
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Saat tiba di Bandara Halim"
      },
      {
        "type": "p",
        "text": "Penjemputan tersedia di area lobi kedatangan. Pesan setelah bagasi diambil, lalu cocokkan nama driver, nomor plat, dan foto kendaraan di aplikasi."
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap ke Bandara Halim.",
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Panduan Bandara Halim"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Ojek & taksi online ke Bandara Halim"
      },
      {
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Taksi dari Stasiun Whoosh Halim"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-utara-ke-bandara-halim",
    "title": "Taksi & Ojek Online dari Jakarta Utara ke Bandara Halim: Estimasi Tarif",
    "seoTitle": "Taksi Online Jakarta Utara ke Bandara Halim",
    "description": "Estimasi tarif SEVA Car dan SEVA Ride dari Jakarta Utara ke Bandara Halim Perdanakusuma (HLP), plus tips penjemputan di area kedatangan.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "taksi online jakarta utara ke bandara halim",
      "transportasi ke bandara halim"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bandara Halim Perdanakusuma (HLP) di Jakarta Timur dapat dijangkau dari Jakarta Utara dengan SEVA Car, atau SEVA Ride bila Anda hanya membawa tas kecil."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 20,
            "label": "Contoh perjalanan dari Jakarta Utara"
          },
          {
            "km": 25,
            "label": "Dari sisi Jakarta Utara yang lebih jauh"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 20,
            "label": "Contoh perjalanan dari Jakarta Utara"
          }
        ]
      },
      {
        "type": "p",
        "text": "SEVA Ride memuat 1 penumpang dengan 1 ransel atau tas laptop (maksimal 10 kg). Untuk koper, pilih SEVA Car."
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Saat tiba di Bandara Halim"
      },
      {
        "type": "p",
        "text": "Penjemputan tersedia di area lobi kedatangan. Pesan setelah bagasi diambil, lalu cocokkan nama driver, nomor plat, dan foto kendaraan di aplikasi."
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap ke Bandara Halim.",
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Panduan Bandara Halim"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Ojek & taksi online ke Bandara Halim"
      },
      {
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Taksi dari Stasiun Whoosh Halim"
      }
    ]
  },
  {
    "slug": "taksi-online-bekasi-ke-bandara-halim",
    "title": "Taksi & Ojek Online dari Bekasi ke Bandara Halim: Estimasi Tarif",
    "seoTitle": "Taksi Online Bekasi ke Bandara Halim",
    "description": "Estimasi tarif SEVA Car dan SEVA Ride dari Bekasi ke Bandara Halim Perdanakusuma (HLP), plus tips penjemputan di area kedatangan.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "taksi online bekasi ke bandara halim",
      "transportasi ke bandara halim"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bandara Halim Perdanakusuma (HLP) di Jakarta Timur dapat dijangkau dari Bekasi dengan SEVA Car, atau SEVA Ride bila Anda hanya membawa tas kecil."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 20,
            "label": "Contoh perjalanan dari Bekasi"
          },
          {
            "km": 25,
            "label": "Dari sisi Bekasi yang lebih jauh"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 20,
            "label": "Contoh perjalanan dari Bekasi"
          }
        ]
      },
      {
        "type": "p",
        "text": "SEVA Ride memuat 1 penumpang dengan 1 ransel atau tas laptop (maksimal 10 kg). Untuk koper, pilih SEVA Car."
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Saat tiba di Bandara Halim"
      },
      {
        "type": "p",
        "text": "Penjemputan tersedia di area lobi kedatangan. Pesan setelah bagasi diambil, lalu cocokkan nama driver, nomor plat, dan foto kendaraan di aplikasi."
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap ke Bandara Halim.",
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Panduan Bandara Halim"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Ojek & taksi online ke Bandara Halim"
      },
      {
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Taksi dari Stasiun Whoosh Halim"
      }
    ]
  },
  {
    "slug": "taksi-online-depok-ke-bandara-halim",
    "title": "Taksi & Ojek Online dari Depok ke Bandara Halim: Estimasi Tarif",
    "seoTitle": "Taksi Online Depok ke Bandara Halim",
    "description": "Estimasi tarif SEVA Car dan SEVA Ride dari Depok ke Bandara Halim Perdanakusuma (HLP), plus tips penjemputan di area kedatangan.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "taksi online depok ke bandara halim",
      "transportasi ke bandara halim"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bandara Halim Perdanakusuma (HLP) di Jakarta Timur dapat dijangkau dari Depok dengan SEVA Car, atau SEVA Ride bila Anda hanya membawa tas kecil."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 25,
            "label": "Contoh perjalanan dari Depok"
          },
          {
            "km": 30,
            "label": "Dari sisi Depok yang lebih jauh"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 25,
            "label": "Contoh perjalanan dari Depok"
          }
        ]
      },
      {
        "type": "p",
        "text": "SEVA Ride memuat 1 penumpang dengan 1 ransel atau tas laptop (maksimal 10 kg). Untuk koper, pilih SEVA Car."
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Saat tiba di Bandara Halim"
      },
      {
        "type": "p",
        "text": "Penjemputan tersedia di area lobi kedatangan. Pesan setelah bagasi diambil, lalu cocokkan nama driver, nomor plat, dan foto kendaraan di aplikasi."
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap ke Bandara Halim.",
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Panduan Bandara Halim"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Ojek & taksi online ke Bandara Halim"
      },
      {
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Taksi dari Stasiun Whoosh Halim"
      }
    ]
  },
  {
    "slug": "taksi-online-bogor-ke-bandara-halim",
    "title": "Taksi & Ojek Online dari Bogor ke Bandara Halim: Estimasi Tarif",
    "seoTitle": "Taksi Online Bogor ke Bandara Halim",
    "description": "Estimasi tarif SEVA Car dari Bogor ke Bandara Halim Perdanakusuma (HLP), plus tips penjemputan di area kedatangan.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "taksi online bogor ke bandara halim",
      "transportasi ke bandara halim"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bandara Halim Perdanakusuma (HLP) di Jakarta Timur dapat dijangkau dari Bogor dengan SEVA Car, atau SEVA Ride bila Anda hanya membawa tas kecil."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 45,
            "label": "Contoh perjalanan dari Bogor"
          },
          {
            "km": 50,
            "label": "Dari sisi Bogor yang lebih jauh"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Saat tiba di Bandara Halim"
      },
      {
        "type": "p",
        "text": "Penjemputan tersedia di area lobi kedatangan. Pesan setelah bagasi diambil, lalu cocokkan nama driver, nomor plat, dan foto kendaraan di aplikasi."
      },
      {
        "type": "cta",
        "text": "Baca panduan lengkap ke Bandara Halim.",
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Panduan Bandara Halim"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-bandara-halim",
        "label": "Ojek & taksi online ke Bandara Halim"
      },
      {
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Taksi dari Stasiun Whoosh Halim"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-selatan-ke-stasiun-whoosh-halim",
    "title": "Ke Stasiun Whoosh Halim dari Jakarta Selatan: Estimasi Tarif Taksi & Ojek Online",
    "seoTitle": "Jakarta Selatan ke Stasiun Whoosh Halim: Tarif",
    "description": "Estimasi tarif SEVA Ride dan SEVA Car dari Jakarta Selatan ke Stasiun Kereta Cepat Whoosh Halim, plus tips agar tidak tertinggal kereta.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "jakarta selatan ke stasiun whoosh halim",
      "transportasi ke stasiun kereta cepat halim"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Mengejar jadwal kereta cepat Whoosh dari Jakarta Selatan? Pesan SEVA lebih awal agar tiba di Stasiun Halim dengan waktu cukup untuk naik kereta."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 15,
            "label": "SEVA Ride dari Jakarta Selatan"
          }
        ]
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "SEVA Car dari Jakarta Selatan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan di jam sibuk.",
          "Pilih SEVA Car bila membawa koper atau bepergian berdua hingga berempat.",
          "Biaya tol yang dilalui SEVA Car ditanggung penumpang."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan transportasi dari dan ke Stasiun Whoosh Halim.",
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Panduan Whoosh Halim"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Taksi dari Stasiun Whoosh Halim"
      },
      {
        "href": "/cities",
        "label": "Peta wilayah layanan"
      }
    ]
  },
  {
    "slug": "taksi-online-bekasi-ke-stasiun-whoosh-halim",
    "title": "Ke Stasiun Whoosh Halim dari Bekasi: Estimasi Tarif Taksi & Ojek Online",
    "seoTitle": "Bekasi ke Stasiun Whoosh Halim: Tarif",
    "description": "Estimasi tarif SEVA Ride dan SEVA Car dari Bekasi ke Stasiun Kereta Cepat Whoosh Halim, plus tips agar tidak tertinggal kereta.",
    "category": "Bandara & Stasiun",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "bekasi ke stasiun whoosh halim",
      "transportasi ke stasiun kereta cepat halim"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Mengejar jadwal kereta cepat Whoosh dari Bekasi? Pesan SEVA lebih awal agar tiba di Stasiun Halim dengan waktu cukup untuk naik kereta."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 20,
            "label": "SEVA Ride dari Bekasi"
          }
        ]
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 20,
            "label": "SEVA Car dari Bekasi"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "ul",
        "items": [
          "Beri waktu cadangan untuk kemacetan di jam sibuk.",
          "Pilih SEVA Car bila membawa koper atau bepergian berdua hingga berempat.",
          "Biaya tol yang dilalui SEVA Car ditanggung penumpang."
        ]
      },
      {
        "type": "cta",
        "text": "Baca panduan transportasi dari dan ke Stasiun Whoosh Halim.",
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Panduan Whoosh Halim"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-stasiun-whoosh-halim",
        "label": "Taksi dari Stasiun Whoosh Halim"
      },
      {
        "href": "/cities",
        "label": "Peta wilayah layanan"
      }
    ]
  },
  {
    "slug": "ojek-taksi-online-bekasi-ke-sudirman",
    "title": "Ojek & Taksi Online dari Bekasi ke Sudirman: Estimasi Tarif Harian",
    "seoTitle": "Ojek & Taksi Online Bekasi ke Sudirman",
    "description": "Estimasi tarif SEVA Ride dan Car untuk rute Bekasi ke Sudirman, kapan memilih motor atau mobil, dan tips perjalanan komuter.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "ojek online bekasi ke sudirman",
      "taksi online bekasi ke sudirman"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan dari Bekasi ke kawasan perkantoran Sudirman termasuk rute harian yang padat. Dengan tarif pasti di awal, Anda bisa merencanakan biaya perjalanan tanpa khawatir lonjakan saat jam sibuk atau hujan."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 22,
            "label": "Contoh rute Bekasi ke Sudirman"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 22,
            "label": "Contoh rute Bekasi ke Sudirman"
          },
          {
            "km": 27,
            "label": "Bila rute memutar karena kemacetan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Motor atau mobil?"
      },
      {
        "type": "ul",
        "items": [
          "SEVA Ride: sendirian, barang ringan, ingin menembus macet.",
          "SEVA Car: hingga 4 penumpang, membawa barang, atau saat hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif dan kapasitas semua layanan.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "ojek-taksi-online-tangerang-ke-jakarta-barat",
    "title": "Ojek & Taksi Online dari Tangerang ke Jakarta Barat: Estimasi Tarif Harian",
    "seoTitle": "Ojek & Taksi Online Tangerang ke Jakarta Barat",
    "description": "Estimasi tarif SEVA Ride dan Car untuk rute Tangerang ke Jakarta Barat, kapan memilih motor atau mobil, dan tips perjalanan komuter.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "ojek online tangerang ke jakarta barat",
      "taksi online tangerang ke jakarta barat"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan dari Kota Tangerang ke Jakarta Barat termasuk rute harian yang padat. Dengan tarif pasti di awal, Anda bisa merencanakan biaya perjalanan tanpa khawatir lonjakan saat jam sibuk atau hujan."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 15,
            "label": "Contoh rute Tangerang ke Jakarta Barat"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Contoh rute Tangerang ke Jakarta Barat"
          },
          {
            "km": 20,
            "label": "Bila rute memutar karena kemacetan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Motor atau mobil?"
      },
      {
        "type": "ul",
        "items": [
          "SEVA Ride: sendirian, barang ringan, ingin menembus macet.",
          "SEVA Car: hingga 4 penumpang, membawa barang, atau saat hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif dan kapasitas semua layanan.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "ojek-taksi-online-pik-ke-sudirman",
    "title": "Ojek & Taksi Online dari PIK ke Sudirman: Estimasi Tarif Harian",
    "seoTitle": "Ojek & Taksi Online PIK ke Sudirman",
    "description": "Estimasi tarif SEVA Ride dan Car untuk rute PIK ke Sudirman, kapan memilih motor atau mobil, dan tips perjalanan komuter.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "ojek online pik ke sudirman",
      "taksi online pik ke sudirman"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan dari Pantai Indah Kapuk ke Sudirman termasuk rute harian yang padat. Dengan tarif pasti di awal, Anda bisa merencanakan biaya perjalanan tanpa khawatir lonjakan saat jam sibuk atau hujan."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 22,
            "label": "Contoh rute PIK ke Sudirman"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 22,
            "label": "Contoh rute PIK ke Sudirman"
          },
          {
            "km": 27,
            "label": "Bila rute memutar karena kemacetan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Motor atau mobil?"
      },
      {
        "type": "ul",
        "items": [
          "SEVA Ride: sendirian, barang ringan, ingin menembus macet.",
          "SEVA Car: hingga 4 penumpang, membawa barang, atau saat hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif dan kapasitas semua layanan.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "ojek-taksi-online-kelapa-gading-ke-sudirman",
    "title": "Ojek & Taksi Online dari Kelapa Gading ke Sudirman: Estimasi Tarif Harian",
    "seoTitle": "Ojek & Taksi Online Kelapa Gading ke Sudirman",
    "description": "Estimasi tarif SEVA Ride dan Car untuk rute Kelapa Gading ke Sudirman, kapan memilih motor atau mobil, dan tips perjalanan komuter.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "ojek online kelapa gading ke sudirman",
      "taksi online kelapa gading ke sudirman"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan dari Kelapa Gading ke Sudirman termasuk rute harian yang padat. Dengan tarif pasti di awal, Anda bisa merencanakan biaya perjalanan tanpa khawatir lonjakan saat jam sibuk atau hujan."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 15,
            "label": "Contoh rute Kelapa Gading ke Sudirman"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Contoh rute Kelapa Gading ke Sudirman"
          },
          {
            "km": 20,
            "label": "Bila rute memutar karena kemacetan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Motor atau mobil?"
      },
      {
        "type": "ul",
        "items": [
          "SEVA Ride: sendirian, barang ringan, ingin menembus macet.",
          "SEVA Car: hingga 4 penumpang, membawa barang, atau saat hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif dan kapasitas semua layanan.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "ojek-taksi-online-cibubur-ke-jakarta",
    "title": "Ojek & Taksi Online dari Cibubur ke Jakarta: Estimasi Tarif Harian",
    "seoTitle": "Ojek & Taksi Online Cibubur ke Jakarta",
    "description": "Estimasi tarif SEVA Ride dan Car untuk rute Cibubur ke Jakarta, kapan memilih motor atau mobil, dan tips perjalanan komuter.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "ojek online cibubur ke jakarta",
      "taksi online cibubur ke jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan dari Cibubur ke pusat Jakarta termasuk rute harian yang padat. Dengan tarif pasti di awal, Anda bisa merencanakan biaya perjalanan tanpa khawatir lonjakan saat jam sibuk atau hujan."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 25,
            "label": "Contoh rute Cibubur ke Jakarta"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 25,
            "label": "Contoh rute Cibubur ke Jakarta"
          },
          {
            "km": 30,
            "label": "Bila rute memutar karena kemacetan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Motor atau mobil?"
      },
      {
        "type": "ul",
        "items": [
          "SEVA Ride: sendirian, barang ringan, ingin menembus macet.",
          "SEVA Car: hingga 4 penumpang, membawa barang, atau saat hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif dan kapasitas semua layanan.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "ojek-taksi-online-bintaro-ke-senayan",
    "title": "Ojek & Taksi Online dari Bintaro ke Senayan: Estimasi Tarif Harian",
    "seoTitle": "Ojek & Taksi Online Bintaro ke Senayan",
    "description": "Estimasi tarif SEVA Ride dan Car untuk rute Bintaro ke Senayan, kapan memilih motor atau mobil, dan tips perjalanan komuter.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "ojek online bintaro ke senayan",
      "taksi online bintaro ke senayan"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan dari Bintaro ke Senayan dan GBK termasuk rute harian yang padat. Dengan tarif pasti di awal, Anda bisa merencanakan biaya perjalanan tanpa khawatir lonjakan saat jam sibuk atau hujan."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 15,
            "label": "Contoh rute Bintaro ke Senayan"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Contoh rute Bintaro ke Senayan"
          },
          {
            "km": 20,
            "label": "Bila rute memutar karena kemacetan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Motor atau mobil?"
      },
      {
        "type": "ul",
        "items": [
          "SEVA Ride: sendirian, barang ringan, ingin menembus macet.",
          "SEVA Car: hingga 4 penumpang, membawa barang, atau saat hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif dan kapasitas semua layanan.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "ojek-taksi-online-ciputat-ke-jakarta-selatan",
    "title": "Ojek & Taksi Online dari Ciputat ke Jakarta Selatan: Estimasi Tarif Harian",
    "seoTitle": "Ojek & Taksi Online Ciputat ke Jakarta Selatan",
    "description": "Estimasi tarif SEVA Ride dan Car untuk rute Ciputat ke Jakarta Selatan, kapan memilih motor atau mobil, dan tips perjalanan komuter.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "ojek online ciputat ke jakarta selatan",
      "taksi online ciputat ke jakarta selatan"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan dari Ciputat ke Jakarta Selatan termasuk rute harian yang padat. Dengan tarif pasti di awal, Anda bisa merencanakan biaya perjalanan tanpa khawatir lonjakan saat jam sibuk atau hujan."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Ride"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 12,
            "label": "Contoh rute Ciputat ke Jakarta Selatan"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 12,
            "label": "Contoh rute Ciputat ke Jakarta Selatan"
          },
          {
            "km": 17,
            "label": "Bila rute memutar karena kemacetan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Motor atau mobil?"
      },
      {
        "type": "ul",
        "items": [
          "SEVA Ride: sendirian, barang ringan, ingin menembus macet.",
          "SEVA Car: hingga 4 penumpang, membawa barang, atau saat hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif dan kapasitas semua layanan.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "ojek-taksi-online-cikarang-ke-jakarta",
    "title": "Ojek & Taksi Online dari Cikarang ke Jakarta: Estimasi Tarif Harian",
    "seoTitle": "Ojek & Taksi Online Cikarang ke Jakarta",
    "description": "Estimasi tarif SEVA Car untuk rute Cikarang ke Jakarta, kapan memilih motor atau mobil, dan tips perjalanan komuter.",
    "category": "Tarif & Biaya",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "ojek online cikarang ke jakarta",
      "taksi online cikarang ke jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan dari Cikarang ke Jakarta termasuk rute harian yang padat. Dengan tarif pasti di awal, Anda bisa merencanakan biaya perjalanan tanpa khawatir lonjakan saat jam sibuk atau hujan."
      },
      {
        "type": "h2",
        "text": "Estimasi tarif SEVA Car"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 40,
            "label": "Contoh rute Cikarang ke Jakarta"
          },
          {
            "km": 45,
            "label": "Bila rute memutar karena kemacetan"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "h2",
        "text": "Motor atau mobil?"
      },
      {
        "type": "ul",
        "items": [
          "Untuk jarak sejauh ini, SEVA Car lebih nyaman, terutama bersama keluarga atau rekan.",
          "SEVA Car: hingga 4 penumpang, membawa barang, atau saat hujan.",
          "Biaya tol untuk SEVA Car ditanggung penumpang sesuai tarif riil."
        ]
      },
      {
        "type": "cta",
        "text": "Bandingkan tarif dan kapasitas semua layanan.",
        "href": "/services",
        "label": "Bandingkan layanan"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Ojek atau taksi online?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Tarif pasti tanpa lonjakan"
      }
    ]
  },
  {
    "slug": "kirim-laptop-dengan-kurir-instan",
    "title": "Cara Kirim Laptop & Barang Elektronik dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Kirim Laptop & Barang Elektronik via Kurir Instan",
    "description": "Cara mengirim laptop, tablet, atau aksesoris elektronik dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim laptop & barang elektronik kurir instan",
      "kurir instan laptop & barang elektronik jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim laptop, tablet, atau aksesoris elektronik hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Bungkus dengan bubble wrap tebal dan masukkan ke kotak kardus yang pas.",
          "Lepas aksesoris kecil dan masukkan ke kantong terpisah.",
          "Pastikan berat total tidak lebih dari 20 kg."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-pesanan-online-shop-dengan-kurir-instan",
    "title": "Cara Kirim Pesanan Online Shop dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Cara Kirim Pesanan Online Shop dengan Kurir Instan",
    "description": "Cara mengirim pesanan pelanggan toko online seperti pakaian, tas, dan sepatu dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim pesanan online shop kurir instan",
      "kurir instan pesanan online shop jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim pesanan pelanggan toko online seperti pakaian, tas, dan sepatu hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Gunakan plastik polymailer atau kardus yang rapi.",
          "Cantumkan nama dan nomor penerima dengan jelas.",
          "Bagikan tautan pelacakan agar pelanggan siap menerima paket."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-kunci-yang-tertinggal-dengan-kurir-instan",
    "title": "Cara Kirim Kunci yang Tertinggal dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Kirim Kunci yang Tertinggal via Kurir Instan",
    "description": "Cara mengirim kunci rumah, kunci kendaraan, atau kartu akses dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim kunci yang tertinggal kurir instan",
      "kurir instan kunci yang tertinggal jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim kunci rumah, kunci kendaraan, atau kartu akses hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Masukkan ke amplop kecil yang tertutup agar tidak hilang.",
          "Pastikan penerima siap di lokasi saat kurir tiba.",
          "Simpan foto serah terima sebagai bukti."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-paspor-dan-berkas-penting-dengan-kurir-instan",
    "title": "Cara Kirim Paspor & Berkas Penting dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Kirim Paspor & Berkas Penting via Kurir Instan",
    "description": "Cara mengirim paspor, ijazah, atau berkas legal dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim paspor & berkas penting kurir instan",
      "kurir instan paspor & berkas penting jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim paspor, ijazah, atau berkas legal hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Masukkan ke map plastik lalu amplop tertutup.",
          "Gunakan pengiriman langsung tanpa transit agar berkas tidak berpindah tangan berkali-kali.",
          "Pastikan penerima yang benar menerima langsung dan cek foto serah terima."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-pakaian-dan-sepatu-dengan-kurir-instan",
    "title": "Cara Kirim Pakaian & Sepatu dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Cara Kirim Pakaian & Sepatu dengan Kurir Instan",
    "description": "Cara mengirim pakaian, kain, tas, dan sepatu dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim pakaian & sepatu kurir instan",
      "kurir instan pakaian & sepatu jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim pakaian, kain, tas, dan sepatu hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Lipat rapi dan bungkus dengan plastik agar tidak basah.",
          "Sepatu sebaiknya dimasukkan ke kotaknya.",
          "Pastikan ukuran paket tidak lebih dari 40 × 40 × 40 cm."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-sampel-produk-ke-klien-dengan-kurir-instan",
    "title": "Cara Kirim Sampel Produk ke Klien dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Kirim Sampel Produk ke Klien via Kurir Instan",
    "description": "Cara mengirim sampel produk untuk presentasi atau penawaran ke klien dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim sampel produk ke klien kurir instan",
      "kurir instan sampel produk ke klien jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim sampel produk untuk presentasi atau penawaran ke klien hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Kemas sampel dengan rapi dan beri label perusahaan.",
          "Sertakan dokumen pendukung dalam amplop terpisah.",
          "Gunakan akun korporat bila pengiriman dilakukan rutin."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-aksesoris-hp-dengan-kurir-instan",
    "title": "Cara Kirim Aksesoris HP & Suku Cadang dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Kirim Aksesoris HP & Suku Cadang via Kurir Instan",
    "description": "Cara mengirim aksesoris ponsel, charger, atau suku cadang kecil dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim aksesoris hp & suku cadang kurir instan",
      "kurir instan aksesoris hp & suku cadang jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim aksesoris ponsel, charger, atau suku cadang kecil hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Gunakan bubble wrap tebal untuk barang yang mudah pecah.",
          "Satukan barang kecil dalam satu kantong agar tidak tercecer.",
          "Cantumkan daftar isi paket untuk penerima."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-makanan-kering-dan-oleh-oleh-dengan-kurir-instan",
    "title": "Cara Kirim Makanan Kering & Oleh-Oleh dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Kirim Makanan Kering & Oleh-Oleh via Kurir Instan",
    "description": "Cara mengirim makanan kering, kue kemasan, dan oleh-oleh dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim makanan kering & oleh-oleh kurir instan",
      "kurir instan makanan kering & oleh-oleh jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim makanan kering, kue kemasan, dan oleh-oleh hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Pastikan kemasan tertutup rapat dan higienis.",
          "Gunakan kardus agar tidak penyok di perjalanan.",
          "Hindari makanan berkuah yang mudah tumpah."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-hadiah-ulang-tahun-dengan-kurir-instan",
    "title": "Cara Kirim Hadiah Ulang Tahun dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Cara Kirim Hadiah Ulang Tahun dengan Kurir Instan",
    "description": "Cara mengirim kado dan hadiah untuk orang terdekat dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim hadiah ulang tahun kurir instan",
      "kurir instan hadiah ulang tahun jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim kado dan hadiah untuk orang terdekat hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Bungkus kado dengan rapi lalu masukkan ke kardus pelindung.",
          "Isi rongga kosong agar kado tidak bergeser.",
          "Bagikan tautan pelacakan agar kejutan tepat waktu."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "kirim-berkas-tender-dan-proposal-dengan-kurir-instan",
    "title": "Cara Kirim Berkas Tender & Proposal dengan Kurir Instan di Jabodetabek",
    "seoTitle": "Kirim Berkas Tender & Proposal via Kurir Instan",
    "description": "Cara mengirim berkas tender, proposal, atau kontrak yang dikejar tenggat dengan SEVA Send: tips kemasan, batas berat dan ukuran, serta estimasi ongkir.",
    "category": "Pengiriman",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kirim berkas tender & proposal kurir instan",
      "kurir instan berkas tender & proposal jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Butuh mengirim berkas tender, proposal, atau kontrak yang dikejar tenggat hari ini? SEVA Send mengantar langsung dari pengirim ke penerima tanpa transit gudang, dengan pelacakan live di peta."
      },
      {
        "type": "h2",
        "text": "Cara mengemas"
      },
      {
        "type": "ul",
        "items": [
          "Masukkan berkas ke map tahan air dan amplop tertutup.",
          "Pesan lebih awal agar berkas tiba sebelum tenggat.",
          "Simpan foto serah terima sebagai bukti pengiriman."
        ]
      },
      {
        "type": "h2",
        "text": "Batas pengiriman"
      },
      {
        "type": "ul",
        "items": [
          "Berat maksimal 20 kg per pengiriman.",
          "Ukuran maksimal 40 × 40 × 40 cm.",
          "Barang mudah terbakar, senjata, narkotika, uang tunai, dan hewan hidup tidak dapat dikirim."
        ]
      },
      {
        "type": "h2",
        "text": "Estimasi ongkir"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Satu kawasan"
          },
          {
            "km": 10,
            "label": "Antar kecamatan"
          },
          {
            "km": 20,
            "label": "Antarkota di Jabodetabek"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Lihat detail layanan SEVA Send.",
        "href": "/services/send",
        "label": "Detail SEVA Send"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Aturan kirim paket instan"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Ongkir kurir instan antarkota"
      }
    ]
  },
  {
    "slug": "tips-naik-ojek-online-saat-hujan",
    "title": "Tips Naik Ojek Online Saat Hujan agar Tetap Nyaman",
    "seoTitle": "Tips Naik Ojek Online Saat Hujan",
    "description": "Cara tetap nyaman naik ojek online saat hujan: jas hujan cadangan, menjaga barang tetap kering, dan kapan sebaiknya beralih ke SEVA Car.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "tips naik ojek online saat hujan agar tetap nyaman"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Hujan di Jabodetabek sering datang tiba-tiba. Berikut cara agar perjalanan dengan SEVA Ride tetap nyaman."
      },
      {
        "type": "ul",
        "items": [
          "Mitra SEVA Ride menyediakan jas hujan cadangan untuk penumpang.",
          "Masukkan ponsel dan dokumen ke kantong plastik di dalam tas.",
          "Bila hujan sangat deras atau membawa barang penting, pilih SEVA Car.",
          "Tarif tidak naik saat hujan karena SEVA menerapkan tarif pasti."
        ]
      },
      {
        "type": "cta",
        "text": "Lihat perlengkapan dan standar SEVA Ride.",
        "href": "/services/ride",
        "label": "Detail SEVA Ride"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "cara-memilih-titik-jemput-yang-tepat",
    "title": "Cara Memilih Titik Jemput yang Tepat agar Driver Cepat Datang",
    "seoTitle": "Cara Memilih Titik Jemput yang Tepat",
    "description": "Tips menentukan titik jemput di aplikasi SEVA: geser pin ke gerbang atau lobi, hindari area yang sulit dijangkau, dan beri catatan untuk driver.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara memilih titik jemput yang tepat agar driver cepat datan"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Titik jemput yang akurat mempercepat penjemputan dan menghindari driver memutar jauh."
      },
      {
        "type": "ol",
        "items": [
          "Geser pin hingga tepat di gerbang, lobi, atau pintu gedung.",
          "Hindari titik di tengah jalan satu arah atau area yang dilarang berhenti.",
          "Di mal atau gedung besar, pilih pintu yang mudah dijangkau kendaraan.",
          "Gunakan chat di aplikasi untuk memberi patokan tambahan."
        ]
      },
      {
        "type": "cta",
        "text": "Pelajari alur pemesanan SEVA.",
        "href": "/how-it-works",
        "label": "Cara kerja"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "tips-perjalanan-bersama-anak",
    "title": "Tips Perjalanan dengan Anak Naik Taksi Online",
    "seoTitle": "Tips Naik Taksi Online Bersama Anak",
    "description": "Panduan bepergian bersama anak dengan SEVA Car: kapasitas penumpang, barang bawaan, sabuk pengaman, dan fitur bagikan perjalanan.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "tips perjalanan dengan anak naik taksi online"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bepergian bersama anak butuh kendaraan yang lega dan nyaman. SEVA Car memuat hingga 4 penumpang dewasa dengan bagasi sekitar 2 koper medium dan 2 tas ransel."
      },
      {
        "type": "ul",
        "items": [
          "Pastikan semua penumpang memakai sabuk pengaman.",
          "Siapkan barang anak dalam satu tas agar mudah dijangkau.",
          "Bagikan perjalanan kepada pasangan atau keluarga.",
          "Untuk anak, gunakan SEVA Car, bukan SEVA Ride yang hanya untuk 1 penumpang."
        ]
      },
      {
        "type": "cta",
        "text": "Lihat detail SEVA Car.",
        "href": "/services/car",
        "label": "Detail SEVA Car"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "tips-hemat-ongkos-transportasi-bulanan",
    "title": "Tips Hemat Ongkos Transportasi Bulanan di Jabodetabek",
    "seoTitle": "Tips Hemat Ongkos Transportasi Bulanan",
    "description": "Cara mengatur ongkos transportasi bulanan: kombinasikan KRL/MRT dengan ojek online, pilih layanan sesuai kebutuhan, dan pantau riwayat perjalanan.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "tips hemat ongkos transportasi bulanan di jabodetabek"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Ongkos transportasi harian bisa menjadi pengeluaran besar setiap bulan. Beberapa kebiasaan berikut membantu menekannya."
      },
      {
        "type": "ul",
        "items": [
          "Gunakan SEVA Ride untuk jarak pendek dan perjalanan sendiri.",
          "Kombinasikan KRL atau MRT untuk jarak jauh dengan ojek ke stasiun.",
          "Bepergian bersama rekan? SEVA Car bisa lebih hemat per orang.",
          "Pantau pengeluaran lewat riwayat perjalanan di aplikasi.",
          "Tarif pasti membuat anggaran lebih mudah direncanakan."
        ]
      },
      {
        "type": "cta",
        "text": "Lihat contoh tarif ojek online.",
        "href": "/blog/tarif-ojek-online-jakarta",
        "label": "Tarif ojek online"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "cara-membatalkan-pesanan-seva",
    "title": "Cara Membatalkan Pesanan SEVA dan Ketentuannya",
    "seoTitle": "Cara Membatalkan Pesanan SEVA",
    "description": "Ketentuan pembatalan pesanan SEVA: gratis dalam 5 menit pertama untuk SEVA Car, ketentuan layanan lain di aplikasi, dan dampak pembatalan berulang.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara membatalkan pesanan seva dan ketentuannya"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Rencana bisa berubah. Berikut hal yang perlu diketahui sebelum membatalkan pesanan."
      },
      {
        "type": "ul",
        "items": [
          "SEVA Car: pembatalan dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.",
          "Ketentuan setelah 5 menit dan untuk layanan lain ditampilkan di aplikasi saat memesan.",
          "Pembatalan berulang tanpa alasan wajar dapat mengakibatkan pembatasan akun."
        ]
      },
      {
        "type": "p",
        "text": "Bila ingin mengubah tujuan, hubungi driver melalui chat di aplikasi sebelum memutuskan membatalkan."
      },
      {
        "type": "cta",
        "text": "Baca Syarat & Ketentuan layanan.",
        "href": "/terms",
        "label": "Syarat & Ketentuan"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "cara-menghubungi-driver-dengan-aman",
    "title": "Cara Menghubungi Driver dengan Aman Lewat Aplikasi",
    "seoTitle": "Cara Menghubungi Driver dengan Aman",
    "description": "Cara chat dan telepon driver melalui aplikasi SEVA dengan nomor tersamar, serta kapan sebaiknya menghubungi tim bantuan.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara menghubungi driver dengan aman lewat aplikasi"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Komunikasi dengan driver sebaiknya selalu dilakukan melalui aplikasi agar privasi Anda terjaga."
      },
      {
        "type": "ul",
        "items": [
          "Gunakan fitur chat untuk memberi patokan titik jemput.",
          "Gunakan telepon di aplikasi; nomor HP Anda disamarkan.",
          "Hindari berbagi nomor pribadi atau data lain di luar aplikasi.",
          "Untuk kendala di luar perjalanan, hubungi tim bantuan SEVA."
        ]
      },
      {
        "type": "cta",
        "text": "Lihat fitur keselamatan SEVA.",
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "cara-menggunakan-fitur-bagikan-perjalanan",
    "title": "Cara Menggunakan Fitur Bagikan Perjalanan di SEVA",
    "seoTitle": "Cara Pakai Fitur Bagikan Perjalanan",
    "description": "Panduan memakai fitur Bagikan Perjalanan agar keluarga atau teman dapat memantau posisi, pelat nomor, dan rute Anda secara live.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara menggunakan fitur bagikan perjalanan di seva"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bagikan Perjalanan memungkinkan orang terdekat memantau perjalanan Anda secara real-time."
      },
      {
        "type": "ol",
        "items": [
          "Setelah driver ditugaskan, buka layar perjalanan di aplikasi.",
          "Pilih Bagikan Perjalanan.",
          "Kirim tautan ke keluarga atau teman melalui aplikasi pesan.",
          "Penerima dapat melihat posisi, pelat nomor, dan rute hingga Anda tiba."
        ]
      },
      {
        "type": "cta",
        "text": "Pelajari fitur keselamatan lain.",
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "cara-menggunakan-tombol-sos",
    "title": "Kapan dan Bagaimana Menggunakan Tombol SOS di Aplikasi SEVA",
    "seoTitle": "Cara Menggunakan Tombol SOS SEVA",
    "description": "Penjelasan tombol darurat SOS di aplikasi SEVA: kapan digunakan, apa yang terjadi setelah ditekan, dan langkah keselamatan tambahan.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kapan dan bagaimana menggunakan tombol sos di aplikasi seva"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Tombol darurat (SOS) tersedia di aplikasi SEVA untuk situasi yang membuat Anda merasa tidak aman."
      },
      {
        "type": "ul",
        "items": [
          "Tekan SOS untuk menelepon layanan darurat 112 atau kontak darurat yang sudah Anda simpan di aplikasi.",
          "Tetap di tempat yang ramai dan terang bila memungkinkan.",
          "Aktifkan juga Bagikan Perjalanan untuk keluarga.",
          "Simpan minimal satu kontak darurat keluarga di aplikasi sebelum bepergian."
        ]
      },
      {
        "type": "cta",
        "text": "Lihat standar keselamatan SEVA.",
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "cara-menjaga-keamanan-akun-dan-otp",
    "title": "Cara Menjaga Keamanan Akun SEVA dan Kode OTP",
    "seoTitle": "Cara Menjaga Keamanan Akun & OTP",
    "description": "Tips melindungi akun SEVA: jangan bagikan kode OTP, waspadai penipuan yang mengatasnamakan SEVA, dan langkah jika akun digunakan tanpa izin.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara menjaga keamanan akun seva dan kode otp"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Kode OTP adalah kunci akun Anda. Penipu sering berpura-pura menjadi pihak resmi untuk memintanya."
      },
      {
        "type": "ul",
        "items": [
          "Jangan pernah membagikan kode OTP kepada siapa pun, termasuk yang mengaku dari SEVA.",
          "Abaikan tautan mencurigakan yang meminta data akun.",
          "Kunci ponsel Anda dengan PIN atau biometrik.",
          "Bila menduga akun disalahgunakan, segera hubungi tim bantuan SEVA."
        ]
      },
      {
        "type": "cta",
        "text": "Baca Kebijakan Privasi SEVA.",
        "href": "/privacy",
        "label": "Kebijakan Privasi"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "perlindungan-data-pribadi-penumpang",
    "title": "Bagaimana SEVA Melindungi Data Pribadi Penumpang",
    "seoTitle": "Cara SEVA Melindungi Data Pribadi",
    "description": "Penjelasan singkat pelindungan data di SEVA: nomor telepon tersamar, data dibagikan seperlunya, tidak dijual, dan hak Anda berdasarkan UU PDP.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "bagaimana seva melindungi data pribadi penumpang"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "SEVA memproses data pribadi sesuai Undang-Undang Pelindungan Data Pribadi."
      },
      {
        "type": "ul",
        "items": [
          "Nomor telepon Anda disamarkan saat berkomunikasi dengan driver.",
          "Data dibagikan hanya sebatas yang diperlukan untuk menjalankan pesanan.",
          "SEVA tidak menjual data pribadi Anda.",
          "Anda berhak mengakses, memperbarui, atau meminta penghapusan data."
        ]
      },
      {
        "type": "cta",
        "text": "Baca Kebijakan Privasi lengkap.",
        "href": "/privacy",
        "label": "Kebijakan Privasi"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "etika-penumpang-ojek-dan-taksi-online",
    "title": "Etika Penumpang Ojek & Taksi Online yang Perlu Diketahui",
    "seoTitle": "Etika Penumpang Ojek & Taksi Online",
    "description": "Etika sederhana sebagai penumpang: tepat waktu di titik jemput, memakai helm dan sabuk pengaman, menjaga kebersihan, dan bersikap sopan.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "etika penumpang ojek & taksi online yang perlu diketahui"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Perjalanan yang nyaman adalah hasil kerja sama penumpang dan driver."
      },
      {
        "type": "ul",
        "items": [
          "Tiba di titik jemput tepat waktu.",
          "Gunakan helm (SEVA Ride) dan sabuk pengaman (SEVA Car).",
          "Jaga kebersihan kendaraan dan perlengkapan driver.",
          "Bersikap sopan dan ikuti arahan keselamatan.",
          "Jangan membawa barang terlarang atau berbahaya."
        ]
      },
      {
        "type": "cta",
        "text": "Baca kewajiban pengguna di Syarat & Ketentuan.",
        "href": "/terms",
        "label": "Syarat & Ketentuan"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "cara-menghapus-akun-seva",
    "title": "Cara Meminta Penghapusan Akun SEVA",
    "seoTitle": "Cara Meminta Penghapusan Akun SEVA",
    "description": "Langkah meminta penghapusan akun SEVA melalui kanal bantuan, verifikasi identitas, dan apa yang terjadi pada data Anda.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara meminta penghapusan akun seva"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Anda dapat berhenti menggunakan layanan kapan saja dan meminta penghapusan akun."
      },
      {
        "type": "ol",
        "items": [
          "Hubungi tim bantuan SEVA lewat WhatsApp atau email support@seva.taxi.",
          "Sampaikan permintaan penghapusan akun.",
          "Ikuti verifikasi identitas yang diminta.",
          "Data akan diproses sesuai Kebijakan Privasi dan peraturan yang berlaku."
        ]
      },
      {
        "type": "cta",
        "text": "Baca Kebijakan Privasi.",
        "href": "/privacy",
        "label": "Kebijakan Privasi"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "checklist-sebelum-naik-taksi-online-malam-hari",
    "title": "Checklist Sebelum Naik Taksi Online di Malam Hari",
    "seoTitle": "Checklist Naik Taksi Online Malam Hari",
    "description": "Daftar periksa singkat sebelum naik taksi atau ojek online di malam hari: cek driver dan plat, bagikan perjalanan, dan siapkan tombol SOS.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "checklist sebelum naik taksi online di malam hari"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Gunakan checklist ini setiap kali bepergian di malam hari."
      },
      {
        "type": "ol",
        "items": [
          "Cocokkan nama driver, nomor plat, dan foto kendaraan.",
          "Tunggu di tempat yang terang dan ramai.",
          "Aktifkan Bagikan Perjalanan.",
          "Pastikan ponsel cukup baterai.",
          "Ketahui letak tombol SOS di aplikasi."
        ]
      },
      {
        "type": "cta",
        "text": "Baca 7 tips aman naik ojek & taksi online.",
        "href": "/blog/tips-aman-naik-ojek-dan-taksi-online",
        "label": "Tips aman"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "cara-isi-saldo-seva-ewallet",
    "title": "Cara Mengisi Saldo SEVA eWallet",
    "seoTitle": "Cara Mengisi Saldo SEVA eWallet",
    "description": "Langkah mengisi saldo SEVA eWallet lewat menu Dompet di aplikasi, serta keuntungan membayar perjalanan secara nontunai.",
    "category": "Tips & Keamanan",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara mengisi saldo seva ewallet"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "SEVA eWallet membuat pembayaran perjalanan otomatis tanpa uang pas."
      },
      {
        "type": "ol",
        "items": [
          "Buka menu Dompet di aplikasi SEVA.",
          "Pilih Top Up.",
          "Pilih metode pengisian yang tersedia, seperti transfer bank atau QRIS.",
          "Ikuti instruksi hingga saldo masuk."
        ]
      },
      {
        "type": "p",
        "text": "Pilihan metode yang aktif selalu ditampilkan di aplikasi."
      },
      {
        "type": "cta",
        "text": "Baca cara bayar perjalanan SEVA.",
        "href": "/blog/cara-bayar-seva-ewallet-dan-qris",
        "label": "Cara bayar"
      }
    ],
    "related": [
      {
        "href": "/faq",
        "label": "Pusat Bantuan & FAQ"
      },
      {
        "href": "/safety",
        "label": "Standar keselamatan"
      }
    ]
  },
  {
    "slug": "syarat-kendaraan-driver-seva",
    "title": "Syarat Kendaraan untuk Jadi Driver SEVA",
    "seoTitle": "Syarat Kendaraan untuk Jadi Driver SEVA",
    "description": "Syarat kendaraan mitra SEVA: kendaraan minimal tahun 2017, STNK dan pajak aktif, serta kondisi layak jalan.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "syarat kendaraan untuk jadi driver seva"
    ],
    "blocks": [
      {
        "type": "ul",
        "items": [
          "Sepeda motor minimal tahun 2017 dalam kondisi prima.",
          "Mobil MPV minimal tahun 2017.",
          "STNK dan pajak kendaraan aktif sesuai unit.",
          "Kondisi fisik kendaraan bersih dan layak jalan.",
          "Smartphone Android atau iOS dengan GPS aktif."
        ]
      },
      {
        "type": "cta",
        "text": "Lihat syarat lengkap mitra pengemudi.",
        "href": "/partner/driver",
        "label": "Halaman driver"
      }
    ],
    "related": [
      {
        "href": "/partner/driver",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/cara-daftar-driver-ojek-online",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "tips-untuk-driver-baru",
    "title": "Tips untuk Driver Ojek & Taksi Online Pemula",
    "seoTitle": "Tips untuk Driver Ojek Online Pemula",
    "description": "Tips memulai sebagai mitra pengemudi SEVA: atur jam aktif, kenali jam sibuk, jaga kebersihan kendaraan, dan layani penumpang dengan ramah.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "tips untuk driver ojek & taksi online pemula"
    ],
    "blocks": [
      {
        "type": "ul",
        "items": [
          "Atur jam online sesuai target penghasilan Anda.",
          "Kenali jam sibuk di wilayah Anda untuk insentif tambahan.",
          "Jaga kebersihan kendaraan, helm, dan kabin.",
          "Gunakan chat di aplikasi untuk konfirmasi titik jemput.",
          "Utamakan keselamatan berkendara."
        ]
      },
      {
        "type": "cta",
        "text": "Gabung menjadi mitra pengemudi SEVA.",
        "href": "/partner/driver",
        "label": "Daftar driver"
      }
    ],
    "related": [
      {
        "href": "/partner/driver",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/cara-daftar-driver-ojek-online",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "pencairan-dana-harian-driver",
    "title": "Pencairan Dana Harian (H+0) untuk Mitra Driver",
    "seoTitle": "Pencairan Dana Harian H+0 untuk Driver",
    "description": "Cara kerja pencairan harian H+0 untuk mitra SEVA: pendapatan masuk ke dompet pengemudi dan dapat ditarik ke rekening bank atas nama sendiri.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "pencairan dana harian (h+0) untuk mitra driver"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Mitra pengemudi SEVA dapat mencairkan penghasilan setiap hari."
      },
      {
        "type": "ul",
        "items": [
          "Hasil perjalanan masuk ke dompet pengemudi.",
          "Penarikan ke rekening bank atas nama mitra.",
          "Tanpa potongan tersembunyi; potongan platform hanya 5%."
        ]
      },
      {
        "type": "cta",
        "text": "Lihat keuntungan mitra pengemudi.",
        "href": "/partner/driver",
        "label": "Halaman driver"
      }
    ],
    "related": [
      {
        "href": "/partner/driver",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/cara-daftar-driver-ojek-online",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "jam-kerja-fleksibel-driver",
    "title": "Jam Kerja Fleksibel: Jadi Driver Sebagai Pekerjaan Sampingan",
    "seoTitle": "Jadi Driver Online Sebagai Kerja Sampingan",
    "description": "Menjadi driver SEVA sebagai pekerjaan utama atau sampingan: atur sendiri kapan online, kenali jam sibuk, dan hitung pendapatan per perjalanan.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "jam kerja fleksibel: jadi driver sebagai pekerjaan sampingan"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Mitra SEVA bebas menentukan kapan mulai dan selesai bekerja dengan menghidupkan atau mematikan tombol online."
      },
      {
        "type": "ul",
        "items": [
          "Cocok untuk penghasilan utama maupun tambahan.",
          "Manfaatkan jam sibuk untuk insentif.",
          "Bawa pulang 95% pendapatan perjalanan."
        ]
      },
      {
        "type": "cta",
        "text": "Hitung pendapatan per perjalanan.",
        "href": "/blog/menghitung-pendapatan-driver-bagi-hasil-95-persen",
        "label": "Cara hitung pendapatan"
      }
    ],
    "related": [
      {
        "href": "/partner/driver",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/cara-daftar-driver-ojek-online",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "fitur-fleet-management-system-seva",
    "title": "Fitur Fleet Management System SEVA untuk Pemilik Armada",
    "seoTitle": "Fitur Fleet Management System SEVA",
    "description": "Kenali fitur Fleet Management System SEVA: pelacakan GPS real-time, penugasan pengemudi, pengingat servis dan KIR, serta settlement harian.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "fitur fleet management system seva untuk pemilik armada"
    ],
    "blocks": [
      {
        "type": "ul",
        "items": [
          "Pelacakan GPS real-time untuk setiap unit.",
          "Penugasan pengemudi, shift, dan riwayat trip.",
          "Pengingat jadwal servis dan masa uji KIR.",
          "Rekonsiliasi bagi hasil harian secara otomatis.",
          "Tanpa ganti perangkat keras."
        ]
      },
      {
        "type": "cta",
        "text": "Pelajari kemitraan fleet operator.",
        "href": "/partner/fleet",
        "label": "Fleet operator"
      }
    ],
    "related": [
      {
        "href": "/partner/fleet",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "verifikasi-dokumen-fleet-operator",
    "title": "Dokumen yang Diperlukan untuk Jadi Fleet Operator",
    "seoTitle": "Dokumen untuk Jadi Fleet Operator",
    "description": "Dokumen yang diverifikasi saat bergabung sebagai fleet operator SEVA: izin usaha, kepemilikan armada, dan uji kelaikan jalan (KIR).",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "dokumen yang diperlukan untuk jadi fleet operator"
    ],
    "blocks": [
      {
        "type": "ul",
        "items": [
          "Profil perusahaan (PT, CV, atau koperasi).",
          "Izin usaha yang berlaku.",
          "Bukti kepemilikan armada.",
          "Dokumen uji kelaikan jalan (KIR)."
        ]
      },
      {
        "type": "cta",
        "text": "Daftarkan armada Anda.",
        "href": "/partner/fleet#daftar-operator",
        "label": "Daftar fleet operator"
      }
    ],
    "related": [
      {
        "href": "/partner/fleet",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "meningkatkan-utilisasi-armada-rental",
    "title": "Cara Meningkatkan Utilisasi Armada Rental Mobil",
    "seoTitle": "Cara Tingkatkan Utilisasi Armada Rental",
    "description": "Tips pemilik rental mobil menekan waktu menganggur armada dengan menghubungkannya ke permintaan perjalanan di Jabodetabek melalui SEVA.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "cara meningkatkan utilisasi armada rental mobil"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Mobil yang lama menganggur berarti biaya tanpa pendapatan. Menghubungkan armada ke permintaan perjalanan harian dapat membantu mengurangi waktu menganggur."
      },
      {
        "type": "ul",
        "items": [
          "Hubungkan armada ke alokasi order SEVA.",
          "Pantau status setiap unit lewat FMS.",
          "Jadwalkan servis agar unit siap beroperasi.",
          "Bagi hasil hingga 95% dengan pencairan harian."
        ]
      },
      {
        "type": "cta",
        "text": "Pelajari kemitraan fleet operator.",
        "href": "/partner/fleet",
        "label": "Fleet operator"
      }
    ],
    "related": [
      {
        "href": "/partner/fleet",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "faktur-pajak-untuk-akun-korporat",
    "title": "Tagihan Bulanan & Faktur Pajak untuk Akun Korporat",
    "seoTitle": "Tagihan Bulanan & Faktur Pajak Korporat",
    "description": "Cara kerja tagihan bulanan terpusat untuk akun korporat SEVA, lengkap dengan faktur pajak untuk memudahkan pencatatan keuangan perusahaan.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "tagihan bulanan & faktur pajak untuk akun korporat"
    ],
    "blocks": [
      {
        "type": "ul",
        "items": [
          "Satu tagihan terpusat setiap bulan.",
          "Faktur pajak untuk pencatatan dan audit.",
          "Laporan perjalanan per karyawan atau divisi.",
          "Pengaturan anggaran per departemen."
        ]
      },
      {
        "type": "cta",
        "text": "Ajukan akun korporat.",
        "href": "/partner/b2b#ajukan-kemitraan",
        "label": "Akun korporat"
      }
    ],
    "related": [
      {
        "href": "/partner/b2b",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "antar-jemput-tamu-hotel",
    "title": "Antar-Jemput Tamu Hotel & Bandara dengan Akun Korporat",
    "seoTitle": "Antar-Jemput Tamu Hotel & Bandara",
    "description": "Solusi transportasi tamu hotel dan perusahaan dengan SEVA Car: penjemputan di lobi dan bandara, tagihan terpusat, dan mobil MPV yang nyaman.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "antar-jemput tamu hotel & bandara dengan akun korporat"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Hotel dan perusahaan sering perlu mengantar tamu ke bandara atau tempat pertemuan."
      },
      {
        "type": "ul",
        "items": [
          "Armada MPV yang nyaman untuk tamu.",
          "Penjemputan di lobi hotel atau area kedatangan bandara.",
          "Biaya tercatat dalam tagihan bulanan terpusat."
        ]
      },
      {
        "type": "cta",
        "text": "Pelajari solusi B2B SEVA.",
        "href": "/partner/b2b",
        "label": "B2B Partners"
      }
    ],
    "related": [
      {
        "href": "/partner/b2b",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "armada-untuk-acara-dan-mice",
    "title": "Transportasi untuk Acara Kantor, Konferensi & MICE",
    "seoTitle": "Transportasi untuk Acara Kantor & MICE",
    "description": "Cara SEVA mendukung mobilitas acara perusahaan, konferensi, dan gathering: armada seragam, koordinasi tim, dan tagihan terpusat.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "transportasi untuk acara kantor, konferensi & mice"
    ],
    "blocks": [
      {
        "type": "ul",
        "items": [
          "Penyediaan armada untuk mobilitas peserta acara.",
          "Koordinasi jadwal penjemputan bersama tim SEVA.",
          "Tagihan terpusat untuk kemudahan administrasi."
        ]
      },
      {
        "type": "cta",
        "text": "Diskusikan kebutuhan acara Anda.",
        "href": "/partner/b2b#ajukan-kemitraan",
        "label": "Hubungi tim SEVA"
      }
    ],
    "related": [
      {
        "href": "/partner/b2b",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "kurir-dokumen-rutin-untuk-kantor",
    "title": "Kurir Dokumen Rutin untuk Kantor dengan SEVA Send",
    "seoTitle": "Kurir Dokumen Rutin untuk Kantor",
    "description": "Atur pengiriman dokumen rutin kantor dengan SEVA Send dan akun korporat: pengiriman langsung, pelacakan live, dan tagihan bulanan.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kurir dokumen rutin untuk kantor dengan seva send"
    ],
    "blocks": [
      {
        "type": "ul",
        "items": [
          "Pengiriman langsung tanpa transit gudang.",
          "Pelacakan live dan foto serah terima.",
          "Pengiriman tercatat dalam tagihan korporat bulanan."
        ]
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Antar gedung"
          },
          {
            "km": 15,
            "label": "Antarkota dekat"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE
      },
      {
        "type": "cta",
        "text": "Ajukan akun korporat.",
        "href": "/partner/b2b#ajukan-kemitraan",
        "label": "Akun korporat"
      }
    ],
    "related": [
      {
        "href": "/partner/b2b",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Artikel terkait"
      }
    ]
  },
  {
    "slug": "daftar-merchant-seva-food-lebih-awal",
    "title": "Kenapa Restoran Perlu Daftar Merchant SEVA Food Lebih Awal",
    "seoTitle": "Daftar Merchant SEVA Food Lebih Awal",
    "description": "Keuntungan mendaftar lebih awal sebagai merchant SEVA Food: tanpa biaya registrasi, onboarding dibantu tim, dan promosi di aplikasi.",
    "category": "Mitra & Bisnis",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "kenapa restoran perlu daftar merchant seva food lebih awal"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "SEVA Food masih dalam tahap integrasi merchant. Mendaftar lebih awal membantu usaha Anda siap saat layanan diluncurkan."
      },
      {
        "type": "ul",
        "items": [
          "Tanpa biaya registrasi.",
          "Onboarding dibantu tim hingga menu online.",
          "Promosi di halaman depan aplikasi."
        ]
      },
      {
        "type": "cta",
        "text": "Daftar sebagai merchant.",
        "href": "/services/food#daftar-merchant",
        "label": "Daftar merchant"
      }
    ],
    "related": [
      {
        "href": "/services/food",
        "label": "Halaman terkait"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Artikel terkait"
      }
    ]
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

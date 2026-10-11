// Isi Pusat Bantuan (FAQ). Jawaban hanya memuat fakta yang juga tercantum di halaman lain situs ini
// (tarif, syarat, ketentuan) agar konsisten — perbarui keduanya bersamaan bila ada perubahan.

export type FaqCategory = "booking" | "send" | "ewallet" | "driver" | "safety" | "partner";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

export const FAQ_CATEGORY_LABELS: Record<FaqCategory, string> = {
  booking: "Pemesanan & Tarif",
  send: "SEVA Send & Food",
  ewallet: "SEVA eWallet & Pembayaran",
  driver: "Mitra Pengemudi",
  safety: "Keamanan & Akun",
  partner: "Fleet, Korporat & Merchant",
};

export const FAQ_LIST: FaqItem[] = [
  // Pemesanan & Tarif
  {
    id: "booking-cara-pesan",
    category: "booking",
    question: "Bagaimana cara memesan perjalanan di aplikasi SEVA?",
    answer:
      "Unduh aplikasi SEVA di Google Play Store atau Apple App Store, lalu masuk dengan nomor ponsel Anda. Tentukan titik jemput dan tujuan di peta, pilih layanan (SEVA Ride untuk motor, SEVA Car untuk mobil, atau SEVA Send untuk kirim paket), periksa tarifnya, lalu konfirmasi pesanan. Driver terdekat akan menuju titik jemput Anda.",
    link: { href: "/how-it-works", label: "Lihat panduan cara pesan" },
  },
  {
    id: "booking-hitung-tarif",
    category: "booking",
    question: "Bagaimana SEVA menghitung tarif?",
    answer:
      "Tarif terdiri dari tarif buka pintu ditambah biaya per kilometer sesuai jarak rute yang ditampilkan di aplikasi: SEVA Ride mulai Rp 8.000 + Rp 2.500/km, SEVA Car mulai Rp 9.500 + Rp 6.200/km, dan SEVA Send mulai Rp 10.000 + Rp 3.000/km. Total tarif tampil di aplikasi sebelum Anda mengonfirmasi pesanan.",
    link: { href: "/services", label: "Bandingkan tarif semua layanan" },
  },
  {
    id: "booking-lonjakan",
    category: "booking",
    question: "Apakah tarif naik mendadak saat jam sibuk atau hujan?",
    answer:
      "Tidak. SEVA menerapkan tarif pasti yang ditampilkan sejak awal pemesanan, tanpa lonjakan sepihak saat jam sibuk atau hujan. Biaya tambahan di luar tarif perjalanan, seperti tol atau parkir, mengikuti biaya riil di lokasi.",
  },
  {
    id: "booking-tol-parkir",
    category: "booking",
    question: "Siapa yang menanggung biaya tol dan parkir?",
    answer:
      "Tarif di aplikasi adalah tarif perjalanan. Biaya tol serta tiket parkir resmi di bandara, stasiun, atau gedung ditanggung penumpang sesuai tarif riil yang dilalui selama perjalanan.",
  },
  {
    id: "booking-batal",
    category: "booking",
    question: "Apakah ada biaya pembatalan?",
    answer:
      "Untuk SEVA Car, pembatalan dalam 5 menit pertama setelah pemesanan tidak dikenai biaya. Ketentuan pembatalan setelah jangka waktu tersebut dan untuk layanan lain ditampilkan di aplikasi saat Anda memesan. Pembatalan berulang tanpa alasan yang wajar dapat mengakibatkan pembatasan akun.",
    link: { href: "/terms", label: "Baca Syarat & Ketentuan" },
  },
  {
    id: "booking-bagasi",
    category: "booking",
    question: "Berapa banyak barang bawaan yang boleh dibawa?",
    answer:
      "SEVA Ride memuat 1 penumpang dengan 1 ransel atau tas laptop (maksimal 10 kg). SEVA Car memuat hingga 4 penumpang dewasa dengan bagasi sekitar 2 koper medium dan 2 tas ransel. Untuk barang tanpa penumpang, gunakan SEVA Send.",
  },
  {
    id: "booking-area",
    category: "booking",
    question: "Di mana saja SEVA beroperasi?",
    answer:
      "Saat ini SEVA melayani Jabodetabek: Jakarta Pusat, Jakarta Utara, Jakarta Barat, Jakarta Selatan, Jakarta Timur, Kota Tangerang, Kota Tangerang Selatan, Kota dan Kabupaten Bogor, Kota Depok, serta Kota dan Kabupaten Bekasi.",
    link: { href: "/cities", label: "Lihat peta wilayah operasional" },
  },
  {
    id: "booking-luar-kota",
    category: "booking",
    question: "Apakah bisa memesan perjalanan ke luar Jabodetabek?",
    answer:
      "Bisa untuk SEVA Car, selama titik jemput berada di dalam wilayah operasional Jabodetabek dan tujuan akhir disepakati di aplikasi sebelum perjalanan dimulai.",
  },
  {
    id: "booking-bandara",
    category: "booking",
    question: "Apakah SEVA bisa menjemput di bandara dan stasiun?",
    answer:
      "Bisa. Penjemputan tersedia di area kedatangan Bandara Soekarno-Hatta (Terminal 1, 2, dan 3), Bandara Halim Perdanakusuma, Stasiun Kereta Cepat Whoosh Halim, serta di sekitar stasiun KRL, MRT, dan LRT di Jabodetabek.",
  },

  // SEVA Send & Food
  {
    id: "send-batas",
    category: "send",
    question: "Berapa batas berat dan ukuran paket SEVA Send?",
    answer:
      "Maksimal 20 kg per pengiriman dengan dimensi paket hingga 40 × 40 × 40 cm agar aman dibawa kurir motor. Paket diantar langsung dari titik jemput ke penerima tanpa transit gudang.",
    link: { href: "/services/send", label: "Detail layanan SEVA Send" },
  },
  {
    id: "send-terlarang",
    category: "send",
    question: "Barang apa saja yang tidak boleh dikirim?",
    answer:
      "Zat mudah meledak atau terbakar, gas bertekanan, bensin, bahan kimia beracun, senjata tajam atau api, narkotika, barang ilegal, serta hewan atau makhluk hidup. Barang di atas 20 kg atau berdimensi yang membahayakan kestabilan motor juga tidak dapat dikirim.",
  },
  {
    id: "send-lacak",
    category: "send",
    question: "Bagaimana cara melacak paket dan memastikan paket sudah diterima?",
    answer:
      "Posisi kurir dapat dipantau secara real-time di peta aplikasi, dan tautan pelacakan bisa dibagikan ke penerima. Setelah paket diserahkan, foto serah terima dan tanda tangan digital penerima muncul di riwayat pesanan Anda.",
  },
  {
    id: "food-kapan",
    category: "send",
    question: "Kapan SEVA Food bisa digunakan?",
    answer:
      "SEVA Food sedang dalam tahap integrasi merchant dan belum dapat dipesan. Pengumuman peluncuran akan disampaikan melalui aplikasi SEVA dan Instagram @seva.taxi.",
    link: { href: "/services/food", label: "Tentang SEVA Food" },
  },

  // SEVA eWallet & Pembayaran
  {
    id: "ewallet-apa",
    category: "ewallet",
    question: "Apa itu SEVA eWallet?",
    answer:
      "SEVA eWallet adalah dompet digital di dalam aplikasi SEVA untuk membayar perjalanan dan pengiriman. Pembayaran dipotong otomatis setelah perjalanan selesai, dan setiap transaksi tercatat di riwayat aplikasi.",
  },
  {
    id: "ewallet-topup",
    category: "ewallet",
    question: "Bagaimana cara mengisi saldo SEVA eWallet?",
    answer:
      "Buka menu Dompet di aplikasi SEVA, pilih Top Up, lalu ikuti metode pengisian yang tersedia, seperti transfer bank atau QRIS. Pilihan metode yang aktif selalu ditampilkan di aplikasi.",
  },
  {
    id: "ewallet-metode",
    category: "ewallet",
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Anda dapat membayar dengan SEVA eWallet, QRIS (dari aplikasi e-wallet atau mobile banking yang mendukung QRIS), atau tunai langsung kepada mitra pengemudi.",
  },
  {
    id: "ewallet-kuitansi",
    category: "ewallet",
    question: "Apakah saya mendapat bukti pembayaran untuk klaim kantor?",
    answer:
      "Ya. Struk digital tersimpan otomatis di riwayat perjalanan dan dapat diunduh dalam format PDF untuk keperluan klaim perjalanan dinas.",
  },

  // Mitra Pengemudi
  {
    id: "driver-bagi-hasil",
    category: "driver",
    question: "Bagaimana skema bagi hasil untuk mitra pengemudi?",
    answer:
      "Mitra pengemudi membawa pulang 95% pendapatan perjalanan; potongan platform hanya 5%, tidak lebih. Penghasilan dapat dicairkan harian (H+0) ke rekening bank atas nama mitra tanpa potongan tersembunyi.",
    link: { href: "/partner/driver", label: "Gabung jadi mitra pengemudi" },
  },
  {
    id: "driver-syarat",
    category: "driver",
    question: "Apa saja syarat menjadi pengemudi SEVA?",
    answer:
      "WNI berusia 18–60 tahun dengan KTP asli, SIM C (motor) atau SIM A (mobil) yang aktif, SKCK yang masih berlaku, rekening bank atas nama pribadi, STNK dan pajak kendaraan aktif, serta smartphone Android atau iOS dengan GPS aktif. Kendaraan minimal tahun 2017.",
  },
  {
    id: "driver-daftar",
    category: "driver",
    question: "Berapa biaya dan berapa lama proses pendaftaran?",
    answer:
      "Pendaftaran gratis dan 100% online melalui aplikasi SEVA Driver. Setelah dokumen diunggah, tim SEVA memverifikasi berkas dalam 1×24 jam dan mengirim notifikasi aktivasi akun.",
  },
  {
    id: "driver-jam-kerja",
    category: "driver",
    question: "Apakah jam kerja mitra pengemudi ditentukan?",
    answer:
      "Tidak. Mitra bebas menentukan kapan mulai dan selesai bekerja dengan menghidupkan atau mematikan tombol online di aplikasi, sehingga cocok sebagai penghasilan utama maupun tambahan.",
  },

  // Keamanan & Akun
  {
    id: "safety-fitur",
    category: "safety",
    question: "Fitur keselamatan apa saja yang tersedia selama perjalanan?",
    answer:
      "Aplikasi SEVA dilengkapi tombol darurat (SOS) untuk menelepon layanan darurat 112 atau kontak darurat yang Anda simpan, fitur Bagikan Perjalanan untuk memantau rute secara live bersama keluarga, dan penyamaran nomor telepon (number masking) saat Anda menghubungi driver.",
    link: { href: "/safety", label: "Lihat standar keselamatan" },
  },
  {
    id: "safety-tertinggal",
    category: "safety",
    question: "Bagaimana jika ada barang yang tertinggal di kendaraan?",
    answer:
      "Buka Riwayat Perjalanan, pilih perjalanan terkait, lalu hubungi driver melalui aplikasi. Anda juga dapat menghubungi tim bantuan SEVA lewat WhatsApp atau email dengan menyebutkan ID perjalanan.",
  },
  {
    id: "safety-otp",
    category: "safety",
    question: "Bagaimana menjaga keamanan akun SEVA saya?",
    answer:
      "Jangan pernah membagikan kode OTP kepada siapa pun, termasuk yang mengaku sebagai pihak SEVA. Segera hubungi tim bantuan SEVA jika Anda menduga ada penggunaan akun tanpa izin.",
  },
  {
    id: "safety-data",
    category: "safety",
    question: "Bagaimana SEVA melindungi data pribadi saya?",
    answer:
      "Data diproses sesuai UU Pelindungan Data Pribadi. Nomor telepon Anda disamarkan saat berkomunikasi dengan driver, data hanya dibagikan sebatas yang diperlukan untuk menjalankan pesanan, dan SEVA tidak menjual data pribadi Anda.",
    link: { href: "/privacy", label: "Baca Kebijakan Privasi" },
  },
  {
    id: "safety-hapus-akun",
    category: "safety",
    question: "Bagaimana cara menghapus akun?",
    answer:
      "Anda dapat berhenti menggunakan layanan kapan saja dan meminta penghapusan akun melalui kanal bantuan SEVA (WhatsApp atau email support@seva.taxi). Kami dapat meminta verifikasi identitas sebelum memproses permintaan.",
  },

  // Fleet, Korporat & Merchant
  {
    id: "partner-fleet",
    category: "partner",
    question: "Bagaimana pemilik armada bergabung sebagai fleet operator?",
    answer:
      "Perusahaan pemilik armada taksi, rental, maupun shuttle dapat mengajukan kemitraan melalui tim SEVA. Setelah verifikasi izin usaha, kepemilikan armada, dan uji kelaikan jalan (KIR), armada diintegrasikan ke sistem dan dapat dipantau melalui Fleet Management System di sevaqu.com.",
  },
  {
    id: "partner-b2b",
    category: "partner",
    question: "Apakah perusahaan bisa membuka akun korporat?",
    answer:
      "Bisa. Akun korporat mendukung voucher perjalanan karyawan, tagihan bulanan terpusat dengan faktur pajak, dan pengiriman dokumen melalui SEVA Send. Ajukan lewat formulir di halaman B2B Partners.",
    link: { href: "/partner/b2b#ajukan-kemitraan", label: "Ajukan kemitraan korporat" },
  },
  {
    id: "partner-merchant",
    category: "partner",
    question: "Bagaimana cara mendaftarkan restoran di SEVA Food?",
    answer:
      "Pemilik restoran, kafe, atau UMKM kuliner dapat mendaftar lebih awal melalui formulir merchant di halaman SEVA Food. Pendaftaran tanpa biaya, dan tim SEVA akan menghubungi saat onboarding dibuka.",
    link: { href: "/services/food#daftar-merchant", label: "Daftar sebagai merchant" },
  },
];

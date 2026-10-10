import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import LegalDocument, { type LegalSection } from "@/components/layout/LegalDocument";
import { LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — SEVA Taxi",
  description:
    "Syarat dan ketentuan penggunaan layanan SEVA RIDE, SEVA CAR, SEVA SEND, dan SEVA FOOD, termasuk pemesanan, tarif, pembayaran, pembatalan, dan tanggung jawab para pihak.",
  alternates: { canonical: "/terms" },
};

const CONTACT_EMAIL = "support@seva.id";

const sections: LegalSection[] = [
  {
    id: "penerimaan",
    title: "Penerimaan Syarat",
    content: (
      <p>
        Dengan mengakses situs seva.taxi, memasang aplikasi, atau memesan layanan SEVA yang
        dikelola oleh <strong>{LEGAL_NAME}</strong>, Anda menyatakan telah membaca, memahami, dan
        menyetujui syarat dan ketentuan ini beserta{" "}
        <Link href="/privacy">Kebijakan Privasi</Link>. Jika tidak setuju, mohon tidak
        menggunakan layanan kami.
      </p>
    ),
  },
  {
    id: "definisi",
    title: "Definisi",
    content: (
      <ul>
        <li><strong>Layanan</strong> — layanan SEVA yang tersedia melalui aplikasi dan situs, yaitu SEVA RIDE, SEVA CAR, SEVA SEND, dan layanan lain yang diumumkan (termasuk SEVA FOOD sejak diluncurkan).</li>
        <li><strong>Pengguna</strong> — setiap orang yang menggunakan situs atau aplikasi untuk memesan Layanan.</li>
        <li><strong>Mitra</strong> — pengemudi, kurir, dan fleet operator yang bekerja sama dengan SEVA untuk menjalankan Layanan.</li>
        <li><strong>SEVA Wallet</strong> — dompet digital di dalam aplikasi SEVA yang dipakai untuk pembayaran dan pencatatan saldo.</li>
      </ul>
    ),
  },
  {
    id: "layanan",
    title: "Ruang Lingkup Layanan",
    content: (
      <>
        <ul>
          <li><strong>SEVA RIDE</strong> — perjalanan dengan sepeda motor untuk satu penumpang.</li>
          <li><strong>SEVA CAR</strong> — perjalanan dengan mobil ber-AC.</li>
          <li><strong>SEVA SEND</strong> — pengiriman paket dan dokumen secara instan.</li>
          <li><strong>SEVA FOOD</strong> — pesan antar makanan; ketersediaannya mengikuti jadwal peluncuran yang diumumkan.</li>
        </ul>
        <p>
          SEVA menyediakan aplikasi dan sistem pemesanan, sedangkan perjalanan dan pengiriman
          dijalankan bersama Mitra yang telah diverifikasi. Ketersediaan Layanan bergantung pada
          wilayah, waktu, dan ketersediaan Mitra, sebagaimana tercantum pada halaman{" "}
          <Link href="/cities">Cakupan Kota</Link>.
        </p>
      </>
    ),
  },
  {
    id: "akun",
    title: "Akun dan Keamanan",
    content: (
      <ul>
        <li>Anda wajib memberikan data yang benar dan terbaru saat mendaftar.</li>
        <li>Anda bertanggung jawab menjaga kerahasiaan akun dan kode OTP; jangan membagikannya kepada siapa pun, termasuk yang mengaku sebagai pihak SEVA.</li>
        <li>Segera hubungi kami jika Anda menduga ada penggunaan akun tanpa izin.</li>
      </ul>
    ),
  },
  {
    id: "tarif-pembayaran",
    title: "Tarif dan Pembayaran",
    content: (
      <>
        <ul>
          <li>Tarif ditampilkan di aplikasi sebelum Anda mengonfirmasi pemesanan. Simulasi tarif di situs ini hanya estimasi dan dapat berbeda dengan tarif yang tampil di aplikasi.</li>
          <li>Pembayaran dilakukan melalui SEVA Wallet atau metode lain yang tersedia di aplikasi. Penyelesaian pembayaran dapat memerlukan verifikasi OTP.</li>
          <li>Biaya tambahan yang relevan dengan perjalanan atau pengiriman akan ditampilkan di aplikasi.</li>
        </ul>
      </>
    ),
  },
  {
    id: "pembatalan",
    title: "Pembatalan",
    content: (
      <p>
        Untuk SEVA CAR, pembatalan dalam 5 menit pertama setelah pemesanan tidak dikenai biaya.
        Ketentuan pembatalan setelah jangka waktu tersebut dan untuk layanan lain ditampilkan di
        aplikasi pada saat pemesanan. Pembatalan berulang tanpa alasan yang wajar dapat
        mengakibatkan pembatasan akun.
      </p>
    ),
  },
  {
    id: "kewajiban-pengguna",
    title: "Kewajiban Pengguna",
    content: (
      <>
        <ul>
          <li>Bersikap sopan kepada Mitra dan mematuhi arahan keselamatan, termasuk penggunaan helm dan sabuk pengaman.</li>
          <li>Tidak menggunakan Layanan untuk tujuan yang melanggar hukum, atau membawa barang terlarang dan berbahaya.</li>
          <li>Tidak merusak kendaraan atau perlengkapan Mitra; kerusakan akibat kelalaian Pengguna menjadi tanggung jawab Pengguna.</li>
          <li>Untuk SEVA SEND: memberikan informasi isi paket secara jujur, mematuhi batas berat dan dimensi yang ditampilkan di aplikasi, dan tidak mengirim barang yang dilarang peraturan perundang-undangan.</li>
        </ul>
      </>
    ),
  },
  {
    id: "keselamatan",
    title: "Keselamatan",
    content: (
      <p>
        Aplikasi menyediakan fitur keselamatan seperti tombol darurat (SOS) dan pelacakan
        perjalanan. Gunakan fitur tersebut bila Anda merasa tidak aman. Dalam keadaan darurat,
        hubungi juga layanan darurat setempat. Informasi lebih lanjut tersedia pada halaman{" "}
        <Link href="/safety">Standar Keselamatan</Link>.
      </p>
    ),
  },
  {
    id: "hak-kekayaan-intelektual",
    title: "Hak Kekayaan Intelektual",
    content: (
      <p>
        Nama, logo, tampilan, perangkat lunak, dan konten SEVA dilindungi hak kekayaan
        intelektual dan merupakan milik {LEGAL_NAME} atau pemberi lisensinya. Anda tidak
        diperkenankan menyalin, memodifikasi, atau mendistribusikannya tanpa izin tertulis.
      </p>
    ),
  },
  {
    id: "tanggung-jawab",
    title: "Batasan Tanggung Jawab",
    content: (
      <>
        <p>
          Sepanjang diizinkan oleh peraturan perundang-undangan, SEVA tidak bertanggung jawab atas
          kerugian tidak langsung, atau kerugian yang timbul karena keadaan di luar kendali wajar
          kami (misalnya kemacetan, cuaca ekstrem, gangguan jaringan, atau tindakan pihak
          ketiga).
        </p>
        <p>
          Ketentuan ini tidak membatasi hak Pengguna sebagai konsumen berdasarkan peraturan
          perundang-undangan yang berlaku, maupun tanggung jawab yang menurut hukum tidak dapat
          dikecualikan.
        </p>
      </>
    ),
  },
  {
    id: "penangguhan",
    title: "Penangguhan dan Penghentian",
    content: (
      <p>
        SEVA dapat menangguhkan atau menghentikan akses Anda jika terdapat pelanggaran syarat ini,
        dugaan penipuan, atau alasan keselamatan. Anda dapat berhenti menggunakan Layanan kapan
        saja dan meminta penghapusan akun melalui kanal bantuan.
      </p>
    ),
  },
  {
    id: "perubahan",
    title: "Perubahan Syarat",
    content: (
      <p>
        Kami dapat memperbarui syarat ini dari waktu ke waktu. Versi terbaru berlaku sejak
        dipublikasikan di halaman ini. Dengan terus menggunakan Layanan setelah perubahan, Anda
        dianggap menyetujui syarat yang diperbarui.
      </p>
    ),
  },
  {
    id: "hukum",
    title: "Hukum yang Berlaku dan Penyelesaian Sengketa",
    content: (
      <p>
        Syarat ini diatur oleh hukum Republik Indonesia. Sengketa akan diupayakan diselesaikan
        secara musyawarah terlebih dahulu; apabila tidak tercapai, sengketa diselesaikan melalui
        lembaga atau pengadilan yang berwenang di Indonesia.
      </p>
    ),
  },
  {
    id: "kontak",
    title: "Hubungi Kami",
    content: (
      <p>
        <strong>{LEGAL_NAME}</strong>
        <br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <br />
        Call center 24/7: 1500-SEVA
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          badge="KETENTUAN PENGGUNAAN LAYANAN"
          title="Syarat & Ketentuan"
          subtitle="Aturan penggunaan situs dan aplikasi SEVA: pemesanan, tarif, pembayaran, pembatalan, serta hak dan kewajiban para pihak."
          breadcrumbs={[{ label: "Syarat & Ketentuan" }]}
        />
        <LegalDocument
          updatedAt="10 Oktober 2026"
          intro={
            <p>
              Mohon baca syarat dan ketentuan berikut dengan saksama sebelum menggunakan layanan
              SEVA.
            </p>
          }
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}

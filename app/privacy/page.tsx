import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import LegalDocument, { type LegalSection } from "@/components/layout/LegalDocument";
import { LEGAL_NAME, SUPPORT_EMAIL } from "@/lib/site";
import { CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kebijakan Privasi",
  description:
    "Cara SEVA mengumpulkan, menggunakan, dan melindungi data pribadi pengguna, serta hak Anda berdasarkan UU Pelindungan Data Pribadi.",
  path: "/privacy",
});

const CONTACT_EMAIL = SUPPORT_EMAIL;

const sections: LegalSection[] = [
  {
    id: "pengendali-data",
    title: "Pengendali Data",
    content: (
      <>
        <p>
          Kebijakan ini berlaku untuk situs <strong>sevataxi.com</strong> dan aplikasi SEVA yang
          dikelola oleh <strong>{LEGAL_NAME}</strong> (&ldquo;SEVA&rdquo;, &ldquo;kami&rdquo;).
          Dalam kebijakan ini, SEVA bertindak sebagai pengendali data pribadi sebagaimana diatur
          dalam Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (&ldquo;UU
          PDP&rdquo;).
        </p>
      </>
    ),
  },
  {
    id: "data-dikumpulkan",
    title: "Data yang Kami Kumpulkan",
    content: (
      <>
        <p>Data yang kami proses bergantung pada layanan yang Anda gunakan:</p>
        <ul>
          <li>
            <strong>Data akun</strong> — nama, nomor telepon, dan informasi profil lain yang Anda
            berikan saat mendaftar atau memverifikasi akun (termasuk verifikasi OTP).
          </li>
          <li>
            <strong>Data lokasi</strong> — titik jemput, tujuan, dan rute perjalanan saat Anda
            memesan atau menjalankan perjalanan.
          </li>
          <li>
            <strong>Data transaksi</strong> — rincian pemesanan, tarif, metode pembayaran, dan
            riwayat penggunaan SEVA eWallet.
          </li>
          <li>
            <strong>Data komunikasi</strong> — pesan dan panggilan antara Anda dan mitra pengemudi
            melalui fitur komunikasi di aplikasi, serta percakapan dengan layanan pelanggan.
          </li>
          <li>
            <strong>Data keselamatan</strong> — laporan insiden atau penggunaan tombol darurat
            (SOS), dan pada armada yang dilengkapi kamera kabin, rekaman yang relevan untuk
            keselamatan perjalanan.
          </li>
          <li>
            <strong>Data perangkat dan penggunaan</strong> — jenis perangkat, versi aplikasi, dan
            catatan teknis yang diperlukan agar aplikasi berfungsi dengan baik.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "situs-web",
    title: "Penggunaan Situs Web sevataxi.com",
    content: (
      <>
        <p>
          Situs ini bersifat informasi. Anda tidak perlu membuat akun untuk mengunjunginya.
          Teks yang Anda isi pada simulasi tarif di beranda diproses di peramban Anda untuk
          menampilkan estimasi dan tidak kami kirim atau simpan di server.
        </p>
        <p>
          Kami menggunakan Vercel Web Analytics untuk menghitung kunjungan halaman secara agregat.
          Layanan ini tidak memakai cookie dan tidak mengidentifikasi Anda secara pribadi. Situs ini
          tidak memasang cookie pelacak maupun piksel iklan.
        </p>
        <p>
          Formulir kemitraan (korporat, fleet operator, dan merchant) tidak menyimpan isian Anda di
          server kami. Isian disusun menjadi pesan yang Anda kirim sendiri melalui WhatsApp atau
          email ke tim SEVA, lalu kami gunakan untuk menindaklanjuti permintaan Anda.
        </p>
      </>
    ),
  },
  {
    id: "tujuan",
    title: "Tujuan Penggunaan Data",
    content: (
      <ul>
        <li>Menyediakan layanan: memproses pemesanan, mencocokkan Anda dengan mitra pengemudi, dan mengantarkan perjalanan atau paket.</li>
        <li>Memproses pembayaran, termasuk verifikasi OTP dan pencatatan SEVA eWallet.</li>
        <li>Menjaga keselamatan, mencegah penipuan, dan menangani laporan atau keluhan.</li>
        <li>Memberikan dukungan pelanggan dan menghubungi Anda terkait pesanan.</li>
        <li>Memenuhi kewajiban hukum dan permintaan resmi dari otoritas yang berwenang.</li>
        <li>Menganalisis dan meningkatkan kualitas layanan serta pengalaman penggunaan.</li>
      </ul>
    ),
  },
  {
    id: "dasar-pemrosesan",
    title: "Dasar Pemrosesan",
    content: (
      <p>
        Kami memproses data pribadi berdasarkan persetujuan Anda, pelaksanaan perjanjian
        penggunaan layanan, pemenuhan kewajiban hukum, dan/atau kepentingan yang sah, sesuai
        dengan UU PDP. Anda dapat menarik persetujuan kapan saja, dengan konsekuensi bahwa
        sebagian layanan mungkin tidak dapat kami berikan.
      </p>
    ),
  },
  {
    id: "pembagian-data",
    title: "Pembagian Data kepada Pihak Lain",
    content: (
      <>
        <p>Kami membagikan data hanya sebatas yang diperlukan kepada:</p>
        <ul>
          <li>
            <strong>Mitra pengemudi dan fleet operator</strong> — informasi yang diperlukan untuk
            menjalankan pesanan, seperti nama, titik jemput, dan tujuan. Nomor telepon Anda
            disamarkan melalui fitur masking pada komunikasi di aplikasi.
          </li>
          <li>
            <strong>Penyedia layanan</strong> — pihak yang membantu kami mengoperasikan layanan,
            misalnya penyedia infrastruktur teknologi dan pemrosesan pembayaran, yang terikat
            kewajiban menjaga kerahasiaan data.
          </li>
          <li>
            <strong>Otoritas yang berwenang</strong> — apabila diwajibkan oleh peraturan
            perundang-undangan atau perintah yang sah.
          </li>
        </ul>
        <p>Kami tidak menjual data pribadi Anda.</p>
      </>
    ),
  },
  {
    id: "penyimpanan-keamanan",
    title: "Penyimpanan dan Keamanan",
    content: (
      <>
        <p>
          Kami menyimpan data pribadi selama diperlukan untuk tujuan yang dijelaskan di atas atau
          selama diwajibkan oleh peraturan perundang-undangan, kemudian menghapus atau
          menganonimkannya.
        </p>
        <p>
          Kami menerapkan langkah pengamanan teknis dan organisasi yang wajar untuk melindungi
          data dari akses, pengungkapan, perubahan, atau penghapusan yang tidak sah. Meski
          demikian, tidak ada sistem yang sepenuhnya bebas risiko; jaga kerahasiaan kode OTP dan
          perangkat Anda.
        </p>
      </>
    ),
  },
  {
    id: "hak-anda",
    title: "Hak Anda",
    content: (
      <>
        <p>Berdasarkan UU PDP, Anda berhak untuk:</p>
        <ul>
          <li>mendapatkan informasi tentang pemrosesan data pribadi Anda;</li>
          <li>mengakses dan memperoleh salinan data pribadi Anda;</li>
          <li>melengkapi atau memperbarui data yang tidak akurat;</li>
          <li>meminta penghapusan atau pemusnahan data, serta mengakhiri pemrosesan;</li>
          <li>menarik persetujuan yang telah diberikan;</li>
          <li>mengajukan keberatan atau meminta pembatasan pemrosesan tertentu;</li>
          <li>meminta data Anda dalam format yang dapat dipindahkan (portabilitas), sepanjang berlaku.</li>
        </ul>
        <p>
          Untuk menggunakan hak tersebut, hubungi kami melalui{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Kami dapat meminta verifikasi
          identitas sebelum memproses permintaan, dan akan menanggapinya dalam jangka waktu yang
          diatur peraturan perundang-undangan.
        </p>
      </>
    ),
  },
  {
    id: "anak",
    title: "Anak di Bawah Umur",
    content: (
      <p>
        Layanan SEVA tidak ditujukan bagi anak-anak. Penggunaan oleh anak di bawah umur harus
        dengan pendampingan dan persetujuan orang tua atau wali. Jika Anda yakin data seorang anak
        telah kami kumpulkan tanpa persetujuan yang sah, hubungi kami agar dapat kami tindak
        lanjuti.
      </p>
    ),
  },
  {
    id: "perubahan",
    title: "Perubahan Kebijakan",
    content: (
      <p>
        Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Versi terbaru selalu tersedia di
        halaman ini beserta tanggal pembaruannya. Perubahan yang material akan kami informasikan
        melalui aplikasi atau kanal resmi lainnya.
      </p>
    ),
  },
  {
    id: "kontak",
    title: "Hubungi Kami",
    content: (
      <>
        <p>
          <strong>{LEGAL_NAME}</strong>
          <br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />
          WhatsApp / Telepon: <a href={CONTACT_WHATSAPP_URL}>{CONTACT_PHONE_DISPLAY}</a>
        <br />
        Instagram: <a href={INSTAGRAM_URL}>{INSTAGRAM_HANDLE}</a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          badge="PELINDUNGAN DATA PRIBADI // UU NO. 27 TAHUN 2022"
          title="Kebijakan Privasi"
          subtitle="Kami menjelaskan data apa yang dikumpulkan saat Anda memakai SEVA, untuk apa digunakan, bagaimana dilindungi, dan hak apa yang Anda miliki."
          breadcrumbs={[{ label: "Kebijakan Privasi" }]}
        />
        <LegalDocument
          updatedAt="10 Oktober 2026"
          intro={
            <p>
              Privasi Anda penting bagi kami. Dengan menggunakan situs dan aplikasi SEVA, Anda
              memahami cara kami memproses data pribadi sebagaimana dijelaskan pada halaman ini.
            </p>
          }
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}

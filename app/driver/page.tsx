import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import StoreBadges from "@/components/ui/StoreBadges";
import {
  Bike,
  Car,
  Wallet,
  Zap,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Smartphone,
  Award,
  Sparkles,
  ArrowRight,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pendaftaran Mitra Pengemudi — SEVA Driver",
  description:
    "Gabung jadi mitra pengemudi SEVA Ride atau SEVA Car. Komisi hanya 5% (bawa pulang bersih 95%), pencairan dana harian H+0, dan kebebasan penuh mengatur jam kerja.",
  alternates: { canonical: "/driver" },
};

const DRIVER_BENEFITS = [
  {
    icon: Wallet,
    title: "Bawa Pulang Bersih 95%",
    desc: "Potongan platform hanya 5%, tidak lebih. Kerja keras Anda dihargai maksimal dengan porsi pendapatan terbesar milik Anda.",
    badge: "Komisi 5%",
  },
  {
    icon: Zap,
    title: "Pencairan Dana Instan H+0",
    desc: "Hasil perjalanan langsung masuk ke dompet pengemudi dan bisa ditarik kapan saja ke rekening bank tanpa potongan tersembunyi.",
    badge: "Tarik Harian",
  },
  {
    icon: Clock,
    title: "Kebebasan Jam Kerja Fleksibel",
    desc: "Anda bos untuk diri sendiri. Tentukan kapan mulai dan selesai bekerja, cocok untuk penghasilan utama maupun penghasilan tambahan.",
    badge: "Bebas Waktu",
  },
  {
    icon: ShieldCheck,
    title: "Perlindungan Asuransi Perjalanan",
    desc: "Seluruh mitra pengemudi dilindungi jaminan asuransi kecelakaan diri selama menerima dan menyelesaikan pesanan.",
    badge: "Terlindungi",
  },
  {
    icon: Award,
    title: "Bonus Target & Insentif Rutin",
    desc: "Raih bonus performa mingguan dan skema insentif jam sibuk untuk meningkatkan total penghasilan Anda.",
    badge: "Bonus Harian",
  },
  {
    icon: Headphones,
    title: "Dukungan Tim Operasional 24/7",
    desc: "Tim layanan bantuan darurat dan customer support SEVA siap mendampingi mitra di jalan selama 24 jam non-stop.",
    badge: "Bantuan 24/7",
  },
];

const REQUIREMENTS = [
  {
    category: "Persyaratan Pribadi",
    items: [
      "Warga Negara Indonesia (WNI), usia 18–60 tahun",
      "KTP Asli yang masih berlaku",
      "SIM C Asli aktif (untuk motor) atau SIM A Asli aktif (untuk mobil)",
      "SKCK (Surat Keterangan Catatan Kepolisian) yang masih berlaku",
      "Memiliki rekening bank atas nama pribadi",
    ],
  },
  {
    category: "Persyaratan Kendaraan & Perangkat",
    items: [
      "STNK dan Pajak Kendaraan aktif sesuai unit",
      "Sepeda motor minimal tahun 2016 (kondisi prima)",
      "Mobil MPV/Sedan minimal tahun 2017 ber-AC dingin",
      "Smartphone Android (RAM min 3GB) atau iOS dengan GPS aktif",
      "Kondisi fisik kendaraan bersih dan layak jalan",
    ],
  },
];

const STEPS = [
  {
    step: "01",
    title: "Unduh Aplikasi SEVA Driver",
    desc: "Download aplikasi resmi SEVA Driver di Google Play Store atau Apple App Store secara gratis.",
  },
  {
    step: "02",
    title: "Lengkapi Data & Dokumen",
    desc: "Buka aplikasi, masukkan nomor ponsel aktif, lalu foto KTP, SIM, STNK, dan SKCK secara jelas.",
  },
  {
    step: "03",
    title: "Verifikasi Cepat 1x24 Jam",
    desc: "Tim verifikasi SEVA akan memeriksa berkas Anda dan mengirimkan notifikasi aktivasi akun.",
  },
  {
    step: "04",
    title: "Ambil Atribut & Langsung Narik",
    desc: "Akun aktif seketika. Hidupkan tombol online dan mulai terima pesanan pertama Anda di kota Anda!",
  },
];

export default function DriverPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Header Breadcrumb */}
        <PageHeader
          badge="KEMITRAAN PENGEMUDI // SEVA DRIVER"
          title="Gabung Jadi Mitra Pengemudi, Bawa Pulang Bersih 95%"
          subtitle="Raih penghasilan maksimal dengan potongan komisi platform hanya 5%, tidak lebih, pencairan dana instan harian (H+0), dan kebebasan penuh mengatur waktu kerja Anda."
          breadcrumbs={[
            { label: "Kemitraan", href: "/fleet-operator" },
            { label: "Mitra Drivers" },
          ]}
          metrics={[
            { label: "Bagi Hasil Bersih", value: "95%", hint: "Potongan hanya 5%" },
            { label: "Pencairan Dana", value: "H+0 Instan", hint: "Tarik saldo setiap hari" },
            { label: "Biaya Registrasi", value: "GRATIS", hint: "Tanpa biaya pendaftaran" },
          ]}
        />

        {/* Hero Banner Section */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#102a6b] to-[#154194] text-white p-5 sm:p-10 lg:p-14 shadow-xl">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 border border-white/20 text-blue-200 max-w-full">
                    <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                    <span className="break-words">PENDAFTARAN DIBUKA DI JABODETABEK &amp; KOTA BESAR</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight break-words">
                    Pilihan Tepat untuk Masa Depan Finansial Anda
                  </h2>

                  <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
                    Jadilah bagian dari revolusi transportasi on-demand yang adil bagi pengemudi. Nikmati order tanpa henti dari jutaan pengguna aplikasi SEVA untuk layanan SEVA Ride, SEVA Car, dan SEVA Send.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <StoreBadges size="lg" />
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center max-w-xs space-y-3">
                    <div className="text-xs font-mono uppercase text-blue-200">Estimasi Pendapatan Rata-rata</div>
                    <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">Rp 5–12 Jt</div>
                    <p className="text-xs text-blue-100/80">
                      Per bulan berdasarkan performa trip harian dan bonus insentif jam sibuk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KEUNTUNGAN MITRA SEVA</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Mengapa Harus Bergabung dengan SEVA?
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                Kami menempatkan kesejahteraan pengemudi sebagai prioritas nomor satu dalam ekosistem transportasi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DRIVER_BENEFITS.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#225FD2] border border-blue-100">
                          {b.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">{b.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>DOKUMEN & SYARAT</span>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Syarat Pendaftaran Mitra Pengemudi
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                Siapkan dokumen asli berikut sebelum melakukan pendaftaran di aplikasi SEVA Driver:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REQUIREMENTS.map((req) => (
                <div key={req.category} className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-4 pb-3 border-b border-slate-200">
                    {req.category}
                  </h3>
                  <ul className="space-y-3.5 text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Steps to Register */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight sm:whitespace-nowrap">
                Cara Mendaftar Jadi Mitra Driver
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                Proses registrasi 100% online langsung dari ponsel pintar Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="text-3xl font-black font-mono text-[#225FD2] mb-3">{s.step}</div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

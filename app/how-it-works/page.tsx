import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import AppDownload from "@/components/sections/AppDownload";

export const metadata: Metadata = {
  title: "Cara Kerja & Alur Pemesanan — SEVA Taxi",
  description:
    "Pelajari alur dispatching cerdas SEVA Taxi: penentuan rute presisi, pencocokan pengemudi tercepat, monitoring perjalanan realtime, dan kwitansi resmi digital.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          badge="ALUR LAYANAN // DISPATCHING OTOMATIS BERBASIS AI & GPS"
          title="Cara Kerja & Alur Pemesanan"
          subtitle="Teknologi pintar menghubungkan Anda dengan armada taksi terdekat dalam hitungan detik. Tanpa tawar-menawar argo, tanpa biaya terselubung."
          breadcrumbs={[{ label: "Cara Kerja" }]}
          metrics={[
            { label: "Waktu Matching", value: "< 45 Detik", hint: "Algoritma terdekat" },
            { label: "Metode Bayar", value: "QRIS / Cash", hint: "AstraPay & Kartu" },
            { label: "Bukti Transaksi", value: "E-Receipt", hint: "Kwitansi PDF instan" },
          ]}
        />
        <HowItWorks />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

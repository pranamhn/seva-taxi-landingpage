import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Safety from "@/components/sections/Safety";
import AppDownload from "@/components/sections/AppDownload";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Standar Keselamatan",
  description:
    "Fitur keselamatan SEVA: tombol darurat SOS 24/7, bagikan perjalanan secara live, penyamaran nomor HP, dan verifikasi dokumen pengemudi.",
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          badge="PROTOKOL KEAMANAN BERLAPIS"
          title="Standar Keselamatan SEVA"
          subtitle="Setiap kilometer perjalanan Anda dipantau oleh sensor telematika keselamatan sevaqu.com dan dilindungi SOP ketat sejak pintu mobil tertutup hingga tujuan akhir."
          breadcrumbs={[{ label: "Standar Keselamatan" }]}
          metrics={[
            { label: "Tombol Darurat", value: "SOS 24/7", hint: "Terhubung ke tim respons" },
            { label: "Bagikan Perjalanan", value: "Live", hint: "Pantau rute secara real-time" },
            { label: "Verifikasi Driver", value: "SKCK & SIM", hint: "Audit dokumen resmi" },
          ]}
        />
        <Safety />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

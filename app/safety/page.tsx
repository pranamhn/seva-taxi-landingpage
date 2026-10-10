import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Safety from "@/components/sections/Safety";
import AppDownload from "@/components/sections/AppDownload";

export const metadata: Metadata = {
  title: "Standar Keselamatan & Kepatuhan — SEVA Taxi",
  description:
    "Protokol keselamatan aktif penumpang & driver: monitoring batas kecepatan OBD-II sevaqu, tombol darurat SOS 24/7, verifikasi SKCK resmi, dan kepatuhan izin Kemenhub RI.",
  alternates: { canonical: "/safety" },
};

export default function SafetyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          badge="PROTOKOL KEAMANAN BERLAPIS // KEMENHUB RI & STANDAR REGULASI"
          title="Standar Keselamatan & Regulasi"
          subtitle="Setiap kilometer perjalanan Anda dipantau oleh sensor telematika keselamatan sevaqu.com dan dilindungi SOP ketat sejak pintu mobil tertutup hingga tujuan akhir."
          breadcrumbs={[{ label: "Standar Keselamatan" }]}
          metrics={[
            { label: "Respon Tim SOS", value: "< 90 Detik", hint: "Dispatch darurat 24/7" },
            { label: "Kepatuhan Regulasi", value: "100%", hint: "Uji KIR & Kemenhub RI" },
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

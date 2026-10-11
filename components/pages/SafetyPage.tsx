import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Safety from "@/components/sections/Safety";
import AppDownload from "@/components/sections/AppDownload";
import type { Locale } from "@/lib/i18n";

export const SAFETY_COPY = {
  id: {
    metaTitle: "Standar Keselamatan",
    metaDescription:
      "Fitur keselamatan SEVA: tombol darurat SOS ke 112 atau kontak darurat, bagikan perjalanan secara live, penyamaran nomor HP, dan verifikasi dokumen pengemudi.",
    badge: "PROTOKOL KEAMANAN BERLAPIS",
    title: "Standar Keselamatan SEVA",
    subtitle:
      "Rute dan posisi setiap perjalanan tercatat lewat lokasi GPS aplikasi driver dan penumpang, dilindungi SOP ketat sejak penjemputan hingga tujuan akhir.",
    crumb: "Standar Keselamatan",
    metrics: [
      { label: "Tombol Darurat", value: "SOS", hint: "Hubungi 112 atau kontak darurat" },
      { label: "Bagikan Perjalanan", value: "Live", hint: "Pantau rute secara real-time" },
      { label: "Verifikasi Driver", value: "SKCK & SIM", hint: "Audit dokumen resmi" },
    ],
  },
  en: {
    metaTitle: "Safety Standards",
    metaDescription:
      "SEVA safety features: an SOS button to call 112 or your emergency contact, live trip sharing, phone number masking, and driver document checks.",
    badge: "LAYERED SAFETY PROTOCOLS",
    title: "SEVA Safety Standards",
    subtitle:
      "Every trip's route and position is recorded through the driver and passenger app GPS, backed by strict procedures from pickup to drop-off.",
    crumb: "Safety Standards",
    metrics: [
      { label: "Emergency Button", value: "SOS", hint: "Call 112 or an emergency contact" },
      { label: "Trip Sharing", value: "Live", hint: "Follow the route in real time" },
      { label: "Driver Checks", value: "Police & Licence", hint: "Official document review" },
    ],
  },
} as const;

// Dipakai app/(id)/safety dan app/(en)/en/safety.
export default function SafetyPage({ locale }: { locale: Locale }) {
  const t = SAFETY_COPY[locale];
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: t.crumb }]}
          metrics={[...t.metrics]}
        />
        <Safety locale={locale} />
        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

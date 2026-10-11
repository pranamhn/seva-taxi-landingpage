import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import FaqCenter from "@/components/sections/FaqCenter";
import LeadForm from "@/components/sections/LeadForm";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { FAQ_LIST } from "@/lib/faq";
import { FAQ_LIST_EN } from "@/lib/faq-en";
import type { Locale } from "@/lib/i18n";

export const FAQ_COPY = {
  id: {
    list: FAQ_LIST,
    metaTitle: "Pusat Bantuan & FAQ",
    metaDescription:
      "Jawaban seputar pemesanan dan tarif SEVA Ride, Car, dan Send, pembayaran SEVA eWallet, pendaftaran driver, keselamatan, serta kemitraan.",
    badge: "PUSAT BANTUAN // TANYA JAWAB",
    title: "Pusat Bantuan SEVA",
    subtitle:
      "Cari jawaban seputar pemesanan dan tarif, SEVA eWallet, pendaftaran mitra pengemudi, dan keselamatan. Belum terjawab? Laporkan masalah Anda di bagian bawah halaman.",
    crumb: "Bantuan & FAQ",
    metrics: (n: number) => [
      { label: "Topik Bantuan", value: `${n} Jawaban`, hint: "Dari pemesanan hingga kemitraan" },
      { label: "Metode Bayar", value: "SEVA eWallet", hint: "QRIS & tunai juga tersedia" },
      { label: "Area Layanan", value: "Jabodetabek", hint: "Beroperasi 24 jam" },
    ],
  },
  en: {
    list: FAQ_LIST_EN,
    metaTitle: "Help Center & FAQ",
    metaDescription:
      "Answers about booking and fares for SEVA Ride, Car, and Send, SEVA eWallet payments, driver sign-up, safety, and partnerships.",
    badge: "HELP CENTER // FAQ",
    title: "SEVA Help Center",
    subtitle:
      "Find answers about booking and fares, SEVA eWallet, driver sign-up, and safety. Still stuck? Report your problem at the bottom of this page.",
    crumb: "Help & FAQ",
    metrics: (n: number) => [
      { label: "Help Topics", value: `${n} Answers`, hint: "From booking to partnerships" },
      { label: "Payment", value: "SEVA eWallet", hint: "QRIS & cash also accepted" },
      { label: "Service Area", value: "Greater Jakarta", hint: "Operating 24 hours" },
    ],
  },
};

// Dipakai app/(id)/faq dan app/(en)/en/faq.
export default function FaqPage({ locale }: { locale: Locale }) {
  const t = FAQ_COPY[locale];
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
          metrics={t.metrics(t.list.length)}
        />

        <FaqJsonLd faqs={t.list.map((f) => ({ q: f.question, a: f.answer }))} />
        <FaqCenter locale={locale} />
        <LeadForm variant="support" locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

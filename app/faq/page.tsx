import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import FaqCenter from "@/components/sections/FaqCenter";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { FAQ_LIST } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pusat Bantuan & FAQ",
  description:
    "Jawaban seputar pemesanan dan tarif SEVA Ride, Car, dan Send, pembayaran SEVA eWallet, pendaftaran driver, keselamatan, serta kemitraan.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          badge="PUSAT BANTUAN // TANYA JAWAB"
          title="Pertanyaan yang Sering Diajukan (FAQ)"
          subtitle="Temukan jawaban seputar pemesanan dan tarif, pembayaran dengan SEVA eWallet, pendaftaran mitra pengemudi, hingga fitur keselamatan perjalanan."
          breadcrumbs={[{ label: "Bantuan & FAQ" }]}
          metrics={[
            { label: "Topik Bantuan", value: `${FAQ_LIST.length} Jawaban`, hint: "Dari pemesanan hingga kemitraan" },
            { label: "Metode Bayar", value: "SEVA eWallet", hint: "QRIS & tunai juga tersedia" },
            { label: "Area Layanan", value: "Jabodetabek", hint: "Beroperasi 24 jam" },
          ]}
        />

        <FaqJsonLd faqs={FAQ_LIST.map((f) => ({ q: f.question, a: f.answer }))} />
        <FaqCenter />
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { localePath, type Locale } from "@/lib/i18n";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LEGAL_NAME,
  LINKEDIN_URL,
  OFFICE_ADDRESS_LINES,
  OFFICE_MAPS_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";

type Topic = { who: string; desc: string; href: string; cta: string; external?: boolean };

export const CONTACT_COPY: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    subtitle: string;
    whatsappDesc: string;
    emailLabel: string;
    emailDesc: string;
    officeLabel: string;
    openMaps: string;
    topicsTitle: string;
    topics: Topic[];
    socialTitle: string;
    operator: string;
    complaintsTitle: string;
    complaintsBody: string;
    complaintsWa: string;
  }
> = {
  id: {
    metaTitle: "Hubungi Kami",
    metaDescription: `Kontak resmi SEVA: WhatsApp ${CONTACT_PHONE_DISPLAY}, email ${SUPPORT_EMAIL}, alamat kantor, serta kanal untuk mitra driver, fleet operator, korporat, merchant, dan media.`,
    badge: "KONTAK RESMI SEVA",
    title: "Hubungi Kami",
    subtitle: "Gunakan kanal resmi di halaman ini. SEVA tidak pernah meminta kode OTP, PIN, atau kata sandi Anda melalui telepon, chat, maupun email.",
    whatsappDesc: "Kanal tercepat untuk bantuan perjalanan dan kemitraan.",
    emailLabel: "Email",
    emailDesc: "Untuk laporan yang butuh lampiran, permintaan data, atau media.",
    officeLabel: "Kantor",
    openMaps: "Buka di Google Maps →",
    topicsTitle: "Pilih Sesuai Kebutuhan",
    topics: [
      { who: "Penumpang & pengirim paket", desc: "Barang tertinggal, tarif, pembayaran, atau kendala perjalanan.", href: "/faq#laporkan-masalah", cta: "Laporkan masalah" },
      { who: "Mitra driver", desc: "Pendaftaran, dokumen, pencairan, dan bantuan di jalan.", href: "/partner/driver", cta: "Info mitra driver" },
      { who: "Fleet operator", desc: "Integrasi armada taksi, rental, atau shuttle.", href: "/partner/fleet#daftar-operator", cta: "Daftarkan armada" },
      { who: "Perusahaan", desc: "Akun korporat, voucher karyawan, dan faktur bulanan.", href: "/partner/b2b#ajukan-kemitraan", cta: "Ajukan kemitraan" },
      { who: "Merchant kuliner", desc: "Daftar lebih awal untuk SEVA Food.", href: "/services/food#daftar-merchant", cta: "Daftar merchant" },
      {
        who: "Media & kerja sama",
        desc: "Permintaan wawancara, data, atau kolaborasi.",
        href: `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Media & Kerja Sama SEVA")}`,
        cta: SUPPORT_EMAIL,
        external: true,
      },
    ],
    socialTitle: "Media Sosial Resmi",
    operator: "Pengelola",
    complaintsTitle: "Layanan Pengaduan Konsumen",
    complaintsBody:
      "Bila pengaduan Anda belum terselesaikan oleh tim SEVA, Anda dapat menghubungi Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga (PKTN), Kementerian Perdagangan Republik Indonesia.",
    complaintsWa: "WhatsApp Ditjen PKTN:",
  },
  en: {
    metaTitle: "Contact Us",
    metaDescription: `Official SEVA contacts: WhatsApp ${CONTACT_PHONE_DISPLAY}, email ${SUPPORT_EMAIL}, office address, and channels for drivers, fleet operators, companies, merchants, and media.`,
    badge: "OFFICIAL SEVA CONTACTS",
    title: "Contact Us",
    subtitle: "Only use the official channels on this page. SEVA will never ask for your OTP code, PIN, or password by phone, chat, or email.",
    whatsappDesc: "The fastest way to get trip or partnership support.",
    emailLabel: "Email",
    emailDesc: "For reports with attachments, data requests, or media enquiries.",
    officeLabel: "Office",
    openMaps: "Open in Google Maps →",
    topicsTitle: "Choose What You Need",
    topics: [
      { who: "Passengers & senders", desc: "Lost items, fares, payments, or trip issues.", href: "/faq#laporkan-masalah", cta: "Report a problem" },
      { who: "Driver partners", desc: "Sign-up, documents, payouts, and help on the road.", href: "/partner/driver", cta: "Driver partner info" },
      { who: "Fleet operators", desc: "Connect your taxi, rental, or shuttle fleet.", href: "/partner/fleet#daftar-operator", cta: "Register your fleet" },
      { who: "Companies", desc: "Corporate accounts, staff vouchers, and monthly invoices.", href: "/partner/b2b#ajukan-kemitraan", cta: "Apply for a partnership" },
      { who: "Food merchants", desc: "Register early for SEVA Food.", href: "/services/food#daftar-merchant", cta: "Register as a merchant" },
      {
        who: "Media & partnerships",
        desc: "Interview, data, or collaboration requests.",
        href: `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("SEVA Media & Partnerships")}`,
        cta: SUPPORT_EMAIL,
        external: true,
      },
    ],
    socialTitle: "Official Social Media",
    operator: "Operated by",
    complaintsTitle: "Consumer Complaints",
    complaintsBody:
      "If the SEVA team has not resolved your complaint, you can contact the Directorate General of Consumer Protection and Trade Compliance (PKTN), Ministry of Trade of the Republic of Indonesia.",
    complaintsWa: "PKTN WhatsApp:",
  },
};

// Dipakai app/(id)/contact dan app/(en)/en/contact.
export default function ContactPage({ locale }: { locale: Locale }) {
  const t = CONTACT_COPY[locale];
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader locale={locale} badge={t.badge} title={t.title} subtitle={t.subtitle} breadcrumbs={[{ label: t.title }]} />

        {/* Kanal utama */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#225FD2]/50 transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <MessageCircle className="w-4 h-4 text-[#225FD2]" aria-hidden="true" /> WhatsApp
              </span>
              <span className="mt-2 block text-xl font-bold text-slate-900 tabular-nums group-hover:text-[#225FD2] transition-colors">
                {CONTACT_PHONE_DISPLAY}
              </span>
              <span className="mt-1 block text-sm text-slate-600">{t.whatsappDesc}</span>
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="group p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#225FD2]/50 transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <Mail className="w-4 h-4 text-[#225FD2]" aria-hidden="true" /> {t.emailLabel}
              </span>
              <span className="mt-2 block text-xl font-bold text-slate-900 group-hover:text-[#225FD2] transition-colors">
                {SUPPORT_EMAIL}
              </span>
              <span className="mt-1 block text-sm text-slate-600">{t.emailDesc}</span>
            </a>
            <a
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#225FD2]/50 transition-colors md:col-span-2 lg:col-span-1"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <MapPin className="w-4 h-4 text-[#225FD2]" aria-hidden="true" /> {t.officeLabel}
              </span>
              <address className="mt-2 not-italic text-sm font-medium text-slate-900 leading-relaxed group-hover:text-[#225FD2] transition-colors">
                {OFFICE_ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
              <span className="mt-2 block text-xs font-semibold text-[#225FD2]">{t.openMaps}</span>
            </a>
          </div>
        </section>

        {/* Per kebutuhan */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{t.topicsTitle}</h2>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {t.topics.map((topic) => (
                <li key={topic.who}>
                  <Link
                    href={topic.external ? topic.href : localePath(locale, topic.href)}
                    className="group flex h-full flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#225FD2]/50 transition-colors"
                  >
                    <span>
                      <span className="block font-semibold text-slate-900">{topic.who}</span>
                      <span className="mt-1 block text-sm text-slate-600">{topic.desc}</span>
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#225FD2] break-all">
                      {topic.cta}
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Media sosial & pengaduan konsumen */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200">
              <h2 className="text-base font-semibold text-slate-900">{t.socialTitle}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#225FD2] font-medium hover:underline">
                    Instagram {INSTAGRAM_HANDLE}
                  </a>
                </li>
                <li>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[#225FD2] font-medium hover:underline">
                    LinkedIn SEVA Taxi
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                {t.operator}: {LEGAL_NAME}
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200">
              <h2 className="text-base font-semibold text-slate-900">{t.complaintsTitle}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t.complaintsBody}</p>
              <p className="mt-3 text-sm">
                <span className="text-slate-500">{t.complaintsWa} </span>
                <a href="https://wa.me/6285311111010" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#225FD2] tabular-nums hover:underline">
                  +62 853-1111-1010
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

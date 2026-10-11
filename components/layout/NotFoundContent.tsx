import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

const COPY: Record<Locale, { title: string; body: string; back: string; links: { label: string; href: string }[] }> = {
  id: {
    title: "Halaman tidak ditemukan",
    body: "Alamat yang Anda buka sudah dipindahkan atau tidak tersedia. Coba salah satu halaman berikut.",
    back: "Kembali ke Beranda",
    links: [
      { label: "Layanan & Tarif", href: "/services" },
      { label: "Cara Pesan", href: "/how-it-works" },
      { label: "Kota Operasional", href: "/cities" },
      { label: "Pusat Bantuan", href: "/faq" },
    ],
  },
  en: {
    title: "Page not found",
    body: "The page you opened has moved or is no longer available. Try one of these instead.",
    back: "Back to Home",
    links: [
      { label: "Services & Fares", href: "/services" },
      { label: "How to Book", href: "/how-it-works" },
      { label: "Service Areas", href: "/cities" },
      { label: "Help Center", href: "/faq" },
    ],
  },
};

// Isi halaman 404; dipakai app/(id)/not-found, app/(en)/en/not-found, dan app/global-not-found.
export default function NotFoundContent({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <main className="bg-white text-slate-900 min-h-[70svh] flex items-center pt-[96px] pb-16">
      <div className="max-w-[640px] mx-auto px-4 sm:px-6 text-center">
        <p className="font-mono text-xs font-semibold tracking-wider text-[#225FD2] tabular-nums">404</p>
        <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">{t.title}</h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{t.body}</p>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
          {t.links.map((link) => (
            <li key={link.href}>
              <Link
                href={localePath(locale, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 hover:border-[#225FD2] hover:text-[#225FD2] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={localePath(locale, "/")}
          className="mt-8 inline-flex h-10 items-center px-5 rounded-xl bg-[#225FD2] hover:bg-[#194cb0] text-white text-sm font-semibold transition-colors"
        >
          {t.back}
        </Link>
      </div>
    </main>
  );
}

"use client"; // Error boundary wajib Client Component

// Dipakai app/(id)/error.tsx dan app/(en)/en/error.tsx; bahasa dibaca dari URL.

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_WHATSAPP_URL } from "@/lib/site";
import { localeFromPathname, localePath } from "@/lib/i18n";

const COPY = {
  id: { eyebrow: "TERJADI GANGGUAN", title: "Halaman gagal dimuat", body: "Coba muat ulang. Jika masih bermasalah, hubungi tim SEVA melalui WhatsApp.", code: "Kode", retry: "Coba Lagi", home: "Ke Beranda", whatsapp: "Hubungi WhatsApp" },
  en: { eyebrow: "SOMETHING WENT WRONG", title: "This page failed to load", body: "Please try again. If the problem continues, contact the SEVA team on WhatsApp.", code: "Code", retry: "Try Again", home: "Go to Home", whatsapp: "Contact on WhatsApp" },
};

export default function ErrorView({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const locale = localeFromPathname(usePathname());
  const t = COPY[locale];
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-white text-slate-900 min-h-[100svh] flex items-center py-16">
      <div className="max-w-[560px] mx-auto px-4 sm:px-6 text-center">
        <p className="font-mono text-xs font-semibold tracking-wider text-[#225FD2]">{t.eyebrow}</p>
        <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">{t.title}</h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {t.body}
        </p>
        {error.digest && (
          <p className="mt-2 font-mono text-[11px] text-slate-400">{t.code}: {error.digest}</p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => retry()}
            className="h-10 px-5 rounded-xl bg-[#225FD2] hover:bg-[#194cb0] text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            {t.retry}
          </button>
          <Link
            href={localePath(locale, "/")}
            className="h-10 px-5 inline-flex items-center rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 hover:border-[#225FD2] hover:text-[#225FD2] transition-colors"
          >
            {t.home}
          </Link>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-5 inline-flex items-center text-sm font-semibold text-[#225FD2] hover:underline"
          >
            {t.whatsapp}
          </a>
        </div>
      </div>
    </main>
  );
}

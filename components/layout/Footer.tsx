"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LEGAL_NAME, SUPPORT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/site";
import { localePath, basePath, localeFromPathname, type Locale } from "@/lib/i18n";

function LanguageSwitch({ locale, base }: { locale: Locale; base: string }) {
  return (
    <div
      className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-[11px] font-semibold shadow-2xs"
      role="group"
      aria-label="Bahasa / Language"
    >
      {(["id", "en"] as const).map((l) => (
        <Link
          key={l}
          href={localePath(l, base)}
          hrefLang={l}
          lang={l}
          aria-current={locale === l ? "true" : undefined}
          className={`px-2 py-1 rounded-md uppercase transition-colors ${
            locale === l ? "bg-[#225FD2] text-white" : "text-slate-600 hover:text-[#225FD2]"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

type FooterLink = { label: string; href: string; external?: boolean };

const LINK_CLASS = "inline-block py-1 hover:text-[#225FD2] transition-colors";

const COPY: Record<
  Locale,
  {
    tagline: string;
    columns: { title: string; links: FooterLink[] }[];
    rights: string;
    privacy: string;
    terms: string;
  }
> = {
  id: {
    tagline:
      "Platform transportasi online dan ride-hailing di Jabodetabek dengan armada terawat, tarif pasti di awal tanpa lonjakan sepihak, serta fitur keselamatan perjalanan.",
    columns: [
      {
        title: "Layanan",
        links: [
          { label: "SEVA Ride", href: "/services/ride" },
          { label: "SEVA Car", href: "/services/car" },
          { label: "SEVA Send", href: "/services/send" },
          { label: "SEVA Food (Segera Hadir)", href: "/services/food" },
        ],
      },
      {
        title: "Perusahaan",
        links: [
          { label: "Hubungi Kami", href: "/contact" },
          { label: "Promo", href: "/promo" },
          { label: "Blog & Panduan", href: "/blog" },
        ],
      },
      {
        title: "Keamanan & Bantuan",
        links: [
          { label: "Pusat Bantuan", href: "/faq" },
          { label: "Standar Keselamatan", href: "/safety" },
          { label: "Panduan Cara Pesan", href: "/how-it-works" },
          { label: `Bantuan: ${SUPPORT_EMAIL}`, href: `mailto:${SUPPORT_EMAIL}`, external: true },
          { label: `WhatsApp: ${CONTACT_PHONE_DISPLAY}`, href: CONTACT_WHATSAPP_URL, external: true },
        ],
      },
    ],
    rights: "Hak Cipta Dilindungi.",
    privacy: "Kebijakan Privasi",
    terms: "Syarat & Ketentuan",
  },
  en: {
    tagline:
      "Ride-hailing and courier service across Greater Jakarta with well-maintained vehicles, an upfront fare with no surge pricing, and built-in trip safety features.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "SEVA Ride", href: "/services/ride" },
          { label: "SEVA Car", href: "/services/car" },
          { label: "SEVA Send", href: "/services/send" },
          { label: "SEVA Food (Coming Soon)", href: "/services/food" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Contact Us", href: "/contact" },
          { label: "Promos", href: "/promo" },
          { label: "Blog & Guides", href: "/blog" },
        ],
      },
      {
        title: "Safety & Help",
        links: [
          { label: "Help Center", href: "/faq" },
          { label: "Safety Standards", href: "/safety" },
          { label: "How to Book", href: "/how-it-works" },
          { label: `Support: ${SUPPORT_EMAIL}`, href: `mailto:${SUPPORT_EMAIL}`, external: true },
          { label: `WhatsApp: ${CONTACT_PHONE_DISPLAY}`, href: CONTACT_WHATSAPP_URL, external: true },
        ],
      },
    ],
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
};

export default function Footer({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname() || "/";
  const locale = propLocale || localeFromPathname(pathname);
  const base = basePath(pathname);
  const t = COPY[locale];
  const lp = (href: string) => localePath(locale, href);
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-10 sm:pt-12 pb-5 sm:pb-6 text-slate-600">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 sm:pb-10 border-b border-slate-200/80">

          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={lp("/")} className="inline-block transition-transform hover:scale-[1.02]">
              <Image
                src="/assets/logo/logo-seva.png"
                alt="SEVA — Ride Hailing &amp; Mobility Partner"
                width={152}
                height={48}
                className="h-8 sm:h-9 w-auto object-contain select-none"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">{t.tagline}</p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <LanguageSwitch locale={locale} base={base} />
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Image
                  src="/images/logo-pse-small.png"
                  alt="PSE Komdigi"
                  width={182}
                  height={50}
                  className="h-3.5 w-auto object-contain"
                />
                <span>TDPSE 028759.01/DJAI.PSE</span>
              </span>
            </div>

            {/* Social Links under PSE */}
            <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-blue-50/80 text-slate-700 hover:text-[#0A66C2] text-xs font-semibold border border-slate-200/90 hover:border-blue-300 shadow-2xs transition-all"
                aria-label="LinkedIn SEVA Taxi"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-pink-50/80 text-slate-700 hover:text-[#E4405F] text-xs font-semibold border border-slate-200/90 hover:border-pink-300 shadow-2xs transition-all"
                aria-label="Instagram SEVA Taxi"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#E4405F]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {t.columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-slate-900 font-bold">{col.title}</div>
              <ul className="space-y-0.5 text-xs">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`${LINK_CLASS} break-all`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={lp(link.href)} className={LINK_CLASS}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {LEGAL_NAME}. {t.rights}
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href={lp("/privacy")} className={LINK_CLASS}>{t.privacy}</Link>
            <span className="text-slate-300">•</span>
            <Link href={lp("/terms")} className={LINK_CLASS}>{t.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

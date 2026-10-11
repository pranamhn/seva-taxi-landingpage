import Link from "next/link";
import Image from "next/image";
import { LEGAL_NAME, SUPPORT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/site";

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

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-10 sm:pt-12 pb-5 sm:pb-6 text-slate-600">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 sm:pb-10 border-b border-slate-200/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <Image
                src="/assets/logo/logo-seva.png"
                alt="SEVA — Ride Hailing &amp; Mobility Partner"
                width={152}
                height={48}
                className="h-8 sm:h-9 w-auto object-contain select-none"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Platform transportasi online dan ride-hailing di Jabodetabek dengan armada terawat, tarif pasti di awal tanpa lonjakan sepihak, serta fitur keselamatan perjalanan.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Image
                  src="/images/logo-pse-small.png"
                  alt="PSE Kominfo"
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

          {/* Links Column 1: Layanan Ride */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-slate-900 font-bold">
              Layanan Mobilitas
            </div>
            <ul className="space-y-0.5 text-xs">
              <li><Link href="/services/ride" className="inline-block py-1 hover:text-[#225FD2] transition-colors">SEVA Ride</Link></li>
              <li><Link href="/services/car" className="inline-block py-1 hover:text-[#225FD2] transition-colors">SEVA Car</Link></li>
              <li><Link href="/services/send" className="inline-block py-1 hover:text-[#225FD2] transition-colors">SEVA Send</Link></li>
              <li><Link href="/services/food" className="inline-block py-1 hover:text-[#225FD2] transition-colors">SEVA Food (Segera Hadir)</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Mitra & Pengemudi */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-slate-900 font-bold">
              Gabung Mitra
            </div>
            <ul className="space-y-0.5 text-xs">
              <li><Link href="/driver-partners" className="inline-block py-1 hover:text-[#225FD2] transition-colors">Driver Partners</Link></li>
              <li><Link href="/fleet-partners" className="inline-block py-1 hover:text-[#225FD2] transition-colors">Fleet Partners</Link></li>
              <li><Link href="/b2b-partners" className="inline-block py-1 hover:text-[#225FD2] transition-colors">B2B Partners</Link></li>
            </ul>
          </div>

          {/* Links Column 3: Keamanan & Bantuan */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-slate-900 font-bold">
              Keamanan &amp; Bantuan
            </div>
            <ul className="space-y-0.5 text-xs">
              <li><Link href="/safety" className="inline-block py-1 hover:text-[#225FD2] transition-colors">Standar Keselamatan</Link></li>
              <li><Link href="/how-it-works" className="inline-block py-1 hover:text-[#225FD2] transition-colors">Panduan Cara Pesan</Link></li>
              <li><Link href="/blog" className="inline-block py-1 hover:text-[#225FD2] transition-colors">Blog &amp; Panduan</Link></li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-block py-1 hover:text-[#225FD2] transition-colors">
                  Bantuan: {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-[#225FD2] transition-colors">
                  WhatsApp: {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-[#225FD2] transition-colors">
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {LEGAL_NAME}. Hak Cipta Dilindungi.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="inline-block py-1 hover:text-[#225FD2] transition-colors">Kebijakan Privasi</Link>
            <span className="text-slate-300">•</span>
            <Link href="/terms" className="inline-block py-1 hover:text-[#225FD2] transition-colors">Syarat &amp; Ketentuan</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

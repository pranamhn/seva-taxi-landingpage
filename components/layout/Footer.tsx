import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-200/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <Image
                src="/assets/logo/logo-seva.png"
                alt="SEVA — Ride Hailing &amp; Mobility Partner"
                width={864}
                height={272}
                className="h-8 sm:h-9 w-auto object-contain select-none"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Platform transportasi online dan ride-hailing terpercaya di Indonesia dengan armada terawat, tarif argo pasti tanpa lonjakan liar, serta standar keselamatan terverifikasi.
            </p>


            <div className="flex items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
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
          </div>

          {/* Links Column 1: Layanan Ride */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Layanan Mobilitas
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services/ride" className="hover:text-[#225FD2] transition-colors">SEVA Ride</Link></li>
              <li><Link href="/services/car" className="hover:text-[#225FD2] transition-colors">SEVA Car</Link></li>
              <li><Link href="/services/send" className="hover:text-[#225FD2] transition-colors">SEVA Send</Link></li>
              <li><Link href="/services/food" className="hover:text-[#225FD2] transition-colors">SEVA Food (Segera Hadir)</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Mitra & Pengemudi */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Gabung Mitra
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/driver" className="hover:text-[#225FD2] transition-colors">Driver Partners</Link></li>
              <li><Link href="/fleet-operator" className="hover:text-[#225FD2] transition-colors">Fleet Partners</Link></li>
              <li><Link href="/b2b-partners" className="hover:text-[#225FD2] transition-colors">B2B Partners</Link></li>
            </ul>
          </div>

          {/* Links Column 3: Keamanan & Bantuan */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Keamanan &amp; Bantuan
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/safety" className="hover:text-[#225FD2] transition-colors">Standar Keselamatan</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[#225FD2] transition-colors">Panduan Cara Pesan</Link></li>
              <li><Link href="/cities" className="hover:text-[#225FD2] transition-colors">Kota Operasional</Link></li>
              <li><span className="text-slate-500 font-mono text-[11px]">Bantuan: support@seva.id</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PT Seva Inovasi Digital. Hak Cipta Dilindungi.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-[#225FD2] transition-colors">Kebijakan Privasi</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#225FD2] transition-colors">Syarat &amp; Ketentuan</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ComparisonSection from "@/components/sections/ComparisonSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Safety from "@/components/sections/Safety";
import CityCoverage from "@/components/sections/CityCoverage";
import AppDownload from "@/components/sections/AppDownload";
import type { Locale } from "@/lib/i18n";

// Beranda; dipakai app/(id)/page.tsx dan app/(en)/en/page.tsx.
export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <Hero locale={locale} />
        <Services locale={locale} />
        <ComparisonSection locale={locale} />
        <HowItWorks locale={locale} />
        <Safety locale={locale} />
        <CityCoverage locale={locale} />
        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

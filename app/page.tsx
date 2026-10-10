import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ComparisonSection from "@/components/sections/ComparisonSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Safety from "@/components/sections/Safety";
import CityCoverage from "@/components/sections/CityCoverage";
import AppDownload from "@/components/sections/AppDownload";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <Hero />
        <Services />
        <ComparisonSection />
        <HowItWorks />
        <Safety />
        <CityCoverage />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

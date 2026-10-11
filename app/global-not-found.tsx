import type { Metadata } from "next";
import "./globals.css";
import { fontClassNames } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NotFoundContent from "@/components/layout/NotFoundContent";

// 404 untuk URL yang tidak cocok dengan route mana pun (situs punya dua root layout: (id) dan (en)).
export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan | SEVA Taxi",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="id" className={fontClassNames}>
      <body className="antialiased">
        <Navbar />
        <NotFoundContent locale="id" />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: languageAlternates("/") },
};

export default function Home() {
  return <HomePage locale="id" />;
}

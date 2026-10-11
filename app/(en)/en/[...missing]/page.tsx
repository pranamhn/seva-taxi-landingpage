import { notFound } from "next/navigation";

// URL /en/... yang tidak dikenal → 404 versi Inggris (app/(en)/en/not-found.tsx), bukan global-not-found.
export default function MissingEnglishPage() {
  notFound();
}

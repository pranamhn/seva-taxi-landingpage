import { Metadata } from "next";
import PromoPage, { PROMO_COPY } from "@/components/pages/PromoPage";
import { pageMetadata } from "@/lib/seo";

// Validasi ulang tiap jam agar promo yang kedaluwarsa hilang tanpa deploy ulang.
export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: PROMO_COPY.en.metaTitle,
  description: PROMO_COPY.en.metaDescription,
  path: "/promo",
  locale: "en",
});

export default function Page() {
  return <PromoPage locale="en" />;
}

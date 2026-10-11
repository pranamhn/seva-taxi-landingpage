import { Metadata } from "next";
import PromoPage, { PROMO_COPY } from "@/components/pages/PromoPage";
import { pageMetadata } from "@/lib/seo";

// Validasi ulang tiap jam agar promo yang kedaluwarsa hilang tanpa deploy ulang.
export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: PROMO_COPY.id.metaTitle,
  description: PROMO_COPY.id.metaDescription,
  path: "/promo",
  locale: "id",
});

export default function Page() {
  return <PromoPage locale="id" />;
}

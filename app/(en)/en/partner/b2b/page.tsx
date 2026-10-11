import { Metadata } from "next";
import B2BPartnersPage, { B2B_COPY } from "@/components/pages/B2BPartnersPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: B2B_COPY.en.metaTitle,
  description: B2B_COPY.en.metaDescription,
  path: "/partner/b2b",
  locale: "en",
});

export default function Page() {
  return <B2BPartnersPage locale="en" />;
}

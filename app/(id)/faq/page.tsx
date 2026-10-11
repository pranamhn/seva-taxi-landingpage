import { Metadata } from "next";
import FaqPage, { FAQ_COPY } from "@/components/pages/FaqPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: FAQ_COPY.id.metaTitle,
  description: FAQ_COPY.id.metaDescription,
  path: "/faq",
  locale: "id",
});

export default function Page() {
  return <FaqPage locale="id" />;
}

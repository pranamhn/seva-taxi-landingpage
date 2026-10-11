import { Metadata } from "next";
import FaqPage, { FAQ_COPY } from "@/components/pages/FaqPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: FAQ_COPY.en.metaTitle,
  description: FAQ_COPY.en.metaDescription,
  path: "/faq",
  locale: "en",
});

export default function Page() {
  return <FaqPage locale="en" />;
}

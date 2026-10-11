import { Metadata } from "next";
import ContactPage, { CONTACT_COPY } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: CONTACT_COPY.en.metaTitle,
  description: CONTACT_COPY.en.metaDescription,
  path: "/contact",
  locale: "en",
});

export default function Page() {
  return <ContactPage locale="en" />;
}

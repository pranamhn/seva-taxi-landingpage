import { Metadata } from "next";
import ContactPage, { CONTACT_COPY } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: CONTACT_COPY.id.metaTitle,
  description: CONTACT_COPY.id.metaDescription,
  path: "/contact",
  locale: "id",
});

export default function Page() {
  return <ContactPage locale="id" />;
}

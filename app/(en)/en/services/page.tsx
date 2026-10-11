import { Metadata } from "next";
import ServicesIndexPage, { SERVICES_COPY } from "@/components/pages/ServicesIndexPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: SERVICES_COPY.en.metaTitle,
  description: SERVICES_COPY.en.metaDescription,
  path: "/services",
  locale: "en",
});

export default function Page() {
  return <ServicesIndexPage locale="en" />;
}

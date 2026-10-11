import { Metadata } from "next";
import ServicesIndexPage, { SERVICES_COPY } from "@/components/pages/ServicesIndexPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: SERVICES_COPY.id.metaTitle,
  description: SERVICES_COPY.id.metaDescription,
  path: "/services",
  locale: "id",
});

export default function Page() {
  return <ServicesIndexPage locale="id" />;
}

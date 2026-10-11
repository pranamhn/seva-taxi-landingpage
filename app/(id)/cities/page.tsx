import { Metadata } from "next";
import CitiesIndexPage, { CITIES_COPY } from "@/components/pages/CitiesIndexPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: CITIES_COPY.id.metaTitle,
  description: CITIES_COPY.id.metaDescription,
  path: "/cities",
  locale: "id",
});

export default function Page() {
  return <CitiesIndexPage locale="id" />;
}

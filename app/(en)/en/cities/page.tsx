import { Metadata } from "next";
import CitiesIndexPage, { CITIES_COPY } from "@/components/pages/CitiesIndexPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: CITIES_COPY.en.metaTitle,
  description: CITIES_COPY.en.metaDescription,
  path: "/cities",
  locale: "en",
});

export default function Page() {
  return <CitiesIndexPage locale="en" />;
}

import { Metadata } from "next";
import DriverPartnersPage, { DRIVER_COPY } from "@/components/pages/DriverPartnersPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: DRIVER_COPY.en.metaTitle,
  description: DRIVER_COPY.en.metaDescription,
  path: "/partner/driver",
  locale: "en",
});

export default function Page() {
  return <DriverPartnersPage locale="en" />;
}

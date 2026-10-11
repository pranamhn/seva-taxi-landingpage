import { Metadata } from "next";
import DriverPartnersPage, { DRIVER_COPY } from "@/components/pages/DriverPartnersPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: DRIVER_COPY.id.metaTitle,
  description: DRIVER_COPY.id.metaDescription,
  path: "/partner/driver",
  locale: "id",
});

export default function Page() {
  return <DriverPartnersPage locale="id" />;
}

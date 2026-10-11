import { Metadata } from "next";
import ServiceDetailPage, { serviceDetailMeta } from "@/components/pages/ServiceDetailPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  ...serviceDetailMeta("ride", "id"),
  path: "/services/ride",
  locale: "id",
});

export default function Page() {
  return <ServiceDetailPage service="ride" locale="id" />;
}

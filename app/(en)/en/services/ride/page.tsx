import { Metadata } from "next";
import ServiceDetailPage, { serviceDetailMeta } from "@/components/pages/ServiceDetailPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  ...serviceDetailMeta("ride", "en"),
  path: "/services/ride",
  locale: "en",
});

export default function Page() {
  return <ServiceDetailPage service="ride" locale="en" />;
}

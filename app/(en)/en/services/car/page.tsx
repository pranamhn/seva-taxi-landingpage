import { Metadata } from "next";
import ServiceDetailPage, { serviceDetailMeta } from "@/components/pages/ServiceDetailPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  ...serviceDetailMeta("car", "en"),
  path: "/services/car",
  locale: "en",
});

export default function Page() {
  return <ServiceDetailPage service="car" locale="en" />;
}

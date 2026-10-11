import { Metadata } from "next";
import ServiceDetailPage, { serviceDetailMeta } from "@/components/pages/ServiceDetailPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  ...serviceDetailMeta("car", "id"),
  path: "/services/car",
  locale: "id",
});

export default function Page() {
  return <ServiceDetailPage service="car" locale="id" />;
}

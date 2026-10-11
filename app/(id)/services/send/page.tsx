import { Metadata } from "next";
import ServiceDetailPage, { serviceDetailMeta } from "@/components/pages/ServiceDetailPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  ...serviceDetailMeta("send", "id"),
  path: "/services/send",
  locale: "id",
});

export default function Page() {
  return <ServiceDetailPage service="send" locale="id" />;
}

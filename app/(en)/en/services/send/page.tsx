import { Metadata } from "next";
import ServiceDetailPage, { serviceDetailMeta } from "@/components/pages/ServiceDetailPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  ...serviceDetailMeta("send", "en"),
  path: "/services/send",
  locale: "en",
});

export default function Page() {
  return <ServiceDetailPage service="send" locale="en" />;
}

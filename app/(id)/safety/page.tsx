import { Metadata } from "next";
import SafetyPage, { SAFETY_COPY } from "@/components/pages/SafetyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: SAFETY_COPY.id.metaTitle,
  description: SAFETY_COPY.id.metaDescription,
  path: "/safety",
  locale: "id",
});

export default function Page() {
  return <SafetyPage locale="id" />;
}

import { Metadata } from "next";
import SafetyPage, { SAFETY_COPY } from "@/components/pages/SafetyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: SAFETY_COPY.en.metaTitle,
  description: SAFETY_COPY.en.metaDescription,
  path: "/safety",
  locale: "en",
});

export default function Page() {
  return <SafetyPage locale="en" />;
}

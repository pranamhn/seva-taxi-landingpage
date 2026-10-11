import { Metadata } from "next";
import HowItWorksPage, { HOW_COPY } from "@/components/pages/HowItWorksPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: HOW_COPY.en.metaTitle,
  description: HOW_COPY.en.metaDescription,
  path: "/how-it-works",
  locale: "en",
});

export default function Page() {
  return <HowItWorksPage locale="en" />;
}

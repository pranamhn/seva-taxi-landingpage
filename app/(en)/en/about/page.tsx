import { Metadata } from "next";
import AboutPage, { ABOUT_COPY } from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: ABOUT_COPY.en.metaTitle,
  description: ABOUT_COPY.en.metaDescription,
  path: "/about",
  locale: "en",
});

export default function Page() {
  return <AboutPage locale="en" />;
}

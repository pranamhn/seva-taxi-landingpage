import { Metadata } from "next";
import AboutPage, { ABOUT_COPY } from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: ABOUT_COPY.id.metaTitle,
  description: ABOUT_COPY.id.metaDescription,
  path: "/about",
  locale: "id",
});

export default function Page() {
  return <AboutPage locale="id" />;
}

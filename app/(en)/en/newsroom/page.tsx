import { Metadata } from "next";
import NewsroomPage, { NEWSROOM_COPY } from "@/components/pages/NewsroomPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: NEWSROOM_COPY.en.metaTitle,
  description: NEWSROOM_COPY.en.metaDescription,
  path: "/newsroom",
  locale: "en",
});

export default function Page() {
  return <NewsroomPage locale="en" />;
}

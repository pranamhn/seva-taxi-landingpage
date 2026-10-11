import { Metadata } from "next";
import NewsroomPage, { NEWSROOM_COPY } from "@/components/pages/NewsroomPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: NEWSROOM_COPY.id.metaTitle,
  description: NEWSROOM_COPY.id.metaDescription,
  path: "/newsroom",
  locale: "id",
});

export default function Page() {
  return <NewsroomPage locale="id" />;
}

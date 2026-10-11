import { Metadata } from "next";
import BlogIndexPage, { BLOG_COPY } from "@/components/pages/BlogIndexPage";
import { ARTICLES } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: BLOG_COPY.id.metaTitle,
  description: BLOG_COPY.id.metaDescription,
  path: "/blog",
  locale: "id",
});

export default function Page() {
  return <BlogIndexPage locale="id" articles={ARTICLES} />;
}

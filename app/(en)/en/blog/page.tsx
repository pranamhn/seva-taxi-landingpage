import { Metadata } from "next";
import BlogIndexPage, { BLOG_COPY } from "@/components/pages/BlogIndexPage";
import { ARTICLES_EN } from "@/lib/articles-en";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: BLOG_COPY.en.metaTitle,
  description: BLOG_COPY.en.metaDescription,
  path: "/blog",
  locale: "en",
});

export default function Page() {
  return <BlogIndexPage locale="en" articles={ARTICLES_EN} />;
}

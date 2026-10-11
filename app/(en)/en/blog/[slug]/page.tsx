import { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/pages/ArticlePage";
import { ARTICLES_EN, getArticleEn } from "@/lib/articles-en";
import { pageMetadata } from "@/lib/seo";

// Hanya slug yang terdaftar; selain itu 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES_EN.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleEn(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/blog/${article.slug}`,
    keywords: article.keywords,
    article: { publishedTime: article.published, section: article.category },
    locale: "en",
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleEn(slug);
  if (!article) notFound();
  return <ArticlePage article={article} articles={ARTICLES_EN} locale="en" />;
}

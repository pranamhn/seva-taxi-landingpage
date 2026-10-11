import { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPage, { CITY_COPY } from "@/components/pages/CityPage";
import { CITY_DIRECTORY, getCity } from "@/lib/cities";
import { FARES } from "@/lib/articles";
import { ARTICLES_EN } from "@/lib/articles-en";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_DIRECTORY.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const t = CITY_COPY.en;
  return pageMetadata({
    title: t.metaTitle(city.nameEn),
    description: t.metaDescription(city.nameEn, `Rp ${FARES.ride.base.toLocaleString("en-US")}`),
    path: `/cities/${city.slug}`,
    keywords: t.keywords(city.nameEn),
    locale: "en",
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  return <CityPage city={city} locale="en" articles={ARTICLES_EN} />;
}

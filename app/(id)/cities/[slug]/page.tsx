import { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPage, { CITY_COPY } from "@/components/pages/CityPage";
import { CITY_DIRECTORY, getCity } from "@/lib/cities";
import { ARTICLES, FARES, rupiah } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

// Hanya kota yang terdaftar di lib/cities.ts; selain itu 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_DIRECTORY.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const t = CITY_COPY.id;
  return pageMetadata({
    title: t.metaTitle(city.name),
    description: t.metaDescription(city.name, rupiah(FARES.ride.base)),
    path: `/cities/${city.slug}`,
    keywords: t.keywords(city.name),
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  return <CityPage city={city} locale="id" articles={ARTICLES} />;
}

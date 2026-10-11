import { Metadata } from "next";
import FoodPage, { FOOD_COPY } from "@/components/pages/FoodPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: FOOD_COPY.en.metaTitle,
  description: FOOD_COPY.en.metaDescription,
  path: "/services/food",
  locale: "en",
});

export default function Page() {
  return <FoodPage locale="en" />;
}

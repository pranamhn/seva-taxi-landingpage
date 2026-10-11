import { Metadata } from "next";
import FoodPage, { FOOD_COPY } from "@/components/pages/FoodPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: FOOD_COPY.id.metaTitle,
  description: FOOD_COPY.id.metaDescription,
  path: "/services/food",
  locale: "id",
});

export default function Page() {
  return <FoodPage locale="id" />;
}

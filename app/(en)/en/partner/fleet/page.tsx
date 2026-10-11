import { Metadata } from "next";
import FleetPartnersPage, { FLEET_COPY } from "@/components/pages/FleetPartnersPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: FLEET_COPY.en.metaTitle,
  description: FLEET_COPY.en.metaDescription,
  path: "/partner/fleet",
  locale: "en",
});

export default function Page() {
  return <FleetPartnersPage locale="en" />;
}

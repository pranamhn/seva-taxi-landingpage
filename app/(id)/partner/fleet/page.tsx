import { Metadata } from "next";
import FleetPartnersPage, { FLEET_COPY } from "@/components/pages/FleetPartnersPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: FLEET_COPY.id.metaTitle,
  description: FLEET_COPY.id.metaDescription,
  path: "/partner/fleet",
  locale: "id",
});

export default function Page() {
  return <FleetPartnersPage locale="id" />;
}

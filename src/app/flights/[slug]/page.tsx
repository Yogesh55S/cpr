import { notFound } from "next/navigation";
import ClientLayout from "@/components/ClientLayout";
import { flightRoutes, getRouteBySlug } from "@/data/flights";
import FlightRouteClient from "./FlightRouteClient";

export function generateStaticParams() {
  return flightRoutes.map((route) => ({
    slug: route.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export default function FlightRoutePage({ params }: Props) {
  const route = getRouteBySlug(params.slug);

  if (!route) {
    notFound();
  }

  return (
    <ClientLayout>
      <FlightRouteClient route={route} />
    </ClientLayout>
  );
}

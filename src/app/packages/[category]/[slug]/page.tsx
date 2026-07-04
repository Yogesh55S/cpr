import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPackageBySlug, packages } from "@/data/packages";
import PackageDetailClient from "./PackageDetailClient";
import ClientLayout from "@/components/ClientLayout";

export function generateStaticParams() {
  return packages.map((pkg) => ({
    category: pkg.category,
    slug: pkg.slug,
  }));
}

interface Props {
  params: { category: string; slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.name} | Cheap Prime Fares`,
    description: pkg.summary,
  };
}

export default function PackageDetailPage({ params }: Props) {
  const pkg = getPackageBySlug(params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <ClientLayout>
      <PackageDetailClient pkg={pkg} />
    </ClientLayout>
  );
}

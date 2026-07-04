import { notFound } from "next/navigation";
import ClientLayout from "@/components/ClientLayout";
import { packageCategories, getPackagesByCategory, getCategoryBySlug } from "@/data/packages";
import PackageCategoryClient from "./PackageCategoryClient";

export function generateStaticParams() {
  return packageCategories.map((cat) => ({
    category: cat.slug,
  }));
}

interface Props {
  params: { category: string };
}

export default function PackageCategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.category);
  const packages = getPackagesByCategory(params.category);

  if (!category || packages.length === 0) {
    notFound();
  }

  return (
    <ClientLayout>
      <PackageCategoryClient categoryName={category.name} packages={packages} />
    </ClientLayout>
  );
}

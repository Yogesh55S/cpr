import { notFound } from "next/navigation";
import ClientLayout from "@/components/ClientLayout";
import { legalPages } from "@/data/legal";
import LegalPageClient from "./LegalPageClient";

export function generateStaticParams() {
  return legalPages.map((page) => ({
    slug: page.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export default function LegalPage({ params }: Props) {
  const page = legalPages.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  return (
    <ClientLayout>
      <LegalPageClient title={page.title} content={page.content} />
    </ClientLayout>
  );
}

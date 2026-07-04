import { notFound } from "next/navigation";
import ClientLayout from "@/components/ClientLayout";
import { blogPosts } from "@/data/blog";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <ClientLayout>
      <BlogPostClient post={post} />
    </ClientLayout>
  );
}

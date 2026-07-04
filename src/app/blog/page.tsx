import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClientLayout from "@/components/ClientLayout";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Travel Blog",
  description: "Destination guides, travel tips, and inspiration from Cheap Prime Fares. Explore the world with our expert travel content.",
  alternates: {
    canonical: "https://cheapprimefares.com/blog/",
  },
};

export default function BlogPage() {
  return (
    <ClientLayout>
      {/* Hero */}
      <section className="relative bg-[#0B3D3E] min-h-[30vh] flex items-center justify-center pt-[60px] lg:pt-[70px]">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Travel Blog
          </h1>
          <p className="text-lg text-white/70">
            Destination guides, travel tips, and inspiration
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}/`}
                key={post.slug}
                className="block bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-charcoal/80 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span
                    className="inline-block text-gold font-medium text-sm hover:underline"
                  >
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

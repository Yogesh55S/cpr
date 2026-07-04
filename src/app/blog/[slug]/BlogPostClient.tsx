"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy min-h-[30vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="flex items-center justify-center gap-3 text-sm text-gold mb-4">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Cover Image */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 -mt-16 relative z-10">
        <div className="relative aspect-video rounded-card overflow-hidden shadow-card">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-p:text-charcoal prose-a:text-gold"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
          />
        </div>
      </section>
    </>
  );
}

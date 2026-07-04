import { MetadataRoute } from "next";
import { flightRoutes } from "@/data/flights";
import { packageCategories } from "@/data/packages";
import { legalPages } from "@/data/legal";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cheapprimefares.com";

  const staticRoutes = [
    "",
    "about",
    "flights",
    "packages",
    "contact",
    "faq",
    "blog",
    "refer-and-earn",
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const flightRoutePages = flightRoutes.map((route) => ({
    url: `${baseUrl}/flights/${route.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const packagePages = packageCategories.map((cat) => ({
    url: `${baseUrl}/packages/${cat.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const legalPagesSitemap = legalPages.map((page) => ({
    url: `${baseUrl}/legal/${page.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...flightRoutePages,
    ...packagePages,
    ...legalPagesSitemap,
    ...blogPages,
  ];
}

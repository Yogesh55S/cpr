import type { Metadata } from "next";
import Link from "next/link";
import { Plane } from "lucide-react";
import ClientLayout from "@/components/ClientLayout";
import { packageCategories } from "@/data/packages";

export const metadata: Metadata = {
  title: "Holiday Packages",
  description: "Explore domestic and international holiday packages with Cheap Prime Fares. Tour packages, honeymoon packages, and popular destinations.",
  alternates: {
    canonical: "https://cheapprimefares.com/packages/",
  },
};

export default function PackagesLandingPage() {
  return (
    <ClientLayout>
      {/* Hero */}
      <section className="relative bg-[#0B3D3E] min-h-[35vh] flex items-center justify-center pt-[60px] lg:pt-[70px]">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Holiday Packages
          </h1>
          <p className="text-lg text-white/70">
            Curated itineraries for unforgettable journeys
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/packages/${cat.slug}/`}
                className="flex items-center gap-4 p-6 rounded-card border border-light-border hover:border-gold hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Plane size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy group-hover:text-gold transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted capitalize">
                    {cat.scope} {cat.kind}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

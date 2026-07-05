import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PackageCard from "@/components/PackageCard";
import { getPackagesByCategory } from "@/data/packages";

export default function PopularPackagesSection() {
  const popularPackages = getPackagesByCategory("domestic-tour");

  return (
    <section className="relative py-20 md:py-12 overflow-hidden">
      {/* Background: subtle warm gradient with decorative shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e3] via-[#fef9f0] to-[#f0f7f7]" />
      {/* large blurred circle accents */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9A227]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#0B3D3E]/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">

        {/* Section header */}
        <div className="flex flex-col gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C9A227]/10 border border-[#C9A227]/20 rounded-full px-3.5 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">
                Holiday Packages
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B3D3E] leading-tight">
              Popular Tour Packages
            </h2>
            <p className="text-slate-500 mt-3 max-w-md text-base leading-relaxed">
              Curated itineraries across India&apos;s most beloved destinations — hand-picked for every kind of traveler.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {popularPackages.slice(0, 9).map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
            />
          ))}
        </div>

        {/* View All — always below cards */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/packages/domestic-tour/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#0B3D3E] text-[#0B3D3E] text-sm font-semibold hover:bg-[#0B3D3E] hover:text-white transition-all duration-200"
          >
            View All Packages
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

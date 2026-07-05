import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getPackagesByCategory } from "@/data/packages";

export default function AwesomePackagesSection() {
  const awesomePackages = getPackagesByCategory("popular-tour");

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Deep teal background with subtle texture */}
      <div className="absolute inset-0 bg-[#0B3D3E]" />
      {/* decorative blobs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#16888C]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#C9A227]/10 blur-3xl pointer-events-none" />
      {/* subtle dot grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:my-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C9A227]/15 border border-[#C9A227]/25 rounded-full px-3.5 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">
                International Getaways
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Awesome Holiday Packages
            </h2>
            <p className="text-white/60 mt-3 max-w-md text-sm sm:text-base leading-relaxed">
              All-inclusive deals for two. Just pack your bags.
            </p>
          </div>
          <Link
            href="/packages/popular-tour/"
            className="hidden sm:inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/30 text-white text-sm font-semibold hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-200"
          >
            View All
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {awesomePackages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.category}/${pkg.slug}`}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                         hover:border-[#C9A227]/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1
                         flex flex-col cursor-pointer block"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} holiday package`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Duration pill */}
                <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {pkg.durationLabel}
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-display font-bold text-white text-base mb-1 leading-snug">
                  {pkg.name}
                </h3>
                <p className="text-white text-xs leading-relaxed line-clamp-2 flex-1 mb-4">
                  {pkg.summary}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] text-white uppercase tracking-wider">From</p>
                    <p className="text-xl font-display font-bold text-[#C9A227] leading-tight">
                      ${pkg.price.toLocaleString()}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                               bg-[#C9A227] text-[#0B3D3E] hover:bg-[#d4ac30]
                               transition-colors duration-200"
                  >
                    Book Now
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All — Mobile only */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/packages/popular-tour/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-white/30 text-white text-sm font-semibold hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-200"
          >
            View All
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

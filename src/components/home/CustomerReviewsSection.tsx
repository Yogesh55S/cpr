import { Star } from "lucide-react";
import ReviewMarquee from "@/components/ReviewMarquee";

export default function CustomerReviewsSection() {
  return (
    <section className="relative py-20 md:py-12 overflow-hidden bg-[#faf6f0]">
      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-[#0B3D3E]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[340px] h-[340px] rounded-full bg-[#C9A227]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 mb-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C9A227]/12 border border-[#C9A227]/25 rounded-full px-3.5 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">
                Customer Reviews
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D3E] leading-tight">
              Trusted by Thousands of Happy Travelers
            </h2>
            <p className="text-slate-500 mt-3 max-w-md text-sm sm:text-base leading-relaxed">
              Real stories from real travelers who booked their flights and holidays with us.
            </p>
          </div>

          {/* Rating summary */}
          <div className="shrink-0 flex items-center gap-4 bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-4">
            <p className="font-display text-4xl font-bold text-[#0B3D3E] leading-none">4.8</p>
            <div>
              <div className="flex items-center gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#C9A227]" fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-400 font-medium">200+ Google Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee slider outside max-w wrapper so it can bleed to the edges */}
      <div className="w-full">
        <ReviewMarquee />
      </div>
    </section>
  );
}

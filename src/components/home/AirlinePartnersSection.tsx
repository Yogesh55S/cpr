import PartnerLogoMarquee from "@/components/PartnerLogoMarquee";

export default function AirlinePartnersSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Our Airline Partners
          </span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B3D3E]">
          Trusted by the World&apos;s Leading Airlines
        </h2>
      </div>
      <PartnerLogoMarquee />
    </section>
  );
}

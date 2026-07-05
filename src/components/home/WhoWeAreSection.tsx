import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const packageCategories = [
  "Domestic Tour",
  "Domestic Honeymoon",
  "International Tour",
  "International Honeymoon",
  "Popular Tour",
  "Popular Honeymoon",
];

export default function WhoWeAreSection() {
  return (
    <section className="relative py-20 md:py-12 overflow-hidden bg-[#faf6f0]">
      {/* subtle teal blob top-right */}
      <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full bg-[#0B3D3E]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 left-10 w-[260px] h-[260px] rounded-full bg-[#C9A227]/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 bg-[#C9A227]/12 border border-[#C9A227]/25 rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">Who We Are</span>
            </div>

            {/* Heading with highlighted words */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D3E] leading-tight mb-2">
              Welcome to{" "}
              <span className="relative inline-block">
                Cheap Prime Fares
                {/* gold hand-drawn underline */}
                <svg aria-hidden="true" viewBox="0 0 260 12" preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 w-full h-[10px] pointer-events-none">
                  <path d="M2 9 C50 3, 110 11, 130 6 C155 1, 210 10, 258 6"
                    stroke="#C9A227" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mb-7 leading-relaxed">
              Your{" "}
              <span className="relative inline-block font-semibold text-[#0B3D3E]">
                trusted partner
                <svg aria-hidden="true" viewBox="0 0 120 8" preserveAspectRatio="none"
                  className="absolute -bottom-0.5 left-0 w-full h-[7px] pointer-events-none">
                  <path d="M2 6 C25 2, 60 8, 90 4 C108 2, 115 6, 118 4"
                    stroke="#C9A227" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              for international travel since{" "}
              <span className="font-bold text-[#C9A227]">2010</span>
            </p>

            {/* Body paragraphs */}
            <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
              Cheap Prime Fares was founded with a simple mission — make international travel{" "}
              <span className="font-semibold text-[#0B3D3E]">affordable for everyone</span>. What started as a small
              operation helping friends and family find cheaper flights has grown into a full-service travel
              agency serving{" "}
              <span className="font-semibold text-[#0B3D3E]">thousands of travelers</span> each year.
            </p>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
              We specialize in <span className="font-semibold text-[#0B3D3E]">USA–India routes</span>, offering
              exclusive deals you won&apos;t find on public booking sites. Our direct relationships with airlines and
              consolidators allow us to pass savings of{" "}
              <span className="font-semibold text-[#C9A227]">30–50% below published fares</span> to our customers.
              When you book with us, you&apos;re not just getting a ticket — you&apos;re gaining a travel partner
              who genuinely cares about your journey.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 p-4 sm:p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              {[
                { val: "15,000+", label: "Happy Travelers" },
                { val: "85%",     label: "Repeat Clients"  },
                { val: "4.8 ★",   label: "Google Rating"   },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display font-bold text-xl sm:text-2xl text-[#0B3D3E] leading-none">{val}</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>

            {/* Package categories chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {packageCategories.map((cat) => (
                <span key={cat}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B3D3E]/6 border border-[#0B3D3E]/12 text-xs font-medium text-[#0B3D3E]">
                  <Check size={11} className="text-[#C9A227] shrink-0" />
                  {cat}
                </span>
              ))}
            </div>

            <Link href="/about/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B3D3E] text-white text-sm font-semibold
                         hover:bg-[#C9A227] hover:text-[#0B3D3E] transition-all duration-200">
              Read Our Story
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* ── Right: image ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* decorative ring */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-[#C9A227]/15 rotate-3 pointer-events-none" />
            <Image
              src="/images/about-collage.jpg"
              alt="Travel experiences with Cheap Prime Fares"
              width={520}
              height={440}
              className="relative rounded-2xl shadow-xl object-cover w-full max-w-[520px] h-auto"
            />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C9A227]/15 flex items-center justify-center shrink-0">
                <Check size={16} className="text-[#C9A227]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B3D3E] leading-none">4 Global Offices</p>
                <p className="text-[10px] text-slate-400 mt-0.5">USA · India · UK · Canada</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

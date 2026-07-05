"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowRightIcon } from "lucide-react";
import FareCard from "@/components/FareCard";
import { useModal } from "@/lib/ModalContext";
import { getFeaturedFares } from "@/data/flights";

export default function FeaturedFaresSection() {
  const { openEnquiry } = useModal();
  const featuredFares = getFeaturedFares();

  const [sliderIndex, setSliderIndex] = useState(0);
  const slidesPerView = 3;
  const maxIndex = Math.max(0, featuredFares.length - slidesPerView);

  return (
    <section id="featured-fares" className="relative pt-20 sm:pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      {/* soft teal-tinted background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7f7] via-white to-[#fdf6e3]" />
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#0B3D3E]/5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-[#C9A227]/6 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:my-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B3D3E]/8 border border-[#0B3D3E]/15 rounded-full px-3.5 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D3E]" />
              <span className="text-xs font-bold text-[#0B3D3E] uppercase tracking-widest">
                Featured Deals
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D3E] leading-tight">
              This Week&apos;s Best Fares
            </h2>
            <p className="text-slate-500 mt-3 max-w-md text-sm sm:text-base leading-relaxed">
              Hand-picked flight deals with exclusive discounts. Limited availability — book now.
            </p>
          </div>

          {/* Prev / Next arrows — desktop only */}
          <div className="hidden sm:flex gap-2 shrink-0">
            <button
              onClick={() => setSliderIndex(Math.max(0, sliderIndex - 1))}
              disabled={sliderIndex === 0}
              className="w-10 h-10 rounded-full border-2 border-[#0B3D3E] flex items-center justify-center
                         text-[#0B3D3E] hover:bg-[#0B3D3E] hover:text-white
                         transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous fares"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              onClick={() => setSliderIndex(Math.min(maxIndex, sliderIndex + 1))}
              disabled={sliderIndex >= maxIndex}
              className="w-10 h-10 rounded-full border-2 border-[#0B3D3E] flex items-center justify-center
                         text-[#0B3D3E] hover:bg-[#0B3D3E] hover:text-white
                         transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next fares"
            >
              <ArrowRightIcon size={17} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredFares.slice(sliderIndex, sliderIndex + slidesPerView).map((fare) => (
            <FareCard
              key={fare.id}
              fare={fare}
              onBook={(route) => openEnquiry(route)}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8 text-center">
          <Link
            href="/flights/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D3E] hover:text-[#C9A227] transition-colors"
          >
            Browse all flight deals
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

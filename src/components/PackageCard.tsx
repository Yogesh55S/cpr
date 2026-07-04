"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Package } from "@/data/packages";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const formatPrice = () =>
    pkg.currency === "USD"
      ? `$${pkg.price.toLocaleString()}`
      : `₹${pkg.price.toLocaleString("en-IN")}`;

  return (
    <Link 
      href={`/packages/${pkg.category}/${pkg.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >

      {/* ── Image ── */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} holiday package`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* gradient scrim so price badge is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Duration pill — top left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-medium px-2.5 py-1 rounded-full">
          <Clock size={11} />
          {pkg.durationLabel}
        </div>

        {/* Price badge — bottom left */}
        <div className="absolute bottom-3 left-3">
          <p className="text-[11px] text-white/70 font-medium uppercase tracking-wider leading-none mb-0.5">
            Starting from
          </p>
          <p className="text-2xl font-display font-bold text-[#C9A227] leading-none drop-shadow">
            {formatPrice()}
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-display font-bold text-[#0B3D3E] text-base mb-1 leading-snug">
          {pkg.name}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1 mb-4">
          {pkg.summary}
        </p>

        <div
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-[#0B3D3E] text-white hover:bg-[#C9A227] hover:text-[#0B3D3E] transition-all duration-200 group/btn"
        >
          View Details
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

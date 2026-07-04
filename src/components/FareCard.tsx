"use client";

import Image from "next/image";
import { Plane, ArrowRight, Tag } from "lucide-react";
import { FlightFare } from "@/data/flights";

interface FareCardProps {
  fare: FlightFare;
  onBook: (routeInfo: string) => void;
}

export default function FareCard({ fare, onBook }: FareCardProps) {
  const routeInfo = `${fare.origin.city} (${fare.origin.iata}) → ${fare.destination.city} (${fare.destination.iata})`;

  return (
    <div 
      onClick={() => onBook(routeInfo)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
    >

      {/* ── Image ── */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={fare.image}
          alt={`${fare.origin.city} to ${fare.destination.city} flight`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* dark scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Discount badge — top left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#C9A227] text-[#0B3D3E] text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
          <Tag size={10} />
          {fare.discountLabel}
        </div>

        {/* Travel date — top right */}
        <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
          {fare.travelDate}
        </div>

        {/* Route pill — bottom, overlaid on image */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            {/* Origin */}
            <div className="text-left">
              <p className="text-white font-bold text-base leading-none">{fare.origin.iata}</p>
              <p className="text-white/70 text-[11px] mt-0.5 leading-none">{fare.origin.city}</p>
            </div>

            {/* Plane icon connector */}
            <div className="flex items-center gap-1 px-2">
              <div className="h-px w-8 bg-white/40" />
              <Plane size={16} className="text-[#C9A227]" />
              <div className="h-px w-8 bg-white/40" />
            </div>

            {/* Destination */}
            <div className="text-right">
              <p className="text-white font-bold text-base leading-none">{fare.destination.iata}</p>
              <p className="text-white/70 text-[11px] mt-0.5 leading-none">{fare.destination.city}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex items-center justify-between gap-3 px-4 py-4 flex-1">
        <div>
          <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium leading-none mb-1">
            Starting from
          </p>
          <p className="text-2xl font-display font-bold text-[#0B3D3E] leading-none">
            ${fare.price}
            <span className="text-xs text-slate-400 font-normal ml-1">*</span>
          </p>
        </div>

        <div
          className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                     bg-[#0B3D3E] text-white hover:bg-[#C9A227] hover:text-[#0B3D3E]
                     transition-all duration-200 group/btn"
        >
          Book Now
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

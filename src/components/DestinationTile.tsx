"use client";

import Image from "next/image";
import Link from "next/link";
import { Plane, Tag } from "lucide-react";
import { Destination } from "@/data/destinations";

interface DestinationTileProps {
  destination: Destination;
}

export default function DestinationTile({ destination }: DestinationTileProps) {
  return (
    <Link
      href={destination.link}
      className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-xl
                 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name} travel destination`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      </div>

      {/* Discount ribbon — top right */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5
                      bg-[#C9A227] text-[#0B3D3E] text-[11px] font-bold
                      px-2.5 py-1 rounded-full shadow-md">
        <Tag size={10} />
        {destination.discountLabel}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-lg font-bold text-white leading-tight mb-2">
          {destination.name}
        </h3>
        {/* CTA pill */}
        <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25
                        text-white text-xs font-medium px-3 py-1.5 rounded-full
                        group-hover:bg-[#C9A227] group-hover:border-[#C9A227] group-hover:text-[#0B3D3E]
                        transition-all duration-300">
          <Plane size={11} />
          Book Now
        </div>
      </div>
    </Link>
  );
}

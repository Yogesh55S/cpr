"use client";

import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data/destinations";

interface DestinationTileProps {
  destination: Destination;
}

export default function DestinationTile({ destination }: DestinationTileProps) {
  return (
    <Link href={destination.link} className="group relative block aspect-[4/3] rounded-card overflow-hidden">
      <Image
        src={destination.image}
        alt={`${destination.name} travel destination`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5">
        <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-pill mb-2">
          {destination.discountLabel}
        </span>
        <h3 className="font-display text-xl font-bold text-white">
          {destination.name}
        </h3>
      </div>
    </Link>
  );
}

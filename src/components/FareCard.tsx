"use client";

import Image from "next/image";
import { Plane } from "lucide-react";
import { FlightFare } from "@/data/flights";

interface FareCardProps {
  fare: FlightFare;
  onBook: (routeInfo: string) => void;
}

export default function FareCard({ fare, onBook }: FareCardProps) {
  const routeInfo = `${fare.origin.city} (${fare.origin.iata}) → ${fare.destination.city} (${fare.destination.iata})`;

  return (
    <div className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={fare.image}
          alt={`${fare.origin.city} to ${fare.destination.city} flight`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-pill">
            {fare.discountLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted mb-2">{fare.travelDate}</p>

        {/* Route */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-navy">
            {fare.origin.city}
          </span>
          <Plane size={14} className="text-gold shrink-0" />
          <span className="text-sm font-medium text-navy">
            {fare.destination.city}
          </span>
        </div>

        {/* Price */}
        <p className="text-xl font-display font-bold text-gold mb-3">
          Starting ${fare.price}*
        </p>

        {/* CTA */}
        <button
          onClick={() => onBook(routeInfo)}
          className="w-full py-2.5 border-2 border-navy text-navy font-medium rounded-button hover:bg-navy hover:text-white transition-colors text-sm"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

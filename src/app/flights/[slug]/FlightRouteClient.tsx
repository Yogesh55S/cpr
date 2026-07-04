"use client";

import Image from "next/image";
import { Plane } from "lucide-react";
import { FlightRoute } from "@/data/flights";
import { useModal } from "@/lib/ModalContext";

interface Props {
  route: FlightRoute;
}

export default function FlightRouteClient({ route }: Props) {
  const { openEnquiry } = useModal();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B3D3E] min-h-[35vh] flex items-center justify-center pt-[60px] lg:pt-[70px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23c8a45c' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            {route.title} Flights
          </h1>
          <p className="text-lg text-gold">
            Exclusive deals starting from ${Math.min(...route.fares.map(f => f.price))}*
          </p>
        </div>
      </section>

      {/* Fare Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest">
            {route.title}
          </span>
          <h2 className="font-display text-3xl font-bold text-navy mt-2 mb-8">
            Available Fares
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {route.fares.map((fare) => (
              <div
                key={fare.id}
                className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={fare.image}
                    alt={`${fare.origin.city} to ${fare.destination.city} flight`}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-pill">
                      {fare.discountLabel}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted mb-2">{fare.travelDate}</p>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted">{fare.origin.country}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-semibold text-navy">{fare.origin.city}</span>
                    <Plane size={16} className="text-gold" />
                    <span className="font-semibold text-navy">{fare.destination.city}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted">{fare.destination.country}</span>
                  </div>
                  <p className="text-2xl font-display font-bold text-gold mb-4">
                    ${fare.price}
                  </p>
                  <button
                    onClick={() =>
                      openEnquiry(`${fare.origin.city} → ${fare.destination.city}`)
                    }
                    className="w-full py-2.5 bg-navy text-white font-medium rounded-button hover:bg-navy/90 transition-colors"
                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

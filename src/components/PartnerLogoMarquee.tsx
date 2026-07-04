"use client";

import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnerLogoMarquee() {
  const allPartners = [...partners, ...partners]; // Duplicate for seamless loop

  return (
    <div className="overflow-hidden group">
      <div className="flex animate-marquee">
        {allPartners.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-16 w-28 md:w-36"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={48}
              className="max-h-10 w-auto object-contain opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { partners } from "@/data/partners";

function AirlineTile({ partner }: { partner: typeof partners[0] }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2.5 mx-5 md:mx-8 w-[100px] md:w-[120px]">
      <div
        className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-2xl bg-white border border-slate-100
                   flex items-center justify-center shadow-sm
                   hover:shadow-md hover:border-[#C9A227]/40 transition-all duration-300 overflow-hidden"
      >
        {imgOk ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={partner.logo}
            alt={partner.name}
            width={64}
            height={64}
            className="w-[52px] h-[52px] md:w-[64px] md:h-[64px] object-contain"
            onError={() => setImgOk(false)}
          />
        ) : (
          /* Brand-coloured fallback tile with IATA abbreviation */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-0.5 rounded-2xl"
            style={{ backgroundColor: partner.brandColor + "18" }}
          >
            <span
              className="font-display font-bold text-lg md:text-xl leading-none"
              style={{ color: partner.brandColor }}
            >
              {partner.abbr}
            </span>
          </div>
        )}
      </div>
      <span className="text-[10px] md:text-[11px] font-medium text-slate-500 text-center leading-tight">
        {partner.name}
      </span>
    </div>
  );
}

export default function PartnerLogoMarquee() {
  const track = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

      <div className="flex animate-marquee">
        {track.map((partner, i) => (
          <AirlineTile key={`${partner.id}-${i}`} partner={partner} />
        ))}
      </div>
    </div>
  );
}

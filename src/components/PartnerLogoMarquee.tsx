"use client";

import { useState, useRef, useEffect } from "react";
import { partners } from "@/data/partners";

function AirlineTile({ partner }: { partner: typeof partners[0] }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2.5 mx-5 md:mx-8 w-[100px] md:w-[120px] group">
      <div
        className="w-[72px] h-[72px] md:w-[88px] md:h-[88px]
                   flex items-center justify-center
                   group-hover:scale-110 transition-transform duration-300"
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
      <span className="text-xs md:text-sm font-semibold text-slate-700 text-center leading-tight">
        {partner.name}
      </span>
    </div>
  );
}

export default function PartnerLogoMarquee() {
  // Duplicating 4 times to ensure smooth infinite loop logic
  const track = [...partners, ...partners, ...partners, ...partners];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 0.04; // Adjust speed as needed

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovering) {
        el.scrollLeft += scrollSpeed * delta;
        
        // Loop seamlessly
        const singleSetWidth = el.scrollWidth / 4;
        if (el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += singleSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  return (
    <div 
      className="relative overflow-hidden w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-l from-white to-transparent" />

      {/* Swipeable container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto py-4 px-4
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onScroll={() => {
          const el = scrollRef.current;
          if (el) {
            const singleSetWidth = el.scrollWidth / 4;
            if (el.scrollLeft >= singleSetWidth * 3) {
              el.scrollLeft -= singleSetWidth;
            } else if (el.scrollLeft <= 0) {
              el.scrollLeft += singleSetWidth;
            }
          }
        }}
      >
        {track.map((partner, i) => (
          <div key={`${partner.id}-${i}`} className="shrink-0">
            <AirlineTile partner={partner} />
          </div>
        ))}
      </div>
    </div>
  );
}

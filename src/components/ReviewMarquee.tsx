"use client";

import { useState, useRef, useEffect } from "react";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";

export default function ReviewMarquee() {
  // Duplicating to ensure smooth infinite loop logic
  const track = [...reviews, ...reviews, ...reviews, ...reviews];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 0.05; // Slightly faster or same as partner marquee

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
      {/* fade edges to blend with bg-ivory */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-20 z-10 bg-gradient-to-r from-[#F7F6F2] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-20 z-10 bg-gradient-to-l from-[#F7F6F2] to-transparent" />

      {/* Swipeable container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto py-4 px-4 gap-5 md:gap-6
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
        {track.map((review, i) => (
          <div key={`${review.id}-${i}`} className="shrink-0 w-[300px] md:w-[350px] lg:w-[400px]">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

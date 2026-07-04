"use client";

import { useState, useEffect } from "react";
import { Plane } from "lucide-react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Show loader whenever the component mounts (on refresh or first open)
    setShow(true);
    
    // Hide after 4 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures it only runs on initial load/refresh

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#faf6f0] flex flex-col items-center justify-center transition-opacity duration-500">
      {/* Travel-themed animation container */}
      <div className="relative flex flex-col items-center">
        
        {/* Animated plane and dotted path */}
        <div className="relative w-64 h-16 mb-6 flex items-center justify-center overflow-hidden">
          {/* Dotted path (globe arc concept) */}
          <div className="absolute top-1/2 left-0 right-0 w-full h-px border-t-2 border-dashed border-[#C9A227]/40 -translate-y-1/2" />
          
          {/* Airplane flying across */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full animate-fly">
            <div className="w-full h-full flex items-center justify-center">
              <div className="bg-[#faf6f0] px-3 rounded-full">
                <Plane size={36} className="text-[#0B3D3E] rotate-45" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="flex flex-col items-center">
          <p className="font-display font-bold text-2xl text-[#0B3D3E] tracking-wide animate-pulse">
            Getting your trip ready
          </p>
          <div className="flex items-center gap-1.5 mt-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A227] animate-[bounce_1s_infinite_0ms]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A227] animate-[bounce_1s_infinite_200ms]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A227] animate-[bounce_1s_infinite_400ms]" />
          </div>
        </div>

      </div>
    </div>
  );
}

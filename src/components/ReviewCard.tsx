"use client";

import { Star, Quote } from "lucide-react";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div
      className="relative flex flex-col bg-white rounded-2xl p-6 shadow-card
                 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1
                 border border-slate-100 h-[280px]"
    >
      {/* Quote mark accent */}
      <Quote size={34} className="text-[#C9A227]/15 absolute top-5 right-5" fill="currentColor" />

      {/* Star rating */}
      <div className="flex items-center gap-0.5 mb-4 shrink-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className={i < review.rating ? "text-[#C9A227]" : "text-slate-200"}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Review text - Scrollable area */}
      <div className="relative z-10 flex-1 overflow-y-auto pr-2 mb-5
                      [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent
                      [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full
                      hover:[&::-webkit-scrollbar-thumb]:bg-slate-300 transition-colors">
        <p className="text-[15px] text-slate-600 leading-relaxed">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 mb-5 shrink-0" />

      {/* Reviewer */}
      <div className="flex items-center gap-3 shrink-0">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-sm"
          style={{ backgroundColor: `${review.color}1A`, color: review.color }}
        >
          {review.initials}
        </div>
        <div className="min-w-0">
          <p className="font-display font-bold text-[#0B3D3E] text-sm leading-tight truncate">
            {review.name}
          </p>
          <p className="text-xs text-slate-400 mt-0.5 truncate">
            {review.location} · {review.trip}
          </p>
        </div>
      </div>
    </div>
  );
}

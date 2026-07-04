"use client";

import Image from "next/image";
import { Package } from "@/data/packages";
import { Clock, MapPin, Check, X, ArrowRight, CalendarDays, Info } from "lucide-react";
import { useModal } from "@/lib/ModalContext";

interface Props {
  pkg: Package;
}

export default function PackageDetailClient({ pkg }: Props) {
  const { openEnquiry } = useModal();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-end pb-16">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Scrim for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D3E] via-[#0B3D3E]/60 to-transparent" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-white max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 mb-4">
              <MapPin size={12} className="text-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider">{pkg.category.replace("-", " ")}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {pkg.name}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              {pkg.summary}
            </p>
          </div>
          
          <div className="shrink-0 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col gap-4">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Starting from</p>
              <div className="flex items-end gap-2 text-gold">
                <span className="font-display text-4xl font-bold leading-none">
                  {pkg.currency === "USD" ? "$" : "₹"}{pkg.price.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-white/60 pb-1">/ person</span>
              </div>
            </div>
            <button
              onClick={() => openEnquiry(pkg.name)}
              className="w-full flex items-center justify-center gap-2 bg-gold text-[#0B3D3E] py-3 px-6 rounded-xl font-semibold hover:bg-white transition-colors duration-200"
            >
              Book This Package
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (Itinerary & Details) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Clock className="text-gold mb-2" size={24} />
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Duration</p>
                <p className="font-bold text-navy">{pkg.durationLabel}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <CalendarDays className="text-gold mb-2" size={24} />
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Availability</p>
                <p className="font-bold text-navy">Year Round</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Info className="text-gold mb-2" size={24} />
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Tour Type</p>
                <p className="font-bold text-navy capitalize">{pkg.category.split('-').join(' ')}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <MapPin className="text-gold mb-2" size={24} />
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Destination</p>
                <p className="font-bold text-navy">{pkg.name}</p>
              </div>
            </div>

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-6">Tour Itinerary</h2>
                <div className="space-y-6">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-[#0B3D3E] text-gold flex items-center justify-center font-bold text-lg shrink-0 z-10 group-hover:scale-110 transition-transform">
                          {day.day}
                        </div>
                        {day.day !== pkg.itinerary!.length && (
                          <div className="w-0.5 h-full bg-slate-200 mt-2" />
                        )}
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 mb-2">
                        <h3 className="text-xl font-bold text-navy mb-3">{day.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Inclusions/Exclusions & Sticky CTA) */}
          <div className="space-y-8 relative">
            <div className="sticky top-24 space-y-8">
              
              {/* Inclusions */}
              {pkg.inclusions && pkg.inclusions.length > 0 && (
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="font-display text-xl font-bold text-navy mb-5 flex items-center gap-2">
                    <Check className="text-green-500" size={24} />
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-600">
                        <Check size={16} className="text-green-500 shrink-0 mt-1" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exclusions */}
              {pkg.exclusions && pkg.exclusions.length > 0 && (
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="font-display text-xl font-bold text-navy mb-5 flex items-center gap-2">
                    <X className="text-red-500" size={24} />
                    What&apos;s Not Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-600">
                        <X size={16} className="text-red-500 shrink-0 mt-1" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

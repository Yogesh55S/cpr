"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ArrowLeft, ArrowRightIcon } from "lucide-react";
import ClientLayout from "@/components/ClientLayout";
import Hero from "@/components/Hero";
import FareCard from "@/components/FareCard";
import PackageCard from "@/components/PackageCard";
import DestinationTile from "@/components/DestinationTile";
import PartnerLogoMarquee from "@/components/PartnerLogoMarquee";
import { useModal } from "@/lib/ModalContext";
import { getFeaturedFares } from "@/data/flights";
import { getPackagesByCategory } from "@/data/packages";
import { destinations } from "@/data/destinations";

const packageCategories = [
  "Domestic Tour",
  "Domestic Honeymoon",
  "International Tour",
  "International Honeymoon",
  "Popular Tour",
  "Popular Honeymoon",
];

export default function HomePage() {
  const { openEnquiry } = useModal();
  const featuredFares = getFeaturedFares();
  const popularPackages = getPackagesByCategory("domestic-tour");
  const awesomePackages = getPackagesByCategory("popular-tour");

  const [sliderIndex, setSliderIndex] = useState(0);
  const slidesPerView = 3;
  const maxIndex = Math.max(0, featuredFares.length - slidesPerView);

  return (
    <ClientLayout>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Cheap Prime Fares",
            url: "https://cheapprimefares.com",
            logo: "https://cheapprimefares.com/logo.png",
            description: "Exclusive deals on USA-India flights and international holiday packages.",
            telephone: "+91-9501737767",
            email: "info@cheapprimefares.com",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "30 N Gould St Ste R",
                addressLocality: "Sheridan",
                addressRegion: "WY",
                postalCode: "82801",
                addressCountry: "US",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "123 Connaught Place, Block C",
                addressLocality: "New Delhi",
                postalCode: "110001",
                addressCountry: "IN",
              },
            ],
            sameAs: [
              "https://facebook.com/cheapprimefares",
              "https://linkedin.com/company/cheapprimefares",
              "https://instagram.com/cheapprimefares",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "200",
            },
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== FEATURED FARES SECTION ===== */}
      <section id="featured-fares" className="relative pt-20 sm:pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
        {/* soft teal-tinted background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7f7] via-white to-[#fdf6e3]" />
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#0B3D3E]/5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-[#C9A227]/6 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8">

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0B3D3E]/8 border border-[#0B3D3E]/15 rounded-full px-3.5 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D3E]" />
                <span className="text-xs font-bold text-[#0B3D3E] uppercase tracking-widest">
                  Featured Deals
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D3E] leading-tight">
                This Week&apos;s Best Fares
              </h2>
              <p className="text-slate-500 mt-3 max-w-md text-sm sm:text-base leading-relaxed">
                Hand-picked flight deals with exclusive discounts. Limited availability — book now.
              </p>
            </div>

            {/* Prev / Next arrows — desktop only */}
            <div className="hidden sm:flex gap-2 shrink-0">
              <button
                onClick={() => setSliderIndex(Math.max(0, sliderIndex - 1))}
                disabled={sliderIndex === 0}
                className="w-10 h-10 rounded-full border-2 border-[#0B3D3E] flex items-center justify-center
                           text-[#0B3D3E] hover:bg-[#0B3D3E] hover:text-white
                           transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous fares"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                onClick={() => setSliderIndex(Math.min(maxIndex, sliderIndex + 1))}
                disabled={sliderIndex >= maxIndex}
                className="w-10 h-10 rounded-full border-2 border-[#0B3D3E] flex items-center justify-center
                           text-[#0B3D3E] hover:bg-[#0B3D3E] hover:text-white
                           transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next fares"
              >
                <ArrowRightIcon size={17} />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {featuredFares.slice(sliderIndex, sliderIndex + slidesPerView).map((fare) => (
              <FareCard
                key={fare.id}
                fare={fare}
                onBook={(route) => openEnquiry(route)}
              />
            ))}
          </div>

          {/* View all link */}
          <div className="mt-8 text-center">
            <Link
              href="/flights/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D3E] hover:text-[#C9A227] transition-colors"
            >
              Browse all flight deals
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE SECTION ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#faf6f0]">
        {/* subtle teal blob top-right */}
        <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full bg-[#0B3D3E]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 left-10 w-[260px] h-[260px] rounded-full bg-[#C9A227]/6 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left: text ── */}
            <div>
              {/* Pill label */}
              <div className="inline-flex items-center gap-2 bg-[#C9A227]/12 border border-[#C9A227]/25 rounded-full px-3.5 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">Who We Are</span>
              </div>

              {/* Heading with highlighted words */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D3E] leading-tight mb-2">
                Welcome to{" "}
                <span className="relative inline-block">
                  Cheap Prime Fares
                  {/* gold hand-drawn underline */}
                  <svg aria-hidden="true" viewBox="0 0 260 12" preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 w-full h-[10px] pointer-events-none">
                    <path d="M2 9 C50 3, 110 11, 130 6 C155 1, 210 10, 258 6"
                      stroke="#C9A227" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-500 mb-7 leading-relaxed">
                Your{" "}
                <span className="relative inline-block font-semibold text-[#0B3D3E]">
                  trusted partner
                  <svg aria-hidden="true" viewBox="0 0 120 8" preserveAspectRatio="none"
                    className="absolute -bottom-0.5 left-0 w-full h-[7px] pointer-events-none">
                    <path d="M2 6 C25 2, 60 8, 90 4 C108 2, 115 6, 118 4"
                      stroke="#C9A227" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                for international travel since{" "}
                <span className="font-bold text-[#C9A227]">2010</span>
              </p>

              {/* Body paragraphs */}
              <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                Cheap Prime Fares was founded with a simple mission — make international travel{" "}
                <span className="font-semibold text-[#0B3D3E]">affordable for everyone</span>. What started as a small
                operation helping friends and family find cheaper flights has grown into a full-service travel
                agency serving{" "}
                <span className="font-semibold text-[#0B3D3E]">thousands of travelers</span> each year.
              </p>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
                We specialize in <span className="font-semibold text-[#0B3D3E]">USA–India routes</span>, offering
                exclusive deals you won&apos;t find on public booking sites. Our direct relationships with airlines and
                consolidators allow us to pass savings of{" "}
                <span className="font-semibold text-[#C9A227]">30–50% below published fares</span> to our customers.
                When you book with us, you&apos;re not just getting a ticket — you&apos;re gaining a travel partner
                who genuinely cares about your journey.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 p-4 sm:p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                {[
                  { val: "15,000+", label: "Happy Travelers" },
                  { val: "85%",     label: "Repeat Clients"  },
                  { val: "4.8 ★",   label: "Google Rating"   },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-display font-bold text-xl sm:text-2xl text-[#0B3D3E] leading-none">{val}</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              {/* Package categories chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {packageCategories.map((cat) => (
                  <span key={cat}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B3D3E]/6 border border-[#0B3D3E]/12 text-xs font-medium text-[#0B3D3E]">
                    <Check size={11} className="text-[#C9A227] shrink-0" />
                    {cat}
                  </span>
                ))}
              </div>

              <Link href="/about/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B3D3E] text-white text-sm font-semibold
                           hover:bg-[#C9A227] hover:text-[#0B3D3E] transition-all duration-200">
                Read Our Story
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* ── Right: image ── */}
            <div className="relative flex justify-center lg:justify-end">
              {/* decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-[#C9A227]/15 rotate-3 pointer-events-none" />
              <Image
                src="/images/about-collage.jpg"
                alt="Travel experiences with Cheap Prime Fares"
                width={520}
                height={440}
                className="relative rounded-2xl shadow-xl object-cover w-full max-w-[520px] h-auto"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C9A227]/15 flex items-center justify-center shrink-0">
                  <Check size={16} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B3D3E] leading-none">4 Global Offices</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">USA · India · UK · Canada</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== POPULAR TOUR PACKAGES ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background: subtle warm gradient with decorative shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e3] via-[#fef9f0] to-[#f0f7f7]" />
        {/* large blurred circle accents */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9A227]/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#0B3D3E]/6 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">

          {/* Section header */}
          <div className="flex flex-col gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C9A227]/10 border border-[#C9A227]/20 rounded-full px-3.5 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">
                  Holiday Packages
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B3D3E] leading-tight">
                Popular Tour Packages
              </h2>
              <p className="text-slate-500 mt-3 max-w-md text-base leading-relaxed">
                Curated itineraries across India&apos;s most beloved destinations — hand-picked for every kind of traveler.
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {popularPackages.slice(0, 9).map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onBook={(name) => openEnquiry(name)}
              />
            ))}
          </div>

          {/* View All — always below cards */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/packages/domestic-tour/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#0B3D3E] text-[#0B3D3E] text-sm font-semibold hover:bg-[#0B3D3E] hover:text-white transition-all duration-200"
            >
              View All Packages
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== POPULAR DESTINATIONS ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest">
              Top Destinations
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2">
              Save Big on Dream Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <DestinationTile key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== AWESOME HOLIDAY PACKAGES ===== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Deep teal background with subtle texture */}
        <div className="absolute inset-0 bg-[#0B3D3E]" />
        {/* decorative blobs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#16888C]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#C9A227]/10 blur-3xl pointer-events-none" />
        {/* subtle dot grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C9A227]/15 border border-[#C9A227]/25 rounded-full px-3.5 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">
                  International Getaways
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Awesome Holiday Packages
              </h2>
              <p className="text-white/60 mt-3 max-w-md text-sm sm:text-base leading-relaxed">
                All-inclusive deals for two. Just pack your bags.
              </p>
            </div>
            <Link
              href="/packages/popular-tour/"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/30 text-white text-sm font-semibold hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-200"
            >
              View All
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {awesomePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                           hover:border-[#C9A227]/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1
                           flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} holiday package`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Duration pill */}
                  <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                    {pkg.durationLabel}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-white text-base mb-1 leading-snug">
                    {pkg.name}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed line-clamp-2 flex-1 mb-4">
                    {pkg.summary}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider">From</p>
                      <p className="text-xl font-display font-bold text-[#C9A227] leading-tight">
                        ${pkg.price.toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => openEnquiry(pkg.name)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                                 bg-[#C9A227] text-[#0B3D3E] hover:bg-[#d4ac30]
                                 transition-colors duration-200"
                    >
                      Book Now
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS MARQUEE ===== */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Our Airline Partners
            </span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B3D3E]">
            Trusted by the World&apos;s Leading Airlines
          </h2>
        </div>
        <PartnerLogoMarquee />
      </section>
    </ClientLayout>
  );
}

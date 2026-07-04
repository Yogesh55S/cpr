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
      <section id="featured-fares" className="pt-24 md:pt-28 pb-16 md:pb-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold text-gold uppercase tracking-widest">
                Featured Deals
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2">
                This Week&apos;s Best Fares
              </h2>
              <p className="text-muted mt-2 max-w-lg">
                Hand-picked flight deals with exclusive discounts. Limited availability — book now.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => setSliderIndex(Math.max(0, sliderIndex - 1))}
                disabled={sliderIndex === 0}
                className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center text-navy hover:bg-gold transition-colors disabled:opacity-30"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => setSliderIndex(Math.min(maxIndex, sliderIndex + 1))}
                disabled={sliderIndex >= maxIndex}
                className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center text-navy hover:bg-gold transition-colors disabled:opacity-30"
              >
                <ArrowRightIcon size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFares.slice(sliderIndex, sliderIndex + slidesPerView).map((fare) => (
              <FareCard
                key={fare.id}
                fare={fare}
                onBook={(route) => openEnquiry(route)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE SECTION ===== */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="text-xs font-semibold text-gold uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
                Welcome to Cheap Prime Fares
              </h2>
              <p className="text-lg text-charcoal leading-relaxed mb-4">
                For over a decade, Cheap Prime Fares has been the trusted partner for travelers seeking the best international flight deals. We specialize in USA–India routes, connecting families and businesses across continents at unbeatable prices.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Our 85% repeat-client rate speaks for itself. With hundreds of 5-star Google reviews, we&apos;ve built our reputation on transparency, personalized service, and genuine savings.
              </p>

              {/* Package Categories */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {packageCategories.map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <Check size={16} className="text-gold shrink-0" />
                    <span className="text-sm text-charcoal">{cat}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about/"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-button font-medium hover:bg-navy hover:text-white transition-colors"
              >
                Read Our Story
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <Image
                  src="/images/about-collage.jpg"
                  alt="Travel experiences with Cheap Prime Fares"
                  width={500}
                  height={400}
                  className="rounded-card shadow-card rotate-[-2deg] object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR TOUR PACKAGES ===== */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest">
              Holiday Packages
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
              Popular Tour Packages
            </h2>
            <p className="text-white/70 mt-2 max-w-lg">
              Curated itineraries across India&apos;s most beloved destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPackages.slice(0, 9).map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onBook={(name) => openEnquiry(name)}
              />
            ))}
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
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest">
              International Getaways
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2">
              Awesome Holiday Packages
            </h2>
            <p className="text-muted mt-2">
              All-inclusive deals for two. Just pack your bags.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awesomePackages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} holiday package`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-body font-semibold text-navy text-lg">{pkg.name}</h3>
                  <p className="text-sm text-muted mb-1">{pkg.durationLabel}</p>
                  <p className="text-2xl font-display font-bold text-gold mb-4">
                    ${pkg.price}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => openEnquiry(pkg.name)}
                      className="px-5 py-2.5 bg-gold text-navy font-medium rounded-button hover:bg-gold/90 transition-colors text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS MARQUEE ===== */}
      <section className="py-10 bg-white border-y border-light-border">
        <div className="max-w-content mx-auto px-4 md:px-6 mb-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-widest text-center">
            Our Airline Partners
          </p>
        </div>
        <PartnerLogoMarquee />
      </section>
    </ClientLayout>
  );
}

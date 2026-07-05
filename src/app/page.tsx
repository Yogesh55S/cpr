"use client";

import ClientLayout from "@/components/ClientLayout";
import Hero from "@/components/Hero";
import FeaturedFaresSection from "@/components/home/FeaturedFaresSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import PopularPackagesSection from "@/components/home/PopularPackagesSection";
import PopularDestinationsSection from "@/components/home/PopularDestinationsSection";
import AwesomePackagesSection from "@/components/home/AwesomePackagesSection";
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection";
import AirlinePartnersSection from "@/components/home/AirlinePartnersSection";

export default function HomePage() {
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

      {/* ===== SECTIONS ===== */}
      <FeaturedFaresSection />
      <WhoWeAreSection />
      <PopularPackagesSection />
      <PopularDestinationsSection />
      <AwesomePackagesSection />
      <CustomerReviewsSection />
      <AirlinePartnersSection />
    </ClientLayout>
  );
}

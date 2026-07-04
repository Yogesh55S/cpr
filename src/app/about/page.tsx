import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Cheap Prime Fares - your trusted partner for international travel since 2010. 85% repeat-client rate and 5-star Google reviews.",
  alternates: {
    canonical: "https://cheapprimefares.com/about/",
  },
};

export default function AboutPage() {
  return (
    <ClientLayout>
      {/* Hero */}
      <section className="relative bg-navy min-h-[40vh] flex items-center justify-center overflow-hidden pt-[60px] lg:pt-[70px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/hero-video-poster.jpg)" }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Cheap Prime Fares
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Your trusted partner for international travel since 2010
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            Cheap Prime Fares was founded with a simple mission: make international travel affordable for everyone. What started as a small operation helping friends and family find cheaper flights has grown into a full-service travel agency serving thousands of travelers each year.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            We specialize in USA–India routes, offering exclusive deals you won&apos;t find on public booking sites. Our direct relationships with airlines and consolidators allow us to pass significant savings to our customers — often 30–50% below published fares.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Our commitment to service has earned us an 85% repeat-client rate and hundreds of 5-star Google reviews. When you book with Cheap Prime Fares, you&apos;re not just getting a ticket — you&apos;re gaining a travel partner who cares about your journey.
          </p>
        </div>
      </section>
    </ClientLayout>
  );
}

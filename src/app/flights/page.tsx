import type { Metadata } from "next";
import Link from "next/link";
import { Plane } from "lucide-react";
import ClientLayout from "@/components/ClientLayout";
import { flightRoutes } from "@/data/flights";

export const metadata: Metadata = {
  title: "Flights",
  description: "Browse all international flight routes with Cheap Prime Fares. USA to India, India to USA, and more destinations at unbeatable prices.",
  alternates: {
    canonical: "https://cheapprimefares.com/flights/",
  },
};

export default function FlightsLandingPage() {
  return (
    <ClientLayout>
      {/* Hero */}
      <section className="relative bg-[#0B3D3E] min-h-[35vh] flex items-center justify-center pt-[60px] lg:pt-[70px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23c8a45c' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Flight Deals
          </h1>
          <p className="text-lg text-gold">
            Exclusive fares on popular international routes
          </p>
        </div>
      </section>

      {/* Route Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {flightRoutes.map((route) => (
              <Link
                key={route.slug}
                href={`/flights/${route.slug}/`}
                className="flex items-center gap-3 p-5 rounded-card border border-light-border hover:border-gold hover:shadow-card transition-all group"
              >
                <Plane size={18} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-navy group-hover:text-gold transition-colors">
                  {route.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

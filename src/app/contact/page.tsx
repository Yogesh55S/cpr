import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";
import OfficeBlock from "@/components/OfficeBlock";
import { offices } from "@/data/offices";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Cheap Prime Fares - four offices worldwide in USA, India, Australia, and New Zealand. 24/7 customer support available.",
  alternates: {
    canonical: "https://cheapprimefares.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <ClientLayout>
      {/* Hero */}
      <section className="relative bg-navy min-h-[30vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-white/70">
            Four offices worldwide, always here to help
          </p>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office) => (
              <OfficeBlock key={office.id} office={office} />
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

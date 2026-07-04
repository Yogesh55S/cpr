"use client";

import Image from "next/image";
import { Package } from "@/data/packages";
import { useModal } from "@/lib/ModalContext";

interface Props {
  categoryName: string;
  packages: Package[];
}

export default function PackageCategoryClient({ categoryName, packages }: Props) {
  const { openEnquiry } = useModal();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B3D3E] min-h-[35vh] flex items-center justify-center pt-[60px] lg:pt-[70px]">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            {categoryName} Packages
          </h1>
          <p className="text-lg text-white/70">
            Handcrafted itineraries for unforgettable journeys
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} holiday package`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-body font-semibold text-navy mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted mb-2">{pkg.durationLabel}</p>
                  <p className="text-2xl font-display font-bold text-gold mb-4">
                    {pkg.currency === "USD" ? `$${pkg.price}` : `₹${pkg.price.toLocaleString("en-IN")}`}
                  </p>
                  <p className="text-sm text-charcoal/80 mb-4 line-clamp-2">
                    {pkg.summary}
                  </p>
                  <button
                    onClick={() => openEnquiry(pkg.name)}
                    className="w-full py-2.5 bg-gold text-navy font-medium rounded-button hover:bg-gold/90 transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

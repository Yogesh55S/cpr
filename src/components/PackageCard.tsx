"use client";

import Image from "next/image";
import { Package } from "@/data/packages";

interface PackageCardProps {
  pkg: Package;
  onBook: (name: string) => void;
}

export default function PackageCard({ pkg, onBook }: PackageCardProps) {
  const formatPrice = () => {
    if (pkg.currency === "USD") {
      return `$${pkg.price}`;
    }
    return `₹${pkg.price.toLocaleString("en-IN")}`;
  };

  return (
    <div className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} holiday package`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-body font-semibold text-navy mb-1">{pkg.name}</h3>
        <p className="text-sm text-muted mb-2">{pkg.durationLabel}</p>
        <p className="text-xl font-display font-bold text-gold mb-3">
          {formatPrice()}
        </p>
        <button
          onClick={() => onBook(pkg.name)}
          className="w-full py-2.5 bg-gold text-navy font-medium rounded-button hover:bg-gold/90 transition-colors text-sm"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

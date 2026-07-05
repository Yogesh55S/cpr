import DestinationTile from "@/components/DestinationTile";
import { destinations } from "@/data/destinations";

export default function PopularDestinationsSection() {
  return (
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
  );
}

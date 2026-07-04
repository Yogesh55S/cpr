import { Office } from "@/data/offices";
import MapEmbed from "./MapEmbed";
import ContactForm from "./ContactForm";

interface OfficeBlockProps {
  office: Office;
}

export default function OfficeBlock({ office }: OfficeBlockProps) {
  return (
    <div className="bg-white rounded-card shadow-card overflow-hidden">
      <MapEmbed src={office.mapUrl} title={`Map of ${office.city} office`} />
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-navy">
          {office.country}
        </h3>
        <p className="text-charcoal text-sm mt-2 leading-relaxed">
          {office.address}
        </p>
        <div className="mt-3 space-y-1">
          {office.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="block text-gold text-sm hover:underline"
            >
              {phone}
            </a>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-light-border">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

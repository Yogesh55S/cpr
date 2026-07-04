import { Phone, MessageCircle } from "lucide-react";

export default function CallWhatsAppFloatingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow-floating-bar z-50 flex md:hidden">
      <a
        href="tel:+919501737767"
        className="flex-1 flex items-center justify-center gap-2 bg-navy text-white font-medium"
      >
        <Phone size={18} />
        Call Now
      </a>
      <a
        href="https://wa.me/919501737767"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-whatsapp-green text-white font-medium"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}

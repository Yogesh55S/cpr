import Link from "next/link";
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

const importantLinks = [
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions/" },
  { label: "Disclaimer", href: "/legal/disclaimer/" },
  { label: "Privacy Policy", href: "/legal/privacy-policy/" },
  { label: "Booking Rules", href: "/legal/booking-rules/" },
  { label: "Visa Information", href: "/legal/visa-information/" },
  { label: "Travel Tips", href: "/legal/travel-trip/" },
  { label: "Refer and Earn", href: "/refer-and-earn/" },
  { label: "FAQ", href: "/faq/" },
];

const airlines = [
  "Qatar Airways",
  "Etihad",
  "Air India",
  "Cathay Pacific",
  "Southwest",
  "United",
  "Delta",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-content mx-auto px-4 md:px-6 pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Important Links */}
          <div>
            <h3 className="font-body font-semibold text-base mb-5">Important Links</h3>
            <ul className="space-y-2.5">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Airlines */}
          <div>
            <h3 className="font-body font-semibold text-base mb-5">Popular Airlines</h3>
            <ul className="space-y-2.5">
              {airlines.map((airline) => (
                <li key={airline} className="text-sm text-white/50">
                  {airline}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-semibold text-base mb-5">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>30 N Gould St Ste R, Sheridan, WY 82801</span>
              </div>
              <a
                href="tel:+919501737767"
                className="flex items-center gap-2 text-sm text-gold hover:underline"
              >
                <Phone size={16} />
                +91-9501737767
              </a>
              <a
                href="mailto:info@cheapprimefares.com"
                className="flex items-center gap-2 text-sm text-gold hover:underline"
              >
                <Mail size={16} />
                info@cheapprimefares.com
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Global Sites */}
          <div>
            <h3 className="font-body font-semibold text-base mb-5">Our Global Sites</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  <img src="/images/flag-uk.png" alt="UK flag" className="w-8 h-8 rounded-full object-cover" />
                </span>
                <span className="text-sm text-white/70">United Kingdom</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  <img src="/images/flag-canada.png" alt="Canada flag" className="w-8 h-8 rounded-full object-cover" />
                </span>
                <span className="text-sm text-white/70">Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  <img src="/images/flag-india.png" alt="India flag" className="w-8 h-8 rounded-full object-cover" />
                </span>
                <span className="text-sm text-white/70">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50 uppercase tracking-wider">Approved by</span>
            <img
              src="/images/badge-trust.png"
              alt="Trust badge"
              className="h-10 object-contain"
            />
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <img
              src="/images/badge-google.png"
              alt="Google Reviews 4.8 stars"
              className="h-10 object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Cheap Prime Fares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

/* ── WhatsApp SVG ── */
function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      width={size} height={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── Inline SVG flag icons (no broken img tags) ── */
function FlagUK({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width={size} height={size * 0.5}
      className="rounded shrink-0" aria-label="UK flag">
      <rect width="60" height="30" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  );
}
function FlagCA({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width={size} height={size * 0.5}
      className="rounded shrink-0" aria-label="Canada flag">
      <rect width="60" height="30" fill="#fff"/>
      <rect width="15" height="30" fill="#FF0000"/>
      <rect x="45" width="15" height="30" fill="#FF0000"/>
      <text x="30" y="22" textAnchor="middle" fill="#FF0000" fontSize="18" fontFamily="serif">🍁</text>
    </svg>
  );
}
function FlagIN({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width={size} height={size * 0.67}
      className="rounded shrink-0" aria-label="India flag">
      <rect width="60" height="40" fill="#fff"/>
      <rect width="60" height="13.3" fill="#FF9933"/>
      <rect y="26.7" width="60" height="13.3" fill="#138808"/>
      <circle cx="30" cy="20" r="4" fill="none" stroke="#000080" strokeWidth="1.5"/>
    </svg>
  );
}

const importantLinks = [
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions/" },
  { label: "Disclaimer",         href: "/legal/disclaimer/" },
  { label: "Privacy Policy",     href: "/legal/privacy-policy/" },
  { label: "Booking Rules",      href: "/legal/booking-rules/" },
  { label: "Visa Information",   href: "/legal/visa-information/" },
  { label: "Travel Tips",        href: "/legal/travel-trip/" },
  { label: "Refer and Earn",     href: "/refer-and-earn/" },
  { label: "FAQ",                href: "/faq/" },
];

const airlines = [
  "Qatar Airways",
  "Etihad Airways",
  "Air India",
  "Cathay Pacific",
  "Southwest Airlines",
  "United Airlines",
  "Delta Air Lines",
];

const packageLinks = [
  { label: "Domestic Tour",           href: "/packages/domestic-tour/" },
  { label: "Domestic Honeymoon",      href: "/packages/domestic-honeymoon/" },
  { label: "International Tour",      href: "/packages/international-tour/" },
  { label: "International Honeymoon", href: "/packages/international-honeymoon/" },
  { label: "Popular Tour",            href: "/packages/popular-tour/" },
  { label: "Popular Honeymoon",       href: "/packages/popular-honeymoon/" },
];

const globalSites = [
  { label: "United Kingdom", Flag: FlagUK },
  { label: "Canada",         Flag: FlagCA },
  { label: "India",          Flag: FlagIN },
];

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/footer-bg-4k.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ── Dark overlay so text stays readable while image shows through ── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#023535] via-[#0B3D3E] to-[#023535] opacity-90" />

      {/* ── Top gold accent line ── */}
      <div className="relative z-10 h-[3px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 pt-14 pb-10">

        {/* ── Brand row ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-10 border-b border-white/10">
          <div className="max-w-sm">
            <p className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight mb-1">
              Cheap Prime Fares
            </p>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A227] mb-4">
              International Travel Experts
            </p>
            <p className="text-sm text-white leading-relaxed">
              Over a decade connecting travelers across continents with unbeatable fares
              and curated holiday experiences. Trusted by thousands worldwide.
            </p>
          </div>

          {/* Socials + contact pills */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              {[
                { href: "https://facebook.com",  Icon: Facebook,  label: "Facebook"  },
                { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
                { href: "https://linkedin.com",  Icon: Linkedin,  label: "LinkedIn"  },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                             text-white hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:+919501737767"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/20
                           text-sm text-white hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
                <Phone size={13} />
                +91-9501737767
              </a>
              <a href="https://wa.me/919501737767" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full
                           bg-[#25D366]/20 border border-[#25D366]/30
                           text-sm text-[#25D366] hover:bg-[#25D366]/30 transition-all">
                <WhatsAppIcon size={13} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── Four-column grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold text-[#C9A227] uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white hover:text-white transition-colors leading-snug">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Holiday Packages */}
          <div>
            <h4 className="text-[11px] font-bold text-[#C9A227] uppercase tracking-widest mb-5">Holiday Packages</h4>
            <ul className="space-y-2.5">
              {packageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white hover:text-white transition-colors leading-snug">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Airlines */}
          <div>
            <h4 className="text-[11px] font-bold text-[#C9A227] uppercase tracking-widest mb-5">Partner Airlines</h4>
            <ul className="space-y-2.5">
              {airlines.map((airline) => (
                <li key={airline} className="text-sm text-white">{airline}</li>
              ))}
            </ul>
          </div>

          {/* Contact + Global Sites */}
          <div>
            <h4 className="text-[11px] font-bold text-[#C9A227] uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="space-y-3 mb-7">
              <div className="flex items-start gap-2.5 text-sm text-white">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#C9A227]/70" />
                <span className="leading-snug">30 N Gould St Ste R, Sheridan, WY 82801</span>
              </div>
              <a href="tel:+919501737767"
                className="flex items-center gap-2.5 text-sm text-white hover:text-[#C9A227] transition-colors">
                <Phone size={13} className="shrink-0 text-[#C9A227]/70" />
                +91-9501737767
              </a>
              <a href="mailto:info@cheapprimefares.com"
                className="flex items-center gap-2.5 text-sm text-white hover:text-[#C9A227] transition-colors break-all">
                <Mail size={13} className="shrink-0 text-[#C9A227]/70" />
                info@cheapprimefares.com
              </a>
            </div>

            <h4 className="text-[11px] font-bold text-[#C9A227] uppercase tracking-widest mb-4">Global Sites</h4>
            <div className="space-y-3">
              {globalSites.map(({ label, Flag }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="shrink-0 overflow-hidden rounded-sm shadow-sm">
                    <Flag size={28} />
                  </div>
                  <span className="text-sm text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Trust badges ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6
                        py-6 border-t border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs text-white uppercase tracking-wider">Approved by</span>
            <img src="/images/badge-trust.png" alt="Trust badge" className="h-9 object-contain" />
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <img src="/images/badge-google.png" alt="Google Reviews 4.8 stars" className="h-9 object-contain" />
        </div>

        {/* ── Copyright ── */}
        <p className="text-center text-xs text-white">
          &copy; {new Date().getFullYear()} Cheap Prime Fares. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

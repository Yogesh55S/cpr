"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Plane, Phone } from "lucide-react";

/* ── Proper WhatsApp SVG icon ─────────────────────────────────────────── */
function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const flightLinks = [
  { label: "USA to India",           href: "/flights/usa-to-india/" },
  { label: "India to USA",           href: "/flights/india-to-usa/" },
  { label: "USA to Chennai",         href: "/flights/usa-to-chennai/" },
  { label: "USA to Bengaluru",       href: "/flights/usa-to-bengaluru/" },
  { label: "USA to Hyderabad",       href: "/flights/usa-to-hyderabad/" },
  { label: "USA to Ahmedabad",       href: "/flights/usa-to-ahmedabad/" },
  { label: "Chicago to India",       href: "/flights/chicago-to-india/" },
  { label: "Houston to India",       href: "/flights/houston-to-india/" },
  { label: "Newark to India",        href: "/flights/newark-to-india/" },
  { label: "New York to India",      href: "/flights/new-york-to-india/" },
  { label: "San Francisco to India", href: "/flights/san-francisco-to-india/" },
  { label: "Delhi to Canada",        href: "/flights/delhi-to-canada/" },
  { label: "Delhi to Australia",     href: "/flights/delhi-to-australia/" },
  { label: "India to Myanmar",       href: "/flights/india-to-myanmar/" },
  { label: "India to UAE",           href: "/flights/india-to-uae/" },
  { label: "India to Bangkok",       href: "/flights/india-to-bangkok/" },
];

const packageLinks = [
  { label: "Domestic Tour",           href: "/packages/domestic-tour/" },
  { label: "Domestic Honeymoon",      href: "/packages/domestic-honeymoon/" },
  { label: "International Tour",      href: "/packages/international-tour/" },
  { label: "International Honeymoon", href: "/packages/international-honeymoon/" },
  { label: "Popular Tour",            href: "/packages/popular-tour/" },
  { label: "Popular Honeymoon",       href: "/packages/popular-honeymoon/" },
];

const navLinks = [
  { label: "Home",             href: "/",          hasMega: false },
  { label: "Who We Are",       href: "/about/",    hasMega: false },
  { label: "Flights",          href: "/flights/",  hasMega: true  },
  { label: "Holiday Packages", href: "/packages/", hasMega: true  },
  { label: "Blog",             href: "/blog/",     hasMega: false },
  { label: "Contact Us",       href: "/contact/",  hasMega: false },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen,        setMobileOpen]       = useState(false);
  const [flightsOpen,       setFlightsOpen]       = useState(false);
  const [packagesOpen,      setPackagesOpen]      = useState(false);
  const [mobileFlightsOpen, setMobileFlightsOpen] = useState(false);
  const [mobilePkgOpen,     setMobilePkgOpen]     = useState(false);
  const [scrolled,          setScrolled]          = useState(false);

  const flightsRef  = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setFlightsOpen(false);
    setPackagesOpen(false);
    setMobileFlightsOpen(false);
    setMobilePkgOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isHeroPage = pathname === "/";
  const atTop      = isHeroPage && !scrolled;

  // On inner pages: always solid teal navbar so white text is readable on any page bg.
  // On homepage at top: transparent so hero image shows through.
  // On homepage after scroll: white frosted glass.
  const navBg = atTop && isHeroPage
    ? "bg-transparent"
    : "bg-[#0B3D3E] shadow-md";

  const logoText  = "text-white";
  const logoSub   = "text-white";
  const linkBase  = "text-white/90";
  const activeCol = "text-[#C9A227]";
  const toggleCol = "text-white";

  return (
    <>
      {/* ═══════════════════════════════════
          HEADER BAR
      ═══════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className={`transition-all duration-300 ${navBg}`}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8
                          h-[60px] sm:h-[64px] lg:h-[70px]
                          flex items-center justify-between gap-4">

            {/* ── Logo ── */}
            <Link href="/" className="flex flex-col shrink-0 min-w-0">
              <span className={`font-display font-bold leading-tight tracking-tight transition-colors duration-300
                                text-[15px] sm:text-lg lg:text-[22px] ${logoText}`}>
                Cheap Prime Fares
              </span>
              <span className={`text-[8px] sm:text-[9px] tracking-[0.18em] uppercase transition-colors duration-300 ${logoSub}`}>
                International Travel Experts
              </span>
            </Link>

            {/* ── Desktop Nav (lg+) ── */}
            <nav className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  ref={link.label === "Flights" ? flightsRef : link.label === "Holiday Packages" ? packagesRef : undefined}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.label === "Flights")          setFlightsOpen(true);
                    if (link.label === "Holiday Packages") setPackagesOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (link.label === "Flights")          setFlightsOpen(false);
                    if (link.label === "Holiday Packages") setPackagesOpen(false);
                  }}
                >
                  {link.hasMega ? (
                    <button className={`flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-sm font-medium rounded-lg
                                        transition-colors duration-200
                                        ${isActive(link.href) ? activeCol : `${linkBase} hover:text-[#C9A227]`}`}>
                      {link.label}
                      <ChevronDown size={13} className={`transition-transform duration-200 ${
                        (link.label === "Flights" && flightsOpen) ||
                        (link.label === "Holiday Packages" && packagesOpen) ? "rotate-180" : ""
                      }`} />
                    </button>
                  ) : (
                    <Link href={link.href}
                      className={`relative flex items-center px-2.5 xl:px-3.5 py-2 text-sm font-medium rounded-lg
                                  transition-colors duration-200
                                  ${isActive(link.href) ? activeCol : `${linkBase} hover:text-[#C9A227]`}`}>
                      {link.label}
                      {isActive(link.href) && (
                        <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 bg-[#C9A227] rounded-full" />
                      )}
                    </Link>
                  )}

                  {/* Flights mega */}
                  {link.label === "Flights" && flightsOpen && (
                    <div className="absolute top-full pt-2 z-50 left-1/2 -translate-x-1/2">
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 xl:p-6 w-[520px] xl:w-[640px]">
                        <div className="grid grid-cols-3 gap-4 xl:gap-6">
                          {[
                            { heading: "USA → India",          items: flightLinks.slice(0, 6)  },
                            { heading: "India → USA & More",   items: flightLinks.slice(6, 11) },
                            { heading: "International Routes", items: flightLinks.slice(11)    },
                          ].map(({ heading, items }) => (
                            <div key={heading}>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{heading}</p>
                              <ul className="space-y-1.5">
                                {items.map((f) => (
                                  <li key={f.href}>
                                    <Link href={f.href}
                                      className="flex items-center gap-1.5 text-xs xl:text-sm text-slate-600 hover:text-[#C9A227] transition-colors py-0.5">
                                      <Plane size={10} className="text-[#C9A227] shrink-0" />
                                      {f.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <Link href="/flights/" className="text-xs font-semibold text-[#0B3D3E] hover:text-[#C9A227] transition-colors">
                            View all flight routes →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Packages mega */}
                  {link.label === "Holiday Packages" && packagesOpen && (
                    <div className="absolute top-full pt-2 z-50 left-1/2 -translate-x-1/2">
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 xl:p-6 w-[360px] xl:w-[420px]">
                        <div className="grid grid-cols-2 gap-4 xl:gap-6">
                          {[
                            { heading: "Tour Packages",       items: packageLinks.slice(0, 3) },
                            { heading: "Honeymoon & Popular", items: packageLinks.slice(3)    },
                          ].map(({ heading, items }) => (
                            <div key={heading}>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{heading}</p>
                              <ul className="space-y-1.5">
                                {items.map((p) => (
                                  <li key={p.href}>
                                    <Link href={p.href}
                                      className="flex items-center gap-1.5 text-xs xl:text-sm text-slate-600 hover:text-[#C9A227] transition-colors py-0.5">
                                      <Plane size={10} className="text-[#C9A227] shrink-0" />
                                      {p.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <Link href="/packages/" className="text-xs font-semibold text-[#0B3D3E] hover:text-[#C9A227] transition-colors">
                            Browse all packages →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Desktop CTAs (lg+) ── */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a href="tel:+919501737767"
                className="flex items-center gap-1.5 rounded-full font-semibold text-sm transition-all duration-200 border-2 px-3 py-2 xl:px-4 xl:py-2 border-white/40 text-white hover:border-white hover:bg-white/15"
                aria-label="Call us">
                <Phone size={14} />
                <span className="hidden xl:inline">Call Now</span>
              </a>
              <a href="https://wa.me/919501737767" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 xl:px-4 xl:py-2
                           rounded-full text-sm font-semibold
                           bg-[#25D366] text-white hover:bg-[#20bc59] transition-colors"
                aria-label="WhatsApp">
                <WhatsAppIcon size={15} />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div>

            {/* ── Mobile right side: Phone + WhatsApp icon buttons + Hamburger ── */}
            <div className="lg:hidden flex items-center gap-1">
              <a href="tel:+919501737767"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 text-white hover:bg-white/15"
                aria-label="Call us">
                <Phone size={18} />
              </a>
              <a href="https://wa.me/919501737767" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200"
                aria-label="WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${toggleCol}`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}>
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════
          MOBILE DRAWER  — z-[60] sits ABOVE header z-50
      ═══════════════════════════════════ */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300
                       ${mobileOpen ? "visible" : "invisible pointer-events-none"}`}>

        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                         ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)} />

        {/* Slide-in panel */}
        <div className={`absolute top-0 right-0 h-full w-[min(300px,88vw)]
                         bg-white shadow-2xl flex flex-col
                         transition-transform duration-300
                         ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>

          {/* Drawer header */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-slate-100 shrink-0">
            <div>
              <p className="font-display font-bold text-[#0B3D3E] text-base sm:text-lg leading-tight">
                Cheap Prime Fares
              </p>
              <p className="text-[8px] text-slate-400 tracking-[0.18em] uppercase">
                International Travel Experts
              </p>
            </div>
            <button onClick={() => setMobileOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
              aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto px-3 sm:px-4 py-3">
            {navLinks.map((link) => (
              <div key={link.href} className="mb-0.5">
                {link.hasMega ? (
                  <>
                    <button
                      onClick={() => {
                        if (link.label === "Flights") setMobileFlightsOpen(!mobileFlightsOpen);
                        else setMobilePkgOpen(!mobilePkgOpen);
                      }}
                      className={`flex items-center justify-between w-full px-3 py-3
                                  text-sm font-semibold rounded-xl transition-colors
                                  ${isActive(link.href) ? "text-[#C9A227] bg-amber-50" : "text-slate-700 hover:bg-slate-50"}`}>
                      {link.label}
                      <ChevronDown size={15} className={`transition-transform duration-200 ${
                        (link.label === "Flights" && mobileFlightsOpen) ||
                        (link.label === "Holiday Packages" && mobilePkgOpen) ? "rotate-180" : ""
                      }`} />
                    </button>

                    {((link.label === "Flights" && mobileFlightsOpen) ||
                      (link.label === "Holiday Packages" && mobilePkgOpen)) && (
                      <div className="ml-3 pl-3 border-l-2 border-[#C9A227]/25 mt-0.5 mb-1.5">
                        {(link.label === "Flights" ? flightLinks : packageLinks).map((sub) => (
                          <Link key={sub.href} href={sub.href}
                            className="flex items-center gap-2 py-2 px-2 text-xs sm:text-sm
                                       text-slate-500 hover:text-[#C9A227] rounded-lg transition-colors">
                            <Plane size={9} className="text-[#C9A227]/50 shrink-0" />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href}
                    className={`flex items-center px-3 py-3 text-sm font-semibold rounded-xl transition-colors
                                ${isActive(link.href) ? "text-[#C9A227] bg-amber-50" : "text-slate-700 hover:bg-slate-50"}`}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Drawer footer — contact info only, no full buttons */}
          <div className="shrink-0 px-4 py-4 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-3">Get in touch</p>
            <div className="flex items-center gap-3">
              <a href="tel:+919501737767"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold
                           border-2 border-[#0B3D3E] text-[#0B3D3E] hover:bg-[#0B3D3E] hover:text-white transition-colors">
                <Phone size={14} />
                Call
              </a>
              <a href="https://wa.me/919501737767" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold
                           bg-[#25D366] text-white hover:bg-[#20bc59] transition-colors">
                <WhatsAppIcon size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

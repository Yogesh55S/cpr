"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Menu,
  X,
  ChevronDown,
  Plane,
  MessageCircle,
} from "lucide-react";

const flightLinks = [
  { label: "USA to India", href: "/flights/usa-to-india/" },
  { label: "India to USA", href: "/flights/india-to-usa/" },
  { label: "USA to Chennai", href: "/flights/usa-to-chennai/" },
  { label: "USA to Bengaluru", href: "/flights/usa-to-bengaluru/" },
  { label: "USA to Hyderabad", href: "/flights/usa-to-hyderabad/" },
  { label: "USA to Ahmedabad", href: "/flights/usa-to-ahmedabad/" },
  { label: "Chicago to India", href: "/flights/chicago-to-india/" },
  { label: "Houston to India", href: "/flights/houston-to-india/" },
  { label: "Newark to India", href: "/flights/newark-to-india/" },
  { label: "New York to India", href: "/flights/new-york-to-india/" },
  { label: "San Francisco to India", href: "/flights/san-francisco-to-india/" },
  { label: "Delhi to Canada", href: "/flights/delhi-to-canada/" },
  { label: "Delhi to Australia", href: "/flights/delhi-to-australia/" },
  { label: "India to Myanmar", href: "/flights/india-to-myanmar/" },
  { label: "India to UAE", href: "/flights/india-to-uae/" },
  { label: "India to Bangkok", href: "/flights/india-to-bangkok/" },
];

const packageLinks = [
  { label: "Domestic Tour", href: "/packages/domestic-tour/" },
  { label: "Domestic Honeymoon", href: "/packages/domestic-honeymoon/" },
  { label: "International Tour", href: "/packages/international-tour/" },
  { label: "International Honeymoon", href: "/packages/international-honeymoon/" },
  { label: "Popular Tour", href: "/packages/popular-tour/" },
  { label: "Popular Honeymoon", href: "/packages/popular-honeymoon/" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about/" },
  { label: "Flights", href: "/flights/", hasMega: true },
  { label: "Holiday Packages", href: "/packages/", hasMega: true },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [flightsOpen, setFlightsOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > lastScrollY && currentY > 100) {
        setTopBarVisible(false);
      } else {
        setTopBarVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
    setFlightsOpen(false);
    setPackagesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHeroPage = pathname === "/";

  /* Derived nav-bar appearance */
  const navBg = isHeroPage
    ? scrolled
      ? "bg-[#0B3D3E] shadow-lg border-b border-[#16888C]/20"
      : "bg-transparent border-b border-white/10"
    : `bg-cream border-b border-light-border${scrolled ? " shadow-md" : ""}`;

  const logoColor    = isHeroPage ? "text-white"      : "text-navy";
  const logoSubColor = isHeroPage ? "text-white/55"   : "text-muted";
  const linkBase     = isHeroPage ? "text-white/90 hover:text-[#C9A227]" : "text-navy hover:text-[#C9A227]";
  const linkActive   = "text-[#C9A227]";
  const toggleColor  = isHeroPage ? "text-white hover:text-[#C9A227]" : "text-navy hover:text-gold";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Utility Bar */}
        <div
          className={`bg-navy text-white transition-transform duration-400 ${
            topBarVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-content mx-auto px-4 md:px-6 h-10 flex items-center justify-between text-xs">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+919501737767"
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Phone size={12} />
                +91-9501737767
              </a>
              <a
                href="mailto:info@cheapprimefares.com"
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Mail size={12} />
                info@cheapprimefares.com
              </a>
            </div>
            <div className="md:hidden">
              <a
                href="tel:+919501737767"
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Phone size={12} />
                Call Us: +91-9501737767
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 hover:text-gold transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 hover:text-gold transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 hover:text-gold transition-all"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`transition-all duration-300 ${navBg}`}>
          <div className="max-w-content mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className={`font-display font-bold text-xl md:text-2xl leading-tight transition-colors duration-300 ${logoColor}`}>
                Cheap Prime Fares
              </span>
              <span className={`text-[10px] md:text-xs tracking-widest uppercase transition-colors duration-300 ${logoSubColor}`}>
                International Travel Experts
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasMega ? (
                    <button
                      onMouseEnter={() =>
                        link.label === "Flights"
                          ? setFlightsOpen(true)
                          : setPackagesOpen(true)
                      }
                      onMouseLeave={() =>
                        link.label === "Flights"
                          ? setFlightsOpen(false)
                          : setPackagesOpen(false)
                      }
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(link.href) ? linkActive : linkBase
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          (link.label === "Flights" && flightsOpen) ||
                          (link.label === "Holiday Packages" && packagesOpen)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(link.href) ? linkActive : linkBase
                      }`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="block h-0.5 bg-gold mt-0.5 rounded-full" />
                      )}
                    </Link>
                  )}

                  {/* Mega Menu - Flights */}
                  {link.label === "Flights" && flightsOpen && (
                    <div
                      onMouseEnter={() => setFlightsOpen(true)}
                      onMouseLeave={() => setFlightsOpen(false)}
                      className="absolute top-full left-0 w-[640px] bg-cream rounded-b-modal shadow-modal p-6"
                    >
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                            USA to India
                          </h4>
                          <ul className="space-y-2">
                            {flightLinks.slice(0, 6).map((f) => (
                              <li key={f.href}>
                                <Link
                                  href={f.href}
                                  className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors"
                                >
                                  <Plane size={12} />
                                  {f.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                            India to USA &amp; More
                          </h4>
                          <ul className="space-y-2">
                            {flightLinks.slice(6, 11).map((f) => (
                              <li key={f.href}>
                                <Link
                                  href={f.href}
                                  className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors"
                                >
                                  <Plane size={12} />
                                  {f.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                            International Routes
                          </h4>
                          <ul className="space-y-2">
                            {flightLinks.slice(11).map((f) => (
                              <li key={f.href}>
                                <Link
                                  href={f.href}
                                  className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors"
                                >
                                  <Plane size={12} />
                                  {f.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mega Menu - Packages */}
                  {link.label === "Holiday Packages" && packagesOpen && (
                    <div
                      onMouseEnter={() => setPackagesOpen(true)}
                      onMouseLeave={() => setPackagesOpen(false)}
                      className="absolute top-full left-0 w-[400px] bg-cream rounded-b-modal shadow-modal p-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                            Tour Packages
                          </h4>
                          <ul className="space-y-2">
                            {packageLinks.slice(0, 3).map((p) => (
                              <li key={p.href}>
                                <Link
                                  href={p.href}
                                  className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors"
                                >
                                  <Plane size={12} />
                                  {p.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                            Honeymoon &amp; Popular
                          </h4>
                          <ul className="space-y-2">
                            {packageLinks.slice(3).map((p) => (
                              <li key={p.href}>
                                <Link
                                  href={p.href}
                                  className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors"
                                >
                                  <Plane size={12} />
                                  {p.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+919501737767"
                className="hidden md:flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-button text-sm font-medium hover:bg-navy/90 transition-colors"
              >
                <Phone size={14} />
                <span className="hidden xl:inline">Call Now</span>
              </a>
              <a
                href="https://wa.me/919501737767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-whatsapp-green text-white px-4 py-2 rounded-button text-sm font-medium hover:bg-whatsapp-green/90 transition-colors"
              >
                <MessageCircle size={14} />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 transition-colors ${toggleColor}`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 top-[112px] bg-navy z-40 lg:hidden overflow-y-auto">
            <nav className="p-6">
              {navLinks.map((link) => (
                <div key={link.href} className="mb-2">
                  {link.hasMega ? (
                    <div>
                      <button
                        onClick={() =>
                          link.label === "Flights"
                            ? setFlightsOpen(!flightsOpen)
                            : setPackagesOpen(!packagesOpen)
                        }
                        className="flex items-center justify-between w-full py-3 text-lg font-display text-white"
                      >
                        {link.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            (link.label === "Flights" && flightsOpen) ||
                            (link.label === "Holiday Packages" && packagesOpen)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {(link.label === "Flights" && flightsOpen) ||
                      (link.label === "Holiday Packages" && packagesOpen) ? (
                        <div className="pl-4 pb-3 space-y-2">
                          {(link.label === "Flights"
                            ? flightLinks
                            : packageLinks
                          ).map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className="block py-1.5 text-sm text-white/70 hover:text-gold transition-colors"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-3 text-lg font-display text-white hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+919501737767"
                  className="flex items-center justify-center gap-2 bg-navy border border-white/30 text-white py-3 rounded-button"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919501737767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-whatsapp-green text-white py-3 rounded-button"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer — not needed on home page where the hero is full-bleed */}
      {!isHeroPage && <div className="h-[112px]" />}
    </>
  );
}

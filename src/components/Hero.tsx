"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeftRight,
  Calendar,
  MessageCircle,
  Minus,
  PlaneLanding,
  PlaneTakeoff,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { useModal } from "@/lib/ModalContext";

/* ── City → IATA lookup (common diaspora routes) ─────────────────────────── */
const CODES: Record<string, string> = {
  "new delhi": "DEL", delhi: "DEL",
  mumbai: "BOM", bombay: "BOM",
  bengaluru: "BLR", bangalore: "BLR",
  hyderabad: "HYD",
  chennai: "MAA", madras: "MAA",
  kolkata: "CCU",
  ahmedabad: "AMD",
  kochi: "COK", cochin: "COK",
  pune: "PNQ",
  goa: "GOI",
  "new york": "JFK", nyc: "JFK",
  "los angeles": "LAX",
  chicago: "ORD",
  houston: "IAH",
  "san francisco": "SFO", sf: "SFO",
  newark: "EWR",
  toronto: "YYZ",
  vancouver: "YVR",
  sydney: "SYD",
  melbourne: "MEL",
  dubai: "DXB",
  bangkok: "BKK",
  singapore: "SIN",
  london: "LHR",
};
const toIATA = (v: string) => CODES[v.toLowerCase().trim()] ?? null;

/* ── Gold hand-drawn SVG underline ──────────────────────────────────────── */
function GoldUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 10"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        bottom: -5,
        left: 0,
        width: "100%",
        height: 10,
        pointerEvents: "none",
      }}
    >
      <path
        d="M2 7 C35 2, 65 10, 90 5 C118 0, 152 9, 178 5"
        stroke="#C9A227"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Shared input class ───────────────────────────────────────────────────── */
const FIELD =
  "w-full pl-9 pr-3 py-2.5 text-sm rounded-lg " +
  "border border-[#16888C]/25 bg-[#F7F6F2] text-[#1B2B2C] " +
  "placeholder:text-[#1B2B2C]/40 " +
  "focus:outline-none focus:ring-2 focus:ring-[#C9A227]/50 focus:border-[#C9A227] " +
  "transition-colors";

/* ── IATA code display below a field ────────────────────────────────────── */
function IATACode({ code }: { code: string | null }) {
  if (!code) return null;
  return (
    <span
      className="block mt-0.5 text-[10px] font-semibold text-[#16888C] uppercase"
      style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
    >
      {code}
    </span>
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */
export default function Hero() {
  const { openEnquiry } = useModal();

  const [tripType, setTripType] = useState<"round-trip" | "one-way">("round-trip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  const today = new Date().toISOString().split("T")[0];

  function swap() {
    setFrom(to);
    setTo(from);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    openEnquiry(from && to ? `${from} → ${to}` : undefined);
  }

  return (
    <section
      className="relative flex flex-col min-h-screen md:min-h-[90vh]"
      aria-label="Hero"
    >
      {/* ── Background image + diagonal gradient overlay ─────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-video-poster.jpg"
          alt="Scenic aerial view — airplane wing over clouds at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/*
          Diagonal overlay: --teal-deep at 80 % opacity (bottom-left)
          fading to transparent (top-right) so text stays readable.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(11,61,62,0.93) 0%, rgba(11,61,62,0.82) 35%, rgba(11,61,62,0.45) 62%, rgba(11,61,62,0.06) 100%)",
          }}
        />
      </div>

      {/* ── Headline + CTAs + Trust strip ────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-content mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-10 md:pt-36 md:pb-12">
          <div
            className="hero-fade-up max-w-[620px]"
            style={{ animationDelay: "50ms" }}
          >
            {/* H1 ── the only h1 on the page */}
            <h1
              className="font-bold text-white leading-[1.1] mb-5"
              style={{
                fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              }}
            >
              Fly Home.{" "}
              <br className="sm:hidden" />
              Fly{" "}
              <span className="relative inline-block">
                Happy
                <GoldUnderline />
              </span>
              .
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/90 leading-relaxed mb-8 max-w-[560px]"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              }}
            >
              Best fares to India, USA, Canada &amp; Australia — booked by
              phone, WhatsApp, or online in seconds.
            </p>

            {/* CTA buttons */}
            <div
              className="hero-fade-up flex flex-col sm:flex-row gap-3 mb-10"
              style={{ animationDelay: "200ms" }}
            >
              <button
                onClick={() => openEnquiry()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wide bg-[#C9A227] text-[#0B3D3E] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227] motion-safe:hover:-translate-y-0.5 transition-all"
              >
                <Search size={16} aria-hidden="true" />
                Search Flights
              </button>

              <a
                href="https://wa.me/919501737767"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wide text-white border-2 border-white/80 bg-transparent hover:bg-white hover:text-[#0B3D3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="hero-fade-up flex flex-wrap items-center gap-y-3"
              style={{ animationDelay: "350ms" }}
            >
              {(
                [
                  { val: "15,000+", label: "Happy Travellers" },
                  { val: "4",       label: "Global Offices" },
                  { val: "24/7",    label: "Support" },
                ] as const
              ).map(({ val, label }, i) => (
                <div key={label} className="flex items-center">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="mx-4 self-stretch border-l border-dashed border-white/30"
                    />
                  )}
                  <div className="text-center">
                    <div
                      className="text-base font-semibold leading-none text-[#C9A227]"
                      style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                    >
                      {val}
                    </div>
                    <div className="text-[11px] text-white/70 mt-0.5 tracking-wide">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating boarding-pass search card ───────────────────────────── */}
      <div
        className="hero-fade-up relative z-20"
        style={{ animationDelay: "200ms" }}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 -mb-16 md:-mb-20">
          {/*
            Wrapper is position:relative so the notch circles (absolute children)
            are clipped neither by the card's overflow:hidden nor by the hero.
          */}
          <div className="relative">
            {/* Left notch — coloured to match the gradient behind the card */}
            <div
              aria-hidden="true"
              className="absolute rounded-full bg-[#0B3D3E] z-10"
              style={{ width: 22, height: 22, left: -11, top: 51 }}
            />
            {/* Right notch */}
            <div
              aria-hidden="true"
              className="absolute rounded-full bg-[#0B3D3E] z-10"
              style={{ width: 22, height: 22, right: -11, top: 51 }}
            />

            {/* Card */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
              style={{ border: "1px solid rgba(22,136,140,0.15)" }}
            >
              {/* Trip-type toggle row — ~62 px tall → notches centred at 62 px */}
              <div className="px-5 sm:px-6 pt-5 pb-3 flex items-center justify-between">
                <div
                  className="flex gap-0.5 bg-[#F7F6F2] p-1 rounded-full"
                  role="group"
                  aria-label="Select trip type"
                >
                  {(
                    [
                      { id: "round-trip", label: "Round Trip" },
                      { id: "one-way",    label: "One Way"    },
                    ] as const
                  ).map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setTripType(id)}
                      className="px-4 py-1.5 text-xs font-semibold rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A227]"
                      style={{
                        background: tripType === id ? "#16888C" : "transparent",
                        color:      tripType === id ? "#fff"     : "#1B2B2C",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <span
                  aria-hidden="true"
                  className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#16888C]/60"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  BOARDING PASS
                </span>
              </div>

              {/* Perforated dashed divider — aligns with the notch circles */}
              <div
                className="border-t-2 border-dashed"
                style={{ borderColor: "rgba(22,136,140,0.22)" }}
              />

              {/* Search form */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="px-5 sm:px-6 pt-4 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-end gap-3">

                  {/* FROM */}
                  <div className="lg:flex-1 min-w-0">
                    <label
                      htmlFor="hero-from"
                      className="block text-[10px] font-semibold uppercase tracking-widest text-[#1B2B2C]/50 mb-1"
                    >
                      From
                    </label>
                    <div className="relative">
                      <PlaneTakeoff
                        size={14}
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#16888C]"
                      />
                      <input
                        id="hero-from"
                        type="text"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        placeholder="City or Airport"
                        className={FIELD}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <IATACode code={toIATA(from)} />
                  </div>

                  {/* SWAP */}
                  <div className="hidden lg:flex lg:flex-none items-end pb-0.5 justify-center">
                    <button
                      type="button"
                      onClick={swap}
                      aria-label="Swap origin and destination"
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-[#16888C]/30 bg-white text-[#16888C] hover:bg-[#16888C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A227] transition-colors"
                    >
                      <ArrowLeftRight size={13} aria-hidden="true" />
                    </button>
                  </div>

                  {/* TO */}
                  <div className="lg:flex-1 min-w-0">
                    <label
                      htmlFor="hero-to"
                      className="block text-[10px] font-semibold uppercase tracking-widest text-[#1B2B2C]/50 mb-1"
                    >
                      To
                    </label>
                    <div className="relative">
                      <PlaneLanding
                        size={14}
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#16888C]"
                      />
                      <input
                        id="hero-to"
                        type="text"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        placeholder="City or Airport"
                        className={FIELD}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <IATACode code={toIATA(to)} />
                  </div>

                  {/* DEPART */}
                  <div className="lg:flex-1 min-w-0">
                    <label
                      htmlFor="hero-depart"
                      className="block text-[10px] font-semibold uppercase tracking-widest text-[#1B2B2C]/50 mb-1"
                    >
                      Depart
                    </label>
                    <div className="relative">
                      <Calendar
                        size={14}
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#16888C] pointer-events-none"
                      />
                      <input
                        id="hero-depart"
                        type="date"
                        value={depart}
                        onChange={(e) => setDepart(e.target.value)}
                        min={today}
                        className={FIELD}
                        required
                      />
                    </div>
                  </div>

                  {/* RETURN (round-trip only) */}
                  {tripType === "round-trip" && (
                    <div className="lg:flex-1 min-w-0">
                      <label
                        htmlFor="hero-return"
                        className="block text-[10px] font-semibold uppercase tracking-widest text-[#1B2B2C]/50 mb-1"
                      >
                        Return
                      </label>
                      <div className="relative">
                        <Calendar
                          size={14}
                          aria-hidden="true"
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#16888C] pointer-events-none"
                        />
                        <input
                          id="hero-return"
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          min={depart || today}
                          className={FIELD}
                        />
                      </div>
                    </div>
                  )}

                  {/* TRAVELLERS stepper */}
                  <div className="lg:flex-none">
                    <span
                      id="hero-travelers-label"
                      className="block text-[10px] font-semibold uppercase tracking-widest text-[#1B2B2C]/50 mb-1"
                    >
                      Travellers
                    </span>
                    <div
                      role="group"
                      aria-labelledby="hero-travelers-label"
                      className="flex items-center gap-1 px-3 py-2 rounded-lg border border-[#16888C]/25 bg-[#F7F6F2]"
                      style={{ height: 42 }}
                    >
                      <button
                        type="button"
                        onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                        disabled={travelers <= 1}
                        aria-label="Decrease travellers"
                        className="w-6 h-6 flex items-center justify-center rounded-full text-[#16888C] hover:bg-[#16888C]/10 disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A227] transition-colors"
                      >
                        <Minus size={12} aria-hidden="true" />
                      </button>
                      <span
                        aria-live="polite"
                        className="w-8 text-center text-sm font-semibold text-[#1B2B2C] select-none"
                        style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                      >
                        {travelers}
                      </span>
                      <button
                        type="button"
                        onClick={() => setTravelers((n) => Math.min(9, n + 1))}
                        disabled={travelers >= 9}
                        aria-label="Increase travellers"
                        className="w-6 h-6 flex items-center justify-center rounded-full text-[#16888C] hover:bg-[#16888C]/10 disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A227] transition-colors"
                      >
                        <Plus size={12} aria-hidden="true" />
                      </button>
                      <Users
                        size={13}
                        aria-hidden="true"
                        className="text-[#16888C]/50 ml-1 shrink-0"
                      />
                    </div>
                  </div>

                  {/* SEARCH button */}
                  <div className="lg:flex-none sm:col-span-2 lg:col-auto">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 rounded-lg bg-[#C9A227] text-[#0B3D3E] font-bold text-sm uppercase tracking-wide hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227] transition-all"
                      style={{ height: 42 }}
                    >
                      <Search size={15} aria-hidden="true" />
                      Search Flights
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* end card */}
          </div>
          {/* end boarding-pass wrapper */}
        </div>
      </div>
    </section>
  );
}

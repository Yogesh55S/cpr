"use client";

import { useState } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  Phone,
  Calendar,
  Users,
  Search,
} from "lucide-react";

interface FlightSearchFormProps {
  onSearch: (data: {
    tripType: string;
    from: string;
    to: string;
    phone: string;
    depart: string;
    return: string;
    travelers: string;
  }) => void;
}

export default function FlightSearchForm({ onSearch }: FlightSearchFormProps) {
  const [tripType, setTripType] = useState<"round-trip" | "one-way">("round-trip");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    phone: "",
    depart: "",
    return: "",
    travelers: "1",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ ...formData, tripType });
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-modal p-5 md:p-6 shadow-modal">
      {/* Trip Type Toggle */}
      <div className="flex gap-1 mb-5 bg-white/50 p-1 rounded-pill w-fit">
        <button
          type="button"
          onClick={() => setTripType("round-trip")}
          className={`px-4 py-1.5 text-sm font-medium rounded-pill transition-colors ${
            tripType === "round-trip"
              ? "bg-gold text-navy"
              : "text-navy/60 hover:text-navy"
          }`}
        >
          Round Trip
        </button>
        <button
          type="button"
          onClick={() => setTripType("one-way")}
          className={`px-4 py-1.5 text-sm font-medium rounded-pill transition-colors ${
            tripType === "one-way"
              ? "bg-gold text-navy"
              : "text-navy/60 hover:text-navy"
          }`}
        >
          One Way
        </button>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
        {/* From */}
        <div className="lg:col-span-1 relative">
          <label className="block text-xs font-medium text-navy mb-1">From</label>
          <div className="relative">
            <PlaneTakeoff
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              name="from"
              type="text"
              value={formData.from}
              onChange={handleChange}
              placeholder="Origin City"
              className="w-full pl-9"
              required
            />
          </div>
        </div>

        {/* To */}
        <div className="lg:col-span-1 relative">
          <label className="block text-xs font-medium text-navy mb-1">To</label>
          <div className="relative">
            <PlaneLanding
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              name="to"
              type="text"
              value={formData.to}
              onChange={handleChange}
              placeholder="Destination City"
              className="w-full pl-9"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="lg:col-span-1 relative">
          <label className="block text-xs font-medium text-navy mb-1">Phone</label>
          <div className="relative">
            <Phone
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full pl-9"
              required
            />
          </div>
        </div>

        {/* Depart */}
        <div className="lg:col-span-1 relative">
          <label className="block text-xs font-medium text-navy mb-1">Depart</label>
          <div className="relative">
            <Calendar
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              name="depart"
              type="date"
              value={formData.depart}
              onChange={handleChange}
              className="w-full pl-9"
              required
            />
          </div>
        </div>

        {/* Return */}
        {tripType === "round-trip" && (
          <div className="lg:col-span-1 relative">
            <label className="block text-xs font-medium text-navy mb-1">Return</label>
            <div className="relative">
              <Calendar
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                name="return"
                type="date"
                value={formData.return}
                onChange={handleChange}
                className="w-full pl-9"
              />
            </div>
          </div>
        )}

        {/* Travelers */}
        <div className="lg:col-span-1 relative">
          <label className="block text-xs font-medium text-navy mb-1">Travelers</label>
          <div className="relative">
            <Users
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <select
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full pl-9 appearance-none bg-white"
            >
              {Array.from({ length: 9 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "Traveler" : "Travelers"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-1 flex items-end">
          <button
            type="submit"
            className="w-full py-3 bg-gold text-navy font-semibold rounded-button hover:bg-gold/90 transition-colors flex items-center justify-center gap-2 shadow-button"
          >
            <Search size={18} />
            <span className="text-sm uppercase tracking-wider">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}

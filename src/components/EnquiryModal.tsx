"use client";

import { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  routeInfo?: string;
}

export default function EnquiryModal({ isOpen, onClose, routeInfo }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim() || !/^\d{7,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (7-15 digits)";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-modal shadow-modal w-full max-w-[520px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-muted hover:text-navy transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle size={56} className="mx-auto text-success mb-4" />
              <h3 className="font-display text-2xl font-bold text-navy mb-2">
                Thank You!
              </h3>
              <p className="text-muted">
                Our team will contact you shortly to help with your booking.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-gold text-navy font-medium rounded-button hover:bg-gold/90 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl font-bold text-navy mb-1">
                Enquire Now
              </h3>
              {routeInfo && (
                <p className="text-sm text-muted mb-5">
                  Route: {routeInfo}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="enq-name" className="block text-sm font-medium text-navy mb-1">
                    Your Name *
                  </label>
                  <input
                    id="enq-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full ${errors.name ? "border-error focus:ring-error/50" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-error text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="enq-email" className="block text-sm font-medium text-navy mb-1">
                    Your Email *
                  </label>
                  <input
                    id="enq-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full ${errors.email ? "border-error focus:ring-error/50" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-error text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="enq-phone" className="block text-sm font-medium text-navy mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="enq-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className={`w-full ${errors.phone ? "border-error focus:ring-error/50" : ""}`}
                  />
                  {errors.phone && (
                    <p className="text-error text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="enq-message" className="block text-sm font-medium text-navy mb-1">
                    Message *
                  </label>
                  <textarea
                    id="enq-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans..."
                    rows={4}
                    className={`w-full resize-none ${errors.message ? "border-error focus:ring-error/50" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-error text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gold text-navy font-semibold rounded-button hover:bg-gold/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

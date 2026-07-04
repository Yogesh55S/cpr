"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2 || formData.name.trim().length > 80) {
      newErrors.name = "Name must be 2-80 characters";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || phoneDigits.length < 7 || phoneDigits.length > 15) {
      newErrors.phone = "Phone must be 7-15 digits";
    }
    if (formData.subject && formData.subject.length > 120) {
      newErrors.subject = "Subject must be under 120 characters";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10 || formData.message.trim().length > 2000) {
      newErrors.message = "Message must be 10-2000 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; // honeypot check
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

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="mx-auto text-success mb-3" />
        <h4 className="font-display text-xl font-bold text-navy mb-1">Thank You!</h4>
        <p className="text-muted text-sm">We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cf-name" className="block text-sm font-medium text-navy mb-1">
          Your Name *
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className={`w-full ${errors.name ? "border-error" : ""}`}
        />
        {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-sm font-medium text-navy mb-1">
          Your Email *
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={`w-full ${errors.email ? "border-error" : ""}`}
        />
        {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="cf-phone" className="block text-sm font-medium text-navy mb-1">
          Your Number *
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 234 567 8900"
          className={`w-full ${errors.phone ? "border-error" : ""}`}
        />
        {errors.phone && <p className="text-error text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-sm font-medium text-navy mb-1">
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          className={`w-full ${errors.subject ? "border-error" : ""}`}
        />
        {errors.subject && <p className="text-error text-xs mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-navy mb-1">
          Message *
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={4}
          className={`w-full resize-none ${errors.message ? "border-error" : ""}`}
        />
        {errors.message && <p className="text-error text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
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
          "Send Message"
        )}
      </button>
    </form>
  );
}

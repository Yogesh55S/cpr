import type { Metadata } from "next";
import { Users, Share2, Gift } from "lucide-react";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Refer & Earn",
  description: "Refer friends and family to Cheap Prime Fares and earn rewards. Share the savings, earn discounts on future bookings.",
  alternates: {
    canonical: "https://cheapprimefares.com/refer-and-earn/",
  },
};

const steps = [
  {
    icon: Users,
    title: "Get Your Code",
    description: "Contact our team to receive your unique referral code. You can find it in your booking confirmations or by calling us.",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Share your referral code with friends, family, and colleagues planning to travel. Share via WhatsApp, email, or social media.",
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description: "When someone books using your code, both of you receive discount vouchers for future bookings. Refer 5+ people for a bonus!",
  },
];

export default function ReferAndEarnPage() {
  return (
    <ClientLayout>
      {/* Hero */}
      <section className="relative bg-navy min-h-[30vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Refer & Earn
          </h1>
          <p className="text-lg text-gold">
            Share the savings, earn rewards
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={28} className="text-gold" />
                </div>
                <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                  Step {index + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Rewards Info */}
          <div className="bg-cream rounded-card p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-navy mb-6 text-center">
              Rewards Structure
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-card">
                <span className="text-charcoal">Referrer Reward</span>
                <span className="font-display text-xl font-bold text-gold">$25 off</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-card">
                <span className="text-charcoal">Referee Reward</span>
                <span className="font-display text-xl font-bold text-gold">$15 off</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-card">
                <span className="text-charcoal">5+ Referrals Bonus</span>
                <span className="font-display text-xl font-bold text-gold">$50 bonus</span>
              </div>
            </div>
            <p className="text-xs text-muted text-center mt-6">
              Rewards valid for 12 months. Minimum booking values apply. Contact us for full terms.
            </p>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs, cancellationPolicy } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about booking flights and holiday packages with Cheap Prime Fares. Find answers about payments, cancellations, and more.",
  alternates: {
    canonical: "https://cheapprimefares.com/faq/",
  },
};

export default function FAQPage() {
  return (
    <ClientLayout>
      {/* JSON-LD FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-[#0B3D3E] min-h-[30vh] flex items-center justify-center pt-[60px] lg:pt-[70px]">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/70">
            Everything you need to know about booking with us
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FaqAccordion faqs={faqs} />

          {/* Cancellation Policy */}
          <div className="mt-16 pt-10 border-t border-light-border">
            <div
              className="prose prose-headings:font-display prose-headings:text-navy prose-p:text-charcoal max-w-none"
              dangerouslySetInnerHTML={{
                __html: cancellationPolicy
                  .replace(/## (.*)/g, '<h2 class="font-display text-2xl font-bold text-navy mt-8 mb-4">$1</h2>')
                  .replace(/### (.*)/g, '<h3 class="font-display text-xl font-semibold text-navy mt-6 mb-3">$1</h3>')
                  .replace(/- (.*)/g, '<li class="text-charcoal mb-1">$1</li>')
                  .replace(/\n\n/g, '</p><p class="text-charcoal mb-4">')
                  .replace(/^/, '<p class="text-charcoal mb-4">')
                  .replace(/$/, '</p>'),
              }}
            />
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

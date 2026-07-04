"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/faqs";

interface FaqAccordionProps {
  faqs: FAQ[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border-t border-light-border">
      {faqs.map((faq) => (
        <div key={faq.id} className="border-b border-light-border">
          <button
            onClick={() => toggle(faq.id)}
            className="w-full flex items-center justify-between py-5 text-left"
            aria-expanded={openId === faq.id}
          >
            <span className="font-body font-medium text-navy pr-4">
              {faq.question}
            </span>
            <ChevronDown
              size={20}
              className={`text-muted shrink-0 transition-transform duration-300 ${
                openId === faq.id ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === faq.id ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-charcoal leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

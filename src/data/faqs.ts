export interface FAQ {
  id: number;
  question: string;
  answer: string;
  sortOrder: number;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I book a flight with Cheap Prime Fares?",
    answer: "Booking is easy! You can search for flights on our website, call us at +91-9501737767, or send an enquiry through our contact form. Our travel experts will find the best deals for you and guide you through the booking process.",
    sortOrder: 1,
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express), Google Pay, and bank transfers. For certain routes, we also offer flexible payment plans. Contact us for details.",
    sortOrder: 2,
  },
  {
    id: 3,
    question: "What currencies can I pay in?",
    answer: "We accept payments in multiple currencies including USD, INR, AUD, NZD, and CAD. The currency will be based on your departure country and preference.",
    sortOrder: 3,
  },
  {
    id: 4,
    question: "How can I check my booking status?",
    answer: "Once your booking is confirmed, you'll receive a confirmation email with your booking reference number. You can check your status anytime by calling our 24/7 support line at +91-9501737767 or emailing info@cheapprimefares.com.",
    sortOrder: 4,
  },
  {
    id: 5,
    question: "Can I make changes to my booking after confirmation?",
    answer: "Yes, most bookings can be modified depending on the airline's fare rules. Changes may be subject to fees. Contact our support team as soon as possible to discuss your options.",
    sortOrder: 5,
  },
  {
    id: 6,
    question: "What is your cancellation and refund policy?",
    answer: "Cancellation and refund policies vary by airline and fare type. Generally, cancellations made within 24 hours of booking may be eligible for a full refund. After that, airline cancellation fees apply. Please refer to our detailed Cancellation & Refund Policy section below for complete information.",
    sortOrder: 6,
  },
  {
    id: 7,
    question: "Do you offer promo codes or discounts?",
    answer: "Yes! We regularly offer seasonal promotions and exclusive discounts. Subscribe to our newsletter or follow us on social media to stay updated. You can also call us directly to ask about current offers.",
    sortOrder: 7,
  },
  {
    id: 8,
    question: "Do you provide travel insurance?",
    answer: "Yes, we offer comprehensive travel insurance options that cover trip cancellation, medical emergencies, baggage loss, and flight delays. We highly recommend adding insurance to your booking for peace of mind.",
    sortOrder: 8,
  },
  {
    id: 9,
    question: "How can I reach customer support?",
    answer: "Our customer support team is available 24/7. You can reach us by phone at +91-9501737767, email at info@cheapprimefares.com, or through our WhatsApp chat. Our offices are open Monday to Saturday, 9:00 AM to 8:00 PM IST.",
    sortOrder: 9,
  },
  {
    id: 10,
    question: "Can I make special requests for my flight?",
    answer: "Absolutely! We can assist with special meal requests, wheelchair assistance, extra legroom seats, unaccompanied minor services, and pet travel arrangements. Please mention your requirements at the time of booking.",
    sortOrder: 10,
  },
  {
    id: 11,
    question: "What is the Refer and Earn program?",
    answer: "Our Refer and Earn program lets you earn rewards by referring friends and family. When someone you refer books a flight, both you and they receive a discount on future bookings. Contact us for your unique referral code.",
    sortOrder: 11,
  },
  {
    id: 12,
    question: "Do you offer group booking discounts?",
    answer: "Yes! We offer special rates for group bookings of 10 or more passengers. Group bookings include dedicated support, flexible payment options, and exclusive discounts. Contact our group booking team for a custom quote.",
    sortOrder: 12,
  },
  {
    id: 13,
    question: "Are the prices shown inclusive of all taxes?",
    answer: "Most of our advertised prices include base fare and taxes. However, some fares may exclude airport taxes or fuel surcharges. Our team will provide a complete breakdown of all charges before you confirm your booking.",
    sortOrder: 13,
  },
  {
    id: 14,
    question: "How far in advance should I book international flights?",
    answer: "For the best deals, we recommend booking international flights 2-3 months in advance. However, we also specialize in last-minute deals, so it's always worth checking even if your travel date is near.",
    sortOrder: 14,
  },
  {
    id: 15,
    question: "Do you offer hotel and tour packages along with flights?",
    answer: "Yes! We offer comprehensive holiday packages that include flights, hotels, airport transfers, and guided tours. Check out our Holiday Packages section for our curated itineraries to popular destinations.",
    sortOrder: 15,
  },
];

export const cancellationPolicy = `
## Cancellation & Refund Policy

### Cancellation by Passenger
- **Within 24 hours of booking**: Full refund (if departure is more than 7 days away)
- **7+ days before departure**: Refund minus airline cancellation fee (typically $100-$300)
- **2-7 days before departure**: 50% refund minus airline fees
- **Less than 48 hours before departure**: No refund (ticket is non-refundable)

### Refund Processing
- Refunds are processed within 7-14 business days after receiving the cancellation request
- Refunds will be credited to the original payment method
- Processing time may vary depending on the airline and payment method

### No-Show Policy
- Passengers who fail to check in for their flight without prior notice will be considered a "no-show"
- No-show tickets are non-refundable and non-changeable

### Flight Cancellations by Airline
If your flight is cancelled by the airline, you are entitled to:
- Full refund, or
- Free rebooking on the next available flight, or
- Alternative routing at no additional cost

### Force Majeure
In case of extraordinary circumstances (natural disasters, pandemics, government restrictions), special cancellation policies may apply. Contact our support team for assistance.

### Travel Insurance
We strongly recommend purchasing travel insurance at the time of booking to protect against unexpected cancellations and emergencies.
`;

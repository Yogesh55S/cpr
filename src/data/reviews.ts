export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  trip: string;
  initials: string;
  color: string;
}

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Priya Nair",
    location: "Houston, TX",
    rating: 5,
    text: "Booked our Delhi to Houston tickets through Cheap Prime Fares and saved almost $300 compared to what I found elsewhere. The agent found us a great connection and followed up personally to confirm everything before departure.",
    trip: "Flew Delhi → Houston",
    initials: "PN",
    color: "#0B3D3E",
  },
  {
    id: "review-2",
    name: "Marcus Reid",
    location: "New Jersey",
    rating: 5,
    text: "Our Bali honeymoon package was handled beautifully from start to finish. Every hotel and transfer was exactly as promised, and the team was reachable on WhatsApp the whole trip in case anything came up.",
    trip: "Bali Honeymoon Package",
    initials: "MR",
    color: "#C9A227",
  },
  {
    id: "review-3",
    name: "Ananya Verma",
    location: "New Delhi, India",
    rating: 5,
    text: "This is the third time I've booked international flights with them and the pricing is consistently better than the big booking sites. They also helped me rebook quickly when my travel dates changed last minute.",
    trip: "Flew New Delhi → New York",
    initials: "AV",
    color: "#16888C",
  },
  {
    id: "review-4",
    name: "Daniel Cho",
    location: "San Francisco, CA",
    rating: 5,
    text: "Planning our Thailand tour felt effortless. They put together a full itinerary within our budget and were upfront about every cost, no surprise add-ons at checkout like other sites.",
    trip: "Thailand Tour Package",
    initials: "DC",
    color: "#0B3D3E",
  },
  {
    id: "review-5",
    name: "Rekha Subramaniam",
    location: "Chicago, IL",
    rating: 4,
    text: "Great fares and friendly service. Had one small hiccup with a seat request but the support team sorted it out within the hour over a phone call. Would book with them again for our next India trip.",
    trip: "Flew Chicago → Chennai",
    initials: "RS",
    color: "#C9A227",
  },
  {
    id: "review-6",
    name: "James Okafor",
    location: "Dallas, TX",
    rating: 5,
    text: "We used Cheap Prime Fares for a family reunion trip to Dubai with six people flying from three different cities. They coordinated all of our bookings and got everyone on connecting flights that actually lined up.",
    trip: "Dubai Holiday Package",
    initials: "JO",
    color: "#16888C",
  },
];

export interface PackageCategory {
  slug: string;
  name: string;
  kind: "tour" | "honeymoon";
  scope: "domestic" | "international" | "popular";
}

export interface Package {
  id: string;
  slug: string;
  name: string;
  category: string;
  nights: number;
  days: number;
  durationLabel: string;
  price: number;
  currency: string;
  image: string;
  summary: string;
  featured?: boolean;
  itinerary?: { day: number; title: string; description: string }[];
  inclusions?: string[];
  exclusions?: string[];
}

export const packageCategories: PackageCategory[] = [
  { slug: "domestic-tour", name: "Domestic Tour", kind: "tour", scope: "domestic" },
  { slug: "domestic-honeymoon", name: "Domestic Honeymoon", kind: "honeymoon", scope: "domestic" },
  { slug: "international-tour", name: "International Tour", kind: "tour", scope: "international" },
  { slug: "international-honeymoon", name: "International Honeymoon", kind: "honeymoon", scope: "international" },
  { slug: "popular-tour", name: "Popular Tour", kind: "tour", scope: "popular" },
  { slug: "popular-honeymoon", name: "Popular Honeymoon", kind: "honeymoon", scope: "popular" },
];

export const packages: Package[] = [
  // Domestic Tour
  {
    id: "dt-1",
    slug: "shimla-manali",
    name: "Shimla Manali",
    category: "domestic-tour",
    nights: 5,
    days: 6,
    durationLabel: "6 Days / 5 Nights",
    price: 19500,
    currency: "INR",
    image: "/images/pkg-shimla.jpg",
    summary: "Experience the beauty of Himachal Pradesh with Shimla and Manali. Snow-capped mountains, adventure sports, and serene landscapes await.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Domestic Tour", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dt-2",
    slug: "kerala",
    name: "Kerala",
    category: "domestic-tour",
    nights: 4,
    days: 5,
    durationLabel: "5 Days / 4 Nights",
    price: 18500,
    currency: "INR",
    image: "/images/pkg-kerala.jpg",
    summary: "God's Own Country welcomes you with backwaters, houseboats, tea plantations, and pristine beaches. A tropical paradise.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Kerala", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dt-3",
    slug: "kashmir",
    name: "Kashmir",
    category: "domestic-tour",
    nights: 5,
    days: 6,
    durationLabel: "6 Days / 5 Nights",
    price: 22500,
    currency: "INR",
    image: "/images/pkg-kashmir.jpg",
    summary: "Paradise on Earth — Dal Lake, Gulmarg, Pahalgam. Experience the breathtaking beauty of the Kashmir Valley.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Kashmir", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dt-4",
    slug: "rajasthan",
    name: "Rajasthan",
    category: "domestic-tour",
    nights: 6,
    days: 7,
    durationLabel: "7 Days / 6 Nights",
    price: 24500,
    currency: "INR",
    image: "/images/pkg-rajasthan.jpg",
    summary: "The land of kings — Jaipur, Udaipur, Jodhpur, Jaisalmer. Palaces, forts, desert safaris, and royal hospitality.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Rajasthan", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dt-5",
    slug: "agra",
    name: "Agra",
    category: "domestic-tour",
    nights: 2,
    days: 3,
    durationLabel: "3 Days / 2 Nights",
    price: 8500,
    currency: "INR",
    image: "/images/pkg-agra.jpg",
    summary: "Home of the Taj Mahal — one of the Seven Wonders of the World. Agra Fort, Fatehpur Sikri, and Mughal architecture.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Agra", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dt-6",
    slug: "varanasi",
    name: "Varanasi",
    category: "domestic-tour",
    nights: 3,
    days: 4,
    durationLabel: "4 Days / 3 Nights",
    price: 12500,
    currency: "INR",
    image: "/images/pkg-varanasi.jpg",
    summary: "The spiritual capital of India. Ganga Aarti, ancient temples, narrow lanes, and a deeply spiritual experience.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Varanasi", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dt-7",
    slug: "delhi",
    name: "Delhi",
    category: "domestic-tour",
    nights: 3,
    days: 4,
    durationLabel: "4 Days / 3 Nights",
    price: 10500,
    currency: "INR",
    image: "/images/pkg-delhi.jpg",
    summary: "India's capital — Old Delhi's charm, New Delhi's grandeur. Red Fort, Qutub Minar, India Gate, and vibrant markets.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Delhi", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dt-8",
    slug: "goa",
    name: "Goa",
    category: "domestic-tour",
    nights: 4,
    days: 5,
    durationLabel: "5 Days / 4 Nights",
    price: 15500,
    currency: "INR",
    image: "/images/pkg-goa.jpg",
    summary: "Sun, sand, and sea — India's beach paradise. Water sports, nightlife, Portuguese heritage, and seafood delights.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dt-9",
    slug: "leh-ladakh",
    name: "Leh Ladakh",
    category: "domestic-tour",
    nights: 5,
    days: 6,
    durationLabel: "6 Days / 5 Nights",
    price: 27500,
    currency: "INR",
    image: "/images/pkg-leh.jpg",
    summary: "The roof of the world — Pangong Lake, Nubra Valley, monasteries. An adventure of a lifetime in the Himalayas.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Leh Ladakh", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  // Domestic Honeymoon
  {
    id: "dh-1",
    slug: "kerala-honeymoon",
    name: "Kerala Honeymoon",
    category: "domestic-honeymoon",
    nights: 4,
    days: 5,
    durationLabel: "5 Days / 4 Nights",
    price: 22500,
    currency: "INR",
    image: "/images/pkg-kerala.jpg",
    summary: "Romantic houseboat stay on Alleppey backwaters, Munnar tea gardens, and beach sunsets in Kovalam.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Kerala Honeymoon", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dh-2",
    slug: "goa-honeymoon",
    name: "Goa Honeymoon",
    category: "domestic-honeymoon",
    nights: 4,
    days: 5,
    durationLabel: "5 Days / 4 Nights",
    price: 18500,
    currency: "INR",
    image: "/images/pkg-goa.jpg",
    summary: "Beachside romance, candlelit dinners, water sports, and sunset cruises. The perfect start to your journey together.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Goa Honeymoon", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "dh-3",
    slug: "shimla-honeymoon",
    name: "Shimla Honeymoon",
    category: "domestic-honeymoon",
    nights: 4,
    days: 5,
    durationLabel: "5 Days / 4 Nights",
    price: 19500,
    currency: "INR",
    image: "/images/pkg-shimla.jpg",
    summary: "Walk through snow-covered landscapes, cozy mountain retreats, and breathtaking Himalayan views.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Shimla Honeymoon", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  // International Tour
  {
    id: "it-1",
    slug: "thailand-tour",
    name: "Thailand Explorer",
    category: "international-tour",
    nights: 5,
    days: 6,
    durationLabel: "6 Days / 5 Nights",
    price: 45000,
    currency: "INR",
    image: "/images/intl-thailand.jpg",
    summary: "Bangkok's temples, Phuket's beaches, and Thai cuisine. The Land of Smiles awaits.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Thailand Explorer", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "it-2",
    slug: "bali-tour",
    name: "Bali Escape",
    category: "international-tour",
    nights: 5,
    days: 6,
    durationLabel: "6 Days / 5 Nights",
    price: 52000,
    currency: "INR",
    image: "/images/intl-indonesia.jpg",
    summary: "Rice terraces, ancient temples, beach clubs, and volcanic landscapes. Indonesia's island gem.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Bali Escape", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "it-3",
    slug: "dubai-tour",
    name: "Dubai Luxury",
    category: "international-tour",
    nights: 4,
    days: 5,
    durationLabel: "5 Days / 4 Nights",
    price: 65000,
    currency: "INR",
    image: "/images/fare-bom-dxb.jpg",
    summary: "Burj Khalifa, desert safaris, luxury shopping, and world-class dining in the City of Gold.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Dubai Luxury", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  // International Honeymoon
  {
    id: "ih-1",
    slug: "maldives-honeymoon",
    name: "Maldives Romance",
    category: "international-honeymoon",
    nights: 4,
    days: 5,
    durationLabel: "5 Days / 4 Nights",
    price: 85000,
    currency: "INR",
    image: "/images/dest-australia.jpg",
    summary: "Overwater villas, crystal-clear lagoons, private dinners on the beach. The ultimate honeymoon destination.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Maldives Romance", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "ih-2",
    slug: "bali-honeymoon",
    name: "Bali Honeymoon",
    category: "international-honeymoon",
    nights: 5,
    days: 6,
    durationLabel: "6 Days / 5 Nights",
    price: 55000,
    currency: "INR",
    image: "/images/intl-indonesia.jpg",
    summary: "Romantic sunsets in Uluwatu, spa retreats in Ubud, and beach clubs in Seminyak.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Bali Honeymoon", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  // Popular Tour (international awesome packages)
  {
    id: "pt-1",
    slug: "thailand-awesome",
    name: "Thailand",
    category: "popular-tour",
    nights: 2,
    days: 3,
    durationLabel: "3 Days / 2 Person",
    price: 149,
    currency: "USD",
    image: "/images/intl-thailand.jpg",
    summary: "Experience Thailand — Bangkok's vibrant street life, golden temples, and tropical beaches.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Thailand", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "pt-2",
    slug: "indonesia-awesome",
    name: "Indonesia",
    category: "popular-tour",
    nights: 2,
    days: 3,
    durationLabel: "3 Days / 2 Person",
    price: 139,
    currency: "USD",
    image: "/images/intl-indonesia.jpg",
    summary: "Discover Indonesia — Bali's rice terraces, ancient temples, and pristine beaches await.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Indonesia", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "pt-3",
    slug: "malaysia-awesome",
    name: "Malaysia",
    category: "popular-tour",
    nights: 2,
    days: 3,
    durationLabel: "3 Days / 2 Person",
    price: 189,
    currency: "USD",
    image: "/images/intl-malaysia.jpg",
    summary: "Explore Malaysia — Kuala Lumpur's skyline, Langkawi's beaches, and rich cultural heritage.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Malaysia", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  // Popular Honeymoon
  {
    id: "ph-1",
    slug: "maldives-popular",
    name: "Maldives",
    category: "popular-honeymoon",
    nights: 4,
    days: 5,
    durationLabel: "5 Days / 4 Nights",
    price: 95000,
    currency: "INR",
    image: "/images/dest-australia.jpg",
    summary: "World's most romantic destination. Private overwater villa with direct lagoon access.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Maldives", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "ph-2",
    slug: "bali-popular",
    name: "Bali",
    category: "popular-honeymoon",
    nights: 5,
    days: 6,
    durationLabel: "6 Days / 5 Nights",
    price: 58000,
    currency: "INR",
    image: "/images/intl-indonesia.jpg",
    summary: "The Island of Gods — perfect for couples seeking culture, nature, and romance.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Bali", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
  {
    id: "ph-3",
    slug: "thailand-popular",
    name: "Thailand",
    category: "popular-honeymoon",
    nights: 5,
    days: 6,
    durationLabel: "6 Days / 5 Nights",
    price: 48000,
    currency: "INR",
    image: "/images/intl-thailand.jpg",
    summary: "Phuket's beaches, Krabi's limestone cliffs, and Bangkok's vibrant energy.",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Thailand", description: "Welcome to this destination! Our representative will meet you at the airport/railway station and transfer you to the hotel. Spend the rest of the day at leisure exploring the local surroundings. Overnight stay at the hotel." },
      { day: 2, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 3, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 4, title: "Sightseeing and Exploration", description: "After breakfast, embark on a full-day sightseeing tour. Visit the most iconic attractions, enjoy local culture, and experience the breathtaking landscapes. Return to the hotel in the evening for a relaxing dinner." },
      { day: 5, title: "Departure", description: "After a delicious breakfast, check out from the hotel. Proceed to the airport or railway station for your onward journey with beautiful memories." }
    ],
    inclusions: ["Accommodation in premium hotels", "Daily breakfast and dinner", "Airport transfers", "Guided sightseeing tours", "All taxes and fees"],
    exclusions: ["Airfare/Train fare", "Personal expenses (laundry, phone calls, etc.)", "Meals not mentioned", "Travel insurance", "Entry fees for monuments"],
  },
];

export function getPackagesByCategory(categorySlug: string): Package[] {
  return packages.filter((pkg) => pkg.category === categorySlug);
}

export function getCategoryBySlug(slug: string): PackageCategory | undefined {
  return packageCategories.find((cat) => cat.slug === slug);
}

export function getAllPackages(): Package[] {
  return packages;
}

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}
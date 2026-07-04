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
      { day: 1, title: "Arrival in Cochin & Transfer to Munnar", description: "Arrive at Cochin airport and drive to Munnar. En route, enjoy the beautiful Cheeyappara and Valara waterfalls. Check into your hotel and spend the evening enjoying the cool mountain air." },
      { day: 2, title: "Munnar Sightseeing", description: "Visit the Eravikulam National Park (home to the endangered Nilgiri Tahr), the Mattupetty Dam, Echo Point, and the Tea Museum. Stroll through lush green tea estates." },
      { day: 3, title: "Thekkady (Periyar)", description: "Drive to Thekkady. Check in and head for a thrilling boat safari on Periyar Lake to spot wild elephants and exotic birds. Later, enjoy a spice plantation tour." },
      { day: 4, title: "Alleppey Houseboat Stay", description: "Travel to Alleppey, the Venice of the East. Check into a traditional Kerala houseboat. Cruise through serene backwaters, observing local village life. Enjoy freshly prepared Kerala cuisine on board." },
      { day: 5, title: "Departure from Cochin", description: "After breakfast on the houseboat, disembark and drive back to Cochin. If time permits, visit Fort Kochi and the Chinese Fishing Nets before your departure." }
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
      { day: 1, title: "Srinagar Arrival & Shikara Ride", description: "Arrive in Srinagar and transfer to your houseboat/hotel. In the evening, enjoy a relaxing 1-hour Shikara ride on the famous Dal Lake surrounded by the majestic Zabarwan mountain range." },
      { day: 2, title: "Srinagar Local Sightseeing", description: "Visit the world-famous Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashma Shahi. Later, visit the Shankaracharya Temple for panoramic views of the city." },
      { day: 3, title: "Day Trip to Gulmarg", description: "Drive to Gulmarg, the 'Meadow of Flowers'. Enjoy a thrilling Gondola ride (cable car) to Mount Apharwat. You can also try your hand at golfing or skiing during winters." },
      { day: 4, title: "Day Trip to Pahalgam", description: "Proceed to Pahalgam, the 'Valley of Shepherds'. En route, visit the saffron fields of Pampore and Awantipora ruins. Explore Betaab Valley and Aru Valley in Pahalgam." },
      { day: 5, title: "Explore Sonamarg", description: "Embark on a full-day excursion to Sonamarg, the 'Meadow of Gold'. Take a pony ride to the Thajiwas Glacier and enjoy the spectacular snow-clad peaks." },
      { day: 6, title: "Departure", description: "Enjoy your breakfast, complete the checkout formalities, and transfer to Srinagar Airport for your return flight." }
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
      { day: 1, title: "Arrival in Jaipur", description: "Welcome to the Pink City! Check into your hotel and rest. In the evening, visit Chokhi Dhani for an authentic Rajasthani cultural experience and traditional dinner." },
      { day: 2, title: "Jaipur Sightseeing", description: "Visit the majestic Amber Fort, take photos at the Hawa Mahal, and explore the City Palace and Jantar Mantar observatory. Shop for colorful handicrafts in the local bazaars." },
      { day: 3, title: "Drive to Jodhpur", description: "Head to the Blue City, Jodhpur. After checking in, visit the imposing Mehrangarh Fort, Jaswant Thada, and stroll through the vibrant blue lanes of the old city." },
      { day: 4, title: "Drive to Udaipur", description: "Travel to Udaipur, the City of Lakes. En route, visit the beautiful Ranakpur Jain Temples. Check in and enjoy a relaxing evening boat ride on Lake Pichola." },
      { day: 5, title: "Udaipur Sightseeing", description: "Explore the massive City Palace complex, Jagdish Temple, and Saheliyon ki Bari. Spend the evening wandering around the picturesque Fatehsagar Lake." },
      { day: 6, title: "Departure", description: "After breakfast, check out and head to the Udaipur airport or railway station for your onward journey." },
      { day: 7, title: "Optional Extension / Departure", description: "Enjoy a leisurely morning or catch your final flight back home with royal memories of Rajasthan." }
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
      { day: 1, title: "Arrival & Agra Fort", description: "Arrive in Agra, check into your hotel, and relax. In the afternoon, explore the massive red sandstone Agra Fort, a UNESCO World Heritage site, and visit the Tomb of I'timād-ud-Daulah (Baby Taj)." },
      { day: 2, title: "Taj Mahal & Fatehpur Sikri", description: "Wake up early for a breathtaking sunrise visit to the Taj Mahal. Return for breakfast, then take an excursion to the abandoned Mughal city of Fatehpur Sikri." },
      { day: 3, title: "Departure", description: "Enjoy some local shopping for marble handicrafts and Petha (a local sweet), then depart for your onward destination." }
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
      { day: 1, title: "Arrival & Evening Aarti", description: "Arrive in the spiritual capital of India. Check into your hotel. In the evening, witness the mesmerizing and grand Ganga Aarti at Dashashwamedh Ghat." },
      { day: 2, title: "Morning Boat Ride & Sarnath", description: "Early morning boat ride on the Ganges to see the sunrise and the rituals on the ghats. Later, visit Sarnath, where Lord Buddha gave his first sermon." },
      { day: 3, title: "Temple Tour", description: "Visit the famous Kashi Vishwanath Temple, Sankat Mochan Temple, and Banaras Hindu University. Explore the narrow, bustling alleys of the old city." },
      { day: 4, title: "Departure", description: "After breakfast, pick up some famous Banarasi silk sarees and head to the airport or railway station for departure." }
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
      { day: 1, title: "Arrival & Old Delhi Tour", description: "Arrive in Delhi. Explore the historical charm of Old Delhi: visit the Red Fort, Jama Masjid, and enjoy a thrilling rickshaw ride through the narrow lanes of Chandni Chowk." },
      { day: 2, title: "New Delhi Sightseeing", description: "Discover New Delhi's wide avenues. Visit India Gate, the President's House (Rashtrapati Bhavan), Humayun's Tomb, and the towering Qutub Minar." },
      { day: 3, title: "Akshardham & Shopping", description: "Spend the morning at the magnificent Akshardham Temple. In the afternoon, shop at Connaught Place, Dilli Haat, or Sarojini Nagar market." },
      { day: 4, title: "Departure", description: "After breakfast, transfer to the airport or railway station for your onward journey." }
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
      { day: 1, title: "Arrival & Leisure at Beach", description: "Welcome to Goa! Transfer to your resort. Spend the day relaxing by the pool or walking along the nearest sandy beach, enjoying the sea breeze." },
      { day: 2, title: "North Goa Sightseeing", description: "Explore the vibrant beaches of North Goa including Baga, Calangute, and Anjuna. Visit the historic Fort Aguada for panoramic ocean views." },
      { day: 3, title: "South Goa & Old Goa Churches", description: "Discover the Portuguese heritage at the Basilica of Bom Jesus and Se Cathedral. Enjoy a peaceful evening at the pristine beaches of South Goa like Colva or Palolem." },
      { day: 4, title: "Water Sports & Cruise", description: "Dedicate this day to thrilling water sports (parasailing, jet-skiing). In the evening, embark on a lively Mandovi River cruise with Goan music and dance." },
      { day: 5, title: "Departure", description: "After breakfast, pack your bags and head to the airport or railway station, taking back sun-kissed memories of Goa." }
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
      { day: 1, title: "Arrival in Leh & Acclimatization", description: "Arrive at Leh airport. It is crucial to rest the entire day to acclimatize to the high altitude. Short evening walk to Leh Market and Shanti Stupa." },
      { day: 2, title: "Leh Local Sightseeing", description: "Visit the Hall of Fame, Magnetic Hill, and the confluence (Sangam) of the Indus and Zanskar rivers. Later, explore the ancient Leh Palace." },
      { day: 3, title: "Drive to Nubra Valley", description: "Drive to Nubra Valley via Khardung La, one of the highest motorable roads in the world. Enjoy a double-humped Bactrian camel ride at the Hunder sand dunes." },
      { day: 4, title: "Pangong Lake Excursion", description: "Travel to the stunning Pangong Lake, famous for its ever-changing shades of blue. Enjoy the surreal landscape before returning to Leh." },
      { day: 5, title: "Monastery Tour", description: "Visit the famous Hemis, Thiksey, and Shey monasteries to experience the rich Buddhist culture and breathtaking valley views." },
      { day: 6, title: "Departure", description: "Early morning transfer to Leh airport for your flight back home." }
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
      { day: 1, title: "Arrival in Cochin & Transfer to Munnar", description: "Arrive at Cochin. Drive to Munnar and check into a romantic resort. Enjoy a candlelit dinner to start your honeymoon." },
      { day: 2, title: "Munnar Tea Gardens", description: "Explore rolling tea plantations, Mattupetty Dam, and Echo Point. Enjoy the serene hills and cool weather perfect for couples." },
      { day: 3, title: "Thekkady Wildlife", description: "Travel to Thekkady. Take a boat ride on Periyar Lake and enjoy a couple's Ayurvedic spa session in the evening." },
      { day: 4, title: "Alleppey Houseboat Romance", description: "Check into a private houseboat in Alleppey. Cruise the backwaters while a personal chef prepares traditional Kerala meals." },
      { day: 5, title: "Departure", description: "Disembark the houseboat after breakfast and drive to Cochin for your return journey." }
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
      { day: 1, title: "Arrival & Beach Resort", description: "Welcome to Goa! Transfer to a luxury beach resort. Spend the evening walking hand-in-hand along the beach at sunset." },
      { day: 2, title: "North Goa Excursion", description: "Visit Fort Aguada and vibrant North Goa beaches. Enjoy a romantic dinner at a popular beach shack with live music." },
      { day: 3, title: "South Goa & Churches", description: "Explore the serene churches of Old Goa. Later, relax on the quieter, pristine white sands of South Goa." },
      { day: 4, title: "Dolphin Sighting & Cruise", description: "Take a morning boat trip for dolphin watching. In the evening, enjoy a romantic sunset cruise on the Mandovi River." },
      { day: 5, title: "Departure", description: "Enjoy breakfast in bed before checking out and heading to the airport." }
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
      { day: 1, title: "Arrival in Shimla", description: "Arrive in Shimla and check into a cozy mountain resort. Enjoy a romantic evening stroll along the Mall Road." },
      { day: 2, title: "Kufri & Chail", description: "Visit Kufri for snow activities (in winter) or scenic views. Continue to Chail to see the world's highest cricket ground and the majestic Chail Palace." },
      { day: 3, title: "Mashobra & Naldehra", description: "Explore the peaceful apple orchards of Mashobra and the famous 9-hole golf course in Naldehra, surrounded by deodar trees." },
      { day: 4, title: "Local Heritage Tour", description: "Visit the Viceregal Lodge, Christ Church, and Jakhu Temple. Enjoy a special honeymoon dinner arranged at your resort." },
      { day: 5, title: "Departure", description: "Check out and depart from Shimla with beautiful memories of the mountains." }
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
      { day: 1, title: "Arrival in Bangkok", description: "Sawasdee! Arrive in Bangkok and transfer to your hotel. In the evening, enjoy a Chao Phraya River dinner cruise with spectacular city views." },
      { day: 2, title: "Bangkok City & Temples", description: "Visit the Grand Palace, Wat Phra Kaew (Emerald Buddha), and Wat Arun. Experience the bustling street life and shopping at MBK or Chatuchak." },
      { day: 3, title: "Fly to Phuket", description: "Take a short flight to Phuket. Check into your beach resort and spend the evening exploring Patong Beach and Bangla Road." },
      { day: 4, title: "Phi Phi Island Tour", description: "Embark on a full-day speedboat tour to the stunning Phi Phi Islands. Snorkel in crystal-clear waters, relax on Maya Bay, and enjoy a beachside lunch." },
      { day: 5, title: "Phang Nga Bay (James Bond Island)", description: "Take a traditional long-tail boat to Phang Nga Bay. See limestone karsts jutting out of the emerald sea and visit the floating Muslim village of Koh Panyee." },
      { day: 6, title: "Departure", description: "Enjoy some last-minute souvenir shopping before transferring to Phuket airport for your flight home." }
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
      { day: 1, title: "Arrival in Bali", description: "Welcome to Bali! Transfer to your hotel in Seminyak or Kuta. Relax and enjoy a spectacular beach sunset." },
      { day: 2, title: "Ubud Cultural Tour", description: "Visit the Sacred Monkey Forest, the stunning Tegalalang Rice Terraces, and the traditional art villages around Ubud." },
      { day: 3, title: "Kintamani Volcano & Temples", description: "Drive up to Kintamani for panoramic views of Mount Batur. Visit the holy Tirta Empul water temple on the way back." },
      { day: 4, title: "Nusa Penida Day Trip", description: "Take a fast boat to Nusa Penida island. Visit the famous T-Rex shaped Kelingking Beach, Broken Beach, and Angel's Billabong." },
      { day: 5, title: "Uluwatu Sunset & Kecak Dance", description: "Relax in the morning. In the late afternoon, visit the cliff-top Uluwatu Temple and watch the traditional Kecak Fire Dance at sunset." },
      { day: 6, title: "Departure", description: "Transfer to Ngurah Rai International Airport for your onward journey." }
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
      { day: 1, title: "Arrival in Dubai & Marina Dhow Cruise", description: "Arrive in Dubai. In the evening, enjoy a traditional Dhow Cruise along Dubai Marina with an international buffet dinner and live entertainment." },
      { day: 2, title: "Dubai City Tour & Burj Khalifa", description: "Take a half-day city tour covering the Dubai Museum, Jumeirah Mosque, and Palm Jumeirah. Later, visit the observation deck on the 124th floor of the Burj Khalifa." },
      { day: 3, title: "Desert Safari", description: "Spend the morning at leisure. In the afternoon, embark on an exhilarating Desert Safari featuring dune bashing, camel riding, belly dancing, and a BBQ dinner." },
      { day: 4, title: "Abu Dhabi City Tour & Ferrari World", description: "Take a day trip to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque, followed by adrenaline-pumping rides at Ferrari World." },
      { day: 5, title: "Departure", description: "Enjoy last-minute shopping at the Dubai Mall or Gold Souk before your transfer to the airport." }
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
      { day: 1, title: "Arrival via Speedboat/Seaplane", description: "Arrive in Male and transfer to your luxury island resort via speedboat or seaplane. Check into your spectacular overwater villa." },
      { day: 2, title: "Leisure & Snorkeling", description: "Spend the day exploring the house reef. Snorkel in the crystal-clear waters to see colorful corals, tropical fish, and maybe even sea turtles." },
      { day: 3, title: "Romantic Beach Dinner", description: "Relax at the resort's infinity pool or enjoy a couple's spa. In the evening, indulge in a private, candlelit dinner set up exclusively for you on the beach." },
      { day: 4, title: "Water Sports or Dolphin Cruise", description: "Try out kayaking or paddleboarding. Later in the day, join a sunset dolphin-watching cruise." },
      { day: 5, title: "Departure", description: "Enjoy a final breakfast overlooking the ocean before taking the transfer back to Male airport." }
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
      { day: 1, title: "Arrival in Bali", description: "Welcome to Bali! Transfer to your romantic private villa in Seminyak or Ubud. Enjoy a special floral bath setup." },
      { day: 2, title: "Ubud & Couple's Spa", description: "Visit the Tegalalang Rice Terraces and enjoy a luxurious 2-hour Balinese couple's spa treatment." },
      { day: 3, title: "Romantic Sunset Cruise", description: "Relax at your villa. In the evening, embark on a romantic dinner cruise featuring live music and spectacular sunset views." },
      { day: 4, title: "Nusa Penida Escapade", description: "Take a private day trip to Nusa Penida island. Visit pristine, secluded beaches like Kelingking and Crystal Bay." },
      { day: 5, title: "Uluwatu & Jimbaran Dinner", description: "Visit the Uluwatu Temple at sunset, followed by a romantic candlelit seafood dinner on the beach at Jimbaran Bay." },
      { day: 6, title: "Departure", description: "Check out from your villa and transfer to the airport with unforgettable honeymoon memories." }
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
      { day: 1, title: "Arrival & City Tour", description: "Arrive in Bangkok and check in. Take an afternoon tour of the Grand Palace and Wat Arun." },
      { day: 2, title: "Floating Market", description: "Visit the famous Damnoen Saduak Floating Market and shop for local produce from traditional wooden boats." },
      { day: 3, title: "Departure", description: "Enjoy breakfast and some final shopping before your departure flight." }
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
      { day: 1, title: "Arrival in Bali", description: "Welcome to Bali! Arrive and transfer to your beachside hotel. Enjoy a relaxing evening by the ocean." },
      { day: 2, title: "Ubud & Tanah Lot", description: "Take a quick tour of Ubud's Monkey Forest, followed by an evening visit to the iconic Tanah Lot temple for sunset." },
      { day: 3, title: "Departure", description: "Enjoy breakfast before heading to the airport." }
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
      { day: 1, title: "Arrival in Kuala Lumpur", description: "Arrive and transfer to your hotel. Evening visit to the iconic Petronas Twin Towers for photos." },
      { day: 2, title: "Batu Caves & City Tour", description: "Visit the massive Batu Caves and Hindu shrines, followed by a quick tour of KL's historic Independence Square." },
      { day: 3, title: "Departure", description: "Check out and head to the airport for your flight." }
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
      { day: 1, title: "Arrival via Speedboat/Seaplane", description: "Arrive in Male and transfer to your luxury island resort via speedboat or seaplane. Check into your spectacular overwater villa." },
      { day: 2, title: "Leisure & Snorkeling", description: "Spend the day exploring the house reef. Snorkel in the crystal-clear waters to see colorful corals, tropical fish, and maybe even sea turtles." },
      { day: 3, title: "Romantic Beach Dinner", description: "Relax at the resort's infinity pool or enjoy a couple's spa. In the evening, indulge in a private, candlelit dinner set up exclusively for you on the beach." },
      { day: 4, title: "Water Sports or Dolphin Cruise", description: "Try out kayaking or paddleboarding. Later in the day, join a sunset dolphin-watching cruise." },
      { day: 5, title: "Departure", description: "Enjoy a final breakfast overlooking the ocean before taking the transfer back to Male airport." }
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
      { day: 1, title: "Arrival in Bali", description: "Welcome to Bali! Transfer to your romantic private villa in Seminyak or Ubud. Enjoy a special floral bath setup." },
      { day: 2, title: "Ubud & Couple's Spa", description: "Visit the Tegalalang Rice Terraces and enjoy a luxurious 2-hour Balinese couple's spa treatment." },
      { day: 3, title: "Romantic Sunset Cruise", description: "Relax at your villa. In the evening, embark on a romantic dinner cruise featuring live music and spectacular sunset views." },
      { day: 4, title: "Nusa Penida Escapade", description: "Take a private day trip to Nusa Penida island. Visit pristine, secluded beaches like Kelingking and Crystal Bay." },
      { day: 5, title: "Uluwatu & Jimbaran Dinner", description: "Visit the Uluwatu Temple at sunset, followed by a romantic candlelit seafood dinner on the beach at Jimbaran Bay." },
      { day: 6, title: "Departure", description: "Check out from your villa and transfer to the airport with unforgettable honeymoon memories." }
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
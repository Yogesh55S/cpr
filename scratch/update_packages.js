const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/data/packages.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const customItineraries = {
  "shimla-manali": [
    { day: 1, title: "Arrival & Local Shimla Tour", description: "Arrive in Shimla and check into your hotel. Visit the famous Mall Road, Ridge, Christ Church, and the bustling Lakkar Bazaar. Enjoy the colonial charm and scenic mountain views. Evening at leisure." },
    { day: 2, title: "Kufri Excursion", description: "After breakfast, proceed to Kufri, a picturesque hill station known for its Himalayan wildlife zoo and adventure activities. Enjoy horse riding and yak riding. Return to Shimla for an overnight stay." },
    { day: 3, title: "Drive to Manali via Kullu", description: "Depart for Manali, enjoying a scenic drive along the Beas River. Stop at Kullu Valley to visit a shawl factory and the famous Vaishno Devi Temple. Arrive in Manali and check in." },
    { day: 4, title: "Rohtang Pass / Solang Valley", description: "Head out for a full day excursion to Solang Valley (or Rohtang Pass, subject to permit). Enjoy snow activities like skiing, snowboarding, and paragliding. Return to the hotel in the evening." },
    { day: 5, title: "Manali Local Sightseeing", description: "Explore the ancient Hadimba Temple surrounded by cedar forests, the Vashisht hot water springs, and the Tibetan Monastery. Spend the evening strolling down Old Manali." },
    { day: 6, title: "Departure", description: "After a hearty breakfast, pack your bags with beautiful memories. Transfer to the bus stand or airport for your onward journey." }
  ],
  "kerala": [
    { day: 1, title: "Arrival in Cochin & Transfer to Munnar", description: "Arrive at Cochin airport and drive to Munnar. En route, enjoy the beautiful Cheeyappara and Valara waterfalls. Check into your hotel and spend the evening enjoying the cool mountain air." },
    { day: 2, title: "Munnar Sightseeing", description: "Visit the Eravikulam National Park (home to the endangered Nilgiri Tahr), the Mattupetty Dam, Echo Point, and the Tea Museum. Stroll through lush green tea estates." },
    { day: 3, title: "Thekkady (Periyar)", description: "Drive to Thekkady. Check in and head for a thrilling boat safari on Periyar Lake to spot wild elephants and exotic birds. Later, enjoy a spice plantation tour." },
    { day: 4, title: "Alleppey Houseboat Stay", description: "Travel to Alleppey, the Venice of the East. Check into a traditional Kerala houseboat. Cruise through serene backwaters, observing local village life. Enjoy freshly prepared Kerala cuisine on board." },
    { day: 5, title: "Departure from Cochin", description: "After breakfast on the houseboat, disembark and drive back to Cochin. If time permits, visit Fort Kochi and the Chinese Fishing Nets before your departure." }
  ],
  "kashmir": [
    { day: 1, title: "Srinagar Arrival & Shikara Ride", description: "Arrive in Srinagar and transfer to your houseboat/hotel. In the evening, enjoy a relaxing 1-hour Shikara ride on the famous Dal Lake surrounded by the majestic Zabarwan mountain range." },
    { day: 2, title: "Srinagar Local Sightseeing", description: "Visit the world-famous Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashma Shahi. Later, visit the Shankaracharya Temple for panoramic views of the city." },
    { day: 3, title: "Day Trip to Gulmarg", description: "Drive to Gulmarg, the 'Meadow of Flowers'. Enjoy a thrilling Gondola ride (cable car) to Mount Apharwat. You can also try your hand at golfing or skiing during winters." },
    { day: 4, title: "Day Trip to Pahalgam", description: "Proceed to Pahalgam, the 'Valley of Shepherds'. En route, visit the saffron fields of Pampore and Awantipora ruins. Explore Betaab Valley and Aru Valley in Pahalgam." },
    { day: 5, title: "Explore Sonamarg", description: "Embark on a full-day excursion to Sonamarg, the 'Meadow of Gold'. Take a pony ride to the Thajiwas Glacier and enjoy the spectacular snow-clad peaks." },
    { day: 6, title: "Departure", description: "Enjoy your breakfast, complete the checkout formalities, and transfer to Srinagar Airport for your return flight." }
  ],
  "rajasthan": [
    { day: 1, title: "Arrival in Jaipur", description: "Welcome to the Pink City! Check into your hotel and rest. In the evening, visit Chokhi Dhani for an authentic Rajasthani cultural experience and traditional dinner." },
    { day: 2, title: "Jaipur Sightseeing", description: "Visit the majestic Amber Fort, take photos at the Hawa Mahal, and explore the City Palace and Jantar Mantar observatory. Shop for colorful handicrafts in the local bazaars." },
    { day: 3, title: "Drive to Jodhpur", description: "Head to the Blue City, Jodhpur. After checking in, visit the imposing Mehrangarh Fort, Jaswant Thada, and stroll through the vibrant blue lanes of the old city." },
    { day: 4, title: "Drive to Udaipur", description: "Travel to Udaipur, the City of Lakes. En route, visit the beautiful Ranakpur Jain Temples. Check in and enjoy a relaxing evening boat ride on Lake Pichola." },
    { day: 5, title: "Udaipur Sightseeing", description: "Explore the massive City Palace complex, Jagdish Temple, and Saheliyon ki Bari. Spend the evening wandering around the picturesque Fatehsagar Lake." },
    { day: 6, title: "Departure", description: "After breakfast, check out and head to the Udaipur airport or railway station for your onward journey." },
    { day: 7, title: "Optional Extension / Departure", description: "Enjoy a leisurely morning or catch your final flight back home with royal memories of Rajasthan." }
  ],
  "agra": [
    { day: 1, title: "Arrival & Agra Fort", description: "Arrive in Agra, check into your hotel, and relax. In the afternoon, explore the massive red sandstone Agra Fort, a UNESCO World Heritage site, and visit the Tomb of I'timād-ud-Daulah (Baby Taj)." },
    { day: 2, title: "Taj Mahal & Fatehpur Sikri", description: "Wake up early for a breathtaking sunrise visit to the Taj Mahal. Return for breakfast, then take an excursion to the abandoned Mughal city of Fatehpur Sikri." },
    { day: 3, title: "Departure", description: "Enjoy some local shopping for marble handicrafts and Petha (a local sweet), then depart for your onward destination." }
  ],
  "varanasi": [
    { day: 1, title: "Arrival & Evening Aarti", description: "Arrive in the spiritual capital of India. Check into your hotel. In the evening, witness the mesmerizing and grand Ganga Aarti at Dashashwamedh Ghat." },
    { day: 2, title: "Morning Boat Ride & Sarnath", description: "Early morning boat ride on the Ganges to see the sunrise and the rituals on the ghats. Later, visit Sarnath, where Lord Buddha gave his first sermon." },
    { day: 3, title: "Temple Tour", description: "Visit the famous Kashi Vishwanath Temple, Sankat Mochan Temple, and Banaras Hindu University. Explore the narrow, bustling alleys of the old city." },
    { day: 4, title: "Departure", description: "After breakfast, pick up some famous Banarasi silk sarees and head to the airport or railway station for departure." }
  ],
  "delhi": [
    { day: 1, title: "Arrival & Old Delhi Tour", description: "Arrive in Delhi. Explore the historical charm of Old Delhi: visit the Red Fort, Jama Masjid, and enjoy a thrilling rickshaw ride through the narrow lanes of Chandni Chowk." },
    { day: 2, title: "New Delhi Sightseeing", description: "Discover New Delhi's wide avenues. Visit India Gate, the President's House (Rashtrapati Bhavan), Humayun's Tomb, and the towering Qutub Minar." },
    { day: 3, title: "Akshardham & Shopping", description: "Spend the morning at the magnificent Akshardham Temple. In the afternoon, shop at Connaught Place, Dilli Haat, or Sarojini Nagar market." },
    { day: 4, title: "Departure", description: "After breakfast, transfer to the airport or railway station for your onward journey." }
  ],
  "goa": [
    { day: 1, title: "Arrival & Leisure at Beach", description: "Welcome to Goa! Transfer to your resort. Spend the day relaxing by the pool or walking along the nearest sandy beach, enjoying the sea breeze." },
    { day: 2, title: "North Goa Sightseeing", description: "Explore the vibrant beaches of North Goa including Baga, Calangute, and Anjuna. Visit the historic Fort Aguada for panoramic ocean views." },
    { day: 3, title: "South Goa & Old Goa Churches", description: "Discover the Portuguese heritage at the Basilica of Bom Jesus and Se Cathedral. Enjoy a peaceful evening at the pristine beaches of South Goa like Colva or Palolem." },
    { day: 4, title: "Water Sports & Cruise", description: "Dedicate this day to thrilling water sports (parasailing, jet-skiing). In the evening, embark on a lively Mandovi River cruise with Goan music and dance." },
    { day: 5, title: "Departure", description: "After breakfast, pack your bags and head to the airport or railway station, taking back sun-kissed memories of Goa." }
  ],
  "leh-ladakh": [
    { day: 1, title: "Arrival in Leh & Acclimatization", description: "Arrive at Leh airport. It is crucial to rest the entire day to acclimatize to the high altitude. Short evening walk to Leh Market and Shanti Stupa." },
    { day: 2, title: "Leh Local Sightseeing", description: "Visit the Hall of Fame, Magnetic Hill, and the confluence (Sangam) of the Indus and Zanskar rivers. Later, explore the ancient Leh Palace." },
    { day: 3, title: "Drive to Nubra Valley", description: "Drive to Nubra Valley via Khardung La, one of the highest motorable roads in the world. Enjoy a double-humped Bactrian camel ride at the Hunder sand dunes." },
    { day: 4, title: "Pangong Lake Excursion", description: "Travel to the stunning Pangong Lake, famous for its ever-changing shades of blue. Enjoy the surreal landscape before returning to Leh." },
    { day: 5, title: "Monastery Tour", description: "Visit the famous Hemis, Thiksey, and Shey monasteries to experience the rich Buddhist culture and breathtaking valley views." },
    { day: 6, title: "Departure", description: "Early morning transfer to Leh airport for your flight back home." }
  ],
  "kerala-honeymoon": [
    { day: 1, title: "Arrival in Cochin & Transfer to Munnar", description: "Arrive at Cochin. Drive to Munnar and check into a romantic resort. Enjoy a candlelit dinner to start your honeymoon." },
    { day: 2, title: "Munnar Tea Gardens", description: "Explore rolling tea plantations, Mattupetty Dam, and Echo Point. Enjoy the serene hills and cool weather perfect for couples." },
    { day: 3, title: "Thekkady Wildlife", description: "Travel to Thekkady. Take a boat ride on Periyar Lake and enjoy a couple's Ayurvedic spa session in the evening." },
    { day: 4, title: "Alleppey Houseboat Romance", description: "Check into a private houseboat in Alleppey. Cruise the backwaters while a personal chef prepares traditional Kerala meals." },
    { day: 5, title: "Departure", description: "Disembark the houseboat after breakfast and drive to Cochin for your return journey." }
  ],
  "goa-honeymoon": [
    { day: 1, title: "Arrival & Beach Resort", description: "Welcome to Goa! Transfer to a luxury beach resort. Spend the evening walking hand-in-hand along the beach at sunset." },
    { day: 2, title: "North Goa Excursion", description: "Visit Fort Aguada and vibrant North Goa beaches. Enjoy a romantic dinner at a popular beach shack with live music." },
    { day: 3, title: "South Goa & Churches", description: "Explore the serene churches of Old Goa. Later, relax on the quieter, pristine white sands of South Goa." },
    { day: 4, title: "Dolphin Sighting & Cruise", description: "Take a morning boat trip for dolphin watching. In the evening, enjoy a romantic sunset cruise on the Mandovi River." },
    { day: 5, title: "Departure", description: "Enjoy breakfast in bed before checking out and heading to the airport." }
  ],
  "shimla-honeymoon": [
    { day: 1, title: "Arrival in Shimla", description: "Arrive in Shimla and check into a cozy mountain resort. Enjoy a romantic evening stroll along the Mall Road." },
    { day: 2, title: "Kufri & Chail", description: "Visit Kufri for snow activities (in winter) or scenic views. Continue to Chail to see the world's highest cricket ground and the majestic Chail Palace." },
    { day: 3, title: "Mashobra & Naldehra", description: "Explore the peaceful apple orchards of Mashobra and the famous 9-hole golf course in Naldehra, surrounded by deodar trees." },
    { day: 4, title: "Local Heritage Tour", description: "Visit the Viceregal Lodge, Christ Church, and Jakhu Temple. Enjoy a special honeymoon dinner arranged at your resort." },
    { day: 5, title: "Departure", description: "Check out and depart from Shimla with beautiful memories of the mountains." }
  ],
  "thailand-tour": [
    { day: 1, title: "Arrival in Bangkok", description: "Sawasdee! Arrive in Bangkok and transfer to your hotel. In the evening, enjoy a Chao Phraya River dinner cruise with spectacular city views." },
    { day: 2, title: "Bangkok City & Temples", description: "Visit the Grand Palace, Wat Phra Kaew (Emerald Buddha), and Wat Arun. Experience the bustling street life and shopping at MBK or Chatuchak." },
    { day: 3, title: "Fly to Phuket", description: "Take a short flight to Phuket. Check into your beach resort and spend the evening exploring Patong Beach and Bangla Road." },
    { day: 4, title: "Phi Phi Island Tour", description: "Embark on a full-day speedboat tour to the stunning Phi Phi Islands. Snorkel in crystal-clear waters, relax on Maya Bay, and enjoy a beachside lunch." },
    { day: 5, title: "Phang Nga Bay (James Bond Island)", description: "Take a traditional long-tail boat to Phang Nga Bay. See limestone karsts jutting out of the emerald sea and visit the floating Muslim village of Koh Panyee." },
    { day: 6, title: "Departure", description: "Enjoy some last-minute souvenir shopping before transferring to Phuket airport for your flight home." }
  ],
  "thailand-awesome": [
    { day: 1, title: "Arrival & City Tour", description: "Arrive in Bangkok and check in. Take an afternoon tour of the Grand Palace and Wat Arun." },
    { day: 2, title: "Floating Market", description: "Visit the famous Damnoen Saduak Floating Market and shop for local produce from traditional wooden boats." },
    { day: 3, title: "Departure", description: "Enjoy breakfast and some final shopping before your departure flight." }
  ],
  "bali-tour": [
    { day: 1, title: "Arrival in Bali", description: "Welcome to Bali! Transfer to your hotel in Seminyak or Kuta. Relax and enjoy a spectacular beach sunset." },
    { day: 2, title: "Ubud Cultural Tour", description: "Visit the Sacred Monkey Forest, the stunning Tegalalang Rice Terraces, and the traditional art villages around Ubud." },
    { day: 3, title: "Kintamani Volcano & Temples", description: "Drive up to Kintamani for panoramic views of Mount Batur. Visit the holy Tirta Empul water temple on the way back." },
    { day: 4, title: "Nusa Penida Day Trip", description: "Take a fast boat to Nusa Penida island. Visit the famous T-Rex shaped Kelingking Beach, Broken Beach, and Angel's Billabong." },
    { day: 5, title: "Uluwatu Sunset & Kecak Dance", description: "Relax in the morning. In the late afternoon, visit the cliff-top Uluwatu Temple and watch the traditional Kecak Fire Dance at sunset." },
    { day: 6, title: "Departure", description: "Transfer to Ngurah Rai International Airport for your onward journey." }
  ],
  "indonesia-awesome": [
    { day: 1, title: "Arrival in Bali", description: "Welcome to Bali! Arrive and transfer to your beachside hotel. Enjoy a relaxing evening by the ocean." },
    { day: 2, title: "Ubud & Tanah Lot", description: "Take a quick tour of Ubud's Monkey Forest, followed by an evening visit to the iconic Tanah Lot temple for sunset." },
    { day: 3, title: "Departure", description: "Enjoy breakfast before heading to the airport." }
  ],
  "bali-honeymoon": [
    { day: 1, title: "Arrival in Bali", description: "Welcome to Bali! Transfer to your romantic private villa in Seminyak or Ubud. Enjoy a special floral bath setup." },
    { day: 2, title: "Ubud & Couple's Spa", description: "Visit the Tegalalang Rice Terraces and enjoy a luxurious 2-hour Balinese couple's spa treatment." },
    { day: 3, title: "Romantic Sunset Cruise", description: "Relax at your villa. In the evening, embark on a romantic dinner cruise featuring live music and spectacular sunset views." },
    { day: 4, title: "Nusa Penida Escapade", description: "Take a private day trip to Nusa Penida island. Visit pristine, secluded beaches like Kelingking and Crystal Bay." },
    { day: 5, title: "Uluwatu & Jimbaran Dinner", description: "Visit the Uluwatu Temple at sunset, followed by a romantic candlelit seafood dinner on the beach at Jimbaran Bay." },
    { day: 6, title: "Departure", description: "Check out from your villa and transfer to the airport with unforgettable honeymoon memories." }
  ],
  "bali-popular": [
    { day: 1, title: "Arrival in Bali", description: "Welcome to Bali! Transfer to your romantic private villa in Seminyak or Ubud. Enjoy a special floral bath setup." },
    { day: 2, title: "Ubud & Couple's Spa", description: "Visit the Tegalalang Rice Terraces and enjoy a luxurious 2-hour Balinese couple's spa treatment." },
    { day: 3, title: "Romantic Sunset Cruise", description: "Relax at your villa. In the evening, embark on a romantic dinner cruise featuring live music and spectacular sunset views." },
    { day: 4, title: "Nusa Penida Escapade", description: "Take a private day trip to Nusa Penida island. Visit pristine, secluded beaches like Kelingking and Crystal Bay." },
    { day: 5, title: "Uluwatu & Jimbaran Dinner", description: "Visit the Uluwatu Temple at sunset, followed by a romantic candlelit seafood dinner on the beach at Jimbaran Bay." },
    { day: 6, title: "Departure", description: "Check out from your villa and transfer to the airport with unforgettable honeymoon memories." }
  ],
  "dubai-tour": [
    { day: 1, title: "Arrival in Dubai & Marina Dhow Cruise", description: "Arrive in Dubai. In the evening, enjoy a traditional Dhow Cruise along Dubai Marina with an international buffet dinner and live entertainment." },
    { day: 2, title: "Dubai City Tour & Burj Khalifa", description: "Take a half-day city tour covering the Dubai Museum, Jumeirah Mosque, and Palm Jumeirah. Later, visit the observation deck on the 124th floor of the Burj Khalifa." },
    { day: 3, title: "Desert Safari", description: "Spend the morning at leisure. In the afternoon, embark on an exhilarating Desert Safari featuring dune bashing, camel riding, belly dancing, and a BBQ dinner." },
    { day: 4, title: "Abu Dhabi City Tour & Ferrari World", description: "Take a day trip to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque, followed by adrenaline-pumping rides at Ferrari World." },
    { day: 5, title: "Departure", description: "Enjoy last-minute shopping at the Dubai Mall or Gold Souk before your transfer to the airport." }
  ],
  "malaysia-awesome": [
    { day: 1, title: "Arrival in Kuala Lumpur", description: "Arrive and transfer to your hotel. Evening visit to the iconic Petronas Twin Towers for photos." },
    { day: 2, title: "Batu Caves & City Tour", description: "Visit the massive Batu Caves and Hindu shrines, followed by a quick tour of KL's historic Independence Square." },
    { day: 3, title: "Departure", description: "Check out and head to the airport for your flight." }
  ],
  "maldives-honeymoon": [
    { day: 1, title: "Arrival via Speedboat/Seaplane", description: "Arrive in Male and transfer to your luxury island resort via speedboat or seaplane. Check into your spectacular overwater villa." },
    { day: 2, title: "Leisure & Snorkeling", description: "Spend the day exploring the house reef. Snorkel in the crystal-clear waters to see colorful corals, tropical fish, and maybe even sea turtles." },
    { day: 3, title: "Romantic Beach Dinner", description: "Relax at the resort's infinity pool or enjoy a couple's spa. In the evening, indulge in a private, candlelit dinner set up exclusively for you on the beach." },
    { day: 4, title: "Water Sports or Dolphin Cruise", description: "Try out kayaking or paddleboarding. Later in the day, join a sunset dolphin-watching cruise." },
    { day: 5, title: "Departure", description: "Enjoy a final breakfast overlooking the ocean before taking the transfer back to Male airport." }
  ],
  "maldives-popular": [
    { day: 1, title: "Arrival via Speedboat/Seaplane", description: "Arrive in Male and transfer to your luxury island resort via speedboat or seaplane. Check into your spectacular overwater villa." },
    { day: 2, title: "Leisure & Snorkeling", description: "Spend the day exploring the house reef. Snorkel in the crystal-clear waters to see colorful corals, tropical fish, and maybe even sea turtles." },
    { day: 3, title: "Romantic Beach Dinner", description: "Relax at the resort's infinity pool or enjoy a couple's spa. In the evening, indulge in a private, candlelit dinner set up exclusively for you on the beach." },
    { day: 4, title: "Water Sports or Dolphin Cruise", description: "Try out kayaking or paddleboarding. Later in the day, join a sunset dolphin-watching cruise." },
    { day: 5, title: "Departure", description: "Enjoy a final breakfast overlooking the ocean before taking the transfer back to Male airport." }
  ]
};

// Replace all instances of itinerary blocks based on slug
const regex = /slug:\s*"([^"]+)",[\s\S]*?itinerary:\s*\[[\s\S]*?\](?=,[\s]*inclusions)/g;

content = content.replace(regex, (match, slug) => {
  if (customItineraries[slug]) {
    const it = customItineraries[slug];
    const itString = "itinerary: [\n" + it.map(day => `      { day: ${day.day}, title: "${day.title}", description: "${day.description}" }`).join(',\n') + "\n    ]";
    // Replace just the itinerary part within the matched block
    return match.replace(/itinerary:\s*\[[\s\S]*?\]/, itString);
  }
  return match;
});

fs.writeFileSync(filePath, content);
console.log('Updated packages.ts successfully!');

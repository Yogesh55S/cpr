export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "santorini-travel-guide",
    title: "Santorini Travel Guide: Everything You Need to Know",
    excerpt: "Discover the magic of Santorini — from stunning sunsets in Oia to volcanic beaches and world-class wineries. Your complete guide to Greece's most iconic island.",
    coverImage: "/images/blog-1.jpg",
    date: "2024-06-15",
    readTime: "8 min read",
    content: `
Santorini is arguably the most beautiful Greek island, famous for its white-washed buildings with blue domes, breathtaking sunsets, and volcanic beaches. Whether you're planning a romantic getaway or a solo adventure, this guide covers everything you need to know.

## Best Time to Visit
The ideal time to visit Santorini is from April to October. July and August are peak season — expect crowds and higher prices. For a balance of good weather and fewer tourists, visit in May, June, or September.

## Where to Stay
- **Oia**: Best for sunsets and luxury hotels
- **Fira**: The capital, great for nightlife and shopping
- **Imerovigli**: Quiet, romantic, with caldera views
- **Kamari**: Beach town with a relaxed vibe

## Must-See Attractions
1. Oia Sunset — arrive early to secure a good spot
2. Red Beach — unique volcanic sand and dramatic cliffs
3. Ancient Akrotiri — a Minoan city preserved in volcanic ash
4. Fira to Oia hiking trail — stunning caldera views
5. Wine tasting at Santo Wines or Venetsanos Winery

## Getting Around
Rent an ATV or scooter for the most flexibility. Buses connect major towns, and taxis are available but expensive. Many visitors also join guided tours.
    `,
  },
  {
    slug: "kyoto-hidden-gems",
    title: "Kyoto's Hidden Gems: Beyond the Temples",
    excerpt: "Explore Kyoto's lesser-known treasures — secret bamboo groves, traditional tea houses, and peaceful gardens away from the tourist crowds.",
    coverImage: "/images/blog-2.jpg",
    date: "2024-05-22",
    readTime: "6 min read",
    content: `
While Kyoto's famous temples like Kinkaku-ji and Fushimi Inari are must-sees, the city's true magic lies in its hidden corners. Here are our favorite off-the-beaten-path spots.

## Tofuku-ji Temple Gardens
Often overlooked in favor of more famous temples, Tofuku-ji offers some of Kyoto's most beautiful Zen gardens. Visit in autumn for spectacular foliage.

## Philosopher's Path at Dawn
Most tourists visit in the afternoon. Arrive at 6 AM to have this serene canal-side walk practically to yourself.

## Nishiki Market Backstreets
While Nishiki Market itself is popular, the narrow lanes behind it hide traditional shops, tiny restaurants, and local craft studios that most visitors miss.

## Otagi Nenbutsu-ji Temple
A 30-minute bus ride from the city center, this temple features 1,200 unique rakan (disciple) statues, each with a different expression. It's peaceful, quirky, and crowd-free.
    `,
  },
  {
    slug: "maldives-on-budget",
    title: "How to Visit the Maldives on a Budget",
    excerpt: "Think the Maldives is only for luxury travelers? Think again. Here's how to experience paradise without breaking the bank.",
    coverImage: "/images/blog-3.jpg",
    date: "2024-04-10",
    readTime: "7 min read",
    content: `
The Maldives doesn't have to cost a fortune. With some smart planning, you can enjoy crystal-clear waters, white sand beaches, and incredible marine life on a reasonable budget.

## Stay on Local Islands
Instead of expensive private resort islands, stay on inhabited local islands like Maafushi, Thoddoo, or Ukulhas. Guesthouses start from $40-60 per night.

## Use Public Ferries
The public ferry network connects many islands at a fraction of the cost of speedboats and seaplanes. The rides are slower but scenic and affordable.

## Eat Local
Maldivian cuisine is delicious and affordable on local islands. Try mas huni (tuna and coconut breakfast) and garudhiya (fish soup) at local cafes.

## Free Activities
- Snorkeling (bring your own gear)
- Beach hopping
- Sunset watching
- Exploring local villages

## Best Budget Islands
1. Maafushi — most developed, many guesthouses
2. Thoddoo — great snorkeling, peaceful
3. Ukulhas — eco-friendly, beautiful beaches
4. Dhigurah — whale shark encounters
    `,
  },
];

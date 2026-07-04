export interface Airport {
  iata: string;
  city: string;
  country: string;
}

export interface FlightFare {
  id: string;
  origin: Airport;
  destination: Airport;
  price: number;
  currency: string;
  discountLabel: string;
  travelDate: string;
  image: string;
  featured: boolean;
}

export interface FlightRoute {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  fares: FlightFare[];
}

export const airports: Airport[] = [
  { iata: "JFK", city: "New York", country: "USA" },
  { iata: "LAX", city: "Los Angeles", country: "USA" },
  { iata: "ORD", city: "Chicago", country: "USA" },
  { iata: "IAH", city: "Houston", country: "USA" },
  { iata: "SFO", city: "San Francisco", country: "USA" },
  { iata: "EWR", city: "Newark", country: "USA" },
  { iata: "BOS", city: "Boston", country: "USA" },
  { iata: "DEL", city: "Delhi", country: "India" },
  { iata: "BOM", city: "Mumbai", country: "India" },
  { iata: "BLR", city: "Bengaluru", country: "India" },
  { iata: "HYD", city: "Hyderabad", country: "India" },
  { iata: "MAA", city: "Chennai", country: "India" },
  { iata: "AMD", city: "Ahmedabad", country: "India" },
  { iata: "CCU", city: "Kolkata", country: "India" },
  { iata: "YYZ", city: "Toronto", country: "Canada" },
  { iata: "SYD", city: "Sydney", country: "Australia" },
  { iata: "RGN", city: "Yangon", country: "Myanmar" },
  { iata: "DXB", city: "Dubai", country: "UAE" },
  { iata: "BKK", city: "Bangkok", country: "Thailand" },
];

export const flightRoutes: FlightRoute[] = [
  {
    slug: "usa-to-india",
    title: "USA to India",
    metaTitle: "USA to India Flights - Exclusive Deals from $404",
    metaDescription: "Book cheap flights from USA to India. Exclusive deals on JFK, LAX, ORD to Delhi, Mumbai, Bengaluru. Save up to $35 off. 24/7 support.",
    fares: [
      {
        id: "us-in-1",
        origin: { iata: "JFK", city: "New York", country: "USA" },
        destination: { iata: "DEL", city: "Delhi", country: "India" },
        price: 404,
        currency: "USD",
        discountLabel: "Get Upto $35* Off",
        travelDate: "24 Aug 25",
        image: "/images/fare-jfk-del.jpg",
        featured: true,
      },
      {
        id: "us-in-2",
        origin: { iata: "LAX", city: "Los Angeles", country: "USA" },
        destination: { iata: "BOM", city: "Mumbai", country: "India" },
        price: 445,
        currency: "USD",
        discountLabel: "Get Upto $40* Off",
        travelDate: "15 Sep 25",
        image: "/images/fare-lax-bom.jpg",
        featured: true,
      },
      {
        id: "us-in-3",
        origin: { iata: "JFK", city: "New York", country: "USA" },
        destination: { iata: "BOM", city: "Mumbai", country: "India" },
        price: 419,
        currency: "USD",
        discountLabel: "Get Upto $30* Off",
        travelDate: "02 Oct 25",
        image: "/images/fare-jfk-del.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "india-to-usa",
    title: "India to USA",
    metaTitle: "India to USA Flights - Best Deals from India",
    metaDescription: "Fly from India to USA at unbeatable prices. Delhi, Mumbai to New York, Chicago, San Francisco. Book now and save big!",
    fares: [
      {
        id: "in-us-1",
        origin: { iata: "DEL", city: "Delhi", country: "India" },
        destination: { iata: "JFK", city: "New York", country: "USA" },
        price: 425,
        currency: "USD",
        discountLabel: "Get Upto $35* Off",
        travelDate: "10 Sep 25",
        image: "/images/fare-jfk-del.jpg",
        featured: true,
      },
      {
        id: "in-us-2",
        origin: { iata: "BOM", city: "Mumbai", country: "India" },
        destination: { iata: "LAX", city: "Los Angeles", country: "USA" },
        price: 465,
        currency: "USD",
        discountLabel: "Get Upto $45* Off",
        travelDate: "22 Sep 25",
        image: "/images/fare-lax-bom.jpg",
        featured: false,
      },
    ],
  },
  {
    slug: "usa-to-chennai",
    title: "USA to Chennai",
    metaTitle: "USA to Chennai Flights - Cheap Fares to MAA",
    metaDescription: "Book flights from USA to Chennai (MAA). Best deals from New York, Chicago, San Francisco to Chennai. 24/7 booking support.",
    fares: [
      {
        id: "us-maa-1",
        origin: { iata: "JFK", city: "New York", country: "USA" },
        destination: { iata: "MAA", city: "Chennai", country: "India" },
        price: 435,
        currency: "USD",
        discountLabel: "Get Upto $30* Off",
        travelDate: "05 Sep 25",
        image: "/images/fare-ewr-maa.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "usa-to-bengaluru",
    title: "USA to Bengaluru",
    metaTitle: "USA to Bengaluru Flights - Best Fares to BLR",
    metaDescription: "Fly from USA to Bengaluru (BLR) at great prices. Deals from New York, San Francisco, Chicago to Bengaluru. Book today!",
    fares: [
      {
        id: "us-blr-1",
        origin: { iata: "SFO", city: "San Francisco", country: "USA" },
        destination: { iata: "BLR", city: "Bengaluru", country: "India" },
        price: 455,
        currency: "USD",
        discountLabel: "Get Upto $35* Off",
        travelDate: "18 Aug 25",
        image: "/images/fare-sfo-blr.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "usa-to-hyderabad",
    title: "USA to Hyderabad",
    metaTitle: "USA to Hyderabad Flights - Cheap Fares to HYD",
    metaDescription: "Book cheap flights from USA to Hyderabad (HYD). Exclusive deals from Chicago, New York, Houston to Hyderabad.",
    fares: [
      {
        id: "us-hyd-1",
        origin: { iata: "IAH", city: "Houston", country: "USA" },
        destination: { iata: "HYD", city: "Hyderabad", country: "India" },
        price: 445,
        currency: "USD",
        discountLabel: "Get Upto $30* Off",
        travelDate: "12 Sep 25",
        image: "/images/fare-iah-hyd.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "usa-to-ahmedabad",
    title: "USA to Ahmedabad",
    metaTitle: "USA to Ahmedabad Flights - Best Deals to AMD",
    metaDescription: "Fly from USA to Ahmedabad (AMD) at unbeatable prices. Deals from New York, Chicago, Newark to Ahmedabad.",
    fares: [
      {
        id: "us-amd-1",
        origin: { iata: "EWR", city: "Newark", country: "USA" },
        destination: { iata: "AMD", city: "Ahmedabad", country: "India" },
        price: 415,
        currency: "USD",
        discountLabel: "Get Upto $25* Off",
        travelDate: "08 Oct 25",
        image: "/images/fare-ord-del.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "chicago-to-india",
    title: "Chicago to India",
    metaTitle: "Chicago to India Flights - ORD to DEL, BOM, MAA",
    metaDescription: "Book flights from Chicago (ORD) to India. Best fares to Delhi, Mumbai, Chennai, Bengaluru. Save up to 40%.",
    fares: [
      {
        id: "ch-in-1",
        origin: { iata: "ORD", city: "Chicago", country: "USA" },
        destination: { iata: "DEL", city: "Delhi", country: "India" },
        price: 395,
        currency: "USD",
        discountLabel: "Get Upto $40* Off",
        travelDate: "01 Sep 25",
        image: "/images/fare-ord-del.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "houston-to-india",
    title: "Houston to India",
    metaTitle: "Houston to India Flights - IAH to DEL, BOM, HYD",
    metaDescription: "Fly from Houston (IAH) to India at great prices. Deals to Delhi, Mumbai, Hyderabad, Bengaluru. Book now!",
    fares: [
      {
        id: "ho-in-1",
        origin: { iata: "IAH", city: "Houston", country: "USA" },
        destination: { iata: "DEL", city: "Delhi", country: "India" },
        price: 425,
        currency: "USD",
        discountLabel: "Get Upto $35* Off",
        travelDate: "14 Sep 25",
        image: "/images/fare-iah-hyd.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "newark-to-india",
    title: "Newark to India",
    metaTitle: "Newark to India Flights - EWR to DEL, BOM, AMD",
    metaDescription: "Book cheap flights from Newark (EWR) to India. Best deals to Delhi, Mumbai, Ahmedabad. 24/7 support available.",
    fares: [
      {
        id: "nw-in-1",
        origin: { iata: "EWR", city: "Newark", country: "USA" },
        destination: { iata: "DEL", city: "Delhi", country: "India" },
        price: 389,
        currency: "USD",
        discountLabel: "Get Upto $30* Off",
        travelDate: "20 Aug 25",
        image: "/images/fare-ewr-maa.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "new-york-to-india",
    title: "New York to India",
    metaTitle: "New York to India Flights - JFK to DEL, BOM, MAA",
    metaDescription: "Fly from New York (JFK) to India at the best prices. Exclusive deals to Delhi, Mumbai, Chennai. Book today!",
    fares: [
      {
        id: "ny-in-1",
        origin: { iata: "JFK", city: "New York", country: "USA" },
        destination: { iata: "DEL", city: "Delhi", country: "India" },
        price: 404,
        currency: "USD",
        discountLabel: "Get Upto $35* Off",
        travelDate: "24 Aug 25",
        image: "/images/fare-jfk-del.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "san-francisco-to-india",
    title: "San Francisco to India",
    metaTitle: "San Francisco to India Flights - SFO to DEL, BOM, BLR",
    metaDescription: "Book flights from San Francisco (SFO) to India. Great fares to Delhi, Mumbai, Bengaluru. Save big!",
    fares: [
      {
        id: "sf-in-1",
        origin: { iata: "SFO", city: "San Francisco", country: "USA" },
        destination: { iata: "BOM", city: "Mumbai", country: "India" },
        price: 465,
        currency: "USD",
        discountLabel: "Get Upto $40* Off",
        travelDate: "30 Aug 25",
        image: "/images/fare-sfo-blr.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "delhi-to-canada",
    title: "Delhi to Canada",
    metaTitle: "Delhi to Canada Flights - DEL to Toronto, Vancouver",
    metaDescription: "Fly from Delhi (DEL) to Canada at unbeatable prices. Best deals to Toronto (YYZ). Book your Canada trip now!",
    fares: [
      {
        id: "dl-ca-1",
        origin: { iata: "DEL", city: "Delhi", country: "India" },
        destination: { iata: "YYZ", city: "Toronto", country: "Canada" },
        price: 685,
        currency: "USD",
        discountLabel: "Get Upto $50* Off",
        travelDate: "10 Sep 25",
        image: "/images/fare-del-yyz.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "delhi-to-australia",
    title: "Delhi to Australia",
    metaTitle: "Delhi to Australia Flights - DEL to Sydney, Melbourne",
    metaDescription: "Book flights from Delhi (DEL) to Australia. Great fares to Sydney (SYD). Experience Australia for less!",
    fares: [
      {
        id: "dl-au-1",
        origin: { iata: "DEL", city: "Delhi", country: "India" },
        destination: { iata: "SYD", city: "Sydney", country: "Australia" },
        price: 745,
        currency: "USD",
        discountLabel: "Get Upto $60* Off",
        travelDate: "15 Oct 25",
        image: "/images/fare-del-syd.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "india-to-myanmar",
    title: "India to Myanmar",
    metaTitle: "India to Myanmar Flights - DEL to Yangon",
    metaDescription: "Fly from India to Myanmar at great prices. Delhi to Yangon (RGN) flights. Explore Southeast Asia!",
    fares: [
      {
        id: "in-mm-1",
        origin: { iata: "DEL", city: "Delhi", country: "India" },
        destination: { iata: "RGN", city: "Yangon", country: "Myanmar" },
        price: 320,
        currency: "USD",
        discountLabel: "Get Upto $20* Off",
        travelDate: "05 Sep 25",
        image: "/images/fare-del-rgn.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "india-to-uae",
    title: "India to UAE",
    metaTitle: "India to UAE Flights - BOM to Dubai, Abu Dhabi",
    metaDescription: "Book cheap flights from India to UAE. Mumbai to Dubai (DXB) at unbeatable prices. Luxury travel for less!",
    fares: [
      {
        id: "in-ae-1",
        origin: { iata: "BOM", city: "Mumbai", country: "India" },
        destination: { iata: "DXB", city: "Dubai", country: "UAE" },
        price: 245,
        currency: "USD",
        discountLabel: "Get Upto $15* Off",
        travelDate: "12 Aug 25",
        image: "/images/fare-bom-dxb.jpg",
        featured: true,
      },
    ],
  },
  {
    slug: "india-to-bangkok",
    title: "India to Bangkok",
    metaTitle: "India to Bangkok Flights - DEL to BKK",
    metaDescription: "Fly from India to Bangkok (BKK) at great prices. Delhi to Bangkok flights. Explore Thailand!",
    fares: [
      {
        id: "in-th-1",
        origin: { iata: "DEL", city: "Delhi", country: "India" },
        destination: { iata: "BKK", city: "Bangkok", country: "Thailand" },
        price: 285,
        currency: "USD",
        discountLabel: "Get Upto $20* Off",
        travelDate: "18 Sep 25",
        image: "/images/fare-del-bkk.jpg",
        featured: true,
      },
    ],
  },
];

export function getRouteBySlug(slug: string): FlightRoute | undefined {
  return flightRoutes.find((route) => route.slug === slug);
}

export function getAllFares(): FlightFare[] {
  return flightRoutes.flatMap((route) => route.fares);
}

export function getFeaturedFares(): FlightFare[] {
  return getAllFares().filter((fare) => fare.featured);
}

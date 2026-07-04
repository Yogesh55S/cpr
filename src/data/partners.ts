export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { id: "qatar", name: "Qatar Airways", logo: "/images/logo-qatar.png" },
  { id: "etihad", name: "Etihad Airways", logo: "/images/logo-etihad.png" },
  { id: "airindia", name: "Air India", logo: "/images/logo-airindia.png" },
  { id: "cathay", name: "Cathay Pacific", logo: "/images/logo-cathay.png" },
  { id: "southwest", name: "Southwest Airlines", logo: "/images/logo-southwest.png" },
  { id: "united", name: "United Airlines", logo: "/images/logo-united.png" },
  { id: "delta", name: "Delta Air Lines", logo: "/images/logo-delta.png" },
];

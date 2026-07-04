export interface Partner {
  id: string;
  name: string;
  /** Local PNG path (may be placeholder) — logo component falls back to brandColor initial */
  logo: string;
  /** Brand accent colour used for the fallback initial badge */
  brandColor: string;
  /** Single-letter or short abbreviation for the fallback tile */
  abbr: string;
}

export const partners: Partner[] = [
  {
    id: "qatar",
    name: "Qatar Airways",
    logo: "/images/logo-qatar.png",
    brandColor: "#5C0632",
    abbr: "QR",
  },
  {
    id: "etihad",
    name: "Etihad Airways",
    logo: "/images/logo-etihad.png",
    brandColor: "#BE8A3D",
    abbr: "EY",
  },
  {
    id: "airindia",
    name: "Air India",
    logo: "/images/logo-airindia.png",
    brandColor: "#C8102E",
    abbr: "AI",
  },
  {
    id: "cathay",
    name: "Cathay Pacific",
    logo: "/images/logo-cathay.png",
    brandColor: "#006564",
    abbr: "CX",
  },
  {
    id: "southwest",
    name: "Southwest Airlines",
    logo: "/images/logo-southwest.png",
    brandColor: "#304CB2",
    abbr: "WN",
  },
  {
    id: "united",
    name: "United Airlines",
    logo: "/images/logo-united.png",
    brandColor: "#002244",
    abbr: "UA",
  },
  {
    id: "delta",
    name: "Delta Air Lines",
    logo: "/images/logo-delta.png",
    brandColor: "#003366",
    abbr: "DL",
  },
];

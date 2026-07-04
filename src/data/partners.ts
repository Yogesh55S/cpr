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
    logo: "https://www.google.com/s2/favicons?domain=qatarairways.com&sz=128",
    brandColor: "#5C0632",
    abbr: "QR",
  },
  {
    id: "etihad",
    name: "Etihad Airways",
    logo: "https://www.google.com/s2/favicons?domain=etihad.com&sz=128",
    brandColor: "#BE8A3D",
    abbr: "EY",
  },
  {
    id: "airindia",
    name: "Air India",
    logo: "https://www.google.com/s2/favicons?domain=airindia.com&sz=128",
    brandColor: "#C8102E",
    abbr: "AI",
  },
  {
    id: "cathay",
    name: "Cathay Pacific",
    logo: "https://www.google.com/s2/favicons?domain=cathaypacific.com&sz=128",
    brandColor: "#006564",
    abbr: "CX",
  },
  {
    id: "southwest",
    name: "Southwest Airlines",
    logo: "https://www.google.com/s2/favicons?domain=southwest.com&sz=128",
    brandColor: "#304CB2",
    abbr: "WN",
  },
  {
    id: "united",
    name: "United Airlines",
    logo: "https://www.google.com/s2/favicons?domain=united.com&sz=128",
    brandColor: "#002244",
    abbr: "UA",
  },
  {
    id: "delta",
    name: "Delta Air Lines",
    logo: "https://www.google.com/s2/favicons?domain=delta.com&sz=128",
    brandColor: "#003366",
    abbr: "DL",
  },
];

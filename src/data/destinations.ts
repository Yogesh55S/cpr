export interface Destination {
  id: string;
  name: string;
  discountLabel: string;
  image: string;
  link: string;
}

export const destinations: Destination[] = [
  {
    id: "thailand",
    name: "Thailand",
    discountLabel: "Save 30%",
    image: "/images/dest-thailand.jpg",
    link: "/packages/international-tour/",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    discountLabel: "Save 25%",
    image: "/images/dest-malaysia.jpg",
    link: "/packages/international-tour/",
  },
  {
    id: "australia",
    name: "Australia",
    discountLabel: "Save 35%",
    image: "/images/dest-australia.jpg",
    link: "/packages/international-tour/",
  },
  {
    id: "indonesia",
    name: "Indonesia",
    discountLabel: "Save 20%",
    image: "/images/dest-indonesia.jpg",
    link: "/packages/international-tour/",
  },
];

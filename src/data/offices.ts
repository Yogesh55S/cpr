export interface Office {
  id: string;
  country: string;
  city: string;
  address: string;
  phones: string[];
  email: string;
  mapUrl: string;
}

export const offices: Office[] = [
  {
    id: "in",
    country: "India",
    city: "New Delhi",
    address: "123 Connaught Place, Block C, New Delhi, Delhi 110001, India",
    phones: ["+91-9501737767", "+91-11-4567-8900"],
    email: "info@cheapprimefares.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.893!2d77.2153!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzUzLjQiTiA3N8KwMTInNTUuMSJF!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "us",
    country: "USA",
    city: "Sheridan, WY",
    address: "30 N Gould St Ste R, Sheridan, WY 82801, United States",
    phones: ["+1-307-555-0100"],
    email: "usa@cheapprimefares.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5!2d-106.9558!3d44.7978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ3JzUyLjEiTiAxMDbCsDU3JzIwLjkiVw!5e0!3m2!1sen!2sus!4v1",
  },
  {
    id: "au",
    country: "Australia",
    city: "Sydney",
    address: "Suite 502, 123 Pitt Street, Sydney, NSW 2000, Australia",
    phones: ["+61-2-9000-1234"],
    email: "aus@cheapprimefares.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d151.2093!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzA3LjciUyAxNTHCsDEyJzMzLjUiRQ!5e0!3m2!1sen!2sau!4v1",
  },
  {
    id: "nz",
    country: "New Zealand",
    city: "Auckland",
    address: "Level 8, 48 Shortland Street, Auckland 1010, New Zealand",
    phones: ["+64-9-555-0123"],
    email: "nz@cheapprimefares.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7!2d174.7645!3d-36.8485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzZCsDUwJzU0LjYiUyAxNzTCsDQ1JzUyLjIiRQ!5e0!3m2!1sen!2snz!4v1",
  },
];

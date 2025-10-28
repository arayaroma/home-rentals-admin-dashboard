import type { Property } from "@/types/property";

export const mockProperties: Property[] = [
  {
    props: {
      name: "Cozy Studio Downtown",
      address: "12 Elm St, Springfield",
      lat: 40.7127281,
      lon: -74.0060152,
      description:
        "Bright studio with lots of natural light, walking distance to transit.",
      price: 950,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    },
  },
  {
    props: {
      name: "Sunny 1BR with Balcony",
      address: "45 Oak Avenue, Riverside",
      lat: 41.7696056,
      lon: -71.3632482,
      description: "One bedroom apartment with balcony and open-plan kitchen.",
      price: 1250,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
    },
  },
  {
    props: {
      name: "Spacious 2BR Family Home",
      address: "98 Pine Road, Greenfield",
      lat: 43.119693,
      lon: -73.839077,
      description: "Two bedroom home with garden and off-street parking.",
      price: 2100,
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop",
    },
  },
  {
    props: {
      name: "Modern Loft",
      address: "7 Market St, Old Town",
      lat: 50.8591901,
      lon: 0.5937218,
      description: "Open loft with exposed brick and high ceilings.",
      price: 1850,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&h=800&fit=crop",
    },
  },
  {
    props: {
      name: "Budget Room Near Campus",
      address: "3 College Lane, University District",
      lat: 47.66028,
      lon: -122.31167,
      description:
        "Small room suitable for students. Shared kitchen and bathroom.",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
    },
  },
  {
    props: {
      name: "Luxury Penthouse",
      address: "1 Skyline Tower, Uptown",
      lat: 45.3661319,
      lon: -75.7320852,
      description:
        "Top-floor penthouse with panoramic city views and private terrace.",
      price: 5200,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
    },
  },
];

export default mockProperties;

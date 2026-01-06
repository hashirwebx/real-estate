import { Property, Highlight, Testimonial, PropertyType } from './type';

export const COLORS = {
  primary: '#0F172A', // Trust Navy
  secondary: '#C89B3C', // Premium Gold
  accent: '#1E293B',
  bg: '#F8FAFC',
};

/* =======================
   HIGHLIGHTS (TRUST BASED)
======================= */

export const HIGHLIGHTS: Highlight[] = [
  {
    title: "Local Market Expertise",
    description:
      "Specialized knowledge of Bahria Phase 7 pricing trends, demand cycles, and block-wise investment value.",
    icon: "📊",
  },
  {
    title: "100% Verified Properties",
    description:
      "All listings are physically verified with clear ownership, approved maps, and Bahria Town documentation.",
    icon: "🛡️",
  },
  {
    title: "Investor & Family Focused",
    description:
      "Whether you're buying to live or invest, we guide you with realistic ROI and long-term growth insight.",
    icon: "🏡",
  },
  {
    title: "Complete Transaction Support",
    description:
      "From site visits to transfer and possession, we manage the entire buying and selling process.",
    icon: "🤝",
  },
];

/* =======================
   PROPERTY TYPES
======================= */

export const PROPERTY_TYPES: PropertyType[] = [
  {
    title: "Luxury Villas",
    description:
      "Modern designer houses with solid construction, wide streets, and prime block locations.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    count: "Available Options",
  },
  {
    title: "Apartments & Penthouses",
    description:
      "Secure apartment living in Bahria Heights with lifts, parking, and rental demand.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    count: "Limited Inventory",
  },
  {
    title: "Commercial Properties",
    description:
      "Shops and commercial plots ideal for offices, brands, and rental income.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    count: "Prime Locations",
  },
  {
    title: "5 & 10 Marla Houses",
    description:
      "Most in-demand house sizes for families, offering strong resale and rental value.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    count: "High Demand",
  },
];

/* =======================
   FEATURED PROPERTIES
======================= */

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "10 Marla Brand New Corner House",
    price: "PKR 4.75 Crore",
    size: "10 Marla",
    location: "Sector B, Bahria Phase 7",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    type: "House",
    beds: 5,
    baths: 6,
  },
  {
    id: "2",
    title: "Luxury Apartment – Bahria Heights",
    price: "PKR 2.15 Crore",
    size: "2,200 Sq. Ft.",
    location: "Bahria Heights, Phase 7",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
    type: "Apartment",
    beds: 3,
    baths: 3,
  },
  {
    id: "3",
    title: "1 Kanal Executive House",
    price: "PKR 8.5 Crore",
    size: "1 Kanal",
    location: "Executive Block, Phase 7",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    type: "House",
    beds: 6,
    baths: 7,
  },
  {
    id: "4",
    title: "5 Marla Solid Construction House",
    price: "PKR 2.65 Crore",
    size: "5 Marla",
    location: "Sector F, Bahria Phase 7",
    image:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=800",
    type: "House",
    beds: 3,
    baths: 4,
  },
  {
    id: "5",
    title: "2 Kanal Luxury Residence",
    price: "PKR 17.9 Crore",
    size: "2 Kanal",
    location: "Garden View Block, Phase 7",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
    type: "Luxury House",
    beds: 7,
    baths: 8,
  },
];

/* =======================
   TESTIMONIALS (LOCAL & REAL)
======================= */

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Muhammad Ahsan",
    role: "Property Investor",
    content:
      "They gave honest guidance about block selection and pricing. My investment in Phase 7 is already showing good growth.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ahsan",
  },
  {
    id: "2",
    name: "Sana Rauf",
    role: "Home Buyer",
    content:
      "Transparent dealing and regular updates throughout the process. We received possession without any issues.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sana",
  },
  {
    id: "3",
    name: "Usman Khalid",
    role: "Business Owner",
    content:
      "Purchased a commercial shop in Bahria Phase 7. Location advice was accurate and documentation was smooth.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=usman",
  },
  {
    id: "4",
    name: "Ayesha Noor",
    role: "Architect & Consultant",
    content:
      "They understand construction quality and layout planning, not just prices. Very professional experience.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ayesha",
  },
];

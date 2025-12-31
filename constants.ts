
import { Property, Highlight, Testimonial, PropertyType } from './types';

export const COLORS = {
  primary: '#0F172A', // Navy Blue
  secondary: '#00D1A0',
  accent: '#1E293B',
  bg: '#F8FAFC',
};

export const HIGHLIGHTS: Highlight[] = [
  {
    title: "Market Strategy",
    description: "Data-driven marketing campaigns that put your property in front of the right buyers.",
    icon: "📈"
  },
  {
    title: "Verified Listings",
    description: "Every property we market is 100% verified for clear documentation and ownership.",
    icon: "🛡️"
  },
  {
    title: "Investor Focused",
    description: "Specialized analysis for maximum rental yields and capital appreciation.",
    icon: "💎"
  },
  {
    title: "End-to-End Support",
    description: "From virtual tours to legal paperwork, we handle the entire sales funnel.",
    icon: "🤝"
  }
];

export const PROPERTY_TYPES: PropertyType[] = [
  {
    title: "Luxury Villas",
    description: "Premium independent homes with contemporary architecture.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    count: "12+ Available"
  },
  {
    title: "Modern Apartments",
    description: "High-rise living with breathtaking city views.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    count: "45+ Available"
  },
  {
    title: "Commercial Plots",
    description: "Strategic plots for business growth and offices.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    count: "8+ Available"
  },
  {
    title: "5 Marla Houses",
    description: "Elegant, compact living for growing families.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    count: "15+ Available"
  }
];

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Modern 10 Marla Corner Villa",
    price: "PKR 4.5 Crore",
    size: "10 Marla",
    location: "Sector B, Phase 7",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    type: "Villa",
    beds: 5,
    baths: 6
  },
  {
    id: "2",
    title: "Exclusive Penthouse Suite",
    price: "PKR 2.2 Crore",
    size: "2,400 Sq. Ft.",
    location: "Bahria Heights",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
    type: "Apartment",
    beds: 3,
    baths: 3
  },
  {
    id: "3",
    title: "Luxury Kanal Mansion",
    price: "PKR 8.9 Crore",
    size: "1 Kanal",
    location: "Executive Block",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    type: "Mansion",
    beds: 6,
    baths: 7
  },
  {
    id: "4",
    title: "Designer 5 Marla Smart Home",
    price: "PKR 2.8 Crore",
    size: "5 Marla",
    location: "Sector F, Phase 7",
    image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=800",
    type: "Smart Home",
    beds: 3,
    baths: 4
  },
  {
    id: "5",
    title: "Executive 2 Kanal Grand Estate",
    price: "PKR 18.5 Crore",
    size: "2 Kanal",
    location: "Garden View Block",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
    type: "Estate",
    beds: 7,
    baths: 8
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Malik",
    role: "Investment Analyst",
    content: "Top 10 Marketing provided a clarity I haven't seen elsewhere in the local market. Their analysis of Bahria Elite was spot on.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ahmed"
  },
  {
    id: "2",
    name: "Sarah Khan",
    role: "Creative Director",
    content: "Found our dream home within 2 weeks. The transparent dealing and after-sales support are what set this agency apart.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: "3",
    name: "Michael Thompson",
    role: "CEO, Creative Industry",
    content: "Professional, punctual, and highly skilled in market positioning. They made our commercial acquisition seamless.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: "4",
    name: "Zainab Ali",
    role: "Architect",
    content: "As an architect, I appreciate their focus on design-led properties. They truly understand the value of architecture.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=zainab"
  }
];

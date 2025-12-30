
export interface Property {
    id: string;
    title: string;
    price: string;
    size: string;
    location: string;
    image: string;
    type: string;
    beds?: number;
    baths?: number;
}

export interface Highlight {
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
}

export interface PropertyType {
    title: string;
    description: string;
    image: string;
    count: string;
}

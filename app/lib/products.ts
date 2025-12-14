export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  tags: string[];
};

export const products: Product[] = [
  {
    id: "vibrant-echo",
    name: "Vibrant Echo",
    price: 149,
    description: "Limited-edition soundbar with light-guided ambiance controls.",
    image: undefined,
    tags: ["collections", "high-demand"]
  },
  {
    id: "glide-capsule",
    name: "Glide Capsule",
    price: 329,
    description: "Memory foam sneakers designed for stage and street with adaptive laces.",
    image: undefined,
    tags: ["collections", "bundles"]
  },
  {
    id: "orbit-arcade",
    name: "Orbit Arcade",
    price: 89,
    description: "Compact tabletop console with modular arcade joysticks.",
    image: undefined,
    tags: ["last-chance"]
  }
];

// ✅ Normalize incoming tag so "High Demand" → "high-demand"
export function filterByTag(tag?: string) {
  if (!tag) return products;
  const normalized = tag.toLowerCase().replace(/\s+/g, '-');
  return products.filter(p => p.tags.includes(normalized));
}
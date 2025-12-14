import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    slug: "wireless-headphones",
    product: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones with 20 hours battery life.",
    price: 59.99,
    discount: "20%",
    affiliateLink: "https://www.amazon.com/dp/example1",
  },
  {
    id: 2,
    slug: "smart-watch",
    product: "Smart Watch",
    description: "Fitness tracking smart watch with heart rate monitor.",
    price: 89.99,
    discount: "15%",
    affiliateLink: "https://www.amazon.com/dp/example2",
  },
  {
    id: 3,
    slug: "bluetooth-speaker",
    product: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and 10-hour battery.",
    price: 39.99,
    discount: "25%",
    affiliateLink: "https://www.amazon.com/dp/example3",
  },
  {
    id: 4,
    slug: "laptop-stand",
    product: "Laptop Stand",
    description: "Ergonomic aluminum laptop stand with adjustable height.",
    price: 29.99,
    discount: "10%",
    affiliateLink: "https://www.amazon.com/dp/example4",
  },
];

export async function GET() {
  return NextResponse.json(products, { status: 200 });
}
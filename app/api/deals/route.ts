import { NextResponse } from "next/server";

export async function GET() {
  const deals = [
    {
      id: 1,
      product: "Wireless Headphones",
      price: 59.99,
      discount: "20%",
      image: "/images/headphones.jpg",
      description: "Noise‑cancelling wireless headphones with 20 hours battery life.",
      affiliateLink: "https://amazon.com/headphones",
      expires: "2025-12-31T23:59:59Z" // future date for countdown
    },
    {
      id: 2,
      product: "Smartwatch",
      price: 129.99,
      discount: "15%",
      image: "/images/smartwatch.jpg",
      description: "Track fitness, notifications, and more with this sleek smartwatch.",
      affiliateLink: "https://amazon.com/smartwatch",
      expires: "2025-12-31T23:59:59Z"
    },
    {
      id: 3,
      product: "Bluetooth Speaker",
      price: 39.99,
      discount: "25%",
      image: "/images/speaker.jpg",
      description: "Portable speaker with deep bass and waterproof design.",
      affiliateLink: "https://amazon.com/speaker",
      expires: "2025-12-31T23:59:59Z"
    },
    {
      id: 4,
      product: "Laptop Stand",
      price: 24.99,
      discount: "10%",
      image: "/images/laptop-stand.jpg",
      description: "Ergonomic aluminum stand for laptops up to 17 inches.",
      affiliateLink: "https://amazon.com/laptop-stand",
      expires: "2025-12-31T23:59:59Z"
    }
  ];

  return NextResponse.json(deals);
}
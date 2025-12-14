import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    slug: "wireless-headphones",
    product: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones with 20 hours battery life.",
    price: 59.99,
    discount: "20%",
    image: "/images/wireless-headphones.jpg",
    affiliateLink: "https://www.amazon.com/dp/example1",
  },
  {
    id: 2,
    slug: "smart-watch",
    product: "Smart Watch",
    description: "Fitness tracking smart watch with heart rate monitor.",
    price: 89.99,
    discount: "15%",
    image: "/images/smart-watch.jpg",
    affiliateLink: "https://www.amazon.com/dp/example2",
  },
  {
    id: 3,
    slug: "bluetooth-speaker",
    product: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and 10-hour battery.",
    price: 39.99,
    discount: "25%",
    image: "/images/bluetooth-speaker.jpg",
    affiliateLink: "https://www.amazon.com/dp/example3",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const normalizedSlug = slug.toLowerCase().trim().replace(/[\s_]+/g, "-");

  const product = products.find((p) => p.slug === normalizedSlug);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}
import Link from "next/link";

const deals = [
  {
    product: "Wireless Headphones",
    slug: "wireless-headphones",
    discount: "20%",
    price: 59.99,
  },
  {
    product: "Smart Watch",
    slug: "smart-watch",
    discount: "15%",
    price: 89.99,
  },
  {
    product: "Bluetooth Speaker",
    slug: "bluetooth-speaker",
    discount: "25%",
    price: 39.99,
  },
];

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.slug}
            className="bg-slate-900 p-6 rounded-lg shadow-lg text-white"
          >
            <h2 className="text-xl font-semibold mb-2">{deal.product}</h2>
            <p className="text-slate-300 mb-2">Price: ${deal.price}</p>
            <p className="text-green-400 mb-4">Discount: {deal.discount}</p>
            <Link
              href={`/shop/${deal.slug}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
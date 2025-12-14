import Image from "next/image";
import Link from "next/link";

export default async function DealsPage() {
  // Fetch deals from your API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals`, { cache: "no-store" });
  const deals = await res.json();

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Latest Deals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deals.map((deal: any) => {
          const slug = deal.product.toLowerCase().replace(/\s+/g, "-");

          return (
            <div
              key={deal.id}
              className="rounded-lg bg-slate-800 shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              {/* Product image */}
              <Image
                src={deal.image}
                alt={deal.product}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {deal.product}
                </h2>
                <p className="text-slate-300 mb-2">{deal.description}</p>
                <p className="text-slate-300">Price: ${deal.price}</p>
                <p className="text-green-400 mb-4">Discount: {deal.discount}</p>

                {/* Link to product detail page */}
                <Link
                  href={`/shop/${slug}`}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
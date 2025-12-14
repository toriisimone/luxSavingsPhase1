export default async function DealsPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "https://lux-savings-phase1.vercel.app";

  let products: any[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/amazon`, { cache: "no-store" });
    if (res.ok) {
      products = await res.json();
    }
  } catch (error) {
    console.error("Error loading deals:", error);
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-900 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {product.product}
            </h2>
            <p className="text-slate-300 mb-2">Price: ${product.price}</p>
            <p className="text-green-400 mb-4">Discount: {product.discount}</p>
            <p className="text-slate-400 mb-4">{product.description}</p>
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Shop Now
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
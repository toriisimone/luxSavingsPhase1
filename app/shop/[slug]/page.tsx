import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "https://lux-savings-phase1.vercel.app";

  const normalizedSlug = params.slug.toLowerCase().trim().replace(/[\s_]+/g, "-");

  let product = null;

  try {
    const res = await fetch(`${baseUrl}/api/amazon?slug=${normalizedSlug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    product = await res.json();
  } catch (error) {
    console.error("Error loading product:", error);
  }

  if (!product || product.error) {
    return (
      <main className="min-h-screen bg-slate-950 p-8">
        <h1 className="text-3xl font-bold text-white mb-4">Product not found</h1>
        <p className="text-slate-300">
          Sorry, we couldn’t find details for this product.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-4">{product.product}</h1>

      {product.price && (
        <p className="text-slate-300 mb-2">Price: ${product.price}</p>
      )}
      {product.discount && (
        <p className="text-green-400 mb-4">Discount: {product.discount}</p>
      )}

      {/* Skip image rendering entirely */}

      {product.description && (
        <p className="text-slate-300 mb-6">{product.description}</p>
      )}

      {product.affiliateLink && (
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Buy Now
        </a>
      )}
    </main>
  );
}
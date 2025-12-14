import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch product details from Amazon API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/amazon?slug=${slug}`,
    { cache: "no-store" }
  );
  const product = await res.json();

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
      {/* Product title */}
      <h1 className="text-3xl font-bold text-white mb-4">{product.product}</h1>

      {/* Price and discount */}
      <p className="text-slate-300 mb-2">Price: ${product.price}</p>
      <p className="text-green-400 mb-4">Discount: {product.discount}</p>

      {/* Product image */}
      {product.image && (
        <Image
          src={product.image}
          alt={product.product}
          width={400}
          height={300}
          className="rounded-lg shadow-lg mb-6"
        />
      )}

      {/* Description */}
      {product.description && (
        <p className="text-slate-300 mb-6">{product.description}</p>
      )}

      {/* Affiliate link */}
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
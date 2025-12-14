import { redirect } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "https://lux-savings-phase1.vercel.app";

  const normalizedSlug = params.slug.toLowerCase().trim().replace(/[\s_]+/g, "-");

  try {
    const res = await fetch(`${baseUrl}/api/amazon?slug=${normalizedSlug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const product = await res.json();

    if (product?.affiliateLink) {
      // 🚀 Redirect straight to Amazon
      redirect(product.affiliateLink);
    }
  } catch (error) {
    console.error("Error loading product:", error);
  }

  // Fallback if something goes wrong
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-4">Product not found</h1>
      <p className="text-slate-300">
        Sorry, we couldn’t redirect you to Amazon for this product.
      </p>
    </main>
  );
}
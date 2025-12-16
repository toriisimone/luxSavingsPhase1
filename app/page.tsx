import Image from "next/image";
import Link from "next/link";

const heroCards = [
  {
    title: "Today's Lightning Deals",
    body: "Shop limited‑time discounts across electronics, fashion, and home essentials before they’re gone."
  },
  {
    title: "Amazon Launchpad Picks",
    body: "Discover innovative products from startups and emerging brands, curated just for you."
  },
  {
    title: "Prime Member Exclusives",
    body: "Unlock early access, faster shipping, and special pricing available only to Prime members."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ✅ Single Banner at the Top */}
      <section className="mx-auto w-full max-w-6xl px-4 py-6">
        <Image
          src="/eight.png"   // your banner file
          alt="Amazon Deals Banner"
          width={1000}
          height={320}
          className="rounded-xl shadow-md object-cover w-full max-h-64"
          priority
        />
      </section>

      {/* 🔒 Homepage Section with Amazon wording */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Featured Amazon Deals</p>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Holiday Savings, Delivered by Amazon
              </h1>
              <p className="text-lg text-slate-300">
                From daily lightning deals to Prime exclusives, find everything you need at unbeatable prices.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/shop-deals"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-sm transition hover:shadow-lg"
              >
                Browse Deals
              </Link>
              <Link
                href="/shop-now"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Amazon‑style Hero Cards */}
          <div className="grid gap-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-strong lg:grid-cols-3">
            {heroCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-white/40"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
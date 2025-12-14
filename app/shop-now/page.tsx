import Link from 'next/link';
import { filterByTag } from '../lib/products';

const navTabs = ['Collections', 'High Demand', 'Bundles', 'Last Chance'];

const featuredBanners = [
  {
    title: 'Live drop',
    subtitle: 'Stack your cart with curated hero pieces + insider shipping.',
    cta: 'Add to cart'
  },
  {
    title: 'Sticky rewards',
    subtitle: 'Every purchase unlocks flash credit usable on the next drop.',
    cta: 'View rewards'
  }
];

interface ShopNowPageProps {
  searchParams?: {
    tag?: string;
  };
}

export default function ShopNowPage(props: ShopNowPageProps) {
  const tag = props?.searchParams?.tag ?? '';
  const productRows = filterByTag(tag);

  return (
    <section className="bg-slate-950">
      <div className="sticky top-14 z-30 border-b border-slate-900 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold text-white">Shop Now</h1>
          <div className="flex-1">
            <label htmlFor="shop-search" className="sr-only">
              Search products
            </label>
            <input
              id="shop-search"
              name="shop-search"
              type="search"
              placeholder="Search products, bundles, or creators"
              className="w-full rounded-full border border-white/20 bg-slate-900/60 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            {navTabs.map((tab) => (
              <Link
                key={tab}
                href={`/shop-now?tag=${encodeURIComponent(tab)}`}
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
              >
                {tab}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {productRows.map((product) => (
            <article
              key={product.id}
              className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-white/40"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl bg-slate-800">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-slate-500">
                    No image yet
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-lg font-semibold text-white">{product.name}</h2>
                  <span className="text-sm font-semibold text-accent">${product.price}</span>
                </div>
                <p className="text-sm text-slate-300">{product.description}</p>
              </div>
              <Link
                href="/shop-deals"
                className="mt-auto inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-slate-100"
                data-analytics={`product.${product.id}`}
              >
                View details
              </Link>
            </article>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredBanners.map((banner) => (
            <div
              key={banner.title}
              className="rounded-3xl border border-white/20 bg-gradient-to-br from-orange-500/30 to-amber-500/10 p-6 shadow-strong"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white">Phase One</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{banner.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{banner.subtitle}</p>
              <Link
                href="/shop-now"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
                data-analytics={`banner.${banner.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {banner.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-white/20 bg-slate-900/40 p-6 text-center">
          <h3 className="text-xl font-semibold text-white">Phase One Concierge</h3>
          <p className="mt-2 text-sm text-slate-300">
            Concierge awaits 24/7 for cart blends, schedule deliveries, and bundle exclusives with priority access tags.
          </p>
        </div>
      </div>
    </section>
  );
}
const products = [
  { title: 'Hydrating Strawberry Shortcake Set', link: 'https://amzn.to/4aPKyBz' },
  { title: 'Tech Essentials Bundle', link: 'https://amzn.to/4pdfiAh' },
  { title: 'Kitchen Favorites', link: 'https://amzn.to/3Mzr22h' },
  { title: 'Holiday Decor Picks', link: 'https://amzn.to/4qcUQAo' },
  { title: 'Beauty Must-Haves', link: 'https://amzn.to/4iXppYk' },
  { title: 'Household Heroes', link: 'https://amzn.to/4pDhq5j' },
  { title: 'Pet Essentials', link: 'https://amzn.to/48Yxyan' },
  { title: 'Women’s Fashion Deals', link: 'https://amzn.to/3MLTf5X' },
  { title: 'Best Seller Spotlight', link: 'https://amzn.to/459kDB7' },
  { title: 'Promo Code Specials', link: 'https://amzn.to/4pDhz8R' },
];

const DealsPage = () => {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Today’s Featured Deals</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-white/40"
            >
              <h3 className="text-lg font-semibold text-white">{product.title}</h3>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:shadow-lg"
              >
                View on Amazon
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsPage;
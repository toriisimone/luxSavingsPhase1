import Link from 'next/link';

const dealSections = [
  {
    title: 'Electro Spring',
    badge: 'Featured',
    body: 'Choose from curated smart devices with instant access to bundled savings.',
    cta: 'Unlock packages'
  },
  {
    title: 'Home Spa Reset',
    badge: 'New',
    body: 'Clean beauty duos and spa-grade tools with express delivery cc upgrades.',
    cta: 'Refresh your routine'
  },
  {
    title: 'Travel Ready',
    badge: 'Limited',
    body: 'Premium luggage, noise-canceling headphones, and adventure-ready footwear.',
    cta: 'Book the look'
  }
];

const DealCard = ({ section }: { section: typeof dealSections[number] }) => (
  <article className="flex flex-col rounded-3xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/40">
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-lg font-semibold text-white">{section.title}</h2>
      <span className="rounded-full border border-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        {section.badge}
      </span>
    </div>
    <p className="mt-3 text-sm text-slate-300">{section.body}</p>
    <Link
      href="/shop-now"
      className="mt-6 inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
      data-analytics={`deal.${section.title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {section.cta}
    </Link>
  </article>
);

const ShopDealsPage = () => (
  <section className="bg-slate-950 py-16">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Phase One Deals</p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Grid of patience-defying launches.</h1>
        <p className="text-base text-slate-300">
          Each lane is prepped with gradients, badges, and CTA cues tuned to analytics-ready clickstreams.
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-3">
        {dealSections.map((section) => (
          <DealCard key={section.title} section={section} />
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/shop-now"
          className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-white"
          data-analytics="cta.shop-deals.view-all"
        >
          View all deals
        </Link>
      </div>
    </div>
  </section>
);

export default ShopDealsPage;

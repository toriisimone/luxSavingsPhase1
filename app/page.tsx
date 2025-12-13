'use client';

import Link from 'next/link';
import Countdown from './components/Countdown';

const heroCards = [
  {
    title: 'Freedom of Choice',
    body: 'Stackable offers across electronics, fashion, and home products for a limited time only.'
  },
  {
    title: 'Curated Launch Kits',
    body: 'Bundles crafted with expert picks and sweepstakes entries for early supporters.'
  },
  {
    title: 'Priority Access',
    body: 'Insider shipping, 24/7 concierge, and real-time restock alerts across the storefront.'
  }
];

// Hours Left is handled by Countdown; keep only static stats here
const heroStats = [
  { label: 'Deals Live', value: '87' },
  { label: 'Brands', value: '34' }
];

const HomePage = () => {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Phase One Launch</p>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Amazon Deals reimagined for Phase One energy.
              </h1>
              <p className="text-lg text-slate-300">
                Gradient cards, live countdowns, and aligned CTA journeys guide every guest through curated microsites built
                for measurable lift.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop-deals"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-sm transition hover:shadow-lg"
                data-analytics="cta.hero.deals"
              >
                Browse deals
              </Link>
              <Link
                href="/shop-now"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
                data-analytics="cta.hero.shop"
              >
                Shop now
              </Link>
            </div>
          </div>

          {/* Countdown card */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-strong">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Countdown</p>

            <Countdown targetDate="2025-12-13T02:00:00" />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-4 text-center">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero cards */}
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
  );
};

export default HomePage;
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop Deals', href: '/shop-deals' },
  { label: 'Shop Now', href: '/shop-now' }
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Phase One
        </Link>
        <nav aria-label="Primary" className="hidden sm:flex sm:gap-6">
          {navLinks.map((link) => {
            const isCurrent = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-white/10 ${
                  isCurrent ? 'bg-white/20 text-white' : 'text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/shop-now"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            data-analytics="cta.header.shop-now"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
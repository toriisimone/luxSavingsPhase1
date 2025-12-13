import './globals.css';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Phase One Shop',
  description: 'Phase One launch hero, deals grid, and shop-now experiences with analytics-ready navigation.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Phase One Layout rendered');
  }

  return (
    <html lang="en">
      <body>
        <SkipLink />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

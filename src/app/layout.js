import { Outfit } from 'next/font/google';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './globals.css';

const fontOutfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Train 45 APK Download - Official Latest Version',
  description: 'Download Train 45 APK latest version. Explore gameplay, system requirements, and complete features guide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontOutfit.variable}`}>
      <body className="font-sans bg-[#0c0b09] text-gray-100 antialiased min-h-screen flex flex-col justify-between">
        <main className="grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Scroll To Top Floating Icon */}
        <ScrollToTop />
      </body>
    </html>
  );
}
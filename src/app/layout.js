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
  
  alternates: {
    canonical: 'https://train45apk.com', 
  },
  openGraph: {
    title: 'Train 45 APK Download - Official Latest Version',
    description: 'Download Train 45 APK latest version. Explore gameplay, system requirements, and complete features guide.',
    url: 'https://train45apk.com',
    siteName: 'Train 45 APK',
    images: [
      {
        url: 'https://train45apk.com/logo.webp', // 1200x630 image recommended
        width: 1200,
        height: 630,
        alt: 'Train 45 APK Download',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Train 45 APK Download - Official Latest Version',
    description: 'Download Train 45 APK latest version.',
    images: ['https://train45apk.com/logo.webp'], // 1200x630 image recommended
  },
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
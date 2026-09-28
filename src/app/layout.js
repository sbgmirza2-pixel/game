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
  title: 'Train45 APK v1.0.5.1 – Latest Version Download for Android',
  description: 'Download Train 45 APK latest version. Explore gameplay, system requirements, and complete features guide.',
  
  alternates: {
    canonical: 'https://train45apk.com', 
  },
  openGraph: {
    title: 'Train45 APK v1.0.5.1 – Latest Version Download for Android',
    description: 'Download Train 45 APK latest version. Explore gameplay, system requirements, and complete features guide.',
    url: 'https://train45apk.com',
    siteName: 'Train 45 APK',
    images: [
      {
        url: 'https://train45apk.com/logo.webp',
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
    images: ['https://train45apk.com/logo.webp'],
  },
};

export default function RootLayout({ children }) {
  // Global SEO Schema Markup (Organization & WebSite) to fix tool errors
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://train45apk.com/#website',
        url: 'https://train45apk.com',
        name: 'Train 45 APK',
        description: 'Download Train 45 APK latest version. Explore gameplay, system requirements, and complete features guide.',
        publisher: {
          '@id': 'https://train45apk.com/#organization'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://train45apk.com/#organization',
        name: 'Train 45 APK',
        url: 'https://train45apk.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://train45apk.com/logo.webp'
        },
        sameAs: [
          // Agar aapke koi social media profiles hain toh unke links yahan daal sakte hain
          // 'https://twitter.com/yourprofile',
          // 'https://facebook.com/yourprofile'
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${fontOutfit.variable}`}>
      <body className="font-sans bg-[#0c0b09] text-gray-100 antialiased min-h-screen flex flex-col justify-between">
        
        {/* Global Schema Script injected here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
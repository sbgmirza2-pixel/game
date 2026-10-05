import { Outfit } from 'next/font/google';
import Script from 'next/script';
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
  authors: [{ name: 'Train45 Team', url: 'https://train45apk.com/about-us' }],
  creator: 'Train45',
  publisher: 'Train45',
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
  // Current date for machine-readable freshness signals
  const currentDate = new Date().toISOString();

  // Global SEO Schema Markup with Person Author, Dates, and Entity Links
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
          'https://store.steampowered.com',
          'https://en.wikipedia.org/wiki/Video_game'
        ]
      },
      {
        '@type': 'Person',
        '@id': 'https://train45apk.com/#author',
        name: 'Train45 Team',
        url: 'https://train45apk.com/about'
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://train45apk.com/#software',
        name: 'Train 45 APK',
        operatingSystem: 'ANDROID',
        applicationCategory: 'GameApplication',
        softwareVersion: '1.0.5.1',
        datePublished: '2026-01-01T00:00:00Z',
        dateModified: currentDate,
        author: {
          '@id': 'https://train45apk.com/#author'
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${fontOutfit.variable}`}>
      <head>
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XN8J8Q9TLP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XN8J8Q9TLP');
          `}
        </Script>

        {/* Global Schema Script injected here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
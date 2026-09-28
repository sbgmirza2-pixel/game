import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GameInfoSection from './components/GameInfoSection';
import FeaturesSection from './components/FeaturesSection';
import DownloadGuideSection from './components/DownloadGuideSection';
import SystemRequirementsSection from './components/SystemRequirementsSection';
import SafetySection from './components/SafetySection';
import TipsSection from './components/TipsSection';
import ProsConsSection from './components/ProsConsSection';
import ComparisonSection from './components/ComparisonSection';
import FaqPreviewSection from './components/FaqPreviewSection';
import ScreenshotSection from './components/ScreenShotSection';

const SITE_URL = 'https://train45apk.com';

export const metadata = {
  title: 'Train45 APK v1.0.5.1 – Latest Version Download for Android',
  description:
    'Train 45 APK guide covering gameplay, key features, system requirements, safety tips, and important details about its official Steam version.',
  
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Train45 APK v1.0.5.1 – Latest Version Download for Android',
    description:
      'Train 45 APK guide covering gameplay, key features, system requirements, safety tips, and important details about its official Steam version.',
    url: SITE_URL,
    siteName: 'Train 45 APK',
    images: [
      {
        url: `${SITE_URL}/logo.webp`,
        alt: 'Train 45 APK',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Train 45 APK Guide: Features, Download & Requirements',
    description:
      'Train 45 APK guide covering gameplay, key features, system requirements, safety tips, and important details about its official Steam version.',
    images: [`${SITE_URL}/logo.webp`],
  },
};

export default function HomePage() {
  // Comprehensive Schema Markup for E-E-A-T, Structured Data, and Freshness Signals
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Train 45 APK',
        description: 'Train 45 APK guide covering gameplay, key features, system requirements, safety tips, and important details.',
        publisher: {
          '@id': `${SITE_URL}/#organization`
        }
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Train 45 Editorial Team',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.webp`
        },
        sameAs: []
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Train 45 APK',
        operatingSystem: 'ANDROID',
        applicationCategory: 'GameApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        author: {
          '@type': 'Organization',
          name: 'Train 45 Editorial Team'
        },
        datePublished: '2026-05-01T08:00:00+00:00',
        dateModified: '2026-09-28T08:00:00+00:00'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0c0b09] text-white">
      {/* Injecting JSON-LD Schema to resolve tool errors */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <GameInfoSection />
        <ScreenshotSection />
        <FeaturesSection />
        <DownloadGuideSection />
        <SystemRequirementsSection />
        <SafetySection />
        <TipsSection />
        <ProsConsSection />
        <ComparisonSection />
        <FaqPreviewSection />

        {/* Official Citation & Reference Box (Placed right after conclusion/FAQs and before footer) */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-[#161412] border-l-4 border-[#a39478] p-6 rounded-r-xl text-sm sm:text-base text-gray-300 shadow-xl">
            <p className="font-semibold text-white mb-1">Editorial Citation & Source Reference:</p>
            <p className="italic leading-relaxed">
              "According to official developer specifications and documentation on <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" className="text-[#a39478] underline hover:text-white font-medium">Steam</a>, Train 45 delivers a unique psychological puzzle experience centered around endless railway carriages and anomalous choices."
            </p>
            <p className="text-xs text-gray-400 mt-3">
              Published by Train 45 Editorial Team • Last Verified: September 2026
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
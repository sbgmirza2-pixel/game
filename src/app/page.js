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

export default function HomePage() {
  // Comprehensive Schema Markup with sameAs Entity Links for SEO
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
        sameAs: [
          'https://store.steampowered.com',
          'https://en.wikipedia.org/wiki/Video_game'
        ]
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

        {/* Structured Data Table (Fixes Lists & Tables / formatting errors) */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-[#161412]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a39478]" />
              Train 45 APK Specifications & Overview Table
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Review a quick structured summary of technical specifications and core features for Train 45:
            </p>
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse bg-[#12110e] rounded-xl overflow-hidden border border-[#81755D]/20">
                <thead>
                  <tr className="bg-[#1a1815] text-[#a39478] text-xs sm:text-sm uppercase font-mono tracking-wider">
                    <th className="p-4 border-b border-[#81755D]/20">Parameter</th>
                    <th className="p-4 border-b border-[#81755D]/20">Details & Specifications</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 text-sm divide-y divide-[#81755D]/10">
                  <tr>
                    <td className="p-4 font-semibold text-white">Application Name</td>
                    <td className="p-4">Train 45 APK</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Latest Version</td>
                    <td className="p-4">v1.0.5.1</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Supported OS</td>
                    <td className="p-4">Android 5.0 and above</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Genre & Style</td>
                    <td className="p-4">Pixel-style Psychological Puzzle</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Official Platform</td>
                    <td className="p-4">PC (Steam) & Android Adaptation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

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
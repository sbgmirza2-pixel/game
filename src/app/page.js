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

const SITE_URL = 'https://train45apk.com';

export const metadata = {
  title: 'Train 45 APK Guide: Features, Download & Requirements',
  description:
    'Train 45 APK guide covering gameplay, key features, system requirements, safety tips, and important details about its official Steam version.',
  keywords: [
    'Train 45',
    'Train 45 APK',
    'Train 45 Guide',
    'Train 45 Gameplay',
    'Train 45 System Requirements',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Train 45 APK Guide: Features, Download & Requirements',
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
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <GameInfoSection />
        <FeaturesSection />
        <DownloadGuideSection />
        <SystemRequirementsSection />
        <SafetySection />
        <TipsSection />
        <ProsConsSection />
        <ComparisonSection />
        <FaqPreviewSection />
      </main>
    </div>
  );
}
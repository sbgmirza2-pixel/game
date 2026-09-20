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
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GameInfoSection from './components/GameInfoSection';
import FeaturesSection from './components/FeaturesSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <GameInfoSection />
        <FeaturesSection />
      </main>
    </div>
  );
}
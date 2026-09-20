'use client';
import Link from 'next/link';

export default function ComparisonSection() {
  const games = [
    {
      name: "I'm on Observation Duty",
      desc: 'The game is about observing rooms with cameras and reporting odd changes. It is less about character relationships and more about observation and memory. The main challenge of this game is to notice subtle differences before they become hard to identify.',
    },
    {
      name: 'Anomaly Exit',
      desc: 'It is a psychological horror game with the gameplay of a spot-the-difference game. Players are investigating a train station for anomalies and decide they may leave or return to the train. There is also a single-player and multiplayer mode.',
    },
    {
      name: 'MADiSON',
      desc: 'MADiSON is focused on first-person psychological horror, puzzles, exploration, and survival. It uses an instant camera for solving puzzles and progressing through the story. Its darker atmosphere emphasizes fear over anomaly detection.',
    },
    {
      name: 'Layers of Fear',
      desc: "It is a psychological horror game that focuses on exploring weird places, solving puzzles, and following a scary story. It's about atmosphere and story than finding anomalies like Train45. Changes in surroundings keep the player engaged.",
    },
  ];

  // Smooth scroll to top function
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-[#0c0b09] overflow-hidden">
      
      {/* Background Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-64 bg-[#81755D]/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
        
        {/* Top Section Divider Line */}
        <div className="w-full max-w-xl mx-auto flex items-center justify-center">
          <div 
            aria-hidden="true" 
            className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/30 to-transparent" 
          />
        </div>

        {/* Main Heading & Text with Home Link */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Train 45 VS Other Horror Games
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Here is a comparison of{' '}
            <a 
              href="#"
              onClick={scrollToTop}
              className="text-[#a39478] hover:text-white font-medium underline decoration-[#81755D]/50 underline-offset-4 transition-colors cursor-pointer"
            >
              Train 45 APK
            </a>{' '}
            with other horror games:
          </p>
        </div>

        {/* Comparison List */}
        <div className="space-y-6 sm:space-y-7">
          {games.map((game, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-3.5 sm:gap-4 py-2 border-b border-[#81755D]/10 last:border-none"
            >
              {/* Counter Badge */}
              <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-[#81755D]/20 border border-[#81755D]/40 rounded-md flex items-center justify-center text-[#a39478] font-bold text-xs sm:text-sm group-hover:bg-[#a39478] group-hover:text-[#121110] transition-colors shadow-md">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Game Info */}
              <div className="space-y-1 pt-0.5">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#a39478] transition-colors">
                  {game.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  {game.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Subsection */}
        <div className="space-y-3 pt-6 border-t border-[#81755D]/20">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Conclusion
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Train 45 offers a different gaming experience for those players who like mystery, strange situations, and story-driven gameplay. The setting of a train is a complete environment, and each new section can bring a new feeling or discovery. It also provides players with reasons to stay curious and alert when they move forward.
          </p>
        </div>

      </div>
    </section>
  );
}
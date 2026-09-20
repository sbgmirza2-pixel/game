export default function FeaturesSection() {
  const features = [
    {
      title: 'Anomaly Detection',
      desc: 'Anomaly detection is one of the main key mechanics of Train45. Players explore the train cars and search for strange events. The anomalies are not just a background design; they are an essential part of the progression of the story and can change what happens next. This makes it helpful for players to cover each area carefully.',
    },
    {
      title: 'Train Exploration',
      desc: 'The main thing is discovering a mysterious train. Each section can add new events, characters, and clues. Going from one train car to the next will give you the sensation that something can happen at any moment. The simple setting also makes environmental changes that are more apparent.',
    },
    {
      title: 'Multiple Endings',
      desc: 'Train45 does not have one completely fixed storyline. Your decisions and actions may change relationships and unlock different story endings. This allows players to go back and replay the game once they have completed one route. Another decision can lead to another event or ending.',
    },
    {
      title: 'Character Relationship System',
      desc: 'The game has a relationship and emotion system. Interaction with characters can influence how they feel and unlock new events. The system connects the story to the gameplay. Players have not only to solve puzzles but also to think about how their choices can affect the characters around them.',
    },
    {
      title: 'Gear System',
      desc: 'Train45 also has a gear system. Players can collect items and enhance their investigation skills. According to the official description, some gear can improve perception and investigation speed. Later in the game, more features allow players to discover hidden rules.',
    },
    {
      title: 'Pixel Style Visuals',
      desc: 'Train45 has a unique pixel visual design. The game is a combination of exploration, puzzles, visual novel elements, and a dreamy atmosphere. The supporting visual design fits the mysterious setting, without relying on realistic horror graphics.',
    },
    {
      title: 'Japanese Voice Acting',
      desc: 'The official Steam version is completely recorded in Japanese. It also supports English, Korean, Japanese, Simplified Chinese, and Traditional Chinese voice for its interface and subtitles. The voice adds emotions to the characters that make their conversation natural. It adds strong moments to gameplay.',
    },
    {
      title: 'Single-player Experience',
      desc: 'Train45 is a single-player game. No group play with other players or online competition is required. This allows you to focus on exploration, story choices, puzzles, and character interactions at your own pace. It is a good choice for those players who want to play a game without competition.',
    },
  ];

  return (
    <section className="relative py-10 md:py-14 px-4 max-w-3xl mx-auto overflow-hidden">
      {/* Top Section Divider Line */}
      <div className="w-full max-w-xl mx-auto mb-8 md:mb-12 flex items-center justify-center">
        <div 
          aria-hidden="true" 
          className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/40 to-transparent" 
        />
      </div>

      {/* Main Heading (H2) */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 md:mb-4">
          Key Features of <span className="text-[#81755D]">Train 45 APK</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          Train 45 game is available with several features that make its gameplay more interesting. Here are the key features players can enjoy when they are playing:
        </p>
      </div>

      {/* Timeline Layout with Flex/Relative Binding */}
      <div className="relative space-y-6 md:space-y-8 pl-6 sm:pl-8">
        {/* Continuous Vertical Line */}
        <div 
          aria-hidden="true"
          className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-[#81755D]/30"
        />

        {features.map((item) => (
          <div key={item.title} className="relative group">
            {/* Timeline Dot - Centered on vertical line */}
            <div 
              aria-hidden="true" 
              className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#81755D] ring-4 ring-[#121110] group-hover:scale-125 transition-transform duration-200" 
            />

            {/* Content */}
            <h3 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight group-hover:text-[#81755D] transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
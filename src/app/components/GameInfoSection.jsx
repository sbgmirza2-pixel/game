export default function GameInfoSection() {
  const gameDetails = [
    { label: 'Game Name', value: 'Train 45' },
    { label: 'Developer', value: 'Elniko' },
    { label: 'Publisher', value: 'Mango Party' },
    { label: 'Mode', value: 'Single Player' },
    { label: 'Genre', value: 'Casual' },
    { label: 'Release Date', value: 'June 25, 2026' },
    { label: 'Platform', value: 'Windows | Steam' },
    { label: 'Language', value: 'English, Japanese, Korean, Chinese, Traditional Chinese' },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-[#0c0b09] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#81755D]/10 rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-3xl mx-auto text-center">
        {/* Top Section Divider Line */}
        <div className="w-full max-w-xl mx-auto mb-8 md:mb-10 flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/30 to-transparent" />
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          Game <span className="text-[#a39478]">Information</span>
        </h2>

        {/* Definition List Grid - 8 items perfect 2-column layout */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-left">
          {gameDetails.map((item) => (
            <div
              key={item.label}
              className="relative p-4 rounded-lg bg-[#161412]/90 border border-[#81755D]/20 backdrop-blur-md flex flex-col justify-center transition-all duration-300 hover:border-[#a39478]/50 hover:bg-[#1a1815] shadow-lg group"
            >
              {/* Subtle Corner Highlight */}
              <div aria-hidden="true" className="absolute top-0 left-0 w-1 h-full bg-[#81755D]/40 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity" />

              <dt className="text-xs uppercase tracking-wider font-semibold text-[#a39478] mb-1">
                {item.label}
              </dt>
              <dd className="text-sm sm:text-base font-medium text-white m-0">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

    </section>
  );
}
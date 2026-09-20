export default function TipsSection() {
  const tips = [
    {
      title: 'Pay attention to Details',
      desc: "Don't rush with the train cars. Watch and observe the objects, surroundings, and changes in the environment. Take the time to check before moving because small differences can easily be missed.",
    },
    {
      title: 'Remember previous areas',
      desc: 'Some clues are easier to follow if you remember what a previous train car looked like. Compare the current area with previous areas. It can help you notice changes.',
    },
    {
      title: 'Think Before Choosing',
      desc: "Dialog and interactions can affect relationships and story development. Don't just select options randomly; consider them. Your choices can open different situations. Think about the possible outcome.",
    },
    {
      title: 'Explore Carefully',
      desc: 'New routes and features may be unlocked as you progress. First, look at the available areas, then move forward. Exploring can help you find useful clues and avoid missing something.',
    },
    {
      title: 'Track Items',
      desc: 'The gear system is used for collecting items. Use them wisely when improving your investigation skills. Tracking your available gear can help you decide when an item is useful later in the game.',
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-[#0c0b09] overflow-hidden">
      
      {/* Background Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-64 bg-[#81755D]/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-3xl mx-auto">
        {/* Top Section Divider Line */}
        <div className="w-full max-w-xl mx-auto mb-8 md:mb-12 flex items-center justify-center">
          <div 
            aria-hidden="true" 
            className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/30 to-transparent" 
          />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Tips for New Players of <span className="text-[#a39478]">Train 45 APK</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            If you are new to Train45, a few simple tips can make the gameplay easier:
          </p>
        </div>

        {/* Clean List With Number Badges */}
        <div className="space-y-5 sm:space-y-6">
          {tips.map((item, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-3.5 sm:gap-4 py-2 border-b border-[#81755D]/10 last:border-none"
            >
              {/* Step Number Badge */}
              <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-[#81755D]/20 border border-[#81755D]/40 rounded-md flex items-center justify-center text-[#a39478] font-bold text-xs sm:text-sm group-hover:bg-[#a39478] group-hover:text-[#121110] transition-colors shadow-md">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="space-y-1 pt-0.5">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#a39478] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default function ProsConsSection() {
  const pros = [
    'Interesting gameplay with anomaly detection',
    'Mystery-themed story',
    'Train exploration',
    'Multiple story endings',
    'Character relationship system',
    'Item and equipment mechanics',
    'Single-player experience',
    'Several language options',
  ];

  const cons = [
    'Just for Adult content. Not for younger players',
    'Official Android release is not confirmed',
    'Third-party APK files contain security risks',
    'Some gameplay is dependent on observation and story progression',
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-[#0c0b09] overflow-hidden">
      
      {/* Background Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-64 bg-[#81755D]/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
        
        {/* Top Section Divider Line */}
        <div className="w-full max-w-xl mx-auto flex items-center justify-center">
          <div 
            aria-hidden="true" 
            className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/30 to-transparent" 
          />
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Pros and Cons of <span className="text-[#a39478]">Train 45 APK</span>
          </h2>
        </div>

        {/* Pros & Cons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Pros Column */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2 pb-2 border-b border-[#81755D]/20">
              <span className="w-2.5 h-2.5 rotate-45 bg-emerald-500/80" />
              <span>Pros</span>
            </h3>

            <div className="space-y-2.5">
              {pros.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 py-1.5 group"
                >
                  {/* Checkmark Icon */}
                  <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  
                  <span className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cons Column */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2 pb-2 border-b border-[#81755D]/20">
              <span className="w-2.5 h-2.5 rotate-45 bg-amber-600/80" />
              <span>Cons</span>
            </h3>

            <div className="space-y-2.5">
              {cons.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 py-1.5 group"
                >
                  {/* Cross Icon */}
                  <svg className="w-4 h-4 text-amber-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  
                  <span className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
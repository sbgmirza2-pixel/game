export default function SafetySection() {
  const safetyTips = [
    'Download from a trusted Source.',
    'Check the file before installing it.',
    'Use security software.',
    'Keep your device updated.',
    'Back up your important data.',
    'Check the official version because the game is available on Steam, and the official APK version is not confirmed.',
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-[#0c0b09] overflow-hidden">
      
      {/* Background Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-64 bg-[#81755D]/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
        
        {/* Top Section Divider Line */}
        <div className="w-full max-w-xl mx-auto flex items-center justify-center">
          <div 
            aria-hidden="true" 
            className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/30 to-transparent" 
          />
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Is Train 45 APK <span className="text-[#a39478]">Safe?</span>
          </h2>
        </div>

        {/* Clean Safety Info Paragraphs */}
        <div className="space-y-3 border-l-2 border-[#a39478] pl-4 sm:pl-5">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            The files do not come from the original developer directly. Train45 is marked as Adult only on Steam. It contains mature content such as Sexual content and Violence. All the characters are adults.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            Train45 is not a family game, and it is made for an adult audience.
          </p>
        </div>

        {/* Safety Tips Subsection */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a39478]" />
            <span>Safety Tips</span>
          </h3>

          <div className="space-y-2">
            {safetyTips.map((tip, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 py-2 border-b border-[#81755D]/10 last:border-none group"
              >
                {/* Bullet Diamond Indicator */}
                <span className="shrink-0 w-2 h-2 rotate-45 bg-[#a39478] mt-2 group-hover:bg-white transition-colors" />
                
                {/* Tip Text */}
                <span className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
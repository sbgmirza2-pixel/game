export default function AboutSection() {
  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-[#0c0b09] text-center overflow-hidden">
      
      {/* Seamless Top Soft Blur Gradient (Transition Line Hataney k liye) */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0c0b09] via-[#0c0b09]/80 to-transparent pointer-events-none z-10" 
      />

      {/* Background Glow - Same Tone as Hero */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-48 bg-[#81755D]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Top Section Divider Line */}
        <div className="w-full max-w-xl mx-auto mb-8 md:mb-12 flex items-center justify-center">
          <div 
            aria-hidden="true" 
            className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/30 to-transparent" 
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 md:mb-6 leading-tight">
          What is <span className="text-[#a39478]">Train 45 APK?</span>
        </h2>

        {/* Content Text */}
        <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-3.5 md:space-y-4 max-w-3xl mx-auto font-normal text-left sm:text-center">
          <p className="break-words">
            Train 45 is an anomaly detection and psychological exploration game that is available for PC on Steam. This game is inspired by games like <span className="text-white font-medium">The Exit 8</span>, where players can check train cars and watch for strange changes or odd things.
          </p>
          <p className="break-words">
            Anomaly detection enables players to interact with characters, build relationships, and discover hidden story elements.
          </p>
        </div>

        {/* Important Note Box */}
        <div className="relative mt-8 md:mt-10 p-[1px] rounded-lg overflow-hidden group max-w-2xl mx-auto shadow-2xl">
          <div 
            aria-hidden="true" 
            className="absolute inset-0 bg-gradient-to-r from-[#81755D]/30 via-[#a39478]/50 to-[#81755D]/30 rounded-lg opacity-80" 
          />
          <div className="relative bg-[#161412] rounded-[7px] p-4 sm:p-5 flex items-start sm:items-center justify-start sm:justify-center gap-3 text-[#c9beaa] text-xs sm:text-sm md:text-base italic border border-[#81755D]/20">
            <svg className="w-5 h-5 text-[#a39478] shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-left sm:text-center">
              <strong className="font-semibold text-white not-italic">Note:</strong> There is no official Train 45 mobile or APK version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
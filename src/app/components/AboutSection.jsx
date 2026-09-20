export default function AboutSection() {
  return (
    <section className="relative py-10 md:py-14 px-4 max-w-3xl mx-auto text-center overflow-hidden">
      {/* Top Section Divider Line */}
      <div className="w-full max-w-xl mx-auto mb-8 md:mb-12 flex items-center justify-center">
        <div 
          aria-hidden="true" 
          className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/40 to-transparent" 
        />
      </div>

      {/* Background Soft Glow - Safe Width for Small Screens */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-36 sm:h-48 bg-[#81755D]/10 rounded-full blur-2xl sm:blur-3xl -z-10 pointer-events-none" 
      />

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 md:mb-6 leading-tight">
        What is <span className="text-[#81755D]">Train 45 APK?</span>
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

      {/* Important Note - Sleek Shiny Outline Box */}
      <div className="relative mt-7 md:mt-8 p-[1px] rounded-2xl overflow-hidden group max-w-2xl mx-auto">
        {/* Shiny Animated Outline Border */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-gradient-to-r from-[#81755D]/40 via-amber-200/50 to-[#81755D]/40 rounded-2xl animate-pulse" 
        />

        {/* Inner Content Container */}
        <div className="relative bg-[#1a1815] rounded-[15px] p-3.5 sm:p-4 md:p-5 flex items-start sm:items-center justify-start sm:justify-center gap-2.5 sm:gap-3 text-amber-100/90 text-xs sm:text-sm md:text-base italic">
          <svg className="w-5 h-5 text-[#81755D] shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-left sm:text-center">
            <strong className="font-semibold text-white not-italic">Note:</strong> There is no official Train 45 mobile or APK version.
          </p>
        </div>
      </div>
    </section>
  );
}
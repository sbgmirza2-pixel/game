export default function AboutSection() {
  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-[#0c0b09] text-center overflow-hidden">
      
      {/* Seamless Top Soft Blur Gradient */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0c0b09] via-[#0c0b09]/80 to-transparent pointer-events-none z-10" 
      />

      {/* Background Glow */}
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
        <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal text-left sm:text-center">
          <p className="break-words">
            Train45 is an anomaly detection and psychological exploration game that is available for PC on Steam. This game is inspired by games like <span className="text-white font-medium">The Exit 8</span>, where players can check train cars and watch for strange changes or odd things. Anomaly detection enables players to interact with characters, build relationships, and discover hidden story elements. There is no official Train45 mobile or APK version.
          </p>
        </div>
      </div>
    </section>
  );
}
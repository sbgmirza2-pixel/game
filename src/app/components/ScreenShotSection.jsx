import Image from 'next/image';

export default function ScreenshotSection() {
  const screenshots = [
    { id: 1, src: '/1.webp', alt: 'Train 45 Gameplay Screenshot 1' },
    { id: 2, src: '/2.webp', alt: 'Train 45 Gameplay Screenshot 2' },
    { id: 3, src: '/3.webp', alt: 'Train 45 Gameplay Screenshot 3' },
    { id: 4, src: '/4.webp', alt: 'Train 45 Gameplay Screenshot 4' },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 bg-[#0c0b09] overflow-hidden">
      
      {/* Background Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-64 bg-[#81755D]/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Train 45 APK <span className="text-[#a39478]">Screenshots</span>
          </h2>
        </div>
      </div>

      {/* Wrapper with Edge Fade Mask & Smoke Glow */}
      <div className="relative w-full">
        
        {/* Left Smoke & Fade Overlay */}
        <div 
          aria-hidden="true" 
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-48 bg-gradient-to-r from-[#0c0b09] via-[#0c0b09]/90 to-transparent pointer-events-none z-20" 
        />

        {/* Right Smoke & Fade Overlay */}
        <div 
          aria-hidden="true" 
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-48 bg-gradient-to-l from-[#0c0b09] via-[#0c0b09]/90 to-transparent pointer-events-none z-20" 
        />

        {/* Horizontally Scrollable Container with Mask Fade */}
        <div 
          className="flex gap-5 sm:gap-6 overflow-x-auto px-6 sm:px-16 md:px-24 pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#81755D]/40 scrollbar-track-transparent"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {screenshots.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[320px] sm:min-w-[440px] md:min-w-[540px] flex-shrink-0 snap-center group relative bg-[#161412] border border-[#81755D]/20 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:border-[#a39478]/60 hover:shadow-[0_0_25px_rgba(163,148,120,0.3)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111111]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 440px, 540px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
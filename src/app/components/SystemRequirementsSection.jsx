export default function SystemRequirementsSection() {
  const requirements = [
    { label: 'OS', value: 'Windows 10 64-bit' },
    { label: 'Processor', value: 'Intel Core i5 12th generation or above' },
    { label: 'RAM', value: '4 GB' },
    { label: 'Graphics', value: 'NVIDIA RTX 3050 with Vulkan support' },
    { label: 'Storage', value: '500 MB' },
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
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Train 45 APK <span className="text-[#a39478]">Requirements</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Ensure your system meets these specifications for optimal performance:
          </p>
        </div>

        {/* Requirements Grid - Same Left Alignment */}
        <div className="bg-[#161412]/90 border border-[#81755D]/20 rounded-lg p-3 sm:p-5 backdrop-blur-md shadow-lg divide-y divide-[#81755D]/10">
          {requirements.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 sm:grid-cols-3 py-3 px-3 sm:px-4 hover:bg-[#1a1815] transition-colors rounded-md gap-1 sm:gap-4 items-center group"
            >
              {/* Left Column: Label */}
              <span className="text-xs uppercase tracking-wider font-semibold text-[#a39478] group-hover:text-white transition-colors text-left">
                {item.label}
              </span>
              
              {/* Right Column (2 Spans): Value - Left Aligned */}
              <span className="sm:col-span-2 text-sm sm:text-base font-medium text-white break-words text-left">
                {item.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
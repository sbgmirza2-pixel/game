export default function DownloadGuideSection() {
  const steps = [
    {
      title: 'Check for Official Availability',
      desc: 'Check for an official Android version available before proceeding with any download.',
    },
    {
      title: 'Verify Developer & Version Info',
      desc: 'Check the developer name and version info carefully to ensure authenticity.',
    },
    {
      title: 'Read Page Details',
      desc: 'Read the APK page carefully before downloading it to understand the requirements.',
    },
    {
      title: 'Review App Permissions',
      desc: 'Avoid files that require unnecessary permissions that don’t align with game function.',
    },
    {
      title: 'Scan for Threats',
      desc: 'Scan downloaded files with trusted security software prior to installation.',
    },
    {
      title: 'Keep Security Up to Date',
      desc: 'Keep your Android OS and Google Play Protect up to date for maximum protection.',
    },
    {
      title: 'Avoid Unverified Modified Files',
      desc: 'Don’t install modified files from unknown sources because they claim to be premium or unlocked.',
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
            How to Download <span className="text-[#a39478]">Train 45 APK?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Follow these essential safety steps and guidelines before attempting to download or install the file:
          </p>
        </div>

        {/* Clean List Without Outer Boxes */}
        <div className="space-y-5 sm:space-y-6">
          {steps.map((step, index) => (
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
                  {step.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
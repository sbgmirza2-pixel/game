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
    <section className="relative py-12 px-4 max-w-3xl mx-auto text-center">
      {/* Top Section Divider Line */}
      <div className="w-full max-w-xl mx-auto mb-12 flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/40 to-transparent" />
      </div>

      {/* Background Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#81755D]/10 rounded-full blur-[100px] -z-10 pointer-events-none" 
      />

      {/* Main Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-8">
        Game <span className="text-[#81755D]">Information</span>
      </h2>

      {/* Definition List Layout for Semantic Accessibility */}
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
        {gameDetails.map((item) => (
          <div
            key={item.label}
            className={`p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center transition-all duration-200 hover:border-[#81755D]/50 hover:bg-white/[0.07] ${
              item.label === 'Language' ? 'md:col-span-2' : ''
            }`}
          >
            <dt className="text-xs uppercase tracking-wider font-semibold text-[#81755D] mb-1">
              {item.label}
            </dt>
            <dd className="text-base font-medium text-white m-0">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
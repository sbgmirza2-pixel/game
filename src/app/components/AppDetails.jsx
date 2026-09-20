export default function AppDetails({ data }) {
  if (!data) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 sm:py-10 space-y-8 sm:space-y-10 overflow-hidden">
      {/* Overview Table */}
      <div className="bg-[#1a1815] rounded-2xl p-5 sm:p-6 border border-white/10 backdrop-blur-md shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 pb-3 border-b border-[#81755D]/30 tracking-tight">
          Game Overview & Specifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5 gap-1 sm:gap-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#81755D]">Developer</span>
            <span className="font-medium text-white text-sm sm:text-base break-words">{data.developer}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5 gap-1 sm:gap-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#81755D]">Publisher</span>
            <span className="font-medium text-white text-sm sm:text-base break-words">{data.publisher}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5 gap-1 sm:gap-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#81755D]">Release Date</span>
            <span className="font-medium text-white text-sm sm:text-base break-words">{data.releaseDate}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5 gap-1 sm:gap-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#81755D]">Mode</span>
            <span className="font-medium text-white text-sm sm:text-base break-words">{data.mode}</span>
          </div>
        </div>
      </div>

      {/* Features List */}
      {data.features && data.features.length > 0 && (
        <div id="features" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {data.features.map((item, idx) => (
              <div 
                key={item.title || idx} 
                className="bg-[#1a1815] p-4 sm:p-5 rounded-2xl border-l-4 border-[#81755D] border-y border-r border-white/10 shadow-md transition-all duration-200 hover:border-r-[#81755D]/50 hover:bg-white/[0.04]"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
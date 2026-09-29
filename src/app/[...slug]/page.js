'use client';

import Link from 'next/link';

export default function CatchAll404() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden bg-[#0c0b09]">
      {/* Background Pattern & Glow Effect matching Hero */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 w-full h-full bg-[radial-gradient(#81755d_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)]" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-b from-[#81755D]/30 via-[#81755D]/15 to-transparent blur-2xl pointer-events-none" 
      />

      {/* 404 Content Container */}
      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Error Code Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-lg bg-[#81755D]/15 border border-[#81755D]/40 text-[#a39478] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-inner">
          <span>Error Code: 404</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none mb-4 drop-shadow-md">
          Lost in <span className="text-[#a39478]">Transit</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto font-normal mb-8">
          Looks like this train took a wrong track or the page you are looking for has been moved to another section.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#81755D] via-[#73664f] to-[#635041] hover:brightness-110 shadow-[0_4px_25px_rgba(129,117,93,0.4)] border border-white/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          {/* Download APK Quick Link */}
          <Link
            href="/download"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base text-[#e2d9c8] bg-[#1a1815]/80 hover:bg-[#26231e] border border-[#81755D]/40 hover:border-[#81755D] shadow-lg backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
          >
            <svg className="w-5 h-5 text-[#a39478]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Download APK</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
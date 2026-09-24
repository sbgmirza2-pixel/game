'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Path verify kar lein

export default function DownloadPage() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [timeLeft]);

  const handleDownload = () => {
    window.location.href = '/train-45.apk'; // Download path update karein
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen pt-28 md:pt-36 pb-16 px-4 bg-[#0c0b09] text-gray-200 overflow-hidden">
        {/* Background Dot Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-[radial-gradient(#81755d_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)]"
        />

        {/* Ambient Glow Lights */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#81755D]/15 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          
          {/* Header Section */}
          <header className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Train 45 <span className="text-[#a39478]">Download</span>
            </h2>

            {/* Gradient Line right under the Heading */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#81755D] via-[#a39478] to-transparent rounded-full" />

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
              Train 45 is a pixel-style puzzle game set on a mysterious endless train. You explore different carriages, look for strange changes, and make careful choices as the story moves forward.
            </p>
          </header>

          {/* High-Tech Radar Scanner Download Section */}
          <section className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
            <p className="text-gray-300 text-sm sm:text-base text-center max-w-lg mx-auto">
              The timer will finish in a few seconds. Tap the download button below once it ends to start your Train 45 download.
            </p>

            <div className="flex flex-col items-center justify-center pt-2 min-h-[140px]">
              {!isReady ? (
                <div className="relative group flex flex-col items-center justify-center p-6 bg-[#161411] border border-[#81755D]/40 rounded-2xl w-full max-w-sm shadow-[0_0_25px_rgba(129,117,93,0.15)] overflow-hidden">
                  
                  {/* Background Scanner Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#81755D]/10 to-transparent animate-[shimmer_2s_infinite]" />

                  {/* Circular Radar Pulse */}
                  <div className="relative flex items-center justify-center w-20 h-20 mb-3">
                    <div className="absolute inset-0 rounded-full border border-[#81755D]/30 animate-ping opacity-75" />
                    <div className="absolute inset-2 rounded-full border border-t-[#a39478] border-r-transparent border-b-[#81755D]/20 border-l-transparent animate-spin" />
                    
                    {/* Digit Container */}
                    <div className="w-14 h-14 rounded-full bg-[#0c0b09] border border-[#a39478]/50 flex items-center justify-center shadow-inner">
                      <span className="text-2xl font-black text-[#a39478] font-mono tracking-tighter">
                        {timeLeft}s
                      </span>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#a39478] animate-pulse" />
                    <span>Verifying File Link...</span>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleDownload}
                  className="bg-[#a39478] hover:bg-[#8e7e63] text-black font-extrabold py-4 px-10 rounded-xl transition-all shadow-[0_0_25px_rgba(163,148,120,0.35)] transform hover:scale-105 active:scale-95 text-base sm:text-lg flex items-center gap-3 cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Train 45 APK
                </button>
              )}
            </div>
          </section>

          {/* Before You Download Section */}
          <section className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a39478]" />
              Before You Download Train 45
            </h2>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base list-disc list-inside leading-relaxed">
              <li>Make sure your device has enough free storage for the game file.</li>
              <li>Download the file from a trusted source.</li>
              <li>Check that the file is complete before opening it.</li>
              <li>
                If you are using an Android APK, check the Android requirement shown with that file.
              </li>
              <li>
                Keep your device connected to a stable internet connection during the download.
              </li>
            </ul>
          </section>

          {/* How to Download Guide */}
          <section className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a39478]" />
              How to Download Train 45
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Download the game file below and follow the simple steps.
            </p>
            <ol className="space-y-3 text-gray-300 text-sm sm:text-base list-decimal list-inside leading-relaxed">
              <li>Scroll down to the Download section.</li>
              <li>Wait for the timer to finish.</li>
              <li>Tap the Download button.</li>
              <li>Wait for the game file to finish downloading.</li>
              <li>Open your Downloads folder.</li>
              <li>
                Find the Train 45 file and check that the download is complete.
              </li>
            </ol>
          </section>

        </div>
      </main>
    </>
  );
}
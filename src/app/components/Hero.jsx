'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  // Avoid hydration mismatch by reading location after mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleCopy = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      bg: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.228-1.157z"/>
        </svg>
      )
    },
    {
      name: 'Twitter (X)',
      bg: 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border-sky-500/20',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      bg: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/20',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      bg: 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border-cyan-500/20',
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.67-.55.83-1.12.52l-3.01-2.22-1.45 1.4c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.65-.64.13-.95l11.57-4.46c.53-.19 1 .13.89.92z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full pt-28 md:pt-36 pb-12 md:pb-16 px-4 overflow-hidden">
      {/* --- ULTRA LIGHT & SUBTLE BACKGROUND EFFECTS --- */}
      {/* 1. Very Fine Light Grid Pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#81755d08_1px,transparent_1px),linear-gradient(to_bottom,#81755d08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" 
      />

      {/* 2. Soft Ambient Radial Glow (Very Low Opacity & Deep Blur) */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1000px] h-[450px] bg-[#81755D]/08 rounded-full blur-[180px] pointer-events-none" 
      />

      {/* 3. Tiny Soft Warm Accent Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[500px] h-[250px] bg-amber-500/05 rounded-full blur-[140px] pointer-events-none" 
      />
      {/* --- END BACKGROUND EFFECTS --- */}

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5 md:mb-6">
          Train 45 <span className="text-[#81755D]">APK</span>
        </h1>

        {/* Paragraph Text */}
        <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-3 md:space-y-4 max-w-3xl mx-auto font-normal">
          <p>
            Train 45 is a strange journey for players, where the train does not look normal at first. They walk through the different sections, they look around, and notice anything unusual. The game blends mystery, exploration, and anomaly detection, but it’s the hidden storylines and character interaction that make the journey interesting. Players discover items while exploring the train.
          </p>
          <p className="text-amber-100/80 text-xs sm:text-sm md:text-base italic">
            In this article, we will explore Train 45 gameplay, key features, system requirements, pros and cons, and other important things players should know before they start playing.
          </p>
        </div>

        {/* Rating Stars Badge */}
        <div className="pt-6 sm:pt-7 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1815]/80 border border-amber-500/20 backdrop-blur-md shadow-md">
            <div className="flex items-center text-amber-400 gap-0.5 text-xs sm:text-sm">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-amber-400/60">★</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">4.8</span>
            <span className="text-xs text-gray-400 font-normal">(1,240+ Reviews)</span>
          </div>
        </div>

        {/* Center Action Buttons */}
        <div className="pt-5 md:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <Link
            href="#download"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#81755D] to-[#635041] hover:brightness-110 shadow-lg border border-white/20 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5"
          >
            <span>Download APK Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>

          {/* Share Button Trigger */}
          <button
            onClick={() => setIsShareOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-amber-100/90 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 text-[#81755D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* MODERN GLASS SHARE MODAL */}
      {isShareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsShareOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#635041]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 sm:p-6 text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Share App</span>
              </h3>
              <button
                onClick={() => setIsShareOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 p-3 rounded-2xl border transition-all ${item.bg}`}
                >
                  {item.icon}
                  <span className="text-xs sm:text-sm font-semibold text-white truncate">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Copy Link Input Bar */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Page Link</label>
              <div className="flex items-center gap-2 p-1.5 bg-black/40 border border-white/10 rounded-2xl">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="w-full bg-transparent px-2.5 text-xs text-gray-300 outline-none truncate"
                />
                <button
                  onClick={handleCopy}
                  className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    copied 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-[#81755D] hover:bg-[#81755D]/80 text-white'
                  }`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
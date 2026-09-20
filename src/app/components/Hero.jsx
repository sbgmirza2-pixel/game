'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

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
      bg: 'hover:bg-emerald-500/15 hover:border-emerald-500/30 text-emerald-400',
      iconBg: 'bg-emerald-500/10 text-emerald-400',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.228-1.157z"/>
        </svg>
      )
    },
    {
      name: 'Twitter (X)',
      bg: 'hover:bg-sky-500/15 hover:border-sky-500/30 text-sky-400',
      iconBg: 'bg-sky-500/10 text-sky-400',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      bg: 'hover:bg-blue-500/15 hover:border-blue-500/30 text-blue-400',
      iconBg: 'bg-blue-500/10 text-blue-400',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      bg: 'hover:bg-cyan-500/15 hover:border-cyan-500/30 text-cyan-400',
      iconBg: 'bg-cyan-500/10 text-cyan-400',
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.67-.55.83-1.12.52l-3.01-2.22-1.45 1.4c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.65-.64.13-.95l11.57-4.46c.53-.19 1 .13.89.92z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full pt-28 md:pt-36 pb-12 md:pb-16 px-4 overflow-hidden bg-[#0c0b09]">
      {/* --- SOFT & SUBTLE DOTS BACKGROUND WITH GLOW LIGHTS --- */}
      
      {/* 1. Subtle, Soft-Tone Dot Pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 w-full h-full bg-[radial-gradient(#81755d_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)]" 
      />

      {/* 2. Top-Center Ambient Glow Light */}
      <div 
        aria-hidden="true" 
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-b from-[#81755D]/30 via-[#81755D]/15 to-transparent blur-2xl pointer-events-none" 
      />

      {/* 3. Side Ambient Light Spheres */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -left-16 w-96 h-96 bg-[#81755D]/15 rounded-full blur-[100px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 -right-16 w-96 h-96 bg-[#81755D]/20 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5 md:mb-6 drop-shadow-md">
          Train 45 <span className="text-[#a39478]">APK</span>
        </h1>

        <div className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
          <p>
            Train 45 is a strange journey for players, where the train does not look normal at first. They walk through the different sections, they look around, and notice anything unusual. The game blends mystery, exploration, and anomaly detection, but it’s the hidden storylines and character interaction that make the journey interesting. Players discover items while exploring the train. In this article, we will explore Train 45 gameplay, key features, system requirements, pros and cons, and other important things players should know before they start playing.
          </p>
        </div>

        {/* --- MAIN DOWNLOAD CTA BUTTON (FIRST / TOP) --- */}
        <div className="pt-8 flex justify-center">
          <Link
            href="#download"
            className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#81755D] via-[#73664f] to-[#635041] hover:brightness-110 shadow-[0_4px_30px_rgba(129,117,93,0.45)] border border-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
          >
            <span>Download APK Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>

        {/* --- RATING & SHARE BAR (MATCHING THEME) --- */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex items-center gap-3 p-1.5 pl-4 bg-[#161412]/95 border border-[#81755D]/40 rounded-lg backdrop-blur-xl shadow-xl">
            {/* Rating Section */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#a39478] text-xs sm:text-sm">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#a39478] drop-shadow-[0_0_4px_rgba(163,148,120,0.4)]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 fill-[#81755D]/30" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <span className="font-bold text-white text-xs sm:text-sm">4.8</span>
              <span className="text-gray-400 text-xs hidden sm:inline">(1,240+ Reviews)</span>
            </div>

            {/* Separator Divider */}
            <div className="w-[1px] h-5 bg-white/15" />

            {/* Share Button Trigger */}
            <button
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#81755D]/20 hover:bg-[#81755D]/35 text-[#c9beaa] hover:text-white border border-[#81755D]/40 rounded text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- SHARP GLASS SHARE MODAL --- */}
      {isShareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={() => setIsShareOpen(false)}
          />

          <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#1d1a16] border border-[#81755D]/30 rounded-xl p-5 sm:p-6 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <svg className="w-4 h-4 text-[#a39478]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share App</span>
              </h3>
              <button
                onClick={() => setIsShareOpen(false)}
                className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white text-xs transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 p-2.5 rounded-lg border border-white/10 bg-white/[0.03] transition-all hover:scale-[1.01] active:scale-95 ${item.bg}`}
                >
                  <div className={`p-1.5 rounded ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-200 truncate">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Copy Link Input Bar */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Page Link</label>
              <div className="flex items-center gap-2 p-1 bg-black/70 border border-[#81755D]/30 rounded-lg">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="w-full bg-transparent px-2 text-xs text-gray-300 outline-none truncate font-mono"
                />
                <button
                  onClick={handleCopy}
                  className={`shrink-0 px-3 py-2 rounded text-xs font-bold transition-all ${
                    copied 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-[#81755D] hover:bg-[#93866f] text-white'
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
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  // 3x3 Grid Social Platforms (Brand Colors & Modern Icons)
  const socialLinks = [
    {
      name: 'LinkedIn',
      bgColor: 'bg-[#0077b5]',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      bgColor: 'bg-[#1877f2]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'X / Twitter',
      bgColor: 'bg-black',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      bgColor: 'bg-[#25D366]',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 6.007L0 24l6.291-1.65a11.862 11.862 0 005.753 1.485h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.174-1.238-6.158-3.483-8.403z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      bgColor: 'bg-[#2AABEE]',
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: 'Reddit',
      bgColor: 'bg-[#FF4500]',
      href: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.562-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-4.566 3.868a.322.322 0 0 0-.228.094.321.321 0 0 0 0 .455c.662.663 1.831.848 2.044.848.213 0 1.383-.185 2.045-.848a.32.32 0 0 0 0-.455.322.322 0 0 0-.455 0c-.417.417-1.245.586-1.59.586-.344 0-1.172-.169-1.589-.586a.32.32 0 0 0-.227-.094z"/>
        </svg>
      )
    },
    {
      name: 'Pinterest',
      bgColor: 'bg-[#E60023]',
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/>
        </svg>
      )
    },
    {
      name: 'Tumblr',
      bgColor: 'bg-[#001935]',
      href: `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M14.563 24c-5.093 0-7.09-3.576-7.09-6.68 0-3.084.008-6.837.008-6.837H5.21V7.126s2.857-.604 3.734-2.834c.421-1.07.573-2.301.586-4.292h3.948v6.49h4.379v3.99h-4.379s-.01 3.25-.01 5.922c0 1.832.793 2.609 2.38 2.609 1.05 0 2.21-.406 2.21-.406l.89 3.821s-1.884.574-4.365.574z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      bgColor: 'bg-[#555048]',
      href: `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-6 h-6 fill-none stroke-white" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full pt-28 md:pt-36 pb-12 md:pb-16 px-4 overflow-hidden bg-[#0c0b09]">
      {/* Background Dot Pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 w-full h-full bg-[radial-gradient(#81755d_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)]" 
      />

      {/* Ambient Glow Lights */}
      <div 
        aria-hidden="true" 
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-b from-[#81755D]/30 via-[#81755D]/15 to-transparent blur-2xl pointer-events-none" 
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5 md:mb-6 drop-shadow-md">
          Train 45 <span className="text-[#a39478]">APK</span>
        </h1>

        <div className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
          <p>
            Train 45 is a strange journey for players, where the train does not look normal at first. They walk through the different sections, they look around, and notice anything unusual. The game blends mystery, exploration, and anomaly detection, but it’s the hidden storylines and character interaction that make the journey interesting. Players discover items while exploring the train. In this article, we will explore Train 45 gameplay, key features, system requirements, pros and cons, and other important things players should know before they start playing.
          </p>
        </div>

        {/* Download Button */}
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

        {/* Rating & Share Button Row */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex items-center gap-3 p-1.5 pl-4 bg-[#161412]/95 border border-[#81755D]/40 rounded-lg backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs sm:text-sm">4.8</span>
              <span className="text-gray-400 text-xs hidden sm:inline">(1,240+ Reviews)</span>
            </div>

            <div className="w-[1px] h-5 bg-white/15" />

            {/* Share Trigger Button */}
            <button
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#81755D]/20 hover:bg-[#81755D]/35 text-[#c9beaa] hover:text-white border border-[#81755D]/40 rounded text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>SHARE</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- SHARE MODAL WITH THEME MATCHED LEFT BORDER & DOT --- */}
      {isShareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-all duration-300"
            onClick={() => setIsShareOpen(false)}
          />

          {/* Modal Container: Border accent matching theme (#a39478) */}
          <div className="relative z-10 w-full max-w-[310px] sm:max-w-[340px] bg-[#12110e] border border-[#81755D]/40 border-l-4 border-l-[#a39478] rounded-r-xl rounded-l-sm p-4 shadow-[0_0_50px_rgba(0,0,0,0.95)]">
            
            {/* Header: Theme Matched Dot + SHARE + Close Button */}
            <div className="flex items-center justify-between border-b border-[#81755D]/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a39478] animate-pulse" />
                <h3 className="text-sm font-black tracking-widest text-white uppercase">
                  SHARE
                </h3>
              </div>

              <button
                onClick={() => setIsShareOpen(false)}
                className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all active:scale-95 text-xs font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* 3x3 Grid Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className={`flex items-center justify-center aspect-square rounded-lg ${item.bgColor} border border-white/10 shadow-md hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-200`}
                >
                  {item.icon}
                </a>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
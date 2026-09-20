'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-2.5 sm:top-4 left-0 right-0 z-50 px-2.5 sm:px-4 w-full">
      <header className="max-w-5xl mx-auto backdrop-blur-xl bg-[#635041]/90 border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300">
        <div className="px-3 sm:px-5 h-14 sm:h-16 flex items-center justify-between gap-2">
          
          {/* Left: Brand Logo with Distinct Visible Theme Outline */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-[#121110] border-2 border-[#81755D] shadow-[0_0_12px_rgba(129,117,93,0.5)] group-hover:border-amber-200 group-hover:shadow-[0_0_18px_rgba(253,230,138,0.6)] group-hover:scale-105 transition-all duration-300 shrink-0">
              <Image 
                src="/logo.webp" 
                alt="Train 45 Logo" 
                width={40} 
                height={40} 
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Nav Pills */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#81755D]/20 p-1.5 rounded-xl border border-white/5">
            <Link 
              href="/" 
              className="px-5 py-2 text-sm md:text-base font-semibold text-white rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              href="#blog" 
              className="px-5 py-2 text-sm md:text-base font-semibold text-amber-100/80 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Blog
            </Link>
            <Link 
              href="#faqs" 
              className="px-5 py-2 text-sm md:text-base font-semibold text-amber-100/80 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              FAQs
            </Link>
          </nav>

          {/* Right: Download Button & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <Link
              href="#download"
              className="relative group overflow-hidden rounded-xl px-3 sm:px-5 py-2 font-bold text-[11px] sm:text-xs text-white bg-gradient-to-r from-[#81755D] to-[#635041] border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1 sm:gap-2 tracking-wider uppercase">
                Download
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-xl text-white hover:bg-white/10 transition-colors border border-white/10 shrink-0"
              aria-label="Toggle Navigation"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2 bg-[#635041]/95 rounded-b-2xl">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-semibold text-white rounded-lg hover:bg-white/10 transition-all"
            >
              Home
            </Link>
            <Link 
              href="#blog" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-semibold text-amber-100/80 hover:text-white rounded-lg hover:bg-white/10 transition-all"
            >
              Blog
            </Link>
            <Link 
              href="#faqs" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-semibold text-amber-100/80 hover:text-white rounded-lg hover:bg-white/10 transition-all"
            >
              FAQs
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
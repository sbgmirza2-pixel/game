'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll position check karne ke liye
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Top par smooth scroll karne ke liye
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#161412] border border-[#81755D]/40 text-[#a39478] hover:text-white hover:bg-[#81755D] hover:border-[#a39478] shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95 group"
    >
      {/* Up Arrow Icon */}
      <svg 
        className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}
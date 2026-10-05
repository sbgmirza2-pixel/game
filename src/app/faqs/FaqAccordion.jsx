'use client';

import { useState } from 'react';

export default function FaqAccordion({ allFaqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {allFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="bg-[#161412]/90 border border-[#81755D]/20 rounded-lg overflow-hidden backdrop-blur-md transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#1a1815] transition-colors"
            >
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                {faq.q}
              </span>
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#81755D]/20 border border-[#81755D]/40 flex items-center justify-center text-[#a39478] text-sm font-bold">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-5 sm:px-5 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-[#81755D]/10 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FaqPreviewSection() {
  const [openIndex, setOpenIndex] = useState(0); // Pehla FAQ open rahega

  const faqs = [
    {
      q: 'Is Train 45 beginner-friendly?',
      a: 'Yes, beginners can play Train 45. The gameplay is about watching, explore, and make thoughtful decisions. Players can learn the mechanics as they proceed.',
    },
    {
      q: 'How long does it take to complete Train 45?',
      a: 'Play time depends on how quickly you explore the train and how many story paths you find. Players who explore more may take longer to find different events.',
    },
    {
      q: 'Can I replay Train 45 after I have completed it?',
      a: 'Yes, you can replay the game. It is useful if you want to see different results. With your choice, you will see events or storylines you didn’t experience during your first playthrough.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-[#0c0b09] overflow-hidden">
      
      {/* Background Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-64 bg-[#81755D]/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
        
        {/* Top Section Divider Line */}
        <div className="w-full max-w-xl mx-auto flex items-center justify-center">
          <div 
            aria-hidden="true" 
            className="h-px w-full bg-gradient-to-r from-transparent via-[#81755D]/30 to-transparent" 
          />
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Frequently Asked <span className="text-[#a39478]">Questions</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Got questions about Train 45 APK? Here are some quick answers:
          </p>
        </div>

        {/* 3 FAQs Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-[#161412]/90 border border-[#81755D]/20 rounded-lg overflow-hidden backdrop-blur-md transition-all duration-300"
              >
                <button
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

        {/* View All FAQs Button (Links to /faqs page) */}
        <div className="text-center pt-2">
          <Link 
            href="/faqs" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#81755D]/20 border border-[#81755D]/40 hover:border-[#a39478] hover:bg-[#a39478] hover:text-[#0c0b09] text-[#a39478] font-bold text-sm sm:text-base rounded-md transition-all duration-300 shadow-md group"
          >
            <span>View All FAQs</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
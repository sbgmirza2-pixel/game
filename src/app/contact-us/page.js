import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Contact Us | Train 45 APK Guide & Information',
  description:
    'Have a question, suggestion, or concern? Contact us about game information, guides, corrections, broken links, or other website-related matters.',
};

export default function ContactUs() {
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
          
          {/* Page Header */}
          <header className="text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Contact <span className="text-[#a39478]">Us</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#81755D] to-transparent mx-auto rounded-full" />
          </header>

          {/* Content Box */}
          <article className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8 leading-relaxed">
            
            {/* Intro Section */}
            <section className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                Have a question, suggestion, or concern? We are happy to hear from you.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                You can contact us if you notice incorrect information, find a broken link, want to suggest a new topic, or have another question about our content.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* You Can Contact Us About */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                You Can Contact Us About
              </h2>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Incorrect or outdated information',
                  'Game guide suggestions',
                  'Broken or incorrect links',
                  'Download-related concerns',
                  'Copyright questions',
                  'General feedback',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[#1a1815]/60 border border-[#81755D]/20 rounded-lg text-sm sm:text-base text-gray-300"
                  >
                    <span className="text-[#a39478] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-white/10" />

            {/* How to Contact Us */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                How to Contact Us
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Send your message through the contact method provided on this website.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Try to include the page name and a short explanation of your issue. This helps us understand your message and makes it easier to respond.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We check incoming messages and try to reply as soon as possible.
              </p>
              
              <p className="text-[#a39478] text-sm sm:text-base font-medium pt-2">
                Thank you for your feedback and support.
              </p>
            </section>

          </article>
        </div>
      </main>
    </>
  );
}
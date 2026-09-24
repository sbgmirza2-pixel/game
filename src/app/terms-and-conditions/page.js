import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Terms & Conditions | Train 45 APK Guide & Information',
  description:
    'Read the Terms and Conditions for using our website, including game content, guides, downloads, external links, and general user responsibilities.',
};

export default function TermsAndConditions() {
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
              Terms & <span className="text-[#a39478]">Conditions</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#81755D] to-transparent mx-auto rounded-full" />
          </header>

          {/* Content Box */}
          <article className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8 leading-relaxed">
            
            {/* Intro Section */}
            <section className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                By using this website, you agree to follow these Terms and Conditions. If you do not agree with these terms, please stop using the website.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Website Content */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Website Content
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                The content published on this website is provided for general informational purposes.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We try to keep our information useful and accurate, but we cannot guarantee that every detail will always be complete, current, or error-free.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We may update, change, or remove content when needed.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Game Information */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Game Information
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Our website provides game information, guides, walkthroughs, tips, and other related content.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Game details such as versions, features, requirements, and availability can change over time. Users should check relevant information before downloading or using any game or related file.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Downloads */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Downloads
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Users are responsible for checking downloaded files before opening or installing them.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                You should also make sure that any file you use is suitable for your device and comes from a source you trust.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Third-Party Links */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Third-Party Links
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Our website may contain links to third-party websites.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We do not control these websites and are not responsible for their content, availability, policies, or services.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* User Responsibility */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                User Responsibility
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                You agree to use this website for lawful purposes.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                You should not misuse the website, attempt to damage its services, or use its content for illegal activities.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Intellectual Property
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Original text, graphics, designs, and other content published on this website may be protected by applicable intellectual property laws.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Do not copy or republish our original content without permission.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Changes to These Terms */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Changes to These Terms
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                We may update these Terms and Conditions when necessary. Any changes will appear on this page.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Contact
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                If you have questions about these Terms and Conditions, please contact us through our{' '}
                <Link href="/contact-us" className="text-[#a39478] hover:underline font-semibold">
                  Contact Us page
                </Link>.
              </p>
            </section>

          </article>
        </div>
      </main>
    </>
  );
}
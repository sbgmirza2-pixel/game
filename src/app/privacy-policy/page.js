import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Privacy Policy | Train 45 APK Guide & Information',
  description:
    'Read our Privacy Policy to understand how visitor information, cookies, analytics, advertising services, and third-party links may be handled.',
};

export default function PrivacyPolicy() {
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
              Privacy <span className="text-[#a39478]">Policy</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#81755D] to-transparent mx-auto rounded-full" />
          </header>

          {/* Content Box */}
          <article className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8 leading-relaxed">
            
            {/* Intro Section */}
            <section className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                Your privacy is important to us. This Privacy Policy explains how information may be collected and used when you visit this website.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Information We Collect
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                You can browse most of our website without providing personal information.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Some basic information may be collected automatically when you visit, such as your browser type, device information, pages viewed, and general website usage.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                This information can help us understand how visitors use the website and improve our content.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Cookies */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Cookies
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                This website may use cookies to improve your browsing experience.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Cookies are small files stored on your device by your web browser. They can help with website functions, preferences, analytics, and advertising services.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                You can manage or disable cookies through your browser settings. Some parts of the website may not work as expected if cookies are disabled.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Analytics and Advertising */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Analytics and Advertising
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                We may use third-party analytics or advertising services on the website. These services may use cookies or similar technologies to collect information about website visits.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Each third-party service may have its own privacy policy and data practices.
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
                Some pages may contain links to external websites. We do not control these websites or their privacy practices.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We recommend checking the privacy policy of any third-party website before using it.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Children's Privacy */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Children's Privacy
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                We do not knowingly collect personal information from children.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                If you believe a child has provided personal information through this website, please{' '}
                <Link href="/contact-us" className="text-[#a39478] hover:underline font-semibold">
                  contact us
                </Link>.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Changes to This Policy */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Changes to This Policy
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                We may update this Privacy Policy from time to time. Any changes will be published on this page.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Contact Us */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Contact Us
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                If you have questions about this Privacy Policy, please contact us through our{' '}
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
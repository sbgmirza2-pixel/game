import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Disclaimer | Train 45 APK Guide & Information',
  description:
    'Read our Disclaimer to understand the limits of our game information, guides, downloads, third-party links, and other website content.',
};

export default function Disclaimer() {
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
              <span className="text-[#a39478]">Disclaimer</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#81755D] to-transparent mx-auto rounded-full" />
          </header>

          {/* Content Box */}
          <article className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8 leading-relaxed">
            
            {/* Intro Section */}
            <section className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                The information provided on this website is for general informational purposes only.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We try to provide useful and accurate information, but we cannot guarantee that all content will always be complete, accurate, or up to date.
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
                Game versions, features, requirements, prices, availability, and other details can change over time.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Some information may become outdated after publication. We may update our articles when new information becomes available.
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
                We provide download information and guides to help users understand the process.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Before downloading or installing any file, users should check the source, file compatibility, and security of the file.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Users are responsible for the files they download and use on their devices.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Third-Party Websites */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Third-Party Websites
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Our website may contain links to third-party websites and services.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We do not control these websites and are not responsible for their content, availability, security, or privacy practices.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Users should review the policies of third-party websites before using them.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* No Guarantee */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                No Guarantee
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                We do not guarantee that every game, file, link, or service mentioned on this website will work on every device.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Users should check the available requirements before downloading or installing anything.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* Content Changes */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Content Changes
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                We may update, change, or remove website content at any time without prior notice.
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
                If you find incorrect information or have a concern about any content, please contact us through our{' '}
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
import Link from 'next/link';
import Navbar from '../components/Navbar';


export const metadata = {
  title: 'About Us | Train 45 APK Guide & Information',
  description: 'Learn more about our website, the game information we provide, and how we help players find useful guides, tips, and download details.',
};

export default function AboutUs() {
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
              About <span className="text-[#a39478]">Us</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#81755D] to-transparent mx-auto rounded-full" />
          </header>

          {/* Content Box */}
          <article className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8 leading-relaxed">
            
            {/* Intro Section */}
            <section className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                Welcome to our website, where we share simple and useful information about games, guides, and related downloads.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Our goal is to help players find clear information without having to search through many different pages. We cover game details, gameplay guides, walkthroughs, tips, endings, and other useful topics.
              </p>
            </section>

            <hr className="border-white/10" />

            {/* What We Provide Section */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                What We Provide
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Our content focuses on useful game information that players may need before or during their playthrough. This can include gameplay details, guides, anomaly lists, walkthroughs, ending guides, download information, and installation help.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We try to keep our articles simple and easy to follow. Our aim is to give readers the information they need without adding unnecessary details.
              </p>
              <div className="pt-2">
                <p className="text-xs sm:text-sm text-gray-400">
                  Looking for the direct download link? Check out our homepage for{' '}
                  <Link href="/" className="text-[#a39478] hover:underline font-semibold">
                    Train 45 APK
                  </Link>.
                </p>
              </div>
            </section>

            <hr className="border-white/10" />

            {/* Our Goal Section */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a39478]" />
                Our Goal
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Our main goal is to create a helpful place for players who want quick and clear game information.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                We also work to keep our content updated when important game details change. If you find something that needs an update or correction, you can{' '}
                <Link href="/contact-us" className="text-[#a39478] hover:underline font-semibold">
                  contact us
                </Link>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base font-medium pt-2">
                Thank you for visiting our website.
              </p>
            </section>

          </article>
        </div>
      </main>

      
    </>
  );
}
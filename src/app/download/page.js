import Navbar from '../components/Navbar';
import Link from 'next/link';
import DownloadTimer from '.DownloadTimer'; // Client component import
const SITE_URL = 'https://train45apk.com';
// SEO Metadata including Canonical Tag
export const metadata = {
  title: 'Download Train 45 APK - Train 45 Game',
  description: 'Download Train 45 and enter a mysterious train filled with strange events, hidden clues, and unexpected moments. Get the game with simple steps.',
  alternates: {
    canonical: `${SITE_URL}/download`
  },
};

export default function DownloadPage() {
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
          
          {/* Header Section */}
          <header className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Train 45 <span className="text-[#a39478]">Download</span>
            </h2>

            {/* Gradient Line right under the Heading */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#81755D] via-[#a39478] to-transparent rounded-full" />

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
              <Link href="/" className="text-[#81755D] font-semibold hover:underline">
                Train 45
              </Link>{' '}
              is a pixel-style puzzle game set on a mysterious endless train. You explore different carriages, look for strange changes, and make careful choices as the story moves forward.
            </p>
          </header>

          {/* High-Tech Radar Scanner Download Section (Client Component) */}
          <DownloadTimer />

          {/* Before You Download Section */}
          <section className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a39478]" />
              Before You Download Train 45
            </h2>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base list-disc list-inside leading-relaxed">
              <li>Make sure your device has enough free storage for the game file.</li>
              <li>Download the file from a trusted source.</li>
              <li>Check that the file is complete before opening it.</li>
              <li>
                If you are using an Android APK, check the Android requirement shown with that file.
              </li>
              <li>
                Keep your device connected to a stable internet connection during the download.
              </li>
            </ul>
          </section>

          {/* How to Download Guide */}
          <section className="bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a39478]" />
              How to Download Train 45
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Download the game file below and follow the simple steps.
            </p>
            <ol className="space-y-3 text-gray-300 text-sm sm:text-base list-decimal list-inside leading-relaxed">
              <li>Scroll down to the Download section.</li>
              <li>Wait for the timer to finish.</li>
              <li>Tap the Download button.</li>
              <li>Wait for the game file to finish downloading.</li>
              <li>Open your Downloads folder.</li>
              <li>
                Find the Train 45 file and check that the download is complete.
              </li>
            </ol>
          </section>

        </div>
      </main>
    </>
  );
}
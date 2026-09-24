import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Blogs & Guides | Train 45 APK',
  description:
    'Explore our complete guides, walkthroughs, anomalies lists, gameplay mechanics, and ending guides for Train 45.',
};

const blogPosts = [
  {
    title: 'Train 45 All Anomalies: Complete Guide to Every Strange Event',
    slug: 'train-45-all-anomalies',
    description:
      'Find Train 45 all anomalies with this simple guide. Learn what changes to watch for and how to spot strange events during your train journey.',
    category: 'Anomalies Guide',
  },
  {
    title: 'Train 45 Walkthrough: A Complete Guide From Start to Finish',
    slug: 'train-45-walkthrough',
    description:
      'Follow this Train 45 walkthrough from the first train car to the final route, with simple tips for anomalies, progression, puzzles, and endings.',
    category: 'Walkthrough',
  },
  {
    title: 'Train 45 Endings: How to Reach and Unlock Each Ending',
    slug: 'train-45-endings',
    description:
      'Learn how Train 45 endings work, what you need before the final route, and how different choices and items can change the final outcome.',
    category: 'Endings Guide',
  },
  {
    title: 'Train 45 Gameplay: A Simple Guide to How the Game Works',
    slug: 'train-45-gameplay',
    description:
      'Learn how Train 45 gameplay works, from checking train cars and spotting anomalies to exploring routes, collecting items, and reaching the ending.',
    category: 'Gameplay',
  },
];

export default function BlogsPage() {
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

        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          
          {/* Page Header */}
          <header className="text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Train 45 <span className="text-[#a39478]">Blogs & Guides</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Master every carriage, discover all anomalies, unlock secret endings, and navigate the train routes effortlessly.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#81755D] to-transparent mx-auto rounded-full" />
          </header>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block bg-[#12110e]/90 border border-[#81755D]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-[#a39478]/60 transition-colors group"
              >
                <article className="flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#1a1815] border border-[#81755D]/30 rounded-full text-xs text-[#a39478] font-semibold">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-white group-hover:text-[#a39478] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#a39478] group-hover:underline flex items-center gap-1">
                      Read Article <span>→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
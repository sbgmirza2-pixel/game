import Navbar from '../components/Navbar';
import FaqAccordion from './FaqAccordion'; 
const SITE_URL = 'https://train45apk.com';
// SEO Metadata including Canonical Tag
export const metadata = {
  title: 'Frequently Asked Questions - Train 45',
  description: 'Find complete details and answers about Train 45 APK, gameplay, beginner guides, and system requirements.',
  alternates: {
    canonical: `${SITE_URL}/faqs`, 
  },
};

export default function FaqPage() {
  const allFaqs = [
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
      a: "Yes, you can replay the game. It is useful if you want to see different results. With your choice, you will see events or storylines you didn't experience during your first playthrough.",
    },
    {
      q: 'Does Train 45 need an internet connection?',
      a: 'Players should consult current Steam requirements and game settings for any connection required during installation, updates, or other platform-related features.',
    },
    {
      q: 'Who should not play Train 45?',
      a: 'The game is not recommended for those players who are not comfortable with mature themes or adult-based content. It is best for an adult audience, not for younger players.',
    },
    {
      q: 'Is the Train 45 APK game available on consoles?',
      a: 'The officially verified version of Train 45 is available on PC through Steam. Before downloading it from another platform, players should check that it is officially release is available from the developer.',
    },
  ];

  // FAQPage Schema Markup for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0c0b09]">
      {/* Injecting FAQ Schema for SEO tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Navbar Header */}
      <Navbar />

      {/* Main FAQ Content */}
      <main className="grow text-white pt-20 pb-12 md:pt-24 md:pb-20 px-4 relative overflow-hidden mt-10">
        
        {/* Background Soft Glow */}
        <div 
          aria-hidden="true" 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 bg-[#81755D]/10 rounded-full blur-3xl pointer-events-none -z-10" 
        />

        <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
          
          {/* Page Main Heading */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              All Frequently Asked <span className="text-[#a39478]">Questions</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
              Find complete details and answers about Train 45 APK below:
            </p>
          </div>

          {/* Interactive FAQ Accordion (Client Component) */}
          <FaqAccordion allFaqs={allFaqs} />

        </div>
      </main>
    </div>
  );
}
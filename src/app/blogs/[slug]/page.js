import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { blogsData } from '../../data/blogs';


const SITE_URL = 'https://train45apk.com';

// Dynamic SEO Metadata (Open Graph & Twitter Cards)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData[slug];

  if (!blog) return {};

  const pageUrl = `${SITE_URL}/blogs/${slug}`;
  const ogImageUrl = `${SITE_URL}/logo.webp`; // Updated to logo.webp

  return {
    title: `${blog.title} | Train 45 APK`,
    description: blog.description,
    keywords: [blog.focusKeyword, 'Train 45', 'Train 45 Guide', blog.category],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: pageUrl,
      siteName: 'Train 45 APK',
      images: [
        {
          url: ogImageUrl,
          alt: blog.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const blog = blogsData[slug];

  if (!blog) {
    notFound();
  }

  // JSON-LD Schema (Google Article Schema)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description,
    keywords: blog.focusKeyword,
    image: `${SITE_URL}/logo.webp`,
    url: `${SITE_URL}/blogs/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Train 45 APK',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blogs/${slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data Insert */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
<Navbar />
      <article className="min-h-screen pt-28 pb-16 px-4 bg-[#0c0b09] text-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb Navigation */}
          <nav className="text-xs text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-[#a39478] truncate">{blog.title}</span>
          </nav>

          <header className="space-y-4">
            <span className="inline-block px-3 py-1 bg-[#1a1815] border border-[#81755D]/30 rounded-full text-xs text-[#a39478] font-semibold">
              {blog.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {blog.title}
            </h1>
          </header>

          <div className="prose prose-invert max-w-none">{blog.content}</div>
        </div>
      </article>
    </>
  );
}
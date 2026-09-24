export default async function sitemap() {
  const baseUrl = 'https://train45apk.com';

  // Static Pages
  const staticRoutes = [
    '',
    '/blogs',
    '/download',
    '/faqs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Agar aapke blogs ke slugs hain, aap yahan manually array me add kar sakte hain
  const blogSlugs = [
    'train-45-all-anomalies',
    'train-45-walkthrough',
    // mazeed slugs yahan add kar sakte hain
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
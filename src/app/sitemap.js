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

  
  const blogSlugs = [
    'train-45-all-anomalies',
    'train-45-walkthrough',
    'train-45-endings',
    'train-45-gameplay'
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
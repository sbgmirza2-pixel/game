import { blogsData } from '@/data/blogsData'; 

export default async function sitemap() {
  const baseUrl = 'https://train45apk.com'; // Aapka exact domain

  // Static Pages
  const staticRoutes = [
    '',
    '/blogs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Blog Pages
  const blogRoutes = Object.keys(blogsData).map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
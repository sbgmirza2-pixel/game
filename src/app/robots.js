export default function robots() {
  const baseUrl = 'https://train45apk.com'; // Aapka exact domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], 
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
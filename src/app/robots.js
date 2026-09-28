export default function robots() {
  const baseUrl = 'https://train45apk.com';

  return {
    rules: [
      {
        userAgent: 'Googlebot', // Normal Google Search engine (Allow rahega)
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google ka AI Training bot (Block)
        disallow: '/',
      },
      {
        userAgent: 'GPTBot', // OpenAI / ChatGPT training bot (Block)
        disallow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl / AI training bot (Block)
        disallow: '/',
      },
      {
        userAgent: 'ClaudeBot', // Anthropic Claude training bot (Block)
        disallow: '/',
      },
      {
        userAgent: '*', // Baqi sab ke liye normal rules (Internal paths blocked)
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
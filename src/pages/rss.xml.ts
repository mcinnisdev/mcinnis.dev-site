import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { siteBase } from '../utils/seo';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site: astroSite }) => {
  const base = siteBase(astroSite);
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const items = posts
    .map((post) => {
      const url = `${base}/blog/${post.id}`;
      const categories = post.data.tags
        .map((t) => `      <category>${escape(t)}</category>`)
        .join('\n');
      return `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(post.data.excerpt)}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <dc:creator>${escape(site.name)}</dc:creator>
      <enclosure url="${base}/og/blog-${post.id}.jpg" type="image/jpeg" length="0"/>
${categories}
    </item>`;
    })
    .join('\n');

  const latest = posts[0]?.data.date ?? new Date();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escape(site.name)} — Writing</title>
    <link>${base}/blog</link>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Notes from the build — automation, agentic engineering, and the occasional detour into IT operations.</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} ${escape(site.name)}</copyright>
    <managingEditor>${site.email} (${escape(site.name)})</managingEditor>
    <webMaster>${site.email} (${escape(site.name)})</webMaster>
    <lastBuildDate>${latest.toUTCString()}</lastBuildDate>
    <image>
      <url>${base}/og/default.jpg</url>
      <title>${escape(site.name)} — Writing</title>
      <link>${base}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

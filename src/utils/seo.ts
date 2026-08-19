import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { site, socials } from '../data/site';

/** Absolute site origin with no trailing slash. `Astro.site` in prod, config fallback otherwise. */
export function siteBase(astroSite: URL | undefined): string {
  return (astroSite ?? new URL(site.url)).toString().replace(/\/+$/, '');
}

/**
 * Share-card path for a route. Cards are generated into `public/og/` by
 * `scripts/og.mjs`, named after the route with slashes flattened to dashes:
 *   /                      → /og/index.jpg
 *   /projects              → /og/projects.jpg
 *   /projects/ink          → /og/projects-ink.jpg
 *   /blog/design-tokens…   → /og/blog-design-tokens….jpg
 * Anything without a generated card falls back to /og/default.jpg.
 */
export function ogPath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '').replace(/^\/+/, '');
  const derived = clean ? `/og/${clean.replace(/\//g, '-')}.jpg` : '/og/index.jpg';
  // Checked at build (this only ever runs in Node during SSG), so a route added
  // without a matching card degrades to the default rather than shipping a
  // broken og:image.
  return existsSync(join(process.cwd(), 'public', derived)) ? derived : '/og/default.jpg';
}

/** The person behind the site — attached to the home and about pages. */
export function personSchema(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: site.name,
    url: baseUrl,
    email: `mailto:${site.email}`,
    jobTitle: 'Service Desk Manager, and independent designer and developer',
    description: site.description,
    image: `${baseUrl}/og/default.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.location,
      addressCountry: 'US',
    },
    knowsAbout: [
      'Agentic engineering',
      'Microsoft 365 administration',
      'Automation',
      'Web development',
      'IT operations',
    ],
    sameAs: socials.filter((s) => s.external).map((s) => s.href),
  };
}

export function websiteSchema(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: site.domain,
    description: site.description,
    inLanguage: 'en-US',
    publisher: { '@id': `${baseUrl}/#person` },
  };
}

export function blogPostingSchema(
  baseUrl: string,
  post: { title: string; excerpt: string; date: Date; tags: string[]; slug: string },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date.toISOString(),
    dateModified: post.date.toISOString(),
    author: { '@id': `${baseUrl}/#person` },
    publisher: { '@id': `${baseUrl}/#person` },
    keywords: post.tags.join(', '),
    url: `${baseUrl}/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/blog/${post.slug}` },
    image: `${baseUrl}/og/blog-${post.slug}.jpg`,
    inLanguage: 'en-US',
  };
}

export function projectSchema(
  baseUrl: string,
  project: { title: string; summary: string; tags: string[]; slug: string; link?: string },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    creator: { '@id': `${baseUrl}/#person` },
    keywords: project.tags.join(', '),
    url: `${baseUrl}/projects/${project.slug}`,
    image: `${baseUrl}/og/projects-${project.slug}.jpg`,
    ...(project.link ? { sameAs: project.link } : {}),
  };
}

/** Trail for the current page. Pass the crumbs after Home. */
export function breadcrumbSchema(baseUrl: string, crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${baseUrl}${c.path === '/' ? '' : c.path}`,
    })),
  };
}

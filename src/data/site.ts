/**
 * Site-wide constants. Everything that is "Nick" rather than "a page" lives here
 * so a change to the email, the nav, or the stat rail happens in one place.
 */

export const site = {
  name: 'Nick McInnis',
  domain: 'mcinnis.dev',
  url: 'https://mcinnis.dev',
  tagline: '10+ years in IT. Building things that work.',
  description:
    'Nick McInnis — 10+ years in IT, now building agentic tools, automation, and web products from Michigan.',
  location: 'Michigan',
  email: 'nick@mcinnis.dev',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/mcinnisdev', icon: 'github', external: true },
  { label: 'Web Dens', href: 'https://webdens.com', icon: 'link', external: true },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail', external: false },
] as const;

/** The hero rail. Four at most — the grid gets thin beyond that. */
export const heroStats: [string, string][] = [
  ['10+', 'Years in IT'],
  ['5', 'Live projects'],
  ['M365', 'Home turf'],
  ['2026', 'Agentic focus'],
];

export const aboutStats: [string, string][] = [
  ['10+', 'Years in IT'],
  ['M365', 'Home turf'],
  ['Michigan', 'Based in'],
];

window.SITE = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About' },
  ],
  projects: [
    {
      id: 'skyops', title: 'SkyOps — M365 Automation & Operations', status: 'active', kicker: 'Internal tool · Castle Rock Sky · 2025',
      summary: 'An internal automation platform for an MSP — unifying the M365, ticketing, monitoring, and billing toolchain into a single pane of glass with automated reporting and remediation. Built on Azure Functions and Static Web Apps in my role as Service Desk Manager at Castle Rock Sky.',
      tags: ['Azure Functions', 'Azure Static Web Apps', 'M365', 'PowerShell', 'Graph', 'Entra', 'RESTful APIs', 'MSP', 'Internal Tool'],
    },
    {
      id: 'ink', title: 'Ink — Markdown-Native CMS', status: 'active', kicker: 'Open source · 2026',
      summary: 'An open-source content management system built on Eleventy v3. Write in Markdown, scaffold with a CLI, customize with design tokens, edit in Obsidian, and deploy to any CDN. Includes a desktop app with live preview and AI writing assistant.',
      tags: ['Eleventy v3', 'Node.js', 'Electron', 'React', 'Markdown', 'Open Source'],
    },
  ],
  archived: [
    {
      id: 'coral', title: 'Coral — AI Agent Infrastructure', status: 'archived', statusLabel: 'Archived · Feb 2026', kicker: 'Experiment · ran 3 weeks',
      summary: 'A multi-agent AI system built on OpenClaw — six agents handling email, content publishing, outreach, and site chat, with bridge services for Gmail, SMS, and CRM. The experiment ran for a few weeks and is now retired; the build log and architecture docs are preserved.',
      tags: ['OpenClaw', 'Claude', '11ty', 'Node.js', 'Caddy'],
    },
  ],
  posts: [
    { id: 'ink-cms', date: 'Feb 24, 2026', project: 'ink', title: 'Building a CMS Around Markdown Instead of a Database',
      excerpt: 'Most CMS platforms start with a database. Ink starts with a folder of Markdown files. Here\'s why that changes everything.' },
    { id: 'ink-tokens', date: 'Feb 24, 2026', project: 'ink', title: 'Design Tokens: One File to Brand an Entire Site',
      excerpt: 'How Ink uses CSS custom properties to make rebranding a static site a five-minute task.' },
  ],
};

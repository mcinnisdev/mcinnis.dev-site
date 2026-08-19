# mcinnis.dev

Personal site of Nick McInnis. Astro, static output, no client framework — the only JavaScript that
ships is a ~10-line nav toggle.

Built on the [`design-system/`](design-system/) in this repo. Tokens are imported straight from
`design-system/tokens/`, so the design system stays the single source of truth: change a token there
and the site follows.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
npm run check    # astro check (types + templates)
```

## Structure

```
design-system/            the brand system — tokens, components, guidelines, UI kit
public/
  assets/                 logo.svg, logo-paper.svg, logo-ink.svg (+ headshot.jpg when it exists)
  icons/                  Lucide glyphs, vendored from lucide-static@0.544.0
src/
  components/             the design system, ported to .astro
  layouts/Base.astro      head, fonts, nav, footer
  content/
    projects/*.md         one file per project
    posts/*.md            one file per post
  content.config.ts       collection schemas
  data/site.ts            name, email, nav, socials, stat rails
  pages/                  index, projects, blog, about, 404, rss.xml
  styles/global.css       token imports + page-level primitives
  utils/format.ts         date formatting
```

## Adding content

**A project** — drop a Markdown file in `src/content/projects/`. The filename becomes the URL
(`ink.md` → `/projects/ink`).

```yaml
---
title: "Name — What it is"      # the card splits on the em dash
kicker: "Role · Where · Year"   # mono eyebrow
status: active                  # active | wip | archived
statusLabel: "Live · beta"      # optional, overrides the badge word
summary: "One dense paragraph." # ≤ 55 words; used on cards and as the detail standfirst
tags: ["Stack", "Items"]
order: 6                        # lower sorts first; lowest is the featured card
link: "https://example.com"     # optional
linkLabel: "example.com"
meta:                           # sticky sidebar rows
  - ["Status", "Live"]
  - ["Role", "Design & build"]
---

Body in Markdown. `## Headings` become the section heads.
```

**A post** — drop a Markdown file in `src/content/posts/`.

```yaml
---
title: "Full-statement title"
excerpt: "Two sentences, ≤ 30 words, ending on the stakes."
date: 2026-08-19
project: "ink"        # a project slug wires it into that project's "Related writing"
tags: ["Topic"]
---
```

Both collections honour `draft: true` — drafted entries build nowhere and stay out of the RSS feed.

## Conventions worth keeping

These come from `design-system/readme.md`; the short version:

- **First person, always.** Never "we". Understatement over claims.
- **Sentence case** for headings and buttons. Mono kickers are the only uppercase.
- **No emoji.** The em dash and the middot are the only decorative punctuation.
- **One accent.** Terracotta `#e07850` — the active nav slab, the featured wedge, the one primary
  button per view, links, kickers.
- **Dark only.** There is no light theme and no toggle. `.on-paper` exists for print, not for users.
- **Hover brightens** on ink — the inverse of the light-mode instinct.
- **The 18.4° cut is structural**, never ornament on body text: nav slabs, hero rails, the project
  card's index wedge, section hatch bands.

## Known gaps

- **No headshot.** `PortraitSlot` renders a labelled slot on `/about`. Drop a file at
  `public/assets/headshot.jpg` (4:5) and it swaps itself in — no code change.
- **No social share image.** Open Graph currently points at `logo.svg`. A real 1200×630 card would
  be better; set it in `src/layouts/Base.astro`.
- **Fonts come from the Google Fonts CDN** (Space Grotesk / Newsreader / JetBrains Mono). Self-host
  in `public/fonts/` if you want the CDN request gone.
- **Two posts.** Both carried over from the old site. See the note below.

### Note on the Markdown-CMS post

`markdown-instead-of-a-database.md` was originally about Ink when Ink was an Eleventy-based Markdown
CMS. Ink is now the agent canvas at get.ink, so the post is filed under `project: static-sites`
rather than linked to the Ink project page — the argument still stands on its own, but it no longer
describes a shipping product of yours. Worth either rewriting as a general static-sites piece or
retiring.

## Deploying

Static output, so anything that serves a folder works — Netlify, Cloudflare Pages, GitHub Pages,
Vercel. Build command `npm run build`, publish directory `dist`. `astro.config.mjs` sets
`site: 'https://mcinnis.dev'`, which drives canonical URLs, the sitemap, and the RSS feed — change it
if the domain changes.

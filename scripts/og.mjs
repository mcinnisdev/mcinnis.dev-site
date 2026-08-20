/**
 * Generates 1200×630 Open Graph share cards into `public/og/`.
 *
 * One card per route, built from the same tokens as the site: ink ground, the
 * 18.4° hatch, skewed orange rails bleeding off the right edge, and the
 * portrait.
 *
 * Two layers, because each tool is good at one of them:
 *   1. an SVG base (ink, hatch pattern, rail polygons) rasterised by sharp —
 *      the geometry is exact, which satori's `transform: skewX()` is not;
 *   2. satori on top for type, which converts glyphs to paths, so the cards
 *      need no system fonts.
 *
 * Runs on `prebuild`. Deliberately non-fatal: the cards are committed, so a
 * failure logs a warning and leaves the committed set in place rather than
 * breaking a deploy.
 *
 *   npm run og      regenerate by hand
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public', 'og');

// --- tokens, mirrored from design-system/tokens ---------------------------
const INK_900 = '#14100e';
const INK_200 = '#c0b6ae';
const PAPER_50 = '#faf7f4';
const ORANGE = '#ff6b00';
const ORANGE_700 = '#ad3d00';
const HAIRLINE = 'rgba(250,247,244,0.14)';

const W = 1200;
const H = 630;

/** The logo's stroke angle. tan(18.4°) — how far the rail leans per half-height. */
const LEAN = Math.tan((18.4 * Math.PI) / 180) * (H / 2);

/** A vertical band skewed 18.4°, as an exact polygon. */
function rail(centerX, width, fill) {
  const h = width / 2;
  const pts = [
    [centerX - h + LEAN, 0],
    [centerX + h + LEAN, 0],
    [centerX + h - LEAN, H],
    [centerX - h - LEAN, H],
  ];
  return `<polygon points="${pts.map((p) => p.map(Math.round).join(',')).join(' ')}" fill="${fill}"/>`;
}

const baseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <pattern id="hatch" width="11" height="11" patternUnits="userSpaceOnUse"
             patternTransform="rotate(-18.4)">
      <line x1="0" y1="0" x2="0" y2="11" stroke="rgba(250,247,244,0.09)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${INK_900}"/>
  <rect width="${W}" height="${H}" fill="url(#hatch)"/>
  ${rail(1120, 96, ORANGE)}
  ${rail(1010, 16, ORANGE_700)}
</svg>`;

// --- satori element helpers ----------------------------------------------
const el = (type, style, children) => ({ type, props: { style, children } });
const row = (style, children) => el('div', { display: 'flex', ...style }, children);

async function loadFonts() {
  const f = (p) => readFile(join(ROOT, 'node_modules', p));
  return [
    { name: 'Grotesk', data: await f('@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff'), weight: 700, style: 'normal' },
    { name: 'Mono', data: await f('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff'), weight: 500, style: 'normal' },
  ];
}

/** Scale the title down as it lengthens so it never overflows the card. */
function titleSize(text, narrow) {
  const n = text.length;
  if (narrow) return n <= 22 ? 74 : n <= 40 ? 56 : 46;
  return n <= 22 ? 80 : n <= 38 ? 68 : n <= 58 ? 56 : 46;
}

function layout({ kicker, title, portraitSrc }) {
  const narrow = Boolean(portraitSrc);
  const children = [
    row(
      {
        flexDirection: 'column', justifyContent: 'center',
        width: narrow ? 600 : 900, height: H, padding: '0 0 0 72px',
      },
      [
        el('div', {
          display: 'flex', fontFamily: 'Mono', fontSize: 20, letterSpacing: 3,
          color: ORANGE, textTransform: 'uppercase', marginBottom: 24,
        }, kicker),
        el('div', {
          display: 'flex', fontFamily: 'Grotesk', fontSize: titleSize(title, narrow),
          fontWeight: 700, color: PAPER_50, letterSpacing: -2, lineHeight: 1.06,
          marginBottom: 32,
        }, title),
        el('div', {
          display: 'flex', width: narrow ? 460 : 700, height: 1,
          background: HAIRLINE, marginBottom: 24,
        }),
        row({ alignItems: 'center' }, [
          el('div', { display: 'flex', width: 10, height: 10, borderRadius: 5, background: ORANGE, marginRight: 14 }),
          el('div', { display: 'flex', fontFamily: 'Mono', fontSize: 22, color: INK_200, letterSpacing: 1 }, 'mcinnis.dev'),
        ]),
      ],
    ),
  ];

  if (portraitSrc) {
    children.push({
      type: 'img',
      props: {
        src: portraitSrc,
        style: {
          position: 'absolute', top: 100, left: 640, width: 344, height: 430,
          borderRadius: 14, objectFit: 'cover',
        },
      },
    });
  }

  return row({ width: W, height: H, position: 'relative' }, children);
}

/** Minimal frontmatter title reader — our content is controlled and quoted. */
async function collect(dir, prefix, kicker) {
  const entries = [];
  let files = [];
  try {
    files = (await readdir(join(ROOT, 'src', 'content', dir))).filter((f) => f.endsWith('.md'));
  } catch {
    return entries;
  }
  for (const file of files) {
    const raw = await readFile(join(ROOT, 'src', 'content', dir, file), 'utf8');
    // Drafts build no page, so they get no card.
    if (/^draft:\s*true\s*$/m.test(raw)) continue;
    const m = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    if (!m) continue;
    // Project titles use the `Name — What it is` form; the card takes the name.
    const title = dir === 'projects' ? m[1].split(' — ')[0] : m[1];
    entries.push({ slug: `${prefix}-${file.replace(/\.md$/, '')}`, kicker, title });
  }
  return entries;
}

async function main() {
  await mkdir(OUT, { recursive: true });

  const portraitBuf = await readFile(join(ROOT, 'src', 'assets', 'headshot.jpg'));
  const portraitSrc = `data:image/jpeg;base64,${portraitBuf.toString('base64')}`;
  const fonts = await loadFonts();
  const base = await sharp(Buffer.from(baseSvg)).png().toBuffer();

  const pages = [
    { slug: 'default', kicker: 'Michigan · 10+ years in IT', title: 'Nick McInnis', portrait: true },
    { slug: 'index', kicker: 'Michigan · 10+ years in IT', title: 'Nick McInnis', portrait: true },
    { slug: 'about', kicker: 'About', title: 'Ten years of fixing it, then building it properly.' },
    { slug: 'projects', kicker: 'Projects', title: "Things I'm building" },
    { slug: 'blog', kicker: 'Writing', title: 'Notes from the build' },
    ...(await collect('projects', 'projects', 'Project')),
    ...(await collect('posts', 'blog', 'Writing')),
  ];

  for (const page of pages) {
    const svg = await satori(
      layout({
        kicker: page.kicker,
        title: page.title,
        portraitSrc: page.portrait ? portraitSrc : null,
      }),
      { width: W, height: H, fonts },
    );
    const overlay = await sharp(Buffer.from(svg)).png().toBuffer();
    const jpg = await sharp(base)
      .composite([{ input: overlay, top: 0, left: 0 }])
      .jpeg({ quality: 88, mozjpeg: true })
      .toBuffer();
    await writeFile(join(OUT, `${page.slug}.jpg`), jpg);
    console.log(`  og/${page.slug}.jpg  ${Math.round(jpg.length / 1024)}KB`);
  }
  console.log(`Generated ${pages.length} share cards.`);
}

main().catch((err) => {
  console.warn('[og] generation skipped:', err.message);
  console.warn('[og] committed cards in public/og/ remain in place.');
  process.exit(0);
});

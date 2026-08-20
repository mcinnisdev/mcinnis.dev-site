# mcinnis.dev — Design System

The personal brand of **Nick McInnis** (mcinnis.dev): a founder-bio and project site.
10+ years in IT — M365 administration, network and desktop infrastructure, web and desktop apps,
automation, and lately agentic engineering. The site is a landing pad linked from his businesses
(webdens.com and others), so it has to read as a personal identity that stands apart from those
company brands: warm, hand-built, engineering-literate, not corporate SaaS.

## Sources used
| Source | What was read |
| --- | --- |
| `uploads/mcinnisdev-logo.svg` (supplied by the user) | The brand mark, supplied in terracotta `#e07850`; the stroke angle (18.4°) became the system's geometric signature. The master is kept at its original colour; `assets/logo.svg` carries the current accent, with ink and paper recolours alongside it. |
| https://mcinnis.dev — home, /about/, /projects/ | All product copy, voice, page structure, project and post inventory. Fetched as rendered text. |
| https://github.com/mcinnisdev/mcinnis.dev | Linked as "Source" from the live site. **Not read** — no repository was connected to this project, so no CSS, template or component source from the site was available. |

No design files, font binaries, or image assets other than the logo were supplied. The live site's
`assets/headshot.jpg` and per-project logos could not be downloaded; the UI kit shows labelled slots
in their place. **Everything visual here beyond the logo is a new direction**, as requested ("a new and
improved look"), not a recreation of the current site's styling.

## Substitutions to confirm
- **Fonts.** No brand font files exist. The system uses the nearest good Google Fonts triad, loaded from
  the Google Fonts CDN in `tokens/fonts.css` (so no `@font-face` binaries ship with this system):
  **Space Grotesk** (display/UI), **Newsreader** (prose), **JetBrains Mono** (metadata). If real files
  turn up, drop them in `assets/fonts/` and replace that `@import` with `@font-face` rules.
- **Icons.** No icon set was supplied. The system uses **Lucide** (`lucide-static@0.544.0`, jsDelivr) from CDN via
  the `Icon` component. Flagged as a substitution.

---

## CONTENT FUNDAMENTALS

The voice is Nick's, written first-person, plainly, with a craftsman's understatement. Copy on the live
site is the reference — match its cadence rather than inventing marketing language.

**Person and stance.** First person singular, always: "I've spent my career working across IT",
"Right now I'm deep in agentic engineering", "a lot of things in between that I'm probably forgetting".
Never "we". Address the reader directly only in the contact line ("Get in touch"). No third-person
bio-speak ("Nick is a technologist who…").

**Register.** Declarative, short-first-clause sentences with an em-dash aside for detail:
"10+ years in IT. Building things that work." Understatement over claims — "things that work",
"practical tools", "useful automations". No superlatives, no "cutting-edge", no "passionate about".
Admits limits and endings out loud: "The experiment ran for a few weeks and is now retired."

**Casing.** Sentence case for headings and buttons ("Currently building", "All posts", "View project").
Mono labels are the only uppercase, and only as tracked eyebrows ("CURRENTLY BUILDING", "RECENT WRITING",
"GET IN TOUCH"). Product names keep their own casing (M365, Entra, Eleventy v3, OpenClaw, 11ty).
Tech tags stay sentence-cased ("Azure Functions", "Open Source"), never SHOUTED.

**Structure of a project entry.** Title as `Name — What it is` ("SkyOps — M365 Automation & Operations",
"Ink — Markdown-Native CMS"), then a status, then one dense paragraph that says what it does, what it's
built on, and the context it exists in. Then the stack as tags. Nothing else.

**Structure of a post teaser.** Date · project slug, title as a full statement
("Building a CMS Around Markdown Instead of a Database"), then a 2-sentence standfirst that ends on the
stakes: "Here's why that changes everything."

**Section labels in use** (reuse these verbatim): Currently building · Recent writing · All posts ·
Active · Archived · More coming · Get in touch · View project.

**Emoji: no.** The current site uses one (🪸 for Coral) as a project-logo stand-in; in this system that
slot is a real asset or plain type instead. No emoji in headings, buttons, labels, or prose. Unicode is
used only as typographic punctuation — the em dash (—) in titles and asides, the middot (·) as a
metadata separator ("Nick McInnis · Michigan", "Archived · Feb 2026").

**Length discipline.** Hero paragraph ≤ 60 words. Project summary ≤ 55 words. Post standfirst ≤ 30 words.
Kickers 2–4 words, no punctuation.

---

## VISUAL FOUNDATIONS

**The idea.** A lit workshop after hours, not a dashboard. Warm near-black ink, one orange accent
shared with Web Dens, a serif for everything you actually read, and the logo's 18.4° cut used
structurally rather than as ornament. Type is oversized and left-aligned; decoration is limited to that
one angle.

**This system is dark-only.** There is no light theme and no toggle. `:root` *is* the dark mode
(`--surface-page: --ink-900`). A single `.on-paper` scope exists as an escape hatch for a print sheet or
an embed on a white host page — it is not a user-facing mode, and screens should never offer a switch.

**Colour.** Orange `--orange-500 #ff6b00` is the only accent: active nav slab, featured wedge,
the single primary button, links, kickers. It is Web Dens' brand orange, carried over so the personal
site and the business read as one hand; the logo mark was recoloured to follow it. Neutrals are warm on purpose: ink `#0c0a09 → #c0b6ae`, with
paper `#faf7f4` reserved for text and the rare light slab. Semantic colour is rationed to status badges
(moss = active, amber = in progress, grey = archived, rust = error, slate = note), rendered as 16%
translucent tints so they read on ink without glowing. Two surface values per page at most:
`--surface-page` (`--ink-900`) plus `--surface-sunken` (`--ink-950`) for banded sections. No gradients
except the ink scrim (`--scrim-ink`) over photography and the soft accent glow under a hovered primary
button.

**Type.** Space Grotesk for display and UI (600–700, tracking −0.03em on hero, −0.015em on headings,
leading 1.02–1.18); Newsreader for all prose (1.125rem, leading 1.62, measure 62ch); JetBrains Mono for
metadata, dates, tags, nav links, and eyebrows (0.6875–0.8125rem, tracking 0.14em when uppercase).
The signature block is always mono kicker → grotesk head → serif paragraph.

**Layout.** 1120px page shell, 720px prose column, 2rem gutters, 68px sticky header. Sections are
separated by 6–8rem of air, not by boxes. Content is left-aligned; centred text is not used. Heroes run
to the page edge with the hatch plate and a skewed orange rail bleeding off the right edge. Fixed
elements: the header (sticky, `--surface-veil` = `rgba(20,16,14,.94)` + `saturate(140%) blur(14px)`,
hairline base) and the project-detail meta sidebar (sticky below the nav). Nothing else pins.

**Backgrounds and texture.** Flat ink by default. No photographs behind text, no repeating imagery.
The single texture is the **18.4° hatch** — the logo's stroke angle repeated as a 1px line every 6–11px
at 10–16% white. Three uses: `SlantRule` as a divider band between sections and above the footer;
a radially-masked `HatchField` plate behind page heroes; and skewed slabs (`skewX(var(--brand-slant))`)
that carry real content — the nav's active tab, the project card's index wedge, hero rails. The angle is
structural, never applied to body text.

**Imagery.** Warm and plain: natural light, slightly desaturated, no cool blue casts, no heavy filters,
no grain overlays. Portraits at 4:5 in a 14px-radius frame with a hairline border. Screenshots sit on
paper with the same frame — never tilted, never in a floating device mock. Where no real image exists,
show a labelled slot rather than a stock photo.

**Cards.** `--surface-card` (`--ink-800`), 1px `--border-subtle` (14% white), 14px radius,
`--shadow-1` at rest; interactive cards lift `translateY(-2px)` to `--shadow-2` and swap their border
to orange on hover. Elevation on ink is carried by border and glow, not by drop shadow alone.

**The project card is the brand's signature block** and deliberately not a generic card: an ink slab cut
by a full-height 18.4° wedge on the left carrying the entry's zero-padded index (`01`, `02`). Featured
entries fill the wedge solid orange with an ink numeral; the rest hatch it and warm the hatch to
orange on hover while the wedge widens 10px. Titles use the ` — ` form and split into a bold
display-scale name line plus a lighter descriptor line. Stack them full-width — the wedge column is what
aligns a list. Never fall back to a plain bordered box for a project.

**Radii.** 2px chips, 4px controls (buttons, inputs, icon buttons), 8px callouts, 14px cards, pill only
for status badges. Nothing is fully round except the status dot.

**Shadows.** Three warm-tinted steps only: `--shadow-1` resting, `--shadow-2` hover,
`--shadow-3` for peak surfaces (dialogs). Inner shadow is used once — `--shadow-inset-hairline`
for swatches and image frames that need an edge without a border. Plus `--shadow-accent-glow`
(a soft orange cast) under a hovered primary button.

**Borders and rules.** Hairlines carry the structure: `--border-hairline` rgba(20,16,14,.08) for
section rules under headers and between list rows; `--border-subtle` for card edges;
`--border-strong` for dashed/annotation frames. Borders are 1px; 2px only for a focus ring.

**Motion.** Fast and unshowy. 140ms for controls, 220ms for surfaces, `cubic-bezier(.2,0,.2,1)`.
Fades and 2–4px translations only — no bounce, no spring, no scale-in on load, no parallax.
Post-row arrows slide 4px in on hover. Everything collapses to 0ms under
`prefers-reduced-motion`.

**Hover states.** On ink, hover *brightens* — the inverse of the light-mode instinct. Primary buttons go
`500 → 400`; secondary buttons lift to `--ink-700` and strengthen their border; ghost buttons pick up
the 14% orange wash. Links keep their colour and take their underline from 35% to full opacity.
Cards lift 2px and switch to an orange border. Nav slabs fill 12% white; the active slab is already
solid orange. Wedge hatches warm from white to orange. Opacity-only hovers are avoided except
for icons inside text.

**Press states.** `scale(0.985)`, no colour change beyond the hover step, no shadow change.
Disabled is `opacity: .42` with `cursor: not-allowed` — never a grey re-colour.

**Focus.** `2px solid var(--orange-500)` outline, 2px offset, 2px radius. Always visible;
never removed.

**Transparency and blur.** Blur has exactly one use: the sticky header's veil. Translucency is otherwise
structural — hairline borders, 16% status tints, the 14% accent wash, hatch lines. No frosted cards,
no glassmorphism, no translucent modals.

**Protection.** Text over imagery uses the `--scrim-ink` bottom-up gradient, not a capsule or a blur
pill. Solid capsules are for badges only.

---

## ICONOGRAPHY

- **Set: Lucide** (`lucide-static@0.544.0` via jsDelivr), loaded per-glyph from CDN. **This is a substitution** — no icon
  set was supplied with the brand. Its 2px-round-cap outline style suits the system's hairline weight.
- **Always via the `Icon` component.** It renders the glyph as a CSS mask filled with `currentColor`,
  so icons inherit text colour on paper and ink alike. Never paste inline SVG, never hand-draw a glyph,
  never use an icon font or a PNG icon.
- **Sizes:** 12px inside mono kickers, 13–14px inline in text and small buttons, 16px in buttons and
  footer links, 18–20px in nav and callouts, 24px max.
- **Vocabulary in use:** `arrow-right` (forward actions), `arrow-up-right` (external / open post),
  `arrow-left` (back), `github`, `mail`, `code`, `terminal`, `map-pin` (Michigan),
  `hammer` (currently building), `archive` (retired work), `info`, `sparkle`.
- **Icons are never decorative filler.** One glyph per button at most, on the trailing edge for
  forward motion and the leading edge for back. No icon grids, no icon-in-a-coloured-circle.
- **Emoji are not icons here** — see Content Fundamentals. The live site's 🪸 stand-in for Coral is
  replaced by plain type until a real mark exists.
- **Brand mark:** `assets/logo.svg` (orange), `assets/logo-paper.svg` (on ink),
  `assets/logo-ink.svg` (single-colour/print). 26px minimum in the header; pair with the
  "Nick McInnis" wordmark set in Space Grotesk 600. Do not recolour outside these three files,
  do not rotate, do not add effects.

---

## INDEX

**Root**
- `styles.css` — the only file consumers link. `@import` list, nothing else.
- `thumbnail.html` — homepage tile.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills wrapper so this system can be used from Claude Code.

**Tokens** (`tokens/`, all imported by `styles.css`)
`fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `shape.css` · `motion.css` · `base.css`
(base.css carries the element resets and the three helper classes `.ds-label`, `.ds-prose`, `.ds-container`).

**Assets** (`assets/`)
`logo.svg` · `logo-paper.svg` · `logo-ink.svg`. No photography or illustration was supplied.

**Components** (`components/<group>/`, each with `.jsx`, `.d.ts`, `.prompt.md`, plus one card per group)
- `core/` — **Button**, **IconButton**, **Icon**, **Tag**, **StatusBadge**, **Kicker**
- `layout/` — **Card**, **SectionHeader**, **SlantRule**  ·  *(the kit adds `HatchField` and `StatRow` locally in `Shell.jsx`)*
- `content/` — **ProjectCard**, **PostListItem**, **Callout**
- `navigation/` — **NavBar**, **SiteFooter**, **TextLink**

Import in card/kit HTML with `const { Button } = window.McinnisDevDesignSystem_a1d2f2`.

*Intentional additions* (no source defined a component inventory, so this is an authored set sized to the
site's needs): **Icon** exists as a wrapper so the Lucide substitution is swappable in one place;
**SlantRule** encodes the logo-derived motif so it can't drift; **Kicker**, **StatusBadge**,
**ProjectCard** and **PostListItem** are direct abstractions of blocks that already exist on the live site.
No Dialog, Toast, Tooltip, Tabs or form primitives are included — the site has no such surfaces
(contact is a `mailto:` link). Add them only when a real screen needs them.

**Guidelines** (`guidelines/`) — 20 specimen cards feeding the Design System tab, grouped
**Colors** (orange / ink / paper ramps, status, surfaces, text pairings), **Type** (display, prose,
mono, size scale, pairing-in-use), **Spacing** (scale, vertical rhythm, containers),
**Brand** (radii, elevation, the 18.4° slant, logo lockups, motion & states, ink section).

**UI kits** (`ui_kits/`)
- `mcinnis-dev/` — the personal site, dark-only: home, projects index, project detail, blog index, post,
  about. Not a faithful copy of the current mcinnis.dev — a new direction built on this system's motifs.
  See its `README.md` for per-screen notes and known gaps.

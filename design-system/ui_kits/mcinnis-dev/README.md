# UI kit — mcinnis.dev (personal site)

The personal site, rebuilt on this design system as a **new direction** — dark-only, oversized display
type, and the logo's 18.4° cut used structurally (nav slabs, hero rails, the project card's index wedge).
It is not a visual copy of the current mcinnis.dev.

Project summaries, the about-page body, and post standfirsts come from the live site. Headlines
("I build things that work — and keep working", "Ten years of fixing it, then building it properly"),
and the project-detail body copy are new, written to the voice in
`readme.md` → Content Fundamentals.

## Screens
| Screen | File | Notes |
| --- | --- | --- |
| Home | `HomeScreen.jsx` | Hero, featured project, recent writing |
| Projects index | `ProjectsScreen.jsx` | Active / Archived / More coming |
| Project detail | `ProjectDetailScreen.jsx` | SkyOps — prose + meta sidebar + related writing |
| Blog index | `BlogScreen.jsx` (`BlogScreen`) | Prose-width list |
| Post | `BlogScreen.jsx` (`PostScreen`) | 720px measure, tag footer |
| About | `AboutScreen.jsx` | Portrait, bio, focus-area cards |

`Shell.jsx` holds the NavBar/footer wrapper plus the kit-local helpers `Container`, `HatchField`
(radially-masked hatch plate behind heroes), `PortraitSlot`, and `StatRow`. `data.js` holds all copy.

## Known gaps
- The site's real headshot (`assets/headshot.jpg`) was not supplied; `PortraitSlot` stands in at the same aspect.
- Project logos (SkyOps, Ink) appear on the live projects index; they were not supplied, so cards run title-only.

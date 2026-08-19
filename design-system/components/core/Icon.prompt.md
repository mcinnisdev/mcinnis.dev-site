Renders a Lucide icon as a currentColor mask; use it for every glyph in the brand — never hand-draw SVG.

```jsx
<Icon name="arrow-up-right" size={16} />
<Icon name="github" size={20} label="GitHub" />
```

Notes: inherits color from its parent, so it works on ink and paper surfaces alike. Sizes in use: 14 (in labels), 16 (in buttons/links), 18–20 (nav, footer), 24 (feature rows). Slugs come from lucide.dev.

CDN: `https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/<slug>.svg` — pinned in `Icon.jsx`, the one place to change if the set is swapped.

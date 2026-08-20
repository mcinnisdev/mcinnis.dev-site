---
title: "Design Tokens: One File to Brand an Entire Site"
excerpt: "Every colour, size and radius on a site can live in one sheet of CSS custom properties. Rebranding then stops being an archaeology project."
date: 2026-02-24
project: "design-system"
tags: ["Design tokens", "CSS", "Design systems"]
---

The worst part of rebranding a site is never the design. It's the find-and-replace — a hex value scattered across forty partials, three of which are commented out, one of which is in an inline style somebody added in a hurry.

The fix is boring and it works: nothing in a template names a colour. Templates name a *job*, and one file says what fills that job.

## Two layers, and the discipline is in the second

Base values name the raw material:

```css
--orange-500: #ff6b00;
--ink-900: #14100e;
--paper-50: #faf7f4;
```

Semantic aliases name the job:

```css
--surface-page: var(--ink-900);
--text-display: var(--paper-50);
--border-accent: var(--orange-500);
```

Templates only ever reference the second group. A button is `var(--surface-accent)`, never `#ff6b00` and never `var(--orange-500)`. That one rule is what makes a swap safe — change the alias, and every element doing that job follows, while nothing that merely happened to be the same colour comes along by accident.

## Where it pays off

Swapping a palette becomes editing a dozen lines. So does adding a light variant, or an inverted section, or a print sheet — you re-point the aliases inside a scope and the components underneath never know:

```css
.on-paper {
  --surface-page: var(--paper-50);
  --text-display: var(--ink-900);
}
```

No component overrides. No `.on-paper .button { ... }` cascade to maintain.

## The failure mode

The discipline breaks quietly. Somebody needs a slightly different border for one card, reaches for `--ink-600` directly because there's no alias for it, and now there's one element the theme scope can't reach. Six months later there are nine of them and the swap doesn't work any more.

If you find yourself reaching for a base value in a template, that's the signal: the system is missing an alias. Add it. That's cheaper than the drift.

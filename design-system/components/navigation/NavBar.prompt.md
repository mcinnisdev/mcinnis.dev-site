Sticky site header — mark + wordmark + `mcinnis.dev` sub-line on the left, uppercase mono links on the right in 18.4°-skewed slabs (the logo's stroke angle). The active item's slab fills terracotta with a 3px bar along the header's base; hover tints the slab.

```jsx
<NavBar items={[{id:'home',label:'Home'},{id:'projects',label:'Projects'}]} current="home" onNavigate={setPage} logoSrc="../../assets/logo-paper.svg" />
```

The system is dark-only — there is no light tone. Labels are `--text-sm` mono at 0.1em tracking on `--paper-100`; don't drop them to muted greys. Height is `--nav-height` (68px min). Sets `aria-current="page"` on the active link.

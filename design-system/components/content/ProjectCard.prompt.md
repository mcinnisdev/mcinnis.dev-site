The site's signature block: an ink slab cut by a full-height 18.4° wedge carrying the project's index number. Featured entries get a solid orange wedge; the rest get a hatched one that warms on hover.

```jsx
<ProjectCard index={1} featured title="SkyOps — M365 Automation & Operations"
  kicker="Internal tool · 2025" status="active"
  description="An internal automation platform for an MSP…"
  tags={['Azure Functions','PowerShell','Graph']} href="/projects/skyops/" onOpen={open} />
```

Title must use the ` — ` form; the component splits it into a bold name line and a lighter descriptor line. Use `featured` once per page. Stack non-featured cards full-width — the wedge column is what aligns them into a list.

const { NavBar, SiteFooter } = window.McinnisDevDesignSystem_a1d2f2;

function Shell({ current, onNavigate, children }) {
  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)' }}>
      <NavBar items={window.SITE.nav} current={current} onNavigate={onNavigate} logoSrc="../../assets/logo-paper.svg" />
      <main>{children}</main>
      <SiteFooter
        email="nick@mcinnis.dev"
        links={[{ label: 'GitHub', href: 'https://github.com/mcinnisdev', icon: 'github' }, { label: 'Source', href: 'https://github.com/mcinnisdev/mcinnis.dev', icon: 'code' }]}
      />
    </div>
  );
}

function Container({ children, width = 'var(--container-max)', style }) {
  return <div style={{ maxWidth: width, margin: '0 auto', padding: '0 var(--gutter-inline)', ...style }}>{children}</div>;
}

/* A full-bleed 18.4° hatch field — the brand texture used as a background plate. */
function HatchField({ density = 11, opacity = 1, style }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, opacity,
      backgroundImage: `repeating-linear-gradient(108.4deg, rgba(250,247,244,.10) 0 1px, transparent 1px ${density}px)`,
      maskImage: 'radial-gradient(120% 90% at 80% 0%, #000 0%, transparent 72%)',
      WebkitMaskImage: 'radial-gradient(120% 90% at 80% 0%, #000 0%, transparent 72%)',
      ...style,
    }} />
  );
}

/* Portrait slot — the real headshot (assets/headshot.jpg on the live site) was not
   supplied with the brand, so the kit shows a labelled slot at the same aspect. */
function PortraitSlot({ ratio = '4 / 5', label = 'headshot.jpg' }) {
  return (
    <div style={{ aspectRatio: ratio, borderRadius: 'var(--radius-card)', overflow: 'hidden', background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', display: 'grid', placeItems: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(108.4deg,rgba(250,247,244,.10) 0 1px,transparent 1px 9px)' }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-meta)', position: 'relative' }}>{label}</span>
    </div>
  );
}

/* Oversized mono stat — used in the hero rail and the about page. */
function StatRow({ items }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},minmax(0,1fr))`, gap: 'var(--space-5)', borderTop: '1px solid var(--border-hairline)', paddingTop: 'var(--space-4)' }}>
      {items.map(([v, l]) => (
        <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-display)', color: 'var(--text-display)' }}>{v}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-meta)' }}>{l}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Shell, Container, PortraitSlot, HatchField, StatRow });

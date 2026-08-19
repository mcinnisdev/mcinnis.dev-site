import React, { useState } from 'react';

/**
 * Site header. Ink, hairline base, and the brand's slanted-tab nav: each link
 * sits in an 18.4°-skewed slab (the logo's stroke angle) that fills terracotta
 * when active. Labels stay upright and high-contrast.
 */
export function NavBar({ items = [], current, onNavigate, logoSrc = 'assets/logo-paper.svg', wordmark = 'Nick McInnis', style, ...rest }) {
  const [hovered, setHovered] = useState(null);
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 20, minHeight: 'var(--nav-height)',
        display: 'flex', alignItems: 'stretch',
        background: 'var(--surface-veil)',
        backdropFilter: 'var(--blur-veil)', WebkitBackdropFilter: 'var(--blur-veil)',
        borderBottom: '1px solid var(--border-subtle)', ...style,
      }}
      {...rest}
    >
      <div style={{ width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-inline)', display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: 'var(--space-5)' }}>
        <a
          href="#" onClick={e => { e.preventDefault(); onNavigate && onNavigate(items[0] && items[0].id); }}
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none', flexShrink: 0 }}
        >
          <img src={logoSrc} alt="" width="28" height="28" style={{ display: 'block' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', color: 'var(--paper-0)' }}>{wordmark}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--paper-300)' }}>mcinnis.dev</span>
          </span>
        </a>

        <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--space-1)' }}>
          {items.map(it => {
            const active = it.id === current;
            const hot = hovered === it.id;
            return (
              <a
                key={it.id} href={it.href || '#'}
                aria-current={active ? 'page' : undefined}
                onClick={e => { e.preventDefault(); onNavigate && onNavigate(it.id); }}
                onMouseEnter={() => setHovered(it.id)} onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative', display: 'flex', alignItems: 'center',
                  padding: '0 var(--space-4)', textDecoration: 'none',
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--weight-medium)', letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--ink-900)' : hot ? 'var(--paper-0)' : 'var(--paper-100)',
                  transition: 'var(--transition-control)',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute', inset: '12px 2px',
                    background: active ? 'var(--terracotta-500)' : hot ? 'rgba(250,247,244,.12)' : 'transparent',
                    transform: 'skewX(var(--brand-slant))', borderRadius: 'var(--radius-xs)',
                    transition: 'var(--transition-control)',
                  }}
                />
                <span style={{ position: 'relative' }}>{it.label}</span>
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute', left: 6, right: 6, bottom: 0, height: 3,
                    background: 'var(--terracotta-500)',
                    transform: active ? 'none' : 'scaleX(0)', transformOrigin: 'left',
                    transition: 'transform var(--dur-base) var(--ease-out)',
                  }}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

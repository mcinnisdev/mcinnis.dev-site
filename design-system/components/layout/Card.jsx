import React, { useState } from 'react';

/** The brand's container: ink slab, hairline border, 14px radius, lifts 2px on hover when interactive. */
export function Card({ variant = 'raised', interactive = false, padding = 'var(--space-5)', accentEdge = false, children, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const skins = {
    raised: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)' },
    sunken: { background: 'var(--surface-sunken)', border: '1px solid var(--border-hairline)', color: 'var(--text-body)' },
    accent: { background: 'var(--surface-accent-soft)', border: '1px solid var(--terracotta-700)', color: 'var(--text-body)' },
    outline: { background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text-body)' },
    paper: { background: 'var(--paper-50)', border: '1px solid var(--paper-200)', color: 'var(--ink-700)' },
  };
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', overflow: 'hidden', padding,
        borderRadius: 'var(--radius-card)',
        boxShadow: interactive && hover ? 'var(--shadow-2)' : 'var(--shadow-1)',
        transform: interactive && hover ? 'var(--lift-hover)' : 'none',
        transition: 'var(--transition-control)',
        ...skins[variant], ...style,
      }}
      {...rest}
    >
      {accentEdge && <span style={{ position: 'absolute', inset: '0 auto 0 0', width: 3, background: 'var(--terracotta-500)' }} />}
      {children}
    </div>
  );
}

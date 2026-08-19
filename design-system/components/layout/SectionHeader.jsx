import React from 'react';
import { Kicker } from '../core/Kicker.jsx';

/** Kicker + title + optional trailing action, above a hairline rule. */
export function SectionHeader({ kicker, title, description, action, tone = 'default', style, ...rest }) {
  const inverse = tone === 'inverse';
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-5)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {kicker && <Kicker tone={inverse ? 'inverse' : 'default'}>{kicker}</Kicker>}
          {title && <h2 style={{ fontSize: 'var(--text-2xl)', color: inverse ? 'var(--text-on-inverse)' : 'var(--text-display)', letterSpacing: 'var(--tracking-tight)' }}>{title}</h2>}
        </div>
        {action && <div style={{ flexShrink: 0 }}>{action}</div>}
      </div>
      {description && <p style={{ fontFamily: 'var(--font-prose)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)', maxWidth: 'var(--measure-prose)' }}>{description}</p>}
      <div style={{ height: 1, background: 'var(--border-hairline)', marginTop: 'var(--space-1)' }} />
    </header>
  );
}

import React from 'react';
import { Icon } from './Icon.jsx';

/** Mono uppercase eyebrow that opens nearly every section on the site. */
export function Kicker({ children, icon, tone = 'default', style, ...rest }) {
  const colors = { default: 'var(--text-meta)', accent: 'var(--text-accent)', inverse: 'var(--ink-200)' };
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
        color: colors[tone], ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={12} />}
      {children}
    </div>
  );
}

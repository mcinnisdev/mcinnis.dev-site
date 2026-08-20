import React from 'react';
import { Icon } from '../core/Icon.jsx';

const tones = {
  note: { fg: 'var(--text-body)', bg: 'var(--surface-sunken)', edge: 'var(--border-strong)', icon: 'info' },
  accent: { fg: 'var(--orange-200)', bg: 'var(--surface-accent-soft)', edge: 'var(--orange-500)', icon: 'sparkle' },
  archived: { fg: 'var(--text-muted)', bg: 'var(--surface-sunken)', edge: 'var(--ink-500)', icon: 'archive' },
};

/** Inline aside inside prose — disclaimers, archive notices, build-log asides. */
export function Callout({ tone = 'note', title, icon, children, style, ...rest }) {
  const t = tones[tone] || tones.note;
  return (
    <aside
      style={{
        display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-4)',
        background: t.bg, color: t.fg, borderLeft: '3px solid ' + t.edge,
        borderRadius: '0 var(--radius-md) var(--radius-md) 0', ...style,
      }}
      {...rest}
    >
      <Icon name={icon || t.icon} size={18} style={{ marginTop: 2, opacity: .8 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        {title && <strong style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)' }}>{title}</strong>}
        <div style={{ fontFamily: 'var(--font-prose)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)' }}>{children}</div>
      </div>
    </aside>
  );
}

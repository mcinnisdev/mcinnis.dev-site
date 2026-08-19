import React from 'react';

const map = {
  active: { fg: 'var(--status-active-fg)', bg: 'var(--status-active-bg)', label: 'Active' },
  wip: { fg: 'var(--status-wip-fg)', bg: 'var(--status-wip-bg)', label: 'In progress' },
  archived: { fg: 'var(--status-archived-fg)', bg: 'var(--status-archived-bg)', label: 'Archived' },
  info: { fg: 'var(--status-info-fg)', bg: 'var(--status-info-bg)', label: 'Note' },
};

/** Project lifecycle badge: dot + mono label. */
export function StatusBadge({ status = 'active', children, dot = true, style, ...rest }) {
  const s = map[status] || map.active;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, height: 22, padding: '0 8px',
        borderRadius: 'var(--radius-pill)', background: s.bg, color: s.fg,
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'currentColor' }} />}
      {children || s.label}
    </span>
  );
}

import React from 'react';

/** Mono, uppercase-free tech tag — the stack chips under a project. */
export function Tag({ children, tone = 'neutral', style, ...rest }) {
  const tones = {
    neutral: { background: 'var(--surface-sunken)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' },
    accent: { background: 'var(--surface-accent-soft)', color: 'var(--orange-700)', border: '1px solid var(--orange-100)' },
    inverse: { background: 'rgba(250,247,244,.06)', color: 'var(--text-on-inverse-muted)', border: '1px solid var(--border-inverse)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', height: 24, padding: '0 var(--space-2)',
        borderRadius: 'var(--radius-xs)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-normal)', whiteSpace: 'nowrap', ...tones[tone], ...style,
      }}
      {...rest}
    >{children}</span>
  );
}

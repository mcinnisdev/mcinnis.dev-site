import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { SlantRule } from '../layout/SlantRule.jsx';

/** Footer on the deepest ink band: contact line, social links, copyright, hatch edge. */
export function SiteFooter({ email = 'nick@mcinnis.dev', links = [], note = '© Nick McInnis', style, ...rest }) {
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)', borderTop: '1px solid var(--border-hairline)', ...style }} {...rest}>
      <SlantRule height={10} density={7} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--gutter-inline) var(--space-7)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--paper-300)' }}>Get in touch</span>
          <a href={'mailto:' + email} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--paper-50)', textDecoration: 'none', letterSpacing: 'var(--tracking-tight)' }}>{email}</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--paper-200)', textDecoration: 'none' }}>
                {l.icon && <Icon name={l.icon} size={14} />}{l.label}
              </a>
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-300)' }}>{note}</span>
        </div>
      </div>
    </footer>
  );
}

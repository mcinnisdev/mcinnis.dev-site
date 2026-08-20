import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const sizes = {
  sm: { padding: '0 var(--space-3)', height: 32, font: 'var(--text-sm)', gap: 6, icon: 14 },
  md: { padding: '0 var(--space-4)', height: 40, font: 'var(--text-base)', gap: 8, icon: 16 },
  lg: { padding: '0 var(--space-5)', height: 48, font: 'var(--text-md)', gap: 10, icon: 18 },
};

function skin(variant, hover) {
  switch (variant) {
    case 'primary':
      return { background: hover ? 'var(--orange-400)' : 'var(--orange-500)', color: 'var(--text-on-accent)', border: '1px solid transparent', boxShadow: hover ? 'var(--shadow-accent-glow)' : 'var(--shadow-1)' };
    case 'secondary':
      return { background: hover ? 'var(--ink-700)' : 'var(--surface-raised)', color: 'var(--text-display)', border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'), boxShadow: 'var(--shadow-1)' };
    case 'ghost':
      return { background: hover ? 'var(--surface-accent-soft)' : 'transparent', color: 'var(--text-accent)', border: '1px solid transparent', boxShadow: 'none' };
    case 'inverse':
      return { background: hover ? 'var(--paper-0)' : 'var(--paper-50)', color: 'var(--ink-900)', border: '1px solid transparent', boxShadow: 'none' };
    default:
      return {};
  }
}

/** The brand's action control: squared-off, orange for the one primary action per view. */
export function Button({ variant = 'primary', size = 'md', icon, iconPosition = 'right', disabled, href, children, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = sizes[size] || sizes.md;
  const Tag = href ? 'a' : 'button';
  const glyph = icon ? <Icon name={icon} size={s.icon} /> : null;
  return (
    <Tag
      href={href}
      disabled={!href && disabled ? true : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, borderRadius: 'var(--radius-control)',
        fontFamily: 'var(--font-ui)', fontSize: s.font, fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-tight)', textDecoration: 'none', whiteSpace: 'nowrap',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.42 : 1, transition: 'var(--transition-control)',
        transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
        ...skin(variant, hover && !disabled), ...style,
      }}
      {...rest}
    >
      {iconPosition === 'left' && glyph}
      <span>{children}</span>
      {iconPosition === 'right' && glyph}
    </Tag>
  );
}

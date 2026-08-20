import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const boxes = { sm: 30, md: 36, lg: 44 };

/** Square, quiet icon-only control — nav toggles, external links, copy actions. */
export function IconButton({ icon, size = 'md', variant = 'quiet', label, href, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const box = boxes[size] || boxes.md;
  const Tag = href ? 'a' : 'button';
  const skins = {
    quiet: { background: hover ? 'var(--surface-sunken)' : 'transparent', color: hover ? 'var(--text-display)' : 'var(--text-muted)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--surface-sunken)' : 'var(--surface-raised)', color: 'var(--text-display)', border: '1px solid var(--border-subtle)' },
    accent: { background: hover ? 'var(--orange-600)' : 'var(--orange-500)', color: 'var(--text-on-accent)', border: '1px solid transparent' },
  };
  return (
    <Tag
      href={href} aria-label={label}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: box, height: box, borderRadius: 'var(--radius-control)', cursor: 'pointer',
        transition: 'var(--transition-control)', ...skins[variant], ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === 'lg' ? 20 : 16} />
    </Tag>
  );
}

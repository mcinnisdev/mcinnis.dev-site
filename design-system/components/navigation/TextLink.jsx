import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/** Inline link: orange, underline grows to full opacity on hover. */
export function TextLink({ children, href, external = false, tone = 'accent', style, ...rest }) {
  const [hover, setHover] = useState(false);
  const color = tone === 'quiet' ? (hover ? 'var(--text-accent)' : 'var(--text-body)') : (hover ? 'var(--text-link-hover)' : 'var(--text-link)');
  return (
    <a
      href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'baseline', gap: 4, color,
        textDecoration: 'underline', textDecorationColor: hover ? 'currentColor' : 'color-mix(in oklab, currentColor 35%, transparent)',
        textUnderlineOffset: 3, transition: 'var(--transition-control)', ...style,
      }}
      {...rest}
    >
      {children}
      {external && <Icon name="arrow-up-right" size={13} strokeAlign="text" />}
    </a>
  );
}

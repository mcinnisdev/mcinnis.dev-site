import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/** A writing entry: mono date + project tag, Space Grotesk title, serif standfirst. */
export function PostListItem({ date, project, title, excerpt, onOpen, style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      onClick={onOpen}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
        padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-hairline)',
        cursor: onOpen ? 'pointer' : 'default', transition: 'var(--transition-control)', ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-meta)' }}>
        <span>{date}</span>
        {project && <><span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--border-strong)' }} /><span style={{ color: 'var(--text-accent)' }}>{project}</span></>}
      </div>
      <h3 style={{ fontSize: 'var(--text-xl)', letterSpacing: 'var(--tracking-tight)', color: hover ? 'var(--text-accent)' : 'var(--text-display)', display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)' }}>
        {title}
        <Icon name="arrow-up-right" size={16} style={{ opacity: hover ? 1 : 0, transform: hover ? 'none' : 'translate(-4px,4px)', transition: 'var(--transition-control)' }} />
      </h3>
      {excerpt && <p style={{ fontFamily: 'var(--font-prose)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: 'var(--measure-prose)' }}>{excerpt}</p>}
    </article>
  );
}

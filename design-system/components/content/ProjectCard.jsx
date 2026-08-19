import React, { useState } from 'react';
import { Tag } from '../core/Tag.jsx';
import { StatusBadge } from '../core/StatusBadge.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * The site's signature block. An ink slab cut by a full-height 18.4° terracotta
 * wedge on the left carrying the project's index number; the wedge widens and
 * the hatch field brightens on hover. Title is display-scale, not card-scale.
 */
export function ProjectCard({ index = 1, title, kicker, status = 'active', statusLabel, description, tags = [], href, featured = false, onOpen, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const wedge = featured ? 108 : 84;
  const parts = String(title).split(' — ');
  const name = parts[0];
  const rest_ = parts.slice(1).join(' — ');

  return (
    <article
      onClick={onOpen}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'flex', alignItems: 'stretch', overflow: 'hidden',
        background: 'var(--surface-card)',
        border: '1px solid ' + (hover ? 'var(--terracotta-500)' : 'var(--border-subtle)'),
        borderRadius: 'var(--radius-card)',
        boxShadow: hover ? 'var(--shadow-2)' : 'var(--shadow-1)',
        transform: hover ? 'var(--lift-hover)' : 'none',
        transition: 'var(--transition-control)',
        cursor: onOpen ? 'pointer' : 'default', ...style,
      }}
      {...rest}
    >
      {/* slanted index wedge — clipped so the diagonal never crosses into the copy */}
      <div style={{ position: 'relative', width: hover ? wedge + 10 : wedge, flex: '0 0 auto', overflow: 'hidden', transition: 'width var(--dur-base) var(--ease-out)' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            clipPath: 'polygon(0 0, 100% 0, 58% 100%, 0 100%)',
            background: featured ? 'var(--terracotta-500)' : 'var(--surface-sunken)',
            backgroundImage: featured ? 'none' : `repeating-linear-gradient(108.4deg, ${hover ? 'rgba(224,120,80,.55)' : 'rgba(250,247,244,.16)'} 0 1px, transparent 1px 8px)`,
            transition: 'background-image var(--dur-base) var(--ease-standard)',
          }}
        />
        <span
          style={{
            position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
            paddingRight: '22%',
            fontFamily: 'var(--font-mono)', fontSize: featured ? 'var(--text-2xl)' : 'var(--text-xl)',
            fontWeight: 'var(--weight-medium)',
            color: featured ? 'var(--ink-900)' : hover ? 'var(--terracotta-400)' : 'var(--ink-300)',
            transition: 'var(--transition-control)',
          }}
        >{String(index).padStart(2, '0')}</span>
      </div>

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: featured ? 'var(--space-6)' : 'var(--space-5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          {kicker && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-meta)' }}>{kicker}</span>}
          <StatusBadge status={status}>{statusLabel}</StatusBadge>
        </div>

        <h3 style={{ display: 'flex', flexDirection: 'column', gap: 2, fontFamily: 'var(--font-display)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-snug)' }}>
          <span style={{ fontSize: featured ? 'var(--text-3xl)' : 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', color: hover ? 'var(--terracotta-400)' : 'var(--text-display)', transition: 'var(--transition-control)' }}>{name}</span>
          {rest_ && <span style={{ fontSize: featured ? 'var(--text-lg)' : 'var(--text-md)', fontWeight: 'var(--weight-regular)', color: 'var(--text-muted)', letterSpacing: 'var(--tracking-tight)' }}>{rest_}</span>}
        </h3>

        {description && <p style={{ fontFamily: 'var(--font-prose)', fontSize: featured ? 'var(--text-lg)' : 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: '62ch' }}>{description}</p>}

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: 'auto', paddingTop: 'var(--space-2)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', flex: 1, minWidth: 0 }}>
            {tags.slice(0, featured ? 9 : 5).map(t => <Tag key={t}>{t}</Tag>)}
            {tags.length > (featured ? 9 : 5) && <Tag tone="accent">+{tags.length - (featured ? 9 : 5)}</Tag>}
          </div>
          {href && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: hover ? 'var(--terracotta-400)' : 'var(--text-meta)', transition: 'var(--transition-control)' }}>
              View <Icon name="arrow-right" size={14} style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }} />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

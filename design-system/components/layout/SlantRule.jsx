import React from 'react';

/** Repeating 18.4° hatch lifted from the logo's stroke angle — the brand's only decorative texture. */
export function SlantRule({ height = 10, density = 8, tone = 'default', style, ...rest }) {
  const color = tone === 'accent' ? 'var(--terracotta-600)' : tone === 'strong' ? 'rgba(250,247,244,.34)' : 'rgba(250,247,244,.16)';
  return (
    <div
      aria-hidden="true"
      style={{
        height,
        backgroundImage: `repeating-linear-gradient(108.4deg, ${color} 0 1px, transparent 1px ${density}px)`,
        ...style,
      }}
      {...rest}
    />
  );
}

import React from 'react';

const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';

/** Lucide icon rendered as a currentColor mask — no inline SVG, no icon font. */
export function Icon({ name, size = 18, strokeAlign, style, label, ...rest }) {
  const url = `url("${CDN}${name}.svg")`;
  return (
    <span
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        display: 'inline-block', width: size, height: size, flex: '0 0 auto',
        backgroundColor: 'currentColor',
        WebkitMaskImage: url, maskImage: url,
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center', maskPosition: 'center',
        WebkitMaskSize: 'contain', maskSize: 'contain',
        verticalAlign: strokeAlign === 'text' ? '-.15em' : 'middle',
        ...style,
      }}
      {...rest}
    />
  );
}

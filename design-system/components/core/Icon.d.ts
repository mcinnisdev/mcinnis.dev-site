import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon slug, e.g. "arrow-up-right", "github", "terminal". */
  name: string;
  /** Pixel box. 14 / 16 / 18 / 20 / 24 are the sizes in use. */
  size?: number;
  /** "text" nudges the glyph onto a text baseline. */
  strokeAlign?: 'text' | 'box';
  /** Accessible name. Omit for decorative icons (renders aria-hidden). */
  label?: string;
}
export function Icon(props: IconProps): JSX.Element;

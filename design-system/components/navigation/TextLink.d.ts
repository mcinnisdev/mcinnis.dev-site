import * as React from 'react';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  /** Opens in a new tab and appends an arrow glyph. */
  external?: boolean;
  /** "quiet" starts in body colour and warms on hover. */
  tone?: 'accent' | 'quiet';
  children?: React.ReactNode;
}
export function TextLink(props: TextLinkProps): JSX.Element;

import * as React from 'react';

export interface KickerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Optional small Lucide glyph before the label. */
  icon?: string;
  tone?: 'default' | 'accent' | 'inverse';
}
export function Kicker(props: KickerProps): JSX.Element;

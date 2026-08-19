import * as React from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'note' | 'accent' | 'archived';
  title?: React.ReactNode;
  /** Lucide slug override. */
  icon?: string;
  children?: React.ReactNode;
}
export function Callout(props: CalloutProps): JSX.Element;

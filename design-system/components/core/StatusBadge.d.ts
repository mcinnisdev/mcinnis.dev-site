import * as React from 'react';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: 'active' | 'wip' | 'archived' | 'info';
  /** Overrides the default label text. */
  children?: React.ReactNode;
  dot?: boolean;
}
export function StatusBadge(props: StatusBadgeProps): JSX.Element;

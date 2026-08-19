import * as React from 'react';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  kicker?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Right-aligned trailing element, usually a ghost Button. */
  action?: React.ReactNode;
  tone?: 'default' | 'inverse';
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;

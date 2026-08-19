import * as React from 'react';

export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Lucide slug. */
  icon: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'quiet' | 'outline' | 'accent';
  /** Required accessible name. */
  label: string;
  href?: string;
}
export function IconButton(props: IconButtonProps): JSX.Element;

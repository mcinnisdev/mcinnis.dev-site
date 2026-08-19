import * as React from 'react';

/**
 * Primary action control.
 * @startingPoint section="Core" subtitle="Buttons, icon buttons, tags and status badges" viewport="700x260"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = terracotta fill (one per view); secondary = paper card; ghost = text-weight; inverse = light on ink. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide slug passed through to <Icon>. */
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;

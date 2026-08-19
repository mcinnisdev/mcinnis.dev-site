import * as React from 'react';

export interface NavItem { id: string; label: string; href?: string }

/**
 * Sticky site header.
 * @startingPoint section="Navigation" subtitle="Site header, footer and text links" viewport="700x220"
 */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  /** id of the active item. */
  current?: string;
  onNavigate?: (id: string) => void;
  /** Path to the paper logo SVG, relative to the consuming page. */
  logoSrc?: string;
  wordmark?: string;
}
export function NavBar(props: NavBarProps): JSX.Element;

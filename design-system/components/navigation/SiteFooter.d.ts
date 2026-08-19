import * as React from 'react';

export interface FooterLink { label: string; href: string; icon?: string }

export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  email?: string;
  links?: FooterLink[];
  note?: string;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;

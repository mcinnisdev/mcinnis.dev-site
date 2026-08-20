import * as React from 'react';

/**
 * Project index / featured entry.
 * @startingPoint section="Content" subtitle="Project cards, post rows and callouts" viewport="700x340"
 */
export interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Position in the list — rendered zero-padded in the slanted wedge. */
  index?: number;
  /** `Name — What it is`; the em-dash split sets the two title lines. */
  title: string;
  /** Small mono eyebrow above the title, e.g. "Internal tool · 2025". */
  kicker?: React.ReactNode;
  status?: 'active' | 'wip' | 'archived' | 'info';
  /** Overrides the badge text, e.g. "Archived · Feb 2026". */
  statusLabel?: React.ReactNode;
  description?: React.ReactNode;
  /** Stack chips. Overflow past 5 (9 when featured) collapses to a +N tag. */
  tags?: string[];
  /** Presence adds the "View →" affordance. */
  href?: string;
  /** Solid orange wedge + display-scale title — one per page. */
  featured?: boolean;
  onOpen?: () => void;
}
export function ProjectCard(props: ProjectCardProps): JSX.Element;

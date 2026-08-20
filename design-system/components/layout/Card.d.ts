import * as React from 'react';

/**
 * Content container.
 * @startingPoint section="Layout" subtitle="Cards, section headers and the slanted rule" viewport="700x300"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** raised = default ink slab; sunken = deepest black; accent = orange wash; outline; paper = the light escape hatch. */
  variant?: 'raised' | 'sunken' | 'accent' | 'outline' | 'paper';
  /** Adds hover lift + deeper shadow. Use for cards that are whole-surface links. */
  interactive?: boolean;
  /** CSS padding value. Default var(--space-5). */
  padding?: string;
  /** 3px orange left edge. */
  accentEdge?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;

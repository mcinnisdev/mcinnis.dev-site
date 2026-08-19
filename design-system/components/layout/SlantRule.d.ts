import * as React from 'react';

export interface SlantRuleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Band height in px. 6–14 for dividers, 40+ for section fills. */
  height?: number;
  /** Distance between hatch lines in px. */
  density?: number;
  tone?: 'default' | 'strong' | 'accent';
}
export function SlantRule(props: SlantRuleProps): JSX.Element;

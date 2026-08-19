import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'inverse';
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;

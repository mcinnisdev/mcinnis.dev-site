import * as React from 'react';

export interface PostListItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Pre-formatted, e.g. "Feb 24, 2026". */
  date: React.ReactNode;
  /** Related project slug shown in orange mono, e.g. "ink". */
  project?: React.ReactNode;
  title: React.ReactNode;
  excerpt?: React.ReactNode;
  onOpen?: () => void;
}
export function PostListItem(props: PostListItemProps): JSX.Element;

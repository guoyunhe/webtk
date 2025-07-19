import classNames from 'classnames';
import { ReactNode } from 'react';

export interface ToolBarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export default function ToolBar({ children, className, ...rest }: ToolBarProps) {
  return (
    <div className={classNames('webtk-tool-bar', className)} {...rest}>
      {children}
    </div>
  );
}

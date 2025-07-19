import classNames from 'classnames';
import { ReactNode } from 'react';
import './StatusBar.css';

export interface StatusBarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export default function StatusBar({ children, className, ...rest }: StatusBarProps) {
  return (
    <div className={classNames('webtk-status-bar', className)} {...rest}>
      {children}
    </div>
  );
}

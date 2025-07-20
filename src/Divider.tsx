import classNames from 'classnames';
import { ReactNode } from 'react';
import './Divider.css';

export interface DividerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export default function Divider({ children, className, ...rest }: DividerProps) {
  return (
    <div className={classNames('webtk-tool-bar', className)} {...rest}>
      {children}
    </div>
  );
}

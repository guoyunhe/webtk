import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface WebtkProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Webtk({ children, className, style }: WebtkProps) {
  return (
    <div className={cn('webtk', className)} style={style}>
      {children}
    </div>
  );
}

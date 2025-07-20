import classNames from 'classnames';
import { ReactNode } from 'react';

export interface WindowProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export default function Window({ children, className, ...rest }: WindowProps) {
  return (
    <div className={classNames('webtk-window', className)} {...rest}>
      {children}
    </div>
  );
}

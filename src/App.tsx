import cn from 'classnames';
import { ReactNode } from 'react';
import './App.css';

export interface AppProps {
  children?: ReactNode;
  theme?: string;
}

export default function App({ children, theme = 'breeze' }: AppProps) {
  return <div className={cn('webtk-app', `webtk-theme-${theme}`)}>{children}</div>;
}

import cn from 'classnames';
import { ReactNode } from 'react';
import './App.css';
import AppContext from './AppContext';

export interface AppProps {
  children?: ReactNode;
  theme?: string;
}

export default function App({ children, theme = 'breeze' }: AppProps) {
  return (
    <AppContext.Provider value={{ theme }}>
      <div className={cn('webtk-app', `webtk-theme-${theme}`)}>{children}</div>
    </AppContext.Provider>
  );
}

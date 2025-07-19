import { createContext } from 'react';
import AppConfig from './AppConfig';

const AppContext = createContext<AppConfig>({ theme: 'breeze' });

export default AppContext;

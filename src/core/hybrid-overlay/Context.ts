import { createContext } from 'react';
import type { IHybridContextProps } from './types';

export const HybridContext = createContext<IHybridContextProps>({
  colorMode: {
    colorMode: 'light',
    toggleColorMode: () => {},
    setColorMode: () => {},
    accessibleColors: false,
    setAccessibleColors: () => {},
  },
});

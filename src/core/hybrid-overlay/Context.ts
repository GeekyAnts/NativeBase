import { createContext } from 'react';
import type { IHybridContextProps } from './types';

export const HybridContext = createContext<IHybridContextProps>({
  overlay: {},
  popover: {},
  colorMode: {},
});

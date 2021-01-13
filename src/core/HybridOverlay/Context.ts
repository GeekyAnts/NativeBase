import { createContext } from 'react';
import type { IHybridContextProps } from './props';

export const HybridContext = createContext<IHybridContextProps>({
  overlay: {},
  popover: {},
});

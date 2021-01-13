import { createContext } from 'react';
import type { IOverlayContextProps } from './props';

export const OverlayContext = createContext<IOverlayContextProps>({});

import { createContext } from 'react';
import type { IPopoverContextProps } from './props';

export const PopoverContext = createContext<IPopoverContextProps>({});

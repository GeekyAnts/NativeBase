import { createContext } from 'react';
import type { IFormContext } from './types';
export let FormContext = createContext<IFormContext | null>(null);

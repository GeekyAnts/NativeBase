import { createContext } from '../utils/createContext';
import type { ITheme } from './../theme';
import type { IModeType } from './StrictMode';

export interface INativebaseConfig {
  theme?: ITheme;
  suppressColorAccessibilityWarning?: boolean;
  dependencies?: {
    'linear-gradient': any;
  };
  enableRem?: boolean;
  strictMode?: IModeType;
  disableContrastText?: boolean;
}

export const defaultConfig: INativebaseConfig = {
  strictMode: 'off',
};

export const [NativeBaseConfigProvider, useNativeBaseConfig] = createContext<{
  config: INativebaseConfig;
  currentBreakpoint: number;
  isSSR?: boolean;
  theme?: ITheme;
  disableContrastText?: boolean;
}>('NativeBaseConfigProvider');

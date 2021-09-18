import { createContext } from '../utils/createContext';
import { ThemeConsumer, ThemeContext } from 'styled-components/native';
import type { ITheme } from './../theme';
import type { IModeType } from './StrictMode';

export {
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};

export interface INativebaseConfig {
  theme?: ITheme;
  suppressColorAccessibilityWarning?: boolean;
  dependencies?: {
    'linear-gradient': any;
  };
  enableRem?: boolean;
  strictMode?: IModeType;
}

export const defaultConfig: INativebaseConfig = {
  strictMode: 'off',
};

export const [NativeBaseConfigProvider, useNativeBaseConfig] = createContext<{
  config: INativebaseConfig;
  currentBreakpoint: number;
  isSSR?: boolean;
}>('NativeBaseConfigProvider');

import { createContext } from '../utils/createContext';
import { ThemeConsumer, ThemeContext } from 'styled-components/native';
import type { ITheme } from './../theme';

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
}

export const [NativeBaseConfigProvider, useNativeBaseConfig] = createContext<{
  config: INativebaseConfig;
}>('NativeBaseConfigProvider');

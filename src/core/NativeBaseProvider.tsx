import React from 'react';
import {
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
} from 'styled-components/native';
import { theme as defaultTheme, ITheme } from './../theme';
import type { IColorModeProviderProps } from './color-mode';
import HybridProvider from './hybrid-overlay/HybridProvider';

export interface NativeBaseProviderProps {
  theme?: ITheme;
  colorModeManager?: IColorModeProviderProps['colorModeManager'];
  children?: React.ReactNode;
}

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const { colorModeManager, theme = defaultTheme, children } = props;
  return (
    <ThemeProvider theme={theme}>
      <HybridProvider
        colorModeManager={colorModeManager}
        options={theme.config}
      >
        {children}
      </HybridProvider>
    </ThemeProvider>
  );
};

export {
  NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};

import React from 'react';
import {
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
} from 'styled-components/native';
import { theme as defaultTheme, ITheme } from './../theme';
import { IColorModeProviderProps, ColorModeProvider } from './../color-mode';
import NativeBaseWrapper from './NativeBaseWrapper';

export interface NativeBaseProviderProps {
  theme?: ITheme;
  colorModeManager?: IColorModeProviderProps['colorModeManager'];
  children?: React.ReactNode;
}

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const { children, colorModeManager, theme = defaultTheme, ...rest } = props;
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        colorModeManager={colorModeManager}
        options={theme.config}
      >
        <NativeBaseWrapper {...rest}>{children}</NativeBaseWrapper>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export {
  NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};

import React from 'react';
import {
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
} from 'styled-components/native';
import { theme as defaultTheme, ITheme } from './../theme';
import { IColorModeProviderProps, ColorModeProvider } from './../color-mode';
import HybridProvider from './HybridOverlay/HybridProvider';
export interface NativeBaseProviderProps {
  theme?: ITheme;
  colorModeManager?: IColorModeProviderProps['colorModeManager'];
  children?: React.ReactNode;
  disableSafeArea?: boolean;
}

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const {
    colorModeManager,
    theme = defaultTheme,
    // disableSafeArea,
    children,
  } = props;
  // const Wrapper = disableSafeArea ? View : SafeAreaView;
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        colorModeManager={colorModeManager}
        options={theme.config}
      >
        <HybridProvider>{children}</HybridProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export {
  NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};

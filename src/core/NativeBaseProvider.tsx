import React from 'react';
import {
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
} from 'styled-components/native';
import { theme as defaultTheme, ITheme } from './../theme';
import {
  IColorModeProviderProps,
  ColorModeProvider,
  useColorModeValue,
} from './../color-mode';
import OverlayProvider from './Overlay/OverlayProvider';
import PopoverProvider from './Popover/PopoverProvider';
import View from '../components/primitives/View';
import SafeAreaView from '../components/primitives/SafeAreaView';

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
    disableSafeArea,
    children,
  } = props;

  const Wrapper = disableSafeArea ? View : SafeAreaView;
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        colorModeManager={colorModeManager}
        options={theme.config}
      >
        <Wrapper bg={useColorModeValue(`gray.50`, `gray.800`)} flex={1}>
          <OverlayProvider>
            <PopoverProvider>{children}</PopoverProvider>
          </OverlayProvider>
        </Wrapper>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export {
  NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};

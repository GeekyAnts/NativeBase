import React from 'react';
import {
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
} from 'styled-components/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { theme as defaultTheme, ITheme } from './../theme';
import {
  IColorModeProviderProps,
  ColorModeProvider,
  useColorModeValue,
} from './../color-mode';
import OverlayProvider from './Overlay/OverlayProvider';
import PopoverProvider from './Popover/PopoverProvider';
import View from '../components/primitives/View';

const ColoredBackground = ({ children, ...props }: any) => (
  <View {...props} bg={useColorModeValue(`gray.50`, `gray.800`)} flex={1}>
    <OverlayProvider>
      <PopoverProvider>{children}</PopoverProvider>
    </OverlayProvider>
  </View>
);

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
    ...rest
  } = props;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        colorModeManager={colorModeManager}
        options={theme.config}
      >
        {disableSafeArea ? (
          <ColoredBackground {...rest} />
        ) : (
          <SafeAreaView style={styles.container}>
            <ColoredBackground {...rest} />
          </SafeAreaView>
        )}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export {
  NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};

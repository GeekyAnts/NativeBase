import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  SafeAreaProvider,
  initialWindowMetrics as defaultInitialWindowMetrics,
} from 'react-native-safe-area-context';
import { SSRProvider } from '@react-native-aria/utils';
import { theme as defaultTheme, ITheme } from './../theme';
import type { IColorModeProviderProps } from './color-mode';
import HybridProvider from './hybrid-overlay/HybridProvider';
import { OverlayProvider } from '@react-native-aria/overlays';
import { ToastProvider } from '../components/composites/Toast';
import {
  INativebaseConfig,
  NativeBaseConfigProvider,
} from './NativeBaseContext';

export interface NativeBaseProviderProps {
  theme?: ITheme;
  colorModeManager?: IColorModeProviderProps['colorModeManager'];
  children?: React.ReactNode;
  initialWindowMetrics?: any;
  config?: INativebaseConfig;
  // Refer https://github.com/th3rdwave/react-native-safe-area-context#testing
}

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const {
    colorModeManager,
    config = {},
    children,
    theme: propsTheme = defaultTheme,
    initialWindowMetrics,
  } = props;
  const theme = config.theme ?? propsTheme;

  return (
    <ThemeProvider theme={theme}>
      <NativeBaseConfigProvider config={config}>
        <SafeAreaProvider
          initialMetrics={initialWindowMetrics ?? defaultInitialWindowMetrics}
        >
          <HybridProvider
            colorModeManager={colorModeManager}
            options={theme.config}
          >
            <OverlayProvider>
              <ToastProvider>
                <SSRProvider>{children}</SSRProvider>
              </ToastProvider>
            </OverlayProvider>
          </HybridProvider>
        </SafeAreaProvider>
      </NativeBaseConfigProvider>
    </ThemeProvider>
  );
};

export { NativeBaseProvider };

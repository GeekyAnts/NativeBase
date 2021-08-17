import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  SafeAreaProvider,
  Metrics,
  initialWindowMetrics as defaultInitialWindowMetrics,
} from 'react-native-safe-area-context';
import { SSRProvider } from '@react-native-aria/utils';
import { theme as defaultTheme, ITheme } from './../theme';
import type { IColorModeProviderProps } from './color-mode';
import HybridProvider from './hybrid-overlay/HybridProvider';
import { OverlayProvider } from '@react-native-aria/overlays';
import { ToastProvider, ToastRef } from '../components/composites/Toast';
import {
  INativebaseConfig,
  NativeBaseConfigProvider,
} from './NativeBaseContext';
import { Platform } from 'react-native';
import { useToast } from '../components/composites/Toast';

// For SSR to work, we need to pass initial insets as 0 values on web.

// https://github.com/th3rdwave/react-native-safe-area-context/issues/132
const defaultInitialWindowMetricsBasedOnPlatform: Metrics | null = Platform.select(
  {
    web: {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    },
    default: defaultInitialWindowMetrics,
  }
);

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
          initialMetrics={
            initialWindowMetrics ?? defaultInitialWindowMetricsBasedOnPlatform
          }
        >
          <HybridProvider
            colorModeManager={colorModeManager}
            options={theme.config}
          >
            <OverlayProvider>
              <ToastProvider>
                <InitializeToastRef />
                <SSRProvider>{children}</SSRProvider>
              </ToastProvider>
            </OverlayProvider>
          </HybridProvider>
        </SafeAreaProvider>
      </NativeBaseConfigProvider>
    </ThemeProvider>
  );
};

const InitializeToastRef = () => {
  const toast = useToast();
  ToastRef.current = toast;
  return null;
};

export { NativeBaseProvider };

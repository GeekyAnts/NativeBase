import React from 'react';
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
  defaultConfig,
  INativebaseConfig,
  NativeBaseConfigProvider,
} from './NativeBaseContext';
import { useToast } from '../components/composites/Toast';
import { Platform, useWindowDimensions } from 'react-native';
import {
  getClosestBreakpoint,
  platformSpecificSpaceUnits,
} from '../theme/tools/utils';
import { ResponsiveQueryProvider } from '../utils/useResponsiveQuery';

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
  isSSR?: boolean;
  disableContrastText?: boolean;
  // Refer https://github.com/th3rdwave/react-native-safe-area-context#testing
}

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const {
    colorModeManager,
    config = defaultConfig,
    children,
    theme: propsTheme = defaultTheme,
    initialWindowMetrics,
    isSSR,
    disableContrastText,
  } = props;
  const theme = config.theme ?? propsTheme;

  const newTheme = React.useMemo(() => {
    if (config.enableRem) {
      return platformSpecificSpaceUnits(theme);
    }
    return theme;
  }, [config.enableRem, theme]);

  const windowWidth = useWindowDimensions()?.width;

  const currentBreakpoint = React.useMemo(
    () => getClosestBreakpoint(newTheme.breakpoints, windowWidth),
    [windowWidth, newTheme.breakpoints]
  );

  return (
    <NativeBaseConfigProvider
      theme={newTheme}
      config={config}
      currentBreakpoint={currentBreakpoint}
      isSSR={isSSR}
      disableContrastText={disableContrastText}
    >
      <SafeAreaProvider
        initialMetrics={
          initialWindowMetrics ?? defaultInitialWindowMetricsBasedOnPlatform
        }
      >
        <ResponsiveQueryProvider disableCSSMediaQueries={!isSSR}>
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
        </ResponsiveQueryProvider>
      </SafeAreaProvider>
    </NativeBaseConfigProvider>
  );
};

const InitializeToastRef = () => {
  const toast = useToast();
  ToastRef.current = toast;
  return null;
};

export { NativeBaseProvider };

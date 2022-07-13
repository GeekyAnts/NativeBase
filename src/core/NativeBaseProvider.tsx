import React, { useEffect, useRef } from 'react';
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
import { getClosestBreakpoint } from '../theme/tools/utils';
import { platformSpecificSpaceUnits } from '../theme/tools/platformSpecificSpaceUnits';
import {
  init as initResolvedStyleMap,
  resolvedStyledMap,
} from '../utils/styled';
import { uniqueId } from 'lodash';

initResolvedStyleMap();
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
  providerId?: string;
  // Refer https://github.com/th3rdwave/react-native-safe-area-context#testing
}

const getComponentNamesFromTheme = (theme: ITheme) => {
  const componentNames = theme?.components
    ? Object.keys(theme?.components)
    : [];
  return componentNames;
};

const getComponentVariants = (componentTheme: any) => {
  const variants = componentTheme.variants
    ? Object.keys(componentTheme.variants)
    : [];
  return variants;
};

const getComponentSizes = (componentTheme: any) => {
  const sizes = componentTheme.sizes ? Object.keys(componentTheme.sizes) : [];
  // console.log('component', componentTheme);
  return sizes;
};

function findCharacterFrequency(str: string, character: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) {
      count++;
    }
  }
  return count;
}

const isKeyWithSingleOrDoubleValue = (key: string) => {
  return findCharacterFrequency(key, '.') === 0 ||
    findCharacterFrequency(key, '.') === 1
    ? true
    : false;
};

const deleteFromResolvedMap = (
  object: any,
  providerId: string,
  value: string,
  condition: string
) => {
  const keys = Object.keys(object[providerId]);
  keys.forEach((key) => {
    if (key.startsWith(value) && key.includes(condition)) {
      delete object[providerId][key];
    }
    if (
      key.startsWith(value) &&
      !key.includes(condition) &&
      isKeyWithSingleOrDoubleValue(key)
    ) {
      delete object[providerId][key];
      // console.log(
      //   'resolvedStyledMap',
      //   JSON.parse(JSON.stringify(object)),
      //   providerId,
      //   key
      // );
    }
  });
  // return ;
};

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const {
    colorModeManager,
    config = defaultConfig,
    children,
    theme: propsTheme = defaultTheme,
    initialWindowMetrics,
    isSSR,
    disableContrastText,
    providerId,
  } = props;
  // @ts-ignore
  const { customUserTheme, ...theme } = config.theme ?? propsTheme;
  useEffect(() => {
    let components = getComponentNamesFromTheme(customUserTheme);

    components.map((component) => {
      let variants = getComponentVariants(
        customUserTheme?.components?.[component]
      );
      let sizes = getComponentSizes(customUserTheme?.components?.[component]);
      variants.map((variant) => {
        deleteFromResolvedMap(
          resolvedStyledMap,
          // @ts-ignore
          providerId,
          component,
          variant
        );
      });
      sizes.map((size) => {
        // @ts-ignore
        deleteFromResolvedMap(resolvedStyledMap, providerId, component, size);
      });
    });
  }, [customUserTheme, providerId]);

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

  const ref = useRef(providerId ?? uniqueId('my-provider-'));
  return (
    <NativeBaseConfigProvider
      theme={newTheme}
      config={config}
      currentBreakpoint={currentBreakpoint}
      isSSR={isSSR}
      disableContrastText={disableContrastText}
      providerId={ref.current}
    >
      <SafeAreaProvider
        initialMetrics={
          initialWindowMetrics ?? defaultInitialWindowMetricsBasedOnPlatform
        }
      >
        {/* <ResponsiveQueryProvider disableCSSMediaQueries={!isSSR}> */}
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
        {/* </ResponsiveQueryProvider> */}
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

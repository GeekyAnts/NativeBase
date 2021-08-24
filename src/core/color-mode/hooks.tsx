import React, { useState, useEffect } from 'react';
import type {
  ColorMode,
  StorageManager,
  IColorModeContextProps,
} from './types';
import { HybridContext } from './../hybrid-overlay/Context';
import type { IHybridContextProps } from './../hybrid-overlay/types';
import { useColorScheme } from 'react-native';

export const useColorMode = (): IColorModeContextProps => {
  const {
    colorMode: colorModeContext,
  }: {
    colorMode: IColorModeContextProps;
  } = React.useContext<IHybridContextProps>(HybridContext);
  if (colorModeContext === undefined) {
    throw new Error('useColorMode must be used within a NativeBaseProvider');
  }
  return colorModeContext;
};

export function useColorModeValue(light: any, dark: any) {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}

export function useModeManager(
  initialColorMode: ColorMode,
  useSystemColorMode: boolean | undefined,
  colorModeManager?: StorageManager
) {
  const systemColorMode = useColorScheme();

  if (useSystemColorMode) {
    initialColorMode = systemColorMode;
  }

  const [colorMode, setRawMode] = useState<ColorMode>(initialColorMode);
  async function setColorMode(val: ColorMode) {
    if (colorModeManager) {
      await colorModeManager.set(val);
    }
    setRawMode(val);
  }
  // For initial setting initial color mode from storage
  useEffect(() => {
    if (colorModeManager) {
      (async function getMode() {
        let value = await colorModeManager.get(initialColorMode);
        if (value && value !== colorMode) {
          setRawMode(value);
        }
      })();
    }
  }, [colorMode, initialColorMode, colorModeManager]);

  // Set system color mode only when user has not passed a colorModeManager
  useEffect(() => {
    if (!colorModeManager && useSystemColorMode) {
      setRawMode(systemColorMode);
    }
  }, [systemColorMode, colorModeManager, useSystemColorMode, setRawMode]);

  return { colorMode, setColorMode };
}

export function useAccessibleColors(): [
  boolean,
  (val: boolean) => void,
  () => void
] {
  const {
    colorMode: colorModeContext,
  }: {
    colorMode: IColorModeContextProps;
  } = React.useContext<IHybridContextProps>(HybridContext);
  const toggleAccessibleColors = () =>
    colorModeContext.setAccessibleColors(!colorModeContext.accessibleColors);
  return [
    colorModeContext.accessibleColors,
    colorModeContext.setAccessibleColors,
    toggleAccessibleColors,
  ];
}

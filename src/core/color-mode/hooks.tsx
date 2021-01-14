import React, { useState, useEffect } from 'react';
import type { ColorMode, StorageManager } from './types';
import { HybridContext } from './../hybrid-overlay/Context';
import type { IHybridContextProps } from './../hybrid-overlay/props';

export const useColorMode = () => {
  const { colorMode: context } = React.useContext<IHybridContextProps>(
    HybridContext
  );
  if (context === undefined) {
    throw new Error('useColorMode must be used within a NativeBaseProvider');
  }
  return context;
};

export function useColorModeValue(light: any, dark: any) {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}

export function useModeManager(
  initialColorMode: ColorMode,
  colorModeManager?: StorageManager
) {
  const [colorMode, setRawMode] = useState<ColorMode | undefined>();

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
        setRawMode(value);
      })();
    } else {
      setRawMode(initialColorMode);
    }
  }, [initialColorMode, colorModeManager]);

  return { colorMode, setColorMode };
}

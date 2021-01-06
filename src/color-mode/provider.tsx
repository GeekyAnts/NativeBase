import React, { useState, useEffect } from 'react';
import type { ColorMode, StorageManager } from './utils';
export interface ColorModeOptions {
  initialColorMode?: ColorMode;
  useSystemColorMode?: boolean;
}

export type IColorModeProviderProps = {
  value?: ColorMode;
  children?: React.ReactNode;
  options: ColorModeOptions;
  colorModeManager?: StorageManager;
};

interface ColorModeContextType {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (value: any) => void;
}

export const ColorModeContext = React.createContext({} as ColorModeContextType);

function useModeManager(
  initialColorMode: ColorMode,
  colorModeManager?: StorageManager
) {
  const [colorMode, setRawMode] = useState<ColorMode | undefined>();

  async function getModeNow() {
    if (colorModeManager) {
      let value = await colorModeManager.get(initialColorMode);
      setRawMode(value);
    } else {
      setRawMode(initialColorMode);
    }
  }
  async function setColorMode(val: ColorMode) {
    if (colorModeManager) {
      await colorModeManager.set(val);
    }
    setRawMode(val);
  }
  useEffect(() => {
    getModeNow();
  }, []);

  return { colorMode, setColorMode };
}

export function ColorModeProvider(props: any) {
  const {
    value,
    children,
    options: { initialColorMode },
    colorModeManager,
  } = props;

  const { colorMode, setColorMode } = useModeManager(
    initialColorMode,
    colorModeManager
  );

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }, [colorMode, setColorMode]);

  const context = {
    colorMode: (value ?? colorMode) as ColorMode,
    toggleColorMode: value ? () => {} : toggleColorMode,
    setColorMode: value ? () => {} : setColorMode,
  };
  return (
    <ColorModeContext.Provider value={context}>
      {children}
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

export function useColorModeValue(light: any, dark: any) {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}

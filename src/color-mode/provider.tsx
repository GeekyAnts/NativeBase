import React from 'react';
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

export function ColorModeProvider(props: any) {
  const {
    value,
    children,
    options: { initialColorMode },
    colorModeManager,
  } = props;

  const [colorMode, rawSetColorMode] = React.useState<ColorMode | undefined>(
    colorModeManager ? colorModeManager.get(initialColorMode) : initialColorMode
  );
  const setColorMode = React.useCallback(
    (val: ColorMode) => {
      if (colorModeManager) {
        colorModeManager.set(val);
      }
      rawSetColorMode(val);
    },
    [colorModeManager]
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
  return colorMode === 'light' ? light : dark;
}

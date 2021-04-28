import React from 'react';
import { HybridContext } from './Context';
import { useModeManager } from './../color-mode/hooks';
import type { IColorModeProviderProps } from './../color-mode';

const HybridProvider = ({
  children,
  options: {
    initialColorMode = 'light',
    accessibleColors: isTextColorAccessible = false,
  },
  colorModeManager,
}: IColorModeProviderProps) => {
  // Color-mode content
  const { colorMode, setColorMode } = useModeManager(
    initialColorMode,
    colorModeManager
  );
  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }, [colorMode, setColorMode]);

  // Accessible color hook
  const [accessibleColors, setAccessibleColors] = React.useState<boolean>(
    isTextColorAccessible
  );

  return (
    <HybridContext.Provider
      value={{
        colorMode: {
          colorMode,
          toggleColorMode,
          setColorMode,
          accessibleColors,
          setAccessibleColors,
        },
      }}
    >
      {children}
    </HybridContext.Provider>
  );
};

export default HybridProvider;

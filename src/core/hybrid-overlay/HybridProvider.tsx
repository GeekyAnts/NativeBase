import React from 'react';
import { Platform } from 'react-native';
import { HybridContext } from './Context';
import { useModeManager } from './../color-mode/hooks';
import type { IColorModeProviderProps } from './../color-mode';
import { keyboardDismissHandlerManager } from '../../hooks';

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

  React.useEffect(() => {
    let escapeKeyListener: any = null;

    if (Platform.OS === 'web') {
      escapeKeyListener = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          if (keyboardDismissHandlerManager.length() > 0) {
            const lastHandler: any = keyboardDismissHandlerManager.pop();
            lastHandler();
          }
        }
      };
      document.addEventListener('keydown', escapeKeyListener);
    }

    return () => {
      if (Platform.OS === 'web') {
        document.removeEventListener('keydown', escapeKeyListener);
      }
    };
  }, []);

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

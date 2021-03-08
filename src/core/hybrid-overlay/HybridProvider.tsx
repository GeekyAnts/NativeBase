import React from 'react';
import type { IPopoverConfig } from './../Popover/types';
import type { IOverlayConfig } from './../Overlay/types';
import { HybridContext } from './Context';
import OverlayWrapper from '../Overlay/Wrapper';
import PopoverWrapper from '../Popover/Wrapper';
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
  // Popover content
  const [popoverItem, setPopoverItem] = React.useState(null);
  const [popoverConfig, setPopoverConfig] = React.useState<IPopoverConfig>({
    triggerRef: null,
    placeOverTriggerElement: undefined,
    onClose: null,
    animationDuration: 200,
  });

  // Overlay content
  const [overlayItem, setOverlayItem] = React.useState(null);
  const [overlayConfig, setOverlayConfig] = React.useState<IOverlayConfig>({
    disableOverlay: undefined,
    position: 'center',
    backgroundColor: '#161616',
    animationDuration: 400,
    closeOnPress: false,
    onClose: (_a: any) => {},
  });

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
        popover: {
          setPopoverItem,
          defaultConfig: popoverConfig,
          setConfig: setPopoverConfig,
          parentComponentConfig: popoverConfig.parentComponentConfig,
        },
        overlay: {
          setOverlayItem,
          defaultConfig: overlayConfig,
          setConfig: setOverlayConfig,
        },
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
      <OverlayWrapper
        overlayItem={overlayItem}
        overlayConfig={overlayConfig}
        setOverlayItem={setOverlayItem}
      />
      <PopoverWrapper
        popoverItem={popoverItem}
        popoverConfig={popoverConfig}
        setPopoverItem={setPopoverItem}
      />
    </HybridContext.Provider>
  );
};

export default HybridProvider;

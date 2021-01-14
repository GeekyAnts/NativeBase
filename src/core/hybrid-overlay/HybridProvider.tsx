import React from 'react';
import type { IPopoverConfig } from './../Popover/types';
import type { IOverlayConfig } from './../Overlay/types';
import { HybridContext } from './Context';
import { Wrapper as OverlayWrapper } from '../Overlay/Wrapper';
import { Wrapper as PopoverWrapper } from '../Popover/Wrapper';
import { useModeManager } from './../color-mode/hooks';
import type { ColorMode } from './../color-mode/types';

// TODO: add types
const HybridProvider = ({
  children,
  options: { initialColorMode },
  colorModeManager,
  value,
}: {
  children: any;
  options: any;
  colorModeManager: any;
  value?: any;
}) => {
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
          colorMode: (value ?? colorMode) as ColorMode,
          toggleColorMode: value ? () => {} : toggleColorMode,
          setColorMode: value ? () => {} : setColorMode,
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
        popoverConfig={popoverConfig}
        popoverItem={popoverItem}
        setPopoverItem={setPopoverItem}
      />
    </HybridContext.Provider>
  );
};

export default HybridProvider;

import React from 'react';
import type { IPopoverConfig } from './../Popover/props';
import type { IOverlayConfig } from './../Overlay/props';
import { HybridContext } from './Context';
import { Wrapper as OverlayWrapper } from '../Overlay/Wrapper';
import { Wrapper as PopoverWrapper } from '../Popover/Wrapper';

const HybridProvider = ({ children }: { children: any }) => {
  const [popoverItem, setPopoverItem] = React.useState(null);
  const [popoverConfig, setPopoverConfig] = React.useState<IPopoverConfig>({
    triggerRef: null,
    placeOverTriggerElement: undefined,
    onClose: null,
    animationDuration: 200,
  });

  const [overlayItem, setOverlayItem] = React.useState(null);
  const [overlayConfig, setOverlayConfig] = React.useState<IOverlayConfig>({
    disableOverlay: undefined,
    position: 'center',
    backgroundColor: '#161616',
    animationDuration: 400,
    closeOnPress: false,
    onClose: (_a: any) => {},
  });
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

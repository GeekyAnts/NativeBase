import React from 'react';
import type { IPopoverConfig } from './props';
import { HybridContext } from './../HybridOverlay/Context';
import type { IHybridContextProps } from './../HybridOverlay/props';

export const usePopover = () => {
  const {
    popover: {
      setPopoverItem,
      defaultConfig,
      setConfig,
      parentComponentConfig,
    },
  }: IHybridContextProps = React.useContext(HybridContext);

  const closePopover = () => {
    setPopoverItem(null);
    setConfig({ ...defaultConfig, parentComponentConfig: null });
  };

  const setPopover = (component: React.ReactNode, config?: IPopoverConfig) => {
    config && setConfig({ ...defaultConfig, ...config });
    setPopoverItem(component);
  };
  return { closePopover, setPopover, parentComponentConfig };
};

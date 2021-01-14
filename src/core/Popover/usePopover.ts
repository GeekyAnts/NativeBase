import React from 'react';
import type { IPopoverConfig } from './types';
import { HybridContext } from './../hybrid-overlay/Context';
import type { IHybridContextProps } from './../hybrid-overlay/types';

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

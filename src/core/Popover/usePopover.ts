import React from 'react';
import { PopoverContext } from './Context';
import type { IPopoverContextProps, IPopoverConfig } from './props';

export const usePopover = () => {
  const {
    setPopoverItem,
    defaultConfig,
    setConfig,
  }: IPopoverContextProps = React.useContext(PopoverContext);
  const closePopover = () => {
    setPopoverItem(null);
  };

  const setPopover = (component: React.ReactNode, config?: IPopoverConfig) => {
    config && setConfig({ ...defaultConfig, ...config });
    setPopoverItem(component);
  };
  return { closePopover, setPopover };
};

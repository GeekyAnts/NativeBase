import React from 'react';
import { PopoverContext } from './Context';
import type { IPopoverConfig, IPopoverContextProps } from './props';

export const usePopover = () => {
  const {
    setPopoverItem,
    defaultConfig,
    setConfig,
    parentComponentConfig,
  }: IPopoverContextProps = React.useContext(PopoverContext);

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

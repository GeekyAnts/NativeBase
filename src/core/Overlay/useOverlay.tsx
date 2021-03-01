import React from 'react';
import type { IuseOverlayProps, IOverlayConfig } from './types';
import { HybridContext } from './../hybrid-overlay/Context';
import type { IHybridContextProps } from './../hybrid-overlay/types';

export const useOverlay: IuseOverlayProps = () => {
  const {
    overlay: { setOverlayItem, defaultConfig, setConfig },
  }: IHybridContextProps = React.useContext(HybridContext);
  const closeOverlay = () => {
    setOverlayItem(null);
  };

  const setOverlay = (component: React.ReactNode, config?: IOverlayConfig) => {
    config && setConfig({ ...defaultConfig, ...config });
    setOverlayItem(component);
  };
  return { closeOverlay, setOverlay };
};

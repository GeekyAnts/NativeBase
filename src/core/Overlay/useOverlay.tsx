import React from 'react';
import type { IuseOverlayProps } from './props';
import { HybridContext } from './../HybridOverlay/Context';
import type { IHybridContextProps } from './../HybridOverlay/props';

export const useOverlay: IuseOverlayProps = () => {
  const {
    overlay: { setOverlayItem, defaultConfig, setConfig },
  }: IHybridContextProps = React.useContext(HybridContext);
  const closeOverlay = () => {
    setOverlayItem(null);
  };
  type configtype = {
    disableOverlay?: boolean;
    position?: string;
    backgroundColor?: string;
    onClose?: any;
    closeOnPress?: boolean;
  };
  const setOverlay = (component: React.ReactNode, config?: configtype) => {
    config && setConfig({ ...defaultConfig, ...config });
    setOverlayItem(component);
  };
  return { closeOverlay, setOverlay };
};

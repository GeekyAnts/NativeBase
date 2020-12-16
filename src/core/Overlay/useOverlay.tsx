import React from 'react';
import type { IOverlayContextProps, IuseOverlayProps } from './props';
import { OverlayContext } from './Context';

export const useOverlay: IuseOverlayProps = () => {
  const {
    setOverlayItem,
    defaultConfig,
    setConfig,
  }: IOverlayContextProps = React.useContext(OverlayContext);
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

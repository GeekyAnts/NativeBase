import React from 'react';
import type { IuseOverlayProps } from './types';
import { HybridContext } from './../hybrid-overlay/Context';
import type { IHybridContextProps } from './../hybrid-overlay/types';

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
  const setOverlay = (
    component: React.ReactNode,
    config?: configtype,
    onOverlaySet?: any
  ) => {
    config && setConfig({ ...defaultConfig, ...config });
    setOverlayItem(component);
    onOverlaySet ? onOverlaySet() : null; // callback called when overlayItem is set, used for onShow in Modal
  };
  return { closeOverlay, setOverlay };
};

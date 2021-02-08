import React from 'react';
import { useOverlay } from '../../../core/Overlay';
import Snackbar from './Snackbar';
import type { IsetSnackbar, IuseSnackbarProps } from './types';

export const useSnackbar: IuseSnackbarProps = () => {
  const { closeOverlay, setOverlay } = useOverlay();
  const defaultConfig = {
    enableOverlay: false,
    autoHideDuration: 5000,
    accessibilityAnnouncement: '',
  };

  const setSnackbar: IsetSnackbar = (component, config) => {
    config = {
      ...defaultConfig,
      ...config,
    };
    const { autoHideDuration = 5000, enableOverlay, ...rest } = config;
    setOverlay(
      <Snackbar autoHideDuration={autoHideDuration} {...rest}>
        {component}
      </Snackbar>,
      {
        disableOverlay: !enableOverlay,
      }
    );
    setTimeout(() => {
      closeOverlay();
    }, autoHideDuration);
  };
  return { setSnackbar };
};

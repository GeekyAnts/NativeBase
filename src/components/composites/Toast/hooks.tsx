import React from 'react';
import { useOverlay } from '../../../core/Overlay';
import ToastItem from './ToastItem';
import type { IsetToastProps } from './props';

export const useToast = () => {
  const { closeOverlay, setOverlay } = useOverlay();

  const setToast = ({
    title,
    duration = 2000,
    position = 'bottom',
    offset,
  }: IsetToastProps) => {
    setTimeout(() => {
      closeOverlay();
    }, duration);
    setOverlay(<ToastItem title={title} offset={offset} />, {
      position,
      disableOverlay: true,
    });
  };
  // const [, updateToast] = useToastManager();
  return { setToast };
};

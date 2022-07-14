import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { ActionSheetContext } from './ActionSheetContext';
import { Platform } from 'react-native';

const Actionsheet = (
  { children, hideDragIndicator = false, ...props }: IActionsheetProps,
  ref: any
) => {
  const {
    isOpen,
    disableOverlay,
    onClose,
    ...resolvedProps
  } = usePropsResolution('Actionsheet', props);

  //Fixing overlay position for Web due to scrollView issue
  let overlayStyle: any = Platform.OS === 'web' ? { position: 'fixed' } : {};

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      {...resolvedProps}
      _overlay={{ style: overlayStyle, ...resolvedProps?._overlay }}
      overlayVisible={disableOverlay ? false : true}
      closeOnOverlayClick={disableOverlay ? false : true}
      ref={ref}
      size="full"
    >
      <ActionSheetContext.Provider value={{ hideDragIndicator }}>
        {children}
      </ActionSheetContext.Provider>
    </Modal>
  );
};

export default memo(forwardRef(Actionsheet));

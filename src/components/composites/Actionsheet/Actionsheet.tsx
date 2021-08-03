import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { ActionSheetContext } from './ActionSheetContext';

const Actionsheet = (
  { children, hideDragIndicator = false, ...props }: IActionsheetProps,
  ref: any
) => {
  const { isOpen, disableOverlay, onClose, ...newProps } = usePropsResolution(
    'Actionsheet',
    props
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      justifyContent="flex-end"
      //@ts-ignore - internal use only
      animationPreset="slide"
      {...newProps}
      overlayVisible={disableOverlay ? false : true}
      closeOnOverlayClick={disableOverlay ? false : true}
      ref={ref}
    >
      <ActionSheetContext.Provider value={{ hideDragIndicator }}>
        {children}
      </ActionSheetContext.Provider>
    </Modal>
  );
};

export default memo(forwardRef(Actionsheet));

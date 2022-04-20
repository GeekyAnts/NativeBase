import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { ActionSheetContext } from './ActionSheetContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

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

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      {...resolvedProps}
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

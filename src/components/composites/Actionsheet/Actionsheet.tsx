import React from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetProps } from './types';
import { useThemeProps } from '../../../hooks';

const Actionsheet = ({ children, ...props }: IActionsheetProps, ref: any) => {
  const { isOpen, disableOverlay, onClose, ...newProps } = useThemeProps(
    'Actionsheet',
    props
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      justifyContent="flex-end"
      {...newProps}
      overlayVisible={disableOverlay ? false : true}
      closeOnOverlayClick={disableOverlay ? false : true}
      ref={ref}
    >
      {children}
    </Modal>
  );
};

export default React.memo(React.forwardRef(Actionsheet));

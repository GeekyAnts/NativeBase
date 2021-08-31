import React, { memo, forwardRef } from 'react';
import { ModalContext } from './Context';
import { usePropsResolution } from '../../../hooks';
import Button from '../../primitives/Button/Button';
import { CloseIcon } from '../../primitives/Icon/Icons';
import type { IButtonProps } from '../../primitives/Button';

const ModalCloseButton = (props: IButtonProps, ref?: any) => {
  const { _icon, ...resolvedProps } = usePropsResolution(
    'ModalCloseButton',
    props
  );
  const { handleClose } = React.useContext(ModalContext);
  return (
    <Button
      variant="ghost"
      {...resolvedProps}
      onPress={handleClose}
      accessibilityLabel="Close dialog"
      ref={ref}
    >
      <CloseIcon {..._icon} />
    </Button>
  );
};

export default memo(forwardRef(ModalCloseButton));

import React, { memo, forwardRef } from 'react';
import { AlertDialogContext } from './Context';
import { usePropsResolution } from '../../../hooks';
import Button from '../../primitives/Button/Button';
import { CloseIcon } from '../../primitives/Icon/Icons';
import type { IButtonProps } from '../../primitives/Button';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AlertDialogCloseButton = (props: IButtonProps, ref?: any) => {
  const newProps = usePropsResolution('AlertDialogCloseButton', props);
  const { _icon, ...rest } = newProps;
  const { handleClose } = React.useContext(AlertDialogContext);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Button
      variant="ghost"
      {...rest}
      onPress={handleClose}
      accessibilityLabel="Close dialog"
      ref={ref}
    >
      <CloseIcon {..._icon} />
    </Button>
  );
};

export default memo(forwardRef(AlertDialogCloseButton));

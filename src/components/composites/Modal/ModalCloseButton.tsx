import React from 'react';
import { ModalContext } from './Context';
import { useThemeProps } from '../../../hooks';
import Button from '../../primitives/Button/Button';
import Icon from '../../primitives/Icon';
import type { IIconButtonProps } from 'native-base';

const ModalCloseButton = (props: Omit<IIconButtonProps, 'icon'>, ref?: any) => {
  const newProps = useThemeProps('ModalCloseButton', props);
  const { _icon, ...rest } = newProps;
  const { handleClose } = React.useContext(ModalContext);
  return (
    <Button
      variant="ghost"
      {...rest}
      onPress={handleClose}
      accessibilityLabel="Close dialog"
      ref={ref}
    >
      <Icon name="close" {..._icon} />
    </Button>
  );
};

export default React.memo(React.forwardRef(ModalCloseButton));

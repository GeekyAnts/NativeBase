import React from 'react';
import { ModalContext } from './Context';
import { useThemeProps } from '../../../hooks';
import { IconButton } from '..';
import { CloseIcon } from '../../primitives/Icon/Icons';
import type { IIconButtonProps } from 'native-base';

const ModalCloseButton = (props: Omit<IIconButtonProps, 'icon'>, ref?: any) => {
  const newProps = useThemeProps('ModalCloseButton', props);
  const { _icon, ...rest } = newProps;
  const { toggleVisible, toggleOnClose } = React.useContext(ModalContext);
  return (
    <IconButton
      accessibilityLabel="Close dialog"
      icon={<CloseIcon {..._icon} />}
      {...rest}
      onPress={() => {
        toggleVisible(false);
        toggleOnClose(false);
      }}
      ref={ref}
    />
  );
};

export default React.memo(React.forwardRef(ModalCloseButton));

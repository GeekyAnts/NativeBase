import React from 'react';
import { ModalContext } from './Context';
import { useThemeProps } from '../../../hooks';
import { IconButton } from '..';
import Icon from '../../primitives/Icon';
import type { IIconButtonProps } from 'native-base';

const ModalCloseButton = (props: IIconButtonProps) => {
  const newProps = useThemeProps('ModalCloseButton', props);
  const { _icon, ...rest } = newProps;
  const { toggleVisible, toggleOnClose } = React.useContext(ModalContext);
  return (
    <IconButton
      accessibilityLabel="Close dialog"
      icon={<Icon name="close" {..._icon} />}
      {...rest}
      onPress={() => {
        toggleVisible(false);
        toggleOnClose(false);
      }}
    />
  );
};

export default React.memo(ModalCloseButton);

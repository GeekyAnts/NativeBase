import React from 'react';
import CloseButton, { ICloseButtonProps } from '../../composites/CloseButton';
import { ModalContext } from './Context';
import { useThemeProps } from '../../../hooks';

const ModalCloseButton = (props: ICloseButtonProps) => {
  const newProps = useThemeProps('ModalCloseButton', props);
  const { toggleVisible, toggleOnClose } = React.useContext(ModalContext);
  return (
    <CloseButton
      {...newProps}
      // accessibilityLabel="Close dialog"
      onPress={() => {
        toggleVisible(false);
        toggleOnClose(false);
      }}
    />
  );
};

export default React.memo(ModalCloseButton);

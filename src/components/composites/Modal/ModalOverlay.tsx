import React from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../../primitives/Box';
import { ModalContext } from './Context';
import { useThemeProps } from '../../../hooks';

const ModalOverlay = ({ children, ...props }: any) => {
  const newProps = useThemeProps('ModalOverlay', props);
  const { toggleVisible, toggleOnClose } = React.useContext(ModalContext);

  return (
    <Box {...newProps}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
        accessible={false}
        onPress={
          newProps.closeOnOverlayClick === false
            ? () => {}
            : () => {
                toggleVisible(false);
                toggleOnClose(false);
              }
        }
      />
      {children}
    </Box>
  );
};

export default React.memo(ModalOverlay);

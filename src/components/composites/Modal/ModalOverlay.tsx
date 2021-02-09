import React from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../../primitives/Box';
import { ModalContext } from './Context';
const ModalOverlay = ({ children, ...props }: any) => {
  const { toggleVisible, toggleOnClose, newProps } = React.useContext(
    ModalContext
  );

  return (
    <Box {...props} style={newProps.modalOverlayStyle}>
      <TouchableOpacity
        style={newProps.modalOverlayStyle}
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

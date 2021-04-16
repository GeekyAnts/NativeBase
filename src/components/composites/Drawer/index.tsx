import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { Box, Backdrop } from 'native-base';

const Drawer = ({
  children,
  isOpen,
  onClose,
}: {
  children?: any;
  isOpen: boolean;
  onClose?: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <OverlayContainer>
      <Backdrop onClick={onClose ? onClose : () => {}} />
      <Box
        top={0}
        bottom={0}
        left={0}
        bg="white"
        width={'30%'}
        minWidth={'72'}
        maxW="96"
        h={'100%'}
        opacity={1}
      >
        {children ? children : null}
      </Box>
    </OverlayContainer>
  );
};

export default Drawer;

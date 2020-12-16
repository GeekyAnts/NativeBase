import React from 'react';
import { Box } from '../components/primitives';
import OverlayProvider from './Overlay/OverlayProvider';
import { useColorModeValue } from '../color-mode';

const NativeBaseWrapper = ({ children, ...props }: any) => {
  return (
    <Box
      flex={1}
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      {...props}
      bg={useColorModeValue(`gray.50`, `gray.800`)}
    >
      <OverlayProvider>{children}</OverlayProvider>
    </Box>
  );
};

export default NativeBaseWrapper;

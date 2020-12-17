import React from 'react';
import { Box, IBoxProps } from '../components/primitives';
import OverlayProvider from './Overlay/OverlayProvider';
import { useColorModeValue } from '../color-mode';
import { SafeAreaView, StyleSheet } from 'react-native';

type INativeBaseWrapperProps = IBoxProps & {
  disableSafeArea?: boolean;
};

const NativeBaseWrapper = ({
  children,
  disableSafeArea,
  ...props
}: INativeBaseWrapperProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const defaultView = (
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

  return disableSafeArea ? (
    defaultView
  ) : (
    <SafeAreaView style={styles.container}>{defaultView}</SafeAreaView>
  );
};

export default NativeBaseWrapper;

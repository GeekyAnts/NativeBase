import React from 'react';
import OverlayProvider from './Overlay/OverlayProvider';
import { useColorModeValue } from '../color-mode';
import { SafeAreaView, StyleSheet } from 'react-native';
import { View } from 'native-base';
type INativeBaseWrapperProps = { children?: any; disableSafeArea?: boolean };

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
    <View {...props} bg={useColorModeValue(`gray.50`, `gray.800`)} flex={1}>
      <OverlayProvider>{children}</OverlayProvider>
    </View>
  );

  return disableSafeArea ? (
    defaultView
  ) : (
    <SafeAreaView style={styles.container}>{defaultView}</SafeAreaView>
  );
};

export default NativeBaseWrapper;

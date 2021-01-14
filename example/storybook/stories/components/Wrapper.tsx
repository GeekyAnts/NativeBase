import React from 'react';
import {
  View,
  NativeBaseProvider,
  useColorMode,
  IconButton,
  Icon,
  ColorMode,
  useColorModeValue,
} from 'native-base';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MyWrapper({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue(`gray.50`, `gray.800`)}
    >
      {children}
      <IconButton
        position="absolute"
        top={5}
        right={5}
        onPress={toggleColorMode}
        icon={
          <Icon
            name={colorMode === 'dark' ? 'light-up' : 'md-moon'}
            type={colorMode === 'dark' ? 'Entypo' : 'Ionicons'}
            size={6}
          />
        }
      />
    </View>
  );
}

export default ({ children, theme }: any) => {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@example-wrapper-mode');
        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        console.log(e);
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem('@example-wrapper-mode', value);
      } catch (e) {
        console.log(e);
      }
    },
  };
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      <MyWrapper>{children}</MyWrapper>
    </NativeBaseProvider>
  );
};

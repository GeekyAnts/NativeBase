import React from 'react';
import {
  Box,
  NativeBaseProvider,
  useColorMode,
  IconButton,
  MoonIcon,
  ColorMode,
  useColorModeValue,
  Tooltip,
  SunIcon,
} from 'native-base';
import type { StorageManager } from 'native-base';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MyWrapper({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue(`gray.50`, `gray.800`);

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
      safeAreaY
    >
      <Tooltip
        label={colorMode === 'dark' ? 'Enable light mode' : 'Enable dark mode'}
        placement="bottom right"
        openDelay={300}
        closeOnClick={false}
      >
        <IconButton
          position="absolute"
          top={12}
          right={8}
          onPress={toggleColorMode}
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        />
      </Tooltip>
      {children}
    </Box>
  );
}

export function RenderTestButton() {
  const [state, setState] = React.useState(1);
  return (
    <Box style={{ position: 'absolute', top: 10, left: 20 }}>
      <Button title={state.toString()} onPress={() => setState(state + 1)} />
    </Box>
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

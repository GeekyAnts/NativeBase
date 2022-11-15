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
  extendTheme,
  Button,
  Input,
} from 'native-base';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Config from '../../../nativebase.config';

const myTheme = extendTheme({
  space: {
    mySpace: '29px',
  },
  colors: {
    blue1: {
      '100': 'blue',
    },
  },

  components: {
    Link: {
      sizes: {
        mysize: 10,
      },
    },
    Button: {
      variants: {
        myBtn: {
          padding: 10,
        },
        myNewButton: ({ myPaddingX }: { myPaddingX: number }) => {
          return {
            padding: myPaddingX,
          };
        },

        // myNewButton1: (props: any) => {
        //   return {
        //     padding: props.padding,
        //   };
        // },
      },
      sizes: {
        newsize: ({ mySize }: { mySize: number }) => {
          return {
            padding: mySize,
          };
        },
      },
    },

    Input: {
      variants: {
        newsize: ({ mySize }: { mySize: number }) => {
          return {
            padding: mySize,
          };
        },

        newsize1: (props: any) => {
          return {
            padding: props.padding,
          };
        },
      },
      sizes: {
        'my-size': {
          padding: 2,
        },
      },
    },

    Checkbox: {
      sizes: {
        myBtn: {
          padding: 10,
        },
        myNewButton: ({ myPadding }: { myPadding: any }) => {
          return {
            padding: myPadding,
          };
        },
      },
    },

    Box: {
      variants: {
        myBtn: {
          padding: 10,
        },
      },
    },
  },
});

type MyThemeType = typeof myTheme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

function MyWrapper({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue(`gray.50`, `gray.800`);

  return (
    <Box
      flex={1}
      px="3"
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
          zIndex={4}
          onPress={toggleColorMode}
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          size="lg"
        />
      </Tooltip>
      {children}
    </Box>
  );
}

export function RenderTestButton() {
  const [state, setState] = React.useState(1);
  return (
    <Box style={{ position: 'absolute', top: 10, left: 20 }} m={2} bg="red.100">
      <Input m={2} size="my-size" />
      <Button
        size=""
        variant={'myNewButton'}
        // title={state.toString()}
        onPress={() => setState(state + 1)}
      />
    </Box>
  );
}
export default ({ children, theme }: any) => {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        const val = await AsyncStorage.getItem('@example-wrapper-mode');
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
    <NativeBaseProvider
      theme={theme}
      config={Config}
      colorModeManager={colorModeManager}
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
      isSSR
    >
      <MyWrapper>{children}</MyWrapper>
    </NativeBaseProvider>
  );
};

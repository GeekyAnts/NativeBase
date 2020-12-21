import React from 'react';
import {
  View,
  NativeBaseProvider,
  useColorMode,
  IconButton,
  Icon,
} from 'native-base';

function MyWrapper({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <View
      flex={1}
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
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
  return (
    <NativeBaseProvider theme={theme}>
      <MyWrapper>{children}</MyWrapper>
    </NativeBaseProvider>
  );
};

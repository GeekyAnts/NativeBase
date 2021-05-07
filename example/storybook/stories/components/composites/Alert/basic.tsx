import React from 'react';
import { Alert, Box, NativeBaseProvider } from 'native-base';
export const Basic = () => {
  return (
    <Box mx={3} w="90%">
      <Alert>
        <Alert.Icon />
        <Alert.Title>Alert Title</Alert.Title>
        <Alert.Description>
          Alert Description should be a brief about the Alert Message.
        </Alert.Description>
      </Alert>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Basic />
    </NativeBaseProvider>
  );
};

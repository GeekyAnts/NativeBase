import React from 'react';
import { Stack, Alert, NativeBaseProvider, Center } from 'native-base';

export function Status() {
  return (
    <Stack space={3}>
      {['error', 'warning', 'info', 'success'].map((key) => {
        return (
          <Alert status={key}>
            <Alert.Icon />
            <Alert.Title>{`This is an ${key} alert`}</Alert.Title>
          </Alert>
        );
      })}
    </Stack>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Status />
      </Center>
    </NativeBaseProvider>
  );
};

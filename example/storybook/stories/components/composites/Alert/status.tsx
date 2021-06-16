import React from 'react';
import { Stack, Alert } from 'native-base';

export function Example() {
  return (
    <Stack space={3} w="100%">
      {['error', 'warning', 'info', 'success'].map((key) => {
        return (
          <Alert status={key} w="100%">
            <Alert.Icon />
            <Alert.Title
              flexShrink={1}
            >{`This is an ${key} alert`}</Alert.Title>
          </Alert>
        );
      })}
    </Stack>
  );
}

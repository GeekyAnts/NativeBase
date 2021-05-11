import React from 'react';
import { Stack, Alert } from 'native-base';

export function Example() {
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

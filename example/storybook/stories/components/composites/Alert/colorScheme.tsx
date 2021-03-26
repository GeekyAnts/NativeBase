import React from 'react';
import { Stack, Alert, HStack } from 'native-base';

export default function () {
  return (
    <HStack>
      {['teal', 'red', 'yellow'].map((key: any) => (
        <Stack space={3} mx={3}>
          <Alert colorScheme={key} key={key}>
            <Alert.Icon />
            <Alert.Title>This is an error alert</Alert.Title>
          </Alert>
        </Stack>
      ))}
    </HStack>
  );
}

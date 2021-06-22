import React from 'react';
import { Stack, Alert, Text } from 'native-base';

export function Example() {
  return (
    <Stack space={4} mx={3} w="100%">
      {['teal', 'red', 'yellow'].map((key: any) => (
        <Alert colorScheme={key} key={key}>
          <Alert.Icon />
          <Alert.Title style={{ flexDirection: 'row' }} flexShrink={1}>
            <Text>This is a {key} alert</Text>
          </Alert.Title>
        </Alert>
      ))}
    </Stack>
  );
}

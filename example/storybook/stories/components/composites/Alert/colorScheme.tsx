import React from 'react';
import { Stack, Alert, Box, Text } from 'native-base';

export function Example() {
  return (
    <Box w="90%">
      <Stack space={4} mx={3}>
        {['teal', 'red', 'yellow'].map((key: any) => (
          <Alert colorScheme={key} key={key}>
            <Alert.Icon />
            <Alert.Title>
              <Text>This is a {key} alert</Text>
            </Alert.Title>
          </Alert>
        ))}
      </Stack>
    </Box>
  );
}

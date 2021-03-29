import React from 'react';
import { Stack, Alert, Box } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <Stack space={4} mx={3}>
        {['teal', 'red', 'yellow'].map((key: any) => (
          <Alert colorScheme={key} key={key}>
            <Alert.Icon />
            <Alert.Title>This is a {key} alert</Alert.Title>
          </Alert>
        ))}
      </Stack>
    </Box>
  );
}

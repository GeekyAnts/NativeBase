import React from 'react';
import { Stack, Alert, Box } from 'native-base';

export default function () {
  return (
    <Box>
      <Stack space={4} mx={3}>
        {['teal', 'red', 'yellow'].map((key: any) => (
          <Alert colorScheme={key} key={key}>
            <Alert.Icon />
            <Alert.Title>This is an error alert</Alert.Title>
          </Alert>
        ))}
      </Stack>
    </Box>
  );
}

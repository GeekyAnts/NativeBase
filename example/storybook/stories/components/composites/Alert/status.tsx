import React from 'react';
import { Stack, Alert, HStack } from 'native-base';

export default function () {
  return (
    <HStack>
      {['subtle', 'solid', 'outline'].map((key: any) => (
        <Stack space={3} mx={3}>
          <Alert status="error" colorScheme="error" variant={key} key={key}>
            <Alert.Icon />
            <Alert.Title>This is an error alert</Alert.Title>
          </Alert>
          <Alert status="warning" colorScheme="warning" variant={key}>
            <Alert.Icon />
            <Alert.Title>This is a warning alert</Alert.Title>
          </Alert>
          <Alert status="info" colorScheme="info" variant={key}>
            <Alert.Icon />
            <Alert.Title>This is an info alert</Alert.Title>
          </Alert>
          <Alert status="success" colorScheme="success" variant={key}>
            <Alert.Icon />
            <Alert.Title>This is a success alert</Alert.Title>
          </Alert>
        </Stack>
      ))}
    </HStack>
  );
}

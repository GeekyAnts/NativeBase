import React from 'react';
import { Stack, AlertTitle, Alert, AlertIcon, HStack } from 'native-base';

export default function () {
  return (
    <HStack>
      {['subtle', 'solid', 'outline'].map((key: any) => (
        <Stack space={3} mx={3}>
          <Alert status="error" variant={key}>
            <AlertIcon />
            <AlertTitle>This is an error alert</AlertTitle>
          </Alert>
          <Alert status="warning" variant={key}>
            <AlertIcon />
            <AlertTitle>This is a warning alert</AlertTitle>
          </Alert>
          <Alert status="info" variant={key}>
            <AlertIcon />
            <AlertTitle>This is an info alert</AlertTitle>
          </Alert>
          <Alert status="success" variant={key}>
            <AlertIcon />
            <AlertTitle>This is a success alert</AlertTitle>
          </Alert>
        </Stack>
      ))}
    </HStack>
  );
}

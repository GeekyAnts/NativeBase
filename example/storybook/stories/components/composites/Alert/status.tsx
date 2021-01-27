import React from 'react';
import { Stack, AlertTitle, Alert, AlertIcon } from 'native-base';

export default function () {
  return (
    <Stack space={3} mx={3}>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>This is an error alert</AlertTitle>
      </Alert>
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>This is a warning alert</AlertTitle>
      </Alert>
      <Alert status="info">
        <AlertIcon />
        <AlertTitle>This is an info alert</AlertTitle>
      </Alert>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>This is a success alert</AlertTitle>
      </Alert>
    </Stack>
  );
}

import React from 'react';
import { Stack, AlertDescription, Alert, AlertIcon } from 'native-base';

export default function () {
  return (
    <Stack space={3} mx={3}>
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>There was an error.</AlertDescription>
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <AlertDescription>Data uploaded to the server.</AlertDescription>
      </Alert>

      <Alert status="warning">
        <AlertIcon />
        <AlertDescription>Your account is about expire</AlertDescription>
      </Alert>

      <Alert status="default">
        <AlertIcon />
        <AlertDescription>NativeBase is going live soon.</AlertDescription>
      </Alert>
    </Stack>
  );
}

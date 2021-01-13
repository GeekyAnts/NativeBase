import React from 'react';
import { Alert, Stack, AlertTitle, AlertIcon } from 'native-base';

export default function () {
  return (
    <Stack space={4} mx={3}>
      <Alert variant="solid" status="teal">
        <AlertIcon />
        <AlertTitle>Alert Solid Variant</AlertTitle>
      </Alert>
      <Alert variant="left-accent" status="success">
        <AlertIcon />
        <AlertTitle>Alert Left Accent Variant</AlertTitle>
      </Alert>
      <Alert variant="top-accent" status="error">
        <AlertIcon />
        <AlertTitle>Alert Top Accent Variant</AlertTitle>
      </Alert>
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Alert Default/Subtle Variant</AlertTitle>
      </Alert>
    </Stack>
  );
}

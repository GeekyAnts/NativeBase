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
      <Alert status="warning" variant="subtle">
        <AlertIcon />
        <AlertTitle>Alert Default/Subtle Variant</AlertTitle>
      </Alert>
      <Alert status="info" variant="outline">
        <AlertIcon />
        <AlertTitle>Alert Outline Variant</AlertTitle>
      </Alert>
      <Alert status="info" variant="outline-light">
        <AlertIcon />
        <AlertTitle>Alert Outline Light Variant</AlertTitle>
      </Alert>
    </Stack>
  );
}

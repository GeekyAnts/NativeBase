import React from 'react';
import { Alert, Stack } from 'native-base';

export function Example() {
  return (
    <Stack space={4} mx={3} w="100%">
      <Alert variant="solid" colorScheme="teal">
        <Alert.Icon />
        <Alert.Title flexShrink={1}>Alert Solid Variant</Alert.Title>
      </Alert>

      <Alert variant="left-accent" status="success">
        <Alert.Icon />
        <Alert.Title flexShrink={1}>Alert Left Accent Variant</Alert.Title>
      </Alert>

      <Alert variant="top-accent" status="error">
        <Alert.Icon />
        <Alert.Title flexShrink={1}>Alert Top Accent Variant</Alert.Title>
      </Alert>

      <Alert status="warning" variant="subtle">
        <Alert.Icon />
        <Alert.Title flexShrink={1}>Alert Default/Subtle Variant</Alert.Title>
      </Alert>

      <Alert status="info" variant="outline">
        <Alert.Icon />
        <Alert.Title flexShrink={1}>Alert Outline Variant</Alert.Title>
      </Alert>

      <Alert status="info" variant="outline-light">
        <Alert.Icon />
        <Alert.Title flexShrink={1}>Alert Outline Light Variant</Alert.Title>
      </Alert>
    </Stack>
  );
}

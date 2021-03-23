import React from 'react';
import { Alert, Box } from 'native-base';
export default function () {
  return (
    <Box mx={3}>
      <Alert status="warning" colorScheme="danger">
        <Alert.Icon />
        <Alert.Title>Alert Title</Alert.Title>
        <Alert.Description>description goes here</Alert.Description>
      </Alert>
    </Box>
  );
}

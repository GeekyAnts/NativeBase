import React from 'react';
import { Alert, CloseButton, Box } from 'native-base';
export default function () {
  return (
    <Box mx={3}>
      <Alert status="error">
        <Alert.Icon />
        <Alert.Title>Error Alert</Alert.Title>
        <Alert.Description>description goes here</Alert.Description>
        <CloseButton />
      </Alert>
    </Box>
  );
}

import React from 'react';
import { Alert, Box } from 'native-base';
export default function () {
  return (
    <Box mx={3}>
      <Alert>
        <Alert.Icon />
        <Alert.Title>Error Alert</Alert.Title>
        <Alert.Description>description goes here</Alert.Description>
      </Alert>
    </Box>
  );
}

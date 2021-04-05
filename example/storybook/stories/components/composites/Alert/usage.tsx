import React from 'react';
import { Alert, Box } from 'native-base';
export default function () {
  return (
    <Box mx={3} w="90%">
      <Alert>
        <Alert.Icon />
        <Alert.Title>Alert Title</Alert.Title>
        <Alert.Description>
          Alert Description should be a brief about the Alert Message.
        </Alert.Description>
      </Alert>
    </Box>
  );
}

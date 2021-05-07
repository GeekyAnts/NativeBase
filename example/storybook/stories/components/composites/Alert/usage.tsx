import React from 'react';
import { Alert, Box, CloseIcon } from 'native-base';
export default function () {
  return (
    <Box mx={3} w="90%">
      <Alert action={<CloseIcon size="sm" />}>
        <Alert.Icon />
        <Alert.Title>Alert Title</Alert.Title>
        <Alert.Description>
          Alert Description should be a brief about the Alert Message.
        </Alert.Description>
      </Alert>
    </Box>
  );
}

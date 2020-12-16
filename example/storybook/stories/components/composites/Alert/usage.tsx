import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertCloseButton,
  Box,
} from 'native-base';
export default function () {
  return (
    <Box mx={3}>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>description goes here</AlertDescription>
        <AlertCloseButton />
      </Alert>
    </Box>
  );
}

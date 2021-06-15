import React from 'react';
import { Alert } from 'native-base';

export const Example = () => {
  return (
    <Alert w="100%">
      <Alert.Icon />
      <Alert.Title>Alert Title</Alert.Title>
      <Alert.Description>
        Alert Description should be a brief about the Alert Message.
      </Alert.Description>
    </Alert>
  );
};

import React from 'react';
import { ZStack, Box } from 'native-base';

export const Example = () => {
  return (
    <ZStack alignItems="center" justifyContent="center">
      <Box bg="primary.400" size={64} rounded="md" />
      <Box bg="secondary.400" size={48} rounded="md" shadow={8} />
      <Box bg="emerald.400" size={32} rounded="md" shadow={8} />
    </ZStack>
  );
};

import React from 'react';
import { ZStack, Box } from 'native-base';

export default function () {
  return (
    <ZStack alignItems="center" justifyContent="center">
      <Box bg="primary.400" size={64} rounded="lg" />
      <Box bg="secondary.400" size={48} rounded="lg" shadow={8} />
      <Box bg="violet.400" size={32} rounded="lg" shadow={8} />
    </ZStack>
  );
}

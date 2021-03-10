import React from 'react';
import { ZStack, Box } from 'native-base';

export default function () {
  return (
    <ZStack alignItems="center" justifyContent="center">
      <Box bg="emerald.400" size={64} rounded="lg" />
      <Box bg="rose.400" size={48} rounded="lg" shadow={8} />
      <Box bg="lightBlue.400" size={32} rounded="lg" shadow={8} />
    </ZStack>
  );
}

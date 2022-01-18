import React from 'react';
import { Center, ZStack, Box } from 'native-base';

export const Example = () => {
  return (
    <Center h="96">
      <ZStack alignItems="center" justifyContent="center">
        <Box bg="indigo.700" size="64" rounded="lg" />
        <Box bg="indigo.500" size="48" rounded="lg" shadow={8} />
        <Box bg="indigo.300" size="32" rounded="lg" shadow={8} />
      </ZStack>
    </Center>
  );
};

import React from 'react';
import { ZStack, Box } from 'native-base';

export default function () {
  return (
    <ZStack mt={-20} ml={-20}>
      <Box bg="emerald.400" size={20} rounded="lg" />
      <Box bg="rose.400" mt={5} ml={5} size={20} rounded="lg" shadow={8} />
      <Box
        bg="lightBlue.400"
        mt={10}
        ml={10}
        size={20}
        rounded="lg"
        shadow={8}
      />
    </ZStack>
  );
}

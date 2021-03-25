import React from 'react';
import { CircularProgress, Heading, Center, VStack } from 'native-base';
export default function () {
  return (
    <Center>
      <Heading>Changing the ColorSchemes</Heading>
      <VStack mt={4} alignItems="center" space="lg">
        <CircularProgress value={60} colorScheme="primary" />
        <CircularProgress value={60} colorScheme="secondary" />
        <CircularProgress value={60} colorScheme="emerald" />
      </VStack>
    </Center>
  );
}

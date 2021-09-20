import React from 'react';
import { ScrollView, VStack, Center, useTheme, Heading } from 'native-base';
export const Example = () => {
  const { colors } = useTheme();
  return (
    <ScrollView _contentContainerStyle={{ px: '20px', mb: '4' }}>
      <Center mt="3" mb="4">
        <Heading fontSize="xl">Cyan</Heading>
      </Center>
      <VStack flex="1">
        {Object.keys(colors.cyan).map((key, index) => {
          if (index >= 1 && index <= 5)
            return (
              <Center py="4" px="32" bg={`cyan.${key}`}>
                {key}
              </Center>
            );
        })}
      </VStack>
      <Center mt="8" mb="4">
        <Heading fontSize="xl">Yellow</Heading>
      </Center>
      <VStack flex="1">
        {Object.keys(colors.cyan).map((key, index) => {
          if (index >= 1 && index <= 5)
            return (
              <Center py="4" px="32" bg={`yellow.${key}`}>
                {key}
              </Center>
            );
        })}
      </VStack>
      <Center mt="8" mb="4">
        <Heading fontSize="xl"> Violet</Heading>
      </Center>
      <VStack flex="1">
        {Object.keys(colors.violet).map((key, index) => {
          if (index >= 1 && index <= 5)
            return (
              <Center py="4" px="40" bg={`violet.${key}`}>
                {key}
              </Center>
            );
        })}
      </VStack>
    </ScrollView>
  );
};

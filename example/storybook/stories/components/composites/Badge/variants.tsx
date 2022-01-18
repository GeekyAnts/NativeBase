//@ts-nocheck
import React from 'react';
import { Badge, HStack, VStack, Box } from 'native-base';

export function Example() {
  return (
    <Box alignItems="center">
      <HStack space={4} mx={{ base: 'auto', md: '0' }}>
        {['solid', 'outline', 'subtle'].map((key) => (
          <VStack key={key} space={4}>
            <Badge variant={key} alignSelf="center">
              DEFAULT
            </Badge>
            <Badge colorScheme="success" alignSelf="center" variant={key}>
              SUCCESS
            </Badge>
            <Badge colorScheme="danger" alignSelf="center" variant={key}>
              DANGER
            </Badge>
            <Badge colorScheme="info" alignSelf="center" variant={key}>
              INFO
            </Badge>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
}

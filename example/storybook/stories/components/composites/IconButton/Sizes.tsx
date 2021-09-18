import React from 'react';
import { IconButton, Box, Center, Heading, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
export const Example = () => {
  return (
    <Center>
      <Heading mb="10">Sizes</Heading>
      <VStack space={4} alignItems="center">
        {['sm', 'md', 'lg'].map((size: any) => (
          <Box>
            <IconButton
              size={size}
              variant="solid"
              _icon={{
                as: MaterialIcons,
                name: 'menu',
              }}
            />
          </Box>
        ))}
      </VStack>
    </Center>
  );
};

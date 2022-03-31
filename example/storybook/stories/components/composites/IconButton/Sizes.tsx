import React from 'react';
import { IconButton, Center, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
export const Example = () => {
  return (
    <Center>
      <VStack space={4} alignItems="center">
        {['xs', 'sm', 'md', 'lg'].map((size: any) => (
          <IconButton
            size={size}
            variant="solid"
            _icon={{
              as: MaterialIcons,
              name: 'menu',
            }}
          />
        ))}
      </VStack>
    </Center>
  );
};

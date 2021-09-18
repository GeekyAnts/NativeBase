import React from 'react';
import { Center, IconButton, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
export const Example = () => {
  return (
    <Center>
      <VStack space={4} alignItems="center">
        {['outline', 'solid', 'ghost'].map((variant: any) => (
          <IconButton
            colorScheme="indigo"
            key={variant}
            variant={variant}
            _icon={{
              as: AntDesign,
              name: 'search1',
            }}
          />
        ))}
      </VStack>
    </Center>
  );
};

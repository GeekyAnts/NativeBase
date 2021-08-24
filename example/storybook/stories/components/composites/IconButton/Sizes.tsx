import React from 'react';
import { HStack, IconButton, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
export const Example = () => {
  return (
    <HStack space={2}>
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
    </HStack>
  );
};

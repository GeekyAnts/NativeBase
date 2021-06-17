import React from 'react';
import { HStack, IconButton, Icon, Box } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <HStack space={2}>
      {['sm', 'md', 'lg'].map((size: any) => (
        <Box>
          <IconButton
            size={size}
            variant="solid"
            icon={
              <Icon as={AntDesign} name="search1" color="white" size={size} />
            }
          />
        </Box>
      ))}
    </HStack>
  );
};

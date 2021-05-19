import React from 'react';
import { HStack, IconButton, Icon, Box } from 'native-base';
export const Example = () => {
  return (
    <HStack space={2}>
      {['sm', 'md', 'lg'].map((size: any) => (
        <Box>
          <IconButton
            size={size}
            variant="solid"
            icon={<Icon name={'menu'} color="white" size={size} />}
          />
        </Box>
      ))}
    </HStack>
  );
};
